function konversiMBkeGB() {
  const mb = parseFloat(document.getElementById('mbInput').value);
  if (!isNaN(mb)) {
    const gb = mb / 1024;
    document.getElementById('hasil').innerText = `Data dalam GB: ${gb.toFixed(2)} GB`;
  } 
  else {
    document.getElementById('hasil').innerText = "Masukkan angka yang valid.";
  }
}