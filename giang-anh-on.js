/* ÔN TIẾNG ANH THEO NGÀY · 28/09 → 03/10/2026 — chuẩn bị cho bài kiểm tra Unit 1: Hobbies
   Soạn theo đề "Test for Unit 1: Hobbies" (80 câu) cô giáo phát: Ngữ âm 20 · Từ vựng + Ngữ pháp 20 ·
   Đọc 12 · Nghe 8 · Word form 10 · Viết 10.
   Cùng khuôn với giang-bai.js: mỗi bài có trường ngay → tự hiện ở trang chủ mục "Hôm nay mẹ giảng" đúng ngày
   và trong trang tuần mục "Mẹ giảng thêm". Mỗi bài 15–20 phút: đọc phần giảng, làm câu tự kiểm tra ở cuối
   (câu tự kiểm tra là câu cùng dạng với đề, có giải thích). Chỉ cần thêm 1 dòng
   <script src="giang-anh-on.js"></script> vào index.html, ngay sau giang-van-on.js. */
window.KIM_GIANG = window.KIM_GIANG || {};

/* ===== Thứ Hai 28/09 · Ngữ âm ===== */
window.KIM_GIANG["on-anh-0928"] = {
  mon: "anh",
  ngay: "2026-09-28",
  tieuDe: "Ôn Anh ngày 1 · Ngữ âm: /ə/ khác /ɜː/ và đuôi -s đọc /s/, /z/ hay /ɪz/",
  sgk: "Tiếng Anh 7 Global Success, Unit 1 Getting started + Pronunciation (tr. 9) · Đề cô: câu 1–20 (20 điểm)",
  motCau: "Một phần tư số điểm của đề nằm ở 20 câu ngữ âm, và cả 20 câu chỉ xoay quanh hai luật. Câu 1–10 hỏi phần gạch chân đọc là /ə/ (âm “ơ” nhẹ, không nhấn) hay /ɜː/ (âm “ơ” dài, có nhấn). Câu 11–20 hỏi đuôi -s của danh từ số nhiều và động từ ngôi ba đọc là /s/, /z/ hay /ɪz/. Nhớ hai luật là làm được cả 20 câu mà không cần biết nghĩa từ.",
  phan: [
    {
      ten: "Luật 1 · /ɜː/ là “ơ” dài có nhấn, /ə/ là “ơ” nhẹ không nhấn",
      doan: ["Cả hai âm đều viết bằng nguyên âm + r (er, ir, ur, or, ear). Khác nhau ở chỗ âm tiết đó có được nhấn mạnh hay không."],
      kn: [
        { ten: "/ɜː/ — âm tiết được nhấn, đọc dài", de: "Thường là từ một âm tiết, hoặc âm tiết mang trọng âm: bird, verb, word, worse, earn, learn, earth, purple, journey, nervous, curly, dirty, birthday, Thursday, girl, shirt, nurse.",
          vd: "Đề câu 5: bird /ɜː/ khác với family, husband, Saturday (a ở đó không nhấn, đọc /ə/) → chọn A. bird." },
        { ten: "/ə/ — âm tiết không nhấn, đọc lướt", de: "Đuôi -er, -or, -ar cuối từ (letter, pepper, computer, actor, color, sugar); chữ a đứng đầu không nhấn (ago, among, afraid, about); các đuôi -ant, -ent, -tion, -ous phần không nhấn (accountant, absence, information).",
          vd: "Đề câu 7: letter đuôi -er không nhấn → /ə/; earn, purple, birthday đều /ɜː/ → chọn A. letter." },
        { ten: "Chữ “w” + or đọc /ɜː/", de: "word, worse, work, world, worm: sau w thì “or” không đọc /ɔː/ như “for” mà đọc /ɜː/.",
          vd: "Đề câu 4: verb, worse, word đều /ɜː/; pepper đuôi -er là /ə/ → chọn D. pepper." },
      ],
      hop: { nhan: "Cách làm nhanh câu 1–10", chu: "Đọc thầm từng từ, gõ tay theo nhịp. Âm tiết gạch chân có được gõ mạnh không? Gõ mạnh và có r phía sau → /ɜː/. Đọc lướt qua → /ə/. Ba câu đầu đề (man, bell, near) là bẫy khác loại: man đọc /æ/ (a ngắn “e” mở), bell đọc /e/, near đọc /ɪə/; cả ba vẫn là từ khác với ba từ còn lại đọc /ə/ hoặc /ɜː/." },
    },
    {
      ten: "Luật 2 · Đuôi -s nghe theo âm đứng trước nó",
      doan: ["Không nhìn chữ cái cuối, mà nghe ÂM cuối của từ gốc trước khi thêm s."],
      buoc: [
        { so: 1, ten: "/ɪz/ — âm cuối là s, z, sh, ch, x, ge", de: "Từ gốc đã có tiếng “xì” ở cuối thì thêm -es và đọc thêm một âm tiết /ɪz/: buses, watches, boxes, changes, wishes.",
          vd: "Trong đề không có từ /ɪz/ nào, nên câu nào cũng chỉ còn phải phân biệt /s/ với /z/." },
        { so: 2, ten: "/s/ — âm cuối là âm vô thanh p, t, k, f, th", de: "Đặt tay lên cổ họng, đọc âm cuối: cổ không rung → -s đọc /s/. Nhớ câu: “Phải Tìm Kẻ Fá Thối” = p, t, k, f, th.",
          vd: "stops, cats, books, cooks, laughs (gh đọc /f/), photographs, backpacks, streets, looks, stamps, satellites, develops, bakes, boots, picks, makes, lifts, rocks, promotes → tất cả /s/." },
        { so: 3, ten: "/z/ — âm cuối là nguyên âm hoặc phụ âm hữu thanh", de: "Cổ họng rung: b, d, g, v, l, m, n, r, ng, th hữu thanh, và mọi nguyên âm (a, e, i, o, u, y, ow).",
          vd: "days, words, describes, friends, bananas, follows, titles, composers, savings, cities, series, workers, shoulders, rains, lions, earphones, loves, steals, breathes → tất cả /z/." },
      ],
      hop: { nhan: "Ba từ hay bị nhầm trong đề", chu: "laughs: chữ cuối là h nhưng “gh” đọc /f/ → /s/. words: chữ cuối trước s là d (hữu thanh) → /z/, dù nghe giống “worse”. breathes: th ở đây đọc /ð/ hữu thanh → /z/. Câu 19 của đề (breathes, lions, lifts, rocks) có hai từ /z/ và hai từ /s/ nên đề chưa chuẩn; đáp án cô cho là B. lions, Kim đừng mất thời gian ở câu này." },
    },
    {
      ten: "Đối chiếu đáp án 20 câu của đề",
      doan: ["Câu 1–10: 1A (man /æ/), 2C (bell /e/), 3B (near /ɪə/), 4D (pepper /ə/), 5A (bird /ɜː/), 6C (journey /ɜː/), 7A (letter /ə/), 8D (dirty /ɜː/), 9C (curly /ɜː/), 10B (nervous /ɜː/).",
        "Câu 11–20: 11D (days /z/), 12D (words /z/), 13D (photographs /s/), 14A (backpacks /s/), 15B (savings /z/), 16B (satellites /s/), 17C (shoulders /z/), 18A (rains /z/), 19B (đề có lỗi), 20C (promotes /s/).",
        "Nhìn kĩ: trong câu 4–10, từ khác loại luôn là từ duy nhất đọc /ɜː/ giữa ba từ /ə/, hoặc ngược lại. Kim chỉ cần tìm từ nào “được nhấn có r” là xong."],
    },
  ],
  doiChieu: [
    ["underlined part is pronounced differently", "phần gạch chân đọc khác các từ còn lại → tìm 1 từ lạc loài"],
    ["/ɜː/", "“ơ” dài, có nhấn: bird, word, learn, nurse"],
    ["/ə/", "“ơ” lướt, không nhấn: letter, ago, actor, computer"],
    ["/s/ sau âm vô thanh", "p, t, k, f, th: stops, cats, books, laughs"],
    ["/z/ sau âm hữu thanh và nguyên âm", "b, d, g, v, l, m, n, r + a e i o u: days, words, friends"],
    ["/ɪz/ sau tiếng xì", "s, z, sh, ch, x, ge: buses, watches, boxes"],
  ],
  meo: "Câu 1–10: gõ nhịp, âm được gõ mạnh và có r là /ɜː/. Câu 11–20: tay lên cổ, cổ rung là /z/, không rung là /s/, và nhớ “Phải Tìm Kẻ Fá Thối” (p, t, k, f, th) là nhóm /s/.",
  tuKiemTra: [
    { q: "Chọn từ có phần gạch chân đọc khác: A. sister  B. shirt  C. doctor  D. teacher (gạch chân er/ir/or/er cuối)", a: "B. shirt — đọc /ɜː/ (có nhấn). Ba từ còn lại đuôi -er, -or không nhấn → /ə/." },
    { q: "A. work  B. world  C. worm  D. for", a: "D. for — đọc /ɔː/. Ba từ đầu có w đứng trước “or” → /ɜː/." },
    { q: "A. banana  B. ago  C. about  D. hat (gạch chân chữ a)", a: "D. hat — /æ/. banana (a đầu), ago, about đều là a không nhấn → /ə/." },
    { q: "A. hurt  B. turn  C. nurse  D. picture (gạch chân ur/ure)", a: "D. picture — đuôi -ure không nhấn → /ə/. Ba từ đầu /ɜː/." },
    { q: "A. early  B. heart  C. learn  D. search (gạch chân ear)", a: "B. heart — đọc /ɑː/. early, learn, search đọc /ɜː/." },
    { q: "A. cups  B. hats  C. bags  D. books (đuôi -s)", a: "C. bags — g hữu thanh → /z/. Ba từ còn lại âm cuối p, t, k → /s/." },
    { q: "A. plays  B. sings  C. reads  D. eats", a: "D. eats — t vô thanh → /s/. plays (nguyên âm), sings (ng), reads (d) → /z/." },
    { q: "A. coughs  B. laughs  C. paths  D. bathes", a: "D. bathes — th hữu thanh /ð/ → /z/. coughs, laughs (gh = /f/), paths (th vô thanh) → /s/." },
    { q: "A. watches  B. washes  C. wishes  D. walks", a: "D. walks — k → /s/. Ba từ còn lại âm cuối ch, sh, sh → /ɪz/." },
    { q: "A. stamps  B. coins  C. models  D. flowers", a: "A. stamps — p → /s/. coins (n), models (l), flowers (r) → /z/." },
    { q: "A. collects  B. paints  C. enjoys  D. likes", a: "C. enjoys — nguyên âm → /z/. collects, paints, likes → /s/." },
    { q: "Vì sao “words” đọc /z/ mà “worse” không có s ở cuối lại đọc /s/?", a: "Vì luật -s chỉ áp dụng cho đuôi -s thêm vào. words = word + s, âm trước s là d hữu thanh → /z/. worse là từ gốc, se cuối đọc /s/ tự nhiên, không phải đuôi số nhiều." },
  ],
};

