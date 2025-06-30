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
  const sm1 = parseFloat(document.getElementById('sm1').value);
  if (isNaN(sm1) || sm1 <= 0) {
    document.getElementById('hasil').textContent = "Masukkan Sisi sejajar 1 yang valid.";
    return;
  }
  const sm2 = parseFloat(document.getElementById('sm2').value);
  if (isNaN(sm2) || sm2 <= 0) {
    document.getElementById('hasil').textContent = "Masukkan Sisi sejajar 2 yang valid.";
    return;
  }
  const kel = ss1 + ss2 + sm1 + sm2;
  document.getElementById('hasil').textContent = `Keliling Trapesium adalah ${kel.toFixed(2)} satuan².`;
  console.log(hitung)
}