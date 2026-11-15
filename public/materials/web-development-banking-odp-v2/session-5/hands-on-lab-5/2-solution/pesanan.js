// pesanan.js - Solusi Challenge Mandiri Sesi 5

const hargaSatuan = 350000;
const jumlahPesertaInput = "4";
const diskonPromo = 100000;

// 1. Konversi eksplisit string numerik ke number
const jumlahPeserta = Number(jumlahPesertaInput);

// 2. Kalkulasi biaya
const subtotalPesanan = hargaSatuan * jumlahPeserta;
const totalPesanan = Math.max(0, subtotalPesanan - diskonPromo);

console.log("=== REKAP PESANAN PELATIHAN ODP IT ===");
console.log("Harga Satuan   : Rp", hargaSatuan.toLocaleString("id-ID"));
console.log("Jumlah Peserta :", jumlahPeserta);
console.log("Subtotal Biaya : Rp", subtotalPesanan.toLocaleString("id-ID"));
console.log("Diskon Promo   : Rp", diskonPromo.toLocaleString("id-ID"));
console.log("Total Akhir    : Rp", totalPesanan.toLocaleString("id-ID"));

// 3. Array daftar peserta
const peserta = ["Budi Santoso", "Siti Rahma", "Ahmad Fauzi", "Dewi Lestari"];
console.log("\nDaftar Peserta :");
peserta.forEach((nama, idx) => {
  console.log(`  ${idx + 1}. ${nama}`);
});
console.log("Total Peserta  :", peserta.length);
