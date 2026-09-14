import * as nodeCrypto from 'node:crypto';
import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';
import { RpcError, UnaryCall, type RpcMetadata } from '@protobuf-ts/runtime-rpc';

export { RpcError };

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

import {
  glog,
  handleGrpcError,
  configureGLog,
  formatSingleLine,
  type GLogConfig,
} from './logger';

const DEFAULT_PUBLIC_KEY =
  (typeof process !== 'undefined' && process.env.OPTIFLOW_PUBLIC_KEY) ||
  `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnYmTJKkxl/Yg3gA6SQ91foY5CB50LDXcYrq6Ukx8obTuSuH0RAcg/oSem+gT5G1aakdQqtCkYXSHS9wS8kLK3O4AXFCONED4I8tJ8GKRcxFvytxHTIMmqqa+gw+pbPpmV4Zr+KjLHZsLse0jFIJ+gZ2hR3CrAeJ8Au+3uKySNNZ0F2laJAPso9p/80d4nKhf6N/t3/AU2LirnvWyADQeoaXVRQAv3LVpe6IG+bgijg6Cu4rA1kOUxFSj7nD6n1+QZqS7Fu2WdwFd7DbAr1RQKzpxqwF2p7LTifDUUGLrGF45oslxytwbHyEc36eRx1g9mQIdipkIa1KXdjf51sE2jwIDAQAB
-----END PUBLIC KEY-----`;

const DEFAULT_USER_NAME =
  (typeof process !== 'undefined' && process.env.OPTIFLOW_USER_NAME) ||
  'local_dev@optiflow.vn';
const DEFAULT_USER_ID =
  (typeof process !== 'undefined' && process.env.OPTIFLOW_USER_ID) ||
  'DEV-LOCAL-001';
const DEFAULT_DISPLAY_NAME =
  (typeof process !== 'undefined' && process.env.OPTIFLOW_DISPLAY_NAME) ||
  'Local Developer';
const DEFAULT_USER_AGENT =
  (typeof process !== 'undefined' && process.env.OPTIFLOW_USER_AGENT) ||
  'QA-Bot';

const checksumCache = new Map<string, string>();

function generateChecksum(
  publicKey: string = DEFAULT_PUBLIC_KEY,
  values: string = 'web:optiflow_svc'
): string {
  const cacheKey = `${publicKey}:${values}`;
  const hit = checksumCache.get(cacheKey);
  if (hit) {
    return hit;
  }

  try {
    if (!nodeCrypto || typeof nodeCrypto.publicEncrypt !== 'function') {
      return '';
    }

    const md5Hash = nodeCrypto.createHash('md5').update(values).digest('hex');
    const padding = 'xxxxx';
    const rawPayload = padding + md5Hash + padding;

    const encryptedBuffer = nodeCrypto.publicEncrypt(
      {
        key: publicKey,
        padding: nodeCrypto.constants.RSA_PKCS1_PADDING,
      },
      Buffer.from(rawPayload)
    );

    const result = encryptedBuffer.toString('base64');
    checksumCache.set(cacheKey, result);
    return result;
  } catch (error) {
    glog.error(`[gRPC Client] Checksum generation failed | Detail: ${formatSingleLine(error)}`);
    return '';
  }
}

const formatBearerToken = (token: string): string => {
  const trimmed = token.trim();
  return trimmed.startsWith('Bearer ') ? trimmed : `Bearer ${trimmed}`;
};

export interface GrpcSDKConfig {
  /**
   * Mã định danh tổ chức (tùy chọn nếu đã cấu hình biến môi trường OPTIFLOW_ORG_ID)
   */
  orgId?: string;
  /**
   * URL endpoint gRPC Gateway (mặc định: OPTIFLOW_GRPC_URL hoặc 'https://grpc.optiflow.vn')
   */
  baseUrl?: string;
  /**
   * Token xác thực: Chuỗi tĩnh hoặc Hàm getter (sync / async) lấy token theo từng request (Next.js cookies, session, ...)
   */
  token?: string | (() => string | null | undefined | Promise<string | null | undefined>);
  /**
   * Cấu hình Google Cloud Logger cho SDK (hoặc boolean bật/tắt log)
   */
  logging?: GLogConfig | boolean;

