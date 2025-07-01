function susunAngka() {
    const angka = [
        parseInt(document.getElementById('angka1').value),
        parseInt(document.getElementById('angka2').value),
        parseInt(document.getElementById('angka3').value),
        parseInt(document.getElementById('angka4').value),
        parseInt(document.getElementById('angka5').value)
    ];

    if (angka.some(isNaN)) {
        document.getElementById('hasil').textContent = 'Harap isi semua angka dengan benar.';
        return;
    }

    angka.sort(function(a, b) { return a - b });
    document.getElementById('hasil').textContent = `Angka disusun: ${angka.join(', ')}`;
}
