function cekHari() {
  const tgl = parseInt(document.getElementById("tanggal").value);
  const bln = parseInt(document.getElementById("bulan").value);
  const thn = parseInt(document.getElementById("tahun").value);
  const hasilDiv = document.getElementById("hasil");
  if (isNaN(tgl) || isNaN(bln) || isNaN(thn)) {
    hasilDiv.textContent = "Harap isi semua input dengan angka yang valid.";
    return;
  }
  const hariList = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const tanggalObj = new Date(thn, bln - 1, tgl);
  if (tanggalObj.getDate() !== tgl || tanggalObj.getMonth() !== (bln - 1) || tanggalObj.getFullYear() !== thn) {
    hasilDiv.textContent = "Tanggal tidak valid. Periksa kembali.";
    return;
  }
  const hari = tanggalObj.getDay(); // 0 = Minggu, 1 = Senin, dst
  hasilDiv.textContent = `Tanggal ${tgl}/${bln}/${thn} jatuh pada hari ${hariList[hari]}.`;
}