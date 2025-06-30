function hitung() {
  const r = parseFloat(document.getElementById('radius').value);
  if (isNaN(r) || r <= 0) {
    document.getElementById('hasil').textContent = "Masukkan jari-jari yang valid.";
    return;
  }
  const luas = Math.PI * r * r;
  document.getElementById('hasil').textContent = `Luas lingkaran adalah ${luas.toFixed(2)} satuan².`;
  console.log(luas.toFixed(2))
}