/* ÔN HÌNH THEO NGÀY · 29/09 → 03/10/2026 — chương III từ đầu năm đến hết hai đường thẳng song song
   Bài 8 (kề bù, đối đỉnh, tia phân giác) · Bài 9 (cặp góc, dấu hiệu nhận biết) · Bài 10 (tiên đề Euclid, tính chất)
   Cùng khuôn KIM_GIANG với giang-van-on.js: mỗi bài có ngay (hiện ở trang chủ mục "Hôm nay mẹ giảng"), phần giảng đặt thành
   câu hỏi "vì sao", và trường luyen (bài luyện có chấm, kết quả sang Góc của mẹ). Điểm mới: trường hinh (chuỗi SVG) trong
   mỗi phần giảng và trong từng câu luyện; app.js từ 29/09 (bản có hỗ trợ hinh) chèn nguyên chuỗi này.
   Nạp bằng 1 dòng <script src="giang-toan-on.js"></script> trong index.html, sau giang-anh-on.js. */
/* ===== Bộ vẽ hình nhỏ (SVG) dùng cho các bài Ôn Hình =====
   Toạ độ tính theo màn hình (y hướng xuống) nhưng GÓC tính theo toán học (0° là bên phải, quay ngược chiều kim đồng hồ).
   Mọi hàm trả về chuỗi SVG; app.js chèn nguyên chuỗi này qua trường hinh. */
const HV = (() => {
  const rad = (d) => (d * Math.PI) / 180;
  const px = (cx, r, a) => cx + r * Math.cos(rad(a));
  const py = (cy, r, a) => cy - r * Math.sin(rad(a));
  const MAU = "#3a2f26", DO = "#d9463b", XANH = "#1d6fa5", LUC = "#2e8b57";
  const svg = (w, h, inner) => `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:${w}px;display:block;margin:0 auto;font-family:inherit">${inner}</svg>`;
  const ln = (x1, y1, x2, y2, o = {}) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${o.c || MAU}" stroke-width="${o.w || 2}" stroke-linecap="round"${o.dash ? ' stroke-dasharray="6 5"' : ""}/>`;
  const tx = (x, y, s, o = {}) => `<text x="${x}" y="${y}" font-size="${o.fs || 14}" font-weight="${o.fw || 700}" fill="${o.c || MAU}" text-anchor="${o.an || "middle"}" dominant-baseline="middle">${s}</text>`;
  const dot = (x, y, o = {}) => `<circle cx="${x}" cy="${y}" r="${o.r || 3.2}" fill="${o.c || MAU}"/>`;
  /* tia từ (cx,cy) theo góc a, dài len, tên ở đầu tia */
  const tia = (cx, cy, a, len, ten, o = {}) => ln(cx, cy, px(cx, len, a), py(cy, len, a), o) + (ten ? tx(px(cx, len + 13, a), py(cy, len + 13, a), ten, { fs: o.fs || 14, c: o.c }) : "");
  /* đường thẳng qua (cx,cy) theo góc a, hai đầu tên t1 (phía a) và t2 (phía đối) */
  const dt = (cx, cy, a, len, t1, t2, o = {}) => tia(cx, cy, a, len, t1, o) + tia(cx, cy, a + 180, len, t2, o);
  /* cung góc từ a1 quay ngược chiều kim đồng hồ đến a2, có nhãn ở giữa cung */
  function cung(cx, cy, r, a1, a2, o = {}) {
    let sw = a2 - a1; while (sw < 0) sw += 360; while (sw >= 360) sw -= 360;
    const large = sw > 180 ? 1 : 0;
    let s = `<path d="M ${px(cx, r, a1)} ${py(cy, r, a1)} A ${r} ${r} 0 ${large} 0 ${px(cx, r, a2)} ${py(cy, r, a2)}" fill="${o.fill || "none"}" stroke="${o.c || DO}" stroke-width="${o.w || 1.8}"/>`;
    if (o.nhan) { const am = a1 + sw / 2, lr = r + (o.lr || 13); s += tx(px(cx, lr, am), py(cy, lr, am), o.nhan, { fs: o.fs || 12, c: o.c || DO }); }
    return s;
  }
  /* kí hiệu góc vuông tại (cx,cy) giữa hai hướng a và a+90 (hoặc a và b) */
  function vuong(cx, cy, a, b, o = {}) {
    b = b == null ? a + 90 : b; const d = o.d || 9;
    const p1 = [px(cx, d, a), py(cy, d, a)], p2 = [px(cx, d, b), py(cy, d, b)];
    const am = (a + b) / 2, dm = d * Math.SQRT2; const p3 = [px(cx, dm, am), py(cy, dm, am)];
    return `<polyline points="${p1[0]},${p1[1]} ${p3[0]},${p3[1]} ${p2[0]},${p2[1]}" fill="none" stroke="${o.c || MAU}" stroke-width="1.6"/>`;
  }
  /* mũi tên nhỏ trên đường (đánh dấu song song) tại (x,y) hướng a */
  const muiTen = (x, y, a, o = {}) => `<polyline points="${px(x, 7, a + 150)},${py(y, 7, a + 150)} ${x},${y} ${px(x, 7, a - 150)},${py(y, 7, a - 150)}" fill="none" stroke="${o.c || MAU}" stroke-width="2"/>`;
  const sub = (a, b) => `${a}<tspan font-size="10" baseline-shift="sub">${b}</tspan>`;

  /* ---------- các hình dùng nhiều lần ---------- */
  /* Hai đường thẳng xx' và yy' cắt nhau tại O. nhan: {xy, yx2, x2y2, y2x} là nhãn 4 góc (theo thứ tự quay ngược chiều kim đồng hồ từ Ox) */
  function haiDuongCat(nh = {}, o = {}) {
    const cx = 160, cy = 100, ay = o.ay || 50, r = o.r || 24;
    let s = dt(cx, cy, 0, 135, "x", "x'") + dt(cx, cy, ay, 112, "y", "y'") + dot(cx, cy) + tx(cx + 12, cy + 13, "O", { fs: 13 });
    if (nh.xy) s += cung(cx, cy, r + 8, 0, ay, { nhan: nh.xy, c: nh.cxy || DO, lr: 16 });
    if (nh.yx2) s += cung(cx, cy, r, ay, 180, { nhan: nh.yx2, c: nh.cyx2 || XANH, lr: 14 });
    if (nh.x2y2) s += cung(cx, cy, r + 8, 180, 180 + ay, { nhan: nh.x2y2, c: nh.cx2y2 || DO, lr: 16 });
    if (nh.y2x) s += cung(cx, cy, r, 180 + ay, 360, { nhan: nh.y2x, c: nh.cy2x || XANH, lr: 14 });
    return svg(320, 200, s);
  }
  /* Góc kề bù: Ox, Ox' đối nhau, tia Oy */
  function keBu(nh = {}, o = {}) {
    const cx = 160, cy = 130, ay = o.ay || 55;
    let s = dt(cx, cy, 0, 135, "x", "x'") + tia(cx, cy, ay, 110, "y") + dot(cx, cy) + tx(cx, cy + 16, "O");
    if (nh.xy) s += cung(cx, cy, 24, 0, ay, { nhan: nh.xy });
    if (nh.yx2) s += cung(cx, cy, 30, ay, 180, { nhan: nh.yx2, c: XANH });
    return svg(320, 165, s);
  }
  /* Ba tia chung gốc: Ox, Oy, Oz với các góc a1 (xOy) và a2 (yOz); tuỳ chọn thêm tia thứ tư */
  function baTia(a1, a2, nh = {}, o = {}) {
    const cx = 90, cy = 150, L = 125;
    let s = tia(cx, cy, 0, L, "x") + tia(cx, cy, a1, L, "y") + tia(cx, cy, a1 + a2, L, "z") + dot(cx, cy) + tx(cx - 12, cy + 10, "O");
    if (o.tiaT) s += tia(cx, cy, o.tiaT, L, o.tenT || "t", { dash: o.dashT });
    if (nh.xy) s += cung(cx, cy, 26, 0, a1, { nhan: nh.xy });
    if (nh.yz) s += cung(cx, cy, 34, a1, a1 + a2, { nhan: nh.yz, c: XANH });
    if (nh.xz) s += cung(cx, cy, 44, 0, a1 + a2, { nhan: nh.xz, c: LUC, lr: 16 });
    return svg(240, 170, s);
  }
  /* Góc xOy = a với tia phân giác Oz */
  function phanGiac(a, nh = {}, o = {}) {
    const cx = 70, cy = 150, L = 130;
    let s = tia(cx, cy, 0, L, "x") + tia(cx, cy, a, L, "y") + tia(cx, cy, a / 2, L, o.tenZ || "z", { c: DO }) + dot(cx, cy) + tx(cx - 12, cy + 10, "O");
    if (nh.xz) s += cung(cx, cy, 30, 0, a / 2, { nhan: nh.xz, lr: 15 });
    if (nh.zy) s += cung(cx, cy, 48, a / 2, a, { nhan: nh.zy, c: XANH, lr: 15 });
    if (nh.xy) s += cung(cx, cy, 72, 0, a, { c: LUC }) + tx(px(cx, 88, a * 0.78), py(cy, 88, a * 0.78), nh.xy, { fs: 12, c: LUC });
    return svg(240, 170, s);
  }
  /* xOy và yOz kề bù (Ox, Oz đối nhau), Om phân giác xOy, On phân giác yOz */
  function haiPhanGiac(ay, nh = {}) {
    const cx = 160, cy = 140, L = 120;
    let s = dt(cx, cy, 0, 140, "x", "z") + tia(cx, cy, ay, L, "y") + tia(cx, cy, ay / 2, L, "m", { c: DO }) + tia(cx, cy, 90 + ay / 2, L, "n", { c: XANH }) + dot(cx, cy) + tx(cx, cy + 16, "O");
    if (nh.xm) s += cung(cx, cy, 26, 0, ay / 2, { nhan: nh.xm });
    if (nh.my) s += cung(cx, cy, 34, ay / 2, ay, { nhan: nh.my });
    if (nh.yn) s += cung(cx, cy, 42, ay, 90 + ay / 2, { nhan: nh.yn, c: XANH });
    if (nh.nz) s += cung(cx, cy, 50, 90 + ay / 2, 180, { nhan: nh.nz, c: XANH });
    if (nh.mn) s += cung(cx, cy, 60, ay / 2, 90 + ay / 2, { nhan: nh.mn, c: LUC, lr: 15 });
    return svg(320, 180, s);
  }
  /* Đường thẳng c cắt a tại A, b tại B. Tám góc đánh số: tại mỗi đỉnh 1 = trên phải, 2 = trên trái, 3 = dưới trái, 4 = dưới phải.
     o.so: true đánh số cả 8 góc; o.nhanA / o.nhanB: {1:..,2:..,3:..,4:..} nhãn riêng; o.ss: true vẽ mũi tên song song; o.to: mảng ["A1","B3"] tô màu */
  function catTuyen(o = {}) {
    const A = [125, 62], B = [195, 142]; /* hướng c đi xuống phải: vector (70,80) */
    const angC = -Math.atan2(80, 70) * 180 / Math.PI; /* ≈ -48.8° (xuống phải) */
    let s = dt(A[0], A[1], 0, 120, "", "") + dt(B[0], B[1], 0, 120, "", "");
    s += tx(A[0] + 130, A[1], o.tenA || "a", { fs: 15 }) + tx(B[0] + 130, B[1], o.tenB || "b", { fs: 15 });
    s += ln(A[0] - 45, A[1] - 51, B[0] + 40, B[1] + 46) + tx(B[0] + 52, B[1] + 52, o.tenC || "c", { fs: 15 });
    s += dot(A[0], A[1]) + dot(B[0], B[1]);
    s += o.so ? tx(px(A[0], 40, 100), py(A[1], 40, 100), "A") + tx(px(B[0], 40, 280), py(B[1], 40, 280), "B") : tx(A[0] - 14, A[1] - 12, "A") + tx(B[0] + 14, B[1] + 12, "B");
    if (o.ss) s += muiTen(A[0] + 70, A[1], 0) + muiTen(B[0] + 70, B[1], 0);
    /* hướng các tia tại mỗi đỉnh: phải 0°, trái 180°, c lên-trái = 131.2°, c xuống-phải = -48.8° */
    const up = 180 + angC, down = angC; /* up ≈ 131.2, down ≈ -48.8 */
    const vung = { 1: [0, up], 2: [up, 180], 3: [180, 360 + down], 4: [360 + down, 360] };
    const veGoc = (P, k, nhan, mau, r, fill) => cung(P[0], P[1], r, vung[k][0], vung[k][1], { nhan, c: mau, lr: o.so ? 19 : 13, fill, fs: 12 });
    const nhanA = o.nhanA || {}, nhanB = o.nhanB || {};
    const to = o.to || [];
    [1, 2, 3, 4].forEach((k) => {
      const tA = to.indexOf("A" + k) > -1, tB = to.indexOf("B" + k) > -1;
      const lA = nhanA[k] != null ? nhanA[k] : (o.so ? sub("A", k) : null);
      const lB = nhanB[k] != null ? nhanB[k] : (o.so ? sub("B", k) : null);
      if (lA != null || tA) s += veGoc(A, k, lA, tA ? DO : MAU, o.so ? 15 : 18, tA ? "rgba(217,70,59,.18)" : "none");
      if (lB != null || tB) s += veGoc(B, k, lB, tB ? XANH : MAU, o.so ? 15 : 18, tB ? "rgba(29,111,165,.18)" : "none");
    });
    return svg(320, 205, s);
  }
  /* a ⊥ c tại A, b ⊥ c tại B (c thẳng đứng) */
  function cungVuongGoc(o = {}) {
    const x = 150, yA = 60, yB = 140;
    let s = ln(x, 15, x, 190) + tx(x, 200, o.tenC || "c", { fs: 15 }) + ln(40, yA, 280, yA) + ln(40, yB, 280, yB) + tx(295, yA, o.tenA || "a", { fs: 15 }) + tx(295, yB, o.tenB || "b", { fs: 15 });
    s += dot(x, yA) + dot(x, yB) + tx(x - 12, yA - 12, "A") + tx(x - 12, yB - 12, "B") + vuong(x, yA, 0, 90) + vuong(x, yB, 0, 90);
    return svg(320, 205, s);
  }
  /* Tiên đề Euclid: điểm M ngoài đường thẳng a, đường b qua M */
  function euclid(o = {}) {
    let s = ln(30, 140, 290, 140) + tx(300, 140, "a", { fs: 15 }) + dot(160, 70) + tx(160, 52, "M");
    if (o.b) s += ln(30, 70, 290, 70, { c: XANH }) + tx(300, 70, "b", { fs: 15, c: XANH });
    if (o.b2) s += ln(40, 96, 280, 44, { c: DO, dash: true }) + tx(292, 40, "b'", { fs: 15, c: DO });
    return svg(320, 170, s);
  }
  /* Hình gấp khúc: Ax // Cy, đỉnh B ở giữa; góc A = a1, góc C = a2; tuỳ chọn đường phụ Bk */
  function gapKhuc(a1, a2, o = {}) {
    const A = [70, 50], B = [150, 110], C = [70, 170];
    let s = ln(A[0], A[1], A[0] + 200, A[1]) + tx(A[0] + 212, A[1], "x", { fs: 15 }) + ln(C[0], C[1], C[0] + 200, C[1]) + tx(C[0] + 212, C[1], "y", { fs: 15 });
    s += ln(A[0], A[1], B[0], B[1]) + ln(B[0], B[1], C[0], C[1]) + dot(A[0], A[1]) + dot(B[0], B[1]) + dot(C[0], C[1]);
    s += tx(A[0] - 14, A[1], "A") + tx(B[0] + 14, B[1], "B") + tx(C[0] - 14, C[1], "C");
    const aAB = -Math.atan2(60, 80) * 180 / Math.PI; /* hướng A→B ≈ -36.9° */
    const aCB = Math.atan2(60, 80) * 180 / Math.PI; /* hướng C→B ≈ 36.9° */
    s += cung(A[0], A[1], 22, aAB, 0, { nhan: a1 }) + cung(C[0], C[1], 22, 0, aCB, { nhan: a2, c: XANH });
    if (o.phu) {
      s += ln(B[0], B[1], B[0] - 118, B[1], { c: LUC, dash: true }) + tx(B[0] - 128, B[1], "k", { fs: 15, c: LUC });
      s += cung(B[0], B[1], 26, 180 + aAB, 180, { nhan: a1, c: DO, lr: 16 }) + cung(B[0], B[1], 26, 180, 180 + aCB, { nhan: a2, c: XANH, lr: 16 });
    } else if (o.nhanB) s += cung(B[0], B[1], 20, 180 + aAB, 180 + aCB, { nhan: o.nhanB, c: LUC, lr: 14 });
    return svg(320, 220, s);
  }
  return { svg, ln, tx, dot, tia, dt, cung, vuong, sub, haiDuongCat, keBu, baTia, phanGiac, haiPhanGiac, catTuyen, cungVuongGoc, euclid, gapKhuc, MAU, DO, XANH, LUC };
})();

