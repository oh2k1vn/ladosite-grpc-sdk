import type { Metadata } from 'next';
import type {
  SeoGlobalConfigData,
  SeoGlobalConfigResponse,
  SeoPageConfigData,
  SeoPageConfigResponse,
} from '../generated/Protos/seo';

export interface SeoOptions {
  global?: SeoGlobalConfigResponse | SeoGlobalConfigData;
  page?: SeoPageConfigResponse | SeoPageConfigData;
}

function buildUrl(baseUrl?: string, path?: string): string {
  if (!baseUrl) return path || '';
  if (!path) return baseUrl;

  const cleanBase = baseUrl.replace(/\/+$/, '');
  const cleanPath = path.replace(/^\/+/, '');

  return cleanPath ? `${cleanBase}/${cleanPath}` : cleanBase;
}

function extractTwitterHandle(global?: SeoGlobalConfigData): string | undefined {
  if (!global?.socialLinks) return undefined;
  const links = global.socialLinks;
  const twitterVal =
    links['twitter'] ||
    links['twitter:site'] ||
    links['twitter:creator'] ||
    links['X'] ||
    links['x'];
  if (!twitterVal) return undefined;
  if (twitterVal.startsWith('@')) return twitterVal;
  try {
    const url = new URL(twitterVal);
    const handle = url.pathname.replace(/^\/+/, '').split('/')[0];
    return handle ? `@${handle}` : undefined;
  } catch {
    return twitterVal.includes('/') ? undefined : `@${twitterVal}`;
  }
}

export function generateMetadata(input?: SeoOptions): Metadata {
  if (!input) return {} as Metadata;

  // Tự động bóc tách thuộc tính .data nếu truyền vào gRPC Response Object
  const global: SeoGlobalConfigData | undefined =
    input.global && 'data' in input.global && input.global.data
      ? input.global.data
      : (input.global as SeoGlobalConfigData | undefined);

  const page: SeoPageConfigData | undefined =
    input.page && 'data' in input.page && input.page.data
      ? input.page.data
      : (input.page as SeoPageConfigData | undefined);

  const googleVerification = global?.googleSiteVerificationId
    ? { google: global.googleSiteVerificationId }
    : undefined;

  const twitterHandle = extractTwitterHandle(global);
  const logoUrl =
    global?.logo?.url || global?.defaultImage || global?.openGraph?.image;

  const icons = logoUrl
    ? {
        icon: logoUrl,
        apple: logoUrl,
      }
    : undefined;

  // =========================================================================
  // 1. DÀNH CHO PAGE (Metadata riêng cho 1 trang chi tiết)
  // =========================================================================
  if (page) {
    const pageUrl =
      page?.openGraph?.url ||
      buildUrl(page?.canonicalUrl || global?.domain, page?.route);
    const ogImage =
      page?.openGraph?.image ||
      global?.defaultImage ||
      global?.openGraph?.image ||
      '';
    const title = page?.title || global?.defaultTitle || '';
    const description =
      page?.description ||
      global?.defaultDescription ||
      global?.description ||
      '';
    const ogTitle = page?.openGraph?.title || title;
    const ogDescription = page?.openGraph?.description || description;
    const siteName =
      page?.openGraph?.siteName || global?.siteName || global?.brandName || '';
    const locale = page?.openGraph?.locale || global?.locale || 'vi_VN';

    let ogType: 'website' | 'article' = 'website';
    if (
      page?.openGraph?.type === 'article' ||
      page?.entityType === 'article' ||
      page?.entityType === 'blog'
    ) {
      ogType = 'article';
    } else if (page?.openGraph?.type) {
      ogType = page.openGraph.type as 'website';
    }

    const alternateLangs = (page as unknown as Record<string, unknown>)
      ?.alternateLanguages as Record<string, string> | undefined;

    return {
      title,
      description,
      keywords:
        page?.keywordList ||
        ((page as unknown as Record<string, unknown>)
          ?.seoKeywordList as string[]) ||
        [],
      icons,
      verification: googleVerification,
      alternates: {
        canonical: page?.canonicalUrl || pageUrl,
        languages: alternateLangs,
      },
      openGraph: {
        title: ogTitle,
        description: ogDescription,
        url: pageUrl,
        siteName,
        locale,
        type: ogType,
        images: ogImage
          ? {
              width: 1200,
              height: 630,
              alt: title,
              url: ogImage,
              type: 'image/jpeg',
            }
          : undefined,
        phoneNumbers: '',
        emails: '',
        countryName: 'Việt Nam',
      },
      twitter: {
        card: 'summary_large_image',
        site: twitterHandle,
        creator: twitterHandle,
        title: ogTitle,
        description: ogDescription,
        images: ogImage ? [ogImage] : [],
      },
      robots: {
        index: page?.robots?.index ?? true,
        follow: page?.robots?.follow ?? true,
        'max-image-preview':
          (page?.robots?.maxImagePreview as unknown as 'large') || 'large',
        'max-snippet': page?.robots?.maxSnippet ?? -1,
        'max-video-preview': page?.robots?.maxVideoPreview ?? -1,
      },
    };
  }

  // =========================================================================
  // 2. DÀNH CHO GLOBAL (Metadata mặc định cho Root Layout)
  // =========================================================================
  if (global) {
    const defaultTitle = global?.defaultTitle || '';
    const description = global?.description || global?.defaultDescription || '';
    const ogTitle = global?.openGraph?.title || defaultTitle;
    const ogDescription = global?.openGraph?.description || description;
    const ogImage = global?.openGraph?.image || global?.defaultImage || '';

    return {
      title: {
        default: defaultTitle,
        template: global?.titleTemplate || '%s',
      },
      description,
      keywords: [],
      icons,
      verification: googleVerification,
      alternates: {
        canonical: global?.domain || '',
      },
      openGraph: {
        title: ogTitle,
        description: ogDescription,
        locale: global?.openGraph?.locale || global?.locale || 'vi_VN',
        type: (global?.openGraph?.type as unknown as 'website') || 'website',
        url: global?.openGraph?.url || global?.domain || '',
        siteName:
          global?.openGraph?.siteName ||
          global?.siteName ||
          global?.brandName ||
          '',
        images: ogImage
          ? {
              width: 1200,
              height: 630,
              alt: defaultTitle,
              url: ogImage,
              type: 'image/jpeg',
            }
          : undefined,
        phoneNumbers: '',
        emails: '',
        countryName: 'Việt Nam',
      },
      twitter: {
        card: 'summary_large_image',
        site: twitterHandle,
        creator: twitterHandle,
        title: ogTitle,
        description: ogDescription,
        images: ogImage ? [ogImage] : [],
      },
    };
  }

  return {} as Metadata;
}

