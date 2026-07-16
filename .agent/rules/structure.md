# FILE & FOLDER STRUCTURE RULES & STANDARDS

Tài liệu này định nghĩa cấu trúc thư mục và quy tắc quản lý file đồng bộ cho cả dự án **ReactJS (Vite)** và **Next.js (App Router)**, giúp lập trình viên và AI Agent dễ dàng định vị file, tránh đặt nhầm chỗ.

> [!NOTE]
> Để tránh quá giới hạn ký tự và tối ưu hóa quản lý, các phần quy tắc khác đã được phân tách:
> *   Quy tắc React Core (Components, State, API & Errors): Xem tại [react.md](file:///d:/RULE/.agent/rules/react.md)
> *   Quy tắc Next.js (App Router): Xem tại [nextjs.md](file:///d:/RULE/.agent/rules/nextjs.md)
> *   Quy tắc TypeScript & Import: Xem tại [ts-import.md](file:///d:/RULE/.agent/rules/ts-import.md)
> *   Quy tắc Hiệu năng & Styling (CSS/Tailwind): Xem tại [performance-styling.md](file:///d:/RULE/.agent/rules/performance-styling.md)
> *   Chất lượng Code, Bảo mật & A11y: Xem tại [code-quality.md](file:///d:/RULE/.agent/rules/code-quality.md)

---

## 1. MÔ HÌNH THƯ MỤC CHUẨN HÓA (UNIFIED SRC DIRECTORY)

Cả React và Next.js bắt buộc phải sử dụng thư mục gốc `src/` để chứa toàn bộ mã nguồn ứng dụng. Các file cấu hình hệ thống (config, package.json, tsconfig.json, tailwind.config.js...) nằm ở thư mục gốc (Root).

```
Project Root
├── public/                  # Assets tĩnh không qua bundler
└── src/                     # Toàn bộ mã nguồn ứng dụng
    ├── app/                 # ROUTING: Next.js App Router (Nếu dùng Next.js)
    ├── pages/               # ROUTING: React-Router Pages (Nếu dùng React SPA)
    ├── routes/              # ROUTING: Cấu hình Router (Nếu dùng React SPA)
    ├── components/          # GLOBAL UI: Các UI Components dùng chung toàn dự án
    ├── features/            # BUSINESS MODULES: Thư mục chứa logic theo chức năng (Domain)
    ├── hooks/               # GLOBAL HOOKS: Các custom hooks dùng chung
    ├── store/               # STATE: Quản lý Global Client State (Zustand, Jotai)
    ├── services/            # API: Định nghĩa Axios/Fetch requests và API endpoints
    ├── utils/               # HELPERS: Các hàm bổ trợ thuần túy (format, validate)
    ├── types/               # TYPES: Định nghĩa kiểu TypeScript dùng chung
    └── lib/                 # THIRD PARTY: Cấu hình thư viện bên thứ 3 (supabase, prisma...)
```

---

## 2. QUY TẮC PHÂN CHIA CHI TIẾT (FOLDER ARCHITECTURE)

### 2.1. Thư mục `src/components/` (Global UI Only)
*   Chỉ chứa các component UI nguyên tử, dùng chung ở nhiều trang khác nhau (ví dụ: `Button`, `Input`, `Modal`, `Table`, `Dropdown`).
*   **Không** chứa logic nghiệp vụ đặc thù (business logic) hoặc gọi API trực tiếp tại đây.

### 2.2. Thư mục `src/features/` hoặc `src/modules/` (Business Logic)
*   Chia nhỏ ứng dụng theo tính năng/domain (ví dụ: `auth`, `cart`, `product`, `checkout`).
*   Mỗi feature folder tự quản lý cấu trúc nội bộ của nó để tăng tính cô lập:
    ```
    src/features/cart/
    ├── components/          # Component chỉ dùng riêng cho giỏ hàng
    ├── hooks/               # Custom hooks chỉ dùng cho giỏ hàng (e.g. useCartItem)
    ├── services/            # API calls liên quan đến giỏ hàng
    ├── types/               # Kiểu dữ liệu riêng của giỏ hàng
    └── index.ts             # Export ra ngoài các thành phần cần dùng
    ```
*   *Lợi ích*: Khi cần sửa chức năng giỏ hàng, chỉ cần tìm kiếm trong thư mục `src/features/cart/`, tránh đi tìm rải rác.

### 2.3. Quy tắc Router Folders
*   **Next.js (App Router - `src/app/`)**:
    *   Thư mục `app/` chỉ chứa các file định tuyến: `layout.tsx`, `page.tsx`, `loading.tsx`, `error.tsx`, `route.ts`.
    *   **Nghiêm cấm** viết code component nghiệp vụ phức tạp trực tiếp trong `app/`. Thay vào đó, hãy import component từ `src/features/` hoặc `src/components/` vào file `page.tsx`.
*   **React (Vite - `src/pages/`)**:
    *   Tương tự như Next.js, thư mục `pages/` chỉ chứa các View Components đại diện cho trang. Logic hiển thị chính được import từ `src/features/`.

---

## 3. QUY TẮC ĐẶT TÊN (NAMING CONVENTIONS)

*   **Tên Thư mục (Folders)**: Sử dụng `kebab-case` (chữ thường, cách nhau bằng dấu gạch ngang). Ví dụ: `shopping-cart`, `user-profile`.
*   **Tên Component & Layout**: Sử dụng `PascalCase` (chữ cái đầu viết hoa). Ví dụ: `CartButton.tsx`, `MainLayout.tsx`.
*   **Tên Hooks**: Sử dụng `camelCase` và bắt buộc có tiền tố `use`. Ví dụ: `useAuth.ts`, `useDebounce.ts`.
*   **Tên File Logic/Helpers/Services**: Sử dụng `camelCase` (chữ cái đầu viết thường). Ví dụ: `formatDate.ts`, `cartService.ts`, `cn.ts`.
*   **Tên File Styles**: Tên component + `.module.css`/`.module.scss`. Ví dụ: `CartButton.module.css`.

---

## 4. NGUYÊN TẮC VẬN HÀNH TRÁNH THẤT LẠC FILE (CO-LOCATION & BARREL FILES)

*   **Không tạo file logic bừa bãi**: Tất cả file code nghiệp vụ phải nằm trong `src/`. Tuyệt đối không tạo file tiện ích ngoài `src/` (trừ cấu hình tooling).
*   **Quy tắc Co-location**: Đặt file test (`.test.tsx`), file style (`.module.css`), và types riêng của component nằm ngay cạnh file component đó.
*   **Quy tắc Barrel Files (`index.ts`)**: Sử dụng file `index.ts` ở cấp thư mục cha để export các module cần thiết ra ngoài. Khi import, đường dẫn sẽ ngắn gọn hơn:
    ```typescript
    // ĐÚNG
    import { CartButton } from '@/components';
    
    // TRÁNH (Import quá sâu vào file con)
    import { CartButton } from '@/components/CartButton/CartButton';
    ```
