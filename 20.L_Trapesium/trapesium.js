function hitung() {
  const ss1 = parseFloat(document.getElementById('ss1').value);
  if (isNaN(ss1) || ss1 <= 0) {
    document.getElementById('hasil').textContent = "Masukkan Sisi sejajar 1 yang valid.";
    return;
  }
  const ss2 = parseFloat(document.getElementById('ss2').value);
  if (isNaN(ss2) || ss2 <= 0) {
    document.getElementById('hasil').textContent = "Masukkan Sisi sejajar 2 yang valid.";
    return;
  }
  const t = parseFloat(document.getElementById('tinggi').value);
  if (isNaN(t) || t <= 0) {
    document.getElementById('hasil').textContent = "Masukkan tinggi yang valid.";
    return;
  }
  const luas = (ss1 + ss2) * t / 2;
  document.getElementById('hasil').textContent = `Luas Trapesium adalah ${luas.toFixed(2)} satuan².`;
  console.log(hitung)
}