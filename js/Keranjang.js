// Ambil elemen jumlah keranjang dari navbar
let jumlahKeranjang = 0;

function tambahKeKeranjang() {
  // Ambil jumlah dari input
  const jumlahInput = document.getElementById('jumlah');
  const jumlah = parseInt(jumlahInput.value);

  // Tambahkan ke total
  jumlahKeranjang += jumlah;

  // Update tampilan teks keranjang di header
  const keranjangTeks = document.querySelector('.user-links a[href="Keranjang.html"]');
  keranjangTeks.innerHTML = `🛒 Keranjang (${jumlahKeranjang})`;

  localStorage.setItem('jumlahKeranjang', jumlahKeranjang);
}
