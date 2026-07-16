# PERFORMANCE & STYLING RULES & STANDARDS

Tài liệu này định nghĩa các tiêu chuẩn về **Tối ưu Hiệu năng (Performance)** và **Styling/CSS** trong các dự án Frontend.

> [!NOTE]
> Để tránh quá giới hạn ký tự và tối ưu hóa quản lý, các phần quy tắc khác đã được phân tách:
> *   Quy tắc React Core (Components, State, API & Errors): Xem tại [react.md](file:///d:/RULE/.agent/rules/react.md)
> *   Quy tắc Next.js (App Router): Xem tại [nextjs.md](file:///d:/RULE/.agent/rules/nextjs.md)
> *   Quy tắc TypeScript & Import: Xem tại [ts-import.md](file:///d:/RULE/.agent/rules/ts-import.md)
> *   Chất lượng Code, Bảo mật & A11y: Xem tại [code-quality.md](file:///d:/RULE/.agent/rules/code-quality.md)
> *   Cấu trúc Thư mục & Tệp tin: Xem tại [structure.md](file:///d:/RULE/.agent/rules/structure.md)

---

## 1. TƯ DUY HIỆU NĂNG LÀ TRÊN HẾT (PERFORMANCE-FIRST MINDSET)

*   **State Colocation (Đặt State cục bộ nhất có thể)**: Không lưu trữ state cục bộ ở component cha hoặc global store nếu nó chỉ ảnh hưởng đến một component con duy nhất. Việc này giúp cô lập re-render, chỉ re-render những gì cần thiết.
*   **Tối ưu hóa Bundle Size (Tree-shaking)**:
    *   Tránh import toàn bộ thư viện lớn (ví dụ: `lodash`, `date-fns`). Chỉ import module cần dùng: `import debounce from 'lodash/debounce'` thay vì `import { debounce } from 'lodash'`.
    *   Ưu tiên sử dụng các giải pháp thay thế siêu nhẹ (ví dụ: `dayjs` thay cho `moment.js`) hoặc tận dụng API có sẵn của trình duyệt (`Intl`, `URLSearchParams`).
*   **Tối ưu hóa Tài nguyên & Core Web Vitals**:
    *   **LCP (Largest Contentful Paint)**: Các tài nguyên quan trọng ở màn hình đầu tiên (Above the fold) như ảnh banner, logo phải được ưu tiên tải trước (`priority` trong Next.js hoặc `rel="preload"`).
    *   **CLS (Cumulative Layout Shift)**: Bắt buộc định nghĩa kích thước cố định (`width`, `height` hoặc CSS `aspect-ratio`) cho mọi hình ảnh, video, iframe để tránh xê dịch giao diện khi tải trang.
    *   **INP (Interaction to Next Paint)**: Chia nhỏ các tác vụ Javascript nặng (heavy CPU tasks) bằng cách sử dụng `requestIdleCallback` hoặc Web Workers để tránh làm nghẽn Main Thread, đảm bảo giao diện tương tác tức thì.
    *   **Lazy Load Assets**: Sử dụng `loading="lazy"` cho ảnh dưới màn hình cuộn (Below the fold).

---

## 2. QUY TẮC TỐI ƯU HÓA CODE REACT (REACT PERFORMANCE OPTIMIZATION)

*   **React.memo**: Sử dụng cho các component thuần hiển thị (pure components) nhận props phức tạp và re-render thường xuyên bởi component cha. Không lạm dụng khi props đơn giản.
*   **useCallback & useMemo**:
    *   Chỉ sử dụng khi truyền callback/value xuống component con đã được bọc bởi `React.memo`.
    *   Sử dụng cho các phép tính toán phức tạp (heavy computations).
    *   Luôn khai báo đầy đủ dependency array.
*   **Render Danh sách (Lists)**:
    *   Luôn cung cấp thuộc tính `key` độc nhất (ví dụ: `id` từ database).
    *   Tuyệt đối không dùng Array Index làm key đối với danh sách có thể thay đổi số lượng, sắp xếp lại hoặc lọc phần tử. Chỉ dùng index khi danh sách là tĩnh và không bao giờ thay đổi.
*   **Code Splitting & Lazy Loading**:
    *   Sử dụng `React.lazy` và `Suspense` (hoặc `next/dynamic` trong Next.js) để trì hoãn việc tải các router components hoặc component nặng không cần thiết ngay lúc đầu (ví dụ: Modals, Charts, Editors).

---

## 3. DESIGN SYSTEM & STYLING

*   **CSS Modules**: Khuyến nghị sử dụng CSS Modules (`.module.css` / `.module.scss`) để tránh xung đột class name toàn cục.
*   **Tailwind CSS**: 
    *   Sắp xếp class name theo thứ tự chuẩn sử dụng extension tự động sắp xếp (như `prettier-plugin-tailwindcss`).
    *   Tránh viết class quá dài dòng bằng cách nhóm style hoặc tách component con.
*   **Không dùng Inline Style**: Ngoại trừ các thuộc tính có giá trị động (dynamic values) ví dụ: `style={{ transform: `translate3d(${x}px, ${y}px, 0)` }}`.
*   **Sử dụng Design Tokens**: Toàn bộ mã màu, khoảng cách (spacing), font size phải được định nghĩa tập trung thông qua biến CSS (CSS Variables) hoặc Tailwind Config. Không viết cứng (hardcode) giá trị.
