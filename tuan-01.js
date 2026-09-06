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
    { mon: "KHTN", icon: "🔬", hoc: "Bài 1 Phương pháp và kĩ năng học tập môn KHTN: 5 bước tìm hiểu tự nhiên; 5 kĩ năng quan sát, phân loại, liên kết, đo, dự báo; cổng quang điện và đồng hồ đo thời gian hiện số.", vap: "Đề hay hỏi đúng TÊN và THỨ TỰ 5 bước theo sách. Kĩ năng liên kết khó hiểu nhất — xem mục Giảng lại cho dễ hiểu." },
    { mon: "Sử – Địa", icon: "🗺️", hoc: "Lịch sử (1 tiết/tuần, sáng Thứ Hai): Bài 1 tiết 1 — sự hình thành các vương quốc phong kiến Tây Âu sau khi Rô-ma sụp đổ. Địa lí (2 tiết/tuần, Thứ Tư và Thứ Năm): Bài 1 tiết 1–2 — vị trí, hình dạng, địa hình và khí hậu châu Âu.", vap: "Sử chỉ 1 tiết mỗi tuần nên đi rất chậm, đừng học dồn. Địa 2 tiết nên bám lược đồ: mở lược đồ tự nhiên châu Âu mỗi lần học." },
  ],
  monKhac: "GDCD Bài 1 Tự hào truyền thống quê hương · Tin học Bài 1 Thiết bị vào – ra · Công nghệ Bài 1 Giới thiệu về trồng trọt · HĐTN Chủ đề 1 Em với nhà trường.",
  ngay: [
    { thu: 4, mon: "toan", ten: "Toán · Số hữu tỉ", cauHoi: [
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
    { thu: 2, mon: "anh", ten: "Anh · Unit 1 Hobbies", cauHoi: [
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
      { q: "Bước đầu tiên của phương pháp tìm hiểu tự nhiên tên là gì?", a: ["Đưa ra dự đoán khoa học", "Đề xuất vấn đề cần tìm hiểu", "Lập kế hoạch kiểm tra", "Viết báo cáo"], dung: 1, gt: "Thứ tự 5 bước: (1) Đề xuất vấn đề cần tìm hiểu → (2) Đưa ra dự đoán khoa học → (3) Lập kế hoạch kiểm tra dự đoán → (4) Thực hiện kế hoạch → (5) Viết báo cáo, thảo luận và trình bày.", cd: "Các bước tìm hiểu tự nhiên" },
      { q: "'Dự đoán khoa học' ở bước 2 nghĩa là gì?", a: ["Kết luận cuối cùng của thí nghiệm", "Câu trả lời mình đoán cho vấn đề, dựa trên hiểu biết đã có, cần được kiểm tra", "Bản báo cáo thí nghiệm", "Số liệu đo được"], dung: 1, gt: "Dự đoán khoa học là đoán có căn cứ, không phải đoán bừa; sau đó phải làm thí nghiệm để kiểm tra đúng hay sai.", cd: "Các bước tìm hiểu tự nhiên" },
      { q: "Thực hiện xong kế hoạch mà kết quả KHÔNG phù hợp với dự đoán thì phải làm gì?", a: ["Bỏ cuộc, coi như thí nghiệm hỏng", "Sửa số liệu cho khớp với dự đoán", "Quay lại bước 2, đưa ra dự đoán khác rồi kiểm tra tiếp", "Bỏ qua và viết báo cáo như bình thường"], dung: 2, gt: "Sách nêu rõ: trường hợp kết quả không phù hợp cần quay lại bước 2. Dự đoán sai là chuyện bình thường trong khoa học.", cd: "Các bước tìm hiểu tự nhiên" },
      { q: "Năm kĩ năng học tập môn KHTN gồm những kĩ năng nào?", a: ["Đọc, viết, tính, vẽ, nhớ", "Quan sát, phân loại, liên kết, đo, dự báo", "Nghe, nói, đọc, viết, làm", "Quan sát, ghi chép, học thuộc, làm bài, kiểm tra"], dung: 1, gt: "Quan sát – phân loại – liên kết – đo – dự báo. Đây là 5 kĩ năng tiến trình của môn KHTN.", cd: "Kĩ năng KHTN" },
      { q: "Nhìn thấy lá cây bị vàng là kĩ năng gì; hiểu ra lá vàng do thiếu ánh sáng là kĩ năng gì?", a: ["Cả hai đều là quan sát", "Quan sát và liên kết", "Đo và dự báo", "Phân loại và quan sát"], dung: 1, gt: "Quan sát là thu thập thông tin bằng giác quan. Liên kết là nối các thông tin lại để tìm ra mối quan hệ mới.", cd: "Kĩ năng KHTN" },
      { q: "Cổng quang điện có tác dụng gì?", a: ["Đo khối lượng của vật", "Bật và tắt đồng hồ đo thời gian khi vật đi qua chắn tia hồng ngoại", "Đo nhiệt độ", "Phóng to hình ảnh vật nhỏ"], dung: 1, gt: "Cổng quang điện có bộ phận phát tia hồng ngoại và bộ phận thu tia; vật đi qua che mất tia thì cổng điều khiển đồng hồ. Nhờ vậy đo được thời gian rất ngắn mà bấm tay không kịp.", cd: "Dụng cụ đo" },
      { q: "Đồng hồ đo thời gian hiện số có hai thang đo nào?", a: ["9,999 s và 99,99 s", "1 s và 10 s", "0,1 s và 1 s", "60 s và 600 s"], dung: 0, gt: "Thang 9,999 s có độ chia nhỏ nhất 0,001 s; thang 99,99 s có độ chia nhỏ nhất 0,01 s. Muốn chính xác hơn thì chọn thang 9,999 s.", cd: "Dụng cụ đo" },
    ]},
  ],
  docTruoc: [
    { mon: "Toán", tieuDe: "Tuần sau: Cộng, trừ, nhân, chia số hữu tỉ", noiDung: "Cộng trừ số hữu tỉ giống cộng trừ phân số: viết về dạng phân số, quy đồng mẫu, rồi cộng trừ tử. Ví dụ −1/2 + 1/3 = −3/6 + 2/6 = −1/6. Nhân thì nhân tử với tử, mẫu với mẫu. Chia thì nhân với phân số nghịch đảo. Quan trọng nhất: cẩn thận dấu âm." },
    { mon: "KHTN", tieuDe: "Tuần sau: Nguyên tử", noiDung: "Mọi chất đều tạo từ nguyên tử. Nguyên tử có hạt nhân ở giữa (gồm proton mang điện dương và neutron không mang điện) và các electron mang điện âm chuyển động xung quanh theo từng lớp. Số proton bằng số electron nên nguyên tử trung hoà về điện. Lớp trong cùng chứa tối đa 2 electron, lớp thứ hai tối đa 8." },
    { mon: "Tiếng Anh", tieuDe: "Từ vựng Unit 1 cần thuộc", noiDung: "hobby (sở thích) · collect (sưu tầm) · gardening (làm vườn) · making models (làm mô hình) · doing sudoku (giải sudoku) · unusual (khác thường) · creative (sáng tạo) · cheap (rẻ) · relaxing (thư giãn) · enjoy / love / like / hate + V-ing." },
  ],
};
