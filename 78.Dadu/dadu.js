function lemparDadu() {
  const hasil = Math.floor(Math.random() * 6) + 1;
  document.getElementById('hasil').innerText = `Hasil lemparan dadu: ${hasil}`;
}

function resetGame() {
  document.getElementById('hasil').innerText = "Tekan \"Lempar Dadu\" untuk mulai bermain.";
}