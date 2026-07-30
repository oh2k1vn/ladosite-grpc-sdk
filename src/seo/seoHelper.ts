import type { Metadata } from "next";
import type { OptiFlowGrpcSDK } from "../client";
import type { WrappedSeoServiceClient } from "../generated/wrapped-clients";
import { generateMetadata } from "./generateMetadata";
import type {
    SeoPageConfigResponse,
    SeoGlobalConfigResponse,
    SeoPageConfigData,
    SeoGlobalConfigData
} from "../generated/Protos/seo";

export interface FetchSeoOptions {
    /**
     * Instance của OptiFlowGrpcSDK.
     */
    sdk?: OptiFlowGrpcSDK;
    /**
     * Instance của WrappedSeoServiceClient (ví dụ: sdk.seo).
     */
    seoClient?: WrappedSeoServiceClient;
    /**
     * Đường dẫn URL của trang hiện tại (dùng để tự động fetch Page SEO).
     * Ví dụ: "/products/laptop-lenovo" hoặc "https://ladosite.vn/products/laptop-lenovo".
     */
    url?: string;
    /**
     * Dữ liệu Global SEO đã fetch sẵn (nếu có).
     */
    global?: SeoGlobalConfigResponse | SeoGlobalConfigData;
    /**
     * Dữ liệu Page SEO đã fetch sẵn (nếu có).
     */
    page?: SeoPageConfigResponse | SeoPageConfigData;
    /**
     * Tiêu đề dự phòng khi API SEO lỗi hoặc chưa có dữ liệu.
     */
    fallbackTitle?: string;
}

export interface FetchSeoDataResult {
    global?: SeoGlobalConfigData;
    page?: SeoPageConfigData;
    metadata: Metadata;
}

/**
 * Hàm helper tự động fetch SEO từ gRPC API và trả về Next.js Metadata chuẩn.
 * Tự động bọc try-catch an toàn (Zero Crash) - Không làm sập ứng dụng khi gRPC API gặp sự cố.
 */
export async function fetchSeoMetadata(options: FetchSeoOptions = {}): Promise<Metadata> {
    const result = await fetchSeoData(options);
    return result.metadata;
}

/**
 * Tự động hóa fetch đầy đủ dữ liệu SEO (Global + Page + Metadata) từ gRPC SDK.
 * Bọc try-catch tuyệt đối an toàn, chạy bất đồng bộ song song (Promise.allSettled) để tối ưu tốc độ.
 */
export async function fetchSeoData(options: FetchSeoOptions = {}): Promise<FetchSeoDataResult> {
    let globalData: SeoGlobalConfigData | undefined =
        (options.global && 'data' in options.global && options.global.data)
            ? options.global.data
            : (options.global as SeoGlobalConfigData | undefined);

    let pageData: SeoPageConfigData | undefined =
        (options.page && 'data' in options.page && options.page.data)
            ? options.page.data
            : (options.page as SeoPageConfigData | undefined);

    const { sdk, url, fallbackTitle } = options;
    const seoClient = options.seoClient || sdk?.seo;

    if (seoClient) {
        const promises: Promise<void>[] = [];

        // 1. Tự động fetch Global SEO song song nếu chưa có
        if (!globalData) {
            promises.push(
                seoClient.getGlobalConfig({})
                    .then(res => {
                        if (res?.success && res.data) {
                            globalData = res.data;
                        }
                    })
                    .catch(err => {
                        console.warn("[OptiFlow SDK] GetGlobalConfig SEO failed safely:", err);
                    })
            );
        }

        // 2. Tự động fetch Page SEO song song bằng URL nếu chưa có
        if (url && !pageData) {
            promises.push(
                seoClient.getMetaByUrl({ url })
                    .then(res => {
                        if (res?.success && res.data) {
                            pageData = res.data;
                        }
                    })
                    .catch(err => {
                        console.warn(`[OptiFlow SDK] GetMetaByUrl SEO failed safely for URL (${url}):`, err);
                    })
            );
        }

        // Thực thi tất cả request API SEO song song để tối ưu latency
        if (promises.length > 0) {
            await Promise.allSettled(promises);
        }
    }

    // 3. Tạo Next.js Metadata chuẩn
    let metadata = generateMetadata({
        global: globalData,
        page: pageData,
    });

    // Fallback title nếu không có dữ liệu SEO nào và có fallbackTitle truyền vào
    if ((!metadata || Object.keys(metadata).length === 0) && fallbackTitle) {
        metadata = {
            title: fallbackTitle,
        };
    }

    return {
        global: globalData,
        page: pageData,
        metadata,
    };
}
