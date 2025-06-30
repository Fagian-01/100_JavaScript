function tekan() {
  const nd = String(document.getElementById('ndepan').value);
  const nt = String(document.getElementById('ntengah').value);
  const na = String(document.getElementById('nakhir').value);
  document.getElementById('hasil').textContent = `Hai ${nd}, apakah marga kamu ${na}?, Bolehkah saya memanggil anda ${nt}?`;
  console.log(tekan)
}