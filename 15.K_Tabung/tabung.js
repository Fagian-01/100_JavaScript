function hitung() {
  let jari = parseFloat(document.getElementById("jari").value);
  let kel = 2 * Math.PI * jari;
  document.getElementById("hasil").textContent = "Keliling: " + kel + 'cm';
  console.log(hitung)
}
