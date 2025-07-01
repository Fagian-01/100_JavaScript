function hitungKeuntungan() {
  const pendapatan = parseFloat(document.getElementById('pendapatanInput').value);
  const biaya = parseFloat(document.getElementById('biayaInput').value);

  if (!isNaN(pendapatan) && !isNaN(biaya)) {
    const keuntungan = pendapatan - biaya;
    document.getElementById('hasil').innerText = `Keuntungan usaha: Rp ${keuntungan.toLocaleString('id-ID')}`;
  } 
  else {
    document.getElementById('hasil').innerText = "Masukkan angka yang valid.";
  }
}