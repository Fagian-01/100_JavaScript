function konversiKilometer() {
    const input = document.getElementById('kilometer').value.trim();
    const hasilDiv = document.getElementById('hasil');

    const kilometer = parseFloat(input);

    if (isNaN(kilometer) || kilometer < 0) {
        hasilDiv.innerText = 'Masukkan panjang dalam kilometer yang valid.';
        return;
    }

    const meter = kilometer * 1000;
    hasilDiv.innerText = `${kilometer} kilometer = ${meter} Meter`;
}
