function konversiMeter() {
    const input = document.getElementById('meter').value.trim();
    const hasilDiv = document.getElementById('hasil');

    const meter = parseFloat(input);

    if (isNaN(meter) || meter < 0) {
        hasilDiv.innerText = 'Masukkan panjang dalam meter yang valid.';
        return;
    }

    const kilometer = meter / 1000;
    hasilDiv.innerText = `${meter} meter = ${kilometer} kilometer`;
}
