# @ladosite/grpc-sdk

Thư viện gRPC SDK chứa các gRPC Client được tự động biên dịch từ định nghĩa Protobuf (`.proto`), giúp các dự án (Next.js, Node.js...) kết nối và sử dụng các dịch vụ của OptiFlow đồng bộ và an toàn.

---

## ⚡ 1. Cài đặt

Thêm trực tiếp vào `dependencies` trong `package.json` của dự án:

```json
"dependencies": {
  "@ladosite/grpc-sdk": "git+https://github.com/oh2k1vn/ladosite-grpc-sdk.git#v1.0.0"
}
```

Sau đó chạy lệnh:
```bash
npm install
```

---

## ⚙️ 2. Khởi tạo & Xác thực

### A. Khởi tạo Client
Ví dụ khởi tạo tại `src/lib/grpc.ts` trong dự án Next.js:

```typescript
import 'server-only';
import { OptiFlowGrpcSDK } from '@ladosite/grpc-sdk';

export const grpcSDK = new OptiFlowGrpcSDK({
  baseUrl: process.env.OPTIFLOW_GRPC_URL || 'https://grpc.optiflow.vn',
  orgId: process.env.OPTIFLOW_ORG_ID || 'xxxxxxxxxxxxxxxx',
  debug: process.env.NODE_ENV === 'development',
});
```

### B. Quản lý Token & Session
SDK tự động đính kèm token vào header `Authorization: Bearer <token>`:

```typescript
import { OptiFlowGrpcSDK } from '@ladosite/grpc-sdk';
import { cookies } from 'next/headers';

export const grpcSDK = new OptiFlowGrpcSDK({
  baseUrl: process.env.OPTIFLOW_GRPC_URL,
  orgId: process.env.OPTIFLOW_ORG_ID,
  
  // Hàm Dynamic Getter lấy token theo từng request (Next.js Server Component)
  token: () => {
    const cookieStore = cookies();
    return cookieStore.get('auth_token')?.value;
  }
});

// Hoặc thiết lập / xóa token động trên client-side instance:
// grpcSDK.setToken('new_access_token_value');
// grpcSDK.clearToken();
```

---

## 🌐 3. Tự động hóa SEO cho Next.js (Zero-Crash)

SDK tích hợp sẵn các helper SEO và React Component giúp tự động fetch API gRPC (`GetGlobalConfig`, `GetMetaByUrl`), sinh ra Next.js `Metadata` chuẩn và tự động chèn các thẻ Tracking Scripts/Schema Markup JSON-LD.

> 🛡 **Khả năng chống sập ứng dụng (Zero-Crash Guarantee):** Các helper SEO tự động bọc `try-catch` an toàn tuyệt đối. Nếu dịch vụ gRPC SEO gặp sự cố (timeout, ngắt kết nối, lỗi server), ứng dụng Next.js **không bị crash (không lỗi 500)** mà âm thầm fallback về metadata an toàn.

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

### C. Cấu hình Sitemap XML & Sub-Sitemaps Tự động

1. **Root Sitemap Index (`app/sitemap.xml/route.ts`)**:
```tsx
import { handleSitemapRequest } from '@ladosite/grpc-sdk';
import { grpcSDK } from '@/lib/grpc';

export async function GET(request: Request) {
  return await handleSitemapRequest({ sdk: grpcSDK, request });
}
```

2. **Dynamic Sub-Sitemaps (`app/[slug]/route.ts`)** xử lý các sitemap con (`page_sitemap.xml`, `blog_sitemap.xml`, `product_sitemap.xml`,...):
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

---



## 🧪 4. Công cụ Thử nghiệm (Playground Sandbox)

SDK tích hợp sẵn công cụ CLI để kiểm thử gRPC API cục bộ trên Node.js mà không cần dựng proxy server:

1. **Khởi chạy CLI**:
   ```bash
   npm run playground
   ```
2. **Cấu hình Payload**:
   Các tham số mẫu của từng API được lưu tại `playground/payloads/*.json`. Bạn có thể chỉnh sửa trực tiếp các file JSON này và CLI sẽ áp dụng ngay lập tức mà không cần khởi động lại.
