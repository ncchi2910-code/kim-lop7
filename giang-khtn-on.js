/* MẸ GIẢNG KHTN — tuần 8–9 (01/11–06/11/2026): ôn chương I, Bài 7 hoá trị, ôn chương II trước kiểm tra giữa kì, Bài 8 tốc độ.
   Khuôn giống giang-toan-on.js: bài có `ngay` hiện ở trang chủ đúng ngày đó và trong trang tuần; `luyen` là bài luyện có chấm (tn = trắc nghiệm, dien = điền ngắn).
   Thêm vào index.html:  <script src="giang-khtn-on.js"></script>  (sau giang-toan-on.js). */
window.KIM_GIANG = window.KIM_GIANG || {};

/* ===== Chủ nhật 01/11 · Ôn chương I: nguyên tử, nguyên tố, bảng tuần hoàn ===== */
window.KIM_GIANG["on-khtn-1101"] = {
  mon: "khtn",
  ngay: "2026-11-01",
  tieuDe: "Ôn KHTN ngày 1 · Nguyên tử là gì, vì sao chỉ cần biết số proton là biết cả nguyên tử ở ô nào, hàng nào, cột nào",
  sgk: "KHTN 7, Bài 2, 3, 4 (tr. 14–31)",
  motCau: "Chương I chỉ xoay quanh một con số: số proton. Số proton quyết định tên nguyên tố, bằng số electron, bằng số thứ tự ô trong bảng tuần hoàn. Rồi cách xếp electron thành lớp cho biết chu kì (số lớp) và nhóm (số electron lớp ngoài cùng). Nắm được dây chuyền đó là làm được gần hết câu hỏi của chương.",
  phan: [
    {
      ten: "Nguyên tử gồm gì, và vì sao nó trung hoà điện",
      doan: [
        "Nguyên tử có hạt nhân ở giữa và các electron chạy vòng quanh. Hạt nhân chứa proton (mang điện dương) và neutron (không mang điện). Electron mang điện âm, nhẹ hơn proton rất nhiều nên khối lượng nguyên tử gần như nằm hết ở hạt nhân.",
        "Nguyên tử không mang điện, nghĩa là số điện dương bằng số điện âm. Mỗi proton là +1, mỗi electron là −1, nên số proton = số electron. Đây là câu Kim phải thuộc như bảng cửu chương: p = e.",
      ],
      kn: [
        { ten: "Tính khối lượng nguyên tử", de: "Khối lượng (đơn vị amu) xấp xỉ số proton + số neutron, vì electron nhẹ không đáng kể.", vd: "Nguyên tử có 8 proton, 8 neutron thì khối lượng khoảng 16 amu. Đó là oxygen." },
        { ten: "Electron xếp thành lớp", de: "Lớp gần hạt nhân nhất chứa tối đa 2 electron, lớp thứ hai tối đa 8, lớp thứ ba (với 20 nguyên tố đầu) cũng 8. Điền từ trong ra ngoài, đầy lớp này mới sang lớp kia.", vd: "11 electron: lớp 1 có 2, lớp 2 có 8, còn 1 electron ở lớp 3. Viết là 2, 8, 1." },
      ],
      hop: { nhan: "Câu mẹ hay hỏi", chu: "Nguyên tử có 17 electron thì xếp thế nào? 2, 8, 7. Vậy có 3 lớp và 7 electron lớp ngoài cùng. Kim tự thử với 6, 12, 19 electron." },
    },
    {
      ten: "Nguyên tố hoá học: cùng số proton là cùng một 'họ'",
      doan: [
        "Nguyên tố là tập hợp những nguyên tử có cùng số proton. Hai nguyên tử có thể khác số neutron (nặng nhẹ khác nhau) nhưng cứ cùng 6 proton là đều gọi là carbon. Số proton là 'giấy khai sinh' của nguyên tố.",
        "Mỗi nguyên tố có một kí hiệu: một hoặc hai chữ cái, chữ đầu viết hoa, chữ sau viết thường. Sách dùng tên tiếng Anh: sodium (Na), potassium (K), iron (Fe), copper (Cu). Những kí hiệu không giống tên là vì lấy từ tên La-tinh cũ.",
      ],
      kn: [
        { ten: "Viết kí hiệu cho đúng", de: "CL, cl, Cl — chỉ Cl đúng. Co là cobalt, còn CO là carbon và oxygen ghép lại, tức một hợp chất.", vd: "Đề hỏi 'kí hiệu nào sai': tìm chữ thứ hai viết hoa." },
        { ten: "20 nguyên tố đầu", de: "Thuộc theo hàng: H He / Li Be B C N O F Ne / Na Mg Al Si P S Cl Ar / K Ca.", vd: "Đọc nhanh thành câu cho dễ nhớ, mỗi hàng đúng là một chu kì của bảng tuần hoàn." },
      ],
    },
    {
      ten: "Bảng tuần hoàn: ô, hàng, cột đều đọc được từ cấu tạo nguyên tử",
      doan: [
        "Bảng tuần hoàn xếp các nguyên tố theo số proton tăng dần. Số thứ tự ô = số proton = số electron. Hàng ngang gọi là chu kì, số thứ tự chu kì = số lớp electron. Cột dọc gọi là nhóm, với nhóm A thì số thứ tự nhóm = số electron lớp ngoài cùng.",
        "Vì vậy một bài toán rất hay gặp: cho số proton, suy ra tất cả. Ví dụ nguyên tử có 12 proton: ô 12; electron 2, 8, 2 nên chu kì 3, nhóm IIA; đó là magnesium, kim loại. Ngược lại, cho vị trí (chu kì 2, nhóm VIIA) suy ra 2 lớp electron, 7 electron ngoài cùng, tổng 9 electron, 9 proton: fluorine.",
      ],
      buoc: [
        { so: 1, ten: "Đọc số proton", de: "Bằng số thứ tự ô và bằng số electron.", vd: "Ô 13 → 13 proton, 13 electron." },
        { so: 2, ten: "Xếp electron thành lớp", de: "2 – 8 – 8 từ trong ra ngoài.", vd: "13 electron → 2, 8, 3." },
        { so: 3, ten: "Đọc chu kì và nhóm", de: "Số lớp là chu kì, số electron lớp ngoài là nhóm.", vd: "3 lớp → chu kì 3; 3 electron ngoài → nhóm IIIA. Đó là aluminium." },
        { so: 4, ten: "Kết luận kim loại hay phi kim", de: "Kim loại nằm bên trái và giữa bảng (thường 1–3 electron ngoài cùng); phi kim bên phải (thường 5–7); khí hiếm ở cột cuối, nhóm VIIIA (8 electron, riêng He là 2).", vd: "Aluminium 3 electron ngoài → kim loại. Chlorine 7 electron ngoài → phi kim. Argon 8 → khí hiếm." },
      ],
      hop: { nhan: "Dễ nhầm", chu: "Chu kì là HÀNG, nhóm là CỘT. Nhớ: 'chu kì' như một vòng quay chạy ngang; 'nhóm' là những bạn xếp hàng dọc có tính chất giống nhau." },
    },
  ],
  doiChieu: [
    ["Nguyên tử trung hoà về điện", "Số proton bằng số electron"],
    ["Khối lượng nguyên tử (amu)", "Số proton + số neutron"],
    ["Nguyên tố hoá học", "Các nguyên tử có cùng số proton"],
    ["Số thứ tự ô", "Số proton = số electron"],
    ["Số thứ tự chu kì", "Số lớp electron"],
    ["Số thứ tự nhóm A", "Số electron lớp ngoài cùng"],
  ],
  meo: "Một số proton kéo theo tất cả: ô → electron → lớp (2, 8, 8) → chu kì và nhóm → kim loại hay phi kim. Gặp câu hỏi chương I, việc đầu tiên là tìm số proton.",
  tuKiemTra: [
    { q: "Nguyên tử có 16 proton và 16 neutron. Kim nói đủ: số electron, khối lượng, cách xếp lớp, ô, chu kì, nhóm, tên.", a: "16 electron; khối lượng khoảng 32 amu; xếp 2, 8, 6; ô 16; chu kì 3; nhóm VIA; sulfur, phi kim." },
    { q: "Vì sao hai nguyên tử khác số neutron vẫn là cùng một nguyên tố?", a: "Vì nguyên tố được định nghĩa bằng số proton. Neutron chỉ làm nguyên tử nặng nhẹ khác nhau." },
  ],
  luyen: {
    phut: 15,
    tieuDe: "Luyện 15 phút · Nguyên tử và bảng tuần hoàn",
    cau: [
      { loai: "tn", cd: "Cấu tạo nguyên tử", q: "Hạt nào nằm trong hạt nhân và mang điện dương?", a: ["Neutron", "Proton", "Electron", "Cả proton và electron"], dung: 1, gt: "Proton mang điện dương, nằm trong hạt nhân cùng neutron. Electron mang điện âm, ở vỏ." },
      { loai: "dien", cd: "p = e", q: "Nguyên tử có 9 proton thì có bao nhiêu electron? (ghi số)", dap: ["9", "9 electron", "chín"], goi: "Ví dụ: 5", gt: "Nguyên tử trung hoà điện nên số electron bằng số proton: 9." },
      { loai: "dien", cd: "Khối lượng nguyên tử", q: "Nguyên tử có 11 proton và 12 neutron. Khối lượng nguyên tử khoảng bao nhiêu amu? (ghi số)", dap: ["23", "23 amu", "23amu"], goi: "Ví dụ: 16", gt: "Khối lượng xấp xỉ p + n = 11 + 12 = 23 amu. Electron quá nhẹ, không tính." },
      { loai: "tn", cd: "Xếp lớp electron", q: "Nguyên tử có 13 electron. Số electron ở lớp ngoài cùng là:", a: ["8", "2", "3", "13"], dung: 2, gt: "Xếp 2, 8, 3 → lớp ngoài cùng có 3 electron. Đó là aluminium." },
      { loai: "tn", cd: "Nguyên tố", q: "Hai nguyên tử thuộc cùng một nguyên tố hoá học khi chúng có cùng:", a: ["Số neutron", "Khối lượng", "Số lớp electron", "Số proton"], dung: 3, gt: "Nguyên tố được xác định bằng số proton; neutron và khối lượng có thể khác." },
      { loai: "tn", cd: "Kí hiệu hoá học", q: "Kí hiệu nào viết đúng cho nguyên tố calcium?", a: ["CA", "Ca", "ca", "Cal"], dung: 1, gt: "Chữ đầu in hoa, chữ sau viết thường: Ca." },
      { loai: "tn", cd: "Bảng tuần hoàn", q: "Nguyên tố ở chu kì 3, nhóm IA có cấu tạo electron là:", a: ["2, 8, 1", "2, 1", "2, 8, 8, 1", "1, 8, 2"], dung: 0, gt: "Chu kì 3 → 3 lớp; nhóm IA → 1 electron ngoài cùng; vậy 2, 8, 1 (sodium, ô 11)." },
      { loai: "tn", cd: "Kim loại – phi kim", q: "Nguyên tử có 7 electron lớp ngoài cùng thường là:", a: ["Kim loại", "Khí hiếm", "Phi kim", "Không xác định được"], dung: 2, gt: "Phi kim thường có 5–7 electron ngoài cùng (ví dụ Cl: 2, 8, 7). Khí hiếm có 8, kim loại thường 1–3." },
    ],
  },
};

