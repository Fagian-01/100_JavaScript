function hitungBiaya() {
  const km = parseFloat(document.getElementById('kmInput').value);
  const konsumsi = parseFloat(document.getElementById('konsumsiInput').value);
  const harga = parseFloat(document.getElementById('hargaInput').value);
  
  if (!isNaN(km) && !isNaN(konsumsi) && !isNaN(harga) && konsumsi !== 0) {
    const total = (km / konsumsi) * harga;
    document.getElementById('hasil').innerText = `Total biaya perjalanan: Rp ${total.toLocaleString('id-ID', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
  } 
  else {
    document.getElementById('hasil').innerText = "Mohon masukkan semua data dengan benar (konsumsi BBM tidak boleh 0).";
  }
}