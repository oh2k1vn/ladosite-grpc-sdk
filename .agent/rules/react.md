# REACTJS CORE FRONTEND DEVELOPMENT RULES & STANDARDS

Tài liệu này định nghĩa các quy tắc, tiêu chuẩn phát triển và best practices cốt lõi bắt buộc áp dụng đối với các dự án sử dụng framework **ReactJS**.

> [!NOTE]
> Để tránh quá giới hạn ký tự và tối ưu hóa quản lý, các phần quy tắc khác đã được phân tách:
> *   Quy tắc TypeScript & Import: Xem tại [ts-import.md](file:///d:/RULE/.agent/rules/ts-import.md)
> *   Quy tắc Next.js (App Router): Xem tại [nextjs.md](file:///d:/RULE/.agent/rules/nextjs.md)
> *   Quy tắc Hiệu năng & Styling (CSS/Tailwind): Xem tại [performance-styling.md](file:///d:/RULE/.agent/rules/performance-styling.md)
> *   Chất lượng Code, Bảo mật & A11y: Xem tại [code-quality.md](file:///d:/RULE/.agent/rules/code-quality.md)
> *   Cấu trúc Thư mục & Tệp tin: Xem tại [structure.md](file:///d:/RULE/.agent/rules/structure.md)

---

## 1. NGUYÊN TẮC THIẾT KẾ COMPONENT (COMPONENT DESIGN PRINCIPLES)

### 1.1. Khai báo Component
*   **Functional Components**: Chỉ dùng Functional Components và Hooks. Không dùng Class Components (trừ `ErrorBoundary` tự viết).
*   **Đặt tên & File**: Tên component và tên file theo dạng `PascalCase` (ví dụ: `UserProfile.tsx`).
*   **Mỗi file một Component chính**: Chỉ export một component chính từ mỗi file.
*   **Export**: Bắt buộc dùng **Named Export** (không dùng Default Export) để dễ refactor và auto-import chính xác.

### 1.2. Phân rã Component
*   **Single Responsibility (SRP)**: Mỗi component làm một nhiệm vụ duy nhất. Component vượt quá **150 dòng** cần phân rã.
*   **Co-location**: Giữ component, styles, hooks và helper functions liên quan trong cùng một thư mục.
*   **Tách biệt Logic và UI**:
    *   *Giao diện (Presentational)*: Nhận dữ liệu qua props và render UI, không chứa state phức tạp hay gọi API.
    *   *Logic nghiệp vụ (Container/Hooks)*: Xử lý state, gọi API, điều hướng dữ liệu.

---

## 2. QUẢN LÝ TRẠNG THÁI (STATE MANAGEMENT)

### 2.1. Phân phối State
*   **Local State**: Dùng `useState` hoặc `useReducer` cho phạm vi hẹp.
*   **Lift State Up**: Đưa state lên component cha gần nhất chỉ khi có nhiều component con cần chia sẻ.
*   **Server State**: Bắt buộc quản lý qua **TanStack Query** hoặc **RTK Query**. Không đưa dữ liệu API vào global client state.
*   **Global Client State**: Chỉ dùng cho dữ liệu toàn cục (Auth, Theme, Giỏ hàng). Ưu tiên sử dụng **Zustand** hoặc **Jotai**.

### 2.2. Nguyên tắc sử dụng State
*   **Tránh Derived State dư thừa**: Không tạo thêm state cho các giá trị có thể tính toán trực tiếp từ state cũ hoặc props.
*   **Bất biến (Immutability)**: Không mutate state trực tiếp. Luôn clone object/array hoặc sử dụng `immer` khi cập nhật.

---

## 3. XỬ LÝ LỖI VÀ CALL API (API HANDLING & ERROR BOUNDARY)

### 3.1. API Call
*   Tập trung các API calls vào thư mục `services` / `api` dùng Axios hoặc Fetch.
*   Dùng Axios Interceptors để xử lý global config (đính kèm token, refresh token, handle lỗi 401/403/500).
*   Định nghĩa rõ kiểu dữ liệu trả về (DTO) cho mọi API.

### 3.2. Quản lý Lỗi (Error Handling)
*   Đặt **React Error Boundary** ở cấp Route hoặc component lớn để hiển thị UI thay thế thân thiện khi crash, tránh lỗi trắng màn hình.
*   Mọi API client call / async code phải được wrap bằng `try-catch` hoặc xử lý `.catch()` rõ ràng.