/* ===== Thứ Hai 02/11 · Bài 7: hoá trị và công thức hoá học ===== */
window.KIM_GIANG["on-khtn-1102"] = {
  mon: "khtn",
  ngay: "2026-11-02",
  tieuDe: "Mẹ giảng KHTN · Hoá trị là 'số tay' của nguyên tử, và vì sao lập công thức chỉ là bài toán bắt tay cho khớp",
  sgk: "KHTN 7, Bài 7 Hoá trị và công thức hoá học (khoảng tr. 40–44)",
  motCau: "Hoá trị là số liên kết mà một nguyên tử có thể tạo với nguyên tử khác, hình dung như số tay để bắt. H có 1 tay, O có 2 tay. Trong một phân tử, mọi tay đều phải được bắt hết, không tay nào thừa. Chỉ từ ý đó suy ra được quy tắc hoá trị, cách tìm hoá trị, cách lập công thức và cách kiểm tra công thức đúng sai.",
  phan: [
    {
      ten: "Hoá trị là gì, vì sao sách quy ước H là I và O là II",
      doan: [
        "Hãy tưởng tượng mỗi nguyên tử có một số 'tay'. Hydrogen chỉ có 1 tay, nên người ta lấy nó làm chuẩn: nguyên tử nào bắt được với 1 H thì hoá trị I, bắt được với 2 H thì hoá trị II, với 3 H thì hoá trị III. Nhìn HCl: Cl bắt 1 H → Cl hoá trị I. H₂O: O bắt 2 H → O hoá trị II. NH₃: N bắt 3 H → N hoá trị III. CH₄: C bắt 4 H → C hoá trị IV.",
        "Nhiều nguyên tố không bắt tay với H, nên người ta dùng thêm O làm chuẩn thứ hai: O có 2 tay. Na₂O: hai Na cùng bắt một O (2 tay), mỗi Na một tay → Na hoá trị I. CaO: một Ca bắt hết 2 tay của O → Ca hoá trị II. Al₂O₃: hai Al bắt ba O, tổng 6 tay, mỗi Al 3 tay → Al hoá trị III.",
      ],
      kn: [
        { ten: "Hoá trị viết bằng số La Mã", de: "I, II, III, IV… Không phải số đếm nguyên tử. Hoá trị là tính chất của nguyên tố; chỉ số (số nhỏ dưới chân) là số nguyên tử trong phân tử.", vd: "Trong H₂O: chỉ số của H là 2, hoá trị của H là I. Hai con số khác nhau." },
        { ten: "Một số nguyên tố có nhiều hoá trị", de: "Fe có thể II hoặc III, S có thể II, IV, VI. Trong một hợp chất cụ thể thì chỉ có một giá trị, tính từ nguyên tố còn lại.", vd: "FeO → Fe hoá trị II; Fe₂O₃ → Fe hoá trị III." },
      ],
      hop: { nhan: "Nhớ nhanh hoá trị hay dùng", chu: "Hoá trị I: H, Na, K, Cl (trong hợp chất với H và kim loại). Hoá trị II: O, Mg, Ca, Zn, Ba. Hoá trị III: Al. Cần gì thêm, tính từ H và O." },
    },
    {
      ten: "Quy tắc hoá trị: hai bên bắt tay phải khớp số tay",
      doan: [
        "Xét hợp chất AₓBᵧ, A có hoá trị a, B có hoá trị b. Bên A có x nguyên tử, mỗi nguyên tử a tay, tổng x·a tay. Bên B có y·b tay. Mọi tay phải bắt hết, nên x·a = y·b. Đó là quy tắc hoá trị, không có gì để học thuộc ngoài hình ảnh bắt tay.",
        "Kiểm tra với Al₂O₃: bên Al là 2 × III = 6, bên O là 3 × II = 6. Khớp. Với công thức sai như NaO: bên Na là 1 × I = 1, bên O là 1 × II = 2. Không khớp, nên NaO sai; phải là Na₂O.",
      ],
      buoc: [
        { so: 1, ten: "Tìm hoá trị chưa biết", de: "Viết x·a = y·b, thay số đã biết, giải ra hoá trị còn lại.", vd: "SO₂: 1·a = 2·II → a = IV. S trong SO₂ có hoá trị IV. P₂O₅: 2·a = 5·II = 10 → a = V." },
        { so: 2, ten: "Lập công thức khi biết hai hoá trị", de: "Lấy hoá trị của nguyên tố này làm chỉ số của nguyên tố kia (chéo nhau), rồi rút gọn nếu hai chỉ số cùng chia được.", vd: "Al (III) và O (II): chéo → Al₂O₃. Ca (II) và O (II): chéo → Ca₂O₂, rút gọn → CaO. C (IV) và O (II): C₂O₄ → CO₂." },
        { so: 3, ten: "Kiểm tra lại", de: "Nhân chỉ số với hoá trị hai bên, bằng nhau là xong.", vd: "CaCl₂: Ca 1 × II = 2; Cl 2 × I = 2. Đúng." },
      ],
      hop: { nhan: "Lỗi hay gặp nhất", chu: "Quên rút gọn: viết Mg₂O₂ thay vì MgO, C₂O₄ thay vì CO₂. Chỉ số của phân tử luôn là bộ số nhỏ nhất. Riêng những chất như H₂O₂ (nước oxy già) là trường hợp đặc biệt, lớp 7 chưa gặp." },
    },
    {
      ten: "Đọc công thức hoá học để lấy thông tin và tính phần trăm khối lượng",
      doan: [
        "Một công thức như CaCO₃ nói ba điều: chất tạo bởi ba nguyên tố Ca, C, O; mỗi phân tử có 1 Ca, 1 C, 3 O; khối lượng phân tử bằng 40 + 12 + 3 × 16 = 100 amu.",
        "Phần trăm khối lượng của một nguyên tố = (khối lượng của nguyên tố đó trong phân tử : khối lượng cả phân tử) × 100%. Với CaCO₃: %Ca = 40/100 = 40%; %C = 12/100 = 12%; %O = 48/100 = 48%. Ba số cộng lại đúng 100%, đó là cách tự kiểm tra.",
      ],
      kn: [
        { ten: "Tính khối lượng của nguyên tố trong phân tử", de: "Lấy khối lượng nguyên tử nhân với chỉ số.", vd: "Trong H₂O, khối lượng của H là 2 × 1 = 2, của O là 16; cả phân tử 18. %H = 2/18 ≈ 11,1%, %O ≈ 88,9%." },
        { ten: "Đơn chất cũng có công thức", de: "Khí hai nguyên tử: H₂, O₂, N₂, Cl₂. Kim loại và một số phi kim rắn viết bằng kí hiệu: Fe, Cu, S, C.", vd: "Viết 'khí oxygen' là O₂, không phải O." },
      ],
    },
  ],
  doiChieu: [
    ["Hoá trị", "Số liên kết (số 'tay') của một nguyên tử nguyên tố đó; H là I, O là II"],
    ["Quy tắc hoá trị cho AₓBᵧ", "x · a = y · b"],
    ["Lập công thức", "Chéo hoá trị thành chỉ số, rồi rút gọn"],
    ["Chỉ số", "Số nguyên tử của nguyên tố trong một phân tử (số nhỏ dưới chân)"],
    ["Khối lượng phân tử", "Tổng khối lượng các nguyên tử trong phân tử (amu)"],
    ["% khối lượng nguyên tố", "(khối lượng nguyên tố trong phân tử : khối lượng phân tử) × 100%"],
  ],
  meo: "Hoá trị là số tay. Hai bên bắt tay phải khớp: chỉ số nhân hoá trị bên này bằng bên kia. Lập công thức thì chéo rồi rút gọn. Tính % thì chia cho cả phân tử và kiểm tra tổng bằng 100%.",
  tuKiemTra: [
    { q: "Kim giải thích cho mẹ bằng hình ảnh bắt tay: vì sao công thức của nước là H₂O mà không phải HO?", a: "O có 2 tay, H chỉ có 1 tay. Một H không bắt hết 2 tay của O, phải cần hai H. Kiểm tra: 2 × I = 1 × II." },
    { q: "Lập công thức hợp chất của Fe (III) với Cl (I) và tính khối lượng phân tử (Fe = 56, Cl = 35,5).", a: "Chéo: FeCl₃. Khối lượng: 56 + 3 × 35,5 = 162,5 amu." },
  ],
  luyen: {
    phut: 15,
    tieuDe: "Luyện 15 phút · Hoá trị và công thức hoá học",
    cau: [
      { loai: "tn", cd: "Hoá trị từ H", q: "Trong phân tử CH₄, carbon có hoá trị:", a: ["I", "II", "IV", "III"], dung: 2, gt: "C bắt tay với 4 H, mỗi H một tay → C hoá trị IV." },
      { loai: "dien", cd: "Hoá trị từ O", q: "Trong P₂O₅, phosphorus có hoá trị mấy? (ghi số La Mã hoặc số thường)", dap: ["V", "5", "v"], goi: "Ví dụ: III", gt: "2 · a = 5 · II = 10 → a = V." },
      { loai: "tn", cd: "Quy tắc hoá trị", q: "Công thức nào viết đúng quy tắc hoá trị, biết K hoá trị I, O hoá trị II?", a: ["KO", "K₂O", "KO₂", "K₂O₂"], dung: 1, gt: "K₂O: 2 × I = 1 × II. Các công thức kia hai vế không bằng nhau hoặc chưa rút gọn." },
      { loai: "dien", cd: "Lập công thức", q: "Lập công thức hợp chất của Al (III) với O (II). Ghi dạng Al2O3 (số thường, không cần chỉ số nhỏ).", dap: ["Al2O3", "Al₂O₃", "al2o3", "AL2O3"], goi: "Ví dụ: MgO", gt: "Chéo hoá trị: Al lấy chỉ số 2, O lấy chỉ số 3 → Al₂O₃. Kiểm tra: 2 × III = 3 × II = 6." },
      { loai: "dien", cd: "Lập công thức, rút gọn", q: "Lập công thức hợp chất của Mg (II) với O (II). Ghi dạng chữ thường như MgO.", dap: ["MgO", "mgo", "MGO"], goi: "Ví dụ: CaO", gt: "Chéo được Mg₂O₂, hai chỉ số cùng chia 2 → MgO." },
      { loai: "tn", cd: "Chỉ số và hoá trị", q: "Trong H₂O, số 2 nhỏ dưới chân H cho biết:", a: ["H có hoá trị II", "Phân tử có 2 nguyên tử H", "Có 2 phân tử nước", "O có hoá trị II"], dung: 1, gt: "Chỉ số là số nguyên tử trong phân tử. Hoá trị của H vẫn là I." },
      { loai: "tn", cd: "Khối lượng phân tử", q: "Khối lượng phân tử của H₂SO₄ (H = 1, S = 32, O = 16) là:", a: ["49 amu", "82 amu", "98 amu", "114 amu"], dung: 2, gt: "2 × 1 + 32 + 4 × 16 = 2 + 32 + 64 = 98 amu." },
      { loai: "tn", cd: "Phần trăm khối lượng", q: "Phần trăm khối lượng của Ca trong CaCO₃ (Ca = 40, C = 12, O = 16) là:", a: ["40%", "12%", "48%", "60%"], dung: 0, gt: "Khối lượng phân tử 100 amu; Ca chiếm 40/100 = 40%. C chiếm 12%, O chiếm 48%; tổng 100%." },
    ],
  },
};

