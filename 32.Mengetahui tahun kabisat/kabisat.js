function hitung() {
  const t = parseFloat(document.getElementById('tahun').value);
  if (tahun % 400 == 0) {
    document.getElementById('hasil').textContent = t +` adalah tahun kabisat`;
  }
  else {
    document.getElementById('hasil').textContent = t +` bukan tahun kabisat`;
  }
 
  console.log(hitung)
}