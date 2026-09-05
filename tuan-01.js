/* TUẦN 1 — Khởi động năm học
   Toán: song song Đại (Bài 1) + Hình (Bài 8). KHTN tuần tự: Bài 1.
   Cấu trúc: monHoc = thẻ "tuần này học gì"; ngay = 5 lượt kiểm tra T2–T6; docTruoc = đọc trước.
   Mỗi câu: q (đề), a (4 lựa chọn), dung (chỉ số 0–3 của đáp án đúng), gt (giải thích), cd (chủ đề để gom lỗi). */
window.KIM_WEEKS = window.KIM_WEEKS || {};
window.KIM_WEEKS[1] = {
  tuan: 1,
  ten: "Khởi động",
  icon: "🌱",
  monHoc: [
    { mon: "Toán", icon: "➗", hoc: "Đại số: Bài 1 Tập hợp các số hữu tỉ (ℚ): số viết được dạng a/b, so sánh, biểu diễn trên trục số. Hình: Bài 8 Góc ở vị trí đặc biệt (kề bù, đối đỉnh) và tia phân giác.", vap: "Nhầm khi so sánh hai số hữu tỉ âm (−2/3 lớn hơn −3/4 vì gần 0 hơn). Quên hai góc kề bù cộng lại bằng 180°." },
    { mon: "Ngữ văn", icon: "✍️", hoc: "Bài 1 Bầu trời tuổi thơ: tri thức về truyện (đề tài, chi tiết, tính cách nhân vật) và văn bản Bầy chim chìa vôi (Nguyễn Quang Thiều).", vap: "Đọc lướt, không nhớ được sự việc chính xảy ra theo thứ tự nào. Khi hỏi tính cách nhân vật, chỉ nói 'tốt bụng' mà không dẫn chi tiết." },
    { mon: "Tiếng Anh", icon: "🇬🇧", hoc: "Unit 1 Hobbies: từ vựng về sở thích, động từ chỉ thích/ghét + V-ing (love doing, enjoy doing), phát âm /ə/ và /ɜː/.", vap: "Viết 'enjoy to do' thay vì 'enjoy doing'. Quên thêm -s cho ngôi thứ ba số ít." },
    { mon: "KHTN", icon: "🔬", hoc: "Bài 1 Phương pháp và kĩ năng học tập môn KHTN: các bước tìm hiểu tự nhiên, kĩ năng quan sát, phân loại, dự báo, đo; dụng cụ đo thời gian hiện số, dao động kí.", vap: "Bài nhẹ nhưng đề hay hỏi thứ tự các bước của phương pháp tìm hiểu tự nhiên." },
    { mon: "Sử – Địa", icon: "🗺️", hoc: "Lịch sử: Bài 1 Quá trình hình thành và phát triển chế độ phong kiến ở Tây Âu (lãnh địa, lãnh chúa, nông nô). Địa lí: Bài 1 Vị trí địa lí, đặc điểm tự nhiên châu Âu.", vap: "Nhớ được từ 'lãnh địa' nhưng không nói được nó vận hành thế nào (tự cung tự cấp, khép kín)." },
  ],
  monKhac: "GDCD Bài 1 Tự hào truyền thống quê hương · Tin học Bài 1 Thiết bị vào – ra · Công nghệ Bài 1 Giới thiệu về trồng trọt · HĐTN Chủ đề 1 Em với nhà trường.",
  ngay: [
    { thu: 2, mon: "toan", ten: "Toán · Số hữu tỉ", cauHoi: [
      { q: "Trong các số −3; 0,5; 2/7; 0, những số nào là số hữu tỉ?", a: ["Chỉ 2/7", "Chỉ −3 và 2/7", "Cả bốn số", "Chỉ 0,5 và 2/7"], dung: 2, gt: "Số hữu tỉ là số viết được dạng a/b với a, b nguyên, b ≠ 0. −3 = −3/1; 0,5 = 1/2; 0 = 0/1. Nên cả bốn đều là số hữu tỉ.", cd: "Nhận biết số hữu tỉ" },
      { q: "Số đối của −5/8 là số nào?", a: ["−8/5", "5/8", "8/5", "−5/8"], dung: 1, gt: "Số đối của a là −a. Số đối của −5/8 là 5/8 (hai số cộng lại bằng 0).", cd: "Số đối" },
      { q: "So sánh −2/3 và −3/4.", a: ["−2/3 < −3/4", "−2/3 = −3/4", "−2/3 > −3/4", "Không so sánh được"], dung: 2, gt: "Quy đồng: −2/3 = −8/12, −3/4 = −9/12. Vì −8 > −9 nên −2/3 > −3/4. Mẹo: số âm nào gần 0 hơn thì lớn hơn.", cd: "So sánh số hữu tỉ" },
      { q: "Trên trục số, điểm biểu diễn số 3/2 nằm ở đâu?", a: ["Giữa 0 và 1", "Giữa 1 và 2", "Giữa 2 và 3", "Bên trái số 0"], dung: 1, gt: "3/2 = 1,5 nên nằm giữa 1 và 2, cách đều hai số này.", cd: "Trục số" },
      { q: "Viết 0,75 dưới dạng phân số tối giản.", a: ["75/100", "3/4", "7/5", "15/20"], dung: 1, gt: "0,75 = 75/100. Chia cả tử và mẫu cho 25 được 3/4.", cd: "Đổi số thập phân sang phân số" },
      { q: "Số nào dưới đây KHÔNG bằng −1/2?", a: ["−2/4", "1/(−2)", "−0,5", "(−2)/(−4)"], dung: 3, gt: "(−2)/(−4) = 2/4 = 1/2, là số dương. Ba số còn lại đều bằng −1/2.", cd: "Phân số bằng nhau, dấu của phân số" },
      { q: "Tập hợp các số hữu tỉ được kí hiệu là gì?", a: ["ℕ", "ℤ", "ℚ", "ℝ"], dung: 2, gt: "ℕ là số tự nhiên, ℤ là số nguyên, ℚ là số hữu tỉ, ℝ là số thực (học ở chương II).", cd: "Kí hiệu tập hợp số" },
    ]},
    { thu: 3, mon: "van", ten: "Văn · Bầy chim chìa vôi", cauHoi: [
      { q: "Tác giả của văn bản Bầy chim chìa vôi là ai?", a: ["Đoàn Giỏi", "Nguyễn Quang Thiều", "Võ Quảng", "Nguyễn Ngọc Thuần"], dung: 1, gt: "Bầy chim chìa vôi của Nguyễn Quang Thiều. Đoàn Giỏi viết Đất rừng phương Nam (trích Đi lấy mật, học tuần sau).", cd: "Tác giả – tác phẩm" },
      { q: "Hai nhân vật chính trong truyện là ai?", a: ["An và Cò", "Mên và Mon", "Mon và bố", "Hai chị em Mên"], dung: 1, gt: "Truyện kể về hai anh em Mên và Mon trong một đêm mưa lớn.", cd: "Nhân vật" },
      { q: "Sự việc chính của truyện là gì?", a: ["Hai anh em đi câu cá ban đêm", "Hai anh em lo bầy chim chìa vôi non ở bãi sông bị nước dâng nên chèo đò ra xem", "Hai anh em thả chim về rừng", "Hai anh em bị lạc trong mưa"], dung: 1, gt: "Đêm mưa, nước sông dâng, Mon và Mên lo tổ chim chìa vôi ở bãi cát giữa sông bị ngập nên bơi đò ra, và chứng kiến bầy chim bay lên lúc bình minh.", cd: "Sự việc chính" },
      { q: "Truyện được kể theo ngôi thứ mấy?", a: ["Ngôi thứ nhất, người kể là Mon", "Ngôi thứ nhất, người kể là Mên", "Ngôi thứ ba", "Ngôi thứ hai"], dung: 2, gt: "Người kể giấu mình, gọi nhân vật bằng tên (Mon, Mên): đó là ngôi thứ ba.", cd: "Ngôi kể" },
      { q: "'Đề tài' của một tác phẩm truyện là gì?", a: ["Tên của tác phẩm", "Phạm vi đời sống được phản ánh trong tác phẩm", "Lời thoại của nhân vật", "Số trang của truyện"], dung: 1, gt: "Đề tài là phạm vi đời sống được phản ánh. Bầy chim chìa vôi có đề tài tuổi thơ gắn với thiên nhiên, loài vật.", cd: "Tri thức ngữ văn: đề tài" },
      { q: "Chi tiết bầy chim chìa vôi cất cánh bay lên khỏi dòng nước lúc bình minh gợi điều gì?", a: ["Sự sợ hãi của hai anh em", "Sức sống và niềm vui trước sự sống được cứu", "Cơn mưa vẫn còn lớn", "Hai anh em muốn về nhà"], dung: 1, gt: "Đây là chi tiết tiêu biểu: bầy chim non bay lên được, hai anh em xúc động đến rơi nước mắt. Chi tiết này thể hiện tình yêu thương và niềm vui trước sự sống.", cd: "Chi tiết tiêu biểu" },
      { q: "Tính cách nhân vật trong truyện được thể hiện qua điều gì?", a: ["Chỉ qua lời nói", "Chỉ qua ngoại hình", "Chỉ qua hành động", "Qua lời nói, hành động, suy nghĩ và cách ứng xử"], dung: 3, gt: "Phải nhìn cả lời nói, hành động, suy nghĩ, cách ứng xử với người khác. Ví dụ Mên tỏ ra người lớn nhưng cũng lo lắng cho bầy chim như Mon.", cd: "Tri thức ngữ văn: tính cách nhân vật" },
    ]},
    { thu: 4, mon: "anh", ten: "Anh · Unit 1 Hobbies", cauHoi: [
      { q: "My sister ______ collecting stamps.", a: ["enjoy", "enjoys", "enjoying", "is enjoy"], dung: 1, gt: "Chủ ngữ 'my sister' là ngôi thứ ba số ít nên động từ thêm -s: enjoys. Sau enjoy dùng V-ing.", cd: "Present simple: ngôi thứ ba" },
      { q: "I love ______ to music in my free time.", a: ["listen", "to listening", "listening", "listens"], dung: 2, gt: "Sau love / like / enjoy / hate dùng V-ing: love listening.", cd: "Verb + V-ing" },
      { q: "Which word is a hobby?", a: ["gardening", "kitchen", "teacher", "hungry"], dung: 0, gt: "gardening = làm vườn, là một sở thích. kitchen = bếp, teacher = giáo viên, hungry = đói.", cd: "Từ vựng sở thích" },
      { q: "The word 'unusual' means:", a: ["expensive", "strange, not common", "easy", "boring"], dung: 1, gt: "unusual = khác thường, không phổ biến (un- + usual).", cd: "Từ vựng sở thích" },
      { q: "Which word has the sound /ɜː/?", a: ["about", "bird", "sofa", "banana"], dung: 1, gt: "bird /bɜːd/ có âm /ɜː/ (dài, tròn môi nhẹ). about, sofa, banana có âm /ə/ ngắn.", cd: "Phát âm /ə/ – /ɜː/" },
      { q: "Tom hates ______ up early on Sundays.", a: ["get", "gets", "to gets", "getting"], dung: 3, gt: "hate + V-ing: hates getting up.", cd: "Verb + V-ing" },
      { q: "She makes models of planes and ships. Her hobby is ______.", a: ["making models", "collecting coins", "gardening", "cycling"], dung: 0, gt: "making models = làm mô hình.", cd: "Từ vựng sở thích" },
    ]},
    { thu: 5, mon: "toan", ten: "Toán · Góc kề bù, đối đỉnh, tia phân giác", cauHoi: [
      { q: "Hai góc kề bù có tổng số đo bằng bao nhiêu?", a: ["90°", "180°", "360°", "Bằng nhau"], dung: 1, gt: "Hai góc kề bù có chung một cạnh, hai cạnh còn lại là hai tia đối nhau, nên tổng bằng 180°.", cd: "Góc kề bù" },
      { q: "Hai góc đối đỉnh thì như thế nào?", a: ["Bù nhau", "Phụ nhau", "Bằng nhau", "Một góc gấp đôi góc kia"], dung: 2, gt: "Tính chất: hai góc đối đỉnh thì bằng nhau.", cd: "Góc đối đỉnh" },
      { q: "Góc xOy = 70°, Oz là tia phân giác của góc xOy. Số đo góc xOz là?", a: ["70°", "140°", "35°", "20°"], dung: 2, gt: "Tia phân giác chia góc thành hai góc bằng nhau: xOz = zOy = 70° : 2 = 35°.", cd: "Tia phân giác" },
      { q: "Hai góc kề bù, một góc bằng 40°. Góc còn lại bằng?", a: ["50°", "40°", "140°", "320°"], dung: 2, gt: "180° − 40° = 140°.", cd: "Góc kề bù" },
      { q: "Hai góc được gọi là đối đỉnh khi nào?", a: ["Chúng có chung đỉnh", "Chúng bằng nhau", "Mỗi cạnh của góc này là tia đối của một cạnh góc kia", "Chúng có chung một cạnh"], dung: 2, gt: "Chung đỉnh chưa đủ. Phải là hai cạnh của góc này lần lượt là tia đối của hai cạnh góc kia (tạo bởi hai đường thẳng cắt nhau).", cd: "Góc đối đỉnh" },
      { q: "Góc AOB = 120°, tia OC nằm trong góc AOB và góc AOC = 60°. Kết luận nào đúng?", a: ["OC là tia phân giác của góc AOB", "OC vuông góc với OA", "Góc COB = 120°", "OC là tia đối của OA"], dung: 0, gt: "COB = 120° − 60° = 60° = AOC, và OC nằm giữa hai tia OA, OB, nên OC là tia phân giác.", cd: "Tia phân giác" },
      { q: "Hai đường thẳng cắt nhau tạo thành 4 góc, một góc bằng 55°. Ba góc còn lại là?", a: ["55°, 55°, 55°", "125°, 55°, 125°", "125°, 125°, 125°", "35°, 55°, 35°"], dung: 1, gt: "Góc đối đỉnh với góc 55° cũng bằng 55°. Hai góc kề bù với nó bằng 180° − 55° = 125°.", cd: "Góc đối đỉnh" },
    ]},
    { thu: 6, mon: "khtn", ten: "KHTN · Phương pháp học tập", cauHoi: [
      { q: "Bước đầu tiên của phương pháp tìm hiểu tự nhiên là gì?", a: ["Hình thành giả thuyết", "Quan sát và đặt câu hỏi nghiên cứu", "Thực hiện kế hoạch", "Viết báo cáo"], dung: 1, gt: "Thứ tự: (1) Quan sát, đặt câu hỏi → (2) Hình thành giả thuyết → (3) Lập kế hoạch kiểm tra → (4) Thực hiện kế hoạch → (5) Kết luận.", cd: "Các bước tìm hiểu tự nhiên" },
      { q: "'Giả thuyết' trong nghiên cứu khoa học là gì?", a: ["Kết luận cuối cùng", "Câu trả lời dự đoán cho câu hỏi nghiên cứu, cần được kiểm chứng", "Dụng cụ thí nghiệm", "Bảng số liệu"], dung: 1, gt: "Giả thuyết là dự đoán có cơ sở, sau đó phải làm thí nghiệm để kiểm tra đúng hay sai.", cd: "Các bước tìm hiểu tự nhiên" },
      { q: "Dụng cụ nào đo thời gian chính xác đến phần trăm giây trong phòng thí nghiệm?", a: ["Đồng hồ treo tường", "Đồng hồ đo thời gian hiện số dùng cổng quang điện", "Thước cuộn", "Cân điện tử"], dung: 1, gt: "Đồng hồ đo thời gian hiện số kết hợp cổng quang điện tự động bấm giờ khi vật đi qua, dùng để đo tốc độ ở chương III.", cd: "Dụng cụ đo" },
      { q: "Dao động kí dùng để làm gì?", a: ["Đo khối lượng", "Hiển thị đồ thị tín hiệu điện theo thời gian, ví dụ tín hiệu âm thanh", "Đo nhiệt độ", "Đo chiều dài"], dung: 1, gt: "Dao động kí hiển thị dạng sóng của tín hiệu, sẽ dùng ở chương Âm thanh.", cd: "Dụng cụ đo" },
      { q: "Kĩ năng 'dự báo' là gì?", a: ["Đoán bừa kết quả", "Dựa vào dữ liệu đã có để đưa ra nhận định về điều sẽ xảy ra", "Đo đạc bằng dụng cụ", "Chia sự vật thành nhóm"], dung: 1, gt: "Dự báo phải dựa trên dữ liệu và quy luật đã quan sát được, không phải đoán bừa.", cd: "Kĩ năng KHTN" },
      { q: "Sau 2 tuần, cây được tưới nước hằng ngày cao thêm 12 cm, cây không tưới chỉ cao thêm 5 cm. Kết luận hợp lí nhất là gì?", a: ["Nước không ảnh hưởng đến cây", "Nước có ảnh hưởng đến sự sinh trưởng của cây", "Cây không tưới sẽ chết ngay", "Không thể kết luận gì"], dung: 1, gt: "So sánh hai cây chỉ khác nhau ở việc tưới nước, kết quả khác nhau rõ rệt, nên kết luận nước ảnh hưởng đến sinh trưởng.", cd: "Phân tích số liệu" },
      { q: "Một báo cáo thực hành cần có những phần nào?", a: ["Chỉ cần kết quả", "Tên bài, mục đích, dụng cụ, cách tiến hành, kết quả, kết luận", "Chỉ cần tên bài và kết luận", "Chỉ cần dụng cụ"], dung: 1, gt: "Báo cáo đầy đủ giúp người khác làm lại được thí nghiệm và kiểm tra kết quả.", cd: "Báo cáo thực hành" },
    ]},
  ],
  docTruoc: [
    { mon: "Toán", tieuDe: "Tuần sau: Cộng, trừ, nhân, chia số hữu tỉ", noiDung: "Cộng trừ số hữu tỉ giống cộng trừ phân số: viết về dạng phân số, quy đồng mẫu, rồi cộng trừ tử. Ví dụ −1/2 + 1/3 = −3/6 + 2/6 = −1/6. Nhân thì nhân tử với tử, mẫu với mẫu. Chia thì nhân với phân số nghịch đảo. Quan trọng nhất: cẩn thận dấu âm." },
    { mon: "KHTN", tieuDe: "Tuần sau: Nguyên tử", noiDung: "Mọi chất đều tạo từ nguyên tử. Nguyên tử có hạt nhân ở giữa (gồm proton mang điện dương và neutron không mang điện) và các electron mang điện âm chuyển động xung quanh theo từng lớp. Số proton bằng số electron nên nguyên tử trung hoà về điện. Lớp trong cùng chứa tối đa 2 electron, lớp thứ hai tối đa 8." },
    { mon: "Tiếng Anh", tieuDe: "Từ vựng Unit 1 cần thuộc", noiDung: "hobby (sở thích) · collect (sưu tầm) · gardening (làm vườn) · making models (làm mô hình) · doing sudoku (giải sudoku) · unusual (khác thường) · creative (sáng tạo) · cheap (rẻ) · relaxing (thư giãn) · enjoy / love / like / hate + V-ing." },
  ],
};