  // Cấu hình nâng cao (Tự động fallback về biến môi trường nếu không truyền)
  userName?: string;
  userId?: string;
  displayName?: string;
  userAgent?: string;
  publicKey?: string;
}

// Legacy type alias for backward-compatibility
export type WrappedClient<T, _M = Record<string, unknown>> = T;

export class OptiFlowGrpcSDK {
  private readonly transport: GrpcWebFetchTransport;
  private config: GrpcSDKConfig;
  private token: string | null = null;
  private tokenGetter?: () => string | null | undefined | Promise<string | null | undefined>;

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

  constructor(config: GrpcSDKConfig = {}) {
    this.config = config;
    const baseUrl =
      config.baseUrl ||
      (typeof process !== 'undefined' &&
        (process.env.OPTIFLOW_GRPC_URL ||
          process.env.NEXT_PUBLIC_OPTIFLOW_GRPC_URL ||
          process.env.OPTIFLOW_BASE_URL)) ||
      'https://grpc.optiflow.vn';

    if (config.logging === false) {
      configureGLog({ enableConsole: false, enableRemote: false });
    } else if (typeof config.logging === 'object') {
      configureGLog(config.logging);
    }

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
            const startTime = Date.now();
            const serviceMethod = `${method.service.typeName}/${method.name}`;

            const callPromise = (async () => {
              const meta = await self.getRequestMetadataAsync(
                options.meta as Record<string, string>
              );
              options.meta = meta;

              const call = next(method, input, options);

              call.response.then(
                (res) => {
                  const duration = Date.now() - startTime;
                  const resObj = res as {
                    items?: unknown[];
                    success?: boolean;
                    errorMessage?: string;
                    message?: string;
                  } | null | undefined;

                  // Tự động phân loại case theo quy chuẩn Google Cloud Logging
                  if (
                    !resObj ||
                    (Array.isArray(resObj.items) && resObj.items.length === 0) ||
                    resObj.success === false
                  ) {
                    if (resObj && resObj.success === false) {
                      const reason =
                        resObj.errorMessage || resObj.message || 'Unknown';
                      glog.error(
                        `${serviceMethod} Grpc Business Error | Method: ${serviceMethod} | Reason: ${reason} | Latency: ${duration}ms | Payload: ${formatSingleLine(input)}`
                      );
                    } else {
                      glog.warn(
                        `${serviceMethod} Grpc Data: null | Method: ${serviceMethod} | Latency: ${duration}ms | Payload: ${formatSingleLine(input)}`
                      );
                    }
                  } else {
                    const count = Array.isArray(resObj.items)
                      ? ` | Total: ${resObj.items.length}`
                      : '';
                    glog.info(
                      `${serviceMethod} Grpc Success | Method: ${serviceMethod} | Latency: ${duration}ms${count}`
                    );
                  }
                },
                (err) => {
                  const duration = Date.now() - startTime;
                  handleGrpcError(serviceMethod, err, {
                    payload: input,
                    latency: `${duration}ms`,
                  });
                }
              );

              return call;
            })();

            const headersPromise = callPromise.then((call) => call.headers);
            const responsePromise = callPromise.then((call) => call.response);
            const statusPromise = callPromise.then((call) => call.status);
            const trailersPromise = callPromise.then((call) => call.trailers);

            return new UnaryCall(
              method,
              (options.meta as RpcMetadata) || {},
              input,
              headersPromise,
              responsePromise,
              statusPromise,
              trailersPromise
            );
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
    this.auth = new WrappedAuthServiceClient(
      new AuthServiceClient(this.transport)
    );
    this.blog = new WrappedBlogServiceClient(
      new BlogServiceClient(this.transport)
    );
    this.comment = new WrappedCommentServiceClient(
      new CommentServiceClient(this.transport)
    );
    this.order = new WrappedOrderServiceClient(
      new OrderServiceClient(this.transport)
    );
    this.pageView = new WrappedPageViewServiceClient(
      new PageViewServiceClient(this.transport)
    );
    this.product = new WrappedProductServiceClient(
      new ProductServiceClient(this.transport)
    );
    this.seo = new WrappedSeoServiceClient(
      new SeoServiceClient(this.transport)
    );
    this.tracking = new WrappedTrackingServiceClient(
      new TrackingServiceClient(this.transport)
    );
    this.userSubmit = new WrappedUserSubmitServiceClient(
      new UserSubmitServiceClient(this.transport)
    );
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

  /**
   * Check whether an authentication token is currently available.
   * Returns true if a static token is set or a tokenGetter returns a truthy value.
   */
  public hasToken(): boolean | Promise<boolean> {
    if (this.tokenGetter) {
      const res = this.tokenGetter();
      if (res && typeof (res as Promise<unknown>).then === 'function') {
        return (res as Promise<string | null | undefined>).then((val) => !!val);
      }
      return !!res;
    }
    return this.token !== null;
  }

  /**
   * Sinh object Metadata cơ bản (checksum, x-org, user-agent, timestamps)
   */
  private getBaseMetadata(extraMeta?: Record<string, string>): Record<string, string> {
    const publicKey = this.config.publicKey || DEFAULT_PUBLIC_KEY;
    return {
      checksum: generateChecksum(publicKey),
      'x-org':
        this.config.orgId ||
        (typeof process !== 'undefined' &&
          (process.env.OPTIFLOW_ORG_ID || process.env.NEXT_PUBLIC_OPTIFLOW_ORG_ID)) ||
        '',
      'x-requested-at': Date.now().toString(),
      'x-user-name': this.config.userName || DEFAULT_USER_NAME,
      'x-userId': this.config.userId || DEFAULT_USER_ID,
      'x-display-name': this.config.displayName || DEFAULT_DISPLAY_NAME,
      'user-agent': this.config.userAgent || DEFAULT_USER_AGENT,
      ...extraMeta,
    };
  }

  /**
   * Returns the header/metadata configuration object generated for API requests (synchronously).
   */
  public getRequestMetadata(extraMeta?: Record<string, string>): Record<string, string> {
    const meta = this.getBaseMetadata(extraMeta);

    if (meta.authorization || meta.Authorization) {
      return meta;
    }

    if (this.token) {
      meta.authorization = formatBearerToken(this.token);
      return meta;
    }

    if (this.tokenGetter) {
      try {
        const res = this.tokenGetter();
        if (typeof res === 'string' && res.trim()) {
          meta.authorization = formatBearerToken(res);
        }
      } catch {
        // Ignore synchronous getter error
      }
    }

    return meta;
  }

  /**
   * Returns the header/metadata configuration object asynchronously, resolving tokenGetter if it returns a Promise.
   */
  public async getRequestMetadataAsync(extraMeta?: Record<string, string>): Promise<Record<string, string>> {
    const meta = this.getBaseMetadata(extraMeta);

    if (meta.authorization || meta.Authorization) {
      return meta;
    }

    if (this.token) {
      meta.authorization = formatBearerToken(this.token);
      return meta;
    }

    if (this.tokenGetter) {
      try {
        const res = this.tokenGetter();
        const resolved =
          res && typeof (res as Promise<unknown>).then === 'function'
            ? await res
            : res;

        if (typeof resolved === 'string' && resolved.trim()) {
          meta.authorization = formatBearerToken(resolved);
        }
      } catch (err) {
        glog.warn(`[gRPC Client] Token getter error | Detail: ${formatSingleLine(err)}`);
      }
    }

    return meta;
  }
}

/**
 * Helper factory function to instantiate the OptiFlow gRPC SDK without using 'new'
 */
export const grpcSDK = (config: GrpcSDKConfig = {}) => new OptiFlowGrpcSDK(config);

