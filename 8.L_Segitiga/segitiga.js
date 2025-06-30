function hitung() {
  let alas = parseFloat(document.getElementById("alas").value);
  let tinggi = parseFloat(document.getElementById("tinggi").value);
  let luas = alas * tinggi / 2;
  document.getElementById("hasil").textContent = "Luas: " + luas;
  console.log(hitung)
}
