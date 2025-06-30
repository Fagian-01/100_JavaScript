function hitung() {
  const angka1 = document.getElementById("angka1").value.replace(",", ".");
  const angka2 = document.getElementById("angka2").value.replace(",", ".");
  const hasildiv = document.getElementById("hasil");
  const a = parseInt(angka1);
  const b = parseInt(angka2);

  if (isNaN(a) || isNaN(b)) {
  hasilDiv.textContent = "Input tidak valid. Harap masukkan angka.";
  return;
}
if (b === 0) {
  hasilDiv.textContent = "Error: Tidak dapat melakukan modulus dengan nol.";
  return;
}
const hasil = a % b;
hasildiv.textContent = `${a} modulus ${b} = ${hasil}`;
        }