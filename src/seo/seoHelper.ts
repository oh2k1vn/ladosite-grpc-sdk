import type { Metadata } from 'next';
import { type OptiFlowGrpcSDK } from '../client';
import { glog, formatSingleLine } from '../logger';
import type {
  SeoGlobalConfigData,
  SeoGlobalConfigResponse,
  SeoPageConfigData,
  SeoPageConfigResponse,
} from '../generated/Protos/seo';
import type { WrappedSeoServiceClient } from '../generated/wrapped-clients';
import { generateMetadata } from './generateMetadata';

export interface FetchSeoOptions {
  /**
   * Instance của OptiFlowGrpcSDK.
   */
  sdk?: OptiFlowGrpcSDK;
  /**
   * Instance của WrappedSeoServiceClient (ví dụ: sdk.seo).
   */
  seoClient?: WrappedSeoServiceClient;
  /**
   * Đường dẫn URL của trang hiện tại (dùng để tự động fetch Page SEO).
   * Ví dụ: "/products/laptop-lenovo" hoặc "https://ladosite.vn/products/laptop-lenovo".
   */
  url?: string;
  /**
   * Dữ liệu Global SEO đã fetch sẵn (nếu có).
   */
  global?: SeoGlobalConfigResponse | SeoGlobalConfigData;
  /**
   * Dữ liệu Page SEO đã fetch sẵn (nếu có).
   */
  page?: SeoPageConfigResponse | SeoPageConfigData;
  /**
   * Tiêu đề dự phòng khi API SEO lỗi hoặc chưa có dữ liệu.
   */
  fallbackTitle?: string;
  /**
   * Tùy chọn truyền Domain chính thức để override và chuẩn hóa Canonical URL.
   */
  domain?: string;
  /**
   * Tùy chọn Next.js Metadata để override thủ công các trường cụ thể.
   */
  overrides?: Partial<Metadata>;
  /**
   * Request object trong Server Component / Route Handler của Next.js (nếu có).
   */
  request?: Request;
}

export interface FetchSeoDataResult {
  global?: SeoGlobalConfigData;
  page?: SeoPageConfigData;
  metadata: Metadata;
}

// In-memory cache cho Global SEO Data (giảm tải gọi lặp lại trong cùng server process)
let cachedGlobalData: SeoGlobalConfigData | undefined = undefined;
let globalDataCacheTimestamp = 0;
const GLOBAL_SEO_CACHE_TTL = 60 * 1000; // Cache 1 phút

/**
 * Xóa cache Global SEO trong bộ nhớ SDK
 */
export function clearGlobalSeoCache(): void {
  cachedGlobalData = undefined;
  globalDataCacheTimestamp = 0;
}

/**
 * Hàm helper tự động fetch SEO từ gRPC API và trả về Next.js Metadata chuẩn.
 * Tự động bọc try-catch an toàn (Zero Crash) - Không làm sập ứng dụng khi gRPC API gặp sự cố.
 */
export async function fetchSeoMetadata(
  options: FetchSeoOptions = {}
): Promise<Metadata> {
  const result = await fetchSeoData(options);
  return result.metadata;
}

/**
 * Tự động hóa fetch đầy đủ dữ liệu SEO (Global + Page + Metadata) từ gRPC SDK.
 * Có sẵn bộ nhớ cache (TTL 1 phút) cho Global SEO để giảm tải gRPC request.
 * Bọc try-catch tuyệt đối an toàn, chạy bất đồng bộ song song (Promise.allSettled) để tối ưu tốc độ.
 */
