function gambarSegitiga() {
  const n = parseInt(document.getElementById("baris").value);
  const output = document.getElementById("output");
  let hasil = "";
  if (isNaN(n) || n <= 0) {
    output.textContent = "Masukkan angka bulat positif.";
    return;
  }
  for (let i = 1; i <= n; i++) {
    const spasi = " ".repeat(n - i);
    const bintang = "*".repeat(2 * i - 1);
    hasil += spasi + bintang + "\n";
  }
  output.textContent = hasil;
}