window.KIM_GIANG = window.KIM_GIANG || {};
const DAP_GOC = (n) => [`${n}°`, `${n}`, `${n} độ`, `${n} do`, `${n}o`];

/* ===== Thứ Ba 29/09 · Bài 8: kề bù và đối đỉnh ===== */
window.KIM_GIANG["on-toan-0929"] = {
  mon: "toan",
  ngay: "2026-09-29",
  tieuDe: "Ôn Hình ngày 1 · Vì sao hai góc đối đỉnh luôn bằng nhau, và kề bù thì cộng lại được 180°",
  sgk: "Toán 7 tập 1, Chương III, Bài 8 (mục 1 và 2: hai góc kề bù, hai góc đối đỉnh) · SBT Bài 8",
  motCau: "Hai đường thẳng cắt nhau tạo ra bốn góc. Chỉ cần biết một góc là tính được ba góc còn lại, nhờ hai điều: hai góc nằm cạnh nhau trên một đường thẳng thì cộng lại bằng 180° (kề bù), hai góc đối nhau qua đỉnh thì bằng nhau (đối đỉnh). Điều thứ hai không phải là “nhìn thấy giống nhau” mà suy ra được từ điều thứ nhất, và bài hôm nay là để Kim tự suy ra được.",
  phan: [
    {
      ten: "Vì sao gọi là “kề bù”, và muốn kề bù phải có đủ gì?",
      doan: [
        "“Kề” là nằm cạnh nhau, có chung một cạnh. “Bù” là bù cho nhau đủ 180°, tức là hai cạnh còn lại phải nằm trên cùng một đường thẳng (hai tia đối nhau). Thiếu một trong hai điều thì không gọi là kề bù.",
        "Trong hình dưới, góc xOy và góc yOx' có cạnh chung Oy, còn Ox và Ox' là hai tia đối nhau, nên chúng kề bù. Biết góc xOy = 55° thì góc yOx' = 180° − 55° = 125°.",
      ],
      hinh: HV.keBu({ xy: "55°", yx2: "?" }),
      kn: [
        { ten: "Chỉ có tổng 180° thì chưa phải kề bù", de: "Hai góc ở hai hình khác nhau, mỗi góc 90°, cộng lại 180° nhưng không kề nhau nên không gọi là kề bù. Định nghĩa đòi cả vị trí lẫn số đo.",
          vd: "Đề hỏi “hai góc có tổng 180° có phải kề bù không?” thì trả lời: chưa chắc, phải có cạnh chung và hai cạnh kia là hai tia đối nhau." },
        { ten: "Cách đọc hình: tìm đường thẳng trước", de: "Nhìn xem tia nào nằm trên cùng một đường thẳng với tia nào. Có một đường thẳng và một tia chĩa ra từ điểm trên đó là có ngay hai góc kề bù.",
          vd: "Trong hình, đường thẳng là xx', tia chĩa ra là Oy. Hai góc kề bù là xOy và yOx'." },
      ],
      hop: { nhan: "Câu mẹ hay hỏi", chu: "Nếu góc xOy = 90° thì góc yOx' bằng bao nhiêu? Bằng 90°, vì kề bù. Vậy khi một đường thẳng vuông góc với đường kia, cả bốn góc tạo thành đều vuông." },
    },
    {
      ten: "Vì sao hai góc đối đỉnh bằng nhau? Không phải vì trông giống nhau",
      doan: [
        "Hai đường thẳng xx' và yy' cắt nhau tại O tạo ra bốn góc, đánh số 1, 2, 3, 4 như hình. Góc 1 (xOy) và góc 3 (x'Oy') là hai góc đối đỉnh: mỗi cạnh của góc này là tia đối của một cạnh góc kia.",
        "Bây giờ Kim tự suy: góc 1 và góc 2 kề bù, nên góc 1 = 180° − góc 2. Góc 3 và góc 2 cũng kề bù, nên góc 3 = 180° − góc 2. Hai góc cùng bằng “180° trừ đi góc 2” thì phải bằng nhau. Vậy góc 1 = góc 3. Đó là toàn bộ lí do, và Kim nên nhớ nó như một câu chuyện: hai góc đối đỉnh cùng bù với một góc ở giữa nên bằng nhau.",
      ],
      hinh: HV.haiDuongCat({ xy: "1", yx2: "2", x2y2: "3", y2x: "4" }),
      buoc: [
        { so: 1, ten: "Đếm cho đúng", de: "Hai đường thẳng cắt nhau cho 2 cặp góc đối đỉnh (1 với 3, 2 với 4) và 4 cặp góc kề bù (1 với 2, 2 với 3, 3 với 4, 4 với 1).",
          vd: "Đề hỏi “trong hình có mấy cặp góc đối đỉnh” mà Kim trả lời 4 là nhầm sang kề bù." },
        { so: 2, ten: "Biết một góc, tính ba góc còn lại", de: "Góc đối đỉnh thì chép lại y nguyên. Hai góc kề bù thì lấy 180° trừ đi.",
          vd: "Góc 1 = 55° thì góc 3 = 55° (đối đỉnh), góc 2 = 125° và góc 4 = 125° (kề bù với góc 1, hoặc đối đỉnh với góc 2)." },
        { so: 3, ten: "Ghi lí do trong ngoặc", de: "Mỗi dòng tính góc phải có lí do: (hai góc kề bù) hoặc (hai góc đối đỉnh). Không ghi thì mất điểm trình bày dù số đúng.",
          vd: "Viết: góc x'Oy' = góc xOy = 55° (hai góc đối đỉnh)." },
      ],
    },
    {
      ten: "Bẫy hay gặp: hai góc bằng nhau và nằm cạnh nhau chưa chắc đã đối đỉnh",
      doan: [
        "Trong hình dưới, góc xOy = góc yOz = 60°. Hai góc này có cạnh chung Oy và bằng nhau, nhưng KHÔNG đối đỉnh, vì Ox và Oz không phải hai tia đối nhau (góc xOz chỉ có 120°, chưa thẳng hàng). Chúng cũng không kề bù, vì tổng chỉ 120°.",
        "Cách kiểm tra đối đỉnh cho chắc: lấy một cạnh của góc này, kéo dài qua đỉnh xem có trùng với một cạnh của góc kia không. Phải làm được với cả hai cạnh mới là đối đỉnh.",
      ],
      hinh: HV.baTia(60, 60, { xy: "60°", yz: "60°" }),
      hop: { nhan: "Dạng đề gài số học", chu: "Hai góc kề bù, góc này hơn góc kia 40°. Tổng là 180° (do kề bù, đề không cho, Kim phải tự đọc ra từ hình), hiệu là 40°. Góc lớn = (180 + 40) : 2 = 110°, góc nhỏ = (180 − 40) : 2 = 70°. Thầy đã chữa dạng này trên lớp." },
    },
  ],
  doiChieu: [
    ["Hai góc kề bù", "Chung một cạnh, hai cạnh kia là hai tia đối nhau; cộng lại bằng 180°"],
    ["Hai góc đối đỉnh", "Mỗi cạnh góc này là tia đối của một cạnh góc kia; hai góc bằng nhau"],
    ["Hai tia đối nhau", "Chung gốc và tạo thành một đường thẳng"],
    ["Góc bẹt", "Góc 180°, hai cạnh là hai tia đối nhau"],
  ],
  meo: "Kề bù: cộng lại là một đường thẳng. Đối đỉnh: kéo dài cả hai cạnh qua đỉnh mà trùng khít thì bằng nhau. Nhớ lí do vì sao bằng nhau: cả hai cùng bù với góc ở giữa.",
  tuKiemTra: [
    { q: "Hai đường thẳng cắt nhau, một góc bằng 40°. Ba góc còn lại bằng bao nhiêu?", a: "40°, 140°, 140°. Góc đối đỉnh với góc 40° cũng bằng 40°; hai góc kề bù với nó đều bằng 180° − 40° = 140°." },
    { q: "Kim giải thích cho mẹ bằng lời: vì sao góc 1 bằng góc 3 trong hình hai đường thẳng cắt nhau?", a: "Góc 1 kề bù với góc 2 nên góc 1 = 180° − góc 2. Góc 3 cũng kề bù với góc 2 nên góc 3 = 180° − góc 2. Hai góc cùng bằng một số nên bằng nhau." },
  ],
  luyen: {
    phut: 15,
    tieuDe: "Luyện 15 phút · Kề bù và đối đỉnh",
    cau: [
      { loai: "tn", cd: "Đối đỉnh", hinh: HV.haiDuongCat({ xy: "55°", x2y2: "?" }), q: "Hai đường thẳng xx' và yy' cắt nhau tại O, góc xOy = 55°. Góc x'Oy' bằng bao nhiêu?", a: ["55°", "125°", "35°", "145°"], dung: 0,
        gt: "Góc x'Oy' đối đỉnh với góc xOy (Ox' là tia đối của Ox, Oy' là tia đối của Oy) nên bằng 55°. Số 125° là góc kề bù với xOy, không phải góc được hỏi." },
      { loai: "dien", cd: "Kề bù", hinh: HV.haiDuongCat({ xy: "55°", yx2: "?" }), q: "Vẫn hình trên, góc xOy = 55°. Tính góc yOx' (chỉ ghi số đo).", dap: DAP_GOC(125), goi: "Ví dụ: 90°",
        gt: "Góc xOy và góc yOx' kề bù (chung cạnh Oy, Ox và Ox' đối nhau) nên yOx' = 180° − 55° = 125°." },
      { loai: "tn", cd: "Định nghĩa kề bù", q: "Hai góc được gọi là kề bù khi nào?", a: ["Có một cạnh chung và hai cạnh còn lại là hai tia đối nhau", "Có tổng số đo bằng 180°", "Có chung đỉnh và bằng nhau", "Nằm cạnh nhau trong một hình"], dung: 0,
        gt: "Định nghĩa đòi cả vị trí: chung một cạnh và hai cạnh kia tạo thành một đường thẳng. Tổng 180° chỉ là hệ quả; hai góc ở hai hình khác nhau có tổng 180° vẫn không phải kề bù." },
      { loai: "tn", cd: "Bẫy đối đỉnh", hinh: HV.baTia(60, 60, { xy: "60°", yz: "60°" }), q: "Góc xOy = góc yOz = 60° như hình. Hai góc này có phải hai góc đối đỉnh không?", a: ["Không, vì Ox và Oz không phải hai tia đối nhau", "Có, vì hai góc bằng nhau", "Có, vì hai góc chung đỉnh O", "Không, vì hai góc không bằng 90°"], dung: 0,
        gt: "Đối đỉnh đòi mỗi cạnh của góc này là tia đối của một cạnh góc kia. Ở đây góc xOz = 120°, Ox và Oz chưa thẳng hàng, nên không đối đỉnh. Bằng nhau và chung đỉnh chưa đủ." },
      { loai: "tn", cd: "Bản chất", q: "Vì sao hai góc đối đỉnh bằng nhau?", a: ["Vì cả hai cùng kề bù với một góc thứ ba, nên cùng bằng 180° trừ đi góc đó", "Vì nhìn hình thấy hai góc giống nhau", "Vì hai góc có chung đỉnh", "Vì đó là quy ước của sách"], dung: 0,
        gt: "Lấy góc ở giữa làm cầu nối: góc 1 = 180° − góc 2 và góc 3 = 180° − góc 2, nên góc 1 = góc 3. Đây là lập luận, không phải quan sát." },
      { loai: "tn", cd: "Góc vuông", q: "Hai đường thẳng cắt nhau và một trong bốn góc tạo thành bằng 90°. Ba góc còn lại bằng bao nhiêu?", a: ["Đều bằng 90°", "90°, 180°, 180°", "45°, 45°, 90°", "Không tính được vì thiếu dữ kiện"], dung: 0,
        gt: "Góc đối đỉnh với góc 90° bằng 90°. Hai góc kề bù với nó bằng 180° − 90° = 90°. Vậy cả bốn góc đều vuông, hai đường thẳng vuông góc với nhau." },
      { loai: "dien", cd: "Dạng gài số học", q: "Hai đường thẳng cắt nhau tại O. Góc xOy lớn hơn góc yOx' là 40°. Tính góc xOy.", dap: DAP_GOC(110), goi: "Ví dụ: 90°",
        gt: "Hai góc kề bù nên tổng là 180° (dữ kiện này Kim phải tự đọc từ hình). Hiệu là 40°. Góc lớn = (180° + 40°) : 2 = 110°, góc nhỏ = 70°." },
      { loai: "tn", cd: "Đếm cặp góc", q: "Hai đường thẳng cắt nhau tạo thành bốn góc (không kể góc bẹt). Có bao nhiêu cặp góc kề bù?", a: ["4 cặp", "2 cặp", "1 cặp", "8 cặp"], dung: 0,
        gt: "Bốn góc nằm vòng quanh đỉnh, hai góc cạnh nhau bất kì đều kề bù: 1 với 2, 2 với 3, 3 với 4, 4 với 1. Còn cặp đối đỉnh chỉ có 2." },
    ],
  },
};

