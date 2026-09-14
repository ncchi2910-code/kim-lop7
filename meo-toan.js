/* meo-toan.js — Mẹo Toán mỗi ngày cho trang Kim lớp 7
   Mỗi ngày học (Thứ Hai đến Thứ Sáu) hiện 3 thẻ:
     2 mẹo mới (1 Đại số + 1 Hình học, lấy theo thứ tự trong kho)
     1 mẹo nhắc lại (mẹo của 3 ngày học trước)
   Không cần lưu trạng thái: thứ tự tính theo số ngày học kể từ MEO_BAT_DAU.
   Kho hiện có 30 mẹo = 15 ngày học = 3 tuần. Hết thì quay vòng.
*/

(function () {
  var MEO_BAT_DAU = '2026-09-14'; // ngày đầu tiên hiện mẹo (Thứ Hai)

  // mon: 'Đại' hoặc 'Hình'
  // sai: dòng làm sai để Kim tìm lỗi · dung: cách đúng · viSao: lý do
  // hoi/dap: câu hỏi 10 giây, Kim tự trả lời rồi bung đáp án
  var KHO = [
    // ngày 1
    { id: 'd01', mon: 'Đại', bai: 'Bài 1', ten: 'So sánh hai số âm',
      sai: '−4/5 > −3/4 vì 4/5 > 3/4',
      dung: '−4/5 < −3/4',
      viSao: 'Quy đồng mẫu 20 được −16/20 và −15/20. Với số âm thì ngược lại số dương: số nào xa số 0 hơn thì nhỏ hơn. Vẽ trục số ra là thấy ngay, −4/5 nằm bên trái.',
      hoi: 'So sánh −2/3 và −3/4',
      dap: '−2/3 > −3/4, vì −8/12 lớn hơn −9/12' },
    { id: 'h01', mon: 'Hình', bai: 'Bài 8', ten: 'Hai góc kề bù',
      sai: 'Hai góc kề bù thì bằng nhau',
      dung: 'Hai góc kề bù có tổng bằng 180°',
      viSao: 'Kề bù là hai góc chung một cạnh, hai cạnh còn lại tạo thành một đường thẳng. Cộng lại đúng bằng góc bẹt 180°. Chúng chỉ bằng nhau khi mỗi góc đều là 90°.',
      hoi: 'Một góc kề bù với góc 65° thì bằng bao nhiêu?',
      dap: '180° − 65° = 115°' },

    // ngày 2
    { id: 'd02', mon: 'Đại', bai: 'Bài 1', ten: 'Mẫu số âm',
      sai: '3/(−4) để nguyên rồi đem quy đồng',
      dung: '3/(−4) = −3/4 rồi mới tính',
      viSao: 'Dấu trừ ở mẫu luôn chuyển được lên tử. Để mẫu âm mà quy đồng thì rất dễ lạc dấu ở dòng sau. Quy ước chung: mẫu luôn viết dương.',
      hoi: 'Viết lại −5/(−8) cho gọn',
      dap: '5/8, vì trừ chia trừ ra dương' },
    { id: 'h02', mon: 'Hình', bai: 'Bài 8', ten: 'Góc đối đỉnh',
      sai: 'Hai góc này bằng nhau nên là hai góc đối đỉnh',
      dung: 'Đối đỉnh thì bằng nhau, nhưng bằng nhau chưa chắc đối đỉnh',
      viSao: 'Đối đỉnh là nói về vị trí: mỗi cạnh của góc này là tia đối của một cạnh góc kia. Hai góc 40° vẽ ở hai nơi khác nhau vẫn bằng nhau mà không đối đỉnh. Nhìn hình trước, đừng nhìn số đo.',
      hoi: 'Hai đường thẳng cắt nhau tạo ra mấy cặp góc đối đỉnh?',
      dap: '2 cặp' },

    // ngày 3
    { id: 'd03', mon: 'Đại', bai: 'Bài 2', ten: 'Cộng hai phân số khác mẫu',
      sai: '1/2 + 1/3 = 2/5',
      dung: '1/2 + 1/3 = 3/6 + 2/6 = 5/6',
      viSao: 'Cộng mẫu là sai. Nghĩ theo cái bánh: nửa cái cộng một phần ba cái thì phải nhiều hơn nửa cái, mà 2/5 lại nhỏ hơn 1/2. Sai ở đây nhìn ra ngay mà không cần tính.',
      hoi: 'Tính 1/4 + 2/3',
      dap: '3/12 + 8/12 = 11/12' },
    { id: 'h03', mon: 'Hình', bai: 'Bài 8', ten: 'Tia phân giác',
      sai: 'Oz là phân giác của góc xOy = 70° nên góc xOz = 70°',
      dung: 'góc xOz = 35°',
      viSao: 'Phân giác cắt góc thành hai phần bằng nhau, mỗi phần bằng một nửa góc ban đầu. Nhớ theo chữ: phân là chia, giác là góc.',
      hoi: 'Phân giác của góc 108° tạo ra hai góc bao nhiêu độ?',
      dap: 'Mỗi góc 54°' },

    // ngày 4
    { id: 'd04', mon: 'Đại', bai: 'Bài 2', ten: 'Trừ một số âm',
      sai: '1/2 − (−1/3) = 1/2 − 1/3 = 1/6',
      dung: '1/2 − (−1/3) = 1/2 + 1/3 = 5/6',
      viSao: 'Trừ đi một số âm thành cộng. Hai dấu trừ đứng cạnh nhau thì đổi thành dấu cộng. Cách nhớ: bớt đi một món nợ thì mình giàu lên.',
      hoi: 'Tính −2/5 − (−3/5)',
      dap: '−2/5 + 3/5 = 1/5' },
    { id: 'h04', mon: 'Hình', bai: 'Bài 9', ten: 'So le trong hay đồng vị',
      sai: 'Hai góc nằm cùng phía trên nên là so le trong',
      dung: 'Cùng phía so với đường cắt và cùng vị trí trên dưới là đồng vị; nằm hai bên đường cắt và ở khoảng giữa hai đường thẳng là so le trong',
      viSao: 'So le nghĩa là lệch nhau, hai góc nằm hai bên đường cắt. Trong nghĩa là ở khoảng giữa hai đường thẳng song song. Đồng vị nghĩa là cùng một vị trí, chỉ khác chỗ trên hay dưới.',
      hoi: 'Hai góc so le trong nằm cùng bên hay khác bên đường cắt?',
      dap: 'Khác bên' },

    // ngày 5
    { id: 'd05', mon: 'Đại', bai: 'Bài 2', ten: 'Bỏ ngoặc sau dấu trừ',
      sai: '5/6 − (1/3 − 1/2) = 5/6 − 1/3 − 1/2',
      dung: '5/6 − (1/3 − 1/2) = 5/6 − 1/3 + 1/2 = 1',
      viSao: 'Trước ngoặc là dấu trừ thì bỏ ngoặc phải đổi dấu tất cả các số bên trong, không phải chỉ số đầu tiên. Đây là lỗi số một của chương I.',
      hoi: 'Bỏ ngoặc: 1 − (2/5 + 1/5)',
      dap: '1 − 2/5 − 1/5 = 2/5' },
    { id: 'h05', mon: 'Hình', bai: 'Bài 9', ten: 'Viết đủ lý do khi kết luận song song',
      sai: 'Vậy a song song với b',
      dung: 'Vì góc A1 = góc B1 mà hai góc này ở vị trí so le trong nên a song song với b',
      viSao: 'Bài hình chấm theo lý do chứ không chấm kết quả. Một câu kết luận phải có đủ ba phần: hai góc nào bằng nhau, chúng ở vị trí gì, rồi mới tới kết luận.',
      hoi: 'Chỉ nói hai góc bằng nhau đã đủ để kết luận song song chưa?',
      dap: 'Chưa, phải nói rõ hai góc đó ở vị trí so le trong hoặc đồng vị' },

    // ngày 6
    { id: 'd06', mon: 'Đại', bai: 'Bài 2', ten: 'Chia phân số',
      sai: '(−3/5) : (6/25) = (−5/3) · (6/25)',
      dung: '(−3/5) : (6/25) = (−3/5) · (25/6) = −5/2',
      viSao: 'Lật ngược số đứng sau dấu chia, giữ nguyên số đứng trước. Lật nhầm số trước là lỗi hay gặp khi làm nhanh.',
      hoi: 'Tính (−4/9) : (8/3)',
      dap: '(−4/9) · (3/8) = −1/6' },
    { id: 'h06', mon: 'Hình', bai: 'Bài 9', ten: 'Cùng vuông góc thì song song',
      sai: 'a vuông góc c, b vuông góc c, chưa kết luận được gì',
      dung: 'a song song b',
      viSao: 'Hai đường thẳng cùng vuông góc với một đường thứ ba thì song song với nhau. Hình dung hai thanh ngang cùng đóng vuông vào một cột dọc, chúng không bao giờ chạm nhau.',
      hoi: 'a song song b, c vuông góc a. Vậy c và b thế nào?',
      dap: 'c cũng vuông góc với b' },

    // ngày 7
    { id: 'd07', mon: 'Đại', bai: 'Bài 3', ten: 'Ngoặc trong luỹ thừa',
      sai: '(−2)⁴ = −16',
      dung: '(−2)⁴ = 16, còn −2⁴ = −16',
      viSao: 'Có ngoặc thì cả số âm được nhân bốn lần, bốn dấu trừ ghép thành hai cặp nên ra dương. Không ngoặc thì chỉ số 2 được mũ, dấu trừ đứng ngoài chờ tới cuối. Đề kiểm tra hay cho hai câu này cạnh nhau.',
      hoi: 'Tính (−3)² và −3²',
      dap: '9 và −9' },
    { id: 'h07', mon: 'Hình', bai: 'Bài 10', ten: 'Tiên đề Euclid',
      sai: 'Qua một điểm nằm ngoài đường thẳng a vẽ được nhiều đường song song với a',
      dung: 'Chỉ vẽ được đúng một đường',
      viSao: 'Đây là điều được công nhận, không chứng minh, gọi là tiên đề. Công dụng khi làm bài: nếu đã có hai đường cùng đi qua một điểm và cùng song song với a thì chúng thật ra chỉ là một đường.',
      hoi: 'Qua một điểm ngoài đường thẳng a vẽ được mấy đường song song với a?',
      dap: 'Đúng một đường' },

    // ngày 8
    { id: 'd08', mon: 'Đại', bai: 'Bài 3', ten: 'Nhân hai luỹ thừa cùng cơ số',
      sai: '2² · 2³ = 2⁶',
      dung: '2² · 2³ = 2⁵ = 32',
      viSao: 'Nhân thì cộng số mũ. Viết bung ra một lần cho chắc: (2·2)·(2·2·2) đếm được năm số 2. Mỗi lần quên, bung ra đếm là ra ngay.',
      hoi: 'Viết gọn (1/2)³ · (1/2)²',
      dap: '(1/2)⁵ = 1/32' },
    { id: 'h08', mon: 'Hình', bai: 'Bài 10', ten: 'Góc trong cùng phía',
      sai: 'a song song b nên hai góc trong cùng phía bằng nhau',
      dung: 'Hai góc trong cùng phía có tổng bằng 180°',
      viSao: 'Khi hai đường thẳng song song thì so le trong bằng nhau, đồng vị bằng nhau, riêng trong cùng phía thì bù nhau. Chỉ một cặp duy nhất là cộng lại 180°, nhớ riêng cặp đó.',
      hoi: 'a song song b, một góc trong cùng phía bằng 120°. Góc kia bằng bao nhiêu?',
      dap: '60°' },

    // ngày 9
    { id: 'd09', mon: 'Đại', bai: 'Bài 3', ten: 'Luỹ thừa của phân số',
      sai: '(2/3)³ = 8/3',
      dung: '(2/3)³ = 8/27',
      viSao: 'Mũ ăn cả tử lẫn mẫu vì (2/3)·(2/3)·(2/3) nhân tử với tử, mẫu với mẫu. Quên mũ mẫu là lỗi rất hay gặp khi làm nhanh.',
      hoi: 'Tính (−1/3)³',
      dap: '−1/27' },
    { id: 'h09', mon: 'Hình', bai: 'Bài 10', ten: 'Dùng song song theo chiều ngược lại',
      sai: 'Đề đã cho a song song b nhưng chưa biết dùng để làm gì',
      dung: 'Cho song song thì suy ra được các cặp góc bằng nhau hoặc bù nhau',
      viSao: 'Bài 9 dùng góc để suy ra song song. Bài 10 đi chiều ngược: đã có song song thì lấy ra góc. Khi đọc đề, hễ thấy chữ song song là nghĩ ngay tới ba cặp góc.',
      hoi: 'Đề cho a song song b và một góc 70°, hỏi góc đồng vị với nó?',
      dap: 'Cũng 70°' },

    // ngày 10
    { id: 'd10', mon: 'Đại', bai: 'Bài 3', ten: 'Luỹ thừa của luỹ thừa',
      sai: '(2³)² = 2⁵',
      dung: '(2³)² = 2⁶ = 64',
      viSao: 'Mũ chồng mũ thì nhân hai số mũ, vì (2³)² nghĩa là 2³ · 2³, cộng 3 với 3 được 6. Phân biệt với 2³ · 2² là hai cơ số rời nhau nên cộng mũ.',
      hoi: 'Viết gọn (x²)⁴',
      dap: 'x⁸' },
    { id: 'h10', mon: 'Hình', bai: 'Bài 11', ten: 'Giả thiết và kết luận',
      sai: 'Chép lại cả câu định lí rồi bắt đầu chứng minh',
      dung: 'Tách ra: phần sau chữ "nếu" là giả thiết, phần sau chữ "thì" là kết luận',
      viSao: 'Giả thiết là thứ được cho sẵn, dùng làm nguyên liệu. Kết luận là đích phải đi tới. Viết GT và KL ra mép giấy trước khi chứng minh thì biết mình đang có gì trong tay.',
      hoi: 'Trong câu "nếu hai góc đối đỉnh thì bằng nhau", đâu là kết luận?',
      dap: 'Hai góc bằng nhau' },

    // ngày 11
    { id: 'd11', mon: 'Đại', bai: 'Bài 4', ten: 'Thứ tự thực hiện phép tính',
      sai: '2 + 3 · 2² = 5 · 4 = 20',
      dung: '2 + 3 · 2² = 2 + 3 · 4 = 2 + 12 = 14',
      viSao: 'Thứ tự cố định: ngoặc, rồi mũ, rồi nhân chia, cuối cùng cộng trừ. Cộng 2 với 3 trước là làm sai thứ tự.',
      hoi: 'Tính 5 − 2 · 3²',
      dap: '5 − 18 = −13' },
    { id: 'h11', mon: 'Hình', bai: 'Bài 11', ten: 'Mỗi bước phải có lý do',
      sai: 'góc A1 = góc B1, suy ra a song song b',
      dung: 'Mỗi dòng viết thêm phần trong ngoặc nói vì sao',
      viSao: 'Bài chứng minh hình chấm theo từng bước có căn cứ. Một dòng không có lý do thì không được tính điểm dù kết quả đúng. Tập thói quen viết "vì..." ngay từ bây giờ, lên lớp 8 lớp 9 đỡ rất nhiều.',
      hoi: 'Viết lý do cho dòng: hai góc này bằng nhau',
      dap: 'Vì là hai góc đối đỉnh, hoặc vì so le trong của hai đường song song' },

    // ngày 12
    { id: 'd12', mon: 'Đại', bai: 'Bài 4', ten: 'Nhân chia làm từ trái sang',
      sai: '12 : 3 · 2 = 12 : 6 = 2',
      dung: '12 : 3 · 2 = 4 · 2 = 8',
      viSao: 'Nhân và chia cùng một mức nên làm lần lượt từ trái sang phải, không được làm phép nhân trước. Phép trừ cũng vậy.',
      hoi: 'Tính 20 − 6 − 4',
      dap: '14 − 4 = 10' },
    { id: 'h12', mon: 'Hình', bai: 'Bài 8', ten: 'Ghi ký hiệu lên hình trước',
      sai: 'Đọc đề xong làm luôn vào vở nháp',
      dung: 'Vẽ hình, đánh dấu góc vuông, gạch cạnh bằng nhau, ghi số đo đã biết, rồi mới nghĩ',
      viSao: 'Hình có ký hiệu đầy đủ thì lời giải hiện ra gần hết. Ngồi nghĩ mà nhìn hình trống là cách chậm nhất.',
      hoi: 'Đề cho góc xOy = 50° thì ghi vào đâu?',
      dap: 'Ghi số 50° ngay tại góc đó trên hình' },

    // ngày 13
    { id: 'd13', mon: 'Đại', bai: 'Bài 4', ten: 'Chuyển vế đổi dấu',
      sai: 'x + 3/4 = −1/2 nên x = −1/2 + 3/4',
      dung: 'x = −1/2 − 3/4 = −5/4',
      viSao: 'Số hạng chuyển sang vế kia phải đổi dấu. Kiểm tra lại bằng cách thay số vừa tìm vào đề, mất mười giây mà bắt được gần hết lỗi dấu.',
      hoi: 'Tìm x biết x − 2/5 = −1/10',
      dap: 'x = −1/10 + 2/5 = 3/10' },
    { id: 'h13', mon: 'Hình', bai: 'Bài 9', ten: 'Ba cách chứng minh song song',
      sai: 'Chỉ nhớ mỗi cách so le trong',
      dung: 'Có ba dấu hiệu: so le trong bằng nhau, đồng vị bằng nhau, hoặc trong cùng phía bù nhau',
      viSao: 'Đề cho cặp góc nào thì dùng dấu hiệu tương ứng. Nhớ đủ ba cái thì không phải loay hoay tìm cách ép về so le trong.',
      hoi: 'Đề cho hai góc trong cùng phía cộng lại 180°, kết luận được gì?',
      dap: 'Hai đường thẳng đó song song' },

    // ngày 14
    { id: 'd14', mon: 'Đại', bai: 'Bài 4', ten: 'Thừa số không chuyển vế',
      sai: '2x = 7/6 nên x = 7/6 − 2',
      dung: 'x = 7/6 : 2 = 7/12',
      viSao: 'Chuyển vế đổi dấu chỉ dùng cho số đang cộng hoặc trừ. Số đang nhân với x thì phải chia cả hai vế cho nó. Câu ngắn để nhớ: cộng trừ thì đổi dấu, nhân thì thành chia.',
      hoi: 'Tìm x biết 3x + 1/2 = −1',
      dap: '3x = −3/2 nên x = −1/2' },
    { id: 'h14', mon: 'Hình', bai: 'Bài 8', ten: 'Kề bù và đối đỉnh trong một hình',
      sai: 'Hai đường thẳng cắt nhau, biết một góc 40°, không tính được các góc kia',
      dung: 'Góc đối đỉnh với nó bằng 40°, hai góc còn lại đều bằng 140°',
      viSao: 'Hai đường cắt nhau tạo bốn góc. Góc đối diện bằng nhau, góc kề bên bù nhau. Biết một góc là suy ra được cả bốn.',
      hoi: 'Biết một góc bằng 115°, ba góc còn lại?',
      dap: '115°, 65°, 65°' },

    // ngày 15
    { id: 'd15', mon: 'Đại', bai: 'Bài 5', ten: 'Độ chính xác và hàng làm tròn',
      sai: 'Làm tròn 3,14159 với độ chính xác 0,005 được 3,142',
      dung: 'Được 3,14',
      viSao: 'Độ chính xác d là một nửa của hàng cần làm tròn. 0,005 ứng với hàng phần trăm, 0,05 ứng với hàng phần mười, 0,5 ứng với hàng đơn vị. Học thuộc bảng ba dòng này là đủ dùng.',
      hoi: 'Độ chính xác 0,05 thì làm tròn đến hàng nào?',
      dap: 'Hàng phần mười' },
    { id: 'h15', mon: 'Hình', bai: 'Bài 8', ten: 'Đặt tên góc cho đúng',
      sai: 'Viết góc AOB rồi lúc sau viết thành góc OAB',
      dung: 'Đỉnh của góc luôn đứng giữa: góc AOB có đỉnh O',
      viSao: 'Đổi vị trí chữ là đổi sang một góc khác hẳn. Chấm bài hình rất chặt chỗ này, và bản thân Kim cũng dễ tự làm rối mình khi hình có nhiều điểm.',
      hoi: 'Góc MNP có đỉnh là điểm nào?',
      dap: 'Điểm N' }
  ];

  function soNgayHoc(homNay) {
    // đếm số ngày Thứ Hai đến Thứ Sáu kể từ MEO_BAT_DAU, tính cả hôm nay
    var d0 = new Date(MEO_BAT_DAU + 'T00:00:00');
    var d1 = homNay ? new Date(homNay) : new Date();
    d1 = new Date(d1.getFullYear(), d1.getMonth(), d1.getDate());
    if (d1 < d0) return 1;
    var n = 0, d = new Date(d0);
    while (d <= d1) {
      var t = d.getDay();
      if (t >= 1 && t <= 5) n++;
      d.setDate(d.getDate() + 1);
    }
    return n < 1 ? 1 : n;
  }

  function layMeo(i) { return KHO[((i % KHO.length) + KHO.length) % KHO.length]; }

  // Trả về { ngay, moi: [meo, meo], nhac: meo, nhanNhac }
  function meoHomNay(homNay) {
    var n = soNgayHoc(homNay);
    var moi = [layMeo((n - 1) * 2), layMeo((n - 1) * 2 + 1)];
    var nhac, nhanNhac;
    if (n === 1) {
      nhac = layMeo(2);          // ngày đầu chưa có gì để nhắc lại
      nhanNhac = 'Mẹo mới';
    } else {
      var nCu = n > 3 ? n - 3 : n - 1;
      nhac = layMeo((nCu - 1) * 2 + (n % 2));
      nhanNhac = 'Nhắc lại';
    }
    return { ngay: n, moi: moi, nhac: nhac, nhanNhac: nhanNhac };
  }

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function theMeo(m, nhan) {
    return '' +
      '<details class="meo-the">' +
      '<summary>' +
      '<span class="meo-nhan">' + esc(nhan) + ' · ' + esc(m.mon) + ' ' + esc(m.bai) + '</span>' +
      '<span class="meo-ten">' + esc(m.ten) + '</span>' +
      '<span class="meo-sai">✗ ' + esc(m.sai) + '</span>' +
      '<span class="meo-mo">Sai ở đâu? Chạm để xem</span>' +
      '</summary>' +
      '<div class="meo-than">' +
      '<p class="meo-dung">✓ ' + esc(m.dung) + '</p>' +
      '<p class="meo-visao">' + esc(m.viSao) + '</p>' +
      '<details class="meo-hoi"><summary>Thử luôn: ' + esc(m.hoi) + '</summary>' +
      '<p>' + esc(m.dap) + '</p></details>' +
      '</div></details>';
  }

  // HTML của cả khối, dán vào phần "Hôm nay" ở trang chủ
  function htmlMeoHomNay(homNay) {
    var g = meoHomNay(homNay);
    return '' +
      '<div class="meo-khoi">' +
      '<h3 class="meo-tieu-de">3 mẹo Toán hôm nay</h3>' +
      theMeo(g.moi[0], 'Mẹo mới') +
      theMeo(g.moi[1], 'Mẹo mới') +
      theMeo(g.nhac, g.nhanNhac) +
      '</div>';
  }

  // Danh sách mẹo của cả tuần, dùng cho màn đóng tuần.
  // Tham số là số tuần của trang (tuần 1 bắt đầu 07/09), mẹo bắt đầu từ tuần 2.
  var TUAN_TRANG_BAT_DAU = 2;
  function meoTrongTuan(tuan) {
    var t = tuan - TUAN_TRANG_BAT_DAU + 1;
    if (t < 1) return [];
    var ds = [], i;
    for (i = 0; i < 5; i++) {
      var n = (t - 1) * 5 + i + 1;
      ds.push(layMeo((n - 1) * 2), layMeo((n - 1) * 2 + 1));
    }
    return ds;
  }

  var CSS = '' +
    '.meo-khoi{margin:22px 0 12px;animation:rise .45s ease both}' +
    '.meo-tieu-de{font-family:"Baloo 2",cursive;font-size:21px;margin:0 0 10px}' +
    '.meo-the{background:var(--card,#fff);border:1px solid var(--ring,rgba(0,0,0,.06));border-left:5px solid var(--accent,#ff7a18);border-radius:22px;padding:16px 18px;box-shadow:var(--shadow,0 10px 24px rgba(58,42,26,.08));margin-bottom:10px}' +
    '.meo-the>summary{list-style:none;cursor:pointer}' +
    '.meo-the>summary::-webkit-details-marker{display:none}' +
    '.meo-nhan{display:inline-block;font-size:12px;font-weight:700;color:var(--muted,#8a6d57);background:#f3ede7;border-radius:999px;padding:3px 9px;margin-bottom:7px}' +
    '.meo-ten{display:block;font-family:"Baloo 2",cursive;font-size:17px;font-weight:700;margin-bottom:7px}' +
    '.meo-sai{display:block;background:#fff0f0;color:#d64545;border-radius:12px;padding:9px 12px;font-size:14px}' +
    '.meo-mo{display:block;font-size:13px;color:var(--muted,#8a6d57);margin-top:7px}' +
    '.meo-the[open] .meo-mo{display:none}' +
    '.meo-than{margin-top:11px;animation:rise .3s ease both}' +
    '.meo-dung{background:#effaf3;color:#1f9d57;border-radius:12px;padding:9px 12px;font-size:14px;margin:0 0 9px}' +
    '.meo-visao{font-size:14px;line-height:1.55;margin:0 0 9px}' +
    '.meo-hoi{font-size:14px;background:#fff7ed;border:1px dashed #ffb454;border-radius:14px;padding:10px 12px}' +
    '.meo-hoi>summary{cursor:pointer;font-weight:500;list-style:none}' +
    '.meo-hoi>summary::-webkit-details-marker{display:none}' +
    '.meo-hoi p{margin:8px 0 0;padding:9px 12px;border-radius:12px;background:#effaf3}';

  function gan() {
    if (document.getElementById('meo-css')) return;
    var s = document.createElement('style');
    s.id = 'meo-css';
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  // Tự chèn khối mẹo vào cuối trang chủ. Nếu sau này gọi thẳng
  // window.htmlMeoHomNay() trong app.js thì đặt window.MEO_TU_GAN = false.
  function laTrangChu() {
    var h = location.hash;
    return h === '' || h === '#' || h === '#/';
  }
  function tuGan() {
    if (window.MEO_TU_GAN === false) return;
    var app = document.getElementById('app');
    if (!app || !laTrangChu()) return;
    if (app.querySelector('.meo-khoi')) return;
    if (!app.children.length) return;            // trang chưa dựng xong
    var hop = document.createElement('div');
    hop.innerHTML = htmlMeoHomNay();
    app.appendChild(hop.firstChild);
  }
  function theoDoi() {
    var app = document.getElementById('app');
    if (!app) return;
    new MutationObserver(function () { tuGan(); }).observe(app, { childList: true });
    window.addEventListener('hashchange', function () { setTimeout(tuGan, 60); });
    tuGan();
  }

  function khoiDong() { gan(); theoDoi(); }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', khoiDong);
  } else { khoiDong(); }

  window.KIM_MEO = KHO;
  window.meoHomNay = meoHomNay;
  window.htmlMeoHomNay = htmlMeoHomNay;
  window.meoTrongTuan = meoTrongTuan;
  window.soNgayHocMeo = soNgayHoc;
})();
