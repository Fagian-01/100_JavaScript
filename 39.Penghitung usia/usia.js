function hitungUsia() {
  const inputTanggal = document.getElementById("tanggalLahir").value;
  const hasilDiv = document.getElementById("hasil");
  if (!inputTanggal) {
    hasilDiv.textContent = "Silakan masukkan tanggal lahir Anda.";
    return;
  }
  const tanggalLahir = new Date(inputTanggal);
  const hariIni = new Date();
  let usia = hariIni.getFullYear() - tanggalLahir.getFullYear();
  const bulan = hariIni.getMonth() - tanggalLahir.getMonth();
  const tanggal = hariIni.getDate() - tanggalLahir.getDate();
  if (bulan < 0 || (bulan === 0 && tanggal < 0)) {
    usia--;
    }
    hasilDiv.textContent = `Usia Anda saat ini: ${usia} tahun.`;
}