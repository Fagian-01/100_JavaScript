function hitung() {
  let sisi = parseFloat(document.getElementById("sisi").value);
  let kel = sisi * 4
  document.getElementById("hasil").textContent = "Keliling: " + kel + 'cm';
  console.log(hitung)
}