/* ===== Thứ Ba 29/09 · Từ vựng và word form ===== */
window.KIM_GIANG["on-anh-0929"] = {
  mon: "anh",
  ngay: "2026-09-29",
  tieuDe: "Ôn Anh ngày 2 · Từ vựng Unit 1: cụm động từ đi với sở thích và bài word form",
  sgk: "Unit 1 A closer look 1 (tr. 10), Looking back (tr. 16) · Đề cô: câu 21–30 (10 điểm) và câu 61–70 word form (10 điểm)",
  motCau: "Hai phần này cộng lại 20 điểm và đều là học thuộc. Câu 21–30 hỏi từ nào đi đúng với từ nào: go cycling chứ không phải do cycling, keen ON chứ không phải keen IN, take UP a hobby chứ không phải take OFF. Câu 61–70 cho một từ trong ngoặc và bắt đổi sang dạng đúng (danh từ, tính từ, động từ, trạng từ). Hôm nay Kim học đúng những cụm xuất hiện trong đề, vì đề thật rất hay lấy lại.",
  phan: [
    {
      ten: "Ba động từ đi với hoạt động: go, play, do",
      kn: [
        { ten: "go + V-ing (hoạt động di chuyển, ngoài trời)", de: "go cycling, go swimming, go camping, go fishing, go jogging, go skateboarding, go windsurfing, go horse riding, go mountain biking.",
          vd: "Đề câu 25: They often ___ cycling at weekends → B. go." },
        { ten: "play + môn có bóng hoặc trò chơi + nhạc cụ có THE", de: "play football, play tennis, play chess, play video games; play the piano, play the guitar.",
          vd: "Playing the piano is what I like most (câu 80). Không nói “play piano”." },
        { ten: "do + môn không bóng, không di chuyển xa", de: "do yoga, do karate, do judo, do gymnastics, do exercise, do the gardening, do the cooking.",
          vd: "Đề câu 26: I ___ a bit of yoga when I was younger → D. did." },
      ],
      hop: { nhan: "Nhầm hay gặp nhất", chu: "“make cycling”, “play yoga”, “do cycling” đều sai. Hỏi mình: có di chuyển ngoài trời không? → go. Có bóng hoặc là nhạc cụ không? → play. Còn lại → do." },
    },
    {
      ten: "Nói “thích” bằng năm cách, mỗi cách một giới từ",
      kn: [
        { ten: "be keen ON + V-ing", de: "keen luôn đi với ON. Đề câu 28 cho sẵn “on” nên chỉ keen là đúng, dù fond và interested cũng nghĩa là thích.",
          vd: "She is keen on taking photos (câu 79)." },
        { ten: "be fond OF + V-ing", de: "fond luôn đi với OF.", vd: "My sister is fond of windsurfing (câu 24)." },
        { ten: "be interested IN + V-ing", de: "interested luôn đi với IN.", vd: "Is she interested in arranging flowers? (câu 74)." },
        { ten: "enjoy / love / like / hate + V-ing", de: "Sau các động từ chỉ thích, ghét, động từ tiếp theo thêm -ing. Không dùng to V.", vd: "He enjoys watching football (câu 77)." },
        { ten: "My favourite hobby is + V-ing", de: "Khi câu gốc nói “what I like most”.", vd: "My favourite hobby is playing the piano (câu 80)." },
      ],
      hop: { nhan: "Ghi vào tay", chu: "keen ON · fond OF · interested IN · good AT · afraid OF (câu 73: afraid of heights). Đề cho sẵn giới từ thì chọn tính từ theo giới từ; đề cho sẵn tính từ thì điền giới từ theo tính từ." },
    },
    {
      ten: "Cụm động từ và cụm từ cố định của Unit 1",
      kn: [
        { ten: "take up a hobby = bắt đầu một sở thích", de: "Ngược với give up = bỏ. Đề câu 23: Why don’t you take up a new hobby?", vd: "I took up gardening last year." },
        { ten: "take on responsibility = nhận lấy trách nhiệm", de: "Đề câu 29. Không phải go on, get on, put on.", vd: "Raising animals helps you take on responsibility." },
        { ten: "stay in shape = giữ dáng, giữ sức khoẻ", de: "Đề câu 27. Cũng nói keep fit (fit là tính từ, không có “in fit”).", vd: "Run every two days to stay in shape." },
        { ten: "share a hobby with someone", de: "Đề câu 21: When we share our hobbies with others, we can make new friends.", vd: "Mi shares her hobby with her mom (bài nghe câu 58)." },
        { ten: "collect stamps / coins / glass bottles as a hobby", de: "Đề câu 30 và 78. Người sưu tầm là collector.", vd: "My hobby is collecting glass bottles." },
        { ten: "responsible, patient, creative", de: "Ba tính từ khen người có sở thích. Đề câu 22: patient and responsible (lazy, stressed nghĩa xấu; enjoyable dùng cho việc, không dùng cho người).", vd: "Peter became more patient and responsible." },
      ],
    },
    {
      ten: "Word form: nhìn chỗ trống để biết cần loại từ nào",
      buoc: [
        { so: 1, ten: "Sau a / an / very / mạo từ, trước danh từ → tính từ", de: "a ___ hobby, ___ photos, very ___.",
          vd: "câu 63 beautiful photos, 64 a very boring hobby, 67 a wonderful way, 69 musical sounds, 62 Hoa is very creative." },
        { so: 2, ten: "Sau tính từ sở hữu (our, my), sau giới từ, sau give you → danh từ", de: "develop our ___, use … as ___, give you ___.",
          vd: "câu 68 imagination, 65 decorations (số nhiều vì eggshells nhiều), 70 pleasure, 61 a stamp collector." },
        { so: 3, ten: "Đứng ngay sau chủ ngữ mà chưa có động từ → động từ", de: "it ___ my knowledge. Nhớ chủ ngữ it/he/she thì thêm -s.",
          vd: "câu 66 widens (không phải wide, wider hay widen)." },
        { so: 4, ten: "Đuôi -ing hay -ed?", de: "Vật, việc gây cảm giác → -ing (a boring hobby, an interesting book). Người mang cảm giác → -ed (I am bored).",
          vd: "câu 64: collecting old bowls is a very boring hobby → boring. Viết “bored hobby” là sai." },
      ],
      hop: { nhan: "Bảng đuôi từ hay gặp", chu: "Danh từ: -tion (imagination, decoration), -ure (pleasure), -or/-er (collector, painter), -ity (creativity). Tính từ: -ful (beautiful, wonderful), -ive (creative), -al (musical), -ing/-ed (boring/bored). Động từ: -en (widen), -ify (beautify)." },
    },
  ],
  doiChieu: [
    ["take up", "bắt đầu một sở thích"],
    ["give up", "bỏ"],
    ["take on", "nhận lấy (trách nhiệm)"],
    ["stay in shape / keep fit", "giữ sức khoẻ"],
    ["be keen on / fond of / interested in", "thích (ba giới từ khác nhau)"],
    ["go cycling · play chess · do yoga", "go: di chuyển · play: có bóng, nhạc cụ · do: còn lại"],
    ["boring (việc) / bored (người)", "chán (gây chán) / thấy chán"],
  ],
  meo: "keen ON, fond OF, interested IN — đọc to ba lần. go (đi ra ngoài), play (có bóng), do (còn lại). Word form: nhìn chữ NGAY TRƯỚC chỗ trống: a/very → tính từ; my/our/giới từ → danh từ; chủ ngữ → động từ có -s.",
  tuKiemTra: [
    { q: "My brother is very keen ___ playing chess.  A. in  B. on  C. of  D. at", a: "B. on — keen luôn đi với on." },
    { q: "Nam ___ mountain climbing every summer.  A. plays  B. does  C. goes  D. makes", a: "C. goes — hoạt động di chuyển ngoài trời → go + V-ing." },
    { q: "I ___ judo twice a week to stay in shape.  A. go  B. play  C. do  D. take", a: "C. do — môn võ, không bóng → do." },
    { q: "Why don’t you ___ swimming? It’s good for your health.  A. give up  B. take up  C. take on  D. put on", a: "B. take up — bắt đầu một sở thích mới." },
    { q: "Doing the gardening helps children become more ___.  A. responsible  B. lazy  C. bored  D. stressed", a: "A. responsible — tính từ khen, hợp nghĩa “helps”." },
    { q: "She is ___ of ice-skating because she loves winter sports.  A. keen  B. interested  C. fond  D. favourite", a: "C. fond — đề cho sẵn of → chỉ fond đúng." },
    { q: "Word form: Making models is a ___ hobby for creative children. (INTEREST)", a: "interesting — sau a, trước hobby → tính từ; việc gây hứng thú → -ing." },
    { q: "Word form: My aunt is a famous flower ___. (ARRANGE)", a: "arranger — sau a … flower, chỉ người → danh từ chỉ người." },
    { q: "Word form: Reading ___ your vocabulary. (RICH)", a: "enriches — sau chủ ngữ Reading, chưa có động từ → động từ, ngôi ba thêm -es." },
    { q: "Word form: Bird-watching brings me a lot of ___. (PLEASE)", a: "pleasure — sau a lot of → danh từ." },
    { q: "Word form: Our teacher is very ___ and always has new ideas. (CREATE)", a: "creative — sau very → tính từ." },
    { q: "Word form: She uses old bottles to make ___ for her room. (DECORATE)", a: "decorations — sau make, chỉ vật → danh từ, số nhiều." },
    { q: "Word form: My grandfather is a coin ___. (COLLECT)", a: "collector — người sưu tầm." },
    { q: "Sửa lỗi: “He enjoys to play the guitar in his free time.”", a: "enjoys playing — sau enjoy động từ phải thêm -ing." },
  ],
};