/* ===== Thứ Tư 04/11 · Ôn chương II trước kiểm tra: phân tử, đơn chất – hợp chất, liên kết ===== */
window.KIM_GIANG["on-khtn-1104"] = {
  mon: "khtn",
  ngay: "2026-11-04",
  tieuDe: "Ôn KHTN trước kiểm tra · Đơn chất hay hợp chất, liên kết ion hay cộng hoá trị: hai câu hỏi, mỗi câu một cách nhìn",
  sgk: "KHTN 7, Bài 5 và Bài 6 (tr. 32–39)",
  motCau: "Đề giữa kì gần như chắc chắn có hai kiểu câu: phân loại đơn chất – hợp chất và nhận ra loại liên kết. Câu thứ nhất chỉ cần đếm số nguyên tố trong công thức. Câu thứ hai chỉ cần hỏi: có kim loại tham gia không? Có thì ion, toàn phi kim thì cộng hoá trị. Phần còn lại là hiểu vì sao các nguyên tử lại muốn liên kết.",
  phan: [
    {
      ten: "Phân tử, đơn chất, hợp chất: đếm nguyên tố là xong",
      doan: [
        "Phân tử là hạt đại diện cho chất, gồm một số nguyên tử liên kết với nhau; phân tử nào cũng có đủ tính chất hoá học của chất đó. Đơn chất là chất chỉ gồm một nguyên tố: O₂, N₂, H₂ (phân tử hai nguyên tử), Fe, Cu, Al (kim loại, viết bằng kí hiệu). Hợp chất là chất gồm từ hai nguyên tố trở lên: H₂O, CO₂, NaCl, CaCO₃.",
        "Lưu ý một bẫy: O₂ và O₃ (ozone) đều là đơn chất của oxygen, dù phân tử có 2 hay 3 nguyên tử. Số nguyên tử không quyết định, số nguyên tố mới quyết định.",
      ],
      kn: [
        { ten: "Khối lượng phân tử", de: "Cộng khối lượng các nguyên tử trong phân tử, đơn vị amu.", vd: "O₂ = 32; CO₂ = 44; NaCl = 23 + 35,5 = 58,5; CaCO₃ = 100." },
        { ten: "Phân tử của đơn chất kim loại", de: "Kim loại ở thể rắn gồm rất nhiều nguyên tử xếp sát nhau, không tách thành từng phân tử nhỏ, nên công thức chỉ ghi kí hiệu: Fe, Cu.", vd: "Đề hỏi 'phân tử sắt gồm mấy nguyên tử' là câu không hợp lí; chỉ nói nguyên tử sắt." },
      ],
    },
    {
      ten: "Vì sao nguyên tử muốn liên kết: ai cũng muốn giống khí hiếm",
      doan: [
        "Khí hiếm (He, Ne, Ar) rất bền, hầu như không phản ứng với gì, vì lớp electron ngoài cùng của chúng đã đầy: 8 electron (riêng He là 2). Các nguyên tử khác không bền bằng, nên khi gặp nhau chúng tìm cách cho lớp ngoài cùng cũng có 8 electron như khí hiếm. Có hai cách làm việc đó, và đó chính là hai loại liên kết.",
      ],
      kn: [
        { ten: "Cách 1 · Liên kết ion: một bên cho hẳn, một bên nhận hẳn", de: "Kim loại có ít electron ngoài cùng (1–3) thì cho đi cho nhẹ, thành ion dương. Phi kim có nhiều (5–7) thì nhận thêm cho đủ 8, thành ion âm. Ion dương và ion âm hút nhau tạo thành chất.", vd: "Na (2, 8, 1) cho 1 electron → Na⁺ (2, 8). Cl (2, 8, 7) nhận 1 electron → Cl⁻ (2, 8, 8). Na⁺ và Cl⁻ hút nhau thành muối ăn NaCl." },
        { ten: "Cách 2 · Liên kết cộng hoá trị: góp chung", de: "Hai phi kim đều muốn nhận thêm, không ai chịu cho, nên góp chung electron; cặp electron chung được tính cho cả hai bên.", vd: "Hai H góp chung một cặp electron thành H₂, mỗi H coi như có 2 electron giống He. Trong H₂O, O góp chung với hai H để O đủ 8, mỗi H đủ 2." },
      ],
      hop: { nhan: "Cách nhận ra nhanh trong đề", chu: "Nhìn công thức: có kim loại + phi kim (NaCl, MgO, KCl, CaO) → liên kết ion. Chỉ toàn phi kim (H₂, O₂, H₂O, CO₂, NH₃, CH₄) → liên kết cộng hoá trị. Nhớ kim loại là các nguyên tố bên trái bảng tuần hoàn: Na, K, Mg, Ca, Al, Fe, Cu." },
    },
    {
      ten: "Tính chất khác nhau của hai loại chất, và vì sao",
      doan: [
        "Chất ion được giữ bằng lực hút giữa các ion trái dấu, lực này mạnh, nên chất ion thường ở thể rắn ở nhiệt độ thường, nóng chảy và sôi ở nhiệt độ cao, khi tan trong nước thì dẫn điện (vì các ion tách ra chuyển động tự do). Ví dụ: muối ăn.",
        "Chất cộng hoá trị gồm các phân tử riêng rẽ hút nhau yếu, nên có thể ở thể rắn, lỏng hoặc khí, thường nóng chảy và sôi ở nhiệt độ thấp, nhiều chất không dẫn điện. Ví dụ: nước, đường, khí carbon dioxide.",
      ],
      hop: { nhan: "Câu mẹ hay hỏi", chu: "Vì sao nước muối dẫn điện mà nước đường thì không? Muối là chất ion, tan ra thành Na⁺ và Cl⁻ mang điện di chuyển được. Đường là chất cộng hoá trị, tan ra vẫn là từng phân tử không mang điện." },
    },
  ],
  doiChieu: [
    ["Đơn chất", "Chất tạo bởi một nguyên tố (O₂, Fe)"],
    ["Hợp chất", "Chất tạo bởi hai nguyên tố trở lên (H₂O, NaCl)"],
    ["Lớp electron ngoài cùng bền", "8 electron (He: 2), như khí hiếm"],
    ["Liên kết ion", "Kim loại cho electron thành ion dương, phi kim nhận thành ion âm, hai ion hút nhau"],
    ["Liên kết cộng hoá trị", "Các phi kim góp chung electron"],
    ["Chất ion", "Thường rắn, nóng chảy cao, tan trong nước dẫn điện"],
  ],
  meo: "Đếm nguyên tố: một là đơn chất, từ hai là hợp chất. Tìm kim loại: có kim loại là ion, toàn phi kim là cộng hoá trị. Lí do sâu xa của cả hai loại liên kết: ai cũng muốn lớp ngoài có 8 electron như khí hiếm.",
  tuKiemTra: [
    { q: "Xếp các chất sau vào hai cột đơn chất / hợp chất và ghi loại liên kết của hợp chất: Cl₂, MgO, H₂O, Cu, NH₃, KCl.", a: "Đơn chất: Cl₂, Cu. Hợp chất: MgO (ion), H₂O (cộng hoá trị), NH₃ (cộng hoá trị), KCl (ion)." },
    { q: "Kim kể cho mẹ bằng lời chuyện Na gặp Cl.", a: "Na có 1 electron ngoài cùng, cho Cl; Na thành Na⁺ có lớp ngoài 8 electron. Cl có 7, nhận thêm 1 thành Cl⁻ đủ 8. Hai ion trái dấu hút nhau thành NaCl." },
  ],
  luyen: {
    phut: 15,
    tieuDe: "Luyện 15 phút · Phân tử và liên kết hoá học",
    cau: [
      { loai: "tn", cd: "Đơn chất – hợp chất", q: "Chất nào là đơn chất?", a: ["CO₂", "N₂", "NaCl", "H₂O"], dung: 1, gt: "N₂ chỉ gồm một nguyên tố nitrogen. Ba chất kia có từ hai nguyên tố trở lên." },
      { loai: "tn", cd: "Đơn chất – hợp chất", q: "Dãy nào gồm toàn hợp chất?", a: ["O₂, O₃, Fe", "H₂O, Cu, Cl₂", "CO₂, CaCO₃, NH₃", "N₂, H₂, Al"], dung: 2, gt: "CO₂, CaCO₃, NH₃ đều có từ hai nguyên tố. O₂ và O₃ đều là đơn chất của oxygen." },
      { loai: "dien", cd: "Khối lượng phân tử", q: "Khối lượng phân tử của NaCl (Na = 23, Cl = 35,5) là bao nhiêu amu? (ghi số, dùng dấu phẩy)", dap: ["58,5", "58.5", "58,5 amu", "58.5 amu"], goi: "Ví dụ: 18", gt: "23 + 35,5 = 58,5 amu." },
      { loai: "tn", cd: "Khí hiếm", q: "Vì sao khí hiếm hầu như không tham gia liên kết hoá học?", a: ["Vì chúng là chất khí", "Vì lớp electron ngoài cùng đã đầy (8 electron, He là 2)", "Vì chúng rất nhẹ", "Vì chúng không có electron"], dung: 1, gt: "Lớp ngoài cùng đủ 8 electron là cấu trúc bền; các nguyên tử khác liên kết để đạt được cấu trúc này." },
      { loai: "tn", cd: "Liên kết ion", q: "Khi tạo thành NaCl, nguyên tử Na:", a: ["Nhường 1 electron, trở thành ion dương Na⁺", "Nhận 1 electron, trở thành ion âm", "Góp chung 1 electron với Cl", "Không thay đổi"], dung: 0, gt: "Na có 1 electron ngoài cùng, nhường đi để lớp ngoài còn lại là 8; thành Na⁺." },
      { loai: "tn", cd: "Nhận loại liên kết", q: "Chất nào có liên kết cộng hoá trị?", a: ["MgO", "KCl", "CaO", "CO₂"], dung: 3, gt: "CO₂ chỉ gồm phi kim (C, O) nên góp chung electron. Ba chất kia có kim loại + phi kim → ion." },
      { loai: "tn", cd: "Nhận loại liên kết", q: "Chất nào có liên kết ion?", a: ["H₂", "NH₃", "MgO", "CH₄"], dung: 2, gt: "Mg là kim loại, O là phi kim → liên kết ion. H₂, NH₃, CH₄ toàn phi kim." },
      { loai: "tn", cd: "Tính chất", q: "Dung dịch nào dẫn điện?", a: ["Nước đường", "Nước muối", "Nước cất", "Cồn"], dung: 1, gt: "Muối là chất ion, tan thành Na⁺ và Cl⁻ di chuyển tự do nên dẫn điện. Đường, cồn là chất cộng hoá trị." },
    ],
  },
};

