function hitung() {
  const a = parseFloat(document.getElementById('angka').value);
  if (a % 2 == 0) {
    document.getElementById('hasil').textContent = a +` adalah angka Genap`;
  }
  else {
    document.getElementById('hasil').textContent = a +` adalah angka Ganjil`;
  }
 
  console.log(hitung)
}