export async function fetchSeoData(
  options: FetchSeoOptions = {}
): Promise<FetchSeoDataResult> {
  let globalData: SeoGlobalConfigData | undefined =
    options.global && 'data' in options.global && options.global.data
      ? options.global.data
      : (options.global as SeoGlobalConfigData | undefined);

  let pageData: SeoPageConfigData | undefined =
    options.page && 'data' in options.page && options.page.data
      ? options.page.data
      : (options.page as SeoPageConfigData | undefined);

  const { sdk, url, request, fallbackTitle, overrides } = options;
  const seoClient = options.seoClient || sdk?.seo;

  const resolvedUrl = resolvePublicUrl(
    url,
    request,
    options.domain || globalData?.domain
  ).targetUrl;

  if (seoClient) {
    const promises: Promise<unknown>[] = [];

    // 1. Tự động fetch Global SEO song song nếu chưa có
    if (!globalData) {
      const isCacheValid =
        cachedGlobalData &&
        Date.now() - globalDataCacheTimestamp < GLOBAL_SEO_CACHE_TTL;

      if (isCacheValid) {
        globalData = cachedGlobalData;
      } else {
        promises.push(
          seoClient
            .getGlobalConfig({})
            .then((res) => {
              if (res?.success && res.data) {
                globalData = res.data;
                cachedGlobalData = res.data;
                globalDataCacheTimestamp = Date.now();
              }
            })
            .catch((err) => {
              glog.warn(
                `[OptiFlow SDK] GetGlobalConfig SEO failed safely | Detail: ${formatSingleLine(err)}`
              );
              if (cachedGlobalData) {
                globalData = cachedGlobalData;
              }
            })
        );
      }
    }

    // 2. Tự động fetch Page SEO song song bằng URL nếu chưa có
    const targetUrlForFetch = resolvedUrl || url;
    if (targetUrlForFetch && !pageData) {
      promises.push(
        seoClient
          .getMetaByUrl({ url: targetUrlForFetch })
          .then((res) => {
            if (res?.success && res.data) {
              pageData = res.data;
            }
          })
          .catch((err) => {
            glog.warn(
              `[OptiFlow SDK] GetMetaByUrl SEO failed safely for URL (${targetUrlForFetch}) | Detail: ${formatSingleLine(err)}`
            );
          })
      );
    }

    // Thực thi tất cả request API SEO song song để tối ưu latency
    if (promises.length > 0) {
      await Promise.allSettled(promises);
    }
  }

  // 3. Tạo Next.js Metadata chuẩn
  let metadata = generateMetadata({
    global: globalData,
    page: pageData,
  });

  if (overrides) {
    metadata = {
      ...metadata,
      ...overrides,
    };
  }

  // Fallback title nếu không có dữ liệu SEO nào và có fallbackTitle truyền vào
  if ((!metadata || Object.keys(metadata).length === 0) && fallbackTitle) {
    metadata = {
      title: fallbackTitle,
    };
  }

  return {
    global: globalData,
    page: pageData,
    metadata,
  };
}

function isLocalHost(host: string): boolean {
  return (
    host.includes('0.0.0.0') ||
    host.includes('127.0.0.1') ||
    host.includes('localhost')
  );
}

function cleanDomainUrl(domain: string): string {
  let cleaned = domain.trim();
  if (!cleaned) return '';
  if (!cleaned.startsWith('http://') && !cleaned.startsWith('https://')) {
    cleaned = `https://${cleaned}`;
  }
  return cleaned.replace(/\/+$/, '');
}

/**
 * Helper bóc tách và giải mã Public Domain chuẩn từ Request Headers (x-forwarded-host, host, x-forwarded-proto)
 * hoặc từ Option / Environment variables để tránh bị dính IP 0.0.0.0 / localhost khi chạy trong Docker/Reverse Proxy.
 */