/* ===== Thứ Tư 30/09 · Ngữ pháp hiện tại đơn ===== */
window.KIM_GIANG["on-anh-0930"] = {
  mon: "anh",
  ngay: "2026-09-30",
  tieuDe: "Ôn Anh ngày 3 · Hiện tại đơn: khi nào dùng, chia thế nào và trạng từ đứng ở đâu",
  sgk: "Unit 1 A closer look 2 (tr. 11–12) · Đề cô: câu 31–40 (10 điểm) và một nửa phần viết",
  motCau: "Mười câu ngữ pháp của đề đều có bốn đáp án là bốn thì khác nhau (hiện tại đơn, hiện tại tiếp diễn, hiện tại hoàn thành, tương lai hoặc quá khứ), và cả mười câu đáp án đúng đều là hiện tại đơn. Bí quyết không phải biết hết các thì mà là nhận ra ba dấu hiệu bắt buộc dùng hiện tại đơn: chân lý luôn đúng, thói quen lặp lại, và động từ chỉ trạng thái (like, hate, consist).",
  phan: [
    {
      ten: "Ba lý do bắt buộc dùng hiện tại đơn",
      kn: [
        { ten: "Sự thật luôn đúng, khoa học, địa lý", de: "Nước gồm hydro và oxy, mặt trời mọc ở đằng đông, California ở Mỹ. Không có “will”, không có “is …ing”.",
          vd: "Đề câu 31 consists, 33 gives, 36 is not / is, 40 rises / sets, và câu viết 71 The sun rises in the East." },
        { ten: "Thói quen lặp lại, có dấu hiệu tần suất", de: "every day, often, usually, always, sometimes, at weekends, on weekdays, twice a week.",
          vd: "Đề câu 34 often go, 35 often gets up / has / goes, 38 takes / returns, 39 often rains." },
        { ten: "Động từ chỉ trạng thái, cảm xúc, sở hữu", de: "like, love, hate, want, need, know, believe, consist of, belong to, have (sở hữu). Những động từ này KHÔNG dùng dạng -ing dù đang xảy ra lúc này.",
          vd: "Đề câu 32: She hates it (không phải is hating). Câu 37: Cats like milk, but birds do not." },
      ],
      hop: { nhan: "Cách loại đáp án trong 5 giây", chu: "Thấy “is/are + V-ing” với like, hate, consist → gạch. Thấy “has/have + V3” mà câu nói chân lý hay thói quen → gạch. Thấy “will” mà câu nói việc luôn đúng → gạch. Còn lại một đáp án hiện tại đơn." },
    },
    {
      ten: "Chia đúng: ngôi ba thêm -s, phủ định và nghi vấn mượn do/does",
      buoc: [
        { so: 1, ten: "He / she / it / danh từ số ít → V-s, V-es", de: "Thêm -es sau s, sh, ch, x, o; phụ âm + y → -ies. Danh từ số nhiều (cats, people, my family members) thì KHÔNG thêm -s.",
          vd: "The sun rises. Water consists. Sarah takes her children. Cats like milk. My family members have different hobbies (câu 72)." },
        { so: 2, ten: "Phủ định: don’t / doesn’t + V nguyên thể", de: "Sau doesn’t, động từ bỏ -s.",
          vd: "Birds do not like milk. My best friend doesn’t like mountain climbing (câu 73)." },
        { so: 3, ten: "Nghi vấn: Do / Does + S + V, hoặc Is / Are + S khi câu có be", de: "Câu 74 có “interested” là tính từ, nên câu hỏi dùng Is: Is she interested in arranging flowers?",
          vd: "Does she like arranging flowers? / Is she interested in arranging flowers?" },
      ],
      hop: { nhan: "Lỗi hay gặp trong bài viết", chu: "Quên -s ở ngôi ba (“The sun rise”), thêm -s sau doesn’t (“doesn’t likes”), và dùng “Does she interested” (thiếu be). Đề câu 39 có đáp án C “Many people hates” — people là số nhiều nên đúng ra phải là “hate”; cô vẫn chọn C vì ba đáp án kia sai thì. Khi Kim viết, luôn dùng people + hate." },
    },
    {
      ten: "Trạng từ tần suất đứng ở đâu",
      buoc: [
        { so: 1, ten: "Trước động từ thường", de: "S + often/usually/always + V.", vd: "We often go to school. Peter often gets up at 7. It often rains. Câu 34 đáp án B “often go”, không phải A “go often”." },
        { so: 2, ten: "Sau động từ to be", de: "S + am/is/are + often/usually + …", vd: "She is always busy at weekends." },
        { so: 3, ten: "Cụm thời gian dài đứng đầu hoặc cuối câu", de: "every day, at weekends, on weekdays, in my free time, twice a week.", vd: "Every day, Sarah takes her children to school. She often takes photos in her free time." },
      ],
    },
  ],
  doiChieu: [
    ["consist of / like / hate", "động từ trạng thái → chỉ dùng hiện tại đơn"],
    ["every day, often, usually, at weekends", "dấu hiệu thói quen → hiện tại đơn"],
    ["The sun / Water / California …", "chân lý → hiện tại đơn"],
    ["he, she, it, Sarah, the sun", "động từ thêm -s"],
    ["cats, people, my family members", "động từ giữ nguyên"],
    ["often + V thường · be + often", "trạng từ trước động từ thường, sau be"],
  ],
  meo: "Đề Unit 1 chỉ kiểm tra hiện tại đơn: cứ thấy bốn đáp án bốn thì, chọn đáp án KHÔNG có is/are …ing, KHÔNG có has/have, KHÔNG có will. Rồi kiểm tra lại -s ngôi ba.",
  tuKiemTra: [
    { q: "The Earth ___ around the Sun.  A. is going  B. goes  C. has gone  D. will go", a: "B. goes — chân lý khoa học, chủ ngữ số ít thêm -es." },
    { q: "My mother ___ coffee. She only drinks tea.  A. is not liking  B. has not liked  C. does not like  D. will not like", a: "C. does not like — like là động từ trạng thái, phủ định mượn does not." },
    { q: "We ___ to the cinema at weekends.  A. go usually  B. are usually going  C. usually go  D. have usually gone", a: "C. usually go — thói quen; trạng từ đứng trước động từ thường." },
    { q: "Every morning, my father ___ up at 5, ___ jogging and then ___ breakfast.  A. gets / goes / has  B. is getting / going / has  C. got / went / had  D. has got / gone / had", a: "A — “Every morning” là thói quen, ngôi ba thêm -s cả ba động từ." },
    { q: "Ha Noi ___ in the south of Viet Nam. It ___ in the north.  A. has not been / is  B. is not / is  C. was not / has been  D. will not be / will be", a: "B. is not / is — sự thật địa lý." },
    { q: "A week ___ of seven days.  A. is consisting  B. consists  C. consist  D. has consisted", a: "B. consists — consist là động từ trạng thái, a week số ít." },
    { q: "Dogs ___ swimming, but cats ___.  A. are liking / are not  B. have liked / have not  C. like / do not  D. liked / did not", a: "C. like / do not — sự thật chung; dogs số nhiều nên like không -s; vế sau mượn do not." },
    { q: "She ___ always ___ late for school.  A. is / –  B. does / is  C. – / is", a: "A. She is always late — trạng từ tần suất đứng sau be." },
    { q: "Viết đúng: “My sister not like horse riding because she afraid horses.”", a: "My sister doesn’t like horse riding because she is afraid of horses. (thêm doesn’t, thêm is, thêm of)" },
    { q: "Viết câu hỏi từ: you / interested / collect / stamps?", a: "Are you interested in collecting stamps? — có tính từ interested → dùng Are, giới từ in, động từ sau in thêm -ing." },
    { q: "Vì sao “Many people hates living in Seattle” là câu sai dù cô chọn C?", a: "people là danh từ số nhiều (nghĩa là “mọi người”), động từ không thêm -s: Many people hate living in Seattle. Trong đề, C vẫn là đáp án duy nhất có “often rains” đúng thì nên chọn C, nhưng khi tự viết Kim dùng hate." },
  ],
};

