const kalimat = "Hai! My Name Muhammad Fagian Darmawan";
let i = 0;
const teksEl = document.getElementById("teks");

function ketik() {
  if (i < kalimat.length) {
    teksEl.textContent += kalimat.charAt(i);
    i++;
    setTimeout(ketik, 100);
  }
}
ketik();