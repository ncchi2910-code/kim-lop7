/* LUYỆN TÍNH MỖI NGÀY — vài câu tính toán bám đúng chương Toán Kim đang học.
   Đề sinh tự động nên không bao giờ hết bài, nhưng cố định theo ngày: Kim thoát giữa chừng
   vào lại vẫn đúng đề đó, không bấm lại để đổi đề dễ hơn.
   Các đáp án nhiễu là những lỗi học sinh hay mắc (sai dấu, quên quy đồng, nhân số mũ thay vì cộng…),
   nên chọn sai ở đâu là biết Kim đang hổng chỗ nào. */
window.KIM_LUYEN = (function () {

  /* ---------- số ngẫu nhiên cố định theo ngày ---------- */
  function tao(seedChuoi) {
    let h = 2166136261;
    for (let i = 0; i < seedChuoi.length; i++) { h ^= seedChuoi.charCodeAt(i); h = Math.imul(h, 16777619); }
    let s = h >>> 0;
    return function () { s = (Math.imul(s, 1664525) + 1013904223) >>> 0; return s / 4294967296; };
  }
  const R = (r, a, b) => a + Math.floor(r() * (b - a + 1));          /* số nguyên trong [a,b] */
  const chon = (r, ds) => ds[Math.floor(r() * ds.length)];
  const dauNgauNhien = (r) => (r() < 0.45 ? -1 : 1);

  /* ---------- phân số ---------- */
  const ucln = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b]; } return a || 1; };
  function px(t, m) { if (m < 0) { t = -t; m = -m; } const g = ucln(t, m); return { t: t / g, m: m / g }; }
  const cong = (x, y) => px(x.t * y.m + y.t * x.m, x.m * y.m);
  const tru = (x, y) => px(x.t * y.m - y.t * x.m, x.m * y.m);
  const nhan = (x, y) => px(x.t * y.t, x.m * y.m);
  const chia = (x, y) => px(x.t * y.m, x.m * y.t);
  function chu(x) { x = px(x.t, x.m); const d = x.t < 0 ? "−" : ""; if (x.m === 1) return d + Math.abs(x.t); return d + Math.abs(x.t) + "/" + x.m; }
  const ng = (x) => (x.t < 0 || (x.t / x.m) < 0 ? "(" + chu(x) + ")" : chu(x));   /* số âm thì bọc ngoặc cho dễ đọc */
  const bang = (x, y) => { const a = px(x.t, x.m), b = px(y.t, y.m); return a.t === b.t && a.m === b.m; };

  /* gom 4 lựa chọn: 1 đúng + các đáp án nhiễu, bỏ trùng, xáo trộn */
  function boLuaChon(r, dung, nhieu) {
    const ds = [dung];
    nhieu.forEach((n) => { if (n && !ds.some((x) => bang(x, n))) ds.push(n); });
    let dem = 0;
    while (ds.length < 4 && dem++ < 40) {
      const t = px(dung.t + R(r, -3, 3), dung.m + chon(r, [0, 0, 1, -1]) || dung.m);
      if (t.m !== 0 && !ds.some((x) => bang(x, t))) ds.push(t);
    }
    const bon = ds.slice(0, 4);
    for (let i = bon.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [bon[i], bon[j]] = [bon[j], bon[i]]; }
    return { a: bon.map(chu), dung: bon.findIndex((x) => bang(x, dung)) };
  }

  /* ---------- các dạng bài theo chương ---------- */

  /* Chương I bài 1: nhận biết, so sánh, số đối, đổi thập phân */
  function dangSoHuuTi(r) {
    const k = R(r, 1, 4);
    if (k === 1) {
      const m1 = R(r, 2, 9), t1 = R(r, 1, m1 - 1), m2 = R(r, 2, 9), t2 = R(r, 1, m2 - 1);
      const x = px(-t1, m1), y = px(-t2, m2);
      if (bang(x, y)) return dangSoHuuTi(r);
      const lon = (x.t * y.m > y.t * x.m) ? x : y;
      const ds = [x, y];
      for (let i = ds.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [ds[i], ds[j]] = [ds[j], ds[i]]; }
      return { q: `So sánh ${chu(ds[0])} và ${chu(ds[1])}. Số nào LỚN HƠN?`,
        a: [chu(ds[0]), chu(ds[1]), "Hai số bằng nhau", "Không so sánh được"],
        dung: bang(ds[0], lon) ? 0 : 1,
        gt: `Quy đồng: ${chu(x)} = ${x.t * y.m}/${x.m * y.m}, ${chu(y)} = ${y.t * x.m}/${x.m * y.m}. Tử nào lớn hơn thì số đó lớn hơn. Với số âm, số gần 0 hơn là số lớn hơn.`,
        cd: "So sánh số hữu tỉ" };
    }
    if (k === 2) {
      const m = R(r, 2, 12), t = R(r, 1, 11) * dauNgauNhien(r);
      const x = px(t, m), doi = px(-t, m);
      const bo = boLuaChon(r, doi, [px(m, t), px(t, m)]);
      return { q: `Số đối của ${chu(x)} là số nào?`, a: bo.a, dung: bo.dung,
        gt: `Số đối của a là −a, hai số cộng lại bằng 0. Số đối của ${chu(x)} là ${chu(doi)}. Đừng nhầm với số nghịch đảo (lật ngược tử mẫu).`, cd: "Số đối" };
    }
    if (k === 3) {
      const cap = chon(r, [[0.75, 3, 4], [0.5, 1, 2], [0.25, 1, 4], [0.2, 1, 5], [0.6, 3, 5], [0.125, 1, 8], [0.4, 2, 5], [0.8, 4, 5]]);
      const am = dauNgauNhien(r);
      const so = (am < 0 ? "−" : "") + String(cap[0]).replace(".", ",");
      const dung = px(am * cap[1], cap[2]);
      const bo = boLuaChon(r, dung, [px(am * cap[2], cap[1]), px(am * cap[1] * 10, cap[2] * 10 + 1)]);
      return { q: `Viết ${so} dưới dạng phân số tối giản.`, a: bo.a, dung: bo.dung,
        gt: `${so} = ${am * Math.round(cap[0] * 1000)}/1000 rồi rút gọn, được ${chu(dung)}.`, cd: "Đổi số thập phân sang phân số" };
    }
    const m = R(r, 2, 9), t = R(r, 1, m - 1);
    return { q: `Trong các số sau, số nào KHÔNG bằng ${chu(px(-t, m))}?`,
      a: [`−${t * 2}/${m * 2}`, `${t}/(−${m})`, chu(px(t, m)), `−${t}/${m}`], dung: 2,
      gt: `${chu(px(t, m))} là số dương nên khác ${chu(px(-t, m))}. Ba đáp án kia đều bằng ${chu(px(-t, m))}: rút gọn, hoặc chuyển dấu âm từ mẫu lên tử.`,
      cd: "Phân số bằng nhau, dấu của phân số" };
  }

  /* Chương I bài 2: cộng, trừ, nhân, chia */
  function dangBonPhepTinh(r) {
    const k = R(r, 1, 4);
    const m1 = R(r, 2, 9), m2 = R(r, 2, 9);
    const x = px(R(r, 1, 9) * dauNgauNhien(r), m1), y = px(R(r, 1, 9) * dauNgauNhien(r), m2);
    if (k === 1) {
      const d = cong(x, y);
      const bo = boLuaChon(r, d, [px(x.t + y.t, x.m + y.m), px(x.t * y.m - y.t * x.m, x.m * y.m)]);
      return { q: `Tính ${chu(x)} + ${ng(y)}`, a: bo.a, dung: bo.dung,
        gt: `Quy đồng mẫu ${x.m * y.m}: ${x.t * y.m}/${x.m * y.m} + ${y.t * x.m}/${x.m * y.m} = ${chu(d)}. Cộng phân số KHÔNG phải cộng tử với tử và mẫu với mẫu.`, cd: "Cộng trừ số hữu tỉ" };
    }
    if (k === 2) {
      const d = tru(x, y);
      const bo = boLuaChon(r, d, [cong(x, y), tru(y, x)]);
      return { q: `Tính ${chu(x)} − (${chu(y)})`, a: bo.a, dung: bo.dung,
        gt: `Trừ một số là cộng với số đối: ${chu(x)} − (${chu(y)}) = ${chu(x)} + ${chu(px(-y.t, y.m))} = ${chu(d)}. Cẩn thận dấu khi số trừ là số âm.`, cd: "Cộng trừ số hữu tỉ" };
    }
    if (k === 3) {
      const d = nhan(x, y);
      const bo = boLuaChon(r, d, [px(-d.t, d.m), cong(x, y)]);
      return { q: `Tính ${chu(x)} · ${ng(y)}`, a: bo.a, dung: bo.dung,
        gt: `Nhân tử với tử, mẫu với mẫu: ${x.t * y.t}/${x.m * y.m} = ${chu(d)}. Dấu: hai số cùng dấu ra dương, khác dấu ra âm.`, cd: "Nhân số hữu tỉ" };
    }
    const d = chia(x, y);
    const bo = boLuaChon(r, d, [nhan(x, y), px(-d.t, d.m)]);
    return { q: `Tính ${chu(x)} : ${ng(y)}`, a: bo.a, dung: bo.dung,
      gt: `Chia là nhân với nghịch đảo: ${chu(x)} · ${chu(px(y.m, y.t))} = ${chu(d)}.`, cd: "Chia số hữu tỉ" };
  }

  /* Chương I bài 3: luỹ thừa */
  function dangLuyThua(r) {
    const k = R(r, 1, 4);
    if (k === 1) {
      const m = R(r, 2, 5), t = R(r, 1, 4) * dauNgauNhien(r), n = R(r, 2, 3);
      const x = px(t, m);
      if (x.m === 1) return dangLuyThua(r);   /* rút gọn thành số nguyên thì đề mất ý nghĩa, sinh lại */
      const d = px(Math.pow(x.t, n), Math.pow(x.m, n));
      const bo = boLuaChon(r, d, [px(x.t * n, x.m * n), px(Math.abs(d.t), d.m)]);
      return { q: `Tính (${chu(x)})^${n}`, a: bo.a, dung: bo.dung,
        gt: `(a/b)^n = a^n / b^n = ${Math.pow(x.t, n)}/${Math.pow(x.m, n)} = ${chu(d)}. Số âm luỹ thừa chẵn ra dương, luỹ thừa lẻ ra âm.`, cd: "Luỹ thừa của phân số" };
    }
    if (k === 2) {
      const c = R(r, 2, 5), a1 = R(r, 2, 4);
      let b1 = R(r, 2, 3); if (b1 === a1) b1 = a1 === 2 ? 3 : 2;   /* a1 = b1 thì cộng mũ và nhân mũ ra cùng kết quả */
      return { q: `Rút gọn ${c}^${a1} · ${c}^${b1}`, a: [`${c}^${a1 + b1}`, `${c}^${a1 * b1}`, `${c * c}^${a1 + b1}`, `${c}^${Math.abs(a1 - b1)}`], dung: 0,
        gt: `Nhân hai luỹ thừa cùng cơ số: giữ cơ số, CỘNG số mũ → ${c}^${a1 + b1}. Nhân số mũ là quy tắc của luỹ thừa của luỹ thừa, khác hẳn.`, cd: "Nhân luỹ thừa cùng cơ số" };
    }
    if (k === 3) {
      const c = R(r, 2, 5), a1 = R(r, 4, 6), b1 = R(r, 1, 3);
      const mu1 = (n) => (n === 1 ? String(c) : `${c}^${n}`);
      const saiKhac = a1 - b1 === Math.round(a1 / b1) ? a1 - b1 + 2 : Math.round(a1 / b1);
      return { q: `Tính ${c}^${a1} : ${c}^${b1}`, a: [mu1(a1 - b1), `${c}^${a1 + b1}`, `1^${a1 - b1}`, mu1(saiKhac)], dung: 0,
        gt: `Chia hai luỹ thừa cùng cơ số: giữ cơ số, TRỪ số mũ → ${mu1(a1 - b1)}${a1 - b1 === 1 ? " (vì c^1 = c)" : ""}.`, cd: "Chia luỹ thừa cùng cơ số" };
    }
    const n = R(r, 2, 4), mu = 3;   /* mũ 2 thì nhân mũ và cộng mũ ra cùng kết quả, nên dùng mũ 3 */
    return { q: `Tính (${n}^${mu})^2`, a: [`${n}^${mu * 2}`, `${n}^${mu + 2}`, `${n}^${mu}`, `${n * 2}^${mu}`], dung: 0,
      gt: `Luỹ thừa của luỹ thừa: NHÂN hai số mũ → ${n}^${mu * 2}. Đây là chỗ hay nhầm với quy tắc cộng số mũ khi nhân.`, cd: "Luỹ thừa của luỹ thừa" };
  }

  /* Chương I bài 4: thứ tự thực hiện phép tính và quy tắc chuyển vế */
  function dangThuTuChuyenVe(r) {
    const k = R(r, 1, 3);
    if (k === 1) {
      const a1 = R(r, 2, 9), b1 = R(r, 2, 6), c1 = R(r, 2, 6) * -1;
      const d = a1 + b1 * c1;
      const so = (n) => (n < 0 ? "−" + Math.abs(n) : String(n));
      return { q: `Tính ${a1} + ${b1} · (${so(c1)})`, a: [so(d), so((a1 + b1) * c1), so(a1 + b1 + c1), so(a1 - b1 * c1)], dung: 0,
        gt: `Nhân chia làm trước cộng trừ: ${b1} · (${so(c1)}) = ${so(b1 * c1)}, rồi ${a1} + (${so(b1 * c1)}) = ${so(d)}. Không được cộng ${a1} + ${b1} trước.`, cd: "Thứ tự phép tính" };
    }
    if (k === 2) {
      const m1 = R(r, 2, 6), m2 = R(r, 2, 6);
      const x = px(R(r, 1, 5), m1), y = px(R(r, 1, 5) * dauNgauNhien(r), m2);
      const d = tru(y, x);
      const bo = boLuaChon(r, d, [cong(y, x), tru(x, y)]);
      return { q: `Tìm x, biết x + ${ng(x)} = ${ng(y)}`, a: bo.a, dung: bo.dung,
        gt: `Chuyển ${chu(x)} sang vế phải và ĐỔI DẤU: x = ${chu(y)} − ${chu(x)} = ${chu(d)}. Quên đổi dấu là lỗi hay gặp nhất.`, cd: "Quy tắc chuyển vế" };
    }
    const m = R(r, 2, 5), t = R(r, 1, 3);
    const x = px(-t, m), binh = nhan(x, x);
    const d = tru({ t: 1, m: 1 }, binh);
    const bo = boLuaChon(r, d, [cong({ t: 1, m: 1 }, binh), tru({ t: 1, m: 1 }, px(-binh.t, binh.m))]);
    return { q: `Tính 1 − (${chu(x)})^2`, a: bo.a, dung: bo.dung,
      gt: `Luỹ thừa trước: (${chu(x)})^2 = ${chu(binh)} (số mũ chẵn nên kết quả dương). Rồi 1 − ${chu(binh)} = ${chu(d)}.`, cd: "Thứ tự phép tính" };
  }

  /* Tuần nào luyện dạng nào — bám chương Toán đang học.
     Từ tuần 5 trở đi trộn lại cả bốn dạng để ôn, cho tới khi có lộ trình mới. */
  const THEO_TUAN = {
    1: [dangSoHuuTi],
    2: [dangSoHuuTi, dangBonPhepTinh, dangBonPhepTinh],
    3: [dangBonPhepTinh, dangLuyThua, dangLuyThua],
    4: [dangLuyThua, dangThuTuChuyenVe, dangThuTuChuyenVe],
  };
  const TRON = [dangSoHuuTi, dangBonPhepTinh, dangLuyThua, dangThuTuChuyenVe];

  const chuDeTuan = (t) => (t <= 1 ? "Số hữu tỉ" : t === 2 ? "Cộng trừ nhân chia số hữu tỉ"
    : t === 3 ? "Luỹ thừa của số hữu tỉ" : t === 4 ? "Thứ tự phép tính và chuyển vế" : "Ôn tập chương I");

  function taoDe(tuan, seed, soCau) {
    const r = tao(seed + "|" + tuan);
    const ds = THEO_TUAN[tuan] || TRON;
    const out = [];
    let dem = 0;
    while (out.length < (soCau || 5) && dem++ < 60) {
      const c = chon(r, ds)(r);
      if (!out.some((x) => x.q === c.q)) out.push(c);   /* không lặp câu trong cùng một lượt */
    }
    return out;
  }

  return { taoDe, chuDeTuan };
})();
