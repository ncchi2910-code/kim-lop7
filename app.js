/* Kim Lớp 7 — app chính. Không cần sửa file này khi thêm tuần mới. */
(function () {
  const C = window.KIM_CONFIG;
  const W = window.KIM_WEEKS || {};
  const $ = (s) => document.querySelector(s);
  const app = $("#app");
  const KEY = "kim7.v1";

  /* ---------- trạng thái ---------- */
  const defaultState = () => ({ xu: 0, heo: 0, streak: { count: 0, last: null }, luot: {}, doc: {}, dong: {} });
  let S = load();
  function load() { try { const r = localStorage.getItem(KEY); return r ? Object.assign(defaultState(), JSON.parse(r)) : defaultState(); } catch (e) { return defaultState(); } }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }

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
    if (!w) {
      const co = tuanCoNoiDung();
      main = `<div class="card"><h3>Tuần ${t} chưa có nội dung</h3><p class="muted" style="margin-top:6px">Mẹ cần thêm file <code>tuan-${String(t).padStart(2, "0")}.js</code>. Trong lúc chờ, Kim có thể làm lại các tuần đã có.</p>
        <div style="margin-top:12px"><a class="btn sm" href="#/tuan/${co[co.length - 1]}">Mở tuần ${co[co.length - 1]}</a></div></div>`;
    } else {
      const td = tienDoTuan(t);
      const ngay = w.ngay.find((n) => n.thu === thu);
      if (ngay) {
        const r = S.luot[luotKey(t, thu)]; const mi = monInfo(ngay.mon);
        main = `<div class="card">
          <div class="row"><div class="icon-box" style="background:${mi.nen}">${mi.icon}</div><div class="grow"><div class="muted">${C.THU[thu]} · Tuần ${t}</div><h3>${esc(ngay.ten)}</h3></div></div>
          <p class="small" style="margin:12px 0">${ngay.cauHoi.length} câu, khoảng 10–15 phút. ${r ? `Kim đã làm rồi: <b>${r.diem}/${r.tong}</b>. Làm lại để chắc hơn cũng được.` : "Làm xong sẽ được xu và giữ chuỗi ngày 🔥."}</p>
          <a class="btn block" href="#/lam/${t}/${thu}">${r ? "Làm lại" : "Bắt đầu"} →</a>
        </div>`;
      } else {
        const ok = td.xong === td.tong;
        main = `<div class="card">
          <div class="row"><div class="icon-box" style="background:#fff7ed">🎁</div><div class="grow"><div class="muted">Cuối tuần · Tuần ${t}</div><h3>Đóng tuần cùng mẹ</h3></div></div>
          <p class="small" style="margin:12px 0">${td.dong ? "Tuần này đã đóng. Nghỉ ngơi hoặc làm lại lượt nào Kim thấy chưa chắc." : ok ? "Đủ 5 lượt rồi. Xem lại chỗ sai với mẹ, làm 5 câu chốt và cào thẻ." : `Còn ${td.tong - td.xong} lượt chưa làm. Làm nốt rồi mới đóng tuần được.`}</p>
          <a class="btn block ${ok && !td.dong ? "" : "ghost"}" href="#/${ok && !td.dong ? "dong/" + t : "tuan/" + t}">${td.dong ? "Xem tuần " + t : ok ? "Đóng tuần →" : "Xem còn thiếu gì"}</a>
        </div>`;
      }
      const dc = (w.docTruoc || []).filter((_, i) => !S.doc["t" + t + "-" + i]);
      main += `<div class="card tight row"><div class="grow"><b>Tuần ${t} · ${esc(w.ten)}</b><div class="muted">${td.xong}/${td.tong} lượt kiểm tra${dc.length ? ` · ${dc.length} bài đọc trước chưa xem` : ""}</div></div><a class="btn sm ghost" href="#/tuan/${t}">Xem tuần</a></div>`;
    }
    const kt = C.KIEM_TRA.find((k) => k.tuan >= t);
    const ktHtml = kt ? `<div class="card tight"><div class="row"><div class="grow"><b>Đường đến ${kt.ten}</b><div class="muted">Còn ${kt.tuan - t} tuần (tuần ${kt.tuan})</div></div><span class="pill">Tuần ${t}/${C.TONG_TUAN}</span></div><div class="bar" style="margin-top:10px"><i style="width:${Math.round((t / kt.tuan) * 100)}%"></i></div></div>` : "";
    app.innerHTML = header(`${C.THU[thu]}, ${fmt(new Date())} · Tuần ${t}`) + main + ktHtml + `<p class="muted" style="text-align:center;margin-top:18px">Học mỗi ngày một chút 🌱</p>`;
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
    const days = w.ngay.map((n) => { const r = S.luot[luotKey(t, n.thu)]; const mi = monInfo(n.mon);
      return `<a class="day ${r ? "done" : ""}" href="#/lam/${t}/${n.thu}"><div class="icon-box" style="background:${mi.nen}">${mi.icon}</div><div class="grow"><div class="muted">${C.THU[n.thu]} · ${fmt(ngayCuaTuan(t, n.thu))}</div><b>${esc(n.ten)}</b></div>${r ? `<div class="score" style="color:${r.diem / r.tong >= 0.7 ? "var(--ok)" : "#b45309"}">${r.diem}/${r.tong}</div>` : '<span class="pill">chưa làm</span>'}</a>`; }).join("");
    const doc = (w.docTruoc || []).map((d, i) => { const k = "t" + t + "-" + i; const seen = S.doc[k];
      return `<div class="card subj ${seen ? "" : ""}" data-toggle="1" data-doc="${k}"><div class="row"><span style="font-size:22px">${seen ? "✅" : "📖"}</span><div class="grow"><b>${esc(d.tieuDe)}</b><div class="muted">${esc(d.mon)} · ${seen ? "đã đọc" : "chưa đọc"}</div></div><span class="muted">▾</span></div><div class="body"><p class="small">${esc(d.noiDung)}</p></div></div>`; }).join("");
    const ok = td.xong === td.tong;
    app.innerHTML = header(`Tuần ${t} · ${w.icon} ${esc(w.ten)}`) +
      `<div class="card tight row"><div class="grow"><b>Tiến độ tuần</b><div class="bar" style="margin-top:8px"><i style="width:${Math.round((td.xong / td.tong) * 100)}%"></i></div></div><span class="pill">${td.xong}/${td.tong}</span></div>
      <h2>📌 Tuần này học gì</h2>${subj}<p class="note muted">Môn khác: ${esc(w.monKhac || "")}</p>
      <h2>✏️ Kiểm tra ngày</h2>${days}
      <h2>📖 Đọc trước</h2>${doc || '<p class="muted">Tuần này không có bài đọc trước.</p>'}
      <h2>🎁 Đóng tuần</h2>
      <div class="card">${td.dong ? `<p>Tuần ${t} đã đóng ngày ${S.dong[t].luc}. Thẻ cào: <b>${money(S.dong[t].theCao)}</b> 🐷</p>` : `<p class="small">Đủ 5 lượt kiểm tra, xem lại chỗ sai cùng mẹ, rồi làm 5 câu chốt để nhận thẻ cào.</p><div style="margin-top:12px"><a class="btn ${ok ? "" : "ghost"}" href="${ok ? "#/dong/" + t : "#"}" ${ok ? "" : 'onclick="return false"'}>${ok ? "Đóng tuần →" : `Còn ${td.tong - td.xong} lượt`}</a></div>`}</div>`;
    app.querySelectorAll("[data-toggle]").forEach((el) => el.addEventListener("click", () => { el.classList.toggle("open"); const k = el.dataset.doc; if (k && !S.doc[k]) { S.doc[k] = true; save(); } }));
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
        <div style="margin-top:18px"><a class="btn" href="${r.back}">${r.backText}</a> <a class="btn ghost" href="#/">Hôm nay</a></div></div>`;
      const sc = $("#scratch"); if (sc) sc.addEventListener("click", () => sc.classList.add("open"));
    }
    draw();
  }

  /* ---------- trang: phụ huynh ---------- */
  function viewPhuHuynh() {
    setNav("ph");
    const co = tuanCoNoiDung(); const cur = tuanHienTai();
    let rows = "";
    co.forEach((t) => { const w = W[t]; const td = tienDoTuan(t); const loi = loiCuaTuan(t); const top = topChuDe(loi, 3);
      const cells = w.ngay.map((n) => { const r = S.luot[luotKey(t, n.thu)]; return r ? `<span style="color:${r.diem / r.tong >= 0.7 ? "var(--ok)" : "#b45309"};font-weight:700">${monInfo(n.mon).icon} ${r.diem}/${r.tong}</span>` : `<span class="muted">${monInfo(n.mon).icon} –</span>`; }).join(" · ");
      rows += `<div class="card"><div class="row"><div class="grow"><b>Tuần ${t} · ${esc(w.ten)}</b> ${t === cur ? '<span class="pill">tuần này</span>' : ""}<div class="small" style="margin-top:4px">${cells}</div></div><span class="pill">${td.dong ? "đã đóng · " + money(S.dong[t].theCao) : td.xong + "/" + td.tong}</span></div>
        ${top.length ? `<div style="margin-top:10px"><b class="small">Ba chỗ sai nhiều nhất</b>${top.map(([cd, c]) => `<div class="wrong-item"><b>${esc(cd)}</b> <span class="pill">${c} lần</span></div>`).join("")}</div>` : (td.xong ? '<p class="muted small" style="margin-top:8px">Không sai câu nào.</p>' : "")}
        ${loi.length ? `<details style="margin-top:8px"><summary class="small" style="cursor:pointer;color:var(--accent2);font-weight:700">Xem ${loi.length} câu sai</summary>${loi.map((l) => `<div class="wrong-item"><div class="muted">${monInfo(l.mon).icon} ${C.THU[l.thu]} · ${esc(l.cd)}</div>${esc(l.q)}<div class="small">Kim chọn: <span style="color:var(--bad)">${esc(l.chon)}</span> · Đúng: <span style="color:var(--ok)">${esc(l.dungLa)}</span></div></div>`).join("")}</details>` : ""}
      </div>`; });
    app.innerHTML = header("Góc của mẹ") +
      `<div class="card tight"><div class="row"><div class="grow"><b>Tổng quan</b><div class="small">🔥 ${S.streak.count} ngày liên tiếp · ⭐ ${S.xu} xu · 🐷 heo đất ${money(S.heo)}</div></div></div></div>
      ${rows}
      <div class="card"><b>Cách dùng</b><p class="small" style="margin-top:6px">Cuối tuần mở trang này, nhìn "Ba chỗ sai nhiều nhất", dạy lại đúng ba chỗ đó rồi cho Kim làm 5 câu chốt ở mục Đóng tuần. Heo đất là số tiền thưởng ảo, mẹ quy đổi thế nào tuỳ mẹ.</p>
        <p class="small" style="margin-top:10px">Tuần 1 bắt đầu từ <b>${fmt(ngayCuaTuan(1, 2))}/${parseDate(C.WEEK1_START).getFullYear()}</b> (sửa trong <code>config.js</code> nếu lịch trường khác).</p>
        <div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap"><button class="btn sm ghost" id="btnCopy">Sao chép tóm tắt</button><button class="btn sm ghost" id="btnReset">Xoá toàn bộ tiến độ</button></div><div id="resetBox"></div></div>`;
    $("#btnCopy").addEventListener("click", () => {
      let txt = `Kim Lớp 7 – tóm tắt ${todayStr()}\nChuỗi ${S.streak.count} ngày · ${S.xu} xu · heo đất ${money(S.heo)}\n`;
      co.forEach((t) => { const w = W[t]; const td = tienDoTuan(t); if (!td.xong) return; txt += `\nTuần ${t} (${w.ten}): ${td.xong}/${td.tong} lượt${td.dong ? ", đã đóng" : ""}\n`; w.ngay.forEach((n) => { const r = S.luot[luotKey(t, n.thu)]; if (r) txt += `  ${n.ten}: ${r.diem}/${r.tong}\n`; }); const top = topChuDe(loiCuaTuan(t), 3); if (top.length) txt += "  Sai nhiều: " + top.map(([cd, c]) => `${cd} (${c})`).join("; ") + "\n"; });
      navigator.clipboard && navigator.clipboard.writeText(txt).then(() => { $("#btnCopy").textContent = "Đã sao chép ✓"; });
    });
    $("#btnReset").addEventListener("click", () => { $("#resetBox").innerHTML = `<p class="small" style="margin-top:10px;color:var(--bad)">Xoá hết điểm, xu, heo đất? Không hoàn lại được.</p><button class="btn sm" id="btnReset2" style="background:var(--bad);box-shadow:none;margin-top:6px">Xoá thật</button>`; $("#btnReset2").addEventListener("click", () => { S = defaultState(); save(); viewPhuHuynh(); }); });
  }

  /* ---------- router ---------- */
  function route() {
    const h = location.hash.replace(/^#\/?/, "").split("/");
    window.scrollTo(0, 0);
    if (h[0] === "" || h[0] === undefined) return viewHome();
    if (h[0] === "lo-trinh") return viewLoTrinh();
    if (h[0] === "tuan") return viewTuan(Number(h[1]));
    if (h[0] === "lam") return viewLam(Number(h[1]), Number(h[2]));
    if (h[0] === "dong") return viewDong(Number(h[1]));
    if (h[0] === "phu-huynh") return viewPhuHuynh();
    viewHome();
  }
  window.addEventListener("hashchange", route);
  route();
})();
