import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';
import { RpcError, RpcOptions } from '@protobuf-ts/runtime-rpc';
import { generateChecksum, DEFAULT_PUBLIC_KEY } from './utils/crypto';
import {
  toNextMetadata,
  generateProductJsonLd,
  generateBreadcrumbJsonLd,
  generateItemListJsonLd,
  generateArticleJsonLd,
  toNextSitemap,
} from './utils/seo';
import type {
  GrpcFetchOptions,
  NextMetadata,
  ProductPageDataResult,
  CategoryPageDataResult,
  BlogPageDataResult,
  EcomPageMetaResult,
  NextSitemapItem,
} from './types';

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
  defaultFetchOptions?: GrpcFetchOptions;
}

export class OptiFlowGrpcSDK {
  private readonly transport: GrpcWebFetchTransport;
  private token: string | null = null;
  private tokenGetter?: () => string | null | undefined;

  // Private lazy instances of raw clients
  private _rawAuth?: AuthServiceClient;
  private _rawBlog?: BlogServiceClient;
  private _rawComment?: CommentServiceClient;
  private _rawOrder?: OrderServiceClient;
  private _rawPageView?: PageViewServiceClient;
  private _rawProduct?: ProductServiceClient;
  private _rawSeo?: SeoServiceClient;
  private _rawTracking?: TrackingServiceClient;
  private _rawUserSubmit?: UserSubmitServiceClient;

  // Public getters for raw clients (Lazy instantiated)
  public get rawAuth(): AuthServiceClient {
    if (!this._rawAuth) this._rawAuth = new AuthServiceClient(this.transport);
    return this._rawAuth;
  }
  public get rawBlog(): BlogServiceClient {
    if (!this._rawBlog) this._rawBlog = new BlogServiceClient(this.transport);
    return this._rawBlog;
  }
  public get rawComment(): CommentServiceClient {
    if (!this._rawComment) this._rawComment = new CommentServiceClient(this.transport);
    return this._rawComment;
  }
  public get rawOrder(): OrderServiceClient {
    if (!this._rawOrder) this._rawOrder = new OrderServiceClient(this.transport);
    return this._rawOrder;
  }
  public get rawPageView(): PageViewServiceClient {
    if (!this._rawPageView) this._rawPageView = new PageViewServiceClient(this.transport);
    return this._rawPageView;
  }
  public get rawProduct(): ProductServiceClient {
    if (!this._rawProduct) this._rawProduct = new ProductServiceClient(this.transport);
    return this._rawProduct;
  }
  public get rawSeo(): SeoServiceClient {
    if (!this._rawSeo) this._rawSeo = new SeoServiceClient(this.transport);
    return this._rawSeo;
  }
  public get rawTracking(): TrackingServiceClient {
    if (!this._rawTracking) this._rawTracking = new TrackingServiceClient(this.transport);
    return this._rawTracking;
  }
  public get rawUserSubmit(): UserSubmitServiceClient {
    if (!this._rawUserSubmit) this._rawUserSubmit = new UserSubmitServiceClient(this.transport);
    return this._rawUserSubmit;
  }

  // Domain API method wrappers
  public readonly auth: {
    login: (req: LoginRequest, options?: RpcOptions) => Promise<LoginResponse>;
  };

  public readonly blog: {
    getByQuery: (req: CommonQuery, options?: RpcOptions) => Promise<BlogDataSourceResponse>;
    getBySlug: (req: GetBySlugRequest, options?: RpcOptions) => Promise<BlogResponseWrapped>;
    getBlogsByBlogGroupSlug: (req: GetBySlugPagedRequest, options?: RpcOptions) => Promise<BlogDataSourceResponse>;
    getBlogGroupsBySlug: (req: GetBySlugRequest, options?: RpcOptions) => Promise<BlogGroupResponseWrapped>;
    getBlogGroupsByQuery: (req: CommonQuery, options?: RpcOptions) => Promise<BlogGroupDataSourceResponse>;
  };

  public readonly comment: {
    createComment: (req: CreateCommentRequest, options?: RpcOptions) => Promise<CreateCommentResponse>;
    getCommentsByRef: (req: GetCommentsByRefRequest, options?: RpcOptions) => Promise<GetCommentsByRefResponse>;
  };

