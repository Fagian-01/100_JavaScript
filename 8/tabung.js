function hitung() {
  let jari = parseFloat(document.getElementById("jari").value);
  let luas = 2 * 3.14 * jari * (jari+1);
  document.getElementById("hasil").textContent = "Luas: " + luas;
}
