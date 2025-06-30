function hitung() {
  let panjang = parseFloat(document.getElementById("panjang").value);
  let lebar = parseFloat(document.getElementById("lebar").value);
  let Keliling = 2 * (panjang + lebar);
  document.getElementById("hasil").textContent = "Keliling: " + Keliling + 'cm';
  console.log(hitung)
}
