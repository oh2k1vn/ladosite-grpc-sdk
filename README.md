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
  "@ladosite/grpc-sdk": "git+https://github.com/oh2k1vn/ladosite-grpc-sdk.git#v1.0.0"
}
```
*Lưu ý: Luôn sử dụng Git Tag (ví dụ `#v1.0.0`) cho môi trường sản xuất (Production) để đảm bảo tính ổn định tối đa. Có thể sử dụng `#develop` cho môi trường phát triển (Dev).*

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

## 🧪 Công cụ Thử nghiệm (Playground Sandbox)

SDK tích hợp sẵn một công cụ CLI chạy trực tiếp trên Node.js để kiểm thử các gRPC API cục bộ mà không cần phụ thuộc vào trình duyệt hay dựng proxy server:

1. **Khởi chạy CLI**:
   ```bash
   npm run playground
   ```
2. **Cấu hình Payload**:
   Các tham số (payload) mẫu của từng API được lưu dưới dạng file JSON độc lập tại thư mục `playground/payloads/` (ví dụ: `playground/payloads/product.getBySlug.json`). 
   - Bạn có thể sửa trực tiếp nội dung các file JSON này bằng trình chỉnh sửa code (IDE) và lưu lại.
   - Khi chọn API trên CLI, nó sẽ tải và áp dụng ngay các tham số mới nhất bạn vừa lưu mà không cần khởi động lại CLI.

---

## 📦 Quy trình Phát hành Phiên bản Mới (Release)

Khi cập nhật file `.proto` hoặc thay đổi logic SDK, hãy thực hiện quy trình sau để tích hợp vào vận hành an toàn nhất:

### 1. Biên dịch và Kiểm tra cục bộ
```bash
# Đồng bộ & Tự động sinh mã nguồn gRPC TypeScript từ Protos
npm run generate

# Biên dịch SDK và kiểm tra tính toàn vẹn kiểu dữ liệu (typecheck)
npm run build
npm run typecheck
```
*Lưu ý: Nhờ cơ chế Auto-Mapping Proxy của SDK, các API mới được khai báo trong `.proto` sẽ tự động khả dụng trên đối tượng SDK mà không cần bạn phải viết thêm code map thủ công trong `src/client.ts`.*

### 2. Đẩy mã nguồn lên Git & Đóng Tag
```bash
git add .
git commit -m "feat: cập nhật api x, y, z"
git push origin develop  # Đẩy lên nhánh dev để test liên thông
# hoặc git push origin main nếu release trực tiếp

# Đóng gói version (Ví dụ v1.0.1)
git tag v1.0.1
git push origin v1.0.1
```
