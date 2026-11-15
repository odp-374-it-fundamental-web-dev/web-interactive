/**
 * Demo 3: JSON Serialization & Defensive Local Storage
 * Starter File (Trainee Exercise)
 */

// Simulasi penyimpanan lokal jika dijalankan di Node.js
const memoryStorage = new Map();
const storage = typeof localStorage !== "undefined" ? localStorage : {
  getItem: (key) => memoryStorage.get(key) ?? null,
  setItem: (key, val) => memoryStorage.set(key, String(val)),
  removeItem: (key) => memoryStorage.delete(key)
};

const STORAGE_KEY = "bni-odp-weather-history-v1";

// TODO 1: Buat fungsi readHistory()
// - Ambil string raw dari storage.getItem(STORAGE_KEY)
// - Jika null/falsy, kembalikan array kosong []
// - Bungkus JSON.parse(raw) di dalam blok try / catch
// - Periksa apakah hasilnya Array.isArray(). Jika bukan, kembalikan []
// - Jika error tertangkap di catch, kembalikan []
function readHistory() {
  return [];
}

// TODO 2: Buat fungsi saveHistory(cities)
// - Bungkus penyimpanan di blok try / catch
// - Validasi Array.isArray(cities)
// - Simpan ke storage.setItem(STORAGE_KEY, JSON.stringify(cities))
// - Tangkap quota exceeded / access error di blok catch
function saveHistory(cities) {
  // Tulis logika simpan di sini
}

// =================================================================
// PENGUJIAN STARTER
// =================================================================
console.log("=== PENGUJIAN STORAGE HELPER ===");
saveHistory(["Jakarta", "Surabaya", "Bandung"]);
console.log("Hasil Baca Riwayat:", readHistory());
