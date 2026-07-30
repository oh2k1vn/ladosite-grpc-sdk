import type { Metadata } from "next";
import type {
    SeoPageConfigResponse,
    SeoGlobalConfigResponse,
    SeoPageConfigData,
    SeoGlobalConfigData
} from "../generated/Protos/seo";

export interface SeoOptions {
    global?: SeoGlobalConfigResponse | SeoGlobalConfigData;
    page?: SeoPageConfigResponse | SeoPageConfigData;
}

function buildUrl(baseUrl?: string, path?: string): string {
    if (!baseUrl) return path || "";
    if (!path) return baseUrl;

    const cleanBase = baseUrl.replace(/\/+$/, "");
    const cleanPath = path.replace(/^\/+/, "");

    return cleanPath ? `${cleanBase}/${cleanPath}` : cleanBase;
}

export function generateMetadata(input?: SeoOptions): Metadata {
    if (!input) return {} as Metadata;

    // Tự động bóc tách thuộc tính .data nếu truyền vào gRPC Response Object
    const global: SeoGlobalConfigData | undefined =
        (input.global && 'data' in input.global && input.global.data)
            ? input.global.data
            : (input.global as SeoGlobalConfigData | undefined);

    const page: SeoPageConfigData | undefined =
        (input.page && 'data' in input.page && input.page.data)
            ? input.page.data
            : (input.page as SeoPageConfigData | undefined);

    // =========================================================================
    // 1. DÀNH CHO PAGE (Metadata riêng cho 1 trang chi tiết)
    // =========================================================================
    if (page) {
        const pageUrl = page?.openGraph?.url || buildUrl(page?.canonicalUrl || global?.domain, page?.route);
        const ogImage = page?.openGraph?.image || global?.defaultImage || global?.openGraph?.image || "";
        const title = page?.title || global?.defaultTitle || "";
        const description = page?.description || global?.defaultDescription || global?.description || "";
        const ogTitle = page?.openGraph?.title || title;
        const ogDescription = page?.openGraph?.description || description;
        const siteName = page?.openGraph?.siteName || global?.siteName || global?.brandName || "";
        const locale = page?.openGraph?.locale || global?.locale || "vi_VN";

        return {
            title,
            description,
            keywords: page?.keywordList || (page as any)?.seoKeywordList || [],
            alternates: {
                canonical: page?.canonicalUrl || pageUrl,
            },
            openGraph: {
                title: ogTitle,
                description: ogDescription,
                url: pageUrl,
                siteName,
                locale,
                type: (page?.openGraph?.type as any) || "website",
                images: ogImage ? {
                    width: 1200,
                    height: 630,
                    alt: title,
                    url: ogImage,
                    type: "image/jpeg",
                } : undefined,
                phoneNumbers: "",
                emails: "",
                countryName: "Việt Nam",
            },
            twitter: {
                card: "summary_large_image",
                title: ogTitle,
                description: ogDescription,
                images: ogImage ? [ogImage] : [],
            },
            robots: {
                index: page?.robots?.index ?? true,
                follow: page?.robots?.follow ?? true,
                "max-image-preview": (page?.robots?.maxImagePreview as any) || "large",
                "max-snippet": page?.robots?.maxSnippet ?? -1,
                "max-video-preview": page?.robots?.maxVideoPreview ?? -1,
            }
        };
    }

    // =========================================================================
    // 2. DÀNH CHO GLOBAL (Metadata mặc định cho Root Layout)
    // =========================================================================
    if (global) {
        const defaultTitle = global?.defaultTitle || "";
        const description = global?.description || global?.defaultDescription || "";
        const ogTitle = global?.openGraph?.title || defaultTitle;
        const ogDescription = global?.openGraph?.description || description;
        const ogImage = global?.openGraph?.image || global?.defaultImage || "";

        return {
            title: {
                default: defaultTitle,
                template: global?.titleTemplate || "%s",
            },
            description,
            keywords: [],
            alternates: {
                canonical: global?.domain || "",
            },
            openGraph: {
                title: ogTitle,
                description: ogDescription,
                locale: global?.openGraph?.locale || global?.locale || "vi_VN",
                type: (global?.openGraph?.type as any) || "website",
                url: global?.openGraph?.url || global?.domain || "",
                siteName: global?.openGraph?.siteName || global?.siteName || global?.brandName || "",
                images: ogImage ? {
                    width: 1200,
                    height: 630,
                    alt: defaultTitle,
                    url: ogImage,
                    type: "image/jpeg",
                } : undefined,
                phoneNumbers: "",
                emails: "",
                countryName: "Việt Nam",
            },
            twitter: {
                card: "summary_large_image",
                title: ogTitle,
                description: ogDescription,
                images: ogImage ? [ogImage] : [],
            },
        };
    }

    return {} as Metadata;
}
