function tampilkanTabel() {
  let n = parseInt(document.getElementById("angka").value);
  let result = "<h2>Tabel Perkalian dari " + n + "</h2>";
  for (let i = 1; i <= 10; i++) {
    result += `${n} x ${i} = ${n * i}<br>`;
  }
  
  document.getElementById("hasil").innerHTML = result;
}