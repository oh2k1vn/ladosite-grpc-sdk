import { notFound } from 'next/navigation';

export interface SitemapFetcherParams {
  url: string;
}

export interface SitemapFetcherResult {
  xmlContent?: string | null;
}

export interface HandleSitemapOptions {
  /**
   * Request object từ Next.js Route Handler
   */
  request: Request;
  /**
   * Params từ Next.js Dynamic Route (ví dụ: context.params)
   * Nếu truyền params và slug không kết thúc bằng `.xml`, tự động gọi notFound()
   */
  params?: Promise<{ slug?: string }> | { slug?: string };
  /**
   * Hàm fetch sitemap từ gRPC hoặc API Client của bạn
   */
  fetcher: (params: SitemapFetcherParams) => Promise<SitemapFetcherResult | null | undefined>;
  /**
   * Cấu hình Header Cache-Control (tùy chọn)
   * @default 'public, max-age=3600, s-maxage=14400, stale-while-revalidate=86400'
   */
  cacheControl?: string;
  /**
   * Ghi đè domain public (tùy chọn)
   */
  domain?: string;
}

/**
 * Trích xuất URL public chính xác từ Request Headers (x-forwarded-host, host, x-forwarded-proto)
 * Đảm bảo không bị dính localhost / 127.0.0.1 khi ứng dụng chạy sau Reverse Proxy (Nginx, Cloudflare, Docker).
 */
export function extractPublicUrl(request: Request, overrideDomain?: string): string {
  if (overrideDomain) {
    const cleanDomain = overrideDomain.replace(/\/+$/, '');
    const parsedUrl = new URL(request.url);
    return `${cleanDomain}${parsedUrl.pathname}${parsedUrl.search}`;
  }

  const headers = request.headers;
  const host = headers.get('x-forwarded-host') || headers.get('host') || '';
  const proto = headers.get('x-forwarded-proto') || 'https';

  if (host && !host.includes('localhost') && !host.includes('127.0.0.1') && !host.includes('0.0.0.0')) {
    const parsed = new URL(request.url);
    return `${proto}://${host.split(',')[0].trim()}${parsed.pathname}${parsed.search}`;
  }

  return request.url;
}

/**
 * Helper hoàn chỉnh chuẩn SEO phục vụ Next.js Route Handlers (`app/[slug]/route.ts`, `app/sitemap.xml/route.ts`).
 */
export async function handleDynamicSitemap({
  request,
  params,
  fetcher,
  cacheControl = 'public, max-age=3600, s-maxage=14400, stale-while-revalidate=86400',
  domain,
}: HandleSitemapOptions): Promise<Response> {
  // 1. Nếu có params, kiểm tra đuôi .xml (Dành cho Dynamic Route [slug])
  if (params) {
    const resolvedParams = await params;
    const slug = resolvedParams?.slug;
    if (slug && !slug.endsWith('.xml')) {
      notFound();
    }
  }

  // 2. Lấy URL Public chính xác
  const targetUrl = extractPublicUrl(request, domain);

  try {
    // 3. Gọi hàm fetcher (gRPC client)
    const res = await fetcher({ url: targetUrl });

    if (!res?.xmlContent) {
      return new Response('Sitemap Not Found', { status: 404 });
    }

    // 4. Trả về Response XML chuẩn SEO 200 OK
    return new Response(res.xmlContent, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': cacheControl,
      },
    });
  } catch (error) {
    console.error('[SEO Sitemap Error] Failed to fetch sitemap:', error);
    // Trả về 500 để Googlebot xếp lịch re-crawl lại sau
    return new Response('Internal Server Error', { status: 500 });
  }
}
