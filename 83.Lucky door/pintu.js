const hadiah = Math.floor(Math.random() * 3) + 1;

function pilih(nomor) {
  const hasil = document.getElementById("hasil");
  if (nomor === hadiah) {
    hasil.textContent = "🎉 Kamu menemukan IPHONE !* PRO MAX!";
  } else {
    hasil.textContent = "❌ Kamu di lumuri money!";
  }
}