import type { Metadata } from 'next';
import type { OptiFlowGrpcSDK } from '../client';
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
}

export interface FetchSeoDataResult {
  global?: SeoGlobalConfigData;
  page?: SeoPageConfigData;
  metadata: Metadata;
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

  const { sdk, url, fallbackTitle } = options;
  const seoClient = options.seoClient || sdk?.seo;

  if (seoClient) {
    const promises: Promise<void>[] = [];

    // 1. Tự động fetch Global SEO song song nếu chưa có
    if (!globalData) {
      promises.push(
        seoClient
          .getGlobalConfig({})
          .then((res) => {
            if (res?.success && res.data) {
              globalData = res.data;
            }
          })
          .catch((err) => {
            console.warn(
              '[OptiFlow SDK] GetGlobalConfig SEO failed safely:',
              err
            );
          })
      );
    }

    // 2. Tự động fetch Page SEO song song bằng URL nếu chưa có
    if (url && !pageData) {
      promises.push(
        seoClient
          .getMetaByUrl({ url })
          .then((res) => {
            if (res?.success && res.data) {
              pageData = res.data;
            }
          })
          .catch((err) => {
            console.warn(
              `[OptiFlow SDK] GetMetaByUrl SEO failed safely for URL (${url}):`,
              err
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
   * URL request hoặc Base URL truyền vào API gRPC GetSitemapData.
   * Ví dụ: "https://ladosite.vn" hoặc URL request hiện tại.
   */
  url?: string;
  /**
   * Tùy chọn truyền Domain chính thức để override nếu request bị nhận diện IP nội bộ 0.0.0.0.
   * Ví dụ: "https://ladosite.vn"
   */
  domain?: string;
  /**
   * Request object trong Route Handler của Next.js (nếu có).
   */
  request?: Request;
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

/**
 * Fetch XML sitemap từ gRPC API (GetSitemapData).
 * Trả về dữ liệu XML trực tiếp từ API.
 */
export async function fetchSitemapXml(
  options: FetchSitemapOptions = {}
): Promise<string> {
  const { sdk, url, domain, request } = options;
  const seoClient = options.seoClient || sdk?.seo;

  const { originDomain, targetUrl } = resolvePublicUrl(url, request, domain);
  const payloadUrl = url || domain || originDomain || targetUrl || '';

  if (seoClient) {
    const res = await seoClient.getSitemapData({ url: payloadUrl });
    return res?.xmlContent || '';
  }

  return '';
}

/**
 * Helper tạo Web Standard Response (chuẩn XML) cho Next.js Route Handler (`app/sitemap.xml/route.ts`).
 * Trả về Response với Content-Type: application/xml và Cache-Control tối ưu.
 */
export async function handleSitemapRequest(
  options: FetchSitemapOptions = {}
): Promise<Response> {
  const xmlContent = await fetchSitemapXml(options);
  return new Response(xmlContent, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control':
        'public, max-age=3600, s-maxage=14400, stale-while-revalidate=86400',
    },
  });
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

  const { sdk, request } = options;
  const seoClient = options.seoClient || sdk?.seo;

  let { originDomain } = resolvePublicUrl(
    undefined,
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
      console.warn(
        '[OptiFlow SDK] GetGlobalConfig for Robots.txt failed safely:',
        err
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
 * Trả về Response với Content-Type: text/plain và Cache-Control tối ưu.
 */
export async function handleRobotsTxtRequest(
  options: FetchRobotsOptions = {}
): Promise<Response> {
  const robotsContent = await fetchRobotsTxt(options);
  return new Response(robotsContent, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control':
        'public, max-age=3600, s-maxage=14400, stale-while-revalidate=86400',
    },
  });
}



