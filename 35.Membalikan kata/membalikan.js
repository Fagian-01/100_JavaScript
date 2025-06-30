function balikString() {
  let teks = document.getElementById("teks").value;
  let dibalik = teks.split("").reverse().join(""); 
  document.getElementById("hasil").innerHTML = `<strong>Hasil:</strong> ${dibalik}`;
        }