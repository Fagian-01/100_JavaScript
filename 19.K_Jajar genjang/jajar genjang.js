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
  const s = parseFloat(document.getElementById('sisi').value);
  if (isNaN(s) || s <= 0) {
    document.getElementById('hasil').textContent = "Masukkan tinggi yang valid.";
    return;
  }
  const kel = 2 * p * s;
  document.getElementById('hasil').textContent = `Luas Jajar Genjang adalah ${kel.toFixed(2)} satuan².`;
  console.log(hitung)
}