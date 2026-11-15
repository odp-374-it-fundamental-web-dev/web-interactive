/**
 * Demo 1: Evidence-Based Debugging
 * Reference Solution (Instruktur)
 */

// Simulasi dataset
const responsSatuHasil = {
  results: [
    { name: "Cimahi", country: "Indonesia", latitude: -6.87, longitude: 107.54 }
  ]
};

const responsKotaKosong = {}; // Tidak ada properti 'results'

console.log("=== DEMO 1: EVIDENCE-BASED DEBUGGING (SOLUSI) ===");

// 1. Catatan Bug Berdasarkan Bukti
console.log(`
Laporan Investigasi Bug:
- Gejala: Pencarian kota dengan 1 hasil mengembalikan 'undefined', dan kota tidak ada memicu TypeError.
- Expected: Objek kota pertama { name: 'Cimahi', ... } atau null jika tidak ditemukan.
- Actual: data.results[1] -> undefined; data.results[1] pada {} -> TypeError: Cannot read properties of undefined.
- Akar Penyebab (RCA): Akses hardcoded index 1 alih-alih index 0, dan tidak adanya pengecekan nullish/optional chaining.
`);

// 2. Solusi Bersih & Defensif
function ambilKotaDefensif(data) {
  // Optional chaining (?.) melindungi dari TypeError saat results undefined
  // Nullish coalescing (??) memberikan nilai default null yang terprediksi
  return data.results?.[0] ?? null;
}

// 3. Verifikasi Uji Regresi
const uji1 = ambilKotaDefensif(responsSatuHasil);
const uji2 = ambilKotaDefensif(responsKotaKosong);

console.log("Hasil Uji 1 (Kota dengan 1 hasil):", uji1);
console.log("Hasil Uji 2 (Kota tidak ditemukan):", uji2);

const lolosRegresi =
  uji1 !== null && uji1.name === "Cimahi" &&
  uji2 === null;

console.log("\nStatus Verifikasi Regresi:", lolosRegresi ? "✔ 100% LULUS" : "✖ MASIH GAGAL");
