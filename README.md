# @ladosite/grpc-sdk

[![Version](https://img.shields.io/badge/version-0.1.2-blue.svg)](https://github.com/oh2k1vn/ladosite-grpc-sdk)
[![gRPC Web](https://img.shields.io/badge/gRPC--Web-Protobuf--ts-green.svg)](https://github.com/timostamm/protobuf-ts)

Thư viện gRPC SDK chứa các gRPC Client được tự động biên dịch từ định nghĩa Protobuf (`.proto`), giúp các dự án (Next.js, Node.js...) kết nối và sử dụng hệ thống dịch vụ OptiFlow đồng bộ, bảo mật và an toàn.

---

## ⚡ 1. Cài đặt

Khai báo trực tiếp vào `dependencies` trong `package.json` của dự án:

```json
"dependencies": {
  "@ladosite/grpc-sdk": "git+https://github.com/oh2k1vn/ladosite-grpc-sdk.git#v0.1.2"
}
```

Sau đó chạy lệnh:
```bash
npm install
```

---

## ⚙️ 2. Khởi tạo & Xác thực (Authentication)

### A. Khởi tạo Client Instance
Khởi tạo instance tập trung tại `src/lib/grpc.ts` trong dự án Next.js:

```typescript
import 'server-only';
import { OptiFlowGrpcSDK } from '@ladosite/grpc-sdk';
// Hoặc sử dụng helper factory function: import { grpcSDK } from '@ladosite/grpc-sdk';

export const grpcSDK = new OptiFlowGrpcSDK({
  baseUrl: process.env.OPTIFLOW_GRPC_URL || 'https://grpc.optiflow.vn',
  orgId: process.env.OPTIFLOW_ORG_ID || 'xxxxxxxxxxxxxxxx',
  debug: process.env.NODE_ENV === 'development',
});
```

### B. Quản lý Token & Session Tự Động
SDK tự động đính kèm token vào HTTP/2 & gRPC Metadata header `Authorization: Bearer <token>`:

```typescript
import { OptiFlowGrpcSDK } from '@ladosite/grpc-sdk';
import { cookies } from 'next/headers';

export const grpcSDK = new OptiFlowGrpcSDK({
  baseUrl: process.env.OPTIFLOW_GRPC_URL,
  orgId: process.env.OPTIFLOW_ORG_ID,
  
  // Hàm Dynamic Getter lấy token theo từng request (Next.js Server Component)
  token: async () => {
    const cookieStore = await cookies();
    return cookieStore.get('auth_token')?.value;
  }
});

// Hoặc thiết lập / xóa token động trên Client-Side instance:
// grpcSDK.setToken('new_access_token_value');
// grpcSDK.clearToken();
```

---

## 📦 3. Các gRPC Services & Phương thức Cung cấp

SDK bọc sẵn các Service Clients qua `sdk.<service>`:

| Service Property | Dịch vụ gRPC | Phương thức API chính | Mô tả |
| :--- | :--- | :--- | :--- |
| `sdk.seo` | `SeoService` | `getGlobalConfig()`, `getMetaByUrl()`, `getSitemapData()` | SEO Metadata Global, Page SEO, XML Sitemap |
| `sdk.auth` | `AuthService` | `login()` | Đăng nhập và xác thực token |
| `sdk.blog` | `BlogService` | `getBlogsByQuery()`, `getBlogDetail()`, `getBlogGroupsByQuery()`, `getBlogGroupsBySlug()` | Bài viết blog, danh mục bài viết |
| `sdk.product` | `ProductService` | `getProductsByQuery()`, `getProductDetail()`, `getProductGroupsByQuery()`, `getProductGroupsBySlug()` | Sản phẩm, danh mục sản phẩm |
| `sdk.order` | `OrderService` | `placeOrder()`, `getMyOrders()`, `getOrderDetail()`, `cancelOrder()`, `getOrderTracking()`, `requestRefund()`, `submitReview()` | Đặt hàng và quản lý đơn hàng |
| `sdk.comment` | `CommentService` | `createComment()`, `getCommentsByRef()` | Bình luận và đánh giá sản phẩm/bài viết |
| `sdk.pageView` | `PageViewService` | `getPageView()` | Thống kê lượt xem trang |
| `sdk.tracking` | `TrackingService` | `ingestEvent()` | Ghi nhận sự kiện người dùng (Analytics) |
| `sdk.userSubmit` | `UserSubmitService` | `submit()` | Xử lý form liên hệ, thu thập thông tin lead |

---

## 🔍 4. Cấu trúc Query, Criteria & Sorting

Để truy vấn dữ liệu dạng danh sách (Blog, Product,...), SDK export sẵn các type từ `./criteria`:

```typescript
import type { Query, Criteria, Sort } from '@ladosite/grpc-sdk';

const query: Query = {
  pageNumber: 1,
  pageSize: 10,
  criteria: [
    { field: 'status', value: 'published', type: 'equal' }
  ],
  sort: { field: 'createdAt', order: 'desc' }
};

const response = await grpcSDK.blog.getBlogsByQuery({ query });
```

---

## 🌐 5. Tự động hóa SEO cho Next.js (Zero-Crash)

SDK tích hợp sẵn các helper SEO và React Component giúp tự động fetch API gRPC (`GetGlobalConfig`, `GetMetaByUrl`), sinh ra Next.js `Metadata` chuẩn và tự động chèn các thẻ Tracking Scripts/Schema Markup JSON-LD.

> 🛡 **Khả năng chống sập ứng dụng (Zero-Crash Guarantee):** Các helper SEO tự động bọc `try-catch` an toàn tuyệt đối. Nếu dịch vụ gRPC SEO gặp sự cố (timeout, ngắt kết nối, lỗi server), ứng dụng Next.js **không bị crash (không lỗi 500)** mà âm thầm fallback về metadata an toàn.

### Các hàm SEO Helper được Export trong `src/index.ts`:

- **`fetchSeoMetadata(options)`**: Hàm `async` tự động fetch gRPC API SEO (Global + Page) và trả về Next.js `Metadata` hoàn chỉnh. (Khuyên dùng cho `generateMetadata` trong Next.js).
- **`fetchSeoData(options)`**: Hàm `async` fetch đầy đủ `{ global, page, metadata }` để dùng song song cho cả `generateMetadata` và `<SeoScripts />`.
- **`generateMetadata(options)`**: Hàm thuần (synchronous) chuyển đổi từ dữ liệu DTO `{ global, page }` có sẵn thành Next.js `Metadata`.
- **`handleSitemapRequest(options)`**: Hàm `async` tạo Web Standard `Response` (Content-Type: `application/xml`) phục vụ Route Handler `app/sitemap.xml/route.ts`.
- **`fetchSitemapXml(options)`**: Hàm `async` trả về chuỗi XML sitemap thô.
- **`handleRobotsTxtRequest(options)`**: Hàm `async` tạo Web Standard `Response` (Content-Type: `text/plain`) phục vụ Route Handler `app/robots.txt/route.ts`.
- **`fetchRobotsTxt(options)`**: Hàm `async` trả về chuỗi nội dung `robots.txt` thô.
- **`<SeoScripts />`**: React Component tự động chèn GTM, GA4, Meta Pixel & JSON-LD Schema Markup vào HTML `<head>`.

---

### A. Cấu hình SEO tại Root Layout (`app/layout.tsx`)

```tsx
import type { Metadata } from 'next';
import { fetchSeoMetadata, fetchSeoData, SeoScripts } from '@ladosite/grpc-sdk';
import { grpcSDK } from '@/lib/grpc';

// 1. Tự động fetch Global SEO gRPC và sinh Next.js Metadata cho Root Layout
export async function generateMetadata(): Promise<Metadata> {
  return await fetchSeoMetadata({ sdk: grpcSDK, fallbackTitle: 'Trang chủ' });
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // 2. Lấy dữ liệu Global SEO để render Tracking Script & Schema JSON-LD
  const { global } = await fetchSeoData({ sdk: grpcSDK });

  return (
    <html lang="vi">
      <head>
        {/* Tự động chèn GTM, GA4, Meta Pixel & Schema Markup JSON-LD */}
        <SeoScripts global={global} />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### B. Cấu hình SEO cho Trang chi tiết (Product / Blog) (`app/blog/[slug]/page.tsx`)

```tsx
import type { Metadata } from 'next';
import { fetchSeoMetadata } from '@ladosite/grpc-sdk';
import { grpcSDK } from '@/lib/grpc';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// 1 dòng duy nhất để fetch Page SEO theo URL & sinh Next.js Metadata!
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return await fetchSeoMetadata({
    sdk: grpcSDK,
    url: `/blog/${slug}`,
    fallbackTitle: 'Chi tiết bài viết',
  });
}

export default async function BlogPostPage() {
  return <div>Nội dung bài viết...</div>;
}
```

### C. Cấu hình Sitemap XML & Sub-Sitemaps Tự động (`app/sitemap.xml/route.ts`)

```tsx
import { handleSitemapRequest } from '@ladosite/grpc-sdk';
import { grpcSDK } from '@/lib/grpc';

export async function GET(request: Request) {
  return await handleSitemapRequest({ sdk: grpcSDK, request });
}
```

Và dynamic sub-sitemap handler (`app/[slug]/route.ts`):

```tsx
import { handleSitemapRequest } from '@ladosite/grpc-sdk';
import { grpcSDK } from '@/lib/grpc';

export async function GET(request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug.endsWith('.xml')) {
    return await handleSitemapRequest({ sdk: grpcSDK, request });
  }
  return new Response('Not Found', { status: 404 });
}
```

### D. Cấu hình Robots.txt Tự động (`app/robots.txt/route.ts`)

```tsx
import { handleRobotsTxtRequest } from '@ladosite/grpc-sdk';
import { grpcSDK } from '@/lib/grpc';

export async function GET() {
  return await handleRobotsTxtRequest({ sdk: grpcSDK });
}
```

---

## 📋 6. Tài liệu Bổ sung cho Backend

Để xem chi tiết danh sách các trường gRPC Protobuf cần bổ sung cho module SEO (hreflang, Twitter cards, Sitemap priority...), vui lòng tham khảo file:
- **[BACKEND_SEO_REQUIREMENTS.md](BACKEND_SEO_REQUIREMENTS.md)**

---

## 🧪 7. Công cụ Thử nghiệm (Playground Sandbox)

SDK tích hợp sẵn công cụ CLI và Server Web để kiểm thử gRPC API cục bộ trên Node.js mà không cần dựng proxy server:

1. **Khởi chạy CLI Interactive Playground**:
   ```bash
   npm run playground
   ```
2. **Khởi chạy Web Playground Server**:
   ```bash
   npm run playground:web
   ```
3. **Cấu hình Payload**:
   Các tham số mẫu của từng API được lưu tại `playground/payloads/*.json`. Bạn có thể chỉnh sửa trực tiếp các file JSON này và CLI sẽ áp dụng ngay lập tức mà không cần khởi động lại.

