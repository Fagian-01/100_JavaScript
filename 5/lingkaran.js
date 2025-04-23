function hitung() {
  let jari = parseFloat(document.getElementById("jari").value);
  let luas = jari ** 2 * 3.14
  document.getElementById("hasil").textContent = "Luas: " + luas;
}
