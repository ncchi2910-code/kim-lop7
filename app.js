/* Kim Lớp 7 — app chính. Không cần sửa file này khi thêm tuần mới. */
(function () {
  /* Lưới an toàn: nếu config.js hỏng (hay gặp khi sửa tay rồi lỡ xoá dấu ngoặc, dấu phẩy)
     thì báo rõ ràng thay vì để trang trắng trơn không ai hiểu vì sao. */
  if (!window.KIM_CONFIG || !window.KIM_CONFIG.WEEK1_START) {
    document.getElementById("app").innerHTML =
      '<div style="max-width:520px;margin:40px auto;background:#fff;border:2px solid #d64545;border-radius:20px;padding:22px;font-family:system-ui,sans-serif">' +
      '<h2 style="margin:0 0 10px;color:#d64545">Trang chưa chạy được</h2>' +
      '<p style="margin:0 0 10px">File <code>config.js</code> không nạp được, thường là do lúc sửa tay bị mất một dấu ngoặc kép, dấu phẩy hoặc dấu đóng chú thích.</p>' +
      '<p style="margin:0 0 10px">Cách xem lỗi: bấm chuột phải vào trang → Kiểm tra (Inspect) → thẻ Console, dòng đỏ sẽ chỉ đúng chỗ sai.</p>' +
      '<p style="margin:0;color:#8a6d57;font-size:13px">Kim cứ báo mẹ, tiến độ đã làm không mất đâu.</p></div>';
    return;
  }
  const C = window.KIM_CONFIG;
  const W = window.KIM_WEEKS || {};
  const $ = (s) => document.querySelector(s);
  const app = $("#app");
  const KEY = "kim7.v1";

  /* ---------- trạng thái ---------- */
  const DB = window.KimDongBo;
  const SOAN = window.KIM_SOAN || {};
  const DV = window.KIM_DONG_VIEN || [];
  const TIN = window.KIM_TIN || [];
  const GIANG = window.KIM_GIANG || {};
  const soanKey = (t, i) => "t" + t + "-s" + i;
  const defaultState = () => ({ xu: 0, heo: 0, streak: { count: 0, last: null }, luot: {}, doc: {}, dong: {}, soan: {}, ngay: {}, demThuong: 0 });
  let S = load();
  function load() { try { const r = localStorage.getItem(KEY); return r ? Object.assign(defaultState(), JSON.parse(r)) : defaultState(); } catch (e) { return defaultState(); } }
  let luuLoi = false;
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(S)); luuLoi = localStorage.getItem(KEY) === null; }
    catch (e) { luuLoi = true; }
    if (DB && DB.co() && DB.layMa()) DB.henDay(() => S, () => { if (location.hash.indexOf("phu-huynh") > -1) route(); });
    return !luuLoi;
  }
  const canhBaoLuu = () => luuLoi ? `<div class="card tight" style="border:2px solid var(--bad);background:#fff0f0"><b style="color:var(--bad)">⚠️ Máy này không lưu được tiến độ</b><div class="small" style="margin-top:4px">Trình duyệt đang chặn bộ nhớ (hay gặp khi mở ở chế độ riêng tư/ẩn danh). Kim hãy mở lại trang ở cửa sổ thường, nếu không thì làm xong sẽ mất hết.</div></div>` : "";

  /* ---------- ngày tháng ---------- */
  const todayStr = () => { const d = new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); };
  function parseDate(s) { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); }
  function tuanHienTai() {
    const start = parseDate(C.WEEK1_START); const now = parseDate(todayStr());
    const diff = Math.floor((now - start) / 86400000);
    if (diff < 0) return 1;
    return Math.min(C.TONG_TUAN, Math.floor(diff / 7) + 1);
  }
  function thuHomNay() { const d = new Date().getDay(); return d === 0 ? 8 : d + 1; } /* 2..8 */
  function ngayCuaTuan(t, thu) { const d = parseDate(C.WEEK1_START); d.setDate(d.getDate() + (t - 1) * 7 + (thu - 2)); return d; }
  const fmt = (d) => String(d.getDate()).padStart(2, "0") + "/" + String(d.getMonth() + 1).padStart(2, "0");
  const money = (n) => n.toLocaleString("vi-VN") + "đ";

  /* ---------- tiện ích ---------- */
  const tuanCoNoiDung = () => Object.keys(W).map(Number).sort((a, b) => a - b);
  const luotKey = (t, thu) => "t" + t + "-d" + thu;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  function monInfo(m) { return C.MON[m] || { ten: m, icon: "📘", mau: "#888", nen: "#eee" }; }
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

  /* Việc Kim phải làm trong ngày: bài soạn có soanToi = thu, và lượt ôn của thu đó */
  function viecCuaNgay(t, thu) {
    const w = W[t]; if (!w) return { tong: 0, xong: 0 };
    let tong = 0, xong = 0;
    (SOAN[t] || []).forEach((s, i) => { if (s.soanToi === thu) { tong++; if (S.soan[soanKey(t, i)]) xong++; } });
    const n = w.ngay.find((x) => x.thu === thu);
    if (n) { tong++; if (S.luot[luotKey(t, thu)]) xong++; }
    return { tong, xong };
  }
  const xongHetHomNay = (t, thu) => { const v = viecCuaNgay(t, thu); return v.tong > 0 && v.xong === v.tong; };

  function tienDoTuan(t) {
    const w = W[t]; if (!w) return { xong: 0, tong: 0, dong: !!S.dong[t] };
    let xong = 0; w.ngay.forEach((n) => { if (S.luot[luotKey(t, n.thu)]) xong++; });
    return { xong, tong: w.ngay.length, dong: !!S.dong[t] };
  }
  function loiCuaTuan(t) {
    const w = W[t]; if (!w) return [];
    const out = [];
    w.ngay.forEach((n) => { const r = S.luot[luotKey(t, n.thu)]; if (r) r.sai.forEach((s) => out.push(Object.assign({ mon: n.mon, thu: n.thu }, s))); });
    return out;
  }
  function topChuDe(loi, k) {
    const m = {}; loi.forEach((l) => { m[l.cd] = (m[l.cd] || 0) + 1; });
    return Object.entries(m).sort((a, b) => b[1] - a[1]).slice(0, k);
  }
  function capNhatStreak() {
    const t = todayStr();
    if (S.streak.last === t) return;
    if (S.streak.last) {
      const d = (parseDate(t) - parseDate(S.streak.last)) / 86400000;
      S.streak.count = d === 1 ? S.streak.count + 1 : (d > 1 ? 1 : S.streak.count);
    } else S.streak.count = 1;
    S.streak.last = t;
  }

  /* ---------- khung ---------- */
  function header(sub) {
    return `<div class="top">
      <div class="logo">📚</div>
      <div class="grow"><h1>Kim Lớp 7</h1><div class="muted">${sub || "Học cùng trường, mỗi tuần một chút"}</div></div>
      <div class="badges"><span class="badge">🔥 ${S.streak.count} ngày</span><span class="badge">⭐ ${S.xu} xu</span><span class="badge">🐷 ${money(S.heo)}</span></div>
    </div>`;
  }
  function setNav(k) { document.querySelectorAll("nav.bottom a").forEach((a) => a.classList.toggle("on", a.dataset.nav === k)); }

  /* ---------- trang: hôm nay ---------- */
  function viewHome() {
    setNav("home");
    const t = tuanHienTai(), thu = thuHomNay(), w = W[t];
    let main = "";

    /* Hôm nay ở trường (theo thời khoá biểu trong config.js) */
    const lh = (C.LICH_HOC || {})[thu];
    if (lh && (lh.sang.length || lh.chieu.length)) {
      main += `<div class="card tight"><b>🏫 Hôm nay ở trường</b>` +
        (lh.sang.length ? `<div class="small" style="margin-top:7px"><span class="pill">Sáng</span> ${esc(lh.sang.join(" · "))}</div>` : "") +
        (lh.chieu.length ? `<div class="small" style="margin-top:5px"><span class="pill">Chiều</span> ${esc(lh.chieu.join(" · "))}</div>` : "") + `</div>`;
    } else {
      main += `<div class="card tight"><b>🏫 Hôm nay Kim được nghỉ</b><div class="muted small" style="margin-top:4px">Cuối tuần rồi — nghỉ ngơi và đóng tuần cùng mẹ.</div></div>`;
    }

    if (!w) {
      const co = tuanCoNoiDung();
      main += `<div class="card"><h3>Tuần ${t} chưa có nội dung</h3><p class="muted" style="margin-top:6px">Mẹ cần thêm file <code>tuan-${String(t).padStart(2, "0")}.js</code>. Trong lúc chờ, Kim có thể làm lại các tuần đã có.</p>
        <div style="margin-top:12px"><a class="btn sm" href="#/tuan/${co[co.length - 1]}">Mở tuần ${co[co.length - 1]}</a></div></div>`;
    } else {
      const td = tienDoTuan(t);
      const sl = SOAN[t] || [];
      const chuaSoan = sl.map((s, i) => ({ s, i })).filter((x) => !S.soan[soanKey(t, x.i)]);
      const soanToiNay = chuaSoan.filter((x) => x.s.soanToi === thu);
      const ngay = w.ngay.find((n) => n.thu === thu);
      const viec = [];

      soanToiNay.forEach((x) => { const mi = monInfo(x.s.mon);
        viec.push(`<a class="day" href="#/soan/${t}/${x.i}"><div class="icon-box" style="background:${mi.nen}">📖</div><div class="grow"><div class="muted">Soạn trước · mai học ${esc(x.s.hocVao || "")}</div><b>${esc(x.s.bai)}</b></div><span class="pill">10 phút</span></a>`); });

      if (ngay) { const r = S.luot[luotKey(t, thu)]; const mi = monInfo(ngay.mon);
        viec.push(`<a class="day ${r ? "done" : ""}" href="#/lam/${t}/${thu}"><div class="icon-box" style="background:${mi.nen}">${mi.icon}</div><div class="grow"><div class="muted">Ôn lại bài vừa học hôm nay</div><b>${esc(ngay.ten)}</b></div>${r ? `<div class="score" style="color:${r.diem / r.tong >= 0.7 ? "var(--ok)" : "#b45309"}">${r.diem}/${r.tong}</div>` : '<span class="pill">15 phút</span>'}</a>`); }

      const ok = td.xong === td.tong;
      const vn = viecCuaNgay(t, thu);
      if (vn.tong > 0 && vn.xong === vn.tong) {
        const g = S.ngay[todayStr()];
        main += `<a class="card" href="#/thuong" style="text-align:center;border:2px dashed #ffb454;background:linear-gradient(160deg,#fffaf0,#fff3e0)">
          <div class="big pop">🎁</div>
          <p style="margin-top:8px"><b>${g ? "Phần thưởng hôm nay" : "Kim xong hết việc hôm nay rồi!"}</b></p>
          <p class="muted small">${g ? `Đã nhận ${money(g.tien)} · chạm để xem lại` : "Chạm để mở phần thưởng: một lời nhắn, một tin Anh tài, và một thẻ cào 🐷"}</p></a>`;
      }
      if (viec.length) {
        main += `<h2>🌙 Việc tối nay</h2><p class="muted small" style="margin:-6px 0 10px">Khoảng ${viec.length * 12} phút. Làm xong giữ được chuỗi ngày 🔥.</p>` + viec.join("");
      } else if (ok && !td.dong) {
        main += `<div class="card"><div class="row"><div class="icon-box" style="background:#fff7ed">🎁</div><div class="grow"><div class="muted">Cuối tuần · Tuần ${t}</div><h3>Đóng tuần cùng mẹ</h3></div></div><p class="small" style="margin:12px 0">Đủ 5 lượt rồi. Xem lại chỗ sai với mẹ, làm 5 câu chốt và cào thẻ.</p><a class="btn block" href="#/dong/${t}">Đóng tuần →</a></div>`;
      } else if (td.dong) {
        main += `<div class="card" style="text-align:center"><div class="big">🏆</div><p style="margin-top:8px"><b>Tuần ${t} đã đóng!</b></p><p class="muted small">Nghỉ ngơi, hoặc làm lại lượt nào Kim thấy chưa chắc.</p><div style="margin-top:12px"><a class="btn sm ghost" href="#/tuan/${t}">Xem tuần ${t}</a></div></div>`;
      } else {
        main += `<div class="card"><h3>Tối nay Kim được nghỉ 🌿</h3><p class="small" style="margin-top:6px">Không có bài soạn hay lượt ôn nào cho hôm nay. Nếu muốn, Kim làm lại một lượt cũ để nhớ lâu hơn.</p><div style="margin-top:12px"><a class="btn sm ghost" href="#/tuan/${t}">Xem tuần ${t}</a></div></div>`;
      }

      main += `<div class="card tight row"><div class="grow"><b>Tuần ${t} · ${esc(w.ten)}</b><div class="muted">${td.xong}/${td.tong} lượt ôn · ${sl.length - chuaSoan.length}/${sl.length} bài soạn</div></div><a class="btn sm ghost" href="#/tuan/${t}">Xem tuần</a></div>`;
    }

    const kt = C.KIEM_TRA.find((k) => k.tuan >= t);
    const ktHtml = kt ? `<div class="card tight"><div class="row"><div class="grow"><b>Đường đến ${kt.ten}</b><div class="muted">Còn ${kt.tuan - t} tuần (tuần ${kt.tuan})</div></div><span class="pill">Tuần ${t}/${C.TONG_TUAN}</span></div><div class="bar" style="margin-top:10px"><i style="width:${Math.round((t / kt.tuan) * 100)}%"></i></div></div>` : "";
    app.innerHTML = header(`${C.THU[thu]}, ${fmt(new Date())} · Tuần ${t}`) + canhBaoLuu() + main + ktHtml + `<p class="muted" style="text-align:center;margin-top:18px">Học mỗi ngày một chút 🌱</p>`;
  }

  /* ---------- trang: lộ trình ---------- */
  function viewLoTrinh() {
    setNav("lotrinh");
    const cur = tuanHienTai(); const co = tuanCoNoiDung(); const maxShow = Math.min(C.TONG_TUAN, (co[co.length - 1] || 0) + 2);
    let list = "";
    for (let t = 1; t <= maxShow; t++) {
      const w = W[t]; const d0 = ngayCuaTuan(t, 2);
      if (!w) { list += `<div class="week locked"><div class="n">Tuần ${t}</div><div class="grow"><div class="muted">từ ${fmt(d0)} · sắp có</div></div>🔒</div>`; continue; }
      const td = tienDoTuan(t);
      const dots = w.ngay.map((n) => { const r = S.luot[luotKey(t, n.thu)]; return `<span class="dot ${r ? (r.diem / r.tong >= 0.7 ? "ok" : "half") : ""}"></span>`; }).join("");
      const kt = C.KIEM_TRA.find((k) => k.tuan === t);
      list += `<a class="week ${t === cur ? "cur" : ""}" href="#/tuan/${t}"><div class="n">Tuần ${t}</div><div class="grow"><div><b>${w.icon} ${esc(w.ten)}</b> ${t === cur ? '<span class="pill">tuần này</span>' : ""} ${kt ? '<span class="pill">📝 ' + kt.ten + "</span>" : ""}</div><div class="muted">từ ${fmt(d0)}</div></div><div class="dots">${dots}</div><span>${td.dong ? "🏆" : "›"}</span></a>`;
    }
    app.innerHTML = header("Lộ trình năm học") + `<div class="weeks">${list}</div><p class="muted" style="margin-top:14px">Chấm xanh: lượt đạt từ 70%. Chấm cam: đã làm nhưng dưới 70%. 🏆: tuần đã đóng.</p>`;
  }

  /* ---------- trang: tuần ---------- */
  function viewTuan(t) {
    setNav("lotrinh");
    const w = W[t]; if (!w) { location.hash = "#/lo-trinh"; return; }
    const td = tienDoTuan(t);
    const subj = w.monHoc.map((m, i) => `<div class="card subj" data-toggle="1"><div class="row"><span style="font-size:22px">${m.icon}</span><div class="grow"><b>${esc(m.mon)}</b><div class="muted">${esc(m.hoc.slice(0, 70))}…</div></div><span class="muted">▾</span></div><div class="body"><p class="small">${esc(m.hoc)}</p><div class="vap"><b>Chỗ dễ vấp:</b> ${esc(m.vap)}</div></div></div>`).join("");
    const days = w.ngay.slice().sort((a, b) => a.thu - b.thu).map((n) => { const r = S.luot[luotKey(t, n.thu)]; const mi = monInfo(n.mon);
      return `<a class="day ${r ? "done" : ""}" href="#/lam/${t}/${n.thu}"><div class="icon-box" style="background:${mi.nen}">${mi.icon}</div><div class="grow"><div class="muted">${C.THU[n.thu]} · ${fmt(ngayCuaTuan(t, n.thu))}</div><b>${esc(n.ten)}</b></div>${r ? `<div class="score" style="color:${r.diem / r.tong >= 0.7 ? "var(--ok)" : "#b45309"}">${r.diem}/${r.tong}</div>` : '<span class="pill">chưa làm</span>'}</a>`; }).join("");
    const doc = (w.docTruoc || []).map((d, i) => { const k = "t" + t + "-" + i; const seen = S.doc[k];
      return `<div class="card subj ${seen ? "" : ""}" data-toggle="1" data-doc="${k}"><div class="row"><span style="font-size:22px">${seen ? "✅" : "📖"}</span><div class="grow"><b>${esc(d.tieuDe)}</b><div class="muted">${esc(d.mon)} · ${seen ? "đã đọc" : "chưa đọc"}</div></div><span class="muted">▾</span></div><div class="body"><p class="small">${esc(d.noiDung)}</p></div></div>`; }).join("");
    const soanList = SOAN[t] || [];
    const soan = soanList.map((s, i) => ({ s, i })).sort((a, b) => (a.s.soanToi === 8 ? 1 : a.s.soanToi + 1) - (b.s.soanToi === 8 ? 1 : b.s.soanToi + 1))
      .map(({ s, i }) => { const r = S.soan[soanKey(t, i)]; const mi = monInfo(s.mon);
      return `<a class="day ${r ? "done" : ""}" href="#/soan/${t}/${i}"><div class="icon-box" style="background:${mi.nen}">${mi.icon}</div><div class="grow"><div class="muted">Soạn tối ${esc(C.THU[s.soanToi] || "")} · học ${esc(s.hocVao || "")}</div><b>${esc(s.bai)}</b></div>${r ? '<span class="pill" style="color:var(--ok)">✓ xong</span>' : '<span class="pill">10 phút</span>'}</a>`; }).join("");
    const ok = td.xong === td.tong;
    app.innerHTML = header(`Tuần ${t} · ${w.icon} ${esc(w.ten)}`) +
      `<div class="card tight row"><div class="grow"><b>Tiến độ tuần</b><div class="bar" style="margin-top:8px"><i style="width:${Math.round((td.xong / td.tong) * 100)}%"></i></div></div><span class="pill">${td.xong}/${td.tong}</span></div>
      <h2>📌 Tuần này học gì</h2>${subj}<p class="note muted">Môn khác: ${esc(w.monKhac || "")}</p>
      <h2>📖 Soạn bài</h2><p class="muted small" style="margin:-4px 0 10px">Làm trước tiết học trên lớp, mỗi bài khoảng 10 phút, mở sách giáo khoa bên cạnh.</p>${soan || '<p class="muted">Tuần này chưa có bài soạn.</p>'}
      <h2>✏️ Kiểm tra ngày</h2>${days}
      ${doc ? `<h2>🔭 Đọc trước tuần sau</h2>${doc}` : ""}
      <h2>🎁 Đóng tuần</h2>
      <div class="card">${td.dong ? `<p>Tuần ${t} đã đóng ngày ${S.dong[t].luc}. Thẻ cào: <b>${money(S.dong[t].theCao)}</b> 🐷</p>` : `<p class="small">Đủ 5 lượt kiểm tra, xem lại chỗ sai cùng mẹ, rồi làm 5 câu chốt để nhận thẻ cào.</p><div style="margin-top:12px"><a class="btn ${ok ? "" : "ghost"}" href="${ok ? "#/dong/" + t : "#"}" ${ok ? "" : 'onclick="return false"'}>${ok ? "Đóng tuần →" : `Còn ${td.tong - td.xong} lượt`}</a></div>`}</div>`;
    app.querySelectorAll("[data-toggle]").forEach((el) => el.addEventListener("click", () => { el.classList.toggle("open"); const k = el.dataset.doc; if (k && !S.doc[k]) { S.doc[k] = true; save(); } }));
  }

  /* ---------- trang: giảng lại cho dễ hiểu ---------- */
  function viewGiang(ma) {
    setNav("lotrinh");
    const g = GIANG[ma]; if (!g) { location.hash = "#/"; return; }
    const mi = monInfo(g.mon);
    const phan = g.phan.map((p) => {
      let b = `<div class="card"><h3>${esc(p.ten)}</h3>`;
      (p.doan || []).forEach((d) => { b += `<p style="margin-top:8px">${esc(d)}</p>`; });
      (p.buoc || []).forEach((x) => {
        b += `<div class="buoc"><div class="so">${x.so}</div><div class="grow"><b>${esc(x.ten)}</b><div class="small" style="margin-top:3px">${esc(x.de)}</div><div class="vd">${esc(x.vd)}</div></div></div>`;
      });
      (p.kn || []).forEach((x) => {
        b += `<div class="buoc"><div class="so" style="background:${mi.nen};color:${mi.mau}">•</div><div class="grow"><b>${esc(x.ten)}</b><div class="small" style="margin-top:3px">${esc(x.de)}</div><div class="vd">${esc(x.vd)}</div></div></div>`;
      });
      if (p.hop) b += `<div class="hop"><b>${esc(p.hop.nhan)}</b>${esc(p.hop.chu)}</div>`;
      return b + `</div>`;
    }).join("");
    const bang = (g.doiChieu || []).map(([a, c]) => `<tr><td style="width:46%"><i>${esc(a)}</i></td><td><b>${esc(c)}</b></td></tr>`).join("");
    const hoi = (g.tuKiemTra || []).map((x, i) => `<details class="tkt"><summary>${i + 1}. ${esc(x.q)}</summary><div class="dap">${esc(x.a)}</div></details>`).join("");
    app.innerHTML = header("Giảng lại cho dễ hiểu") +
      `<div class="card"><div class="row"><div class="icon-box" style="background:${mi.nen}">💡</div><div class="grow"><b>${esc(g.tieuDe)}</b><div class="muted">📕 ${esc(g.sgk)}</div></div></div>
        <p style="margin-top:12px;padding:12px 14px;border-radius:14px;background:#fff7ed"><b>Bài này thật ra nói gì?</b><br>${esc(g.motCau)}</p></div>
      ${phan}
      ${bang ? `<div class="card"><h3>Sách viết thế này → hiểu là</h3><table style="margin-top:8px">${bang}</table></div>` : ""}
      ${g.meo ? `<div class="card"><h3>🧠 Mẹo nhớ</h3><p style="margin-top:8px">${esc(g.meo)}</p></div>` : ""}
      ${hoi ? `<div class="card"><h3>✅ Kim tự kiểm tra</h3><p class="muted small">Đọc câu hỏi, tự trả lời trong đầu rồi mới chạm để xem đáp án.</p><div style="margin-top:8px">${hoi}</div></div>` : ""}
      <div style="text-align:center;margin-top:14px"><a class="btn ghost" href="#/">Về trang chủ</a></div>`;
  }

  /* ---------- trang: phần thưởng cuối ngày ---------- */
  function viewThuong() {
    setNav("home");
    const t = tuanHienTai(), thu = thuHomNay(), hn = todayStr();
    if (!xongHetHomNay(t, thu) && !S.ngay[hn]) {
      const v = viecCuaNgay(t, thu);
      app.innerHTML = header("Phần thưởng cuối ngày") + `<div class="card" style="text-align:center"><div class="big">🔒</div><p style="margin-top:10px"><b>Chưa mở được</b></p><p class="small">${v.tong ? `Kim còn ${v.tong - v.xong} việc nữa của hôm nay.` : "Hôm nay không có việc nào, nên chưa có phần thưởng."}</p><div style="margin-top:14px"><a class="btn" href="#/">Về trang chủ</a></div></div>`;
      return;
    }
    if (!S.ngay[hn]) {
      const lo = C.THE_CAO_NGAY || { min: 5000, max: 20000, buoc: 1000 };
      const b = Math.floor((lo.max - lo.min) / lo.buoc) + 1;
      const tien = lo.min + Math.floor(Math.random() * b) * lo.buoc;
      const d = S.demThuong || 0;
      S.ngay[hn] = { tien, dv: DV.length ? d % DV.length : -1, tin: TIN.length ? d % TIN.length : -1, cao: false };
      S.demThuong = d + 1; S.heo += tien; capNhatStreak(); save();
    }
    const g = S.ngay[hn];
    const cau = g.dv >= 0 ? DV[g.dv] : "Hôm nay Kim làm tốt lắm.";
    const tin = g.tin >= 0 ? TIN[g.tin] : null;
    app.innerHTML = header(`${C.THU[thu]}, ${fmt(new Date())} · phần thưởng`) +
      `<div class="card" style="text-align:center;background:linear-gradient(160deg,#fffaf0,#ffeede)"><div class="big pop">🎉</div><h3 style="margin-top:8px">Xong hết việc hôm nay!</h3><p class="muted small">🔥 chuỗi ${S.streak.count} ngày</p></div>
      <div class="card"><h3>💌 Lời nhắn cho Kim</h3><p style="margin-top:8px;font-size:16px">${esc(cau)}</p></div>
      <div class="card"><h3>🐷 Thẻ cào hôm nay</h3><p class="muted small">Chạm để cào</p>
        <div class="scratch ${g.cao ? "open" : ""}" id="scratch" style="margin-top:8px"><div class="big">${money(g.tien)}</div><div class="cover">👆 Cào tại đây</div></div>
        <p class="muted small" style="margin-top:10px">Đã cộng vào heo đất. Heo đang có ${money(S.heo)}.</p></div>
      ${tin ? `<div class="card"><h3>🎤 Anh trai vượt ngàn chông gai</h3><p style="margin-top:8px"><b>${esc(tin.tieuDe)}</b></p><p class="small" style="margin-top:6px">${esc(tin.noiDung)}</p></div>` : ""}
      <div style="text-align:center;margin-top:14px"><a class="btn" href="#/">Về trang chủ</a> <a class="btn ghost" href="#/tuan/${t}">Xem tuần ${t}</a></div>`;
    const sc = $("#scratch"); if (sc) sc.addEventListener("click", () => { sc.classList.add("open"); if (!S.ngay[hn].cao) { S.ngay[hn].cao = true; save(); } });
  }

  /* ---------- trang: soạn bài ---------- */
  function viewSoan(t, i) {
    setNav("lotrinh");
    const s = (SOAN[t] || [])[i]; if (!s) { location.hash = "#/tuan/" + t; return; }
    const k = soanKey(t, i); const r = S.soan[k]; const mi = monInfo(s.mon);
    const viec = s.viec.map((v, j) => `<label class="check"><input type="checkbox" data-v="${j}" ${r ? "checked" : ""}><span>${esc(v)}</span></label>`).join("");
    const hoi = s.cauHoi.map((q, j) => `<div style="margin-top:10px"><b class="small">${j + 1}. ${esc(q)}</b><textarea class="ans" data-q="${j}" rows="2" placeholder="Kim trả lời ngắn (1–2 dòng)…">${r ? esc(r.tl[j] || "") : ""}</textarea></div>`).join("");
    const nho = s.nho.map((n) => `<li>${esc(n)}</li>`).join("");
    app.innerHTML = header(`Tuần ${t} · Soạn bài`) +
      `<div class="card"><div class="row"><div class="icon-box" style="background:${mi.nen}">${mi.icon}</div><div class="grow"><b>${esc(s.bai)}</b><div class="muted">📕 ${esc(s.sgk)}</div></div></div><p class="small" style="margin-top:10px;padding:9px 12px;border-radius:12px;background:#fff7ed">🗓️ Trên lớp Kim học bài này vào <b>${esc(s.hocVao || "")}</b> — nên soạn vào <b>tối ${esc(C.THU[s.soanToi] || "")}</b>.</p></div>
      <div class="card"><h3>1. Mở sách và làm theo</h3><div style="margin-top:8px">${viec}</div></div>
      <div class="card"><h3>2. Kim tự trả lời</h3><p class="muted small">Không cần đúng hết. Viết theo cách hiểu của Kim, mẹ sẽ đọc ở Góc của mẹ.</p>${hoi}</div>
      <div class="card"><h3>3. Cần nhớ</h3><ul class="nho">${nho}</ul></div>
      ${s.giang && GIANG[s.giang] ? `<a class="card" href="#/giang/${s.giang}" style="display:flex;align-items:center;gap:12px;border-left:5px solid var(--accent2)"><div class="icon-box" style="background:#ffe3ec">💡</div><div class="grow"><b>Sách khó hiểu quá?</b><div class="muted small">Đọc bản giảng lại bằng lời dễ hiểu, có ví dụ đời thường</div></div><span class="muted">›</span></a>` : ""}
      <div class="card" style="text-align:center">${r ? `<p class="small">Đã soạn ngày ${r.luc}. Sửa câu trả lời rồi bấm lưu lại cũng được.</p>` : `<p class="small">Xong ba phần trên thì bấm nút. +${C.XU_SOAN_BAI} xu.</p>`}<div style="margin-top:10px"><button class="btn block" id="btnSoanXong">${r ? "Lưu lại" : "Xong soạn bài ✓"}</button></div><div style="margin-top:10px"><a class="btn sm ghost" href="#/tuan/${t}">Về tuần ${t}</a></div></div>`;
    $("#btnSoanXong").addEventListener("click", () => {
      const tl = Array.from(app.querySelectorAll(".ans")).map((x) => x.value.trim());
      const first = !S.soan[k];
      S.soan[k] = { tl, luc: todayStr() };
      if (first) { S.xu += C.XU_SOAN_BAI; capNhatStreak(); }
      save();
      if (luuLoi) { $("#btnSoanXong").textContent = "⚠️ Máy này không lưu được"; return; }
      $("#btnSoanXong").textContent = first ? `Đã lưu · +${C.XU_SOAN_BAI} xu 🎉` : "Đã lưu ✓";
      const xong = xongHetHomNay(tuanHienTai(), thuHomNay());
      setTimeout(() => { location.hash = xong ? "#/thuong" : "#/tuan/" + t; }, 900);
    });
  }

  /* ---------- trang: làm bài ---------- */
  function viewLam(t, thu) {
    setNav("lotrinh");
    const w = W[t]; const n = w && w.ngay.find((x) => x.thu === thu); if (!n) { location.hash = "#/lo-trinh"; return; }
    runQuiz({ tieuDe: n.ten, mon: n.mon, cauHoi: n.cauHoi, sub: `Tuần ${t} · ${C.THU[thu]}`,
      onDone: (kq) => {
        const first = !S.luot[luotKey(t, thu)];
        S.luot[luotKey(t, thu)] = { diem: kq.diem, tong: kq.tong, sai: kq.sai, luc: todayStr(), lan: (S.luot[luotKey(t, thu)] ? S.luot[luotKey(t, thu)].lan : 0) + 1 };
        const xu = kq.diem * C.XU_MOI_CAU_DUNG + (first ? C.XU_XONG_LUOT : 0);
        S.xu += xu; capNhatStreak(); save();
        return { xu, first, back: "#/tuan/" + t, backText: "Về tuần " + t };
      } });
  }

  /* ---------- trang: đóng tuần ---------- */
  function viewDong(t) {
    setNav("lotrinh");
    const w = W[t]; if (!w) { location.hash = "#/lo-trinh"; return; }
    const td = tienDoTuan(t);
    if (td.xong < td.tong) { location.hash = "#/tuan/" + t; return; }
    if (S.dong[t]) { location.hash = "#/tuan/" + t; return; }
    const loi = loiCuaTuan(t); const top = topChuDe(loi, 3);
    /* bước 1: xem lại chỗ sai */
    app.innerHTML = header(`Đóng tuần ${t}`) +
      `<div class="card"><h3>1. Xem lại cùng mẹ</h3>${top.length ? `<p class="small" style="margin:8px 0">Ba chỗ Kim sai nhiều nhất tuần này:</p>` + top.map(([cd, c]) => `<div class="wrong-item"><b>${esc(cd)}</b> <span class="pill">${c} lần</span></div>`).join("") : '<p class="small" style="margin-top:8px">Tuần này Kim không sai câu nào. Tuyệt!</p>'}
      <p class="muted" style="margin-top:10px">Chi tiết từng câu sai có ở Góc của mẹ.</p></div>
      <div class="card"><h3>2. Năm câu chốt</h3><p class="small" style="margin:8px 0 12px">Lấy từ những câu Kim sai (thiếu thì bù câu ngẫu nhiên). Làm xong là được cào thẻ.</p><button class="btn block" id="btnChot">Bắt đầu 5 câu chốt →</button></div>`;
    $("#btnChot").addEventListener("click", () => {
      const all = []; w.ngay.forEach((n) => n.cauHoi.forEach((q) => all.push(q)));
      const saiQ = shuffle(loi.map((l) => all.find((q) => q.q === l.q)).filter(Boolean));
      let chon = saiQ.slice(0, 5); const rest = shuffle(all.filter((q) => !chon.includes(q)));
      while (chon.length < 5 && rest.length) chon.push(rest.pop());
      runQuiz({ tieuDe: "Năm câu chốt tuần " + t, mon: "chot", cauHoi: chon, sub: "Đóng tuần",
        onDone: (kq) => {
          const the = C.THE_CAO[Math.floor(Math.random() * C.THE_CAO.length)];
          S.dong[t] = { diem: kq.diem, tong: kq.tong, luc: todayStr(), theCao: the }; S.heo += the; S.xu += kq.diem * C.XU_MOI_CAU_DUNG; capNhatStreak(); save();
          return { xu: kq.diem * C.XU_MOI_CAU_DUNG, theCao: the, back: "#/tuan/" + t, backText: "Về tuần " + t };
        } });
    });
  }

  /* ---------- máy quiz dùng chung ---------- */
  function runQuiz(opt) {
    const qs = opt.cauHoi; let i = 0, diem = 0; const sai = []; const trang = qs.map(() => null);
    const mi = opt.mon === "chot" ? { icon: "🎯", nen: "#fff7ed" } : monInfo(opt.mon);
    function draw() {
      const q = qs[i];
      const bar = trang.map((s, k) => `<i class="${s === true ? "ok" : s === false ? "bad" : k === i ? "cur" : ""}"></i>`).join("");
      app.innerHTML = header(opt.sub) + `<div class="card"><div class="row" style="margin-bottom:12px"><div class="icon-box" style="background:${mi.nen}">${mi.icon}</div><div class="grow"><b>${esc(opt.tieuDe)}</b><div class="muted">Câu ${i + 1}/${qs.length}</div></div></div>
        <div class="qnum">${bar}</div><div class="question">${esc(q.q)}</div>
        <div class="opts">${q.a.map((a, k) => `<button class="opt" data-k="${k}"><span class="k">${"ABCD"[k]}</span><span>${esc(a)}</span></button>`).join("")}</div><div id="expl"></div></div>`;
      app.querySelectorAll(".opt").forEach((b) => b.addEventListener("click", () => chon(Number(b.dataset.k))));
    }
    function chon(k) {
      const q = qs[i]; const dung = k === q.dung; trang[i] = dung; if (dung) diem++; else sai.push({ q: q.q, cd: q.cd, chon: q.a[k], dungLa: q.a[q.dung] });
      app.querySelectorAll(".opt").forEach((b) => { b.disabled = true; const kk = Number(b.dataset.k); if (kk === q.dung) b.classList.add("ok"); else if (kk === k) b.classList.add("bad"); });
      $("#expl").innerHTML = `<div class="expl ${dung ? "good" : ""}"><b>${dung ? "Đúng rồi! 🎉" : "Chưa đúng. Đáp án: " + "ABCD"[q.dung]}</b>${esc(q.gt)}<div style="margin-top:12px"><button class="btn sm" id="next">${i + 1 < qs.length ? "Câu tiếp →" : "Xem kết quả"}</button></div></div>`;
      $("#next").addEventListener("click", () => { i++; if (i < qs.length) draw(); else ketThuc(); });
      $("#next").focus();
    }
    function ketThuc() {
      const r = opt.onDone({ diem, tong: qs.length, sai });
      const pct = diem / qs.length;
      const loi = pct === 1 ? "Xuất sắc! Không sai câu nào." : pct >= 0.7 ? "Tốt lắm. Xem lại vài chỗ sai là chắc." : "Không sao, sai để biết chỗ cần học lại. Cuối tuần mẹ sẽ cùng Kim xem.";
      app.innerHTML = header(opt.sub) + `<div class="card" style="text-align:center"><div class="big pop">${diem}/${qs.length}</div><p style="margin:8px 0 4px"><b>${loi}</b></p><p class="muted">+${r.xu} xu${r.first ? " (gồm thưởng làm lượt đầu)" : ""} · 🔥 chuỗi ${S.streak.count} ngày</p>
        ${r.theCao ? `<h3 style="margin-top:18px">Thẻ cào tuần này</h3><p class="muted small">Chạm để cào</p><div class="scratch" id="scratch"><div class="big">${money(r.theCao)}</div><div class="cover">👆 Cào tại đây</div></div>` : ""}
        ${sai.length ? `<div style="text-align:left;margin-top:18px"><b>Chỗ cần xem lại:</b>${sai.map((s) => `<div class="wrong-item">${esc(s.cd)}<div class="muted">${esc(s.q)}</div></div>`).join("")}</div>` : ""}
        <div style="margin-top:18px">${xongHetHomNay(tuanHienTai(), thuHomNay()) && !S.ngay[todayStr()] ? `<a class="btn" href="#/thuong">🎁 Mở phần thưởng hôm nay</a> <a class="btn ghost" href="${r.back}">${r.backText}</a>` : `<a class="btn" href="${r.back}">${r.backText}</a> <a class="btn ghost" href="#/">Hôm nay</a>`}</div></div>`;
      const sc = $("#scratch"); if (sc) sc.addEventListener("click", () => sc.classList.add("open"));
    }
    draw();
  }

  /* ---------- khối đồng bộ (hiện trong Góc của mẹ) ---------- */
  function kheDongBo() {
    if (!DB || !DB.co()) {
      return `<div class="note small" style="margin-bottom:12px">📱 Trang này đọc tiến độ lưu <b>ngay trên thiết bị đang mở</b>. Muốn thấy bài Kim làm, mẹ mở trang trên đúng máy Kim dùng. (Chưa bật đồng bộ Supabase — xem <code>config.js</code>.)</div>`;
    }
    if (!DB.layMa()) {
      return `<div class="card" style="border:2px dashed #ffb454">
        <b>🔗 Nối máy này với sổ của Kim</b>
        <p class="small" style="margin-top:6px">Nhập mã đồng bộ (mẹ đặt khi tạo sổ trên Supabase). Chỉ cần nhập một lần trên mỗi máy; sau đó máy này và máy Kim luôn thấy cùng một tiến độ.</p>
        <input class="ans" id="oMa" type="text" placeholder="Mã đồng bộ" autocomplete="off" autocapitalize="none" autocorrect="off" spellcheck="false" style="margin-top:10px;font-family:ui-monospace,Menlo,monospace">
        <div class="muted small" style="margin-top:6px">Gõ đúng từng kí tự, không viết hoa chữ đầu. Mã hiện rõ để dễ kiểm tra.</div>
        <div style="margin-top:10px"><button class="btn sm" id="btnNoi">Nối sổ</button></div>
        <div id="ketQuaNoi"></div></div>`;
    }
    const ts = DB.trangThai;
    const luc = ts.lanCuoi ? `${String(ts.lanCuoi.getHours()).padStart(2, "0")}:${String(ts.lanCuoi.getMinutes()).padStart(2, "0")}` : "chưa";
    return `<div class="card tight">
      <div class="row"><div class="grow"><b>🔄 Đồng bộ</b>
        <div class="small ${ts.loi ? "" : "muted"}" style="${ts.loi ? "color:var(--bad)" : ""}">${ts.dangChay ? "đang đồng bộ…" : ts.loi ? "Lỗi: " + esc(ts.loi) : `Đã đồng bộ lúc ${luc} · sổ "${esc(DB.soId())}"`}</div>
      </div><button class="btn sm ghost" id="btnDongBo">Đồng bộ ngay</button></div>
      <div style="margin-top:8px"><button class="btn sm ghost" id="btnBoNoi" style="font-size:12px;padding:6px 12px">Bỏ nối máy này</button></div>
    </div>`;
  }

  function ganDongBo() {
    const oMa = $("#oMa");
    if (oMa) {
      const noi = async () => {
        const m = oMa.value.trim(); if (!m) return;
        $("#ketQuaNoi").innerHTML = `<p class="small muted" style="margin-top:8px">Đang kiểm tra…</p>`;
        DB.luuMa(m);
        try {
          const { duLieu } = await DB.taiVe(S);
          S = Object.assign(defaultState(), duLieu);
          try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {}
          await DB.dayLen(S); DB.trangThai.loi = null; route();
        } catch (e) {
          DB.xoaMa();
          $("#ketQuaNoi").innerHTML = `<p class="small" style="margin-top:8px;color:var(--bad)">Không nối được: ${esc(e.message)}</p><p class="small muted" style="margin-top:4px">Mã vừa gõ có <b>${m.length}</b> kí tự. Kiểm tra: máy có tự viết hoa chữ đầu không, có thừa dấu cách không, và mã có khớp với mã trong bảng <code>kim_so</code> không.</p>`;
        }
      };
      $("#btnNoi").addEventListener("click", noi);
      oMa.addEventListener("keydown", (e) => { if (e.key === "Enter") noi(); });
    }
    const b = $("#btnDongBo");
    if (b) b.addEventListener("click", async () => {
      b.textContent = "Đang…"; DB.trangThai.dangChay = true;
      try { const { duLieu } = await DB.taiVe(S); S = Object.assign(defaultState(), duLieu);
        try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {}
        await DB.dayLen(S); DB.trangThai.loi = null; }
      catch (e) { DB.trangThai.loi = e.message; }
      finally { DB.trangThai.dangChay = false; route(); }
    });
    const bb = $("#btnBoNoi");
    if (bb) bb.addEventListener("click", () => { DB.xoaMa(); route(); });
  }

  /* ---------- trang: phụ huynh ---------- */
  function viewPhuHuynh() {
    setNav("ph");
    const co = tuanCoNoiDung(); const cur = tuanHienTai();
    let rows = "";
    co.forEach((t) => { const w = W[t]; const td = tienDoTuan(t); const loi = loiCuaTuan(t); const top = topChuDe(loi, 3);
      const cells = w.ngay.map((n) => { const r = S.luot[luotKey(t, n.thu)]; return r ? `<span style="color:${r.diem / r.tong >= 0.7 ? "var(--ok)" : "#b45309"};font-weight:700">${monInfo(n.mon).icon} ${r.diem}/${r.tong}</span>` : `<span class="muted">${monInfo(n.mon).icon} –</span>`; }).join(" · ");
      rows += `<div class="card"><div class="row"><div class="grow"><b>Tuần ${t} · ${esc(w.ten)}</b> ${t === cur ? '<span class="pill">tuần này</span>' : ""}<div class="small" style="margin-top:4px">${cells}</div></div><span class="pill">${td.dong ? "đã đóng · " + money(S.dong[t].theCao) : "✏️ ôn " + td.xong + "/" + td.tong}</span></div>
        ${top.length ? `<div style="margin-top:10px"><b class="small">Ba chỗ sai nhiều nhất</b>${top.map(([cd, c]) => `<div class="wrong-item"><b>${esc(cd)}</b> <span class="pill">${c} lần</span></div>`).join("")}</div>` : (td.xong ? '<p class="muted small" style="margin-top:8px">Không sai câu nào.</p>' : "")}
        ${(() => { const sl = SOAN[t] || []; const done = sl.map((s, i) => ({ s, i, r: S.soan[soanKey(t, i)] })).filter((x) => x.r); if (!sl.length) return ""; return `<details style="margin-top:8px" ${done.length ? "open" : ""}><summary class="small" style="cursor:pointer;color:${done.length ? "var(--ok)" : "var(--muted)"};font-weight:700">📖 Soạn bài: ${done.length}/${sl.length} bài${done.length ? " · xem câu trả lời Kim viết" : " — chưa soạn bài nào"}</summary>${done.map((x) => `<div class="wrong-item"><b>${monInfo(x.s.mon).icon} ${esc(x.s.bai)}</b> <span class="muted">${x.r.luc}</span>${x.s.cauHoi.map((q, j) => `<div class="small" style="margin-top:4px"><span class="muted">${esc(q)}</span><br>${x.r.tl[j] ? esc(x.r.tl[j]) : "<i class='muted'>(bỏ trống)</i>"}</div>`).join("")}</div>`).join("")}</details>`; })()}
        ${loi.length ? `<details style="margin-top:8px"><summary class="small" style="cursor:pointer;color:var(--accent2);font-weight:700">Xem ${loi.length} câu sai</summary>${loi.map((l) => `<div class="wrong-item"><div class="muted">${monInfo(l.mon).icon} ${C.THU[l.thu]} · ${esc(l.cd)}</div>${esc(l.q)}<div class="small">Kim chọn: <span style="color:var(--bad)">${esc(l.chon)}</span> · Đúng: <span style="color:var(--ok)">${esc(l.dungLa)}</span></div></div>`).join("")}</details>` : ""}
      </div>`; });
    app.innerHTML = header("Góc của mẹ") + canhBaoLuu() +
      kheDongBo() +
      `<div class="card tight"><div class="row"><div class="grow"><b>Tổng quan</b><div class="small">🔥 ${S.streak.count} ngày liên tiếp · ⭐ ${S.xu} xu · 🐷 heo đất ${money(S.heo)}</div><div class="small muted" style="margin-top:4px">${Object.keys(S.ngay).length} ngày hoàn thành hết việc · thẻ cào ngày cộng ${money(Object.values(S.ngay).reduce((a, x) => a + x.tien, 0))}</div></div></div></div>
      ${rows}
      <div class="card"><b>Cách dùng</b><p class="small" style="margin-top:6px">Cuối tuần mở trang này, nhìn "Ba chỗ sai nhiều nhất", dạy lại đúng ba chỗ đó rồi cho Kim làm 5 câu chốt ở mục Đóng tuần. Heo đất là số tiền thưởng ảo, mẹ quy đổi thế nào tuỳ mẹ.</p>
        <p class="small" style="margin-top:10px">Tuần 1 bắt đầu từ <b>${fmt(ngayCuaTuan(1, 2))}/${parseDate(C.WEEK1_START).getFullYear()}</b> (sửa trong <code>config.js</code> nếu lịch trường khác).</p>
        <div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap"><button class="btn sm ghost" id="btnCopy">Sao chép tóm tắt</button><button class="btn sm ghost" id="btnReset">Xoá toàn bộ tiến độ</button></div><div id="resetBox"></div></div>`;
    $("#btnCopy").addEventListener("click", () => {
      let txt = `Kim Lớp 7 – tóm tắt ${todayStr()}\nChuỗi ${S.streak.count} ngày · ${S.xu} xu · heo đất ${money(S.heo)}\n`;
      co.forEach((t) => { const w = W[t]; const td = tienDoTuan(t); if (!td.xong) return; txt += `\nTuần ${t} (${w.ten}): ${td.xong}/${td.tong} lượt${td.dong ? ", đã đóng" : ""}\n`; w.ngay.forEach((n) => { const r = S.luot[luotKey(t, n.thu)]; if (r) txt += `  ${n.ten}: ${r.diem}/${r.tong}\n`; }); const top = topChuDe(loiCuaTuan(t), 3); if (top.length) txt += "  Sai nhiều: " + top.map(([cd, c]) => `${cd} (${c})`).join("; ") + "\n"; });
      navigator.clipboard && navigator.clipboard.writeText(txt).then(() => { $("#btnCopy").textContent = "Đã sao chép ✓"; });
    });
    ganDongBo();
    $("#btnReset").addEventListener("click", () => { $("#resetBox").innerHTML = `<p class="small" style="margin-top:10px;color:var(--bad)">Xoá hết điểm, xu, heo đất? Không hoàn lại được.</p><button class="btn sm" id="btnReset2" style="background:var(--bad);box-shadow:none;margin-top:6px">Xoá thật</button>`; $("#btnReset2").addEventListener("click", async () => { S = defaultState(); try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} if (DB && DB.co() && DB.layMa()) { try { await DB.xoaHet(); } catch (e) { DB.trangThai.loi = e.message; } } viewPhuHuynh(); }); });
  }

  /* ---------- router ---------- */
  function route() {
    const h = location.hash.replace(/^#\/?/, "").split("/");
    window.scrollTo(0, 0);
    if (h[0] === "" || h[0] === undefined) return viewHome();
    if (h[0] === "lo-trinh") return viewLoTrinh();
    if (h[0] === "tuan") return viewTuan(Number(h[1]));
    if (h[0] === "lam") return viewLam(Number(h[1]), Number(h[2]));
    if (h[0] === "soan") return viewSoan(Number(h[1]), Number(h[2]));
    if (h[0] === "thuong") return viewThuong();
    if (h[0] === "giang") return viewGiang(h[1]);
    if (h[0] === "dong") return viewDong(Number(h[1]));
    if (h[0] === "phu-huynh") return viewPhuHuynh();
    viewHome();
  }
  window.addEventListener("hashchange", route);
  route();

  /* ---------- đồng bộ khi mở trang ---------- */
  if (DB && DB.co() && DB.layMa()) {
    DB.trangThai.dangChay = true;
    DB.taiVe(S).then(({ duLieu }) => {
      const truoc = JSON.stringify(S);
      S = Object.assign(defaultState(), duLieu);
      if (JSON.stringify(S) !== truoc) { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} route(); }
      return DB.dayLen(S);
    }).then(() => { DB.trangThai.loi = null; })
      .catch((e) => { DB.trangThai.loi = e.message; })
      .finally(() => { DB.trangThai.dangChay = false; if (location.hash.indexOf("phu-huynh") > -1) route(); });
  }
})();
