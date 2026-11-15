/**
 * Demo 1: Evidence-Based Debugging
 * Starter File (Trainee Exercise)
 * 
 * Skenario Bug:
 * Saat pengguna mencari kota "Cimahi", aplikasi crash dengan TypeError!
 */

// Simulasi respons API Geocoding saat kota ditemukan dengan 1 hasil
const responsSatuHasil = {
  results: [
    { name: "Cimahi", country: "Indonesia", latitude: -6.87, longitude: 107.54 }
  ]
};

// Simulasi respons API Geocoding saat kota TIDAK ditemukan
const responsKotaKosong = {};

// FUNGSI BERMASALAH (BUG)
function ambilKotaBermasalah(data) {
  // BUG 1: Mengakses indeks [1], padahal hasil cuma ada 1 (indeks 0)!
  // BUG 2: Jika data.results undefined, data.results[1] melempar TypeError!
  return data.results[1];
}

// TODO 1: Jalankan dan amati crash
try {
  console.log("Uji 1 (Kota 1 Hasil):", ambilKotaBermasalah(responsSatuHasil));
} catch (e) {
  console.error("Crash Tertangkap:", e.message);
}

// TODO 2: Refactor fungsi menjadi ambilKotaDefensif(data) memakai optional chaining (?.[0] ?? null)
function ambilKotaDefensif(data) {
  // Tulis perbaikan defensif di sini
  return null;
}

console.log("Uji Defensif (Satu Hasil):", ambilKotaDefensif(responsSatuHasil));
console.log("Uji Defensif (Kota Kosong):", ambilKotaDefensif(responsKotaKosong));
