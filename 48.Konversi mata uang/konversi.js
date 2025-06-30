function konversiUang() {
    const jumlah = parseFloat(document.getElementById('jumlah').value);
    const kurs = parseFloat(document.getElementById('kurs').value);
    const hasilDiv = document.getElementById('hasil');

    if (isNaN(jumlah) || isNaN(kurs) || jumlah <= 0 || kurs <= 0) {
        hasilDiv.innerText = 'Masukkan jumlah uang dan nilai tukar yang valid.';
        return;
    }

    const hasil = jumlah * kurs;
    hasilDiv.innerText = `Hasil konversi: ${hasil.toFixed(2)} dalam mata uang tujuan.`;
}
