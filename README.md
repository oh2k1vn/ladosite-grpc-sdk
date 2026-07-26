# @ladosite/grpc-sdk

Thư viện gRPC SDK đóng gói sẵn cho **OptiFlow E-Commerce**, tối ưu hóa riêng cho **Next.js App Router (SEO, Core Web Vitals, ISR & Performance)**.

---

## ⚡ 1. Cài đặt & Khởi tạo (Chỉ 1 Lần)

Cài đặt thư viện:
```bash
npm install @ladosite/grpc-sdk
```

Khởi tạo SDK tại `src/lib/grpc.ts`:
```typescript
import { OptiFlowGrpcSDK } from '@ladosite/grpc-sdk';

export const sdk = new OptiFlowGrpcSDK({
  baseUrl: process.env.OPTIFLOW_GRPC_URL || 'https://grpc.optiflow.vn',
  orgId: process.env.OPTIFLOW_ORG_ID || 'your-org-id',
  debug: process.env.NODE_ENV === 'development',
});
```

---

## 🚀 2. Hướng dẫn Sử dụng trong Next.js App Router

SDK cung cấp các hàm **1-Line E-Com Helpers** tự động xử lý gRPC Data + Next.js Metadata chuẩn SEO + Schema.org JSON-LD cho Google Rich Snippets.

### 🛒 Trang Chi Tiết Sản Phẩm (PDP) — `app/products/[slug]/page.tsx`
```typescript
import { sdk } from '@/lib/grpc';
import { notFound } from 'next/navigation';

// 1. Tự động lấy Next.js Metadata chuẩn SEO cho Head
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { metadata } = await sdk.getProductPageData({ slug: params.slug });
  return metadata || {};
}

// 2. Lấy dữ liệu Sản phẩm & Script JSON-LD cho Google
export default async function ProductPage({ params }: { params: { slug: string } }) {
  const { product, jsonLdScript } = await sdk.getProductPageData({
    slug: params.slug,
    baseUrl: 'https://myshop.com',
  });

  if (!product) notFound();

  return (
    <>
      {/* Script Schema.org Product & Breadcrumb tự động sinh */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdScript) }}
      />
      <main>
        <h1>{product.name}</h1>
        <p>Giá: {product.price.toLocaleString('vi-VN')} đ</p>
        <p>{product.description}</p>
      </main>
    </>
  );
}
```

---

### 📦 Trang Danh Mục Sản Phẩm (PLP) — `app/categories/[slug]/page.tsx`
```typescript
import { sdk } from '@/lib/grpc';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { metadata } = await sdk.getCategoryPageData({ slug: params.slug });
  return metadata || {};
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const { productGroup, products, jsonLdScript } = await sdk.getCategoryPageData({
    slug: params.slug,
    pageNumber: 1,
    pageSize: 24,
    baseUrl: 'https://myshop.com',
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdScript) }} />
      <h1>{productGroup?.name || 'Danh mục sản phẩm'}</h1>
      <div className="grid">
        {products?.map((p) => (
          <div key={p.id}>{p.name} - {p.price.toLocaleString('vi-VN')} đ</div>
        ))}
      </div>
    </>
  );
}
```

---

### 🌐 Dynamic Sitemap — `app/sitemap.ts`
```typescript
import { sdk } from '@/lib/grpc';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return await sdk.getSitemap({ url: 'https://myshop.com' });
}
```

---

## 📋 3. Bảng Tra Cứu Các Hàm Helper 1-Line

| Lệnh Gọi Direct | Chức Năng | Tự Động Tạo |
| :--- | :--- | :--- |
| `sdk.getProductPageData({ slug, baseUrl })` | Lấy chi tiết Sản phẩm (PDP) | Metadata + Schema `Product` & `Breadcrumb` |
| `sdk.getCategoryPageData({ slug, pageNumber, pageSize })` | Lấy danh sách sản phẩm theo danh mục (PLP) | Metadata + Schema `ItemList` & `Breadcrumb` |
| `sdk.getBlogPageData({ slug, baseUrl })` | Lấy chi tiết bài viết Blog | Metadata + Schema `Article` & `Breadcrumb` |
| `sdk.getPageMeta({ url })` | Lấy Metadata SEO của URL bất kỳ | Next.js `Metadata` Object (`title`, `og`, `robots`...) |
| `sdk.getSitemap({ url })` | Lấy Sitemap hệ thống | Chuẩn `MetadataRoute.Sitemap` cho Next.js |

---

## 🔌 4. Gọi gRPC API Thuần (Direct Call)

Nếu cần gọi trực tiếp các API gRPC thuần (như Đặt hàng, Login, Comment):

```typescript
// Query danh sách sản phẩm
const res = await sdk.product.getByQuery({ pageNumber: 1, pageSize: 10, criteria: [], operator: 'AND' });

// Đặt hàng (Transactional API, tự động không bị cache)
const orderRes = await sdk.order.placeOrder({ /* order data */ });
```

---

## 🛠 5. Dành cho Maintainer phát triển SDK

```bash
npm run generate  # Biên dịch file .proto trong thư mục Protos/
npm run typecheck # Kiểm tra kiểu dữ liệu TypeScript
npm run build     # Đóng gói sản phẩm ra thư mục dist/
npm run verify    # Chạy script kiểm thử tự động
```
