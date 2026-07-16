import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';
import { RpcError } from '@protobuf-ts/runtime-rpc';
import * as crypto from 'crypto';

// Import raw service clients
import { AuthServiceClient } from './generated/Protos/auth.client';
import { BlogServiceClient } from './generated/Protos/blog.client';
import { CommentServiceClient } from './generated/Protos/comment.client';
import { OrderServiceClient } from './generated/Protos/order.client';
import { PageViewServiceClient } from './generated/Protos/page_view.client';
import { ProductServiceClient } from './generated/Protos/product.client';
import { SeoServiceClient } from './generated/Protos/seo.client';
import { TrackingServiceClient } from './generated/Protos/tracking.client';
import { UserSubmitServiceClient } from './generated/Protos/user_submit.client';

// Import request and response types
import type { LoginRequest, LoginResponse } from './generated/Protos/auth';
import type { CommonQuery, GetBySlugRequest, GetBySlugPagedRequest, Empty, OperationResult } from './generated/Protos/common';
import type { GetMetaByUrlRequest, GetSitemapDataRequest, SeoGlobalConfigResponse, SeoPageConfigResponse, SitemapDataResponse } from './generated/Protos/seo';
import type { SubmitRequest } from './generated/Protos/user_submit';
import type { PlaceOrderRequest, GetOrderRequest, CancelOrderRequest, RequestRefundRequest, SubmitReviewRequest, GetOrdersResponse, OrderDetailResponse, GetOrderTrackingResponse } from './generated/Protos/order';
import type { CreateCommentRequest, GetCommentsByRefRequest, CreateCommentResponse, GetCommentsByRefResponse } from './generated/Protos/comment';
import type { UserEventRequest } from './generated/Protos/tracking';
import type { GetPageViewRequest, PageViewResponse } from './generated/Protos/page_view';
import type { BlogDataSourceResponse, BlogResponseWrapped, BlogGroupDataSourceResponse, BlogGroupResponseWrapped } from './generated/Protos/blog';
import type { ProductDataSourceResponse, ProductResponseWrapped, ProductGroupResponseWrapped, ProductGroupDataSourceResponse } from './generated/Protos/product';

