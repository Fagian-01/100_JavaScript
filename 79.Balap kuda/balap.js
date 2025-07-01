let posisi = [0, 0, 0];
let selesai = false;

function cetakGaris(trackId, label, pos) {
  let display = Array(20).fill('-');
  if (pos >= 20) pos = 19;
    display[pos] = '*';
    document.getElementById(trackId).innerText = label + display.join('');
}

function langkah() {
  if (selesai) return;
  posisi[0] += Math.floor(Math.random() * 5) + 1;
  posisi[1] += Math.floor(Math.random() * 5) + 1;
  posisi[2] += Math.floor(Math.random() * 5) + 1;
  
  cetakGaris('track1', 'Kuda 1: ', posisi[0]);
  cetakGaris('track2', 'Kuda 2: ', posisi[1]);
  cetakGaris('track3', 'Kuda 3: ', posisi[2]);

  if (posisi[0] >= 20 || posisi[1] >= 20 || posisi[2] >= 20) {
    selesai = true;
    if (posisi[0] >= 20) {
      document.getElementById('hasil').innerText = 'Kuda 1 menang!';
    }
    else if (posisi[1] >= 20) {
      document.getElementById('hasil').innerText = 'Kuda 2 menang!';
    }
    else if (posisi[2] >= 20) {
      document.getElementById('hasil').innerText = 'Kuda 3 menang!';
    }
  }
}

function resetGame() {
  posisi = [0, 0, 0];
  selesai = false;
  document.getElementById('hasil').innerText = '';
  document.getElementById('track1').innerText = 'Kuda 1: ' + '-'.repeat(20);
  document.getElementById('track2').innerText = 'Kuda 2: ' + '-'.repeat(20);
  document.getElementById('track3').innerText = 'Kuda 3: ' + '-'.repeat(20);
}

resetGame();