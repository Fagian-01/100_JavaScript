function beratIdeal(tinggi, jenisKelamin) {
  if (jenisKelamin === 'laki-laki') {
  return 0.9 * (tinggi - 100);
  } 
  else {
  return 0.85 * (tinggi - 100);
  }
}
function hitungBeratIdeal() {
  const tinggi = parseFloat(document.getElementById('tinggi').value);
  const jenisKelamin = document.getElementById('jenis_kelamin').value;

  if (isNaN(tinggi) || tinggi <= 0) {
  document.getElementById('hasil').innerText = 'Masukkan tinggi badan yang valid.';
  return;
  }

  const hasil = beratIdeal(tinggi, jenisKelamin).toFixed(2);
  document.getElementById('hasil').innerText = `Berat ideal Anda: ${hasil} kg`;
}