# Hướng Dẫn Sử Dụng OptiFlow gRPC SDK Chuẩn Nhất Với Next.js (App Router)

Tài liệu này hướng dẫn cách tích hợp thư viện `@ladosite/grpc-sdk` vào dự án Next.js (App Router) theo các chuẩn thiết kế (Best Practices) mới nhất: đảm bảo hiệu năng tối đa, không lộ secrets, chống crash ứng dụng (Zero-Crash), và tương thích hoàn hảo với Server Components, Server Actions & Client Components.

---

## 📌 Mục Lục

1. [Khởi Tạo Client Chuẩn (Singleton & Server-Only)](#1-khởi-tạo-client-chuẩn-singleton--server-only)
2. [Quản Lý Token & Xác Thực Động (Authentication)](#2-quản-lý-token--xác-thực-động-authentication)
3. [Truy Vấn Dữ Liệu Trong Server Components & Actions](#3-truy-vấn-dữ-liệu-trong-server-components--actions)
4. [Xử Lý Lỗi Chuẩn Hoá (Error Handling Với RpcError)](#4-xử-lý-lỗi-chuẩn-hoá-error-handling-với-rpcerror)
5. [Tích Hợp SEO Chuẩn Next.js (Zero-Crash)](#5-tích-hợp-seo-chuẩn-nextjs-zero-crash)
   - [A. Root Layout (`app/layout.tsx`)](#a-root-layout-applayouttsx)
   - [B. Dynamic Page SEO (`app/blog/[slug]/page.tsx`)](#b-dynamic-page-seo-appblogslugpagetsx)
   - [C. Sitemap.xml Dynamic Route Handler](#c-sitemapxml-dynamic-route-handler)
   - [D. Robots.txt Route Handler](#d-robotstxt-route-handler)
6. [Best Practices & Tối Ưu Hiệu Năng](#6-best-practices--tối-ưu-hiệu-năng)

---

## 1. Khởi Tạo Client Chuẩn (Singleton & Server-Only)

Tạo file khởi tạo tập trung tại `src/lib/grpc.ts`. Sử dụng package `server-only` để đảm bảo gRPC SDK client không vô tình bị import vào Client Components (tránh rò rỉ public key / thông tin hệ thống).

```bash
npm install server-only
```

```typescript
// src/lib/grpc.ts
import 'server-only';
import { OptiFlowGrpcSDK } from '@ladosite/grpc-sdk';
import { cookies } from 'next/headers';

/**
 * Single Instance OptiFlow gRPC SDK dành riêng cho Server-side (RSC / Server Actions / Route Handlers)
 */
export const grpcSDK = new OptiFlowGrpcSDK({
  baseUrl: process.env.OPTIFLOW_GRPC_URL || 'https://grpc.optiflow.vn',
  orgId: process.env.OPTIFLOW_ORG_ID || '',
  debug: process.env.NODE_ENV === 'development',
  
  // Tự động lấy JWT Token theo từng request của user từ Cookie
  token: async () => {
    try {
      const cookieStore = await cookies();
      return cookieStore.get('auth_token')?.value || null;
    } catch {
      return null;
    }
  },
});
```

---

## 2. Quản Lý Token & Xác Thực Động (Authentication)

### A. Đăng Nhập Qua Server Action (`src/app/actions/auth.ts`)

```typescript
'use server';

import { grpcSDK } from '@/lib/grpc';
import { cookies } from 'next/headers';
import { RpcError } from '@ladosite/grpc-sdk';

export async function loginAction(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
    const res = await grpcSDK.auth.login({
      email,
      password,
      isFirebaseAuth: false,
      firebaseUserJson: '',
    });

    if (res.success && res.data?.token) {
      const cookieStore = await cookies();
      cookieStore.set('auth_token', res.data.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
      });
      return { success: true, message: res.message };
    }

    return { success: false, message: res.message || 'Đăng nhập thất bại' };
  } catch (err) {
    if (err instanceof RpcError) {
      return { success: false, message: `Lỗi gRPC [${err.code}]: ${err.message}` };
    }
    return { success: false, message: 'Lỗi hệ thống không xác định' };
  }
}
```

---

## 3. Truy Vấn Dữ Liệu Trong Server Components & Actions

### A. Lấy Danh Sách Với Lọc & Phân Trang (`app/products/page.tsx`)

```tsx
import { grpcSDK } from '@/lib/grpc';
import type { Query } from '@ladosite/grpc-sdk';

interface Props {
  searchParams: Promise<{ page?: string; category?: string }>;
}

export default async function ProductsPage({ searchParams }: Props) {
  const { page = '1', category } = await searchParams;

  const query: Query = {
    pageNumber: Number.parseInt(page, 10),
    pageSize: 12,
    criteria: category
      ? [{ field: 'categorySlug', value: category, type: 'equal' }]
      : [],
    sort: { field: 'createdAt', order: 'desc' },
  };

  const response = await grpcSDK.product.getProductsByQuery({ query });

  return (
    <main className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Danh sách sản phẩm</h1>
      <div className="grid grid-cols-3 gap-6">
        {response.data?.items.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg">
            <h2 className="font-semibold">{product.name}</h2>
            <p className="text-blue-600">{product.price.toLocaleString()} VNĐ</p>
          </div>
        ))}
      </div>
    </main>
  );
}
```

---

## 4. Xử Lý Lỗi Chuẩn Hoá (Error Handling Với `RpcError`)

Thư viện SDK re-export trực tiếp `RpcError`, giúp dự án catch lỗi gRPC mà không cần cài thêm thư viện phụ thuộc.

```typescript
import { grpcSDK } from '@/lib/grpc';
import { RpcError } from '@ladosite/grpc-sdk';

export async function getProductDetailSafe(slug: string) {
  try {
    const product = await grpcSDK.product.getProductDetail({ slug });
    return { data: product.data, error: null };
  } catch (err) {
    if (err instanceof RpcError) {
      console.error(`[gRPC Error] Code: ${err.code}, Message: ${err.message}`);
      return { data: null, error: err.message };
    }
    console.error('[System Error]', err);
    return { data: null, error: 'Lỗi không xác định' };
  }
}
```

---

## 5. Tích Hợp SEO Chuẩn Next.js (Zero-Crash & 2-Tier Caching)

Thư viện được tích hợp sẵn bộ helper SEO tự động bọc `try-catch` an toàn và cơ chế **Caching 2 lớp (2-Tier Caching)** tối ưu tuyệt đối:

> ⚡ **Cơ chế Caching Global SEO:**
> 1. **Lớp 1 (Internal SDK Memory Cache):** SDK tích hợp sẵn In-Memory Cache với TTL 10 phút. Mọi request gọi `fetchSeoMetadata()` hoặc `fetchSeoData()` trên cùng server process sẽ dùng lại dữ liệu Global SEO mà **không gọi lại gRPC API nhiều lần**.
> 2. **Lớp 2 (React `cache()` per request):** Tự động Dedupe gRPC calls nếu cả `generateMetadata()` và `RootLayout` đều gọi fetch SEO trong cùng một lượt render trang.

### A. Root Layout (`app/layout.tsx`)

```tsx
import type { Metadata } from 'next';
import { fetchSeoMetadata, fetchSeoData, SeoScripts } from '@ladosite/grpc-sdk';
import { grpcSDK } from '@/lib/grpc';

// 1. Tự động fetch Global SEO từ gRPC (Đã có sẵn Memory Cache 10 phút)
export async function generateMetadata(): Promise<Metadata> {
  return await fetchSeoMetadata({
    sdk: grpcSDK,
    fallbackTitle: 'Trang chủ | OptiFlow App',
  });
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 2. Fetch dữ liệu Global SEO (Lấy từ SDK Cache, 0ms latency)
  const { global } = await fetchSeoData({ sdk: grpcSDK });

  return (
    <html lang="vi">
      <head>
        {/* Tự động chèn Tracking Scripts & Structured Data Schema JSON-LD */}
        <SeoScripts global={global} />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

#### 💡 Mẹo Nâng Cao: Cấu Hình Cache ISR Với Next.js `unstable_cache`
Nếu muốn cache Global SEO lâu hơn (ví dụ 1 giờ hay 1 ngày) trên Next.js Data Cache:

```typescript
// src/lib/seo.ts
import { fetchSeoData as rawFetchSeoData } from '@ladosite/grpc-sdk';
import { grpcSDK } from '@/lib/grpc';
import { unstable_cache } from 'next/cache';

// Cache Global SEO trong 1 giờ (3600s) ở Next.js Data Cache
export const getCachedGlobalSeo = unstable_cache(
  async () => {
    return await rawFetchSeoData({ sdk: grpcSDK });
  },
  ['global-seo-config'],
  { revalidate: 3600 }
);
```

### B. Dynamic Page SEO (`app/blog/[slug]/page.tsx`)

```tsx
import type { Metadata } from 'next';
import { fetchSeoMetadata } from '@ladosite/grpc-sdk';
import { grpcSDK } from '@/lib/grpc';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Tự động fetch Page SEO theo URL động & sinh Metadata chuẩn Next.js
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return await fetchSeoMetadata({
    sdk: grpcSDK,
    url: `/blog/${slug}`,
    fallbackTitle: 'Bài viết chi tiết',
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const res = await grpcSDK.blog.getBlogDetail({ slug });

  return (
    <article className="prose max-w-4xl mx-auto py-8">
      <h1>{res.data?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: res.data?.content || '' }} />
    </article>
  );
}
```

### C. Sitemap.xml Dynamic Route Handler (`app/sitemap.xml/route.ts`)

```typescript
import { handleSitemapRequest } from '@ladosite/grpc-sdk';
import { grpcSDK } from '@/lib/grpc';

export async function GET(request: Request) {
  return await handleSitemapRequest({
    sdk: grpcSDK,
    request,
  });
}
```

Nếu dự án có các Sub-Sitemap như `/sitemap-products.xml`, tạo file `app/[slug]/route.ts`:

```typescript
import { handleSitemapRequest } from '@ladosite/grpc-sdk';
import { grpcSDK } from '@/lib/grpc';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  if (slug.endsWith('.xml')) {
    return await handleSitemapRequest({ sdk: grpcSDK, request });
  }
  return new Response('Not Found', { status: 404 });
}
```

### D. Robots.txt Route Handler (`app/robots.txt/route.ts`)

```typescript
import { handleRobotsTxtRequest } from '@ladosite/grpc-sdk';
import { grpcSDK } from '@/lib/grpc';

export async function GET(request: Request) {
  return await handleRobotsTxtRequest({
    sdk: grpcSDK,
    request,
  });
}
```

---

## 6. Best Practices & Tối Ưu Hiệu Năng

1. **Luôn dùng `server-only` cho file `src/lib/grpc.ts`**: Đảm bảo SDK client chỉ chạy ở Server-side.
2. **Thực thi song song API với `Promise.all`**:
   Khi một trang cần fetch cả thông tin user lẫn danh sách dữ liệu:
   ```typescript
   const [productsRes, categoryRes] = await Promise.all([
     grpcSDK.product.getProductsByQuery({ query }),
     grpcSDK.product.getProductGroupsByQuery({ query: {} }),
   ]);
   ```
3. **Sử dụng `export type *` khi import types**: Tối ưu compile time và tránh dính mã JavaScript thừa vào bundle:
   ```typescript
   import type { Query, ProductData, LoginRequest } from '@ladosite/grpc-sdk';
   ```
