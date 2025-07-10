let totalKeranjang = 0;

function tambahKeKeranjang() {
  const jumlah = parseInt(document.getElementById('jumlah').value);
  totalKeranjang += jumlah;
  document.getElementById('jumlah-keranjang').textContent = totalKeranjang;
}
