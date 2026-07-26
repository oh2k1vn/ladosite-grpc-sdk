import type { SeoGlobalConfigResponse, SeoPageConfigResponse, SitemapDataResponse } from '../generated/Protos/seo';
import type { ProductResponse, ProductGroupResponse } from '../generated/Protos/product';
import type { BlogResponse } from '../generated/Protos/blog';
import type { NextMetadata, NextSitemapItem } from '../types';

/**
 * Transforms a gRPC SeoPageConfigResponse (or SeoGlobalConfigResponse) into Next.js Metadata object
 */
export function toNextMetadata(
  pageConfig?: SeoPageConfigResponse | null,
  globalConfig?: SeoGlobalConfigResponse | null,
  fallback?: { title?: string; description?: string; image?: string; canonicalUrl?: string }
): NextMetadata {
  const pageData = pageConfig?.data;
  const globalData = globalConfig?.data;

  const title = pageData?.title || fallback?.title || globalData?.defaultTitle || globalData?.siteName || '';
  const description = pageData?.description || fallback?.description || globalData?.defaultDescription || '';
  const canonicalUrl = pageData?.canonicalUrl || fallback?.canonicalUrl || '';

  const ogImage = pageData?.openGraph?.image || fallback?.image || globalData?.defaultImage;
  const ogTitle = pageData?.openGraph?.title || title;
  const ogDescription = pageData?.openGraph?.description || description;
  const ogType = pageData?.openGraph?.type || 'website';

  const isIndex = pageData?.robots?.index !== false;
  const isFollow = pageData?.robots?.follow !== false;

  const metadata: NextMetadata = {
    title: globalData?.titleTemplate && title ? globalData.titleTemplate.replace('%s', title) : title,
    description,
    robots: {
      index: isIndex,
      follow: isFollow,
    },
  };

  if (canonicalUrl) {
    metadata.alternates = { canonical: canonicalUrl };
  }

  if (ogTitle || ogImage) {
    metadata.openGraph = {
      title: ogTitle,
      description: ogDescription,
      url: canonicalUrl,
      siteName: globalData?.siteName,
      locale: globalData?.locale || 'vi_VN',
      type: ogType,
      images: ogImage ? [{ url: ogImage, alt: ogTitle }] : undefined,
    };

    metadata.twitter = {
      card: ogImage ? 'summary_large_image' : 'summary',
      title: ogTitle,
      description: ogDescription,
      images: ogImage ? [ogImage] : undefined,
    };
  }

  return metadata;
}

/**
 * Generates official Schema.org JSON-LD for E-Commerce Product Detail Pages (PDP)
 */
export function generateProductJsonLd(
  product: ProductResponse,
  options?: { currency?: string; brand?: string; url?: string }
): Record<string, any> {
  const currency = options?.currency || 'VND';
  const brandName = options?.brand || product.categoryName || 'Generic';
  const images = product.imageUrls && product.imageUrls.length > 0 ? product.imageUrls : product.imgUrl ? [product.imgUrl] : [];

  const jsonLd: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: images,
    sku: product.sku || product.id,
    brand: {
      '@type': 'Brand',
      name: brandName,
    },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: currency,
      availability: product.stock > 0 ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      itemCondition: 'https://schema.org/NewCondition',
      url: options?.url,
    },
  };

  return jsonLd;
}

/**
 * Generates Schema.org BreadcrumbList for E-Commerce navigation
 */
export function generateBreadcrumbJsonLd(
  items: Array<{ name: string; url: string }>
): Record<string, any> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generates Schema.org ItemList for Product Listing / Category Pages (PLP)
 */
export function generateItemListJsonLd(
  products: ProductResponse[],
  options?: { categoryName?: string; baseUrl?: string }
): Record<string, any> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: options?.categoryName || 'Product Collection',
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: product.name,
      url: options?.baseUrl ? `${options.baseUrl}/products/${product.slug}` : undefined,
      image: product.imgUrl,
    })),
  };
}

/**
 * Generates Schema.org Article schema for Blogs
 */
export function generateArticleJsonLd(
  blog: BlogResponse,
  options?: { baseUrl?: string; publisherName?: string; publisherLogo?: string }
): Record<string, any> {
  const images = blog.imgUrl ? [blog.imgUrl] : [];

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: blog.title,
    description: blog.shortDescription || blog.title,
    image: images,
    datePublished: blog.publishedAt
      ? new Date(Number(blog.publishedAt.seconds) * 1000).toISOString()
      : blog.createdAt
      ? new Date(Number(blog.createdAt.seconds) * 1000).toISOString()
      : undefined,
    dateModified: blog.updatedAt ? new Date(Number(blog.updatedAt.seconds) * 1000).toISOString() : undefined,
    author: {
      '@type': 'Person',
      name: blog.author || 'Admin',
    },
    publisher: options?.publisherName
      ? {
          '@type': 'Organization',
          name: options.publisherName,
          logo: options.publisherLogo ? { '@type': 'ImageObject', url: options.publisherLogo } : undefined,
        }
      : undefined,
  };
}

/**
 * Parses gRPC SitemapDataResponse (or XML content) into Next.js MetadataRoute.Sitemap format
 */
export function toNextSitemap(sitemapResponse: SitemapDataResponse): NextSitemapItem[] {
  if (!sitemapResponse.xmlContent) {
    return [];
  }

  const items: NextSitemapItem[] = [];
  const urlBlocks = sitemapResponse.xmlContent.match(/<url>[\s\S]*?<\/url>/g) || [];

  for (const block of urlBlocks) {
    const locMatch = block.match(/<loc>(.*?)<\/loc>/);
    const lastmodMatch = block.match(/<lastmod>(.*?)<\/lastmod>/);
    const changefreqMatch = block.match(/<changefreq>(.*?)<\/changefreq>/);
    const priorityMatch = block.match(/<priority>(.*?)<\/priority>/);

    if (locMatch && locMatch[1]) {
      items.push({
        url: locMatch[1].trim(),
        lastModified: lastmodMatch && lastmodMatch[1] ? lastmodMatch[1].trim() : undefined,
        changeFrequency: (changefreqMatch && changefreqMatch[1] ? changefreqMatch[1].trim() : 'weekly') as any,
        priority: priorityMatch && priorityMatch[1] ? parseFloat(priorityMatch[1].trim()) : 0.7,
      });
    }
  }

  return items;
}