/* ===== Thứ Tư 30/09 · Bài 8: tia phân giác ===== */
window.KIM_GIANG["on-toan-0930"] = {
  mon: "toan",
  ngay: "2026-09-30",
  tieuDe: "Ôn Hình ngày 2 · Tia phân giác chia đôi góc, và vì sao hai phân giác của hai góc kề bù luôn vuông góc",
  sgk: "Toán 7 tập 1, Chương III, Bài 8 (mục 3: tia phân giác của một góc) · SBT Bài 8",
  motCau: "Tia phân giác là tia nằm giữa hai cạnh của góc và chia góc thành hai phần bằng nhau. Chỉ có thế, nhưng đề hay ghép phân giác với kề bù để bắt Kim tính hai, ba bước. Bài hôm nay luyện đúng kiểu ghép đó, và kết thúc bằng một kết quả đẹp: hai tia phân giác của hai góc kề bù luôn vuông góc với nhau.",
  phan: [
    {
      ten: "Phân giác cần đủ hai điều, thiếu một là sai",
      doan: [
        "Tia Oz là phân giác của góc xOy khi Oz nằm giữa hai tia Ox, Oy và góc xOz = góc zOy. Vì sao cần cả “nằm giữa”? Vì nếu chỉ đòi hai góc bằng nhau thì tia đối của Oz cũng tạo với Ox và Oy hai góc bằng nhau, mà nó nằm ngoài góc, không chia góc làm đôi.",
        "Khi Oz là phân giác, mỗi góc nhỏ bằng nửa góc lớn: xOz = zOy = xOy : 2. Ngược lại, biết một góc nhỏ thì góc lớn gấp đôi.",
      ],
      hinh: HV.phanGiac(80, { xz: "40°", zy: "40°", xy: "80°" }),
      kn: [
        { ten: "Biết góc lớn, tìm góc nhỏ: chia đôi", de: "Góc xOy = 80°, Oz là phân giác thì xOz = zOy = 40°.", vd: "Viết: xOz = xOy : 2 = 80° : 2 = 40° (Oz là tia phân giác của góc xOy)." },
        { ten: "Biết góc nhỏ, tìm góc lớn: nhân đôi", de: "Ot là phân giác của góc mOn và mOt = 35° thì mOn = 70°.", vd: "Đề thầy Bài 8 trên phiếu: có phân giác thì nhân đôi góc trước rồi mới xét cặp góc so le trong." },
        { ten: "Vẽ phân giác bằng thước đo độ", de: "Đo góc, chia đôi số đo, đặt tâm thước tại đỉnh, đánh dấu ở vạch bằng nửa số đo, nối với đỉnh.", vd: "Góc 70° thì đánh dấu ở vạch 35°. Cách gấp giấy: gấp sao cho hai cạnh trùng nhau, nếp gấp là phân giác." },
      ],
    },
    {
      ten: "Ghép phân giác với kề bù: đề hay ra kiểu này",
      doan: [
        "Cho góc xOy = 50°, tia Ox' là tia đối của Ox, Ot là phân giác của góc yOx'. Tính góc xOt. Kim làm ba bước: (1) góc yOx' = 180° − 50° = 130° (kề bù); (2) góc yOt = 130° : 2 = 65° (phân giác); (3) góc xOt = xOy + yOt = 50° + 65° = 115° (Oy nằm giữa Ox và Ot).",
        "Điều Kim cần nhìn ra là bước 1: đề không cho góc yOx', nhưng hình cho, vì Ox và Ox' đối nhau. Dữ kiện đọc từ hình cũng là dữ kiện.",
      ],
      hop: { nhan: "Khi nào được cộng hai góc", chu: "Chỉ cộng xOy + yOt = xOt khi tia Oy nằm giữa hai tia Ox và Ot. Kim nên ghi lí do đó trong ngoặc, thầy chấm rất kĩ chỗ này." },
    },
    {
      ten: "Vì sao hai phân giác của hai góc kề bù luôn vuông góc với nhau?",
      doan: [
        "Trong hình, xOy và yOz kề bù (Ox, Oz đối nhau), Om là phân giác của xOy, On là phân giác của yOz. Góc mOy bằng nửa góc xOy, góc yOn bằng nửa góc yOz. Cộng lại: mOn = mOy + yOn = (xOy + yOz) : 2 = 180° : 2 = 90°.",
        "Kết quả không phụ thuộc góc xOy là bao nhiêu. Đó là dấu hiệu của một kết quả đáng nhớ: dù đề cho 40°, 70° hay 110°, góc giữa hai phân giác vẫn là 90°. Gặp đề như vậy, Kim vẫn phải trình bày ba dòng như trên chứ không ghi ngay 90°.",
      ],
      hinh: HV.haiPhanGiac(70, { mn: "90°" }),
    },
  ],
  doiChieu: [
    ["Tia phân giác của góc xOy", "Tia nằm giữa Ox, Oy và tạo với chúng hai góc bằng nhau"],
    ["Oz là phân giác của xOy", "xOz = zOy = xOy : 2"],
    ["Hai phân giác của hai góc kề bù", "Vuông góc với nhau (góc giữa chúng bằng 90°)"],
  ],
  meo: "Thấy chữ “phân giác” là ghi ngay hai điều: hai góc nhỏ bằng nhau, và mỗi góc nhỏ bằng nửa góc lớn. Thấy hai tia đối nhau là ghi ngay tổng 180°.",
  tuKiemTra: [
    { q: "Góc AOB = 120°, OC là tia phân giác. Góc AOC bằng bao nhiêu? Nếu OA' là tia đối của OA thì góc COA' bằng bao nhiêu?", a: "AOC = 60°. COA' kề bù với COA nên bằng 180° − 60° = 120°." },
    { q: "Kim nói với mẹ bằng lời: vì sao góc giữa hai tia phân giác của hai góc kề bù luôn là 90°?", a: "Mỗi phân giác lấy một nửa góc của mình. Cộng hai nửa lại là nửa của tổng, mà tổng hai góc kề bù là 180°, nửa của 180° là 90°." },
  ],
  luyen: {
    phut: 15,
    tieuDe: "Luyện 15 phút · Tia phân giác",
    cau: [
      { loai: "tn", cd: "Định nghĩa", q: "Tia Oz là tia phân giác của góc xOy khi nào?", a: ["Oz nằm giữa hai tia Ox, Oy và góc xOz = góc zOy", "Chỉ cần góc xOz = góc zOy", "Chỉ cần Oz nằm giữa hai tia Ox, Oy", "Góc xOz + góc zOy = góc xOy"], dung: 0,
        gt: "Phải đủ hai điều. Nếu chỉ đòi hai góc bằng nhau thì tia đối của Oz cũng thoả mà nằm ngoài góc. Nếu chỉ nằm giữa thì góc có thể bị chia thành hai phần lệch nhau." },
      { loai: "dien", cd: "Chia đôi", hinh: HV.phanGiac(80, { xy: "80°", xz: "?" }), q: "Góc xOy = 80°, Oz là tia phân giác. Tính góc xOz.", dap: DAP_GOC(40), goi: "Ví dụ: 30°",
        gt: "Oz là phân giác nên xOz = xOy : 2 = 80° : 2 = 40°." },
      { loai: "dien", cd: "Nhân đôi", q: "Ot là tia phân giác của góc mOn và góc mOt = 35°. Tính góc mOn.", dap: DAP_GOC(70), goi: "Ví dụ: 30°",
        gt: "Góc nhỏ bằng nửa góc lớn, nên góc lớn bằng hai lần góc nhỏ: mOn = 2 · 35° = 70°." },
      { loai: "tn", cd: "Hai phân giác", hinh: HV.haiPhanGiac(70, { mn: "?" }), q: "Góc xOy và góc yOz kề bù. Om là phân giác của xOy, On là phân giác của yOz. Góc mOn bằng bao nhiêu?", a: ["90°", "180°", "45°", "Tuỳ số đo góc xOy"], dung: 0,
        gt: "mOn = mOy + yOn = xOy : 2 + yOz : 2 = (xOy + yOz) : 2 = 180° : 2 = 90°. Kết quả không đổi dù góc xOy bằng bao nhiêu." },
      { loai: "tn", cd: "Phân giác và tia đối", q: "Góc xOy = 120°, Oz là tia phân giác, Ox' là tia đối của Ox. Góc zOx' bằng bao nhiêu?", a: ["120°", "60°", "30°", "150°"], dung: 0,
        gt: "xOz = 120° : 2 = 60° (phân giác). Góc zOx' kề bù với xOz nên bằng 180° − 60° = 120°. Số 60° là góc xOz, chưa phải góc được hỏi." },
      { loai: "tn", cd: "Vẽ hình", q: "Muốn vẽ tia phân giác của góc 70° bằng thước đo độ, Kim đặt tâm thước tại đỉnh và đánh dấu ở vạch nào?", a: ["35°", "70°", "140°", "20°"], dung: 0,
        gt: "Phân giác chia góc thành hai góc bằng nhau, mỗi góc 70° : 2 = 35°. Đánh dấu ở vạch 35° rồi nối với đỉnh." },
      { loai: "tn", cd: "Ghép ba bước", q: "Góc xOy = 50°, Ox' là tia đối của Ox, Ot là phân giác của góc yOx'. Góc xOt bằng bao nhiêu?", a: ["115°", "65°", "90°", "130°"], dung: 0,
        gt: "yOx' = 180° − 50° = 130° (kề bù). yOt = 130° : 2 = 65° (phân giác). xOt = xOy + yOt = 50° + 65° = 115° (Oy nằm giữa Ox và Ot). Số 65° mới là góc yOt." },
      { loai: "tn", cd: "Kiểm tra định nghĩa", q: "Tia Oz nằm trong góc xOy, góc xOz = 30° và góc zOy = 50°. Oz có phải tia phân giác của góc xOy không?", a: ["Không, vì hai góc xOz và zOy không bằng nhau", "Có, vì Oz nằm giữa Ox và Oy", "Có, vì góc xOy = 80°", "Không, vì góc xOy không phải góc vuông"], dung: 0,
        gt: "Oz nằm giữa nhưng chia góc thành 30° và 50°, hai phần không bằng nhau nên không phải phân giác. Phân giác của góc 80° này phải tạo hai góc 40°." },
    ],
  },
};

