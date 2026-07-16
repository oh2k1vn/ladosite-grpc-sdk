---
description: 
---

# FRONTEND DEVELOPMENT WORKFLOW & PROCEDURES

Tài liệu này định nghĩa quy trình làm việc từng bước tiêu chuẩn (Workflows) bắt buộc áp dụng khi thực hiện phát triển tính năng, sửa lỗi hoặc tái cấu trúc (refactoring) trong dự án ReactJS và Next.js. Quy trình này đảm bảo chất lượng code cao nhất, không bỏ sót các trường hợp biên (edge cases).

> [!NOTE]
> Để tránh quá giới hạn ký tự và tối ưu hóa quản lý, các phần quy tắc liên quan đã được phân tách:
> *   Quy tắc React Core: Xem tại [react.md](file:///d:/RULE/.agent/rules/react.md)
> *   Quy tắc Next.js: Xem tại [nextjs.md](file:///d:/RULE/.agent/rules/nextjs.md)
> *   Quy tắc TypeScript & Import: Xem tại [ts-import.md](file:///d:/RULE/.agent/rules/ts-import.md)
> *   Cấu trúc Thư mục & Tệp tin: Xem tại [structure.md](file:///d:/RULE/.agent/rules/structure.md)
> *   Hiệu năng & Styling: Xem tại [performance-styling.md](file:///d:/RULE/.agent/rules/performance-styling.md)
> *   Chất lượng Code & Bảo mật: Xem tại [code-quality.md](file:///d:/RULE/.agent/rules/code-quality.md)

---

## BƯỚC 1: PHÂN TÍCH & THIẾT KẾ (ANALYSIS & PLANNING)

Tuyệt đối không bắt đầu viết code ngay khi nhận yêu cầu. Hãy thực hiện kiểm tra và thiết kế trước:

1.  **Xác định phạm vi tác động**:
    *   Sự thay đổi này ảnh hưởng đến các components, routes hay pages nào hiện tại?
    *   Có cần bổ sung thư viện bên thứ 3 nào không? (Nếu có, phải xin ý kiến Tech Lead trước).
2.  **Định vị thư mục lưu trữ (Theo [structure.md](file:///d:/RULE/.agent/rules/structure.md))**:
    *   Đây là component dùng chung toàn cục (`src/components/`) hay nghiệp vụ riêng biệt (`src/features/<feature-name>/components/`)?
    *   API requests nên nằm ở đâu? Store của Jotail đặt ở đâu?
3.  **Thiết kế Kiểu Dữ liệu (TypeScript Types/Interfaces)**:
    *   Định nghĩa rõ ràng cấu trúc dữ liệu Input/Output từ API và Props của các component sắp viết.

---

## BƯỚC 2: LIÊN KẾT DANH SÁCH EDGE CASES BẮT BUỘC (EDGE-CASE CHECKLIST)

Khi thiết kế UI/UX hoặc xử lý logic, lập trình viên/Agent bắt buộc phải xử lý đủ các trường hợp sau:

*   **Loading State**: Trải nghiệm người dùng khi dữ liệu đang được tải (Skeleton loader, Spinner, Disable buttons tránh click trùng lặp).
*   **Error State**: Trải nghiệm khi API lỗi (hiển thị thông báo thân thiện, nút Retry).
*   **Empty State**: Trải nghiệm khi không có dữ liệu trả về (hình minh họa trống, text gợi ý hành động, ví dụ: "Chưa có sản phẩm nào, hãy thêm vào giỏ hàng").
*   **Responsive Layout**: Hiển thị hoàn hảo trên Mobile, Tablet, và Desktop.
*   **Text Overflow (Tràn chữ)**: Xử lý chữ quá dài bằng CSS truncation (`text-overflow: ellipsis`, `line-clamp`) hoặc tự động xuống dòng phù hợp, không làm vỡ layout.

---

## BƯỚC 3: PHÁT TRIỂN & VIẾT CODE (CODING PHASE)

*   Áp dụng chuẩn chỉ các quy tắc về viết component, hook, quản lý state và CSS từ tài liệu rules.
*   **Tách biệt logic**: Viết logic tính toán và gọi dữ liệu vào custom hook, giữ file component sạch sẽ chỉ lo phần render giao diện.
*   **Early Return**: Luôn viết câu lệnh kiểm tra điều kiện lỗi/trống và return sớm ở đầu hàm để tránh các block `if-else` lồng nhau sâu.

---

## BƯỚC 4: TỰ KIỂM TRA CHẤT LƯỢNG TĨNH (SELF-DIAGNOSIS & STATIC QUALITY CHECK)

Sau khi viết xong code, bắt buộc chạy các kiểm tra sau:

1.  **Kiểm tra Import thừa**:
    *   Xóa toàn bộ import không dùng đến.
    *   Gom các import cùng nguồn vào 1 dòng.
    *   Sắp xếp thứ tự import theo chuẩn trong [ts-import.md](file:///d:/RULE/.agent/rules/ts-import.md).
2.  **Kiểm tra Dependency Array**:
    *   Mở toàn bộ `useEffect`, `useMemo`, `useCallback` ra soát lại xem có bỏ sót biến phụ thuộc nào không để tránh bugs stale state.
3.  **Chạy Typecheck & Linter cục bộ**:
    *   Mở terminal chạy lệnh Typecheck và ESLint của dự án để đảm bảo không lỗi cú pháp hoặc kiểu dữ liệu:
        ```bash
        # Kiểm tra lỗi Type
        npx tsc --noEmit
        
        # Kiểm tra lỗi Linting
        npx eslint src/ --ext .ts,.tsx --fix
        ```
