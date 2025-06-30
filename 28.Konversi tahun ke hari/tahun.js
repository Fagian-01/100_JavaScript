function hitung() {
  const th = parseFloat(document.getElementById('tahun').value);
  const h = 365;
  const result = th * h
  document.getElementById('hasil').textContent = `${th} Tahun adalah ${result} Hari.`;
  console.log(hitung)
}