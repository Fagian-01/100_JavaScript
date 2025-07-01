function buatInputTidur() {
  const jumlahHari = parseInt(document.getElementById('jumlahHari').value);
  const container = document.getElementById('inputsContainer');
  container.innerHTML = '';
  if (!isNaN(jumlahHari) && jumlahHari > 0) {
    for (let i = 0; i < jumlahHari; i++) {
    const input = document.createElement('input');
    input.type = 'number';
    input.placeholder = `Waktu tidur hari ke-${i + 1} (jam)`;
    input.step = '0.1';
    input.className = 'jamTidur';
    container.appendChild(input);
    }
  } 
  else {
    container.innerHTML = 'Masukkan jumlah hari yang valid.';
  }
}

function hitungTotalTidur() {
  const inputs = document.querySelectorAll('.jamTidur');
  let totalMenit = 0; 
  inputs.forEach(input => {
    const jamTidur = parseFloat(input.value);
    if (!isNaN(jamTidur)) {
      totalMenit += jamTidur * 60;
    }
  });
  const jam = Math.floor(totalMenit / 60);
  const menit = Math.round(totalMenit % 60);
  document.getElementById('hasil').innerText = `Total waktu tidur: ${jam} jam ${menit} menit`;
}