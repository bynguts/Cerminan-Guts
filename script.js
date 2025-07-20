window.onload = function() {
  const allQuestions = [
    // (100 pertanyaan yang sudah kamu isi, disalin dari sebelumnya)
    
    "Apakah kamu masih jujur jika hanya kamu yang tahu jawabannya?",
    "Jika hidupmu hanya bisa diceritakan lewat 3 kejujuran yang kamu akui, apa yang akan kamu pilih?",
    "Mana yang lebih kamu takutkan, dinilai oleh orang lain atau menilai dirimu sendiri dengan jujur?",
    "Kamu lebih sering hidup untuk terlihat hidup, atau untuk benar-benar hidup?",
    "Dalam dunia yang selalu terhubung, bagaimana kamu membedakan antara dirimu yang nyata dan dirimu yang ditampilkan?",
    "Bagaimana media sosial memengaruhi definisimu tentang harga diri?",
    "Seberapa jauh teknologi membentuk pandanganmu tentang benar dan salah?",
    "Dalam budaya yang memuja reaksi dan validasi, apa arti integritas bagimu?",
    "Cobalah menjelaskan siapa kamu jika internet tidak pernah ada.",
    "Bagaimana persona digital mengubah caramu mengekspresikan nilai?",
    "Jika semua jejak digitalmu disusun seperti buku harian, apa yang akan orang pelajari tentang karaktermu?",
    "Apa yang kamu takutkan jika orang lain tahu isi pikiranmu yang sebenarnya di balik sebuah unggahan?",
    "Apa artinya menjadi jujur dalam dunia yang menghargai citra lebih dari kebenaran?",
    "Apakah menurutmu nilai seseorang bisa dilihat dari apa yang mereka unggah? Mengapa kamu percaya atau tidak percaya pada itu?",
    "Apakah integritas bisa tetap hidup di dunia yang dibangun dari pencitraan dan angka?",
    "Apakah kamu pernah merasa tidak berarti hanya karena postinganmu tidak mendapat perhatian? Dari mana rasa nilai diri itu berasal sebenarnya?",
    "Jika semua validasi eksternal (likes, comments, dan views) hilang hari ini, apa yang membuatmu tetap merasa bernilai sebagai manusia?",
    "Apakah kebebasan berekspresi di media sosial membuatmu lebih bertanggung jawab atau justru lebih sembrono dalam bersikap?",
    "Jika anak kecil melihat semua unggahanmu hari ini, apa karakter yang akan mereka tiru darimu?",
    "Apakah kamu hidup sebagai dirimu sendiri, atau sebagai apa yang dunia maya ingin kamu tampilkan?",
    "Dalam dunia yang terus terhubung, bagaimana caramu tetap terhubung dengan suara hatimu sendiri?",
    "Apakah kamu masih bisa menilai dirimu sendiri dengan jujur tanpa menunggu komentar atau like dari orang lain?",
    "Jika kamu tidak membagikan prosesmu, apakah kamu masih sanggup terus berjalan?",
    "Apa yang kamu pelajari tentang dirimu sendiri dari cara kamu bersikap di dunia digital?",
    "Dalam pencapaianmu yang dibagikan secara online, adakah ruang yang kamu sisakan untuk mengakui bahwa kamu masih belajar?",
    "Bagaimana kamu menanggapi orang yang menyerang keyakinanmu secara terbuka di internet?",
    "Apakah kamu lebih bangga dengan hasil yang dipuji orang, atau proses yang mungkin tak dilihat siapa pun?",
    "Jika semua media sosial tiba-tiba hilang besok pagi, apa yang akan hilang dari hidupmu? Dan apakah itu bagian penting dari dirimu?",
    "Jika setiap tindakanmu terekam dan ditayangkan kepada orang yang paling kamu hormati, apakah kamu akan hidup dengan cara yang sama seperti sekarang?",
    "Mengapa kamu membagikan sesuatu di media sosial? Apakah kamu ingin dipahami, atau hanya ingin dipuja? Apa bedanya menurutmu?",
    "Jika integritas adalah melakukan hal yang benar saat tak ada yang melihat, lalu siapa kamu saat tidak diawasi?",
    "Jika suatu saat anakmu bertanya bagaimana seharusnya bersikap di dunia digital, apakah kamu akan cukup bangga dengan pilihan-pilihan digitalmu selama ini?",
    "Apa perbedaan antara dirimu yang kamu tampilkan ke dunia dan dirimu yang kamu bisikkan pada diri sendiri?",
    "Bagaimana kamu bisa tahu bahwa kamu sedang jujur kepada dirimu sendiri, bukan hanya jujur kepada citra yang ingin kamu percayai?",
    "Jika kamu menulis tentang dirimu tanpa boleh menyebut pencapaian atau validasi dari orang lain, seperti apa tulisan itu akan terdengar?",
    "Pernahkah kamu merasa bahwa kamu menjual sebagian dari dirimu hanya untuk mendapat respons? Apa yang kamu rasakan setelahnya?",
    "Apa momen terakhir di mana kamu menyadari bahwa kamu berbohong kepada dirimu sendiri? Apa yang mendorongmu melakukannya?",
    "Apa artinya menjadi otentik ketika setiap hari kita terpapar versi terbaik orang lain?",
    "Apa konsekuensi jangka panjang dari terus-menerus menampilkan diri yang bukan kamu sepenuhnya?",
    "Seberapa sering kamu menyembunyikan bagian dari dirimu agar terlihat lebih baik? Apa yang kamu takuti dari kejujuran penuh itu?",
    "Apa definisi kejujuran terhadap diri sendiri bagimu?",
    "Apakah kamu mengenali dirimu yang asli dalam jejak digitalmu?",
    "Apakah kamu merasa mengendalikan teknologi atau justru dikendalikan olehnya? Bagaimana kamu tahu?",
    "Pernahkah kamu mengubah pendapatmu setelah melihat perspektif orang lain secara daring? Apa yang membuatmu terbuka saat itu?",
    "Bagaimana kamu tahu bahwa seseorang sedang terluka di balik unggahan bahagianya di media sosial?",
    "Apakah kamu menganggap dirimu jujur karena kamu jujur, atau karena kamu belum pernah diuji dengan pilihan yang sulit?",
    "Apa yang selama ini kamu anggap sebagai kebenaran tetapi belum pernah kamu uji?",
    "Apa gunanya kebebasan berekspresi jika kamu tidak bisa mengungkapkan kebenaran hatimu sendiri?",
    "Apakah kamu benar-benar menyukai hal yang kamu lakukan saat ini?",
    "Apa makna Cerminan Guts bagimu?",
    "Di tengah derasnya arus digital ini, apakah kamu benar-benar mengikuti jalan yang benar, atau sekadar takut disebut salah?"
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
