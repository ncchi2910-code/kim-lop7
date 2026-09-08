/* ====== CẤU HÌNH — CHỈ CẦN SỬA Ở ĐÂY ======
   WEEK1_START: ngày thứ Hai của tuần học đầu tiên theo lịch trường Kim (định dạng YYYY-MM-DD).
   Đổi ngày này là toàn bộ lịch tuần tự dịch theo. */
window.KIM_CONFIG = {
  WEEK1_START: "2026-09-07",
  TONG_TUAN: 35,
  TEN_HOC_SINH: "Kim",
  /* ĐỒNG BỘ QUA SUPABASE — điền hai dòng dưới rồi mọi máy sẽ thấy cùng tiến độ.
     Lấy ở Supabase → Project Settings → API. anon key là khoá công khai, để trong mã nguồn là bình thường.
     Mã bí mật KHÔNG để ở đây: mẹ và Kim nhập tay một lần trong Góc của mẹ.
     Để trống url/anonKey thì app vẫn chạy bình thường, chỉ là mỗi máy lưu riêng. */
  SUPABASE: {
    /* Project URL, ví dụ https://abcdxyz.supabase.co — chỉ thay phần trong dấu ngoặc kép, giữ nguyên dấu phẩy cuối dòng */
    url: "https://sllomeithtjdecqxrryw.supabase.co",
    /* anon public key */
    anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsbG9tZWl0aHRqZGVjcXhycnl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg2OTk3NDMsImV4cCI6MjEwNDI3NTc0M30.VBk9SmDAl43NF4v1VgjZ8IKdTvtkXGWzDGqyMlXxTOs",
    /* id hàng trong bảng kim_so */
    so: "kim",
  },
  /* Thưởng */
  XU_MOI_CAU_DUNG: 10,
  XU_XONG_LUOT: 20,
  XU_SOAN_BAI: 15,
  XU_LUYEN_TINH: 15,
  SO_CAU_LUYEN: 5,
  THE_CAO_NGAY: { min: 5000, max: 20000, buoc: 1000 }, /* thẻ cào mỗi ngày Kim xong hết việc */
  THE_CAO: [10000, 10000, 15000, 15000, 20000, 30000], /* rút ngẫu nhiên một giá trị khi đóng tuần */
  /* Tên và màu môn */
  MON: {
    toan: { ten: "Toán", icon: "➗", mau: "#2f7ed8", nen: "#e3f0ff" },
    van:  { ten: "Văn",  icon: "✍️", mau: "#e0367a", nen: "#ffe3ec" },
    anh:  { ten: "Anh",  icon: "🇬🇧", mau: "#1f9d57", nen: "#e6f7ec" },
    khtn: { ten: "KHTN", icon: "🔬", mau: "#8b5cf6", nen: "#efe9ff" },
    sudia:{ ten: "Sử–Địa", icon: "🗺️", mau: "#b45309", nen: "#fff1dc" },
  },
  /* THỜI KHOÁ BIỂU lớp 7A, áp dụng từ 07/09/2026. Sửa ở đây nếu trường đổi TKB. */
  LICH_HOC: {
    2: { sang: ["Chào cờ + HĐTN", "Lịch sử", "KHTN", "KHTN"], chieu: ["Tiếng Anh", "Tiếng Anh", "GDTC"] },
    3: { sang: ["Ngữ văn", "Ngữ văn", "HĐTN hướng nghiệp", "Tiếng Anh"], chieu: ["Âm nhạc", "Mĩ thuật", "CLB", "CLB"] },
    4: { sang: ["Tin học", "Địa lí", "Toán", "Toán"], chieu: ["Anh tăng cường", "Anh tăng cường", "GDTC"] },
    5: { sang: ["Toán", "Toán", "GDCD", "Địa lí", "Công nghệ"], chieu: [] },
    6: { sang: ["Ngữ văn", "Ngữ văn", "GD địa phương", "Sinh hoạt + HĐTN"], chieu: ["KHTN", "KHTN", "CLB", "CLB"] },
    7: { sang: [], chieu: [] },
    8: { sang: [], chieu: [] },
  },
  THU: { 2: "Thứ Hai", 3: "Thứ Ba", 4: "Thứ Tư", 5: "Thứ Năm", 6: "Thứ Sáu", 7: "Thứ Bảy", 8: "Chủ nhật" },
  /* Tuần kiểm tra định kì (để hiện thước "đường đến kì kiểm tra") */
  KIEM_TRA: [
    { tuan: 9,  ten: "Giữa kì I" },
    { tuan: 18, ten: "Cuối kì I" },
    { tuan: 26, ten: "Giữa kì II" },
    { tuan: 34, ten: "Cuối kì II" },
  ],
};