export function resolvePublicUrl(
  urlOption?: string,
  request?: Request,
  domainOption?: string
): { targetUrl: string; originDomain: string } {
  let envDomain =
    domainOption ||
    (typeof process !== 'undefined' &&
      (process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL)) ||
    '';

  envDomain = cleanDomainUrl(envDomain);

  let targetUrl = urlOption || '';

  if (!targetUrl && request) {
    try {
      const headers = request.headers;
      const rawForwardedHost =
        headers.get('x-forwarded-host') || headers.get('host') || '';
      const forwardedHost = rawForwardedHost.split(',')[0].trim();

      const rawForwardedProto = headers.get('x-forwarded-proto') || 'https';
      const forwardedProto = rawForwardedProto.split(',')[0].trim();

      const parsedUrl = new URL(request.url);

      if (forwardedHost && !isLocalHost(forwardedHost)) {
        targetUrl = `${forwardedProto}://${forwardedHost}${parsedUrl.pathname}${parsedUrl.search}`;
      } else if (envDomain) {
        targetUrl = `${envDomain}${parsedUrl.pathname}${parsedUrl.search}`;
      } else {
        targetUrl = request.url;
      }
    } catch {
      targetUrl = request.url || '';
    }
  }

  // Nếu targetUrl vẫn chứa IP nội bộ (0.0.0.0, 127.0.0.1, localhost) mà có envDomain thì đè domain thật vào
  if (targetUrl) {
    try {
      const parsed = new URL(targetUrl);
      if (isLocalHost(parsed.host) && envDomain) {
        targetUrl = `${envDomain}${parsed.pathname}${parsed.search}`;
      }
    } catch {
      // ignore
    }
  }

  let originDomain = envDomain;
  if (targetUrl) {
    try {
      const parsed = new URL(targetUrl);
      if (!isLocalHost(parsed.host)) {
        originDomain = parsed.origin;
      }
    } catch {
      // ignore
    }
  }

  return { targetUrl, originDomain };
}

export interface FetchRobotsOptions {
  /**
   * Instance của OptiFlowGrpcSDK.
   */
  sdk?: OptiFlowGrpcSDK;
  /**
   * Instance của WrappedSeoServiceClient (ví dụ: sdk.seo).
   */
  seoClient?: WrappedSeoServiceClient;
  /**
   * Dữ liệu Global SEO đã fetch sẵn (nếu có).
   */
  global?: SeoGlobalConfigResponse | SeoGlobalConfigData;
  /**
   * Đường dẫn URL đầy đủ (tùy chọn).
   */
  url?: string;
  /**
   * Tùy chọn truyền Domain chính thức để override.
   */
  domain?: string;
  /**
   * Request object trong Route Handler của Next.js (nếu có).
   */
  request?: Request;
}

/**
 * Fetch nội dung robots.txt từ gRPC Global SEO Config với cơ chế try-catch an toàn tuyệt đối.
 * Nếu API gặp sự cố, trả về nội dung robots.txt mặc định an toàn.
 */
export async function fetchRobotsTxt(
  options: FetchRobotsOptions = {}
): Promise<string> {
  let globalData: SeoGlobalConfigData | undefined =
    options.global && 'data' in options.global && options.global.data
      ? options.global.data
      : (options.global as SeoGlobalConfigData | undefined);

  const { sdk, request, url } = options;
  const seoClient = options.seoClient || sdk?.seo;

  let { originDomain } = resolvePublicUrl(
    url,
    request,
    options.domain || globalData?.domain
  );

  if (!globalData && seoClient) {
    try {
      const res = await seoClient.getGlobalConfig({});
      if (res?.success && res.data) {
        globalData = res.data;
        if (!originDomain && res.data.domain) {
          originDomain = cleanDomainUrl(res.data.domain);
        }
      }
    } catch (err) {
      glog.warn(
        `[OptiFlow SDK] GetGlobalConfig for Robots.txt failed safely | Detail: ${formatSingleLine(err)}`
      );
    }
  }

  let content = globalData?.robotsTxtContent;

  if (!content) {
    const domain = cleanDomainUrl(globalData?.domain || originDomain);
    const sitemapLine = domain ? `\nSitemap: ${domain}/sitemap.xml\n` : '';
    content = `User-agent: *\nAllow: /${sitemapLine}`;
  } else if (originDomain && !isLocalHost(originDomain)) {
    content = content.replace(
      /https?:\/\/(?:0\.0\.0\.0|127\.0\.0\.1|localhost)(?::\d+)?/g,
      originDomain
    );
  }

  return content;
}

/**
 * Helper tạo Web Standard Response (chuẩn text/plain) cho Next.js Route Handler (`app/robots.txt/route.ts`).
 * Hỗ trợ nhận trực tiếp Request object hoặc FetchRobotsOptions object.
 */
