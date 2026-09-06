# Kim Lớp 7 — học cùng trường mỗi tuần

Trang web tĩnh (không cần máy chủ) đi kèm năm học lớp 7 của Kim, bộ sách Kết nối tri thức. Mỗi tuần theo lịch trường có: thẻ "tuần này học gì" cho 5 môn chính, 6 bài soạn (học trước, mở SGK làm theo, tự trả lời 2–3 câu, mẹ đọc được câu trả lời ở Góc của mẹ), 5 lượt kiểm tra ngắn (Thứ Hai → Thứ Sáu, 7 câu, có giải thích), bài đọc trước, và phần "đóng tuần" cuối tuần cùng mẹ (xem lại chỗ sai, 5 câu chốt, thẻ cào vào heo đất).

Mọi thứ bám theo thời khoá biểu lớp 7A (áp dụng từ 07/09/2026, ghi trong `config.js` → `LICH_HOC`):

| | Thứ Hai | Thứ Ba | Thứ Tư | Thứ Năm | Thứ Sáu |
|---|---|---|---|---|---|
| Sáng | Chào cờ+HĐTN, **Lịch sử**, **KHTN** ×2 | **Ngữ văn** ×2, HĐTN-HN, **Tiếng Anh** | Tin học, **Địa lí**, **Toán** ×2 | **Toán** ×2, GDCD, **Địa lí**, Công nghệ | **Ngữ văn** ×2, GDĐP, SH+HĐTN |
| Chiều | **Tiếng Anh** ×2, GDTC | Âm nhạc, Mĩ thuật, CLB | Anh tăng cường ×2, GDTC | — | **KHTN** ×2, CLB |

Vì thế: lượt ôn mỗi tối rơi đúng vào ngày Kim vừa học môn đó (Thứ Hai Anh, Thứ Ba Văn, Thứ Tư Toán Đại số, Thứ Năm Toán Hình học, Thứ Sáu KHTN), còn bài soạn đặt vào tối TRƯỚC ngày có tiết. Toán 4 tiết chia Thứ Tư (Đại số) và Thứ Năm (Hình học). Trong học kì I, Địa lí 2 tiết/tuần đi nhanh hơn Lịch sử 1 tiết/tuần; KHTN dạy tuần tự Hoá → Lí → Sinh.

## Cấu trúc

```
index.html        giao diện + danh sách file tuần
app.js            logic (không cần sửa)
config.js         ngày bắt đầu tuần 1, mức thưởng, tên môn
soan-bai.js       phần Soạn bài (học trước) cho từng tuần: trang SGK, việc cần làm, câu hỏi tự trả lời, cần nhớ
tuan-01.js … tuan-04.js   nội dung từng tuần
MAU-tuan-XX.js    mẫu để soạn tuần mới
test/check.mjs    kiểm thử tự động (tuỳ chọn, cần Node + Playwright)
```

Tiến độ của Kim lưu trong trình duyệt (localStorage) của thiết bị Kim dùng. Trang phụ huynh đọc cùng dữ liệu đó, nên mở trên cùng thiết bị mới thấy.

## Đưa lên mạng (GitHub + Vercel)

1. Tạo repo mới trên GitHub, ví dụ `kim-lop7`. Tải toàn bộ thư mục này lên (kéo thả trên web GitHub, hoặc `git push`).
2. Vào vercel.com → Add New Project → chọn repo `kim-lop7` → Framework: Other → Deploy. Không cần cài đặt gì thêm.
3. Muốn dùng tên miền riêng: trong Vercel → Settings → Domains → thêm `lop7.kimhoc.fun`, rồi thêm bản ghi CNAME theo hướng dẫn ở chỗ quản lí tên miền kimhoc.fun.

Mỗi lần thêm tuần mới chỉ cần đẩy file lên GitHub, Vercel tự cập nhật.

## Thêm tuần mới (mỗi cuối tuần, 15–20 phút)

1. Sao chép `MAU-tuan-XX.js` thành `tuan-05.js`, đổi `KIM_WEEKS[99]` và `tuan: 99` thành 5.
2. Điền nội dung: 5 thẻ môn, 5 lượt × 7 câu, 2–3 bài đọc trước. Có thể nhờ Claude soạn từ bản tổng quan chương trình trong Project, rồi mẹ duyệt lại đáp án.
3. Thêm dòng `<script src="tuan-05.js"></script>` vào `index.html`, ngay dưới dòng tuần 4. Thêm khối `window.KIM_SOAN[5] = [...]` vào `soan-bai.js` theo mẫu các tuần trước.
4. Mở `index.html` trong trình duyệt để xem thử, rồi đẩy lên GitHub.

## Chỉnh lịch

`config.js` → `WEEK1_START` là ngày Thứ Hai của tuần học đầu tiên (đang là 07/09/2026, khớp ngày thời khoá biểu có hiệu lực). `LICH_HOC` là thời khoá biểu; nếu trường đổi TKB thì sửa ở đây, đồng thời đổi `thu` của các lượt ôn trong `tuan-XX.js` và `soanToi` trong `soan-bai.js` cho khớp. Nếu trường Kim bắt đầu tuần 1 ngày khác, sửa ở đây; toàn bộ lịch tự dịch theo. Cũng trong file này có mức xu, các mệnh giá thẻ cào, và tuần kiểm tra định kì.

## Kiểm thử (tuỳ chọn)

```
cd test && npm init -y && npm i playwright && node check.mjs
```

Script kiểm tra cấu trúc dữ liệu (đủ 7 câu, 4 lựa chọn, đáp án hợp lệ), chạy thử toàn bộ luồng và chụp màn hình.
