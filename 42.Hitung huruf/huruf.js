function hitungHuruf() {
  const kalimat = document.getElementById("kalimat").value.toLowerCase();
  const huruf = document.getElementById("huruf").value.toLowerCase();
  const hasilDiv = document.getElementById("hasil");
  
  if (kalimat === "" || huruf === "") {
  hasilDiv.textContent = "Harap isi kalimat dan huruf yang ingin dihitung.";
  return;
  }
  if (huruf.length !== 1) {
  hasilDiv.textContent = "Harap masukkan hanya satu huruf.";
  return;
  }
  let count = 0;
  for (let char of kalimat) {
    if (char === huruf) {
      count++;
    }
  }
  hasilDiv.textContent = `Jumlah huruf '${huruf}' dalam kalimat: ${count}`;
}