/* ===== Thứ Năm 01/10 · Đọc hiểu và nghe ===== */
window.KIM_GIANG["on-anh-1001"] = {
  mon: "anh",
  ngay: "2026-10-01",
  tieuDe: "Ôn Anh ngày 4 · Bốn dạng bài đọc và cách nghe không bị cuốn theo băng",
  sgk: "Unit 1 Skills 1, Skills 2 (tr. 13–14) · Đề cô: câu 41–52 đọc (12 điểm), câu 53–60 nghe (8 điểm)",
  motCau: "Phần đọc của đề không hỏi nghĩa cả bài mà hỏi bốn kiểu nhỏ: điền từ vào chỗ trống, đọc biển báo, ghép câu bị cắt ra vào đúng chỗ, và chọn câu chủ đề rồi sắp thứ tự câu. Mỗi kiểu có một dấu hiệu riêng để làm đúng mà không cần hiểu hết từ. Phần nghe thì thắng thua ở 30 giây đọc câu hỏi trước khi băng chạy.",
  phan: [
    {
      ten: "Dạng 1 · Điền từ vào đoạn văn (câu 41–44): nhìn từ đứng hai bên chỗ trống",
      buoc: [
        { so: 1, ten: "Từ đứng trước là và (and) → cùng loại với từ trước and", de: "have fun and ___ → have fun là động từ, nên ___ cũng là động từ.", vd: "câu 41: relax (unique, bored, good là tính từ, loại ngay)." },
        { so: 2, ten: "Chỗ trống đứng trước danh từ → cần tính từ", de: "paint ___ pictures.", vd: "câu 42: beautiful (beautifully là trạng từ, beautify động từ, beauty danh từ)." },
        { so: 3, ten: "Nhìn danh từ đi sau để chọn động từ", de: "___ new friends: kết bạn là make hoặc meet friends.", vd: "câu 43: meet (display, arrange, collect không đi với friends)." },
        { so: 4, ten: "Cụm cố định với giới từ", de: "perfect FOR you, good FOR your health, keen ON, fond OF.", vd: "câu 44: for." },
      ],
      hop: { nhan: "Thứ tự làm", chu: "Đọc cả câu chứa chỗ trống trước khi nhìn đáp án. Hỏi: chỗ này cần loại từ gì? Loại 2 đáp án sai loại từ rồi mới chọn theo nghĩa." },
    },
    {
      ten: "Dạng 2 · Biển báo (câu 45–46): vòng tròn đỏ gạch chéo nghĩa là cấm",
      kn: [
        { ten: "Vòng đỏ + gạch chéo = No … / Don’t …", de: "No smoking, No parking, No swimming, Don’t play soccer here, No entry (vòng đỏ có gạch ngang trắng).",
          vd: "Đề: điếu thuốc bị gạch → A. No smoking. Người đá bóng bị gạch → D. Don’t play soccer here." },
        { ten: "Vòng xanh = phải làm, tam giác vàng = cảnh báo", de: "Turn right, Keep left (xanh); Slippery floor, Danger (vàng).",
          vd: "Mũi tên trong vòng xanh là “hãy rẽ”, không phải “cấm rẽ”." },
        { ten: "Lưu ý câu 46 của đề", de: "Bốn đáp án xếp A, C, B, D (lỗi in). Đọc kĩ chữ cái trước khi khoanh.", vd: "Đáp án là D. Don’t play soccer here." },
      ],
    },
    {
      ten: "Dạng 3 · Ghép câu bị cắt (câu 47–50): dựa vào chữ hoa, dấu phẩy và từ nối",
      buoc: [
        { so: 1, ten: "Câu bắt đầu bằng chữ thường, có but/and/because → ghép sau dấu phẩy", de: "“, (50) ___.” đi với “but the teachers and other children weren’t interested”.", vd: "câu 50 → B." },
        { so: 2, ten: "Chỗ trống đứng sau “She thinks she” → cần động từ, không có chủ ngữ", de: "“will need to get another shelf soon” không có chủ ngữ, nối tiếp “she”.", vd: "câu 49 → D." },
        { so: 3, ten: "Then / After that → đứng sau một hành động vừa kể", de: "“She needs about two weeks to make a model. (48) ___” → Then she puts it on the shelf: “it” là cái mô hình vừa làm.", vd: "câu 48 → A." },
        { so: 4, ten: "Câu còn lại là câu chung, đặt ở đầu", de: "“She loves making models” giới thiệu chung, hợp ngay sau câu mở đầu.", vd: "câu 47 → C." },
      ],
      hop: { nhan: "Mẹo", chu: "Làm câu dễ nhất trước (câu bắt đầu bằng chữ thường, câu thiếu chủ ngữ), câu khó để cuối cùng vì chỉ còn một đáp án." },
    },
    {
      ten: "Dạng 4 · Câu chủ đề và sắp xếp câu (câu 51–52)",
      buoc: [
        { so: 1, ten: "Câu chủ đề phải nêu đúng cái mà cả đoạn nói", de: "Đoạn nói về “I” và “this hobby” → câu mở đầu phải có “I” và “hobby”. Câu nói chung về nút áo (A), về sưu tầm nói chung (C), hay về việc mất nút (D) đều lệch.",
          vd: "câu 51 → B. I have an unusual hobby: collecting buttons." },
        { so: 2, ten: "Sắp xếp: tìm câu nối được với câu đứng sau chỗ trống", de: "Sau chỗ trống là “Also, they come in various sizes…” → câu ngay trước phải đang liệt kê lý do thích (b: buttons have a long history… materials). Câu a “not only interesting but also practical” dẫn vào câu “not expensive, useful” phía sau.",
          vd: "câu 52 → D. b-a-c." },
        { so: 3, ten: "Câu lạc đề để cuối hoặc loại", de: "c “Many people enjoy collecting stamps or coins” nói về người khác, không hợp giữa đoạn nói về “I”.", vd: "Trong đáp án D, c đứng cuối cùng." },
      ],
    },
    {
      ten: "Nghe (câu 53–60): thắng ở 30 giây đầu",
      buoc: [
        { so: 1, ten: "Đọc trước 8 câu, gạch tên người và từ khoá", de: "Tom, Nick, Ben, Kim; 3 years ago, mom, difficult, glass bottles. Khi băng đọc đến tên là dỏng tai.", vd: "“What is Tom playing?” → chờ chữ Tom rồi nghe môn thể thao ngay sau." },
        { so: 2, ten: "Lần nghe 1 khoanh nháp, lần nghe 2 kiểm tra", de: "Không dừng lại nghĩ một câu quá lâu, lỡ câu sau.", vd: "Câu 53–56 đáp án cô: B basketball, C phoning a friend, D sleeping, B table tennis." },
        { so: 3, ten: "Câu True/False: bẫy số và bẫy người", de: "Băng nói “two years ago” mà đề ghi 3 years → False. Băng nói “my mom” → câu “shares with her mom” True.", vd: "Câu 57 đáp án False, câu 58 True." },
      ],
      hop: { nhan: "Mẹ lưu ý", chu: "Không có file nghe đi kèm đề, nên hôm nay chỉ luyện cách làm. Nếu xin được audio của cô thì cho Kim nghe hai lần đúng như thi; nếu không, mẹ đọc to đoạn hội thoại Unit 1 Skills 2 (tr. 14) cho Kim làm True/False." },
    },
  ],
  doiChieu: [
    ["best fits each of the numbered blanks", "điền từ hợp nhất vào chỗ trống"],
    ["What does the sign say?", "biển báo nói gì → vòng đỏ gạch = cấm"],
    ["phrases/sentences have been removed", "câu bị cắt khỏi bài, ghép lại đúng chỗ"],
    ["topic sentence", "câu chủ đề: nêu ý cả đoạn, có từ khoá chính"],
    ["put in the correct order", "xếp thứ tự: tìm câu nối với câu đứng ngay sau"],
    ["decide True or False", "băng nói khác một chi tiết (số, người) là False"],
  ],
  meo: "Đọc: nhìn hai bên chỗ trống trước, nhìn đáp án sau. Ghép câu: chữ thường đi sau dấu phẩy, thiếu chủ ngữ đi sau “she”. Nghe: gạch tên người trước khi băng chạy.",
  tuKiemTra: [
    { q: "Điền: “Hobbies help you relax and ___ stress.” A. reducing  B. reduce  C. reduction  D. reduced", a: "B. reduce — sau help you + relax and → động từ nguyên thể, cùng loại với relax." },
    { q: "Điền: “You can make ___ things from old bottles.” A. use  B. useful  C. usefully  D. usefulness", a: "B. useful — trước danh từ things cần tính từ." },
    { q: "Điền: “Collecting stamps is good ___ your memory.” A. at  B. on  C. for  D. with", a: "C. for — good for = tốt cho." },
    { q: "Biển: vòng tròn đỏ, hình con chó bị gạch chéo. Biển nói gì?", a: "No dogs (allowed) — cấm mang chó vào." },
    { q: "Biển: vòng tròn đỏ, hình người bơi bị gạch chéo.", a: "No swimming." },
    { q: "Ghép: “Lan started her hobby two years ago, (1) ___. She thinks it (2) ___.” Đáp án: A. but her brother doesn’t like it  B. is a useful hobby", a: "(1) A — chữ thường, bắt đầu bằng but, đi sau dấu phẩy. (2) B — sau “it” cần động từ." },
    { q: "Câu chủ đề cho đoạn: “… I go fishing with my dad every Sunday. We sit by the river and talk. I love the quiet time with him.” A. Fishing is a popular sport.  B. My favourite hobby is fishing with my dad.  C. Rivers are beautiful.", a: "B — đoạn nói về “I”, “my dad”, “fishing”; A và C nói chung chung." },
    { q: "Xếp thứ tự: a. Also, it is cheap.  b. I like cycling for two reasons.  c. First, it keeps me fit.", a: "b – c – a: câu nêu “two reasons” đứng đầu, First rồi Also." },
    { q: "Nghe True/False: đề ghi “Mai has 30 models”, băng nói “about twenty models”. Đáp án?", a: "False — số khác nhau là False." },
    { q: "Trước khi băng chạy, việc đầu tiên Kim làm là gì?", a: "Đọc hết câu hỏi, gạch tên người và từ khoá (số, ai, việc gì)." },
  ],
};