/* ===== Thứ Năm 01/10 · Bài 9: cặp góc và dấu hiệu song song ===== */
window.KIM_GIANG["on-toan-1001"] = {
  mon: "toan",
  ngay: "2026-10-01",
  tieuDe: "Ôn Hình ngày 3 · Gọi đúng tên cặp góc khi một đường cắt hai đường, và một cặp bằng nhau là đủ để kết luận song song",
  sgk: "Toán 7 tập 1, Chương III, Bài 9 (góc so le trong, góc đồng vị; dấu hiệu nhận biết hai đường thẳng song song) · phiếu “Hai đường thẳng song song” của thầy",
  motCau: "Một đường thẳng c cắt hai đường thẳng a và b tạo ra tám góc. Gọi đúng tên từng cặp góc là việc đầu tiên, vì toàn bộ chương này (dấu hiệu, tính chất, chứng minh) đều nói bằng những cái tên đó. Rồi dấu hiệu nhận biết: chỉ cần MỘT cặp so le trong bằng nhau, hoặc MỘT cặp đồng vị bằng nhau, là a song song với b.",
  phan: [
    {
      ten: "Gọi tên cặp góc bằng hai câu hỏi, không nhìn số",
      doan: [
        "Trên phiếu của thầy, các góc được đánh số tuỳ ý, nên mẹo “cùng số là đồng vị” không dùng được. Kim quay về hai câu hỏi cho mỗi góc: góc nằm TRONG hay NGOÀI dải giữa hai đường a, b? Góc nằm bên TRÁI hay bên PHẢI của đường cắt c?",
        "So le trong: cả hai góc đều ở trong, và ở hai phía khác nhau của c (một trái, một phải). Đồng vị: một góc trong, một góc ngoài, cùng phía với c, và cùng “vị trí” (cùng ở phía trên đường thẳng của mình, hoặc cùng ở phía dưới). Trong cùng phía: cả hai ở trong, cùng một phía của c.",
        "Trong hình dưới, tại mỗi đỉnh đánh số 1 = trên phải, 2 = trên trái, 3 = dưới trái, 4 = dưới phải. Kim tự kiểm tra: so le trong là A3 với B1 và A4 với B2. Đồng vị là A1 với B1, A2 với B2, A3 với B3, A4 với B4. Trong cùng phía là A3 với B2 và A4 với B1.",
      ],
      hinh: HV.catTuyen({ so: true }),
      buoc: [
        { so: 1, ten: "Đếm để tự soát", de: "Với đủ tám góc luôn có đúng 2 cặp so le trong, 4 cặp đồng vị, 2 cặp trong cùng phía.", vd: "Kim liệt kê được 3 cặp so le trong là chắc chắn có một cặp sai." },
        { so: 2, ten: "Mẹo chữ cái", de: "So le trong tạo hình chữ Z (hoặc Z ngược). Đồng vị tạo hình chữ F. Trong cùng phía tạo hình chữ U.", vd: "Mẹo chỉ để nhìn nhanh; khi hình bị xoay hay là tam giác có cạnh kéo dài thì vẫn phải quay về hai câu hỏi." },
        { so: 3, ten: "Hình tam giác kéo dài cạnh", de: "Tìm đường cắt trước: đó là cạnh chung của hai góc đang xét. Hai đường bị cắt là hai cạnh còn lại (đã kéo dài).", vd: "Bài 3, 4, 5 Dạng 1 trên phiếu của thầy đều là kiểu này." },
      ],
    },
    {
      ten: "Vì sao chỉ cần một cặp góc bằng nhau là kết luận được song song?",
      doan: [
        "Dấu hiệu nhận biết: nếu đường thẳng c cắt a và b, và trong các góc tạo thành có một cặp góc so le trong bằng nhau (hoặc một cặp góc đồng vị bằng nhau) thì a // b.",
        "Vì sao một cặp là đủ? Vì từ một cặp so le trong bằng nhau, nhờ đối đỉnh và kề bù ở mỗi đỉnh, Kim suy ra được mọi cặp so le trong khác cũng bằng nhau và mọi cặp đồng vị cũng bằng nhau. Tám góc chỉ có hai giá trị: một góc x và một góc 180° − x. Nên đề chỉ cần cho một cặp, Kim không phải đi tìm thêm cặp thứ hai.",
      ],
      hinh: HV.catTuyen({ nhanA: { 3: "70°" }, nhanB: { 1: "70°" }, to: ["A3", "B1"] }),
      kn: [
        { ten: "Khuôn ba dòng thầy chấm", de: "Ta có: góc A3 = góc B1 (= 70°, đề bài). Mà hai góc này ở vị trí so le trong. Suy ra a // b (dấu hiệu nhận biết).", vd: "Viết tắt thầy dùng: SLT (so le trong), Đvị (đồng vị), ĐPCM. Dòng nào không có lí do trong ngoặc là mất điểm." },
        { ten: "Cặp cho sẵn chưa đúng loại thì đi thêm một bước", de: "Đề cho A1 = 110° và B3 = 110°: hai góc này không so le trong cũng không đồng vị. Kim lấy B1 = B3 = 110° (đối đỉnh), rồi A1 và B1 đồng vị bằng nhau, suy ra a // b.", vd: "Đề cho một góc trong và một góc ngoài ở hai phía khác nhau cũng xử lí y như vậy: đổi sang góc đối đỉnh hoặc góc kề bù trước." },
        { ten: "Cùng vuông góc với một đường thứ ba", de: "Hai đường thẳng phân biệt cùng vuông góc với đường thẳng c thì song song với nhau. Lí do: hai góc vuông ở vị trí so le trong (hoặc đồng vị) bằng nhau.", vd: "Trên hình có hai ô vuông nhỏ đánh dấu góc vuông là nghĩ ngay đến cách này." },
      ],
      hop: { nhan: "Chiều của lập luận", chu: "Dấu hiệu nhận biết đi từ GÓC ra SONG SONG: biết góc bằng nhau, kết luận a // b. Ngày mai học chiều ngược lại: biết a // b, suy ra góc. Kim đừng dùng lẫn." },
    },
  ],
  doiChieu: [
    ["Hai góc so le trong", "Cùng ở trong dải giữa a và b, ở hai phía khác nhau của c (chữ Z)"],
    ["Hai góc đồng vị", "Một trong một ngoài, cùng phía với c, cùng vị trí (chữ F)"],
    ["Hai góc trong cùng phía", "Cùng ở trong, cùng một phía của c (chữ U)"],
    ["Dấu hiệu nhận biết", "Một cặp so le trong bằng nhau, hoặc một cặp đồng vị bằng nhau, thì a // b"],
    ["a ⊥ c và b ⊥ c (a, b phân biệt)", "a // b"],
  ],
  meo: "Hỏi hai câu cho mỗi góc: trong hay ngoài, trái hay phải của đường cắt. Đếm 2–4–2 để soát. Kết luận song song chỉ cần một cặp, nhưng phải gọi đúng tên cặp đó trong bài làm.",
  tuKiemTra: [
    { q: "Trong hình tám góc ở trên, góc A4 và góc B1 là cặp gì? Góc A2 và góc B2 là cặp gì?", a: "A4 và B1: cả hai ở trong, cùng bên phải của c, là trong cùng phía. A2 và B2: cùng ở trên, cùng bên trái, một trong một ngoài, là đồng vị." },
    { q: "Đề cho góc A3 = 70° và góc B1 = 70°. Kim viết bài chứng minh a // b bằng ba dòng.", a: "Ta có: góc A3 = góc B1 = 70° (đề bài). Mà hai góc này ở vị trí so le trong. Suy ra a // b (dấu hiệu nhận biết hai đường thẳng song song)." },
  ],
  luyen: {
    phut: 15,
    tieuDe: "Luyện 15 phút · Cặp góc và dấu hiệu song song",
    cau: [
      { loai: "tn", cd: "So le trong", hinh: HV.catTuyen({ so: true }), q: "Trong hình, cặp góc nào là hai góc so le trong?", a: ["A3 và B1", "A1 và B1", "A3 và B2", "A2 và B4"], dung: 0,
        gt: "A3 (dưới trái tại A) và B1 (trên phải tại B) đều nằm trong dải giữa a và b, và ở hai phía khác nhau của c. Cặp A1–B1 là đồng vị, A3–B2 là trong cùng phía, A2–B4 ở ngoài dải nên không phải so le trong." },
      { loai: "tn", cd: "Đồng vị", hinh: HV.catTuyen({ so: true }), q: "Góc A2 và góc B2 là cặp góc gì?", a: ["Đồng vị", "So le trong", "Trong cùng phía", "Đối đỉnh"], dung: 0,
        gt: "A2 ở ngoài dải (phía trên a), B2 ở trong dải (phía trên b), cả hai cùng bên trái của c và cùng ở phía trên đường thẳng của mình: đó là đồng vị, hình chữ F." },
      { loai: "tn", cd: "Trong cùng phía", hinh: HV.catTuyen({ so: true }), q: "Góc A4 và góc B1 là cặp góc gì?", a: ["Trong cùng phía", "So le trong", "Đồng vị", "Kề bù"], dung: 0,
        gt: "A4 (dưới phải tại A) và B1 (trên phải tại B) đều nằm trong dải và cùng bên phải của c, hình chữ U. So le trong phải ở hai phía khác nhau của c." },
      { loai: "dien", cd: "Đếm cặp", q: "Một đường thẳng cắt hai đường thẳng tạo thành tám góc. Có bao nhiêu cặp góc đồng vị? (ghi một số)", dap: ["4", "4 cặp", "bốn", "bốn cặp"],
        gt: "Mỗi góc ở đỉnh A có đúng một góc cùng vị trí ở đỉnh B, nên có 4 cặp đồng vị. So le trong và trong cùng phía mỗi loại chỉ có 2 cặp." },
      { loai: "tn", cd: "Dấu hiệu", hinh: HV.catTuyen({ nhanA: { 3: "70°" }, nhanB: { 1: "70°" }, to: ["A3", "B1"] }), q: "Biết góc A3 = góc B1 = 70°. Kết luận nào đúng?", a: ["a // b, vì có một cặp góc so le trong bằng nhau", "Chưa kết luận được, cần thêm một cặp đồng vị bằng nhau", "a vuông góc với b", "a // b, vì có một cặp góc đồng vị bằng nhau"], dung: 0,
        gt: "A3 và B1 là so le trong, bằng nhau, nên theo dấu hiệu nhận biết a // b. Một cặp là đủ. Gọi cặp này là đồng vị là gọi sai tên." },
      { loai: "tn", cd: "Dấu hiệu", hinh: HV.catTuyen({ nhanA: { 1: "110°" }, nhanB: { 1: "110°" }, to: ["A1", "B1"] }), q: "Biết góc A1 = góc B1 = 110°. Kết luận nào đúng?", a: ["a // b, vì có một cặp góc đồng vị bằng nhau", "a // b, vì có một cặp góc so le trong bằng nhau", "Chưa kết luận được vì hai góc là góc tù", "a và b cắt nhau"], dung: 0,
        gt: "A1 và B1 cùng ở trên phải tại mỗi đỉnh: một ngoài một trong, cùng phía c, là đồng vị. Đồng vị bằng nhau thì a // b. Góc tù hay nhọn không ảnh hưởng." },
      { loai: "tn", cd: "Đi thêm một bước", hinh: HV.catTuyen({ nhanA: { 1: "110°" }, nhanB: { 3: "110°" }, to: ["A1", "B3"] }), q: "Đề cho góc A1 = 110° và góc B3 = 110°. Cách làm nào đúng?", a: ["Lấy B1 = B3 = 110° (đối đỉnh), rồi A1 và B1 đồng vị bằng nhau, suy ra a // b", "Kết luận ngay a // b vì A1 và B3 là hai góc đồng vị bằng nhau", "Không kết luận được vì A1 và B3 không cùng loại", "Kết luận a // b vì A1 và B3 là hai góc so le trong"], dung: 0,
        gt: "A1 và B3 không phải cặp so le trong hay đồng vị, nên chưa dùng dấu hiệu ngay được. Chuyển B3 sang góc đối đỉnh B1 (bằng 110°) thì A1 và B1 là đồng vị bằng nhau, từ đó a // b." },
      { loai: "tn", cd: "Cùng vuông góc", hinh: HV.cungVuongGoc(), q: "Đường thẳng a và b phân biệt, cùng vuông góc với đường thẳng c. Kết luận nào đúng?", a: ["a // b", "a vuông góc với b", "a và b cắt nhau tại một điểm trên c", "Chưa đủ dữ kiện"], dung: 0,
        gt: "Hai góc vuông tại A và B ở vị trí so le trong (hoặc đồng vị) và bằng nhau (cùng 90°), nên a // b. Đây là nhận xét trong Bài 9, dùng thẳng được." },
    ],
  },
};

