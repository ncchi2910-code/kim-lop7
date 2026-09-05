/* MẪU TUẦN MỚI — sao chép file này thành tuan-05.js (đổi số), điền nội dung, rồi thêm dòng
   <script src="data/tuan-05.js"></script> vào index.html.
   Quy ước: thu = 2..6 (Thứ Hai → Thứ Sáu); mon = toan | van | anh | khtn | sudia;
   mỗi lượt 7 câu, mỗi câu 4 lựa chọn; dung = chỉ số đáp án đúng (0 = A, 1 = B, 2 = C, 3 = D);
   cd = chủ đề ngắn để gom lỗi (viết giống nhau cho các câu cùng chủ đề). */
window.KIM_WEEKS = window.KIM_WEEKS || {};
window.KIM_WEEKS[99] = {
  tuan: 99,
  ten: "Tên tuần",
  icon: "🌟",
  monHoc: [
    { mon: "Toán", icon: "➗", hoc: "Tuần này học gì (2–3 câu).", vap: "Chỗ dễ vấp." },
    { mon: "Ngữ văn", icon: "✍️", hoc: "", vap: "" },
    { mon: "Tiếng Anh", icon: "🇬🇧", hoc: "", vap: "" },
    { mon: "KHTN", icon: "🔬", hoc: "", vap: "" },
    { mon: "Sử – Địa", icon: "🗺️", hoc: "", vap: "" },
  ],
  monKhac: "GDCD … · Tin học … · Công nghệ … · HĐTN ….",
  ngay: [
    { thu: 2, mon: "toan", ten: "Toán · …", cauHoi: [
      { q: "Đề câu 1?", a: ["A", "B", "C", "D"], dung: 0, gt: "Giải thích.", cd: "Chủ đề" },
      /* … đủ 7 câu */
    ]},
    { thu: 3, mon: "van", ten: "Văn · …", cauHoi: [] },
    { thu: 4, mon: "anh", ten: "Anh · …", cauHoi: [] },
    { thu: 5, mon: "toan", ten: "Toán · …", cauHoi: [] },
    { thu: 6, mon: "khtn", ten: "KHTN · …", cauHoi: [] },
  ],
  docTruoc: [
    { mon: "Toán", tieuDe: "Tuần sau: …", noiDung: "…" },
    { mon: "KHTN", tieuDe: "Tuần sau: …", noiDung: "…" },
    { mon: "Tiếng Anh", tieuDe: "Từ vựng cần thuộc", noiDung: "…" },
  ],
};
