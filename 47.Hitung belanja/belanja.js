let total = 0;
let daftarBelanja = [];

function tambahBarang() {
  const barang = document.getElementById('barang').value;
  const harga = parseFloat(document.getElementById('harga').value);
  const jumlah = parseInt(document.getElementById('jumlah').value);

  if (!barang || isNaN(harga) || isNaN(jumlah)) {
    alert('Harap masukkan nama barang, harga, dan jumlah yang valid.');
    return;
  }

  const subtotal = harga * jumlah;
  total += subtotal;
  daftarBelanja.push(`${barang} - ${jumlah} x ${harga} = ${subtotal}`);
    
  updateDaftarBelanja();
  document.getElementById('barang').value = '';
  document.getElementById('harga').value = '';
  document.getElementById('jumlah').value = '';
}

function updateDaftarBelanja() {
  const ul = document.getElementById('daftarBelanja');
  ul.innerHTML = '';
  daftarBelanja.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  });
}

function hitungTotal() {
  const diskon = parseFloat(document.getElementById('diskon').value);
  if (isNaN(diskon) || diskon < 0 || diskon > 100) {
    alert('Masukkan diskon antara 0 - 100.');
    return;
  }

  const totalSetelahDiskon = total * (1 - diskon / 100);
  document.getElementById('hasil').innerText = `Total belanja setelah diskon: Rp ${totalSetelahDiskon.toFixed(2)}`;
}
