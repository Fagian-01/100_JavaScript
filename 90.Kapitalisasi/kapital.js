 function kapitalisasiKalimat() {
   const kalimat = document.getElementById('inputKalimat').value;
   const kapital = kalimat.toUpperCase();

   if (kalimat.trim() === '') {
     document.getElementById('hasil').innerText = "Mohon masukkan kalimat terlebih dahulu.";
  } 
  else {
    document.getElementById('hasil').innerText = kapital;
  }
}