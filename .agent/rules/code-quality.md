# CODE QUALITY, SECURITY & ACCESSIBILITY STANDARDS

Tài liệu này định nghĩa các quy tắc về **Chất lượng mã nguồn (Clean Code)**, **Bảo mật (Security)**, và **Khả năng tiếp cận (Accessibility - A11y)**.

> [!NOTE]
> Để tránh quá giới hạn ký tự và tối ưu hóa quản lý, các phần quy tắc khác đã được phân tách:
> *   Quy tắc React Core (Components, State, API & Errors): Xem tại [react.md](file:///d:/RULE/.agent/rules/react.md)
> *   Quy tắc Next.js (App Router): Xem tại [nextjs.md](file:///d:/RULE/.agent/rules/nextjs.md)
> *   Quy tắc TypeScript & Import: Xem tại [ts-import.md](file:///d:/RULE/.agent/rules/ts-import.md)
> *   Quy tắc Hiệu năng & Styling (CSS/Tailwind): Xem tại [performance-styling.md](file:///d:/RULE/.agent/rules/performance-styling.md)
> *   Cấu trúc Thư mục & Tệp tin: Xem tại [structure.md](file:///d:/RULE/.agent/rules/structure.md)

---

## 1. BẢO MẬT TRONG FRONTEND (SECURITY)

*   **Chống lỗ hổng XSS**: Hạn chế tối đa sử dụng `dangerouslySetInnerHTML`. Nếu bắt buộc phải dùng (hiển thị HTML từ Editor), **phải** dùng thư viện sanitize dữ liệu trước như `dompurify`.
*   **Không render trực tiếp input**: Tránh đưa trực tiếp input người dùng vào các thuộc tính HTML nhạy cảm (ví dụ: `<a href={userInput}>`).
*   **Quản lý Tokens**: Không lưu trữ JWT Token hoặc dữ liệu nhạy cảm ở `localStorage` nếu dự án yêu cầu bảo mật cao chống XSS. Khuyến khích lưu ở `HttpOnly Cookie`.
*   **API Keys & Env**: Tất cả các API Keys, Service URLs nhạy cảm phải đặt trong file `.env` và được tiền tố hóa đúng cách (ví dụ: `VITE_` hoặc `NEXT_PUBLIC_`). Không commit file `.env` chứa thông tin thực lên Git.

---

## 2. KHẢ NĂNG TIẾP CẬN (ACCESSIBILITY - A11Y)

*   **Sử dụng Semantic HTML**: Ưu tiên dùng thẻ HTML đúng ngữ nghĩa (`<main>`, `<header>`, `<footer>`, `<nav>`, `<button>`, `<a>`). Tránh lạm dụng thẻ `<div>`.
*   **Form & Inputs**: Luôn liên kết `<label>` với `<input>` thông qua thuộc tính `htmlFor` và `id`.
*   **Thuộc tính Alt**: Tất cả thẻ `<img>` bắt buộc phải có thuộc tính `alt` mô tả nội dung ảnh hoặc để trống `alt=""` nếu chỉ mang tính trang trí.
*   **Hỗ trợ bàn phím**: Các phần tử tương tác phải có trạng thái `:focus` rõ ràng và kích hoạt được bằng phím `Enter` / `Space`.

---

## 3. TIÊU CHUẨN CLEAN CODE (CLEAN CODE STANDARDS)

*   **Độ dài Hàm & Component**: Một hàm/hook/component không nên dài quá **80 dòng**. Nếu dài hơn, hãy chia nhỏ thành các hàm helper hoặc custom hooks.
*   **Độ sâu lồng nhau (Nesting depth)**: Tránh lồng quá 3 cấp. Sử dụng *Guard Clauses* để trả về sớm (Early Return).
    ```typescript
    // ĐÚNG (Early Return)
    function processPayment(user, card) {
      if (!user) return;
      if (!card) return;
      // Xử lý...
    }
    ```
*   **Magic Numbers & Hardcoded Strings**: Không viết trực tiếp các số hay chuỗi mang ý nghĩa đặc biệt vào logic. Hãy định nghĩa chúng thành `const` hoặc `enum`.
*   **Đặt tên tự giải nghĩa**: Tên biến/hàm phải phản ánh đúng mục đích sử dụng. Tránh viết tắt vô nghĩa (ví dụ: dùng `fetchUserData` thay vì `fn` hay `data`).
