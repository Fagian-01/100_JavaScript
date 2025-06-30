function hitung() {
  const c = parseFloat(document.getElementById('celcius').value);
  const rm = (4/5) * c;
  document.getElementById('hasil').textContent = `Suhu Reamur adalah ${rm.toFixed(1)}°R.`;
  console.log(hitung)
}