# Yêu Cầu Bổ Sung gRPC Protobuf & Backend Service cho Module SEO

Tài liệu này tổng hợp danh sách các thuộc tính và field cần bổ sung trong gRPC Protobuf (`Protos/seo.proto`) và Backend Service để tối ưu hóa SEO chuyên sâu cho ứng dụng Next.js, đồng thời đảm bảo Type-Safety tuyệt đối cho Frontend SDK.

---

## 1. Lý do cần bổ sung & Chuẩn hóa

1. **Loại bỏ Type Casting không an toàn ở Frontend**: Hiện tại một số trường như `alternateLanguages` đang không có trong Protobuf contract, khiến SDK phải dùng ép kiểu `(page as unknown as Record<string, unknown>)`.
2. **Hỗ trợ đầy đủ Next.js 14+ Metadata API**: Next.js yêu cầu các thông tin như `alternates.languages` (`hreflang`), `openGraph.article` (tác giả, ngày đăng, ngày sửa), và `twitter` card.
3. **Chuẩn hóa XML Sitemap**: Trường `priority` (độ ưu tiên trong Sitemap) hiện tại đang bị khuyết ở Tag 2 trong message `SeoSitemapConfigData`.

---

## 2. Danh sách Chi tiết Theo gRPC Messages

### 2.1. Message `SeoPageConfigData` (Cấu hình SEO từng trang)

Bổ sung thông tin cho bài viết, sản phẩm, và đa ngôn ngữ (`hreflang`).

| STT | Field Name (Protobuf) | Field Name (JSON/TS) | Type (Proto) | Mô tả & Mục đích SEO | Trạng thái hiện tại |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | `alternate_languages` | `alternateLanguages` | `map<string, string>` | Khai báo danh sách URL ngôn ngữ thay thế (`hreflang`). Ví dụ: `{"en": "/en/blog", "vi": "/vi/blog"}` | ⚠️ SDK phải hack `as unknown` |
| **2** | `author` | `author` | `string` | Tác giả bài viết (Dùng cho OpenGraph Article & Schema Article/BlogPosting) | ❌ Chưa có trong Protobuf |
| **3** | `published_time` | `publishedTime` | `google.protobuf.Timestamp` | Thời gian xuất bản bài viết (`article:published_time`) | ❌ Chưa có trong Protobuf |
| **4** | `modified_time` | `modifiedTime` | `google.protobuf.Timestamp` | Thời gian cập nhật bài viết (`article:modified_time`) | ❌ Chưa có trong Protobuf |
| **5** | `section` | `section` | `string` | Chuyên mục chính bài viết (`article:section`) | ❌ Chưa có trong Protobuf |
| **6** | `tags` | `tags` | `repeated string` | Danh sách thẻ bài viết (`article:tag`) | ❌ Chưa có trong Protobuf |
| **7** | `seo_keyword_list` | `seoKeywordList` | `repeated string` | Chuẩn hóa tên trường keyword (Đồng bộ với `keyword_list`) | ⚠️ SDK phải fallback 2 field |

---

### 2.2. Message `SeoSitemapConfigData` (Cấu hình Sitemap XML)

Bổ sung trường độ ưu tiên và ngày cập nhật cuối.

| STT | Field Name (Protobuf) | Field Name (JSON/TS) | Type (Proto) | Mô tả & Mục đích SEO | Trạng thái hiện tại |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | `priority` | `priority` | `double` | Độ ưu tiên URL trong Sitemap (Từ `0.0` đến `1.0`) | ❌ **Bị khuyết Tag 2** (`include = 1; change_freq = 3;`) |
| **2** | `last_mod` | `lastMod` | `google.protobuf.Timestamp` | Thời điểm thay đổi nội dung cuối cùng (`<lastmod>`) | ❌ Chưa có trong Protobuf |

---

### 2.3. Message `SeoOpenGraphData` (Cấu hình Chia sẻ Mạng xã hội)

Bổ sung thẻ chia sẻ cho Twitter/X và Meta.

| STT | Field Name (Protobuf) | Field Name (JSON/TS) | Type (Proto) | Mô tả & Mục đích SEO | Trạng thái hiện tại |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | `twitter_card` | `twitterCard` | `string` | Loại thẻ Twitter (`summary_large_image`, `summary`, `app`) | ❌ Chưa có trong Protobuf |
| **2** | `twitter_site` | `twitterSite` | `string` | Username Twitter/X của trang web (VD: `@optiflow`) | ⚠️ Phải bóc tách từ `social_links` |
| **3** | `image_alt` | `imageAlt` | `string` | Văn bản mô tả hình ảnh cho người khiếm thị (`og:image:alt`) | ❌ Chưa có trong Protobuf |

---

### 2.4. Message `SeoGlobalConfigData` (Cấu hình SEO Toàn trang)

Bổ sung thông tin doanh nghiệp cho Google Knowledge Graph.

| STT | Field Name (Protobuf) | Field Name (JSON/TS) | Type (Proto) | Mô tả & Mục đích SEO | Trạng thái hiện tại |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | `facebook_app_id` | `facebookAppId` | `string` | App ID quản trị Facebook (`fb:app_id`) | ❌ Chưa có trong Protobuf |
| **2** | `price_range` | `priceRange` | `string` | Mức giá doanh nghiệp cho Schema Organization (VD: `$$$`) | ❌ Chưa có trong Protobuf |
| **3** | `opening_hours` | `openingHours` | `repeated string` | Giờ mở cửa cho Schema LocalBusiness | ❌ Chưa có trong Protobuf |

---

## 3. Protobuf Schema Mẫu Cập Nhật (`Protos/seo.proto`)

Backend có thể tham khảo đoạn định nghĩa Protobuf sau để cập nhật trực tiếp:

```protobuf
syntax = "proto3";

import "google/protobuf/timestamp.proto";

package seo;

// 1. Page Config
message SeoPageConfigData {
  string route = 1;
  string title = 2;
  string description = 3;
  string canonical_url = 4;
  string schema_markup = 5;
  bool is_amp_enabled = 6;
  SeoRobotsMetaData robots = 7;
  SeoOpenGraphData open_graph = 8;
  SeoSitemapConfigData sitemap = 9;
  string entity_type = 10;
  string entity_id = 11;
  string org_id = 12;
  google.protobuf.Timestamp created_at = 13;
  google.protobuf.Timestamp updated_at = 14;
  string created_by = 15;
  string updated_by = 16;
  repeated string keyword_list = 17;
  
  // === BỔ SUNG ===
  map<string, string> alternate_languages = 18;
  string author = 19;
  google.protobuf.Timestamp published_time = 20;
  google.protobuf.Timestamp modified_time = 21;
  string section = 22;
  repeated string tags = 23;
}

// 2. Sitemap Config
message SeoSitemapConfigData {
  bool include = 1;
  double priority = 2; // Bổ sung Tag 2
  string change_freq = 3;
  google.protobuf.Timestamp last_mod = 4; // Bổ sung Tag 4
}

// 3. OpenGraph Config
message SeoOpenGraphData {
  string title = 1;
  string description = 2;
  string image = 3;
  string type = 4;
  string locale = 5;
  string site_name = 6;
  string url = 7;
  google.protobuf.Timestamp updated_time = 8;
  
  // === BỔ SUNG ===
  string twitter_card = 9;
  string twitter_site = 10;
  string image_alt = 11;
}

// 4. Global Config
message SeoGlobalConfigData {
  // ... (giữ nguyên các trường từ 1 - 30)
  
  // === BỔ SUNG ===
  string facebook_app_id = 31;
  string price_range = 32;
  repeated string opening_hours = 33;
}
```
