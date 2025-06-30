function hitungSelisihTanggal() {
  const tgl1 = document.getElementById('tanggal1').value;
  const tgl2 = document.getElementById('tanggal2').value;

  if (!tgl1 || !tgl2) {
    document.getElementById('hasil').innerText = 'Masukkan kedua tanggal terlebih dahulu.';
    return;
  }
            
  const date1 = new Date(tgl1);
  const date2 = new Date(tgl2);
  const selisihMs = Math.abs(date2 - date1);
  const selisihHari = Math.ceil(selisihMs / (1000 * 60 * 60 * 24));

  document.getElementById('hasil').innerText = `Selisih antara kedua tanggal adalah ${selisihHari} hari.`;
}