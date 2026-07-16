// Export core SDK client and configuration
export { OptiFlowGrpcSDK, GrpcSDKConfig } from './client';

// Re-export only the message types (Request/Response interfaces) from Protos.
// We DO NOT export raw ServiceClient classes from *.client files to maximize security
// and ensure consumers always route their requests through the secure SDK class wrapper.

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
