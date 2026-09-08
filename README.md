# Kim Lớp 7 — học cùng trường mỗi tuần

Trang web tĩnh (không cần máy chủ) đi kèm năm học lớp 7 của Kim, bộ sách Kết nối tri thức. Mỗi tuần theo lịch trường có: thẻ "tuần này học gì" cho 5 môn chính, 6 bài soạn (học trước, mở SGK làm theo, tự trả lời 2–3 câu, mẹ đọc được câu trả lời ở Góc của mẹ), 5 lượt kiểm tra ngắn (Thứ Hai → Thứ Sáu, 7 câu, có giải thích), bài đọc trước, và phần "đóng tuần" cuối tuần cùng mẹ (xem lại chỗ sai, 5 câu chốt, thẻ cào vào heo đất).

Trang **Hôm nay** hiện thời khoá biểu hôm nay, ngày mai và ngày kia, rồi liệt kê việc tối nay: bài soạn cho ngày mai, lượt ôn bài vừa học, **5 câu luyện tính** (đề sinh tự động theo chương Toán đang học, cố định trong ngày), và **chuẩn bị bài tập cùng sách vở cho ngày mai** — Kim trả lời từng môn "có bài và làm xong rồi" hay "không có bài", xong thì được nhắc xếp cặp luôn.

Mỗi ngày Kim làm xong hết việc của ngày đó sẽ mở được **phần thưởng cuối ngày**: một lời nhắn động viên, một thẻ cào ngẫu nhiên 5.000–20.000đ cộng vào heo đất, và một mẩu tin về Anh trai vượt ngàn chông gai. Mỗi ngày chỉ mở một lần; mở lại trong ngày vẫn xem được nhưng không cào thêm tiền.

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
thuong.js         kho câu động viên và tin Anh trai vượt ngàn chông gai cho phần thưởng cuối ngày
giang-bai.js      bản giảng lại dễ hiểu cho những bài sách viết khó
luyen-tinh.js     bộ sinh đề luyện tính mỗi ngày, bám chương Toán đang học
dong-bo.js        đồng bộ tiến độ qua Supabase (tuỳ chọn)
supabase.sql      script tạo bảng và hàm trên Supabase
huong-dan-dong-bo.md  hướng dẫn bật đồng bộ, 10 phút
tuan-01.js … tuan-04.js   nội dung từng tuần
MAU-tuan-XX.js    mẫu để soạn tuần mới
test/check.mjs    kiểm thử tự động (tuỳ chọn, cần Node + Playwright)
```

Tiến độ của Kim lưu trong trình duyệt (localStorage) của thiết bị Kim dùng. Mặc định trang phụ huynh đọc cùng dữ liệu đó, nên phải mở trên cùng thiết bị mới thấy.

Bật **đồng bộ Supabase** thì mọi thiết bị thấy chung một tiến độ — mẹ xem được từ máy mình. Xem `huong-dan-dong-bo.md`; để trống khối `SUPABASE` trong `config.js` là tắt, app vẫn chạy bình thường.

## Đưa lên mạng (GitHub + Vercel)

1. Tạo repo mới trên GitHub, ví dụ `kim-lop7`. Tải toàn bộ thư mục này lên (kéo thả trên web GitHub, hoặc `git push`).
2. Vào vercel.com → Add New Project → chọn repo `kim-lop7` → Framework: Other → Deploy. Không cần cài đặt gì thêm.
3. Muốn dùng tên miền riêng: trong Vercel → Settings → Domains → thêm `lop7.kimhoc.fun`, rồi thêm bản ghi CNAME theo hướng dẫn ở chỗ quản lí tên miền kimhoc.fun.

Mỗi lần thêm tuần mới chỉ cần đẩy file lên GitHub, Vercel tự cập nhật.

## Thêm tuần mới (mỗi cuối tuần, 15–20 phút)

1. Sao chép `MAU-tuan-XX.js` thành `tuan-05.js`, đổi `KIM_WEEKS[99]` và `tuan: 99` thành 5.
2. Điền nội dung: 5 thẻ môn, 5 lượt × 7 câu, 2–3 bài đọc trước. Có thể nhờ Claude soạn từ bản tổng quan chương trình trong Project, rồi mẹ duyệt lại đáp án.
3. Thêm dòng `<script src="tuan-05.js"></script>` vào `index.html`, ngay dưới dòng tuần 4. Thêm khối `window.KIM_SOAN[5] = [...]` vào `soan-bai.js` theo mẫu các tuần trước.
4. Bài nào sách viết khó thì thêm một mục vào `giang-bai.js` (theo mẫu `khtn-b1`), rồi thêm `giang: "ma-bai"` vào mục tương ứng trong `soan-bai.js` — trang soạn bài sẽ tự hiện nút "Sách khó hiểu quá?".
5. Vài tuần một lần, bổ sung tin mới vào `window.KIM_TIN` trong `thuong.js` (kho hiện có 32 tin, dùng hết khoảng 5 tuần rồi mới lặp lại).
6. Mở `index.html` trong trình duyệt để xem thử, rồi đẩy lên GitHub.

## Chỉnh lịch

`config.js` → `WEEK1_START` là ngày Thứ Hai của tuần học đầu tiên (đang là 07/09/2026, khớp ngày thời khoá biểu có hiệu lực). `LICH_HOC` là thời khoá biểu; nếu trường đổi TKB thì sửa ở đây, đồng thời đổi `thu` của các lượt ôn trong `tuan-XX.js` và `soanToi` trong `soan-bai.js` cho khớp. Nếu trường Kim bắt đầu tuần 1 ngày khác, sửa ở đây; toàn bộ lịch tự dịch theo. Cũng trong file này có mức xu, mệnh giá thẻ cào cuối tuần (`THE_CAO`), khoảng thẻ cào mỗi ngày (`THE_CAO_NGAY`, đang là 5.000–20.000đ), và tuần kiểm tra định kì.

## Kiểm thử (tuỳ chọn)

```
cd test && npm init -y && npm i playwright && node check.mjs
```

Script kiểm tra cấu trúc dữ liệu (đủ 7 câu, 4 lựa chọn, đáp án hợp lệ), chạy thử toàn bộ luồng và chụp màn hình.
