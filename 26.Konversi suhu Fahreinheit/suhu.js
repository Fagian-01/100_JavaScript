function hitung() {
  const c = parseFloat(document.getElementById('celcius').value);
  const f = ((9/5) * c) + 32;
  document.getElementById('hasil').textContent = `Suhu Fahreinheit adalah ${f.toFixed(1)}°F.`;
  console.log(hitung)
}