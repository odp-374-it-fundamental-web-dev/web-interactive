/**
 * Demo 3: Synchronous Callbacks & Immutability
 * Reference Solution (Instruktur)
 */

// Callback handlers
const tambahBiayaAdmin = (nominal) => nominal + 6500;
const hitungCashback = (nominal) => nominal * 0.05;
const formatMataUang = (nominal) => `Rp ${nominal.toLocaleString("id-ID")}`;

// Higher-order function (Pure function - tidak merusak array asal)
function transformasiArray(daftarNominal, callback) {
  if (!Array.isArray(daftarNominal)) {
    throw new TypeError("daftarNominal harus bertipe Array");
  }
  if (typeof callback !== "function") {
    throw new TypeError("callback harus berupa function");
  }

  const hasilTransformasi = [];
  for (const item of daftarNominal) {
    hasilTransformasi.push(callback(item));
  }
  return hasilTransformasi;
}

// ==========================================
// PENGUJIAN SOLUSI & VERIFIKASI IMMUTABILITAS
// ==========================================
const transaksiAwal = [50000, 100000, 250000];

console.log("=== DEMO 3: HIGHER-ORDER FUNCTION & CALLBACK ===");
console.log("Array Sumber (Sebelum):", transaksiAwal);

// 1. Mengirim referensi fungsi bernama
const denganAdmin = transformasiArray(transaksiAwal, tambahBiayaAdmin);
console.log("1. Nominal + Admin 6.500:", denganAdmin);

// 2. Mengirim referensi callback kalkulasi cashback
const cashback = transformasiArray(transaksiAwal, hitungCashback);
console.log("2. Cashback 5%:", cashback);

// 3. Mengirim anonymous inline arrow function
const denganDiskon = transformasiArray(transaksiAwal, (nom) => nom * 0.9);
console.log("3. Diskon Promo 10%:", denganDiskon);

// 4. Formatting output via callback
const berformat = transformasiArray(transaksiAwal, formatMataUang);
console.log("4. Teks Rupiah Terformat:", berformat);

// Verifikasi integritas data
console.log("\n--- VERIFIKASI INTEGRITAS DATA ---");
const tidakBerubah =
  transaksiAwal.length === 3 &&
  transaksiAwal[0] === 50000 &&
  transaksiAwal[1] === 100000 &&
  transaksiAwal[2] === 250000;
console.log("Array Sumber Tidak Termutasi:", tidakBerubah ? "✔ LULUS (Pure)" : "✖ GAGAL (Mutated)");
