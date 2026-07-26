export interface GrpcFetchOptions {
  cache?: RequestCache;
  next?: {
    revalidate?: number | false;
    tags?: string[];
  };
  headers?: Record<string, string>;
}

export interface NextOpenGraph {
  title?: string;
  description?: string;
  url?: string;
  siteName?: string;
  images?: Array<{
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  }>;
  locale?: string;
  type?: string;
}

export interface NextTwitter {
  card?: 'summary' | 'summary_large_image' | 'app' | 'player';
  title?: string;
  description?: string;
  images?: string[];
  creator?: string;
}

export interface NextMetadata {
  title?: string;
  description?: string;
  keywords?: string[];
  robots?: {
    index?: boolean;
    follow?: boolean;
    nocache?: boolean;
    googleBot?: {
      index?: boolean;
      follow?: boolean;
    };
  };
  alternates?: {
    canonical?: string;
  };
  openGraph?: NextOpenGraph;
  twitter?: NextTwitter;
  other?: Record<string, string | number | boolean>;
}

export interface NextSitemapItem {
  url: string;
  lastModified?: string | Date;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export interface ProductPageDataResult<TProduct = any> {
  product: TProduct | null;
  metadata: NextMetadata | null;
  jsonLdScript: Record<string, any>[] | null;
  error?: Error | null;
}

export interface CategoryPageDataResult<TProductGroup = any, TProducts = any> {
  productGroup: TProductGroup | null;
  products: TProducts | null;
  metadata: NextMetadata | null;
  jsonLdScript: Record<string, any>[] | null;
  error?: Error | null;
}

export interface BlogPageDataResult<TBlog = any> {
  blog: TBlog | null;
  metadata: NextMetadata | null;
  jsonLdScript: Record<string, any>[] | null;
  error?: Error | null;
}

export interface EcomPageMetaResult {
  metadata: NextMetadata | null;
  jsonLdScript: Record<string, any>[] | null;
  error?: Error | null;
}
