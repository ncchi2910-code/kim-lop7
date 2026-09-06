-- ============================================================
-- Kim Lớp 7 — đồng bộ tiến độ qua Supabase
-- Chạy toàn bộ file này một lần trong SQL Editor của project.
--
-- Nguyên tắc: repo là public nên anon key ai cũng thấy. Vì vậy bảng bị khoá
-- hoàn toàn bằng RLS (không có policy nào), dữ liệu chỉ ra vào qua ba hàm
-- SECURITY DEFINER, và mỗi hàm đều đòi mã bí mật. Mã KHÔNG nằm trong mã nguồn,
-- mẹ và Kim nhập tay một lần trên mỗi thiết bị.
-- ============================================================

-- 1. Bảng lưu tiến độ (mỗi sổ là một hàng)
create table if not exists public.kim_so (
  id         text primary key,
  ma_bi_mat  text not null,
  du_lieu    jsonb not null default '{}'::jsonb,
  cap_nhat   timestamptz not null default now()
);

alter table public.kim_so enable row level security;
-- Cố ý KHÔNG tạo policy nào: anon không đọc/ghi thẳng vào bảng được.

revoke all on table public.kim_so from anon, authenticated;

-- 2. Đọc tiến độ
create or replace function public.kim_doc(p_id text, p_ma text)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare v jsonb;
begin
  select du_lieu into v from public.kim_so where id = p_id and ma_bi_mat = p_ma;
  if not found then
    raise exception 'Sai sổ hoặc sai mã' using errcode = '28000';
  end if;
  return v;
end;
$$;

-- 3. Ghi tiến độ (ghi đè cả bộ; phía web đã hợp nhất trước khi gọi)
create or replace function public.kim_ghi(p_id text, p_ma text, p_du_lieu jsonb)
returns timestamptz
language plpgsql
security definer
set search_path = public
as $$
declare v timestamptz;
begin
  update public.kim_so
     set du_lieu = p_du_lieu, cap_nhat = now()
   where id = p_id and ma_bi_mat = p_ma
  returning cap_nhat into v;
  if not found then
    raise exception 'Sai sổ hoặc sai mã' using errcode = '28000';
  end if;
  return v;
end;
$$;

-- 4. Xoá sạch tiến độ (dùng cho nút "Xoá toàn bộ tiến độ" trong Góc của mẹ)
create or replace function public.kim_xoa(p_id text, p_ma text)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.kim_so set du_lieu = '{}'::jsonb, cap_nhat = now()
   where id = p_id and ma_bi_mat = p_ma;
  if not found then
    raise exception 'Sai sổ hoặc sai mã' using errcode = '28000';
  end if;
end;
$$;

-- 5. Chỉ cho phép gọi ba hàm này
revoke all on function public.kim_doc(text, text) from public;
revoke all on function public.kim_ghi(text, text, jsonb) from public;
revoke all on function public.kim_xoa(text, text) from public;
grant execute on function public.kim_doc(text, text) to anon;
grant execute on function public.kim_ghi(text, text, jsonb) to anon;
grant execute on function public.kim_xoa(text, text) to anon;

-- 6. Tạo sổ cho Kim.
--    Mã của mẹ là 2910 
insert into public.kim_so (id, ma_bi_mat, du_lieu)
values ('kim', 'doi-ma-nay-thanh-ma-cua-me', '{}'::jsonb)
on conflict (id) do nothing;

-- Kiểm tra: phải trả về một hàng
-- select id, cap_nhat from public.kim_so;

-- Đổi mã sau này:
-- update public.kim_so set ma_bi_mat = 'ma-moi' where id = 'kim';
