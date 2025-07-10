<script>
  function tambahKeKeranjang() {
    const namaProduk = "Wardah Perfect Bright Tone Up Micellar Water";
    const harga = 25800;
    const jumlah = parseInt(document.getElementById("jumlah").value);

    let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];

    const index = keranjang.findIndex(item => item.nama === namaProduk);

    if (index !== -1) {
      keranjang[index].jumlah += jumlah;
    } else {
      keranjang.push({
        nama: namaProduk,
        harga: harga,
        jumlah: jumlah
      });
    }
    
    localStorage.setItem("keranjang", JSON.stringify(keranjang));

    // Notifikasi
    alert("✅ Produk berhasil ditambahkan ke keranjang!");
  }
</script>