/* ===== Thứ Sáu 02/10 · Viết ===== */
window.KIM_GIANG["on-anh-1002"] = {
  mon: "anh",
  ngay: "2026-10-02",
  tieuDe: "Ôn Anh ngày 5 · Viết câu từ từ gợi ý và viết lại câu giữ nguyên nghĩa",
  sgk: "Unit 1 A closer look 2, Looking back · Đề cô: câu 71–80 (10 điểm), mỗi câu 1 điểm",
  motCau: "Phần viết là phần duy nhất Kim phải tự viết ra, và cũng là phần dễ mất điểm vì thiếu một chữ nhỏ: thiếu -s, thiếu “the”, thiếu “of”, thiếu -ing. Đề có ba kiểu: viết câu hoàn chỉnh từ chuỗi từ gợi ý (câu 71–74), viết lại câu theo phần mở đầu cho sẵn (75–76), và viết lại câu dùng từ cho sẵn (77–80). Kiểu 3 chỉ có năm khuôn, học thuộc năm khuôn là chắc 4 điểm.",
  phan: [
    {
      ten: "Kiểu 1 · Từ chuỗi gợi ý thành câu: bốn thứ phải tự thêm",
      buoc: [
        { so: 1, ten: "Thêm mạo từ the / a", de: "sun/ rise/ in/ east → THE sun rises in THE East.", vd: "câu 71. Quên “the” trước sun là mất nửa điểm." },
        { so: 2, ten: "Chia động từ và số nhiều", de: "My/ family member/ have/ different/ hobby → My family memberS have different hobbIES. Chủ ngữ nhiều người thì danh từ số nhiều, động từ không -s.", vd: "câu 72. Viết “My family member has different hobby” là sai hai chỗ." },
        { so: 3, ten: "Thêm be và giới từ đi kèm tính từ", de: "he/ afraid/ heights → he IS afraid OF heights. not/ like → doesn’t like.", vd: "câu 73: My best friend doesn’t like mountain climbing because he is afraid of heights." },
        { so: 4, ten: "Dấu hỏi cuối dòng gợi ý → viết câu hỏi", de: "She/ interested/ arrange/ flowers? → IS she interested IN arrangING flowers?", vd: "câu 74. Ba chỗ phải thêm: Is, in, -ing." },
      ],
      hop: { nhan: "Kiểm tra lại theo thứ tự", chu: "Có chủ ngữ chưa? Động từ chia đúng chưa (ngôi ba -s)? Trước danh từ số ít có a/the chưa? Sau tính từ có giới từ chưa (afraid of, interested in, keen on, fond of, good at)? Cuối câu có dấu chấm hoặc dấu hỏi chưa?" },
    },
    {
      ten: "Kiểu 2 · Viết lại theo phần mở đầu cho sẵn",
      kn: [
        { ten: "I think that X is + tính từ → I find X + tính từ", de: "find + tân ngữ + tính từ, KHÔNG có “that”, KHÔNG có “is”.",
          vd: "câu 75: I find ice-skating difficult. Viết “I find that ice-skating is difficult” là sai khuôn." },
        { ten: "go to work by motorbike → ride his motorbike to work", de: "by bike / by motorbike → ride(s); by car → drive(s); on foot → walk(s); by bus → take(s) the bus.",
          vd: "câu 76: Van’s brother usually rides his motorbike to work. Giữ nguyên usually và -s." },
      ],
    },
    {
      ten: "Kiểu 3 · Viết lại dùng từ cho sẵn: năm khuôn thuộc lòng",
      buoc: [
        { so: 1, ten: "(ENJOY): like V-ing very much → enjoy V-ing very much", de: "Giữ nguyên “very much”, giữ -s ngôi ba.", vd: "câu 77: He enjoys watching football very much." },
        { so: 2, ten: "(HOBBY): I find V-ing interesting → My hobby is V-ing", de: "Hoặc: V-ing is my hobby.", vd: "câu 78: My hobby is collecting glass bottles." },
        { so: 3, ten: "(KEEN): often does X in free time → be keen on V-ing", de: "keen + on + V-ing. Có thể giữ “in her free time” ở cuối.", vd: "câu 79: She is keen on taking photos (in her free time)." },
        { so: 4, ten: "(FAVOURITE): X is what I like most → My favourite hobby is X", de: "favourite viết theo Anh-Anh có u, đề cho sẵn chữ nào thì chép đúng chữ đó.", vd: "câu 80: My favourite hobby is playing the piano." },
        { so: 5, ten: "(FOND / INTERESTED): like V-ing → be fond of V-ing / be interested in V-ing", de: "Cùng nghĩa với keen on, chỉ khác giới từ.", vd: "She likes reading → She is fond of reading / She is interested in reading." },
      ],
      hop: { nhan: "Ba lỗi mất điểm nhiều nhất", chu: "1. Sau enjoy, keen on, fond of, hobby is → quên -ing (“enjoys watch”). 2. Đổi chủ ngữ mà quên đổi động từ (“She keen on”: thiếu is). 3. Bỏ rơi một phần của câu gốc (“very much”, “in her free time”, “usually”) — cô có thể trừ vì nghĩa không còn giữ nguyên." },
    },
  ],
  doiChieu: [
    ["Write complete sentences, using the given words", "viết câu đủ, tự thêm a/the, be, giới từ, -s, -ing"],
    ["Rewrite without changing the meaning", "viết lại, nghĩa giữ nguyên, theo phần cho sẵn"],
    ["using the word given", "phải dùng đúng từ trong ngoặc, không đổi dạng của nó quá xa"],
    ["I find X + adj", "tôi thấy X là …"],
    ["enjoy / keen on / fond of / hobby is + V-ing", "bốn cách nói thích, đều -ing"],
  ],
  meo: "Viết xong đọc lại một lượt chỉ để tìm bốn thứ: -s, the, giới từ, -ing. Bốn thứ này là 90% lỗi của phần viết.",
  tuKiemTra: [
    { q: "Viết câu: My mother/ do/ yoga/ every morning.", a: "My mother does yoga every morning. (does, không phải do)" },
    { q: "Viết câu: Peter/ keen/ play/ video games/ at weekends.", a: "Peter is keen on playing video games at weekends. (thêm is, on, -ing)" },
    { q: "Viết câu: You/ interested/ collect/ coins?", a: "Are you interested in collecting coins? (Are, in, -ing, dấu hỏi)" },
    { q: "Viết câu: Water/ boil/ at/ 100 degrees.", a: "Water boils at 100 degrees. (chân lý, boils có -s)" },
    { q: "Viết lại: I think that model making is easy. → I find …", a: "I find model making easy." },
    { q: "Viết lại: My father goes to work by car. → My father …", a: "My father drives his car to work. / My father drives to work." },
    { q: "Viết lại: My sister goes to school on foot. → My sister …", a: "My sister walks to school." },
    { q: "Viết lại (ENJOY): Nam likes playing chess very much.", a: "Nam enjoys playing chess very much." },
    { q: "Viết lại (HOBBY): I find making models interesting.", a: "My hobby is making models. / Making models is my hobby." },
    { q: "Viết lại (KEEN): They often go camping in the summer.", a: "They are keen on going camping in the summer. (they → are)" },
    { q: "Viết lại (FAVOURITE): Gardening is what my grandma likes most.", a: "My grandma’s favourite hobby is gardening. / Gardening is my grandma’s favourite hobby." },
    { q: "Viết lại (FOND): Mi likes arranging flowers.", a: "Mi is fond of arranging flowers." },
    { q: "Tìm lỗi: “She is keen on take photos in her free time.”", a: "take → taking: sau on động từ phải -ing." },
    { q: "Tìm lỗi: “I find that ice-skating difficult.”", a: "Bỏ that: I find ice-skating difficult." },
  ],
};

