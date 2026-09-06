# Bật đồng bộ Supabase cho Kim Lớp 7

Sau khi làm xong, Kim học trên máy Kim còn mẹ mở Góc của mẹ trên máy mẹ vẫn thấy đủ: bài đã soạn, câu Kim tự viết, điểm từng lượt ôn, xu và heo đất. Mất khoảng 10 phút.

## Cách thiết kế

Repo là public nên anon key ai cũng xem được. Vì vậy bảng `kim_so` bị khoá kín bằng RLS (không có policy nào, anon không đọc/ghi thẳng được), dữ liệu chỉ ra vào qua ba hàm `SECURITY DEFINER`, và mỗi hàm đều đòi mã bí mật. Mã không nằm trong mã nguồn — mẹ và Kim nhập tay một lần trên mỗi thiết bị, lưu ở localStorage của máy đó.

Không dùng Supabase Auth vì Kim sẽ phải nhớ email và mật khẩu, trong khi ở đây chỉ cần một mã dùng chung trong nhà.

## Bước 1 — Chạy SQL

Mở project Supabase (dùng project sẵn có cũng được, tên bảng và hàm đều có tiền tố `kim_` nên không đụng gì khác) → **SQL Editor** → dán toàn bộ nội dung file `supabase.sql`.

Trước khi bấm Run, sửa dòng gần cuối:

```sql
values ('kim', 'doi-ma-nay-thanh-ma-cua-me', '{}'::jsonb)
```

Thay `doi-ma-nay-thanh-ma-cua-me` bằng mã mẹ tự đặt: từ 12 kí tự trở lên, không dấu, không khoảng trắng. Ví dụ `kim7a-mua-thu-2026`. Ghi lại mã này, lát nữa cần nhập vào trang web.

Bấm **Run**. Kiểm tra bằng:

```sql
select id, cap_nhat from public.kim_so;
```

Phải trả về một hàng `kim`.

## Bước 2 — Lấy URL và anon key

Supabase → **Project Settings** → **API**, lấy hai thứ:

- **Project URL**, dạng `https://xxxxxxxx.supabase.co`
- **anon public** key, chuỗi dài bắt đầu bằng `eyJ...`

## Bước 3 — Điền vào config.js

Mở `config.js`, điền vào khối `SUPABASE` ở đầu file:

```js
SUPABASE: {
  url: "https://xxxxxxxx.supabase.co",
  anonKey: "eyJhbGciOi...",
  so: "kim",
},
```

Để trống hai dòng này thì app vẫn chạy bình thường, chỉ là mỗi máy lưu riêng như trước.

## Bước 4 — Đưa lên GitHub

Tải lên repo `kim-lop7` các file: `index.html`, `app.js`, `config.js`, `dong-bo.js`, `supabase.sql`, `huong-dan-dong-bo.md`, `README.md`. Trong đó `dong-bo.js` và `supabase.sql` là file mới.

Nếu ngại sửa `config.js` ở máy rồi tải lên, có thể tải bản chưa điền lên trước, rồi vào thẳng GitHub bấm vào file `config.js` → biểu tượng bút chì → điền url và anonKey → Commit changes.

Vercel tự cập nhật sau khoảng một phút.

## Bước 5 — Nối máy

Làm giống nhau trên **máy Kim** và **máy mẹ**:

1. Mở `lop7.kimhoc.fun` → tab **Góc của mẹ**.
2. Hiện ô "Nối máy này với sổ của Kim" → nhập mã bí mật ở Bước 1 → bấm **Nối sổ**.
3. Nối xong, khối Đồng bộ hiện "Đã đồng bộ lúc HH:MM".

Nếu Kim đã học được vài hôm trên máy Kim rồi, dữ liệu cũ **không mất**: khi nối, web hợp nhất bản trên máy với bản trên mạng, giữ cả hai bên.

## Sau khi bật

Web tự tải bản mới nhất mỗi lần mở trang, và tự đẩy lên sau mỗi thay đổi (chờ 2 giây rồi gửi một lần, để không gọi mạng liên tục). Trong Góc của mẹ có nút **Đồng bộ ngay** để lấy bản mới nhất mà không cần tải lại trang, và nút **Bỏ nối máy này** nếu muốn gỡ mã khỏi một thiết bị.

Cách hợp nhất khi hai máy cùng có dữ liệu: xu, heo đất, số ngày thưởng lấy số lớn hơn (không bao giờ mất tiền của Kim); chuỗi ngày lấy bản gần đây hơn; các lượt ôn, bài soạn, ngày đã thưởng thì gộp theo khoá, trùng khoá thì ưu tiên bản trên máy đang mở.

## Xử lý khi trục trặc

**"Sai sổ hoặc sai mã"** — mã nhập chưa đúng, hoặc chưa chạy dòng `insert` ở Bước 1. Kiểm tra bằng `select id, ma_bi_mat from public.kim_so;`.

**Khối Đồng bộ không hiện, vẫn hỏi mã** — `config.js` chưa có url/anonKey, hoặc file chưa lên GitHub. Mở trang, bấm chuột phải → Xem nguồn → tìm `dong-bo.js` xem đã nạp chưa.

**Máy mẹ không thấy bài Kim vừa làm** — Kim làm xong nhưng máy chưa kịp đẩy lên (chờ 2 giây, cần có mạng). Bảo Kim mở lại trang một lần, rồi mẹ bấm Đồng bộ ngay.

**Muốn đổi mã** — chạy `update public.kim_so set ma_bi_mat = 'ma-moi' where id = 'kim';` rồi nối lại trên từng máy.

**Muốn xoá sạch làm lại** — Góc của mẹ → Xoá toàn bộ tiến độ. Nút này giờ xoá cả trên Supabase, không chỉ trên máy.
