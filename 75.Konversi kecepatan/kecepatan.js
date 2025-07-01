function konversiKecepatan() {
  const mps = parseFloat(document.getElementById('mpsInput').value);
  if (!isNaN(mps)) {
    const kmh = mps * 3.6;
    document.getElementById('hasil').innerText = `Kecepatan dalam km/h: ${kmh.toFixed(2)} km/h`;
  } 
  else {
    document.getElementById('hasil').innerText = "Masukkan angka yang valid.";
  }
}