/* ===== Thứ Sáu 02/10 · Bài 10: tiên đề Euclid và tính chất ===== */
window.KIM_GIANG["on-toan-1002"] = {
  mon: "toan",
  ngay: "2026-10-02",
  tieuDe: "Ôn Hình ngày 4 · Đã biết song song thì suy ra được góc nào, và vì sao tiên đề Euclid cho phép nói vậy",
  sgk: "Toán 7 tập 1, Chương III, Bài 10 (tiên đề Euclid; tính chất của hai đường thẳng song song) · SBT Bài 10",
  motCau: "Hôm qua Kim đi từ góc ra song song. Hôm nay đi ngược lại: đã biết a // b thì mọi cặp so le trong bằng nhau, mọi cặp đồng vị bằng nhau, hai góc trong cùng phía bù nhau. Nền của chiều ngược này là tiên đề Euclid: qua một điểm ngoài đường thẳng chỉ vẽ được đúng một đường thẳng song song. Bài hôm nay cũng gom ba hệ quả hay dùng: bắc cầu, cùng vuông góc, và vuông góc với một trong hai đường song song.",
  phan: [
    {
      ten: "Tiên đề Euclid nói gì, và vì sao gọi là “tiên đề”?",
      doan: [
        "Qua một điểm M nằm ngoài đường thẳng a, chỉ có MỘT đường thẳng song song với a. Vẽ được một đường là điều Kim đã biết từ Bài 9 (dùng êke). Điều mới là chữ “chỉ có một”: nếu có hai đường b và b' cùng đi qua M và cùng song song với a thì b và b' phải trùng nhau.",
        "Gọi là tiên đề vì đây là điều được công nhận, không chứng minh; mọi thứ khác trong chương xây trên nó. Đề thường hỏi đúng chữ “duy nhất” này.",
      ],
      hinh: HV.euclid({ b: true, b2: true }),
      hop: { nhan: "Ứng dụng hay gặp", chu: "Đề cho b // a và b' // a, cả hai cùng qua M. Kết luận: b và b' trùng nhau (chỉ là một đường). Không phải “b // b'”." },
    },
    {
      ten: "Tính chất: từ a // b suy ra được gì?",
      doan: [
        "Nếu a // b và đường thẳng c cắt cả a và b thì: hai góc so le trong bằng nhau, hai góc đồng vị bằng nhau, hai góc trong cùng phía bù nhau (tổng 180°).",
        "Trong hình, a // b và góc A1 = 60°. Kim tính được cả bảy góc còn lại: B1 = 60° (đồng vị với A1), A3 = 60° (đối đỉnh với A1), B3 = 60° (đồng vị với A3). Bốn góc kia đều bằng 180° − 60° = 120°: A2, A4, B2, B4. Tám góc chỉ có hai giá trị, 60° và 120°.",
      ],
      hinh: HV.catTuyen({ ss: true, nhanA: { 1: "60°" }, nhanB: { 3: "?" }, to: ["A1", "B3"] }),
      buoc: [
        { so: 1, ten: "Ghi rõ lí do là tính chất, không phải dấu hiệu", de: "Viết: góc B1 = góc A1 = 60° (hai góc đồng vị, a // b). Chữ “a // b” trong ngoặc là bắt buộc, vì không có nó thì hai góc đồng vị không có lí do gì để bằng nhau.", vd: "Đề hỏi tính góc và có cho a // b là dùng tính chất. Đề hỏi chứng minh a // b là dùng dấu hiệu." },
        { so: 2, ten: "Trong cùng phía thì bù nhau", de: "A4 và B1 trong cùng phía, a // b nên A4 + B1 = 180°. Biết B1 = 60° thì A4 = 120°.", vd: "Trước đây Kim phải đi vòng qua góc kề bù; từ Bài 10 được dùng thẳng." },
        { so: 3, ten: "Đổi góc trước khi áp tính chất", de: "Góc đề hỏi không so le trong, không đồng vị với góc đã cho thì đổi nó sang góc đối đỉnh hoặc kề bù cho đến khi thành một cặp có tên.", vd: "Hỏi B4 khi biết A1: B4 đồng vị với A4, A4 kề bù A1 = 60° nên A4 = 120°, vậy B4 = 120°." },
      ],
    },
    {
      ten: "Ba hệ quả hay dùng trong bài chứng minh",
      doan: [
        "Bắc cầu: hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì song song với nhau (a // c và b // c thì a // b). Trên phiếu của thầy, các bài hỏi nối đuôi “chứng tỏ AB // MN” rồi “chứng tỏ MN // CD” là để Kim bắc cầu ở câu sau, nhớ ghi “(CM trên)” cho kết quả câu trước.",
        "Cùng vuông góc: a ⊥ c và b ⊥ c thì a // b (đã học hôm qua). Vuông góc với một trong hai đường song song: nếu a // b và c ⊥ a thì c ⊥ b. Lí do: c cắt a tạo góc vuông, góc đồng vị tại b cũng vuông theo tính chất.",
      ],
      hop: { nhan: "Vì sao mỗi dòng phải có lí do", chu: "Bài chứng minh là một chuỗi bước, bước sau đứng trên bước trước. Người chấm cần biết Kim đứng trên cái gì: đề bài, đối đỉnh, kề bù, dấu hiệu, tính chất, hay kết quả đã chứng minh ở trên. Số đúng mà thiếu lí do là bài chưa xong." },
    },
  ],
  doiChieu: [
    ["Tiên đề Euclid", "Qua điểm M ngoài a, chỉ có một đường thẳng song song với a"],
    ["a // b, c cắt a và b", "So le trong bằng nhau; đồng vị bằng nhau; trong cùng phía bù nhau"],
    ["a // c và b // c (a, b phân biệt)", "a // b"],
    ["a // b và c ⊥ a", "c ⊥ b"],
    ["Dấu hiệu (Bài 9) và tính chất (Bài 10)", "Dấu hiệu: góc → song song. Tính chất: song song → góc"],
  ],
  meo: "Đề CHO song song thì được lấy góc bằng nhau. Đề HỎI song song thì phải chỉ ra góc bằng nhau. Trong ngoặc luôn ghi hai thứ: tên cặp góc và lí do (a // b, hoặc dấu hiệu).",
  tuKiemTra: [
    { q: "a // b, đường thẳng c cắt a tại A, cắt b tại B. Góc A1 = 60°. Hai góc trong cùng phía với B1 tại A là góc nào và bằng bao nhiêu?", a: "Góc A4 (cùng ở trong, cùng bên phải của c với B1). A4 kề bù với A1 nên bằng 120°; kiểm tra: A4 + B1 = 120° + 60° = 180°, đúng là bù nhau." },
    { q: "Vì sao tiên đề Euclid cần chữ “chỉ có một”?", a: "Vì có chữ đó mới suy ra được tính chất: nếu góc so le trong không bằng nhau thì vẽ được đường thứ hai qua điểm ấy song song với a, trái với tiên đề. Không có tiên đề thì không có tính chất." },
  ],
  luyen: {
    phut: 15,
    tieuDe: "Luyện 15 phút · Tính chất hai đường thẳng song song",
    cau: [
      { loai: "tn", cd: "Đồng vị", hinh: HV.catTuyen({ ss: true, nhanA: { 1: "60°" }, nhanB: { 1: "?" }, to: ["A1", "B1"] }), q: "a // b, góc A1 = 60°. Góc B1 bằng bao nhiêu?", a: ["60°", "120°", "30°", "Không tính được"], dung: 0,
        gt: "A1 và B1 là hai góc đồng vị, a // b nên bằng nhau: B1 = 60°. Lí do ghi trong ngoặc: (hai góc đồng vị, a // b)." },
      { loai: "dien", cd: "Kề bù sau đồng vị", hinh: HV.catTuyen({ ss: true, nhanA: { 1: "60°" }, nhanB: { 2: "?" }, to: ["A1", "B2"] }), q: "a // b, góc A1 = 60°. Tính góc B2.", dap: DAP_GOC(120), goi: "Ví dụ: 90°",
        gt: "B1 = A1 = 60° (đồng vị, a // b). B2 kề bù với B1 nên B2 = 180° − 60° = 120°." },
      { loai: "tn", cd: "Trong cùng phía", q: "Khi a // b và c cắt a, b, hai góc trong cùng phía có quan hệ gì?", a: ["Bù nhau, tổng bằng 180°", "Bằng nhau", "Phụ nhau, tổng bằng 90°", "Không có quan hệ gì"], dung: 0,
        gt: "Hai góc trong cùng phía bù nhau. Chỉ so le trong và đồng vị mới bằng nhau. Nếu Kim nhầm thành bằng nhau thì kết quả sẽ sai 60° so với 120° trong hình hôm nay." },
      { loai: "tn", cd: "Tiên đề Euclid", hinh: HV.euclid({ b: true }), q: "Tiên đề Euclid khẳng định điều gì?", a: ["Qua một điểm nằm ngoài đường thẳng a, chỉ có một đường thẳng song song với a", "Qua một điểm nằm ngoài đường thẳng a, có vô số đường thẳng song song với a", "Hai đường thẳng song song thì không bao giờ cắt nhau", "Qua hai điểm chỉ vẽ được một đường thẳng"], dung: 0,
        gt: "Tiên đề nói về tính duy nhất: qua điểm M ngoài a chỉ có MỘT đường thẳng song song với a. Hai đường thẳng song song không cắt nhau là định nghĩa, không phải tiên đề này." },
      { loai: "tn", cd: "Chiều lập luận", q: "Đề cho a // b và yêu cầu tính một góc. Kim dùng gì?", a: ["Tính chất của hai đường thẳng song song (từ song song suy ra góc)", "Dấu hiệu nhận biết hai đường thẳng song song (từ góc suy ra song song)", "Tiên đề Euclid để tính góc", "Cả dấu hiệu lẫn tính chất cùng lúc"], dung: 0,
        gt: "Đã biết song song thì dùng tính chất để lấy góc. Dấu hiệu chỉ dùng khi đề hỏi chứng minh song song. Nhầm chiều là lỗi phổ biến nhất của chương này." },
      { loai: "tn", cd: "Bắc cầu", q: "a // c và b // c, a và b phân biệt. Kết luận nào đúng?", a: ["a // b", "a vuông góc với b", "a và b cắt nhau", "Chưa đủ dữ kiện"], dung: 0,
        gt: "Hai đường thẳng phân biệt cùng song song với đường thẳng thứ ba thì song song với nhau. Trên phiếu của thầy, câu b của các bài nối đuôi dùng đúng hệ quả này." },
      { loai: "tn", cd: "Vuông góc", q: "a // b và c vuông góc với a. Kết luận nào đúng?", a: ["c vuông góc với b", "c song song với b", "c không cắt b", "Chưa đủ dữ kiện"], dung: 0,
        gt: "c cắt a tạo góc 90°. Vì a // b, góc đồng vị tại b cũng bằng 90° (tính chất), nên c vuông góc với b." },
      { loai: "dien", cd: "Đổi góc rồi áp tính chất", hinh: HV.catTuyen({ ss: true, nhanA: { 1: "60°" }, nhanB: { 4: "?" }, to: ["A1", "B4"] }), q: "a // b, góc A1 = 60°. Tính góc B4.", dap: DAP_GOC(120), goi: "Ví dụ: 90°",
        gt: "B4 đồng vị với A4. A4 kề bù với A1 nên A4 = 120°. Vậy B4 = A4 = 120° (đồng vị, a // b). Cách khác: B4 đối đỉnh với B2 = 120°." },
    ],
  },
};

