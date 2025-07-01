function tampilkan() {
  const sekarang = new Date();
  const tanggal = String(sekarang.getDate()).padStart(2, '0');
  const bulan = String(sekarang.getMonth() + 1).padStart(2, '0');
  const tahun = sekarang.getFullYear();
  document.getElementById('tanggal').innerText = `${tanggal}-${bulan}-${tahun}`;
}

tampilkan();