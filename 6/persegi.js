function hitung() {
  let sisi = parseFloat(document.getElementById("sisi").value);
  let luas = sisi * 4
  document.getElementById("hasil").textContent = "Luas: " + luas;
}