/* ===== Thứ Sáu 06/11 · Bài 8: tốc độ chuyển động ===== */
window.KIM_GIANG["on-khtn-1106"] = {
  mon: "khtn",
  ngay: "2026-11-06",
  tieuDe: "Mẹ giảng KHTN · Tốc độ là quãng đường đi được trong một đơn vị thời gian, và vì sao 1 m/s lại bằng 3,6 km/h",
  sgk: "KHTN 7, Bài 8 Tốc độ chuyển động (khoảng tr. 45–47)",
  motCau: "Nói 'xe đi nhanh' là chưa đủ, phải nói nhanh bao nhiêu. Tốc độ trả lời câu đó: trong mỗi giây (hoặc mỗi giờ) vật đi được bao nhiêu mét (hoặc km). Công thức v = s/t chỉ là cách viết gọn của câu ấy. Toàn bộ bài là tính một trong ba đại lượng khi biết hai cái kia, và đổi đơn vị cho đúng.",
  phan: [
    {
      ten: "Tốc độ nghĩa là gì, vì sao phải chia",
      doan: [
        "Kim chạy 100 m hết 25 s, bạn Lan chạy 60 m hết 12 s. Ai nhanh hơn? Không so được ngay vì quãng đường khác, thời gian khác. Cách công bằng là hỏi: mỗi giây mỗi người đi được bao nhiêu mét. Kim: 100 : 25 = 4 m mỗi giây. Lan: 60 : 12 = 5 m mỗi giây. Lan nhanh hơn.",
        "Con số 'mét đi được trong mỗi giây' chính là tốc độ, kí hiệu v. Viết thành công thức: v = s : t, với s là quãng đường, t là thời gian. Từ đó suy ra s = v · t và t = s : v. Kim nên nhớ bằng tam giác: s ở trên, v và t ở dưới; che đại lượng cần tìm thì thấy ngay phép tính.",
      ],
      kn: [
        { ten: "Tính tốc độ", de: "Quãng đường chia thời gian.", vd: "Ô tô đi 120 km trong 2 giờ: v = 120 : 2 = 60 km/h." },
        { ten: "Tính quãng đường", de: "Tốc độ nhân thời gian.", vd: "Đi bộ 1,2 m/s trong 50 s: s = 1,2 × 50 = 60 m." },
        { ten: "Tính thời gian", de: "Quãng đường chia tốc độ.", vd: "Đi 18 km với tốc độ 12 km/h: t = 18 : 12 = 1,5 h = 1 giờ 30 phút." },
      ],
      hop: { nhan: "Lỗi số 1", chu: "Thời gian phải cùng hệ đơn vị với tốc độ. Tốc độ km/h thì thời gian tính bằng giờ: 30 phút = 0,5 h, 15 phút = 0,25 h, 45 phút = 0,75 h. Không được viết 30 phút = 0,3 h." },
    },
    {
      ten: "Hai đơn vị m/s và km/h, vì sao đổi bằng 3,6",
      doan: [
        "1 m/s nghĩa là mỗi giây đi 1 m. Một giờ có 3600 giây, nên một giờ đi 3600 m = 3,6 km. Vậy 1 m/s = 3,6 km/h. Đổi m/s sang km/h thì nhân 3,6; đổi km/h sang m/s thì chia 3,6.",
        "Vài mốc để cảm nhận: người đi bộ khoảng 1,5 m/s (5 km/h); xe đạp 4–5 m/s (15–18 km/h); xe máy trong phố 40 km/h ≈ 11 m/s; ô tô trên cao tốc 100 km/h ≈ 28 m/s. Gặp kết quả 'người đi bộ 50 m/s' là biết ngay tính sai.",
      ],
      kn: [
        { ten: "m/s → km/h", de: "Nhân 3,6.", vd: "15 m/s = 54 km/h; 20 m/s = 72 km/h." },
        { ten: "km/h → m/s", de: "Chia 3,6.", vd: "36 km/h = 10 m/s; 90 km/h = 25 m/s." },
      ],
      hop: { nhan: "Không nhớ 3,6 thì làm sao?", chu: "Tự suy lại: 36 km/h = 36 000 m / 3600 s = 10 m/s. Nhớ cặp '36 km/h = 10 m/s' là suy ra hết." },
    },
    {
      ten: "Dạng bài có lời văn: đọc xong gạch ba thứ",
      doan: [
        "Đọc đề, gạch chân s, v, t: cái nào đã cho, cái nào phải tìm. Đổi đơn vị cho khớp trước khi tính. Viết công thức, thay số, ghi đơn vị ở kết quả.",
        "Ví dụ: Một bạn đạp xe từ nhà đến trường dài 3 km hết 15 phút. Tính tốc độ ra km/h và m/s. Gạch: s = 3 km, t = 15 phút = 0,25 h, tìm v. v = 3 : 0,25 = 12 km/h. Đổi: 12 : 3,6 ≈ 3,3 m/s.",
      ],
    },
  ],
  doiChieu: [
    ["Tốc độ", "Quãng đường đi được trong một đơn vị thời gian"],
    ["v = s/t", "Tốc độ = quãng đường : thời gian"],
    ["s = v · t", "Quãng đường = tốc độ × thời gian"],
    ["t = s/v", "Thời gian = quãng đường : tốc độ"],
    ["1 m/s", "3,6 km/h"],
  ],
  meo: "Tam giác s trên, v và t dưới. Đơn vị thời gian phải khớp với tốc độ. Đổi đơn vị: m/s nhân 3,6 ra km/h. Kết quả phải hợp lí với đời thường.",
  tuKiemTra: [
    { q: "Tàu hoả đi 180 km trong 2 giờ 30 phút. Tốc độ là bao nhiêu km/h và m/s?", a: "t = 2,5 h; v = 180 : 2,5 = 72 km/h = 20 m/s." },
    { q: "Kim giải thích cho mẹ vì sao 1 m/s = 3,6 km/h.", a: "Mỗi giây đi 1 m thì một giờ (3600 giây) đi 3600 m, tức 3,6 km." },
  ],
  luyen: {
    phut: 15,
    tieuDe: "Luyện 15 phút · Tốc độ",
    cau: [
      { loai: "tn", cd: "Ý nghĩa tốc độ", q: "Tốc độ 5 m/s có nghĩa là:", a: ["Vật đi được 5 m", "Mỗi giây vật đi được 5 m", "Vật đi trong 5 giây", "Mỗi mét vật mất 5 giây"], dung: 1, gt: "Tốc độ là quãng đường đi được trong một đơn vị thời gian." },
      { loai: "dien", cd: "Tính tốc độ", q: "Một bạn chạy 80 m hết 16 s. Tốc độ bằng bao nhiêu m/s? (ghi số)", dap: ["5", "5 m/s", "5m/s"], goi: "Ví dụ: 4", gt: "v = 80 : 16 = 5 m/s." },
      { loai: "tn", cd: "Đổi đơn vị", q: "54 km/h bằng:", a: ["5,4 m/s", "15 m/s", "150 m/s", "194,4 m/s"], dung: 1, gt: "54 : 3,6 = 15 m/s." },
      { loai: "dien", cd: "Đổi đơn vị", q: "25 m/s bằng bao nhiêu km/h? (ghi số)", dap: ["90", "90 km/h", "90km/h"], goi: "Ví dụ: 36", gt: "25 × 3,6 = 90 km/h." },
      { loai: "tn", cd: "Đơn vị thời gian", q: "Ô tô đi với tốc độ 48 km/h trong 45 phút. Quãng đường là:", a: ["2160 km", "21,6 km", "36 km", "64 km"], dung: 2, gt: "45 phút = 0,75 h; s = 48 × 0,75 = 36 km. Nếu lấy 45 × 48 là quên đổi phút ra giờ." },
      { loai: "tn", cd: "Tính thời gian", q: "Xe đạp đi 9 km với tốc độ 12 km/h mất:", a: ["45 phút", "1 giờ 20 phút", "0,75 giây", "108 phút"], dung: 0, gt: "t = 9 : 12 = 0,75 h = 45 phút." },
      { loai: "tn", cd: "So sánh tốc độ", q: "Vật A đi 200 m trong 40 s. Vật B có tốc độ 20 km/h. Vật nào nhanh hơn?", a: ["A", "B", "Bằng nhau", "Không so sánh được"], dung: 1, gt: "vA = 5 m/s = 18 km/h; vB = 20 km/h → B nhanh hơn. Phải đưa về cùng đơn vị rồi mới so." },
      { loai: "tn", cd: "Hợp lí", q: "Kết quả nào KHÔNG hợp lí?", a: ["Người đi bộ 1,4 m/s", "Xe đạp 15 km/h", "Người đi bộ 50 m/s", "Ô tô 25 m/s"], dung: 2, gt: "50 m/s = 180 km/h, không ai đi bộ nhanh thế; chắc chắn tính sai đơn vị." },
    ],
  },
};
