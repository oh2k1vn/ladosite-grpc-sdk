# @ladosite/grpc-sdk

Thư viện gRPC SDK chứa các gRPC Client được tự động biên dịch từ định nghĩa Protobuf (`.proto`), giúp các dự án độc lập (Next.js, Node.js...) kết nối và sử dụng các dịch vụ của OptiFlow một cách dễ dàng và đồng bộ.

---

## 🚀 Tính năng nổi bật

- **Tự động hóa (Auto-generated)**: Client code và Types được tự động tạo từ file `.proto` qua CI/CD GitHub Actions.
- **Dễ tích hợp (Git-centric)**: Cài đặt trực tiếp qua Git URL mà không cần publish lên NPM Registry công cộng.
- **Hỗ trợ ESM & CommonJS**: Đóng gói song song bằng `tsup` giúp tương thích hoàn toàn với Next.js (Server Components, Server Actions và Route Handlers).

---

## 🛠 Hướng dẫn tích hợp (Consumer)

### 1. Cài đặt qua Git

Thêm trực tiếp vào `dependencies` trong `package.json` của dự án:

```json
"dependencies": {
  "@ladosite/grpc-sdk": "git+https://github.com/oh2k1vn/ladosite-grpc-sdk.git#main"
}
```
*Lưu ý: Có thể thay thế `#main` bằng `#develop` hoặc mã hash commit cụ thể.*

Sau đó chạy lệnh:
```bash
npm install
```

### 2. Khởi tạo & Sử dụng

Khởi tạo SDK (ví dụ tại `src/lib/grpc.ts` trong Next.js):

```typescript
import 'server-only';
import { OptiFlowGrpcSDK } from '@ladosite/grpc-sdk';

export const grpcSDK = new OptiFlowGrpcSDK({
  baseUrl: process.env.OPTIFLOW_GRPC_URL || 'https://grpc.optiflow.vn',
  orgId: process.env.OPTIFLOW_ORG_ID || 'xxxxxxxxxxxxxxxx',
  debug: process.env.NODE_ENV === 'development',
});
```

Sử dụng Client để gọi API (trả về Promise trực tiếp):

```typescript
import { grpcSDK } from '@/lib/grpc';
import type { PlaceOrderRequest } from '@ladosite/grpc-sdk';

export async function placeOrder(request: PlaceOrderRequest) {
  try {
    // SDK tự động đính kèm metadata xác thực và cấu hình cần thiết
    const response = await grpcSDK.order.placeOrder(request);
    return response;
  } catch (error) {
    console.error('Failed to place order:', error);
    throw error;
  }
}
```

Truy cập đối tượng Client thuần của `@protobuf-ts` (nếu cần lấy headers/metadata/trailers...):

```typescript
const call = grpcSDK.rawOrder.placeOrder(request);
const response = await call.response;
const headers = await call.headers;
```


