function hitungKata() {
  const kalimat = document.getElementById("kalimat").value.trim();
  const hasilDiv = document.getElementById("hasil");
  if (kalimat === "") {
    hasilDiv.textContent = "Silakan masukkan kalimat terlebih dahulu.";
    return;
  }
  const kataArray = kalimat.split(/\s+/).filter(kata => kata.length > 0);
  const jumlahKata = kataArray.length;
  hasilDiv.textContent = `Jumlah kata dalam kalimat: ${jumlahKata}`;
}