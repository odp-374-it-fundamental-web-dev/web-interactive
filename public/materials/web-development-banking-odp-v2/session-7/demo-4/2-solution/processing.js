/**
 * Demo 4: Array Methods (forEach, map, filter, reduce)
 * Reference Solution (Instruktur)
 */

const dataNasabah = [
  { id: "NSB-01", nama: "Budi Santoso", saldo: 15000000, tipe: "PRIORITAS" },
  { id: "NSB-02", nama: "Siti Rahma", saldo: 4500000, tipe: "REGULER" },
  { id: "NSB-03", nama: "Andi Wijaya", saldo: 75000000, tipe: "PRIORITAS" },
  { id: "NSB-04", nama: "Dewi Lestari", saldo: 2000000, tipe: "REGULER" }
];

console.log("=== DEMO 4: PEMROSESAN DATA PERBANKAN DENGAN ARRAY METHODS ===");
console.table(dataNasabah);

// 1. filter(): Menyaring nasabah prioritas
const nasabahPrioritas = dataNasabah.filter((item) => item.tipe === "PRIORITAS");
console.log("\n1. filter() -> Nasabah Prioritas (Jumlah:", nasabahPrioritas.length, "):");
console.table(nasabahPrioritas);

// 2. map(): Transformasi ke bentuk ringkasan (nama & saldo dalam juta)
// Perhatikan penggunaan ({ ... }) untuk implicit return object literal
const ringkasanNasabah = dataNasabah.map((item) => ({
  nama: item.nama,
  saldoDalamJuta: item.saldo / 1000000
}));
console.log("\n2. map() -> Ringkasan Format Baru:");
console.table(ringkasanNasabah);

// 3. reduce(): Menghitung total saldo seluruh nasabah dengan initialValue 0
const totalSimpanan = dataNasabah.reduce((total, item) => total + item.saldo, 0);
console.log("\n3. reduce() -> Total Seluruh Simpanan:", totalSimpanan.toLocaleString("id-ID"), "IDR");

// 4. forEach(): Melakukan side effect (logging/notifikasi)
console.log("\n4. forEach() -> Broadcast Notifikasi:");
dataNasabah.forEach((item, index) => {
  console.log(`   [Notif #${index + 1}] Yth. ${item.nama}, saldo aktif: Rp ${item.saldo.toLocaleString("id-ID")}`);
});

// 5. Method Chaining: filter -> map -> reduce
const totalSaldoPrioritas = dataNasabah
  .filter((item) => item.tipe === "PRIORITAS")
  .map((item) => item.saldo)
  .reduce((acc, curr) => acc + curr, 0);

console.log("\n5. Chaining Method -> Total Saldo Khusus Nasabah Prioritas:", totalSaldoPrioritas.toLocaleString("id-ID"), "IDR");
