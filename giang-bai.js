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

/* ===== Ngày 20/09/2026 · Văn: mẹ giảng thêm (trường ngay: bài hiện ở trang chủ đúng ngày đó và trong trang tuần) ===== */
window.KIM_GIANG["van-nl-y-nghia"] = {
  "mon": "van",
  "ngay": "2026-09-20",
  "tieuDe": "Văn · Viết đoạn văn nghị luận trình bày ý nghĩa của một vấn đề",
  "sgk": "Kĩ năng viết · dùng cho bài kiểm tra và bài tập cô giao",
  "motCau": "Đề thường hỏi kiểu: “Viết đoạn văn khoảng 150–200 chữ trình bày suy nghĩ của em về ý nghĩa của lòng biết ơn / tình yêu thương / việc đọc sách…”. Nghe khó, nhưng thật ra đề chỉ hỏi một câu: điều đó TỐT ở chỗ nào và tốt cho AI. Kim trả lời câu đó theo một khung cố định gồm sáu bước, vấn đề nào cũng dùng lại được.",
  "phan": [
    {
      "ten": "Bước 0 · Đọc đề cho đúng (1 phút)",
      "doan": [
        "Trước khi viết, Kim gạch chân ba chỗ trong đề. Làm thế thì không bao giờ lạc đề."
      ],
      "kn": [
        {
          "ten": "Hình thức",
          "de": "Đề bảo viết đoạn văn hay bài văn, khoảng bao nhiêu chữ.",
          "vd": "“Viết đoạn văn khoảng 150–200 chữ” → viết liền một khối, chỉ lùi đầu dòng một lần ở câu đầu, không xuống dòng giữa chừng. 150–200 chữ là khoảng 10–12 câu."
        },
        {
          "ten": "Vấn đề",
          "de": "Cụm từ nói về điều cần bàn.",
          "vd": "“…ý nghĩa của lòng biết ơn” → vấn đề là lòng biết ơn."
        },
        {
          "ten": "Yêu cầu",
          "de": "Đề muốn Kim làm gì với vấn đề đó.",
          "vd": "“trình bày ý nghĩa” → phần lớn đoạn văn phải nói điều đó mang lại lợi ích gì, chứ không kể chuyện dài hay chỉ nói cách rèn luyện."
        }
      ],
      "hop": {
        "nhan": "Nhớ kĩ",
        "chu": "Đề hỏi Ý NGHĨA thì câu hỏi trong đầu Kim là: “Có điều này thì tốt cho mình thế nào? Tốt cho người khác thế nào? Tốt cho mọi người xung quanh thế nào?”. Trả lời được ba câu đó là có phần thân đoạn."
      }
    },
    {
      "ten": "Khung sáu bước (vấn đề nào cũng dùng được)",
      "doan": [
        "Ví dụ đi kèm là đề: “Trình bày suy nghĩ của em về ý nghĩa của lòng yêu thương loài vật”, nối với truyện Bầy chim chìa vôi Kim đã học."
      ],
      "buoc": [
        {
          "so": 1,
          "ten": "Câu mở đoạn: nêu vấn đề",
          "de": "Một câu. Gọi đúng tên vấn đề trong đề và khen nó một chữ.",
          "vd": "Trong cuộc sống, lòng yêu thương loài vật là một tình cảm đẹp mà ai cũng nên có."
        },
        {
          "so": 2,
          "ten": "Giải thích: vấn đề là gì",
          "de": "Một câu, dạng “… là …”. Giải thích bằng lời thường, không cần hay.",
          "vd": "Yêu thương loài vật là biết quan tâm, chăm sóc và không làm hại những con vật ở quanh mình."
        },
        {
          "so": 3,
          "ten": "Ý nghĩa: đây là phần chính",
          "de": "Nêu 2–3 ý, mỗi ý mở đầu bằng một từ nối và có thêm một vế “vì/nhờ đó” để giải thích. Thứ tự dễ nhớ: tốt cho bản thân → tốt cho người/vật khác → tốt cho xã hội.",
          "vd": "Trước hết, tình cảm ấy giúp chúng ta sống nhân hậu hơn. Không chỉ vậy, khi được bảo vệ, các loài vật có cơ hội sinh sống, nhờ đó thiên nhiên thêm tươi đẹp. Hơn nữa, người biết thương con vật thường cũng biết thương người."
        },
        {
          "so": 4,
          "ten": "Dẫn chứng: một ví dụ thật",
          "de": "Một hoặc hai câu. Lấy từ bài đã học, từ người thật, hoặc chuyện của chính Kim. Có dẫn chứng thì đoạn văn mới thuyết phục.",
          "vd": "Trong truyện “Bầy chim chìa vôi”, giữa đêm mưa to, hai anh em Mên và Mon đã đội mưa ra sông chỉ vì lo cho tổ chim non sắp bị nước ngập."
        },
        {
          "so": 5,
          "ten": "Mặt trái: phê phán điều ngược lại",
          "de": "Một câu, bắt đầu bằng “Thế nhưng” hoặc “Bên cạnh đó”. Thầy cô rất hay cho điểm phần này.",
          "vd": "Thế nhưng, vẫn còn những người săn bắt, hành hạ động vật, đó là việc làm đáng phê phán."
        },
        {
          "so": 6,
          "ten": "Bài học và câu kết",
          "de": "Một câu nói Kim sẽ làm gì (cụ thể, làm được ngay), một câu khẳng định lại vấn đề.",
          "vd": "Là học sinh, em sẽ chăm sóc tốt con vật nuôi trong nhà và không trêu chọc loài vật. Mỗi việc tử tế nhỏ sẽ làm thế giới quanh ta ấm áp hơn."
        }
      ],
      "hop": {
        "nhan": "Từ nối dùng được cho mọi đề",
        "chu": "Mở ý nghĩa: Trước hết / Đầu tiên. Thêm ý: Không chỉ vậy / Bên cạnh đó / Hơn nữa. Dẫn chứng: Chẳng hạn như / Có thể thấy. Mặt trái: Thế nhưng / Tuy nhiên. Kết: Vì vậy / Tóm lại / Là học sinh, em…"
      }
    },
    {
      "ten": "Đoạn văn mẫu hoàn chỉnh (khoảng 180 chữ)",
      "doan": [
        "Trong cuộc sống, lòng yêu thương loài vật là một tình cảm đẹp mà ai cũng nên có. Yêu thương loài vật là biết quan tâm, chăm sóc và không làm hại những con vật ở quanh mình. Trước hết, tình cảm ấy giúp chúng ta sống nhân hậu hơn, biết đặt mình vào vị trí của những sinh vật nhỏ bé không thể tự lên tiếng. Không chỉ vậy, khi được con người bảo vệ, các loài vật có cơ hội sinh sống và phát triển, nhờ đó thiên nhiên thêm cân bằng và tươi đẹp. Hơn nữa, một người biết thương con vật thường cũng biết thương người, nên xã hội sẽ có thêm nhiều tấm lòng tử tế. Trong truyện “Bầy chim chìa vôi” của Nguyễn Quang Thiều, giữa đêm mưa to, hai anh em Mên và Mon đã đội mưa ra sông chỉ vì lo cho tổ chim non sắp bị nước ngập. Việc làm nhỏ ấy khiến người đọc vô cùng xúc động. Thế nhưng, hiện nay vẫn còn những người săn bắt, hành hạ động vật, đó là việc làm đáng phê phán. Là học sinh, em sẽ chăm sóc tốt con vật nuôi trong nhà và không bao giờ trêu chọc loài vật. Mỗi việc tử tế nhỏ sẽ làm cho thế giới quanh ta ấm áp hơn.",
        "Kim thử đếm: câu 1 là bước 1, câu 2 là bước 2, ba câu “Trước hết… Không chỉ vậy… Hơn nữa…” là bước 3, hai câu về Mên và Mon là bước 4, câu “Thế nhưng” là bước 5, hai câu cuối là bước 6."
      ],
      "hop": {
        "nhan": "Nhìn thêm một chỗ",
        "chu": "Cụm “giữa đêm mưa to” và “Trong truyện Bầy chim chìa vôi của Nguyễn Quang Thiều” là trạng ngữ được mở rộng bằng cụm từ — đúng phần tiếng Việt Kim ôn hôm nay. Đề kiểm tra hay yêu cầu thêm: “gạch chân một trạng ngữ trong đoạn văn”. Đặt trạng ngữ ở câu dẫn chứng là dễ nhất."
      }
    },
    {
      "ten": "Vận dụng: ý nghĩa của mấy vấn đề hay ra đề",
      "doan": [
        "Chỉ cần thay vấn đề, khung sáu bước giữ nguyên. Dưới đây là phần giải thích và ba ý nghĩa gợi sẵn, Kim ghép vào khung là thành đoạn."
      ],
      "kn": [
        {
          "ten": "Lòng biết ơn",
          "de": "Là ghi nhớ và trân trọng công ơn của người đã giúp mình.",
          "vd": "Ý nghĩa: giúp mình sống tình cảm, biết trân trọng những gì đang có · làm người giúp mình thấy vui, gắn bó hơn · giữ gìn truyền thống “uống nước nhớ nguồn”. Dẫn chứng: ngày 20/11 tri ân thầy cô, ngày 27/7 tưởng nhớ thương binh liệt sĩ."
        },
        {
          "ten": "Tình yêu thương",
          "de": "Là quan tâm, chia sẻ, giúp đỡ người khác bằng cả tấm lòng.",
          "vd": "Ý nghĩa: người được yêu thương có thêm sức mạnh vượt khó · người trao đi thấy mình sống có ích, vui hơn · xã hội gắn kết, ấm áp. Dẫn chứng: các đợt quyên góp giúp đồng bào vùng lũ."
        },
        {
          "ten": "Việc đọc sách",
          "de": "Là tìm đến sách để học hỏi và giải trí.",
          "vd": "Ý nghĩa: mở rộng hiểu biết mà không cần đi xa · nuôi dưỡng tâm hồn, biết cảm thông · rèn cách nói, cách viết mạch lạc. Dẫn chứng: một cuốn sách Kim thích và điều Kim học được từ nó."
        },
        {
          "ten": "Tình bạn",
          "de": "Là sự gắn bó, tin tưởng, giúp đỡ nhau giữa những người bạn.",
          "vd": "Ý nghĩa: có người chia sẻ lúc vui buồn · cùng nhau tiến bộ trong học tập · học được cách tôn trọng, nhường nhịn. Dẫn chứng: một lần bạn giúp Kim, hoặc Kim giúp bạn."
        }
      ],
      "hop": {
        "nhan": "Lỗi hay gặp",
        "chu": "Kể chuyện dẫn chứng dài nửa đoạn, không còn chỗ cho ý nghĩa. Nêu ý mà không giải thích “vì sao”. Xuống dòng giữa đoạn. Câu nào cũng mở bằng “Em nghĩ…”. Bài học chung chung kiểu “em sẽ cố gắng” — nên nói việc cụ thể."
      }
    }
  ],
  "doiChieu": [
    [
      "Đoạn văn nghị luận",
      "Đoạn văn nêu ý kiến của mình và đưa lí lẽ, dẫn chứng để người đọc đồng ý"
    ],
    [
      "Vấn đề trong đời sống",
      "Một điều quen thuộc quanh ta: lòng biết ơn, tình bạn, đọc sách…"
    ],
    [
      "Trình bày ý nghĩa",
      "Nói điều đó tốt ở chỗ nào, tốt cho ai"
    ],
    [
      "Lí lẽ",
      "Câu giải thích vì sao (vì…, nhờ đó…)"
    ],
    [
      "Dẫn chứng",
      "Ví dụ có thật: nhân vật đã học, người thật, chuyện của mình"
    ],
    [
      "Câu chủ đề",
      "Câu mở đoạn, nêu đúng vấn đề đề bài hỏi"
    ],
    [
      "Phản đề",
      "Câu phê phán người làm ngược lại (Thế nhưng…)"
    ]
  ],
  "meo": "Nhớ dãy số 1 – 1 – 3 – 1 – 1 – 2: một câu mở, một câu giải thích, ba câu ý nghĩa, một câu dẫn chứng, một câu phê phán, hai câu kết. Cộng lại khoảng 9–10 câu dài vừa phải là đủ 150–200 chữ. Viết xong Kim đối chiếu lại dãy số này.",
  "tuKiemTra": [
    {
      "q": "Đề: “Viết đoạn văn khoảng 150 chữ trình bày ý nghĩa của tình bạn”. Kim gạch chân ba chỗ nào?",
      "a": "Hình thức: đoạn văn, khoảng 150 chữ. Vấn đề: tình bạn. Yêu cầu: trình bày ý nghĩa."
    },
    {
      "q": "Phần nào trong đoạn văn cần viết nhiều nhất?",
      "a": "Phần ý nghĩa (bước 3): 2–3 ý, mỗi ý có lời giải thích vì sao."
    },
    {
      "q": "Viết câu mở đoạn cho đề “ý nghĩa của lòng biết ơn”.",
      "a": "Ví dụ: Lòng biết ơn là một phẩm chất tốt đẹp mà mỗi người cần gìn giữ. Miễn là gọi đúng tên vấn đề và khẳng định nó tốt."
    },
    {
      "q": "Câu “Thế nhưng, vẫn có những bạn nhận được giúp đỡ mà không một lời cảm ơn” thuộc bước nào?",
      "a": "Bước 5: mặt trái, phê phán điều ngược lại."
    },
    {
      "q": "Vì sao bài học “em sẽ cố gắng học tốt” chưa hay?",
      "a": "Vì chung chung, không nói việc cụ thể. Nên viết như: em sẽ viết thiệp cảm ơn cô chủ nhiệm nhân ngày 20/11."
    },
    {
      "q": "Tìm một dẫn chứng từ bài đã học cho đề “ý nghĩa của tình anh em”.",
      "a": "Truyện Bầy chim chìa vôi: Mên tuy gắt với em nhưng vẫn đi cùng Mon ra sông giữa đêm mưa, gò lưng kéo con đò về bến và dẫn em lên bờ chờ sáng."
    }
  ]
};