const DEFAULT_PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnYmTJKkxl/Yg3gA6SQ91foY5CB50LDXcYrq6Ukx8obTuSuH0RAcg/oSem+gT5G1aakdQqtCkYXSHS9wS8kLK3O4AXFCONED4I8tJ8GKRcxFvytxHTIMmqqa+gw+pbPpmV4Zr+KjLHZsLse0jFIJ+gZ2hR3CrAeJ8Au+3uKySNNZ0F2laJAPso9p/80d4nKhf6N/t3/AU2LirnvWyADQeoaXVRQAv3LVpe6IG+bgijg6Cu4rA1kOUxFSj7nD6n1+QZqS7Fu2WdwFd7DbAr1RQKzpxqwF2p7LTifDUUGLrGF45oslxytwbHyEc36eRx1g9mQIdipkIa1KXdjf51sE2jwIDAQAB
-----END PUBLIC KEY-----`;

let cachedChecksum: string | null = null;

function generateChecksum(publicKey: string = DEFAULT_PUBLIC_KEY, values: string = 'web:optiflow_svc'): string {
  if (cachedChecksum && publicKey === DEFAULT_PUBLIC_KEY && values === 'web:optiflow_svc') {
    return cachedChecksum;
  }
  try {
    const md5Hash = crypto.createHash('md5').update(values).digest('hex');
    const padding = 'xxxxx';
    const rawPayload = padding + md5Hash + padding;

    const encryptedBuffer = crypto.publicEncrypt(
      {
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_PADDING,
      },
      Buffer.from(rawPayload)
    );

    const result = encryptedBuffer.toString('base64');
    if (publicKey === DEFAULT_PUBLIC_KEY && values === 'web:optiflow_svc') {
      cachedChecksum = result;
    }
    return result;
  } catch (error) {
    console.error('[gRPC Client] Checksum generation failed:', error);
    return '';
  }
}


export interface GrpcSDKConfig {
  baseUrl?: string;
  orgId: string;
  userName?: string;
  userId?: string;
  displayName?: string;
  userAgent?: string;
  publicKey?: string;
  debug?: boolean;
  token?: string | (() => string | null | undefined);
}

export class OptiFlowGrpcSDK {
  private readonly transport: GrpcWebFetchTransport;
  private token: string | null = null;
  private tokenGetter?: () => string | null | undefined;

  // Private raw clients to prevent bypass of SDK custom interceptors
  private readonly rawAuth: AuthServiceClient;
  private readonly rawBlog: BlogServiceClient;
  private readonly rawComment: CommentServiceClient;
  private readonly rawOrder: OrderServiceClient;
  private readonly rawPageView: PageViewServiceClient;
  private readonly rawProduct: ProductServiceClient;
  private readonly rawSeo: SeoServiceClient;
  private readonly rawTracking: TrackingServiceClient;
  private readonly rawUserSubmit: UserSubmitServiceClient;

  // Public, fully-typed API methods returning direct response promises
  public readonly auth: {
    login: (req: LoginRequest) => Promise<LoginResponse>;
  };

  public readonly blog: {
    getByQuery: (req: CommonQuery) => Promise<BlogDataSourceResponse>;
    getBySlug: (req: GetBySlugRequest) => Promise<BlogResponseWrapped>;
    getBlogsByBlogGroupSlug: (req: GetBySlugPagedRequest) => Promise<BlogDataSourceResponse>;
    getBlogGroupsBySlug: (req: GetBySlugRequest) => Promise<BlogGroupResponseWrapped>;
    getBlogGroupsByQuery: (req: CommonQuery) => Promise<BlogGroupDataSourceResponse>;
  };

  public readonly comment: {
    createComment: (req: CreateCommentRequest) => Promise<CreateCommentResponse>;
    getCommentsByRef: (req: GetCommentsByRefRequest) => Promise<GetCommentsByRefResponse>;
  };

  public readonly order: {
    placeOrder: (req: PlaceOrderRequest) => Promise<OperationResult>;
    getMyOrders: (req: CommonQuery) => Promise<GetOrdersResponse>;
    getOrderDetail: (req: GetOrderRequest) => Promise<OrderDetailResponse>;
    cancelOrder: (req: CancelOrderRequest) => Promise<OperationResult>;
    getOrderTracking: (req: GetOrderRequest) => Promise<GetOrderTrackingResponse>;
    requestRefund: (req: RequestRefundRequest) => Promise<OperationResult>;
    submitReview: (req: SubmitReviewRequest) => Promise<OperationResult>;
  };

  public readonly pageView: {
    getPageView: (req: GetPageViewRequest) => Promise<PageViewResponse>;
  };

  public readonly product: {
    getByQuery: (req: CommonQuery) => Promise<ProductDataSourceResponse>;
    getBySlug: (req: GetBySlugRequest) => Promise<ProductResponseWrapped>;
    getProductsByProductGroupSlug: (req: GetBySlugPagedRequest) => Promise<ProductDataSourceResponse>;
    getProductGroupsBySlug: (req: GetBySlugRequest) => Promise<ProductGroupResponseWrapped>;
    getProductGroupsByQuery: (req: CommonQuery) => Promise<ProductGroupDataSourceResponse>;
  };

  public readonly seo: {
    getGlobalConfig: (req: Empty) => Promise<SeoGlobalConfigResponse>;
    getMetaByUrl: (req: GetMetaByUrlRequest) => Promise<SeoPageConfigResponse>;
    getSitemapData: (req: GetSitemapDataRequest) => Promise<SitemapDataResponse>;
  };

  public readonly tracking: {
    ingestEvent: (req: UserEventRequest) => Promise<OperationResult>;
  };

  public readonly userSubmit: {
    submit: (req: SubmitRequest) => Promise<OperationResult>;
  };

  constructor(config: GrpcSDKConfig) {
    const baseUrl = config.baseUrl || 'https://grpc.optiflow.vn';
    const publicKey = config.publicKey || DEFAULT_PUBLIC_KEY;
    const isDebug = config.debug !== false;

    if (typeof config.token === 'function') {
      this.tokenGetter = config.token;
    } else if (typeof config.token === 'string') {
      this.token = config.token;
    }

    const self = this;

    this.transport = new GrpcWebFetchTransport({
      baseUrl,
      interceptors: [
        {
          interceptUnary(next, method, input, options) {
            options.meta = {
              checksum: generateChecksum(publicKey),
              'x-org': config.orgId,
              'x-requested-at': Date.now().toString(),
              'x-user-name': config.userName || 'local_dev@optiflow.vn',
              'x-userId': config.userId || 'DEV-LOCAL-001',
              'x-display-name': config.displayName || 'Local Developer',
              'user-agent': config.userAgent || 'QA-Bot',
            };

            // Dynamically resolve and attach authorization token
            let activeToken = self.token;
            if (self.tokenGetter) {
              activeToken = self.tokenGetter() || null;
            }
            if (activeToken) {
              options.meta['authorization'] = `Bearer ${activeToken}`;
            }

            const isDev = typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'development';
            const isBrowser = typeof window !== 'undefined';

            if (isDebug) {
              if (isBrowser) {
                console.groupCollapsed(
                  `%c[gRPC REQ] ${method.service.typeName}/${method.name}`,
                  'color: #2563eb; font-weight: bold; padding: 2px 4px; border-radius: 3px; background: #dbeafe;'
                );
                console.log('Payload:', input);
                console.log('Headers/Metadata:', options.meta);
                console.groupEnd();
              } else {
                console.log(`[gRPC REQ] ${method.service.typeName}/${method.name}`, input);
              }
            }

            const call = next(method, input, options);

            call.response.then(
              (res) => {
                if (isDebug) {
                  if (isBrowser) {
                    console.groupCollapsed(
                      `%c[gRPC RES] ${method.service.typeName}/${method.name}`,
                      'color: #16a34a; font-weight: bold; padding: 2px 4px; border-radius: 3px; background: #dcfce7;'
                    );
                    console.log('Response:', res);
                    console.groupEnd();
                  } else {
                    console.log(`[gRPC RES] ${method.service.typeName}/${method.name}`, res);
                  }
                }
              },
              (err) => {
                if (isDebug) {
                  const isHalted =
                    err instanceof RpcError &&
                    (err.message.toLowerCase().includes('halted') ||
                      err.code === 'UNAVAILABLE' ||
                      (err.meta &&
                        Object.values(err.meta).some(
                          (val) => typeof val === 'string' && val.toLowerCase().includes('halted')
                        )));

                  if (isBrowser) {
                    console.group(
                      `%c[gRPC ERR] ${method.service.typeName}/${method.name}`,
                      'color: #dc2626; font-weight: bold; padding: 2px 4px; border-radius: 3px; background: #fee2e2;'
                    );
                    if (err instanceof RpcError) {
                      console.error('Error Code:', err.code);
                      console.error('Error Message:', err.message);
                      console.error('Metadata:', err.meta);
                    } else {
                      console.error(err);
                    }
                    console.groupEnd();
                  } else {
                    if (err instanceof RpcError) {
                      if (isHalted) {
                        console.error(
                          `🔴 [gRPC HALTED ERROR] ${method.service.typeName}/${method.name}\n` +
                            `Code: ${err.code}\n` +
                            `Message: ${err.message}\n` +
                            `Meta:`,
                          err.meta
                        );
                      } else {
                        console.error(`[gRPC ERR] ${method.service.typeName}/${method.name}`, {
                          code: err.code,
                          message: err.message,
                          meta: err.meta,
                        });
                      }
                    } else {
                      console.error(`[gRPC ERR] ${method.service.typeName}/${method.name}`, err);
                    }
                  }
                }
              }
            );

            return call;
          },
        },
      ],
      fetch: (input, init) =>
        fetch(input, {
          ...init,
          cache: 'no-store',
        } as RequestInit),
    });

    // Instantiate raw clients
    this.rawAuth = new AuthServiceClient(this.transport);
    this.rawBlog = new BlogServiceClient(this.transport);
    this.rawComment = new CommentServiceClient(this.transport);
    this.rawOrder = new OrderServiceClient(this.transport);
    this.rawPageView = new PageViewServiceClient(this.transport);
    this.rawProduct = new ProductServiceClient(this.transport);
    this.rawSeo = new SeoServiceClient(this.transport);
    this.rawTracking = new TrackingServiceClient(this.transport);
    this.rawUserSubmit = new UserSubmitServiceClient(this.transport);

    // Initialize wrapped promise clients
    this.auth = {
      login: (req) => this.rawAuth.login(req).response,
    };

    this.blog = {
      getByQuery: (req) => this.rawBlog.getBlogsByQuery(req).response,
      getBySlug: (req) => this.rawBlog.getBlogDetail(req).response,
      getBlogsByBlogGroupSlug: (req) => this.rawBlog.getBlogsByBlogGroupSlug(req).response,
      getBlogGroupsBySlug: (req) => this.rawBlog.getBlogGroupsBySlug(req).response,
      getBlogGroupsByQuery: (req) => this.rawBlog.getBlogGroupsByQuery(req).response,
    };

    this.comment = {
      createComment: (req) => this.rawComment.createComment(req).response,
      getCommentsByRef: (req) => this.rawComment.getCommentsByRef(req).response,
    };

    this.order = {
      placeOrder: (req) => this.rawOrder.placeOrder(req).response,
      getMyOrders: (req) => this.rawOrder.getMyOrders(req).response,
      getOrderDetail: (req) => this.rawOrder.getOrderDetail(req).response,
      cancelOrder: (req) => this.rawOrder.cancelOrder(req).response,
      getOrderTracking: (req) => this.rawOrder.getOrderTracking(req).response,
      requestRefund: (req) => this.rawOrder.requestRefund(req).response,
      submitReview: (req) => this.rawOrder.submitReview(req).response,
    };

    this.pageView = {
      getPageView: (req) => this.rawPageView.getPageView(req).response,
    };

    this.product = {
      getByQuery: (req) => this.rawProduct.getProductsByQuery(req).response,
      getBySlug: (req) => this.rawProduct.getProductDetail(req).response,
      getProductsByProductGroupSlug: (req) => this.rawProduct.getProductsByProductGroupSlug(req).response,
      getProductGroupsBySlug: (req) => this.rawProduct.getProductGroupsBySlug(req).response,
      getProductGroupsByQuery: (req) => this.rawProduct.getProductGroupsByQuery(req).response,
    };

    this.seo = {
      getGlobalConfig: (req) => this.rawSeo.getGlobalConfig(req).response,
      getMetaByUrl: (req) => this.rawSeo.getMetaByUrl(req).response,
      getSitemapData: (req) => this.rawSeo.getSitemapData(req).response,
    };

    this.tracking = {
      ingestEvent: (req) => this.rawTracking.ingestEvent(req).response,
    };

    this.userSubmit = {
      submit: (req) => this.rawUserSubmit.submit(req).response,
    };
  }

  /**
   * Set authentication token dynamically on the fly
   */
  public setToken(token: string): void {
    this.token = token;
  }

  /**
   * Clear the active authentication token
   */
  public clearToken(): void {
    this.token = null;
  }
}
