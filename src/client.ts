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

// Import compile-time wrapped clients
import {
  WrappedAuthServiceClient,
  WrappedBlogServiceClient,
  WrappedCommentServiceClient,
  WrappedOrderServiceClient,
  WrappedPageViewServiceClient,
  WrappedProductServiceClient,
  WrappedSeoServiceClient,
  WrappedTrackingServiceClient,
  WrappedUserSubmitServiceClient,
} from './generated/wrapped-clients';

const DEFAULT_PUBLIC_KEY = process.env.OPTIFLOW_PUBLIC_KEY || `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnYmTJKkxl/Yg3gA6SQ91foY5CB50LDXcYrq6Ukx8obTuSuH0RAcg/oSem+gT5G1aakdQqtCkYXSHS9wS8kLK3O4AXFCONED4I8tJ8GKRcxFvytxHTIMmqqa+gw+pbPpmV4Zr+KjLHZsLse0jFIJ+gZ2hR3CrAeJ8Au+3uKySNNZ0F2laJAPso9p/80d4nKhf6N/t3/AU2LirnvWyADQeoaXVRQAv3LVpe6IG+bgijg6Cu4rA1kOUxFSj7nD6n1+QZqS7Fu2WdwFd7DbAr1RQKzpxqwF2p7LTifDUUGLrGF45oslxytwbHyEc36eRx1g9mQIdipkIa1KXdjf51sE2jwIDAQAB
-----END PUBLIC KEY-----`;

const DEFAULT_USER_NAME = (typeof process !== 'undefined' && process.env.OPTIFLOW_USER_NAME) || 'local_dev@optiflow.vn';
const DEFAULT_USER_ID = (typeof process !== 'undefined' && process.env.OPTIFLOW_USER_ID) || 'DEV-LOCAL-001';
const DEFAULT_DISPLAY_NAME = (typeof process !== 'undefined' && process.env.OPTIFLOW_DISPLAY_NAME) || 'Local Developer';
const DEFAULT_USER_AGENT = (typeof process !== 'undefined' && process.env.OPTIFLOW_USER_AGENT) || 'QA-Bot';

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

// Legacy type alias for backward-compatibility
export type WrappedClient<T, M = {}> = T;

export class OptiFlowGrpcSDK {
  private readonly transport: GrpcWebFetchTransport;
  private token: string | null = null;
  private tokenGetter?: () => string | null | undefined;

  // Fully statically-typed API service clients
  public readonly auth: WrappedAuthServiceClient;
  public readonly blog: WrappedBlogServiceClient;
  public readonly comment: WrappedCommentServiceClient;
  public readonly order: WrappedOrderServiceClient;
  public readonly pageView: WrappedPageViewServiceClient;
  public readonly product: WrappedProductServiceClient;
  public readonly seo: WrappedSeoServiceClient;
  public readonly tracking: WrappedTrackingServiceClient;
  public readonly userSubmit: WrappedUserSubmitServiceClient;

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
              'x-user-name': config.userName || DEFAULT_USER_NAME,
              'x-userId': config.userId || DEFAULT_USER_ID,
              'x-display-name': config.displayName || DEFAULT_DISPLAY_NAME,
              'user-agent': config.userAgent || DEFAULT_USER_AGENT,
            };

            // Dynamically resolve and attach authorization token
            let activeToken = self.token;
            if (self.tokenGetter) {
              activeToken = self.tokenGetter() || null;
            }
            if (activeToken) {
              options.meta['authorization'] = `Bearer ${activeToken}`;
            }

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

    // Initialize statically-generated wrapped clients
    this.auth = new WrappedAuthServiceClient(new AuthServiceClient(this.transport));
    this.blog = new WrappedBlogServiceClient(new BlogServiceClient(this.transport));
    this.comment = new WrappedCommentServiceClient(new CommentServiceClient(this.transport));
    this.order = new WrappedOrderServiceClient(new OrderServiceClient(this.transport));
    this.pageView = new WrappedPageViewServiceClient(new PageViewServiceClient(this.transport));
    this.product = new WrappedProductServiceClient(new ProductServiceClient(this.transport));
    this.seo = new WrappedSeoServiceClient(new SeoServiceClient(this.transport));
    this.tracking = new WrappedTrackingServiceClient(new TrackingServiceClient(this.transport));
    this.userSubmit = new WrappedUserSubmitServiceClient(new UserSubmitServiceClient(this.transport));
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

/**
 * Helper factory function to instantiate the OptiFlow gRPC SDK without using 'new'
 */
export const grpcSDK = (config: GrpcSDKConfig) => new OptiFlowGrpcSDK(config);
