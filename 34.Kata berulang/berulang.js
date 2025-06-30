function ulangKalimat() {
  let jumlah = parseInt(document.getElementById("jumlah").value);
  let kalimat = document.getElementById("kalimat").value;
  let hasil = "<h2>Hasil:</h2>";
  for (let i = 0; i < jumlah; i++) {
    hasil += `${i + 1}. ${kalimat}.<br>`;
  }

  document.getElementById("output").innerHTML = hasil;
}