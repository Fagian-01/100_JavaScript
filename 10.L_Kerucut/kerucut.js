function hitung() {
  const r = parseFloat(document.getElementById('jari').value);
  if (isNaN(r) || r <= 0) {
    document.getElementById('hasil').textContent = "Masukkan jari-jari yang valid.";
    return;
  }
  const t = parseFloat(document.getElementById('tinggi').value);
  if (isNaN(t) || t <= 0) {
    document.getElementById('hasil').textContent = "Masukkan tinggi yang valid.";
    return;
  }
  const sisi = Math.sqrt (r**2 + t**2)
  const luas = Math.PI * r * (r + sisi);
  document.getElementById('hasil').textContent = `Luas Kerucut adalah ${luas.toFixed(2)} satuan².`;
  alert(luas.toFixed(2))
  console.log(hitung)
}