let count = 0;

function tambahKlik() {
    count++;
    document.getElementById('hasil').textContent = `Jumlah klik: ${count}`;
}

function resetKlik() {
    count = 0;
    document.getElementById('hasil').textContent = `Jumlah klik: ${count}`;
}
