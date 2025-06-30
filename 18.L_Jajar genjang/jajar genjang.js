function hitung() {
  const p = parseFloat(document.getElementById('panjang').value);
  if (isNaN(p) || p <= 0) {
    document.getElementById('hasil').textContent = "Masukkan panjang alas yang valid.";
    return;
  }
  const t = parseFloat(document.getElementById('tinggi').value);
  if (isNaN(t) || t <= 0) {
    document.getElementById('hasil').textContent = "Masukkan tinggi yang valid.";
    return;
  }
  const luas = p * t;
  document.getElementById('hasil').textContent = `Luas Jajar Genjang adalah ${luas.toFixed(2)} satuan².`;
  console.log(hitung)
}