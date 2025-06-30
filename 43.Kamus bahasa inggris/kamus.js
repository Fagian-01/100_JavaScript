const kamus = {
  'hello': 'halo',
  'goodbye': 'selamat tinggal',
  'thank you': 'terima kasih',
  'please': 'tolong',
  'blue': 'biru',
  'red': 'merah',
  '': ''
};

function terjemahkan() {
  const kata = document.getElementById('kataInput').value.toLowerCase();
  const hasil = document.getElementById('hasil');
  if (kamus[kata]) {
    hasil.textContent = `Terjemahan: ${kamus[kata]}`;
  } 
  else {
    hasil.textContent = 'Kata tidak ditemukan dalam kamus.';
  }
}