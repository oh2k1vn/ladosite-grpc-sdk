# @ladosite/grpc-sdk

Thư viện gRPC SDK chứa các gRPC Client được biên dịch sẵn từ các định nghĩa Protobuf (`.proto`). Phù hợp cho mô hình nhiều dự án Next.js outsource độc lập mà không bắt buộc phải sử dụng Monorepo.

## 🚀 Tính năng nổi bật
1. **Biên dịch một lần duy nhất (Generate Once)**: Không cần cài đặt `protoc` toàn cục trên máy dev hoặc copy file `.proto` vào từng dự án Next.js.
2. **Khởi tạo linh hoạt (Configurable)**: Cho phép truyền các tham số cấu hình riêng biệt cho từng dự án (ví dụ `orgId`, `baseUrl`, user information) khi khởi tạo SDK.
3. **TypeScript Out-of-the-Box**: Cung cấp đầy đủ các types từ message protobuf và tự động autocomplete các gRPC services.
4. **Hỗ trợ ESM & CommonJS**: Sử dụng `tsup` đóng gói sẵn định dạng ESM (`.mjs`) và CommonJS (`.js`), tương thích hoàn toàn với Next.js Server Components, Server Actions và Route Handlers.

---

## 🛠 Cài đặt & Sử dụng

### 1. Trong dự án Next.js (Consumer)
Cài đặt thư viện từ NPM Registry:
```bash
npm install @ladosite/grpc-sdk
```

Khởi tạo SDK (ví dụ tại `src/lib/grpc.ts` của dự án Next.js):
```typescript
import { OptiFlowGrpcSDK } from '@ladosite/grpc-sdk';

export const grpcSDK = new OptiFlowGrpcSDK({
  baseUrl: process.env.OPTIFLOW_GRPC_URL || 'https://xxxx.xxxx.vn',
  orgId: process.env.OPTIFLOW_ORG_ID || 'xxxxxxxxxxxxxxxx',
  debug: process.env.NODE_ENV === 'development',
});
```

Gọi các service API một cách dễ dàng với Promise trả về kết quả trực tiếp:
```typescript
import { grpcSDK } from '@/lib/grpc';
import type { PlaceOrderRequest } from '@ladosite/grpc-sdk';

export async function placeOrder(request: PlaceOrderRequest) {
  try {
    // SDK tự động sinh Checksum RSA và đính kèm headers x-org, x-userId, v.v.
    const response = await grpcSDK.order.placeOrder(request);
    return response;
  } catch (error) {
    console.error('Failed to place order:', error);
    throw error;
  }
}
```

Nếu bạn cần truy cập đối tượng Client thuần của `@protobuf-ts` (để lấy metadata, trailers, stream...):
```typescript
const rawCall = grpcSDK.rawOrder.placeOrder(request);
const response = await rawCall.response;
const headers = await rawCall.headers;
```

---

## 🏗 Phát triển & Biên dịch SDK (Dành cho Maintainer)

### Thêm hoặc Sửa đổi `.proto`
1. Đặt hoặc cập nhật các file `.proto` của bạn trong thư mục `Protos/`.
2. Chạy lệnh generate để tạo ra code TypeScript tương ứng:
   ```bash
   npm run generate
   ```
   *(Script sẽ tự động tải phiên bản `protoc` phù hợp từ NPM về để chạy cục bộ, không cần cài `protoc` toàn cục trên máy).*

### Biên dịch & Đóng gói (Build)
Để build thư viện ra thư mục `dist/` phục vụ việc publish:
```bash
npm run build
```

### Chạy kiểm thử kiểm tra kiểu dữ liệu (Verify)
```bash
npm run verify
```

---

## 📦 Quy trình Publish lên NPM Registry
Thư viện được cấu hình để publish dưới dạng **public scoped package** mặc định.

### Cách 1: Publish thông thường
Đảm bảo bạn đã đăng nhập và có quyền ghi đối với scope `@ladosite`:
```bash
npm publish
```

### Cách 2: Sử dụng Git URL trực tiếp (Không cần NPM Registry)
Đẩy code của SDK này lên một Git repository riêng (ví dụ: `https://github.com/ladosite/grpc-sdk`).
Trong các dự án Next.js, cài đặt trực tiếp qua Git URL:
```json
"dependencies": {
  "@ladosite/grpc-sdk": "git+https://github.com/ladosite/grpc-sdk.git#v1.0.0"
}
```

### Cách 3: Sử dụng Local Link (Để phát triển nội bộ / Test nhanh)
1. Tại thư mục SDK:
   ```bash
   npm link
   ```
2. Tại thư mục dự án Next.js:
   ```bash
   npm link @ladosite/grpc-sdk
   ```
