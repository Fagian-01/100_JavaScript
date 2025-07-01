function hitungDenda() {
  const hasilDiv = document.getElementById('hasil');
  const hariTerlambat = parseInt(document.getElementById('hariInput').value);
  
  if (isNaN(hariTerlambat) || hariTerlambat < 0) {
    hasilDiv.innerText = "Mohon masukkan jumlah hari keterlambatan yang valid.";
    return;
  }
  
  if (hariTerlambat > 0) {
    const denda = hariTerlambat * 1000;
    hasilDiv.innerText = `Denda yang harus dibayar: Rp ${denda.toLocaleString('id-ID')}`;
  } 
  else {
    hasilDiv.innerText = "Tidak ada denda, buku dikembalikan tepat waktu!";
  }
}