export async function handleRobotsTxtRequest(
  optionsOrRequest?: FetchRobotsOptions | Request,
  extraOptions?: FetchRobotsOptions
): Promise<Response> {
  let options: FetchRobotsOptions = {};

  if (optionsOrRequest instanceof Request) {
    options = { request: optionsOrRequest, ...extraOptions };
  } else if (
    optionsOrRequest &&
    typeof (optionsOrRequest as Request).url === 'string' &&
    !(optionsOrRequest as FetchRobotsOptions).sdk &&
    !(optionsOrRequest as FetchRobotsOptions).seoClient &&
    !(optionsOrRequest as FetchRobotsOptions).request
  ) {
    options = { request: optionsOrRequest as Request, ...extraOptions };
  } else if (optionsOrRequest) {
    options = { ...(optionsOrRequest as FetchRobotsOptions), ...extraOptions };
  }

  const robotsContent = await fetchRobotsTxt(options);
  return new Response(robotsContent, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control':
        'public, max-age=3600, s-maxage=14400, stale-while-revalidate=86400',
    },
  });
}

export interface FetchSitemapOptions {
  /**
   * Instance của OptiFlowGrpcSDK.
   */
  sdk?: OptiFlowGrpcSDK;
  /**
   * Instance của WrappedSeoServiceClient (ví dụ: sdk.seo).
   */
  seoClient?: WrappedSeoServiceClient;
  /**
   * Đường dẫn URL đầy đủ (ví dụ: "https://optiflow.vn/sitemap.xml" hoặc "/sitemap.xml").
   */
  url?: string;
  /**
   * Tùy chọn truyền Domain chính thức để override.
   */
  domain?: string;
  /**
   * Request object trong Route Handler của Next.js (nếu có).
   */
  request?: Request;
}

/**
 * Fetch XML Sitemap từ gRPC SEO Service với cơ chế try-catch an toàn tuyệt đối.
 * Trả về chuỗi XML sitemap thô (hoặc chuỗi rỗng nếu không tìm thấy / lỗi).
 */
export async function fetchSitemapXml(
  options: FetchSitemapOptions = {}
): Promise<string> {
  const { sdk, request, url } = options;
  const seoClient = options.seoClient || sdk?.seo;

  const { targetUrl } = resolvePublicUrl(url, request, options.domain);

  if (!seoClient) {
    return '';
  }

  try {
    const res = await seoClient.getSitemapData({ url: targetUrl });
    if (res?.success && res.xmlContent) {
      return res.xmlContent;
    }
    return res?.xmlContent || '';
  } catch (err: unknown) {
    glog.warn(
      `[OptiFlow SDK] GetSitemapData failed safely | Detail: ${formatSingleLine(err)}`
    );
    return '';
  }
}

/**
 * Alias tên ngắn gọn cho `fetchSitemapXml`.
 */
export const fetchSitemap = fetchSitemapXml;

/**
 * Helper tạo Web Standard Response (chuẩn application/xml) cho Next.js Route Handler (`app/sitemap.xml/route.ts`).
 */
export async function handleSitemapRequest(
  optionsOrRequest?: FetchSitemapOptions | Request,
  extraOptions?: FetchSitemapOptions
): Promise<Response> {
  let options: FetchSitemapOptions = {};

  if (optionsOrRequest instanceof Request) {
    options = { request: optionsOrRequest, ...extraOptions };
  } else if (
    optionsOrRequest &&
    typeof (optionsOrRequest as Request).url === 'string' &&
    !(optionsOrRequest as FetchSitemapOptions).sdk &&
    !(optionsOrRequest as FetchSitemapOptions).seoClient &&
    !(optionsOrRequest as FetchSitemapOptions).request
  ) {
    options = { request: optionsOrRequest as Request, ...extraOptions };
  } else if (optionsOrRequest) {
    options = { ...(optionsOrRequest as FetchSitemapOptions), ...extraOptions };
  }

  const xmlContent = await fetchSitemapXml(options);
  if (!xmlContent) {
    return new Response('Sitemap Not Found', { status: 404 });
  }

  return new Response(xmlContent, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control':
        'public, max-age=3600, s-maxage=14400, stale-while-revalidate=86400',
    },
  });
}