window.KIM_GIANG["van-tv-mo-rong-cau"] = {
  "mon": "van",
  "ngay": "2026-09-20",
  "tieuDe": "Tiếng Việt · Ôn mở rộng trạng ngữ và mở rộng thành phần chính của câu",
  "sgk": "Ngữ văn 7 tập 1, Thực hành tiếng Việt tr. 17 và tr. 24–25",
  "motCau": "Câu nào cũng có phần “xương sống” là chủ ngữ và vị ngữ (gọi là thành phần chính). Trạng ngữ là phần gắn thêm cho biết khi nào, ở đâu, vì sao… “Mở rộng” chỉ có nghĩa là thay một từ bằng một cụm từ để câu nói rõ hơn, cụ thể hơn. Không có kiến thức gì mới, chỉ là tập thêm chữ cho đúng chỗ.",
  "phan": [
    {
      "ten": "Nhận ra ba thành phần bằng câu hỏi",
      "doan": [
        "Ví dụ: “Sáng nay, / mẹ / nấu phở.” Hỏi lần lượt là tách được ngay."
      ],
      "kn": [
        {
          "ten": "Chủ ngữ",
          "de": "Trả lời câu hỏi Ai? Cái gì? Con gì?",
          "vd": "Ai nấu phở? → mẹ."
        },
        {
          "ten": "Vị ngữ",
          "de": "Trả lời câu hỏi Làm gì? Thế nào? Là gì?",
          "vd": "Mẹ làm gì? → nấu phở."
        },
        {
          "ten": "Trạng ngữ",
          "de": "Trả lời câu hỏi Khi nào? Ở đâu? Vì sao? Để làm gì? Bằng gì? Thường đứng đầu câu, có dấu phẩy ngăn với phần sau.",
          "vd": "Mẹ nấu phở khi nào? → sáng nay."
        }
      ],
      "hop": {
        "nhan": "Cách thử chắc ăn",
        "chu": "Bỏ trạng ngữ đi, câu vẫn đứng được (“Mẹ nấu phở.”). Bỏ chủ ngữ hoặc vị ngữ đi, câu bị cụt (“Sáng nay, nấu phở.” nghe thiếu ngay). Vì vậy chủ ngữ, vị ngữ mới gọi là thành phần CHÍNH."
      }
    },
    {
      "ten": "Mở rộng trạng ngữ bằng cụm từ (tr. 17)",
      "doan": [
        "Trạng ngữ có thể chỉ là một từ, nhưng khi viết thành một cụm từ thì câu cho biết nhiều thông tin hơn về thời gian, nơi chốn…, đồng thời nhấn mạnh sự việc. Hai ví dụ trong sách:"
      ],
      "buoc": [
        {
          "so": 1,
          "ten": "Thời gian",
          "de": "“Hôm qua” → “Suốt từ chiều hôm qua”.",
          "vd": "Suốt từ chiều hôm qua, nước đã bắt đầu dâng lên nhanh hơn. → Biết rõ nước dâng từ lúc nào và dâng liên tục."
        },
        {
          "so": 2,
          "ten": "Nơi chốn",
          "de": "“Trong gian phòng” → “Trong một gian phòng lớn ngập tràn ánh sáng”.",
          "vd": "Người đọc hình dung được căn phòng rộng, sáng, không chỉ biết là “trong phòng”."
        },
        {
          "so": 3,
          "ten": "Tự làm: cách mở rộng",
          "de": "Tìm trạng ngữ rồi tự hỏi thêm: cụ thể là lúc nào? chỗ nào? trông ra sao? Thêm chữ vào trước hoặc sau từ đó.",
          "vd": "“Chiều, bà nội đưa em đi chợ huyện.” → “Chiều thứ Bảy tuần trước, bà nội đưa em đi chợ huyện.”"
        }
      ],
      "hop": {
        "nhan": "Đề hỏi tác dụng thì trả lời thế nào?",
        "chu": "Mẫu câu: “Trạng ngữ được mở rộng bằng cụm từ giúp câu cung cấp thông tin cụ thể hơn về thời gian/nơi chốn…, làm cho sự việc được miêu tả rõ ràng, sinh động hơn.” Thay chữ thời gian/nơi chốn cho khớp với câu."
      }
    },
    {
      "ten": "Mở rộng thành phần chính bằng cụm từ (tr. 24–25)",
      "doan": [
        "Câu gốc ngắn như “Gió thổi.”, “Ong bay.” Mở rộng là biến từng thành phần thành một cụm:"
      ],
      "kn": [
        {
          "ten": "Mở rộng chủ ngữ → thành cụm danh từ",
          "de": "Thêm phía TRƯỚC danh từ: những, các, một, mỗi, mấy, từng… Thêm phía SAU: từ tả đặc điểm hoặc chỉ định (nhỏ, chăm chỉ, ấy, này…).",
          "vd": "Gió → Những làn gió mùa thu. Ong → Một đàn ong mật chăm chỉ."
        },
        {
          "ten": "Mở rộng vị ngữ → thành cụm động từ",
          "de": "Thêm phía trước: đã, đang, sẽ, vẫn, cũng… Thêm phía sau: làm thế nào, ở đâu, để làm gì.",
          "vd": "thổi → đang thổi nhè nhẹ qua hàng cây trước ngõ. bay → bay đi tìm mật từ sáng sớm."
        },
        {
          "ten": "Mở rộng vị ngữ → thành cụm tính từ",
          "de": "Khi vị ngữ là tính từ (trong lành, đẹp, cao…), thêm rất, hết sức, vô cùng phía trước, hoặc thêm lí do phía sau.",
          "vd": "Không khí trong lành → Không khí hết sức trong lành nhờ có vườn cây xanh."
        },
        {
          "ten": "Mở rộng cả hai",
          "de": "Làm cả chủ ngữ lẫn vị ngữ trong cùng một câu.",
          "vd": "Ong bay. → Một đàn ong mật chăm chỉ / bay đi tìm mật từ sáng sớm."
        }
      ],
      "hop": {
        "nhan": "Dễ nhầm",
        "chu": "Mở rộng xong, cụm dài đến đâu thì vẫn chỉ là MỘT thành phần. “Một đàn ong mật chăm chỉ” vẫn là chủ ngữ, không phải thêm thành phần mới. Còn cụm đứng đầu câu, có dấu phẩy, trả lời “khi nào/ở đâu” như “Sáng sớm,” là trạng ngữ, đừng nhầm với chủ ngữ."
      }
    },
    {
      "ten": "Ghép vào đoạn văn nghị luận",
      "doan": [
        "Hai phần tiếng Việt này hay được kiểm tra ngay trong câu viết đoạn: “Trong đoạn văn có sử dụng ít nhất một trạng ngữ được mở rộng bằng cụm từ, gạch chân.” Kim dùng luôn trong bài viết hôm nay."
      ],
      "buoc": [
        {
          "so": 1,
          "ten": "Đặt trạng ngữ cụm ở câu dẫn chứng",
          "de": "Câu kể dẫn chứng tự nhiên có thời gian, nơi chốn.",
          "vd": "Trong truyện “Bầy chim chìa vôi”, giữa đêm mưa to, hai anh em Mên và Mon đã đội mưa ra sông."
        },
        {
          "so": 2,
          "ten": "Mở rộng chủ ngữ ở câu ý nghĩa",
          "de": "Thay “con người” bằng một cụm cụ thể hơn.",
          "vd": "Những người biết thương con vật thường cũng biết thương người."
        },
        {
          "so": 3,
          "ten": "Gạch chân đúng và đủ",
          "de": "Gạch cả cụm, không gạch mỗi một từ. Ghi chú nhỏ bên cạnh nếu đề yêu cầu.",
          "vd": "Gạch “Suốt từ chiều hôm qua”, không phải chỉ gạch “hôm qua”."
        }
      ]
    }
  ],
  "doiChieu": [
    [
      "Thành phần chính của câu",
      "Chủ ngữ và vị ngữ, bỏ đi thì câu bị cụt"
    ],
    [
      "Trạng ngữ",
      "Phần gắn thêm, cho biết khi nào, ở đâu, vì sao, để làm gì, bằng gì"
    ],
    [
      "Cụm từ",
      "Nhóm nhiều từ đi với nhau, có một từ chính ở giữa"
    ],
    [
      "Cụm danh từ",
      "Danh từ + các từ thêm trước, sau (những con ong chăm chỉ)"
    ],
    [
      "Cụm động từ",
      "Động từ + các từ thêm (đang bay đi tìm mật)"
    ],
    [
      "Cụm tính từ",
      "Tính từ + các từ thêm (hết sức trong lành)"
    ],
    [
      "Mở rộng … bằng cụm từ",
      "Thay một từ bằng một cụm để câu rõ hơn"
    ]
  ],
  "meo": "Mở rộng là trả lời thêm câu hỏi. Trạng ngữ: hỏi “lúc nào cụ thể? chỗ nào, ra sao?”. Chủ ngữ: hỏi “mấy cái? cái nào? trông thế nào?”. Vị ngữ: hỏi “làm thế nào? ở đâu? để làm gì?”. Trả lời xong thì ghép câu trả lời vào câu gốc.",
  "tuKiemTra": [
    {
      "q": "Tìm trạng ngữ, chủ ngữ, vị ngữ: “Trên cành cây trước sân, mấy chú chim sẻ đang ríu rít gọi nhau.”",
      "a": "Trạng ngữ: Trên cành cây trước sân. Chủ ngữ: mấy chú chim sẻ. Vị ngữ: đang ríu rít gọi nhau."
    },
    {
      "q": "Trạng ngữ trong câu trên là một từ hay một cụm từ? Cho biết điều gì?",
      "a": "Là cụm từ, cho biết nơi chốn (ở đâu) một cách cụ thể: không chỉ trên cây mà là cành cây trước sân."
    },
    {
      "q": "Mở rộng trạng ngữ trong câu: “Tối, cả nhà quây quần ăn cơm.”",
      "a": "Ví dụ: Tối Chủ nhật vừa rồi, cả nhà quây quần ăn cơm. Hoặc: Mỗi tối sau giờ làm của bố mẹ, cả nhà quây quần ăn cơm."
    },
    {
      "q": "Mở rộng chủ ngữ trong câu: “Hoa nở.”",
      "a": "Ví dụ: Những bông hoa hồng nhung trong vườn nở. Chủ ngữ “Những bông hoa hồng nhung trong vườn” là cụm danh từ."
    },
    {
      "q": "Mở rộng cả chủ ngữ và vị ngữ: “Mưa rơi.”",
      "a": "Ví dụ: Những hạt mưa đầu mùa / rơi lộp độp trên mái tôn."
    },
    {
      "q": "“Sáng sớm, sương mù phủ kín cánh đồng.” Bạn Nam bảo chủ ngữ là “Sáng sớm”. Nam đúng không?",
      "a": "Không đúng. “Sáng sớm” trả lời câu hỏi khi nào và có dấu phẩy ngăn cách, nên là trạng ngữ. Chủ ngữ là “sương mù”."
    }
  ]
};
