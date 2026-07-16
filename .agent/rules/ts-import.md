# TYPESCRIPT & IMPORT DEVELOPMENT RULES & STANDARDS

Tài liệu này định nghĩa các quy tắc, tiêu chuẩn phát triển bắt buộc về **TypeScript** và quản lý **Import** trong các dự án Frontend.

> [!NOTE]
> Để tránh quá giới hạn ký tự và tối ưu hóa quản lý, các phần quy tắc khác đã được phân tách:
> *   Quy tắc React Core (Components, State, API & Errors): Xem tại [react.md](file:///d:/RULE/.agent/rules/react.md)
> *   Quy tắc Next.js (App Router): Xem tại [nextjs.md](file:///d:/RULE/.agent/rules/nextjs.md)
> *   Quy tắc Hiệu năng & Styling (CSS/Tailwind): Xem tại [performance-styling.md](file:///d:/RULE/.agent/rules/performance-styling.md)
> *   Chất lượng Code, Bảo mật & A11y: Xem tại [code-quality.md](file:///d:/RULE/.agent/rules/code-quality.md)
> *   Cấu trúc Thư mục & Tệp tin: Xem tại [structure.md](file:///d:/RULE/.agent/rules/structure.md)

---

## 1. TIÊU CHUẨN TYPESCRIPT CHẶT CHẼ (STRICT TYPESCRIPT)

*   **Strict Mode**: Luôn bật `"strict": true` trong `tsconfig.json`.
*   **Nói không với `any`**: Tuyệt đối không sử dụng kiểu dữ liệu `any`. Nếu không biết rõ kiểu dữ liệu, hãy dùng `unknown` và thực hiện Type Guarding.
*   **Định nghĩa Props**: Luôn định nghĩa kiểu dữ liệu cho props rõ ràng bằng `interface` hoặc `type`.
    ```typescript
    type ButtonProps = {
      label: string;
      onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
      disabled?: boolean;
    };
    ```
*   **Types vs Interfaces**:
    *   Sử dụng `type` cho Props, State, và Union Types.
    *   Sử dụng `interface` cho các định nghĩa API models hoặc các cấu trúc dữ liệu có thể mở rộng (extendable).
*   **Xử lý Event & Ref**:
    *   Sử dụng các kiểu Event được React định nghĩa sẵn: `React.MouseEvent`, `React.ChangeEvent<HTMLInputElement>`, `React.FormEvent`.
    *   Định nghĩa Ref cụ thể: `React.useRef<HTMLInputElement>(null)`.

---

## 2. KIỂM SOÁT COMPILER & RUNTIME

*   **Không tắt kiểm tra Type**: Không sử dụng `@ts-ignore` hoặc `@ts-nocheck` để bỏ qua lỗi build trừ trường hợp thư viện bên thứ ba không có type và không thể bổ sung custom declaration. Nếu buộc phải dùng, phải viết ghi chú giải thích lý do cụ thể.
*   **Xử lý Type cho Dynamic Data**: Khi ép kiểu hoặc lấy dữ liệu động (như JSON.parse), không dùng `as TargetType` một cách mù quáng. Luôn xác thực (validate) dữ liệu bằng Zod, Yup hoặc Type Guards (`typeof`, `instanceof`, custom type guards) để đảm bảo an toàn runtime.
*   **Explicit Return Types**: Định nghĩa rõ ràng kiểu dữ liệu trả về cho các hàm public API, Custom Hooks, Helper Functions lớn hoặc các hàm export để nâng cao khả năng đọc hiểu và phát hiện lỗi kiểu sớm.

---

## 3. QUẢN LÝ IMPORT VÀ TỐI ƯU HÓA CODE

*   **Dọn dẹp Import thừa (Unused Imports)**: Không để các package, components, variables, hay styles được import vào nhưng không sử dụng. Sử dụng ESLint rule (`no-unused-vars` kết hợp `unused-imports/no-unused-imports`) để tự động cảnh báo hoặc xóa bỏ import thừa khi lưu file.
*   **Không import trùng lặp**: Nhóm các import từ cùng một nguồn vào chung một dòng (ví dụ: `import { useState, useEffect } from 'react'` thay vì viết hai dòng import riêng biệt).
*   **Thứ tự Import nhất quán (Import Sorting)**: Sắp xếp các câu lệnh import theo nhóm từ ngoài vào trong:
    1.  Các package bên thứ ba (ví dụ: `react`, `react-router-dom`, `lodash`).
    2.  Các module nội bộ thông qua absolute path / alias (ví dụ: `@/components`, `@/hooks`, `@/utils`).
    3.  Các module nội bộ thông qua relative path (ví dụ: `../types`, `./styles.css`).
    4.  Asset files, style sheets, SVG, images.
