// Export core SDK client and configuration
export { OptiFlowGrpcSDK, GrpcSDKConfig } from './client';

// Export Next.js & E-Commerce SDK types
export * from './types';

// Export SEO & Schema.org JSON-LD helpers
export {
  toNextMetadata,
  generateProductJsonLd,
  generateBreadcrumbJsonLd,
  generateItemListJsonLd,
  generateArticleJsonLd,
  toNextSitemap,
} from './utils/seo';

// Re-export protobuf message types
export * from './generated/Protos/auth';
export * from './generated/Protos/blog';
export * from './generated/Protos/comment';
export * from './generated/Protos/common';
export * from './generated/Protos/order';
export * from './generated/Protos/page_view';
export * from './generated/Protos/product';
export * from './generated/Protos/seo';
export * from './generated/Protos/tracking';
export * from './generated/Protos/user_submit';
