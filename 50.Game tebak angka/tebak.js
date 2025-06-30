let rahasia = Math.floor(Math.random() * 100) + 1;
let jumlahTebakan = 0;

function tebakAngka() {
    const tebakanInput = document.getElementById('tebakan');
    const hasilDiv = document.getElementById('hasil');
    const tebakan = parseInt(tebakanInput.value);

    if (isNaN(tebakan) || tebakan < 1 || tebakan > 100) {
        hasilDiv.innerText = 'Masukkan angka valid antara 1 hingga 100.';
        return;
    }

    jumlahTebakan++;

    if (tebakan < rahasia) {
        hasilDiv.innerText = 'Terlalu rendah! Coba angka yang lebih besar.';
    } else if (tebakan > rahasia) {
        hasilDiv.innerText = 'Terlalu tinggi! Coba angka yang lebih kecil.';
    } else {
        hasilDiv.innerText = `Selamat! Anda menebak dengan benar dalam ${jumlahTebakan} percobaan.`;
    }

    tebakanInput.value = '';
    tebakanInput.focus();
}