/* ===== Thứ Bảy 03/10 · Đề thi thử rút gọn ===== */
window.KIM_GIANG["on-anh-1003"] = {
  mon: "anh",
  ngay: "2026-10-03",
  tieuDe: "Ôn Anh ngày 6 · Đề thử 40 câu theo đúng khuôn đề cô và mười lỗi hay mất điểm",
  sgk: "Tổng hợp năm bài ôn 28/09–02/10 · Làm trong 30 phút, mẹ chấm theo đáp án ở phần tự kiểm tra",
  motCau: "Hôm nay không học gì mới. Kim làm đề thử 40 câu (mỗi dạng lấy đúng tỉ lệ như đề cô, bỏ phần nghe) trong 30 phút, không mở sách. Làm xong mới bấm từng câu ở phần tự kiểm tra để so đáp án. Đếm xem sai ở dạng nào nhiều nhất rồi mở lại đúng bài ôn của dạng đó trong 10 phút. Trước khi làm, đọc mười lỗi ở phần 2.",
  phan: [
    {
      ten: "Phân bổ thời gian cho đề 80 câu (45 phút)",
      buoc: [
        { so: 1, ten: "Ngữ âm 20 câu · 6 phút", de: "Làm nhanh, không quay lại. Câu nào phân vân, khoanh tạm và đánh dấu.", vd: "Trung bình 18 giây một câu." },
        { so: 2, ten: "Từ vựng, ngữ pháp 20 câu · 9 phút", de: "Câu ngữ pháp loại ba đáp án sai thì trước.", vd: "Nhớ: đề Unit 1 gần như chỉ có hiện tại đơn." },
        { so: 3, ten: "Đọc 12 câu · 10 phút", de: "Ghép câu làm câu dễ trước.", vd: "Câu bắt đầu bằng chữ thường và câu thiếu chủ ngữ làm trước, câu còn lại tự khớp." },
        { so: 4, ten: "Word form 10 câu · 6 phút", de: "Nhìn chữ ngay trước chỗ trống.", vd: "a/very → tính từ; my/our → danh từ; chủ ngữ → động từ -s." },
        { so: 5, ten: "Viết 10 câu · 12 phút", de: "Viết xong dò bốn thứ: -s, the, giới từ, -ing.", vd: "Còn 2 phút cuối dò lại phần đánh dấu." },
      ],
      hop: { nhan: "Phần nghe", chu: "Nghe thường làm đầu giờ theo băng của cô. Trong lúc cô phát đề, đọc trước 8 câu nghe và gạch tên người." },
    },
    {
      ten: "Mười lỗi hay mất điểm nhất trong đề Unit 1",
      kn: [
        { ten: "1. Chọn /ə/ hay /ɜː/ theo mặt chữ", de: "Cùng viết er nhưng letter đọc /ə/, verb đọc /ɜː/. Phải xét có nhấn không.", vd: "letter, pepper, computer → /ə/; verb, person, nervous → /ɜː/." },
        { ten: "2. laughs, photographs xếp vào /z/", de: "gh, ph đọc /f/ là âm vô thanh → /s/.", vd: "laughs, coughs, photographs, graphs → /s/." },
        { ten: "3. words xếp vào /s/", de: "Âm trước s là d → /z/.", vd: "words, birds, friends, needs → /z/." },
        { ten: "4. do cycling, play yoga", de: "go cycling, do yoga.", vd: "go swimming · play tennis · do karate." },
        { ten: "5. keen in, fond on, interested of", de: "keen ON, fond OF, interested IN.", vd: "keen on reading · fond of reading · interested in reading." },
        { ten: "6. She is hating / Water is consisting", de: "Động từ trạng thái không dùng -ing.", vd: "She hates it. Water consists of hydrogen and oxygen." },
        { ten: "7. go often, is often go", de: "often GO; IS often + tính từ.", vd: "We often go. She is often late." },
        { ten: "8. a bored hobby, beauty photos", de: "boring hobby (vật gây chán), beautiful photos (tính từ trước danh từ).", vd: "a boring hobby · I am bored · beautiful photos." },
        { ten: "9. widen my knowledge (thiếu -s), family member have", de: "it widenS; family memberS have.", vd: "It widens my knowledge. My family members have different hobbies." },
        { ten: "10. enjoys to watch, I find that … is", de: "enjoys watchING; I find X + tính từ.", vd: "He enjoys watching football. I find ice-skating difficult." },
      ],
    },
    {
      ten: "Đề thử 40 câu (đáp án ở phần tự kiểm tra phía dưới, đúng số câu)",
      doan: [
        "NGỮ ÂM (10 câu, chọn từ có phần gạch chân đọc khác). 1. A. burn B. hurt C. picture D. nurse (gạch ur/ure) · 2. A. doctor B. actor C. world D. color (gạch or) · 3. A. earth B. early C. heart D. learn (gạch ear) · 4. A. teacher B. father C. mother D. person (gạch er) · 5. A. ago B. apple C. about D. again (gạch a đầu) · 6. A. maps B. cups C. bags D. hats (đuôi s) · 7. A. reads B. needs C. eats D. feeds · 8. A. laughs B. coughs C. sings D. lifts · 9. A. brushes B. watches C. boxes D. walks · 10. A. models B. stamps C. flowers D. coins.",
        "TỪ VỰNG (5 câu). 11. My uncle ___ fishing every Sunday. A. plays B. goes C. does D. makes · 12. I ___ karate twice a week. A. go B. play C. do D. take · 13. Why don’t you ___ a new hobby? A. give up B. take off C. take up D. put on · 14. She is very ___ on collecting dolls. A. fond B. interested C. keen D. crazy · 15. Gardening helps me stay in ___. A. shape B. fit C. sport D. health.",
        "NGỮ PHÁP (5 câu). 16. The Moon ___ around the Earth. A. is going B. goes C. has gone D. went · 17. My brother ___ spiders. A. is hating B. has hated C. hates D. will hate · 18. We ___ to the park on Sundays. A. go often B. often go C. are often going D. have often gone · 19. Every day, Lan ___ up at 6 and ___ to school at 7. A. gets / goes B. is getting / going C. got / went D. has got / gone · 20. Fish ___ in water, but birds ___. A. are living / are not B. live / do not C. lived / did not D. have lived / have not.",
        "ĐỌC — điền từ (4 câu). “Do you want to have fun and (21) ___? Try a new hobby! You can take (22) ___ photos, learn to cook, or make models. Hobbies help you (23) ___ new friends. They are good (24) ___ your health, too.” 21. A. relax B. relaxing C. relaxed D. relaxation · 22. A. beauty B. beautiful C. beautifully D. beautify · 23. A. arrange B. make C. collect D. display · 24. A. at B. with C. for D. to.",
        "ĐỌC — biển báo (2 câu). 25. Vòng đỏ, hình cái điện thoại bị gạch chéo: A. No phones B. No parking C. Turn left D. No entry · 26. Vòng đỏ, hình chiếc xe đạp bị gạch chéo: A. Ride your bike here B. No cycling C. No walking D. Bikes for sale.",
        "ĐỌC — ghép câu (3 câu). “Minh loves bird-watching. (27) ___. Every Sunday he goes to the park with his binoculars, (28) ___. He thinks he (29) ___.” A. but his sister never goes with him · B. He started this hobby two years ago · C. will join a bird-watching club next year.",
        "ĐỌC — câu chủ đề (1 câu). 30. “___. I started it when I was eight. Now I have more than one hundred stamps from many countries. I keep them in three albums.” A. Stamps are small pieces of paper. B. My hobby is collecting stamps. C. Many people like travelling. D. Albums are expensive.",
        "WORD FORM (5 câu). 31. My cousin is a famous model ___. (MAKE) · 32. Reading ___ our minds. (WIDE) · 33. Hoa is a very ___ girl; she draws very well. (CREATE) · 34. Bird-watching is a ___ hobby for old people. (RELAX) · 35. We use these shells as ___ for the garden. (DECORATE)",
        "VIẾT (5 câu). 36. sun/ set/ in/ west. · 37. My friend/ not/ like/ ice-skating/ because/ she/ afraid/ fall. · 38. I think that gardening is relaxing. → I find … · 39. (ENJOY) Mi likes making models very much. · 40. (KEEN) My dad often goes fishing at weekends.",
      ],
    },
  ],
  doiChieu: [
    ["Sai 3 câu ngữ âm trở lên", "mở lại bài ngày 1 (28/09)"],
    ["Sai 2 câu từ vựng hoặc word form trở lên", "mở lại bài ngày 2 (29/09)"],
    ["Sai 2 câu ngữ pháp trở lên", "mở lại bài ngày 3 (30/09)"],
    ["Sai 3 câu đọc trở lên", "mở lại bài ngày 4 (01/10)"],
    ["Sai 2 câu viết trở lên", "mở lại bài ngày 5 (02/10)"],
  ],
  meo: "Mục tiêu đề thử: 34/40. Dưới 30 thì tối nay ôn lại một bài, không ôn cả năm bài.",
  tuKiemTra: [
    { q: "1–5 (ngữ âm /ə/ – /ɜː/)", a: "1C picture (/ə/; ba từ kia /ɜː/) · 2C world (/ɜː/; doctor, actor, color đuôi -or /ə/) · 3C heart (/ɑː/) · 4D person (/ɜː/; ba từ kia đuôi -er /ə/) · 5B apple (/æ/; ago, about, again a đầu /ə/)." },
    { q: "6–10 (đuôi -s)", a: "6C bags (/z/) · 7C eats (/s/; reads, needs, feeds âm cuối d → /z/) · 8C sings (/z/; laughs, coughs, lifts /s/) · 9D walks (/s/; ba từ kia /ɪz/) · 10B stamps (/s/; models, flowers, coins /z/)." },
    { q: "11–15 (từ vựng)", a: "11B goes fishing · 12C do karate · 13C take up · 14C keen (đề cho on) · 15A stay in shape." },
    { q: "16–20 (ngữ pháp)", a: "16B goes (chân lý) · 17C hates (động từ trạng thái) · 18B often go · 19A gets / goes · 20B live / do not (fish số nhiều, không -s)." },
    { q: "21–24 (điền từ)", a: "21A relax (và + động từ) · 22B beautiful (trước photos) · 23B make friends · 24C good for." },
    { q: "25–26 (biển báo)", a: "25A No phones · 26B No cycling." },
    { q: "27–29 (ghép câu)", a: "27B He started this hobby two years ago (câu chữ hoa, đủ chủ ngữ) · 28A but his sister never goes with him (chữ thường, sau dấu phẩy) · 29C will join … (sau “he”, thiếu chủ ngữ)." },
    { q: "30 (câu chủ đề)", a: "B — đoạn nói về “I”, “stamps”, “albums”." },
    { q: "31–35 (word form)", a: "31 maker · 32 widens (có -s) · 33 creative · 34 relaxing (hobby gây thư giãn → -ing) · 35 decorations." },
    { q: "36–40 (viết)", a: "36 The sun sets in the West. · 37 My friend doesn’t like ice-skating because she is afraid of falling. · 38 I find gardening relaxing. · 39 Mi enjoys making models very much. · 40 My dad is keen on going fishing at weekends." },
    { q: "Cách chấm", a: "Mỗi câu 1 điểm, câu viết trừ 0,5 nếu sai một trong bốn thứ (-s, the, giới từ, -ing). Ghi số câu sai theo từng dạng vào bảng “Sai … trở lên” ở trên để biết tối nay ôn lại bài nào." },
  ],
};
