// Export core SDK client and configuration
export {
  GrpcSDKConfig,
  grpcSDK,
  OptiFlowGrpcSDK,
  WrappedClient,
} from './client';
export * from './criteria';
// Re-export only the message types (Request/Response interfaces) from Protos.
// We DO NOT export raw ServiceClient classes from *.client files to maximize security
// and ensure consumers always route their requests through the secure SDK class wrapper.
export * from './generated/Protos/auth';
// Re-export type-only ServiceClient classes to allow type annotations without exposing raw classes at runtime.
export type * from './generated/Protos/auth.client';
export * from './generated/Protos/blog';
export type * from './generated/Protos/blog.client';
export * from './generated/Protos/comment';
export type * from './generated/Protos/comment.client';
export * from './generated/Protos/common';
export * from './generated/Protos/order';
export type * from './generated/Protos/order.client';
export * from './generated/Protos/page_view';
export type * from './generated/Protos/page_view.client';
export * from './generated/Protos/product';
export type * from './generated/Protos/product.client';
export * from './generated/Protos/seo';
export type * from './generated/Protos/seo.client';
export * from './generated/Protos/tracking';
export type * from './generated/Protos/tracking.client';
export * from './generated/Protos/user_submit';
export type * from './generated/Protos/user_submit.client';
// Export wrapped clients
export * from './generated/wrapped-clients';
export * from './seo/generateMetadata';
export * from './seo/SeoScripts';
// Export SEO helpers & components
export * from './seo/seoHelper';
