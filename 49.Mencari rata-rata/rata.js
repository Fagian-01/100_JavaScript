function hitungRataRata() {
    const input = document.getElementById('angka').value.trim();
    const hasilDiv = document.getElementById('hasil');

    if (!input) {
        hasilDiv.innerText = 'Masukkan angka terlebih dahulu.';
        return;
    }

    const angkaArray = input.split(/\s+/).map(Number);
    
    if (angkaArray.some(isNaN)) {
        hasilDiv.innerText = 'Pastikan semua input adalah angka valid.';
        return;
    }

    const total = angkaArray.reduce((a, b) => a + b, 0);
    const rataRata = total / angkaArray.length;

    hasilDiv.innerText = `Rata-rata: ${rataRata.toFixed(2)}`;
}
