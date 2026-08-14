// Core SDK Client & Lỗi gRPC
export { OptiFlowGrpcSDK, GrpcSDKConfig, grpcSDK, RpcError, WrappedClient } from './client';
export * from './criteria';

// Type của Wrapped Clients
export type * from './generated/wrapped-clients';

// Type DTO (Request/Response) - Tránh rác runtime
export type * from './generated/Protos/auth';
export type * from './generated/Protos/blog';
export type * from './generated/Protos/comment';
export type * from './generated/Protos/common';
export type * from './generated/Protos/order';
export type * from './generated/Protos/page_view';
export type * from './generated/Protos/product';
export type * from './generated/Protos/seo';
export type * from './generated/Protos/tracking';
export type * from './generated/Protos/user_submit';

// Type của Service Clients
export type * from './generated/Protos/auth.client';
export type * from './generated/Protos/blog.client';
export type * from './generated/Protos/comment.client';
export type * from './generated/Protos/order.client';
export type * from './generated/Protos/page_view.client';
export type * from './generated/Protos/product.client';
export type * from './generated/Protos/seo.client';
export type * from './generated/Protos/tracking.client';
export type * from './generated/Protos/user_submit.client';

// SEO Helpers & Components
export * from './seo/seoHelper';
export * from './seo/sitemap-helper';
export * from './seo/generateMetadata';
export * from './seo/SeoScripts';