  public readonly order: {
    placeOrder: (req: PlaceOrderRequest, options?: RpcOptions) => Promise<OperationResult>;
    getMyOrders: (req: CommonQuery, options?: RpcOptions) => Promise<GetOrdersResponse>;
    getOrderDetail: (req: GetOrderRequest, options?: RpcOptions) => Promise<OrderDetailResponse>;
    cancelOrder: (req: CancelOrderRequest, options?: RpcOptions) => Promise<OperationResult>;
    getOrderTracking: (req: GetOrderRequest, options?: RpcOptions) => Promise<GetOrderTrackingResponse>;
    requestRefund: (req: RequestRefundRequest, options?: RpcOptions) => Promise<OperationResult>;
    submitReview: (req: SubmitReviewRequest, options?: RpcOptions) => Promise<OperationResult>;
  };

  public readonly pageView: {
    getPageView: (req: GetPageViewRequest, options?: RpcOptions) => Promise<PageViewResponse>;
  };

  public readonly product: {
    getByQuery: (req: CommonQuery, options?: RpcOptions) => Promise<ProductDataSourceResponse>;
    getBySlug: (req: GetBySlugRequest, options?: RpcOptions) => Promise<ProductResponseWrapped>;
    getProductsByProductGroupSlug: (req: GetBySlugPagedRequest, options?: RpcOptions) => Promise<ProductDataSourceResponse>;
    getProductGroupsBySlug: (req: GetBySlugRequest, options?: RpcOptions) => Promise<ProductGroupResponseWrapped>;
    getProductGroupsByQuery: (req: CommonQuery, options?: RpcOptions) => Promise<ProductGroupDataSourceResponse>;
  };

  public readonly seo: {
    getGlobalConfig: (req: Empty, options?: RpcOptions) => Promise<SeoGlobalConfigResponse>;
    getMetaByUrl: (req: GetMetaByUrlRequest, options?: RpcOptions) => Promise<SeoPageConfigResponse>;
    getSitemapData: (req: GetSitemapDataRequest, options?: RpcOptions) => Promise<SitemapDataResponse>;
  };

  public readonly tracking: {
    ingestEvent: (req: UserEventRequest, options?: RpcOptions) => Promise<OperationResult>;
  };

