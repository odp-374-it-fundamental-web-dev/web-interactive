/**
 * Demo 1: Array Searching (find vs filter vs Linear Search)
 * Starter File (Trainee Exercise)
 */

const daftarKota = [
  { nama: "Jakarta", suhu: 32, status: "Cerah" },
  { nama: "Bandung", suhu: 24, status: "Hujan Ringan" },
  { nama: "Surabaya", suhu: 34, status: "Cerah" },
  { nama: "Malang", suhu: 22, status: "Berawan" },
  { nama: "Medan", suhu: 31, status: "Hujan Petir" }
];

console.log("=== DATA KOTA AWAL ===");
console.table(daftarKota);

// TODO 1: Implementasikan linearSearch manual dengan loop for
// Temukan kota dengan nama === "Surabaya"
let hasilLinear = null;
// Tulis loop di sini

console.log("Hasil Linear Search:", hasilLinear);

// TODO 2: Gunakan find() untuk mencari satu kota yang bersuhu di bawah 25°C
const kotaSejuk = null; // Ganti dengan daftarKota.find(...)
console.log("Hasil find() Kota Sejuk:", kotaSejuk);

// TODO 3: Gunakan filter() untuk mencari SEMUA kota yang berstatus "Cerah"
const semuaKotaCerah = null; // Ganti dengan daftarKota.filter(...)
console.log("Hasil filter() Kota Cerah:", semuaKotaCerah);
