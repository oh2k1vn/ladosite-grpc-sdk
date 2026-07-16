# NEXT.JS FRONTEND DEVELOPMENT RULES & STANDARDS

Tài liệu này định nghĩa các quy tắc, tiêu chuẩn phát triển và best practices bắt buộc áp dụng đối với dự án sử dụng framework **Next.js (đặc biệt là App Router)** kết hợp **TypeScript**.

> [!NOTE]
> Để tránh quá giới hạn ký tự và tối ưu hóa quản lý, các phần quy tắc khác đã được phân tách:
> *   Quy tắc React Core (Components, State, API & Errors): Xem tại [react.md](file:///d:/RULE/.agent/rules/react.md)
> *   Quy tắc TypeScript & Import: Xem tại [ts-import.md](file:///d:/RULE/.agent/rules/ts-import.md)
> *   Quy tắc Hiệu năng & Styling (CSS/Tailwind): Xem tại [performance-styling.md](file:///d:/RULE/.agent/rules/performance-styling.md)
> *   Chất lượng Code, Bảo mật & A11y: Xem tại [code-quality.md](file:///d:/RULE/.agent/rules/code-quality.md)
> *   Cấu trúc Thư mục & Tệp tin: Xem tại [structure.md](file:///d:/RULE/.agent/rules/structure.md)

---

## 1. REACT SERVER COMPONENTS (RSC) VS CLIENT COMPONENTS (CC)

*   **Mặc định là Server Components**: Giữ tất cả các component ở server để giảm tối đa kích thước Javascript bundle gửi về client và tăng tốc độ load trang (SEO tối ưu).
*   **Khai báo `'use client'` đúng nơi**: Chỉ đặt `'use client'` ở phần đầu file component khi:
    *   Có tương tác người dùng (sử dụng event listeners như `onClick`, `onSubmit`).
    *   Sử dụng React Hooks (`useState`, `useEffect`, `useReducer`, `useRef`).
    *   Sử dụng các browser APIs (`window`, `document`, `localStorage`).
*   **Đẩy Client Components xuống lá (Leaf Components)**: Không bọc `'use client'` ở component cha quá lớn. Thay vào đó, hãy bọc Client Component ở các phần nhỏ nhất cần tương tác (ví dụ: nút Like, ô Search).
*   **Truyền Prop hợp lệ**: Dữ liệu truyền từ Server Component sang Client Component phải là *serializable* (chỉ gồm string, number, boolean, array, plain object). Không truyền hàm (functions) hay class instances.

---

## 2. TÌM NẠP DỮ LIỆU & SERVER ACTIONS (DATA FETCHING & SERVER ACTIONS)

*   **Tìm nạp ở Server (Server-side Fetching)**: Ưu tiên gọi API trực tiếp trong Server Components sử dụng `async/await` và hàm `fetch` mặc định được Next.js mở rộng.
*   **Cấu hình Cache hợp lý**:
    *   Sử dụng static rendering (mặc định) cho dữ liệu ít thay đổi.
    *   Sử dụng Dynamic Rendering bằng cách thêm cấu hình `{ next: { revalidate: 3600 } }` (ISR) hoặc `{ cache: 'no-store' }` (SSR) cho dữ liệu thay đổi thường xuyên.
*   **Server Actions (`'use server'`)**:
    *   Sử dụng Server Actions cho các thao tác ghi dữ liệu (mutations) như Form Submit.
    *   Bắt buộc thực hiện xác thực đầu vào (Input Validation) bằng Zod hoặc Yup trong hàm server action để ngăn chặn payload độc hại.
    *   Bắt buộc bọc logic Server Action trong `try-catch` và trả về kết quả định dạng chuẩn `{ success: boolean, data?: any, error?: string }` thay vì ném lỗi (throw error) trực tiếp về client.

---

## 3. THÀNH PHẦN TỐI ƯU HÓA (OPTIMIZED COMPONENTS)

*   **`next/image`**: Bắt buộc sử dụng component `<Image />` thay cho thẻ `<img>`. Luôn cung cấp thuộc tính `width`, `height` (hoặc `fill`), `alt`, và cấu hình `priority` cho các ảnh nằm trong màn hình đầu tiên (Above the fold) để tối ưu điểm LCP.
*   **`next/link`**: Bắt buộc sử dụng `<Link>` thay cho thẻ `<a>` để Next.js tự động prefetch trang và đảm bảo trải nghiệm SPA.
*   **`next/font`**: Sử dụng `next/font/google` hoặc `next/font/local` để tối ưu tải font chữ trực tiếp từ server của dự án, loại bỏ hiện tượng Layout Shift (CLS).

---

## 4. SEO & METADATA

*   Bắt buộc sử dụng **Metadata API** của Next.js (export static object `metadata` hoặc hàm `generateMetadata()`).
*   Tuyệt đối không tự viết thủ công thẻ `<head>` hoặc `<meta>` trong component `page.tsx` hay `layout.tsx`.

---

## 5. DYNAMIC IMPORT

*   Sử dụng `next/dynamic` thay cho `React.lazy` để import động các Client Components nặng.
*   Khi import các thư viện bên thứ ba phụ thuộc vào đối tượng `window` (chỉ chạy ở trình duyệt), sử dụng tùy chọn `{ ssr: false }`.