  public readonly userSubmit: {
    submit: (req: SubmitRequest, options?: RpcOptions) => Promise<OperationResult>;
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
              ...(options.meta || {}),
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
                  if (isBrowser) {
                    console.group(
                      `%c[gRPC ERR] ${method.service.typeName}/${method.name}`,
                      'color: #dc2626; font-weight: bold; padding: 2px 4px; border-radius: 3px; background: #fee2e2;'
                    );
                    console.error(err);
                    console.groupEnd();
                  } else {
                    console.error(`[gRPC ERR] ${method.service.typeName}/${method.name}`, err);
                  }
                }
              }
            );

            return call;
          },
        },
      ],
      fetch: (input, init) => {
        const fetchInit: RequestInit = {
          ...init,
          ...(config.defaultFetchOptions as RequestInit),
        };
        return fetch(input, fetchInit);
      },
    });

    // Wrapped promise clients using lazy raw client getters
    this.auth = {
      login: (req, options) => this.rawAuth.login(req, options).response,
    };

    this.blog = {
      getByQuery: (req, options) => this.rawBlog.getBlogsByQuery(req, options).response,
      getBySlug: (req, options) => this.rawBlog.getBlogDetail(req, options).response,
      getBlogsByBlogGroupSlug: (req, options) => this.rawBlog.getBlogsByBlogGroupSlug(req, options).response,
      getBlogGroupsBySlug: (req, options) => this.rawBlog.getBlogGroupsBySlug(req, options).response,
      getBlogGroupsByQuery: (req, options) => this.rawBlog.getBlogGroupsByQuery(req, options).response,
    };

    this.comment = {
      createComment: (req, options) => this.rawComment.createComment(req, options).response,
      getCommentsByRef: (req, options) => this.rawComment.getCommentsByRef(req, options).response,
    };

    this.order = {
      placeOrder: (req, options) => this.rawOrder.placeOrder(req, options).response,
      getMyOrders: (req, options) => this.rawOrder.getMyOrders(req, options).response,
      getOrderDetail: (req, options) => this.rawOrder.getOrderDetail(req, options).response,
      cancelOrder: (req, options) => this.rawOrder.cancelOrder(req, options).response,
      getOrderTracking: (req, options) => this.rawOrder.getOrderTracking(req, options).response,
      requestRefund: (req, options) => this.rawOrder.requestRefund(req, options).response,
      submitReview: (req, options) => this.rawOrder.submitReview(req, options).response,
    };

    this.pageView = {
      getPageView: (req, options) => this.rawPageView.getPageView(req, options).response,
    };

    this.product = {
      getByQuery: (req, options) => this.rawProduct.getProductsByQuery(req, options).response,
      getBySlug: (req, options) => this.rawProduct.getProductDetail(req, options).response,
      getProductsByProductGroupSlug: (req, options) => this.rawProduct.getProductsByProductGroupSlug(req, options).response,
      getProductGroupsBySlug: (req, options) => this.rawProduct.getProductGroupsBySlug(req, options).response,
      getProductGroupsByQuery: (req, options) => this.rawProduct.getProductGroupsByQuery(req, options).response,
    };

    this.seo = {
      getGlobalConfig: (req, options) => this.rawSeo.getGlobalConfig(req, options).response,
      getMetaByUrl: (req, options) => this.rawSeo.getMetaByUrl(req, options).response,
      getSitemapData: (req, options) => this.rawSeo.getSitemapData(req, options).response,
    };

    this.tracking = {
      ingestEvent: (req, options) => this.rawTracking.ingestEvent(req, options).response,
    };

    this.userSubmit = {
      submit: (req, options) => this.rawUserSubmit.submit(req, options).response,
    };
  }

  /**
   * Set authentication token dynamically on the fly
   */
  public setToken(token: string): void {
    this.token = token;
  }

  /**
   * Clear active authentication token
   */
  public clearToken(): void {
    this.token = null;
  }

  // =========================================================================
  // HIGH-LEVEL DIRECT E-COMMERCE PAGE HELPERS (ZERO BOILERPLATE FOR NEXT.JS)
  // =========================================================================

  /**
   * 1-Line Helper for Product Detail Pages (PDP) in Next.js App Router
   * Returns Product data, Next.js Metadata, and Google Schema.org Product & Breadcrumb JSON-LD
   */
  public async getProductPageData(
    params: { slug: string; baseUrl?: string },
    fetchOptions?: GrpcFetchOptions
  ): Promise<ProductPageDataResult> {
    try {
      const [productRes, seoRes] = await Promise.all([
        this.product.getBySlug({ slug: params.slug }, fetchOptions as any).catch(() => null),
        this.seo.getMetaByUrl({ url: `/products/${params.slug}` }, fetchOptions as any).catch(() => null),
      ]);

      const product = productRes?.data;
      if (!product) {
        return { product: null, metadata: null, jsonLdScript: null };
      }

      const productUrl = params.baseUrl ? `${params.baseUrl}/products/${params.slug}` : undefined;
      const metadata = toNextMetadata(seoRes, null, {
        title: product.name,
        description: product.description,
        image: product.imgUrl,
        canonicalUrl: productUrl,
      });

      const jsonLdScript = [
        generateProductJsonLd(product, { url: productUrl }),
        generateBreadcrumbJsonLd([
          { name: 'Trang chủ', url: params.baseUrl || '/' },
          { name: product.categoryName || 'Sản phẩm', url: params.baseUrl ? `${params.baseUrl}/categories` : '/categories' },
          { name: product.name, url: productUrl || '#' },
        ]),
      ];

      return { product, metadata, jsonLdScript, error: null };
    } catch (error: any) {
      return { product: null, metadata: null, jsonLdScript: null, error };
    }
  }

  /**
   * 1-Line Helper for Category / Product Listing Pages (PLP) in Next.js App Router
   */
  public async getCategoryPageData(
    params: { slug: string; pageNumber?: number; pageSize?: number; baseUrl?: string },
    fetchOptions?: GrpcFetchOptions
  ): Promise<CategoryPageDataResult> {
    try {
      const pageNumber = params.pageNumber || 1;
      const pageSize = params.pageSize || 20;

      const [groupRes, productsRes, seoRes] = await Promise.all([
        this.product.getProductGroupsBySlug({ slug: params.slug }, fetchOptions as any).catch(() => null),
        this.product.getProductsByProductGroupSlug({ slug: params.slug, pageNumber, pageSize }, fetchOptions as any).catch(() => null),
        this.seo.getMetaByUrl({ url: `/categories/${params.slug}` }, fetchOptions as any).catch(() => null),
      ]);

      const productGroup = groupRes?.data;
      const products = productsRes?.data || [];

      const categoryUrl = params.baseUrl ? `${params.baseUrl}/categories/${params.slug}` : undefined;
      const metadata = toNextMetadata(seoRes, null, {
        title: productGroup?.name || 'Danh mục sản phẩm',
        description: productGroup?.description || '',
        canonicalUrl: categoryUrl,
      });

      const jsonLdScript = [
        generateItemListJsonLd(products, { categoryName: productGroup?.name, baseUrl: params.baseUrl }),
        generateBreadcrumbJsonLd([
          { name: 'Trang chủ', url: params.baseUrl || '/' },
          { name: productGroup?.name || 'Danh mục', url: categoryUrl || '#' },
        ]),
      ];

      return { productGroup, products, metadata, jsonLdScript, error: null };
    } catch (error: any) {
      return { productGroup: null, products: null, metadata: null, jsonLdScript: null, error };
    }
  }

  /**
   * 1-Line Helper for Generic Page SEO Metadata in Next.js App Router
   */
  public async getPageMeta(
    params: { url: string },
    fetchOptions?: GrpcFetchOptions
  ): Promise<EcomPageMetaResult> {
    try {
      const seoRes = await this.seo.getMetaByUrl({ url: params.url }, fetchOptions as any);
      const metadata = toNextMetadata(seoRes);

      return { metadata, jsonLdScript: [], error: null };
    } catch (error: any) {
      return { metadata: null, jsonLdScript: null, error };
    }
  }

  /**
   * 1-Line Helper for Blog Article Detail Pages in Next.js App Router
   */
  public async getBlogPageData(
    params: { slug: string; baseUrl?: string },
    fetchOptions?: GrpcFetchOptions
  ): Promise<BlogPageDataResult> {
    try {
      const [blogRes, seoRes] = await Promise.all([
        this.blog.getBySlug({ slug: params.slug }, fetchOptions as any).catch(() => null),
        this.seo.getMetaByUrl({ url: `/blog/${params.slug}` }, fetchOptions as any).catch(() => null),
      ]);

      const blog = blogRes?.data;
      if (!blog) {
        return { blog: null, metadata: null, jsonLdScript: null };
      }

      const blogUrl = params.baseUrl ? `${params.baseUrl}/blog/${params.slug}` : undefined;
      const metadata = toNextMetadata(seoRes, null, {
        title: blog.title,
        description: blog.shortDescription,
        image: blog.imgUrl,
        canonicalUrl: blogUrl,
      });

      const jsonLdScript = [
        generateArticleJsonLd(blog, { baseUrl: params.baseUrl }),
        generateBreadcrumbJsonLd([
          { name: 'Trang chủ', url: params.baseUrl || '/' },
          { name: 'Tin tức', url: params.baseUrl ? `${params.baseUrl}/blog` : '/blog' },
          { name: blog.title, url: blogUrl || '#' },
        ]),
      ];

      return { blog, metadata, jsonLdScript, error: null };
    } catch (error: any) {
      return { blog: null, metadata: null, jsonLdScript: null, error };
    }
  }

  /**
   * 1-Line Helper for app/sitemap.ts in Next.js App Router
   */
  public async getSitemap(
    params: { url: string },
    fetchOptions?: GrpcFetchOptions
  ): Promise<NextSitemapItem[]> {
    try {
      const sitemapRes = await this.seo.getSitemapData({ url: params.url }, fetchOptions as any);
      return toNextSitemap(sitemapRes);
    } catch {
      return [];
    }
  }
}
