function biaya() {
    const berat = parseFloat(document.getElementById("berat").value);
    const tarif = parseFloat(document.getElementById("tarif").value);

    if (isNaN(berat) || isNaN(tarif)) {
        document.getElementById("hasil").innerText = "Mohon masukkan nilai yang valid.";
        return;
    }

    const totalBiaya = berat * tarif;
    document.getElementById("hasil").innerText = `Total biaya kirim: Rp${totalBiaya.toFixed(2)}`;
}
