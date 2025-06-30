function hitung() {
  let panjang = parseFloat(document.getElementById("panjang").value);
  let lebar = parseFloat(document.getElementById("lebar").value);
  let luas = panjang * lebar;
  document.getElementById("hasil").textContent = "Luas: " + luas;
}
