function jumlahDigit(angka) {
  return angka.toString().length;
}
function hitungJumlahDigit() {
  const angka = document.getElementById('angka').value;

  if (angka === '' || isNaN(angka)) {
    document.getElementById('hasil').innerText = 'Masukkan angka yang valid.';
    return;
  }

  const hasil = jumlahDigit(angka);
  document.getElementById('hasil').innerText = `Jumlah digit: ${hasil}`;
}
