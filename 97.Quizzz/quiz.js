const pertanyaanList = [
  { soal: "Siapa presiden pertama Indonesia?", pilihan: ["a. Soekarno", "b. Soeharto", "c. BJ Habibie", "d. Megawati"], jawaban: "a" },
  { soal: "Berapa hasil dari 5 x 6?", pilihan: ["a. 11", "b. 30", "c. 20", "d. 25"], jawaban: "b" },
  { soal: "Apa ibu kota Jepang?", pilihan: ["a. Beijing", "b. Tokyo", "c. Seoul", "d. Bangkok"], jawaban: "b" },
  { soal: "Siapa penemu bola lampu?", pilihan: ["a. Nikola Tesla", "b. Thomas Edison", "c. Alexander Graham Bell", "d. Isaac Newton"], jawaban: "b" },
  { soal: "Planet terbesar di tata surya?", pilihan: ["a. Bumi", "b. Mars", "c. Jupiter", "d. Saturnus"], jawaban: "c" },
  { soal: "Berapa jumlah provinsi di Indonesia saat ini?", pilihan: ["a. 33", "b. 34", "c. 35", "d. 36"], jawaban: "b" },
  { soal: "Apa simbol kimia untuk air?", pilihan: ["a. H2O", "b. CO2", "c. O2", "d. NaCl"], jawaban: "a" },
  { soal: "Siapa tokoh utama dalam novel 'Laskar Pelangi'?", pilihan: ["a. Ikal", "b. Mahar", "c. Lintang", "d. Arai"], jawaban: "a" },
  { soal: "Dalam olahraga sepak bola, berapa jumlah pemain di satu tim?", pilihan: ["a. 10", "b. 11", "c. 12", "d. 13"], jawaban: "b" },
  { soal: "Apa nama alat musik tradisional dari Jawa Barat?", pilihan: ["a. Angklung", "b. Gamelan", "c. Sasando", "d. Kolintang"], jawaban: "a" },
  { soal: "Apa ibu kota Australia?", pilihan: ["a. Sydney", "b. Melbourne", "c. Canberra", "d. Brisbane"], jawaban: "c" },
  { soal: "Siapa ilmuwan yang mengemukakan teori relativitas?", pilihan: ["a. Isaac Newton", "b. Albert Einstein", "c. Galileo Galilei", "d. Stephen Hawking"], jawaban: "b" },
  { soal: "Apa bahasa pemrograman yang sering digunakan untuk pengembangan web?", pilihan: ["a. Python", "b. JavaScript", "c. C++", "d. Ruby"], jawaban: "b" },
  { soal: "Apa nama proses tumbuhan membuat makanan sendiri?", pilihan: ["a. Respirasi", "b. Fotosintesis", "c. Fermentasi", "d. Transpirasi"], jawaban: "b" },
  { soal: "Hewan apa yang dikenal sebagai raja hutan?", pilihan: ["a. Harimau", "b. Singa", "c. Macan", "d. Cheetah"], jawaban: "b" }
];

let skor = 0;
let indeks = 0;

function mulaiKuis() {
  document.getElementById('menu').style.display = 'none';
  document.getElementById('kuisContainer').style.display = 'block';
  tampilkanPertanyaan();
}

function tampilkanPertanyaan() {
  if (indeks < pertanyaanList.length) {
    const q = pertanyaanList[indeks];
    document.getElementById('pertanyaan').innerText = `Pertanyaan ${indeks + 1}: ${q.soal}`;
    const pilihanContainer = document.getElementById('pilihan');
    pilihanContainer.innerHTML = '';
    q.pilihan.forEach(option => {
      const btn = document.createElement('button');
      btn.className = 'option';
      btn.innerText = option;
      btn.onclick = () => cekJawaban(option.charAt(0));
      pilihanContainer.appendChild(btn);
    });
  } 
  else {
    tampilkanHasil();
  }
}
  
function cekJawaban(jawaban) {
  if (jawaban === pertanyaanList[indeks].jawaban) {
    alert('Benar!');
    skor++;
  } 
  else {
    alert('Salah!');
  }
  indeks++;
  tampilkanPertanyaan();
}

function tampilkanHasil() {
  document.getElementById('kuisContainer').style.display = 'none';
  document.getElementById('hasilContainer').style.display = 'block';
  document.getElementById('score').innerText = `Skor Anda: ${skor} dari ${pertanyaanList.length}`;
}

function ulangKuis() {
  skor = 0;
  indeks = 0;
  document.getElementById('hasilContainer').style.display = 'none';
  mulaiKuis();
}
  
function keluar() {
  alert("Terima kasih telah bermain! Sampai jumpa!");
  window.close();
}