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
  const vol = 1/3 * Math.PI * r**2 * t;
  document.getElementById('hasil').textContent = `Volume Kerucut adalah ${vol.toFixed(2)} satuan².`;
  console.log(hitung)
}