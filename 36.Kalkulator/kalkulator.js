function hitung() {
  const angka1 = document.getElementById("angka1").value.replace(",", ".");
  const angka2 = document.getElementById("angka2").value.replace(",", ".");
  const operasi = document.getElementById("operasi").value;
  const hasilDiv = document.getElementById("hasil");
  const n1 = parseFloat(angka1);
  const n2 = parseFloat(angka2);
  if (isNaN(n1) || isNaN(n2)) {
    hasilDiv.textContent = "Input tidak valid. Harap masukkan angka.";
    return;
  }

  let hasil;
   if (operasi === "tambah") {
    hasil = n1 + n2;
    hasilDiv.textContent = `${n1} + ${n2} = ${hasil}`;
  } 
  else if (operasi === "kurang") {
    hasil = n1 - n2;
    hasilDiv.textContent = `${n1} - ${n2} = ${hasil}`;
  } 
  else if (operasi === "kali") {
    hasil = n1 * n2;
    hasilDiv.textContent = `${n1} * ${n2} = ${hasil}`;
  } 
  else if (operasi === "bagi") {
    if (n2 === 0) {
      hasilDiv.textContent = "Error: Tidak dapat membagi dengan nol.";
    } 
    else {
      hasil = n1 / n2 
      hasilDiv.textContent = `${n1} / ${n2} = ${hasil}`;
    }
  } 
  else {
    hasilDiv.textContent = "Operasi tidak valid.";
  }
}