document.addEventListener("DOMContentLoaded", function () {
  // Ambil jumlah dari localStorage, kalau belum ada set ke 0
  let jumlah = parseInt(localStorage.getItem("keranjangJumlah")) || 0;

  // Update tampilan <span id="cart-count">
  const spanCount = document.getElementById("cart-count");
  if (spanCount) {
    spanCount.textContent = jumlah;
  }
});

function tambahKeKeranjang() {
  // Ambil nilai dari input jumlah
  const inputJumlah = document.getElementById("jumlah");
  const tambahan = parseInt(inputJumlah.value) || 1;

  // Ambil jumlah lama dari localStorage
  let jumlah = parseInt(localStorage.getItem("keranjangJumlah")) || 0;

  // Tambahkan & simpan kembali
  jumlah += tambahan;
  localStorage.setItem("keranjangJumlah", jumlah);

  // Update tampilan
  const spanCount = document.getElementById("cart-count");
  if (spanCount) {
    spanCount.textContent = jumlah;
  }
}
