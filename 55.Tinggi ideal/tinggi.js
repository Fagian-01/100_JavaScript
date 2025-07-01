function hitungTinggi() {
    const berat = parseFloat(document.getElementById("berat").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);
    const hasilDiv = document.getElementById("hasil");

    if (isNaN(berat) || isNaN(tinggi)) {
        hasilDiv.innerText = "Mohon masukkan berat dan tinggi dengan benar.";
        return;
    }

    const tinggiIdeal = tinggi - (100 + (berat - 50) / 2);
    hasilDiv.innerText = `Tinggi badan ideal: ${tinggiIdeal.toFixed(2)} cm`;
}
