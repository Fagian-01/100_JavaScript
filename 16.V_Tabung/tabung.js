function hitung() {
  let jari = parseFloat(document.getElementById("jari").value);
  let tinggi = parseFloat(document.getElementById("tinggi").value);
  let vol = Math.PI * jari**2 * tinggi;
  let result = vol.toFixed(1)
  document.getElementById("hasil").textContent = "Volume: " + result + 'cm3';
  console.log(hitung)
}
