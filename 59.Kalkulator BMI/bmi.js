function hitungBMI() {
  const berat = parseFloat(document.getElementById('berat').value);
  const tinggi = parseFloat(document.getElementById('tinggi').value) / 100;
  if (!isNaN(berat) && !isNaN(tinggi) && tinggi > 0) {
  const bmi = berat / (tinggi * tinggi);
  document.getElementById('hasil').innerText = `BMI Anda: ${bmi.toFixed(2)}`;
} 
else {
  document.getElementById('hasil').innerText = 'Masukkan data dengan benar.';
  }
}