function hitung() {
  const r = parseFloat(document.getElementById('radius').value);
  if (isNaN(r) || r <= 0) {
    document.getElementById('hasil').textContent = "Masukkan jari-jari yang valid.";
    return;
  }
  const luas = 2 * Math.PI * r;
  document.getElementById('hasil').textContent = `Keliling lingkaran adalah ${luas.toFixed(2)} satuan².`;
  console.log(hitung)
}