function lampu() {
    const input = document.getElementById('warna').value.trim().toUpperCase();
    const hasilDiv = document.getElementById('hasil');

    if (input === 'MERAH') {
        hasilDiv.innerText = 'STOP!!';
    } else if (input === 'KUNING') {
        hasilDiv.innerText = 'Hati-Hati!!';
    } else if (input === 'HIJAU') {
        hasilDiv.innerText = 'MAJU!!';
    } else {
        hasilDiv.innerText = 'Tau lampu lalu lintas gak?';
    }
}
