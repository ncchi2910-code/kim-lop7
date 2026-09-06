/* GIẢNG LẠI CHO DỄ HIỂU — dùng cho những bài sách viết khó, Kim đọc trước hoặc sau tiết học.
   Mỗi bài: motCau (bài này thật ra nói gì), phan[] (các phần giảng), doiChieu (sách viết → hiểu là),
   meo (mẹo nhớ), tuKiemTra[] (câu hỏi bung đáp án).
   Gắn vào bài soạn bằng cách thêm  giang: "ma-bai"  vào mục tương ứng trong soan-bai.js */
window.KIM_GIANG = window.KIM_GIANG || {};

window.KIM_GIANG["khtn-b1"] = {
  mon: "khtn",
  tieuDe: "KHTN Bài 1 · Phương pháp và kĩ năng học tập môn Khoa học tự nhiên",
  sgk: "KHTN 7, tr. 6–13",
  motCau: "Bài này không bắt Kim học thuộc kiến thức nào cả. Nó chỉ dạy một điều: nhà khoa học làm việc theo trình tự nào, và Kim cần những kĩ năng gì để học môn này. Sách viết bằng từ ngữ người lớn nên đọc thấy rối, chứ nội dung thì rất đời thường.",

  phan: [
    {
      ten: "Câu chuyện để bám vào cả bài",
      doan: [
        "Kim trồng hai chậu đậu ở ban công. Chậu đặt sát cửa sổ thì lên xanh tốt. Chậu để trong góc thì lá vàng, thân mảnh, thấp hơn hẳn. Hai chậu cùng loại hạt, cùng đất, Kim tưới như nhau.",
        "Cả bài học này chỉ là: từ chuyện đó, một người làm khoa học sẽ đi tiếp thế nào. Đọc phần nào cũng quay về hai chậu đậu là hiểu.",
      ],
    },
    {
      ten: "Phần I · Năm bước tìm hiểu tự nhiên",
      doan: ["Sách gọi là 'phương pháp tìm hiểu tự nhiên'. Nghe to tát, thật ra là năm việc làm theo thứ tự:"],
      buoc: [
        { so: 1, ten: "Đề xuất vấn đề cần tìm hiểu", de: "Thấy chuyện lạ và đặt thành câu hỏi.",
          vd: "Kim hỏi: Vì sao chậu đậu trong góc lại còi hơn chậu ngoài cửa sổ?" },
        { so: 2, ten: "Đưa ra dự đoán khoa học", de: "Đoán câu trả lời — nhưng đoán có lí do, dựa vào điều mình đã biết.",
          vd: "Kim đoán: Chắc vì trong góc thiếu ánh sáng. Lí do: Kim đã học ở lớp 6 rằng cây cần ánh sáng để sống." },
        { so: 3, ten: "Lập kế hoạch kiểm tra dự đoán", de: "Nghĩ ra cách thử xem mình đoán đúng hay sai, rồi viết ra các bước.",
          vd: "Trồng 2 chậu giống hệt nhau: cùng hạt, cùng đất, cùng lượng nước. Chỉ khác một điều duy nhất là chỗ đặt. Sau 2 tuần đo chiều cao và đếm số lá." },
        { so: 4, ten: "Thực hiện kế hoạch kiểm tra dự đoán", de: "Làm thật, ghi lại số liệu, rồi xem kết quả có khớp với điều mình đoán không.",
          vd: "Sau 2 tuần: chậu cửa sổ cao 18 cm, chậu góc cao 11 cm. Khớp với dự đoán." },
        { so: 5, ten: "Viết báo cáo, thảo luận và trình bày", de: "Kể lại đầy đủ để người khác hiểu và làm lại được.",
          vd: "Báo cáo gồm: định tìm hiểu điều gì, dùng dụng cụ gì, làm thế nào, ra số liệu gì, kết luận gì." },
      ],
      hop: { nhan: "Chỗ hay bị bỏ quên", chu: "Nếu làm xong mà kết quả KHÔNG khớp với điều đã đoán thì sao? Sách nói rõ: quay lại bước 2, đoán lại một cách khác rồi thử tiếp. Sai không phải là hỏng, sai là biết thêm một cách không đúng. Đề kiểm tra rất hay hỏi ý này." },
    },
    {
      ten: "Phần II · Năm kĩ năng cần có",
      doan: ["Sách liệt kê năm kĩ năng bằng những từ hơi trừu tượng. Dịch ra tiếng thường thì như sau:"],
      kn: [
        { ten: "Quan sát", de: "Dùng mắt, tai, mũi, tay để thu thập thông tin.",
          vd: "Nhìn thấy lá chậu góc vàng hơn, thân mảnh hơn, ít lá hơn." },
        { ten: "Phân loại", de: "Xếp các thứ vào nhóm theo một đặc điểm chung mình chọn.",
          vd: "Xếp cây thành hai nhóm: nhóm đủ sáng và nhóm thiếu sáng. Hoặc xếp lá thành nhóm lá xanh và nhóm lá vàng." },
        { ten: "Liên kết", de: "Nối các thông tin rời rạc lại với nhau để nhìn ra mối quan hệ. Đây là kĩ năng khó nhất trong năm cái.",
          vd: "Kim có ba mẩu rời: (a) góc ban công ít nắng, (b) cây ở góc lá vàng, (c) bài lớp 6 nói lá xanh được là nhờ chất diệp lục, mà diệp lục cần ánh sáng. Nối ba mẩu lại thành một câu: ánh sáng ít làm lá kém xanh. Việc nối đó chính là liên kết." },
        { ten: "Đo", de: "Dùng dụng cụ để có con số, thay vì nói chung chung. Và phải chọn đúng dụng cụ.",
          vd: "Không nói 'chậu này cao hơn nhiều' mà nói 'cao hơn 7 cm'. Đo chiều cao thì dùng thước, không ai dùng cân." },
        { ten: "Dự báo", de: "Từ điều đã biết, đoán điều sắp xảy ra. Khác đoán bừa ở chỗ nói được vì sao mình đoán thế.",
          vd: "Kim dự báo: nếu chuyển chậu ở góc ra sát cửa sổ, hai tuần nữa lá sẽ xanh trở lại — vì cây sẽ nhận đủ ánh sáng." },
      ],
      hop: { nhan: "Dễ nhầm", chu: "Quan sát là THU THẬP thông tin (nhìn thấy gì thì ghi nấy). Liên kết là NỐI các thông tin đó lại để rút ra điều mới. Nhìn thấy lá vàng = quan sát. Hiểu ra lá vàng vì thiếu sáng = liên kết." },
    },
    {
      ten: "Phần III · Hai dụng cụ đo mới",
      doan: ["Phần này chỉ giới thiệu hai thứ, đi liền nhau thành một bộ. Chưa dùng ngay, đến chương Tốc độ (khoảng tuần 9) mới lấy ra dùng."],
      kn: [
        { ten: "Cổng quang điện", de: "Một cái cổng nhỏ, một bên phát ra tia hồng ngoại, bên kia thu tia đó. Khi có vật đi ngang qua che mất tia, cổng biết ngay và ra lệnh cho đồng hồ bật hoặc tắt.",
          vd: "Giống cửa tự động ở siêu thị: có người bước qua là cửa biết. Chỉ khác là cổng này không mở cửa mà bấm giờ." },
        { ten: "Đồng hồ đo thời gian hiện số", de: "Đồng hồ hiển thị số, đo được những khoảng thời gian rất ngắn. Có hai thang đo: thang 9,999 s đọc được tới 0,001 giây, thang 99,99 s đọc được tới 0,01 giây.",
          vd: "Muốn đo chính xác thì chọn thang 9,999 s. Muốn đo lâu hơn 10 giây thì phải chuyển sang thang 99,99 s." },
      ],
      hop: { nhan: "Vì sao cần máy, bấm tay không được à?", chu: "Tay người phản ứng chậm khoảng 0,2 giây, mà nhiều thí nghiệm chỉ kéo dài chưa tới 1 giây — bấm tay thì sai nhiều hơn cả kết quả cần đo. Cổng quang bật tắt đúng lúc vật đi qua nên chính xác hơn hẳn." },
    },
  ],

  doiChieu: [
    ["Đề xuất vấn đề cần tìm hiểu", "Thấy chuyện lạ rồi đặt thành câu hỏi"],
    ["Đưa ra dự đoán khoa học", "Đoán câu trả lời, và nói được vì sao mình đoán thế"],
    ["Lập kế hoạch kiểm tra dự đoán", "Nghĩ cách thử xem mình đoán đúng không, viết các bước ra"],
    ["Thực hiện kế hoạch kiểm tra dự đoán", "Làm thật, ghi số liệu, đối chiếu với điều đã đoán"],
    ["Viết báo cáo, thảo luận và trình bày", "Kể lại đủ để người khác hiểu và làm lại được"],
    ["Kĩ năng liên kết", "Nối các thông tin lại với nhau để thấy mối quan hệ"],
    ["Kĩ năng dự báo", "Đoán điều sắp xảy ra, dựa trên cái đã biết"],
    ["Độ chia nhỏ nhất", "Vạch nhỏ nhất mà dụng cụ đọc được — cũng là mức chính xác của nó"],
  ],

  meo: "Nhớ năm bước theo năm chữ đầu: VẤN – ĐOÁN – KẾ – LÀM – BÁO. Thấy chuyện lạ đặt câu hỏi (vấn đề), đoán câu trả lời (dự đoán), nghĩ cách thử (kế hoạch), làm thật (thực hiện), kể lại (báo cáo).",

  tuKiemTra: [
    { q: "Bước 1 của phương pháp tìm hiểu tự nhiên tên là gì?",
      a: "Đề xuất vấn đề cần tìm hiểu — tức là thấy chuyện lạ rồi đặt thành câu hỏi." },
    { q: "Làm thí nghiệm xong mà kết quả không khớp với điều đã đoán thì làm gì?",
      a: "Quay lại bước 2, đưa ra một dự đoán khác rồi kiểm tra tiếp. Không phải bỏ cuộc, cũng không phải sửa số liệu cho khớp." },
    { q: "Nhìn thấy lá cây vàng là kĩ năng gì? Hiểu ra lá vàng vì thiếu ánh sáng là kĩ năng gì?",
      a: "Nhìn thấy là quan sát. Hiểu ra nguyên nhân là liên kết." },
    { q: "Cổng quang điện dùng để làm gì?",
      a: "Phát và thu tia hồng ngoại; khi vật đi qua che mất tia thì nó bật hoặc tắt đồng hồ đo thời gian. Nhờ vậy đo được những khoảng thời gian rất ngắn mà bấm tay không kịp." },
    { q: "Đồng hồ đo thời gian hiện số có mấy thang đo, đọc được chính xác đến đâu?",
      a: "Hai thang: 9,999 s (đọc tới 0,001 giây) và 99,99 s (đọc tới 0,01 giây)." },
    { q: "Trong thí nghiệm hai chậu đậu, vì sao phải để hai chậu giống hệt nhau về hạt, đất và lượng nước?",
      a: "Để chỉ còn đúng MỘT thứ khác nhau là ánh sáng. Nếu nhiều thứ cùng khác thì không biết cây còi vì thiếu sáng hay vì thiếu nước." },
  ],
};
