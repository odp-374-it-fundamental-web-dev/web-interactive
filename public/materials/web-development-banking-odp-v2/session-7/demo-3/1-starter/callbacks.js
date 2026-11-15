/**
 * Demo 3: Synchronous Callbacks & Immutability
 * Starter File (Trainee Exercise)
 */

// ==========================================
// 1. Fungsi Callback Mandiri
// ==========================================
const tambahBiayaAdmin = (nominal) => nominal + 6500;
const hitungCashback = (nominal) => nominal * 0.05;

// ==========================================
// 2. High-Order Function Penerima Callback
// ==========================================
// TODO 1: Buat fungsi transformasiArray(daftarNominal, callback)
// yang mengembalikan array BARU tanpa mengubah isi daftarNominal asli.
function transformasiArray(daftarNominal, callback) {
  // Buat array penampung baru
  // Iterasi elemen daftarNominal dan jalankan callback(item)
  // Kembalikan array baru
  return [];
}

// ==========================================
// PENGUJIAN STARTER
// ==========================================
const transaksiAwal = [50000, 100000, 250000];

console.log("=== PENGUJIAN CALLBACK & IMMUTABILITAS ===");
console.log("Array Sumber Sebelum:", transaksiAwal);

// TODO 2: Panggil transformasiArray dengan callback tambahBiayaAdmin
const hasilAdmin = transformasiArray(transaksiAwal, tambahBiayaAdmin);
console.log("Hasil Admin:", hasilAdmin);

// TODO 3: Panggil transformasiArray dengan inline arrow function (diskon 10%)
const hasilDiskon = transformasiArray(transaksiAwal, (x) => x * 0.9);
console.log("Hasil Diskon 10%:", hasilDiskon);

console.log("Array Sumber Sesudah (Wajib Tidak Berubah):", transaksiAwal);
