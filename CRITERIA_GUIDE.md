# Hướng Dẫn Sử Dụng Bộ Lọc (Criteria Guide)

Tài liệu này giải thích cách sử dụng tính năng lọc dữ liệu (Filter) thông qua `CommonCriteria` trong các API như `GetByQuery`.

## Cấu Trúc Cơ Bản (Basic Structure)

Khi gọi API lấy danh sách (ví dụ: lấy danh sách sản phẩm), bạn sẽ gửi một JSON có dạng:

```json
{
  "PageNumber": 1,
  "PageSize": 20,
  "Criteria": [
    // Danh sách các điều kiện lọc ở đây
  ]
}
```

Mỗi điều kiện (Criteria) có 3 phần chính:

| Thuộc tính | Mô tả | Ví dụ |
| :--- | :--- | :--- |
| **Field** | Tên trường dữ liệu muốn lọc (thường là tên biến trong Entity/DB). | `"price"`, `"name"`, `"status"`, `"classify"`, `"sku"` |
| **Value** | Giá trị bạn muốn so sánh. | `150000`, `"active"`, `"Đầm maxi"` |
| **Type** | Loại phép so sánh (bằng, lớn hơn, nhỏ hơn...). | `"equal"`, `"gt"`, `"includes"` |

---

## Các Loại Phép So Sánh (Supported Types)

Dưới đây là danh sách các `Type` được hỗ trợ:

| Type | Ý nghĩa | Ví dụ ngữ cảnh |
| :--- | :--- | :--- |
| **`equal`** | Bằng chính xác (Mặc định). | Trạng thái là "active". |
| **`notequal`** | Khác (Không bằng). | Danh mục KHÔNG phải là "Phụ kiện". |
| **`gt`** | Lớn hơn (Greater Than). | Giá bán lớn hơn 150k. |
| **`lt`** | Nhỏ hơn (Less Than). | Tồn kho nhỏ hơn 5. |
| **`includes`** | Chứa (Contains). | Tên sản phẩm có chứa chữ "Lụa". |
| **`startswith`** | Bắt đầu bằng. | Mã SKU bắt đầu bằng "DM-". |
| **`endswith`** | Kết thúc bằng. | Phân loại kết thúc bằng "dạ hội". |
| **`dateRange`**| Trong khoảng ngày. | Đơn hàng tạo từ ngày X đến ngày Y. |

---

## Ví Dụ Cụ Thể (Product Examples)

Giả sử bạn đang lọc danh sách **Sản Phẩm (Product)**.

### 1. Tìm sản phẩm đang hoạt động (`Status = "active"`)

```json
{
  "Field": "status",
  "Value": "active",
  "Type": "equal"
}
```

### 2. Tìm đầm cao cấp giá trên 500.000đ (`Price > 500000`)

```json
{
  "Field": "price",
  "Value": 500000,
  "Type": "gt"
}
```

### 3. Tìm sản phẩm có tên bắt đầu bằng "Đầm" (`Name starts with "Đầm"`)

```json
{
  "Field": "name",
  "Value": "Đầm",
  "Type": "startswith"
}
```

### 4. Kết hợp nhiều điều kiện (AND)

Tìm sản phẩm:
*   Thuộc danh mục "Thời trang nữ" (`Category = "thoi-trang-nu"`)
*   **VÀ** Giá nhỏ hơn 1 triệu (`Price < 1000000`)
*   **VÀ** Tên chứa chữ "Maxi" (`Name contains "Maxi"`)

```json
{
  "Criteria": [
    {
      "Field": "category",
      "Value": "thoi-trang-nu",
      "Type": "equal"
    },
    {
      "Field": "price",
      "Value": 1000000,
      "Type": "lt"
    },
    {
      "Field": "name",
      "Value": "Maxi",
      "Type": "includes"
    }
  ]
}
```

### 5. Tìm với trường Classify và Stock (Phức hợp)

Tìm sản phẩm:
*   Phân loại bắt đầu bằng "Đầm" (Ví dụ: "Đầm dạ hội", "Đầm ngủ")
*   **VÀ** Phân loại kết thúc bằng "cotton" (Ví dụ: "Đầm cotton") -> tức là "Đầm...cotton"
*   **VÀ** Tồn kho lớn hơn 70

```json
{
  "Criteria": [
    {
      "Field": "classify",
      "Value": "Đầm",
      "Type": "startswith"
    },
    {
      "Field": "classify",
      "Value": "cotton",
      "Type": "endswith"
    },
    {
      "Field": "stock",
      "Value": 70,
      "Type": "gt"
    }
  ]
}
```

---

## Lưu Ý Quan Trọng

1.  **Field Name**: Tên trường (`Field`) cần khớp với tên trường trong Database (thường là chữ thường, ví dụ `sku`, `price`, `created_at`...).
2.  **Case Insensitive**: Các phép so sánh chuỗi như `startswith`, `endswith`, `includes` thường không phân biệt hoa thường (tùy thuộc vào cài đặt DB, nhưng code hiện tại đã xử lý `Regex` để không phân biệt).
3.  **Data Type**: `Value` nên gửi đúng kiểu dữ liệu (số gửi là số, chuỗi gửi là chuỗi) để đảm bảo chính xác.