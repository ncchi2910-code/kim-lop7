/* ====== CẤU HÌNH — CHỈ CẦN SỬA Ở ĐÂY ======
   WEEK1_START: ngày thứ Hai của tuần học đầu tiên theo lịch trường Kim (định dạng YYYY-MM-DD).
   Đổi ngày này là toàn bộ lịch tuần tự dịch theo. */
window.KIM_CONFIG = {
  WEEK1_START: "2026-09-07",
  TONG_TUAN: 35,
  TEN_HOC_SINH: "Kim",
  /* Thưởng */
  XU_MOI_CAU_DUNG: 10,
  XU_XONG_LUOT: 20,
  XU_SOAN_BAI: 15,
  THE_CAO: [10000, 10000, 15000, 15000, 20000, 30000], /* rút ngẫu nhiên một giá trị khi đóng tuần */
  /* Tên và màu môn */
  MON: {
    toan: { ten: "Toán", icon: "➗", mau: "#2f7ed8", nen: "#e3f0ff" },
    van:  { ten: "Văn",  icon: "✍️", mau: "#e0367a", nen: "#ffe3ec" },
    anh:  { ten: "Anh",  icon: "🇬🇧", mau: "#1f9d57", nen: "#e6f7ec" },
    khtn: { ten: "KHTN", icon: "🔬", mau: "#8b5cf6", nen: "#efe9ff" },
    sudia:{ ten: "Sử–Địa", icon: "🗺️", mau: "#b45309", nen: "#fff1dc" },
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
