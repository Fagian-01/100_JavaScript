function hitung() {
  let a = parseFloat(document.getElementById("sisia").value);
  let b = parseFloat(document.getElementById("sisib").value);
  let c = parseFloat(document.getElementById("sisic").value);
  let kel = a + b + c;
  document.getElementById("hasil").textContent = "Keliling: " + kel + 'cm';
  console.log(hitung)
}