/* ===== Thứ Bảy 03/10 · Đề thử tổng hợp hình ===== */
window.KIM_GIANG["on-toan-1003"] = {
  mon: "toan",
  ngay: "2026-10-03",
  tieuDe: "Ôn Hình ngày 5 · Đề thử 12 câu từ Bài 8 đến Bài 10, kèm tờ ghi nhớ và các lỗi hay mất điểm",
  sgk: "Toán 7 tập 1, Chương III, Bài 8–10 · phiếu “Hai đường thẳng song song” của thầy",
  motCau: "Bốn ngày qua Kim đã có đủ công cụ: kề bù, đối đỉnh, phân giác, tên ba loại cặp góc, dấu hiệu và tính chất. Hôm nay làm một đề trộn 12 câu trong 20 phút để xem công cụ nào chưa chắc. Sau đó Kim viết tay hai bài tự luận ở cuối để mẹ chấm theo khuôn ba dòng.",
  phan: [
    {
      ten: "Tờ ghi nhớ một trang",
      doan: [
        "Kề bù: chung cạnh, hai cạnh kia đối nhau, tổng 180°. Đối đỉnh: kéo dài cả hai cạnh qua đỉnh mà trùng, hai góc bằng nhau (vì cùng bù với góc ở giữa). Phân giác: nằm giữa và chia đôi; hai phân giác của hai góc kề bù vuông góc với nhau.",
        "Một đường cắt hai đường: hỏi hai câu (trong hay ngoài, trái hay phải của đường cắt). So le trong: trong, khác phía. Đồng vị: một trong một ngoài, cùng phía, cùng vị trí. Trong cùng phía: trong, cùng phía. Đếm 2–4–2.",
        "Dấu hiệu (góc → song song): một cặp so le trong hoặc đồng vị bằng nhau; hoặc cùng vuông góc với đường thứ ba. Tính chất (song song → góc): so le trong bằng nhau, đồng vị bằng nhau, trong cùng phía bù nhau. Bắc cầu: cùng song song với đường thứ ba. a // b và c ⊥ a thì c ⊥ b. Tiên đề Euclid: qua điểm ngoài đường thẳng chỉ có một đường song song.",
      ],
    },
    {
      ten: "Bài nâng cao thầy hay ra: hình gấp khúc, kẻ thêm đường phụ",
      doan: [
        "Cho Ax // Cy, góc xAB = 35°, góc BCy = 55°. Tính góc ABC. Hai đường song song nằm ở hai đầu, đỉnh B gấp ra giữa, nên không có cặp góc nào có tên sẵn để dùng.",
        "Cách làm: qua B kẻ tia Bk song song với Ax (Kim tự thêm, ghi “kẻ Bk // Ax”). Bắc cầu được Bk // Cy. Góc ABk = góc xAB = 35° (so le trong, Bk // Ax). Góc kBC = góc BCy = 55° (so le trong, Bk // Cy). Cộng lại: góc ABC = 35° + 55° = 90°. Đường phụ là việc Kim tự thêm vào, không phải điều chứng minh được, nên không ghi “(CM trên)” ở dòng kẻ.",
      ],
      hinh: HV.gapKhuc("35°", "55°", { phu: true, nhanB: "?" }),
    },
    {
      ten: "Tám lỗi hay mất điểm",
      doan: [
        "Gọi hai góc bằng nhau nằm cạnh nhau là đối đỉnh. Nhầm góc được hỏi với góc kề bù của nó (đề hỏi 125° lại ghi 55°). Quên nhân đôi khi có phân giác. Gọi tên cặp góc theo số trên hình thay vì theo vị trí. Kết luận song song từ một cặp không phải so le trong hay đồng vị. Nhầm trong cùng phía là bằng nhau. Dùng tính chất khi đề chưa cho song song. Thiếu lí do trong ngoặc ở mỗi dòng.",
      ],
      hop: { nhan: "Hai bài tự luận viết tay (mẹ chấm)", chu: "Bài 1: Hai đường thẳng xx' và yy' cắt nhau tại O, góc xOy = 40°, Om là phân giác của góc yOx'. Tính góc yOx', góc yOm, góc xOm. Bài 2: c cắt a tại A và b tại B, góc A3 = 65°, góc B2 = 115° (đánh số như hình các ngày trước). Chứng tỏ a // b. Mỗi dòng phải có lí do trong ngoặc, kết luận phải nêu tên dấu hiệu." },
    },
  ],
  meo: "Trước khi làm mỗi câu, tự hỏi: đề cho góc hay cho song song? Cho góc thì đi tìm song song bằng dấu hiệu. Cho song song thì lấy góc bằng tính chất.",
  luyen: {
    phut: 20,
    tieuDe: "Đề thử 20 phút · Hình từ Bài 8 đến Bài 10",
    cau: [
      { loai: "tn", cd: "Đối đỉnh", hinh: HV.haiDuongCat({ xy: "40°", x2y2: "?" }), q: "xx' và yy' cắt nhau tại O, góc xOy = 40°. Góc x'Oy' bằng bao nhiêu?", a: ["40°", "140°", "50°", "80°"], dung: 0,
        gt: "Góc x'Oy' đối đỉnh với góc xOy nên bằng 40°." },
      { loai: "dien", cd: "Kề bù", hinh: HV.haiDuongCat({ xy: "40°", yx2: "?" }), q: "Vẫn hình trên. Tính góc yOx'.", dap: DAP_GOC(140), goi: "Ví dụ: 90°",
        gt: "yOx' kề bù với xOy nên bằng 180° − 40° = 140°." },
      { loai: "tn", cd: "Phân giác", q: "Vẫn hình trên, Om là tia phân giác của góc yOx'. Góc yOm bằng bao nhiêu?", a: ["70°", "140°", "40°", "20°"], dung: 0,
        gt: "yOx' = 140°, phân giác chia đôi: yOm = 140° : 2 = 70°." },
      { loai: "tn", cd: "Cộng góc", q: "Vẫn hình trên. Góc xOm bằng bao nhiêu?", a: ["110°", "70°", "180°", "100°"], dung: 0,
        gt: "Oy nằm giữa Ox và Om nên xOm = xOy + yOm = 40° + 70° = 110°." },
      { loai: "tn", cd: "Tên cặp góc", hinh: HV.catTuyen({ so: true }), q: "Góc A4 và góc B2 là cặp góc gì?", a: ["So le trong", "Đồng vị", "Trong cùng phía", "Đối đỉnh"], dung: 0,
        gt: "A4 (dưới phải tại A) và B2 (trên trái tại B) đều ở trong dải, ở hai phía khác nhau của c: so le trong." },
      { loai: "tn", cd: "Tên cặp góc", hinh: HV.catTuyen({ so: true }), q: "Góc A3 và góc B3 là cặp góc gì?", a: ["Đồng vị", "So le trong", "Trong cùng phía", "Kề bù"], dung: 0,
        gt: "Cùng ở dưới trái tại mỗi đỉnh, A3 ở trong và B3 ở ngoài, cùng bên trái c: đồng vị." },
      { loai: "tn", cd: "Chứng minh song song", hinh: HV.catTuyen({ nhanA: { 3: "65°" }, nhanB: { 2: "115°" }, to: ["A3", "B2"] }), q: "Góc A3 = 65°, góc B2 = 115°. Bước làm nào đúng để chứng tỏ a // b?", a: ["B1 = 180° − 115° = 65° (kề bù với B2), mà A3 và B1 so le trong bằng nhau, nên a // b", "A3 và B2 là hai góc đồng vị nên a // b", "A3 + B2 = 180° nên a vuông góc với b", "Không chứng minh được vì hai góc không bằng nhau"], dung: 0,
        gt: "A3 và B2 là trong cùng phía, có tổng 180°. Đổi B2 sang góc kề bù B1 = 65° thì A3 và B1 là so le trong bằng nhau, đủ để dùng dấu hiệu. (Sau Bài 10 cũng có thể nói thẳng: trong cùng phía bù nhau thì song song, nhưng khuôn đề của thầy vẫn ưa cách đổi góc.)" },
      { loai: "dien", cd: "Tính chất", hinh: HV.catTuyen({ ss: true, nhanB: { 1: "50°" }, nhanA: { 1: "?" }, to: ["A1", "B1"] }), q: "a // b, góc B1 = 50°. Tính góc A1.", dap: DAP_GOC(50), goi: "Ví dụ: 90°",
        gt: "A1 và B1 đồng vị, a // b nên A1 = B1 = 50°." },
      { loai: "tn", cd: "Tính chất", hinh: HV.catTuyen({ ss: true, nhanB: { 1: "50°" }, nhanA: { 4: "?" }, to: ["A4", "B1"] }), q: "a // b, góc B1 = 50°. Góc A4 bằng bao nhiêu?", a: ["130°", "50°", "40°", "100°"], dung: 0,
        gt: "A4 và B1 là trong cùng phía, a // b nên bù nhau: A4 = 180° − 50° = 130°. Cách khác: A1 = 50° (đồng vị) rồi A4 kề bù với A1." },
      { loai: "tn", cd: "Tiên đề Euclid", q: "Hai đường thẳng b và b' cùng đi qua điểm M và cùng song song với đường thẳng a (M không thuộc a). Kết luận nào đúng?", a: ["b và b' trùng nhau", "b // b'", "b vuông góc với b'", "b và b' cắt nhau tại một điểm khác M"], dung: 0,
        gt: "Tiên đề Euclid: qua M chỉ có một đường thẳng song song với a. Hai đường b, b' đều thoả điều đó nên phải là cùng một đường." },
      { loai: "tn", cd: "Trình bày", q: "Dòng nào được viết đúng khuôn chứng minh?", a: ["Ta có góc A3 = góc B1 = 70° (đề bài), mà hai góc này ở vị trí so le trong, suy ra a // b (dấu hiệu nhận biết)", "Góc A3 = góc B1 nên a // b", "Hai góc bằng nhau nên hai đường thẳng song song", "a // b vì nhìn hình thấy hai đường không cắt nhau"], dung: 0,
        gt: "Khuôn ba dòng: dữ kiện kèm lí do, tên vị trí của cặp góc, kết luận kèm tên dấu hiệu. Ba câu còn lại thiếu tên cặp góc hoặc thiếu lí do, đúng số vẫn mất điểm." },
      { loai: "tn", cd: "Nâng cao: đường phụ", hinh: HV.gapKhuc("35°", "55°", { nhanB: "?" }), q: "Ax // Cy, góc xAB = 35°, góc BCy = 55°. Góc ABC bằng bao nhiêu?", a: ["90°", "80°", "100°", "20°"], dung: 0,
        gt: "Kẻ Bk // Ax qua B, bắc cầu được Bk // Cy. Góc ABk = 35° (so le trong với xAB), góc kBC = 55° (so le trong với BCy). Cộng lại ABC = 90°, tức AB vuông góc với BC." },
    ],
  },
};
