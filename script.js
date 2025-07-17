window.onload = function() {
  const allQuestions = [
    // (100 pertanyaan yang sudah kamu isi, disalin dari sebelumnya)
    "Apa arti integritas bagimu di media sosial?",
    "Kapan terakhir kamu berkata jujur meski merugikan dirimu?",
    "Pernahkah kamu memilih tanggung jawab padahal bisa saja lari darinya?",
    "Bagaimana kamu tunjukkan nasionalisme secara online?",
    "Apa bentuk kepedulianmu terhadap lingkungan digital?",
    "Apa tindakan kecil yang menunjukkan cinta tanah air hari ini?",
    "Kapan kamu berdiri untuk keadilan tanpa dukungan?",
    "Apa yang kamu lakukan untuk menjaga keberagaman secara daring?",
    "Bagaimana kamu bersikap adil dalam perdebatan online?",
    "Pernahkah kamu memaafkan komentar buruk di media sosial?",
    "Apa makna kerja keras dalam proses belajar mandiri?",
    "Kapan kamu disiplin meski tak diawasi guru/orangtua?",
    "Pernahkah kamu menahan diri untuk tidak membalas keburukan?",
    "Bagaimana kamu wujudkan rasa ingin tahu dalam dunia digital?",
    "Apa tantangan terbesar saat bersikap kreatif secara online?",
    "Bagaimana kamu menghargai pendapat yang berbeda darimu?",
    "Apa pengalamanmu dalam menunjukkan rasa ingin belajar seumur hidup?",
    "Kapan kamu membantu teman tanpa diminta dan tanpa pamrih?",
    "Apa bentuk hormatmu pada guru yang tak disukai sekalipun?",
    "Apa arti cinta damai dalam dunia komentar yang panas?",
    "Bagaimana kamu tetap sabar di tengah komentar toxic?",
    "Kapan kamu menghindari plagiarisme meski tidak akan ketahuan?",
    "Apa pengalamanmu menjaga integritas saat mengerjakan tugas daring?",
    "Bagaimana kamu bersikap saat temanmu menyebar hoaks?",
    "Apa bentuk partisipasimu menjaga ruang digital tetap sehat?",
    "Kapan kamu merasa bangga telah berani berbeda pendapat?",
    "Pernahkah kamu menyesal karena diam ketika harus bersuara?",
    "Bagaimana kamu menyikapi tekanan untuk selalu validasi sosial?",
    "Apa momen digital yang membuatmu reflektif tentang karakter?",
    "Apa peran kesederhanaan dalam hidupmu di era serba pamer?",
    "Kapan kamu merasa puas tanpa harus membagikannya ke media sosial?",
    "Apa arti tanggung jawab dalam menggunakan fitur repost atau share?",
    "Bagaimana kamu mengekspresikan nasionalisme dengan bahasa yang baik?",
    "Apa nilai karakter yang paling kamu pegang diam-diam?",
    "Pernahkah kamu memilih untuk diam demi menjaga harmoni?",
    "Apa bentuk keberanianmu dalam berkata tidak pada ajakan buruk?",
    "Bagaimana kamu menghargai ruang digital milik orang lain?",
    "Pernahkah kamu memberi kritik yang membangun meski itu sulit?",
    "Apa pengalamanmu bersikap empati kepada pengguna lain yang diserang?",
    "Bagaimana kamu tetap jujur dalam membuat persona digital?",
    "Apa alasan terbesarmu untuk tetap menjadi pribadi otentik?",
    "Bagaimana kamu belajar dari kegagalan yang kamu sembunyikan?",
    "Pernahkah kamu gagal lalu bangkit tanpa sorotan siapa pun?",
    "Apa makna perjuangan sunyi bagimu secara pribadi?",
    "Bagaimana kamu menjaga fokus ketika semua orang ingin viral?",
    "Pernahkah kamu menahan pendapat demi mendengar lebih dulu?",
    "Apa arti menjadi dewasa di ruang digital menurutmu?",
    "Bagaimana kamu merawat semangat belajar di tengah kejenuhan online?",
    "Apa makna sabar saat progressmu tidak terlihat siapa pun?",
    "Bagaimana kamu menjaga kebaikan dalam ruang komentar?",
    "Pernahkah kamu menolak ikut menyudutkan seseorang?",
    "Bagaimana kamu belajar memahami meski tidak setuju?",
    "Apa yang membuatmu kuat dalam tekanan ekspektasi online?",
    "Kapan terakhir kali kamu memberi tanpa diketahui siapa pun?",
    "Bagaimana kamu menahan diri untuk tidak memamerkan pencapaian?",
    "Pernahkah kamu belajar dari seseorang yang kamu tidak suka?",
    "Apa arti keberanian dalam memilih jalan sendiri secara digital?",
    "Bagaimana kamu tetap positif di tengah algoritma yang menekan?",
    "Apa tindakan kecilmu yang punya dampak besar diam-diam?",
    "Pernahkah kamu gagal jadi panutan lalu mencoba lagi diam-diam?",
    "Apa kamu pernah salah dan mengakuinya secara terbuka?",
    "Bagaimana kamu menunjukkan kasih sayang secara virtual?",
    "Apa tantangan terbesarmu dalam bersikap otentik di media sosial?",
    "Pernahkah kamu mundur untuk kebaikan bersama?",
    "Bagaimana kamu menyampaikan kebenaran tanpa menyakiti?",
    "Apa bentuk gotong royong digital yang kamu alami?",
    "Apa alasan terbesarmu untuk terus jujur dalam tulisan?",
    "Pernahkah kamu merayakan pencapaian orang lain tanpa iri?",
    "Bagaimana kamu menenangkan diri di tengah drama digital?",
    "Apa nilai karakter yang kamu ingin tanamkan dalam hidupmu?",
    "Kapan kamu memilih belajar daripada membuktikan diri?",
    "Bagaimana kamu tahu tindakanmu benar walau tidak dipuji?",
    "Apa peran introspeksi dalam hidup onlinemu?",
    "Apa pelajaran moral terbesar yang kamu petik tahun ini?",
    "Apa kebaikan kecil yang kamu lakukan hari ini?",
    "Pernahkah kamu memilih diam saat bisa menyindir balik?",
    "Bagaimana kamu bersikap rendah hati di tengah pujian?",
    "Apa makna keikhlasan di zaman serba pamer?",
    "Apa bentuk rasa syukurmu yang tidak kamu posting?",
    "Pernahkah kamu membela orang asing di dunia maya?",
    "Bagaimana kamu menyalurkan marah dengan cara yang dewasa?",
    "Apa satu prinsip hidupmu yang tidak bisa ditawar?",
    "Bagaimana kamu menilai orang tanpa prasangka?",
    "Pernahkah kamu mengubah pendapat setelah merenung?",
    "Bagaimana kamu merawat nilai moral saat semua jadi konten?",
    "Apa bentuk pertumbuhan karaktermu di ruang digital?",
    "Pernahkah kamu merasa kehilangan arah dan kembali lagi?",
    "Apa peran nilai karakter dalam menjaga kesehatan mentalmu?",
    "Bagaimana kamu memilih apa yang layak dibagikan?",
    "Apa bentuk cinta yang tidak perlu diumumkan?",
    "Apa keputusan sulit yang kamu ambil sendiri baru-baru ini?",
    "Bagaimana kamu menghadapi rasa tidak dianggap?",
    "Apa yang membuatmu bertahan saat tidak ada validasi?",
    "Bagaimana kamu bersikap saat disalahpahami online?",
    "Apa harapanmu untuk karakter generasi digital selanjutnya?",
    "Apa makna ‘Cerminan Guts’ bagimu pribadi?"
    "Apa bagian dari dirimu yang belum kamu jujur akui di dunia maya?",
    ];

  const shuffled = questions.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 2);

  document.getElementById("label1").textContent = selected[0];
  document.getElementById("label2").textContent = selected[1];
};

function submitAnswers() {
  const q1 = document.getElementById("question1").value.trim();
  const q2 = document.getElementById("question2").value.trim();
  const result = document.getElementById("result");

  if (q1 === "" || q2 === "") {
    alert("Jawaban tidak boleh kosong.");
    return;
  }

  result.classList.remove("hidden");
}

function downloadAnswers() {
  const q1 = document.getElementById("question1").value.trim();
  const q2 = document.getElementById("question2").value.trim();
  const personalNote = document.getElementById("personalNote").value.trim();

  let content = "Refleksi Pribadi:\n\n";
  content += "1. Apa hal terbaik tentang dirimu yang tidak pernah kamu unggah di media sosial?\n";
  content += q1 + "\n\n";
  content += "2. Apa satu hal yang membuatmu bangga, meski tidak ada yang tahu?\n";
  content += q2 + "\n\n";
  content += "Catatan pribadi:\n" + (personalNote || "(tidak diisi)") + "\n";

  const blob = new Blob([content], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "refleksi_kompas_moral.txt";
  a.click();
}