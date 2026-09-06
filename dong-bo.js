/* ĐỒNG BỘ QUA SUPABASE
   Cho phép Kim học trên máy của Kim còn mẹ mở Góc của mẹ trên máy khác vẫn thấy.

   Cách hoạt động: mỗi lần mở trang, web tải bản trên Supabase về, HỢP NHẤT với bản
   đang có trên máy (không bên nào mất dữ liệu), lưu lại rồi đẩy bản gộp lên.
   Sau mỗi thay đổi, web đợi 2 giây rồi đẩy lên (gộp nhiều thay đổi thành một lần gửi).

   Mã bí mật KHÔNG nằm trong file này. Người dùng nhập một lần trên mỗi thiết bị,
   lưu ở localStorage. Xem supabase.sql để biết cách tạo bảng và mã. */

window.KimDongBo = (function () {
  const KEY_MA = "kim7.ma";
  const cfg = () => (window.KIM_CONFIG && window.KIM_CONFIG.SUPABASE) || {};
  const soId = () => cfg().so || "kim";

  const co = () => !!(cfg().url && cfg().anonKey);
  const layMa = () => { try { return localStorage.getItem(KEY_MA) || ""; } catch (e) { return ""; } };
  const luuMa = (m) => { try { localStorage.setItem(KEY_MA, (m || "").trim()); } catch (e) {} };
  const xoaMa = () => { try { localStorage.removeItem(KEY_MA); } catch (e) {} };

  const trangThai = { batDau: false, dangChay: false, xong: null, loi: null, lanCuoi: null };

  async function goi(ham, body) {
    const c = cfg();
    const r = await fetch(c.url.replace(/\/$/, "") + "/rest/v1/rpc/" + ham, {
      method: "POST",
      headers: { "Content-Type": "application/json", apikey: c.anonKey, Authorization: "Bearer " + c.anonKey },
      body: JSON.stringify(body),
    });
    const txt = await r.text();
    if (!r.ok) {
      let msg = txt;
      try { const j = JSON.parse(txt); msg = j.message || j.hint || txt; } catch (e) {}
      throw new Error(msg.slice(0, 160));
    }
    return txt ? JSON.parse(txt) : null;
  }

  /* Hợp nhất hai bộ dữ liệu: không bên nào mất gì.
     - xu, heo, demThuong: lấy số lớn hơn (không bao giờ mất tiền của Kim)
     - streak: lấy bản có ngày gần đây hơn
     - luot / soan / doc / dong / ngay: gộp theo khoá, trùng khoá thì ưu tiên bản ở máy đang mở */
  function hopNhat(may, sv) {
    may = may || {}; sv = sv || {};
    const r = {
      xu: Math.max(may.xu || 0, sv.xu || 0),
      heo: Math.max(may.heo || 0, sv.heo || 0),
      demThuong: Math.max(may.demThuong || 0, sv.demThuong || 0),
      streak: (may.streak && may.streak.last || "") >= (sv.streak && sv.streak.last || "")
        ? (may.streak || { count: 0, last: null }) : sv.streak,
    };
    ["luot", "soan", "doc", "dong", "ngay"].forEach((k) => {
      r[k] = Object.assign({}, sv[k] || {}, may[k] || {});
    });
    return r;
  }

  /* Tải bản trên mạng về và hợp nhất. Trả về { duLieu, thayDoi } hoặc ném lỗi. */
  async function taiVe(duLieuMay) {
    const sv = await goi("kim_doc", { p_id: soId(), p_ma: layMa() });
    const gop = hopNhat(duLieuMay, sv || {});
    trangThai.lanCuoi = new Date();
    return { duLieu: gop, tuMang: sv || {} };
  }

  async function dayLen(duLieu) {
    const t = await goi("kim_ghi", { p_id: soId(), p_ma: layMa(), p_du_lieu: duLieu });
    trangThai.lanCuoi = new Date();
    return t;
  }

  async function xoaHet() {
    await goi("kim_xoa", { p_id: soId(), p_ma: layMa() });
  }

  /* Đẩy lên có trễ 2 giây, gộp nhiều thay đổi liên tiếp thành một lần gửi */
  let hen = null, choDay = null;
  function henDay(layDuLieu, xong) {
    choDay = layDuLieu;
    if (hen) clearTimeout(hen);
    hen = setTimeout(async () => {
      hen = null;
      if (!co() || !layMa()) return;
      try { trangThai.dangChay = true; await dayLen(choDay()); trangThai.loi = null; }
      catch (e) { trangThai.loi = e.message; }
      finally { trangThai.dangChay = false; if (xong) xong(); }
    }, 2000);
  }

  return { co, layMa, luuMa, xoaMa, taiVe, dayLen, xoaHet, henDay, hopNhat, trangThai, soId };
})();
