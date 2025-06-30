function hitung() {
  const h = parseFloat(document.getElementById('harga').value);
  const d = parseFloat(document.getElementById('diskon'). value);
  const result = h - h * (d / 100)
  document.getElementById('hasil').textContent = `Setelah di diskon menjadi Rp ${result}.`;
  console.log(hitung)
}