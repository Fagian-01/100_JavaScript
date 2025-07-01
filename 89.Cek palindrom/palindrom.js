function cekPalindrom() {
  const s = document.getElementById('inputKata').value;
  const sLower = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = sLower.split('').reverse().join('');

  if (sLower === '') {
    document.getElementById('hasil').innerText = "Mohon masukkan kata atau angka.";
    return;
  }

  if (sLower === reversed) {
    document.getElementById('hasil').innerText = `"${s}" adalah palindrom.`;
  } 
  else {
    document.getElementById('hasil').innerText = `"${s}" bukan palindrom.`;
  }
}