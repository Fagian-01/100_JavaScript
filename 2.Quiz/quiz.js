function cekJawaban(jawaban) {
  const hasilDiv = document.getElementById("hasil");
  if (jawaban === 'C') {
    hasilDiv.textContent = "Pintarr!";
    hasilDiv.style.color = "green";
  } 
  else {
    hasilDiv.textContent = "Banyakin cari informasi!";
    hasilDiv.style.color = "red";
  }
}