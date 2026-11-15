/**
 * Demo 3: JSON Serialization & Defensive Local Storage
 * Reference Solution (Instruktur)
 * 
 * Standar penyimpanan client-side perbankan:
 * - Namespace key terisolasi
 * - Validasi skema pasca-parse (Array.isArray)
 * - Safe fallback pada JSON korup
 * - Penggunaan removeItem() alih-alih clear()
 */

// Universal Storage Adapter (Browser localStorage vs Node.js memory fallback)
const memoryStorage = new Map();
const storage = typeof localStorage !== "undefined" ? localStorage : {
  getItem: (key) => memoryStorage.get(key) ?? null,
  setItem: (key, val) => memoryStorage.set(key, String(val)),
  removeItem: (key) => memoryStorage.delete(key)
};

export const STORAGE_KEY = "bni-odp-weather-history-v1";

/**
 * Membaca riwayat kota dari storage secara defensif.
 * @returns {string[]} Array nama kota, atau [] jika kosong/korup
 */
export function readHistory() {
  try {
    const raw = storage.getItem(STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    // Validasi skema data: wajib bertipe Array
    if (!Array.isArray(parsed)) {
      console.warn("Skema data storage tidak sesuai (bukan array). Mengembalikan fallback [].");
      return [];
    }

    return parsed.filter((item) => typeof item === "string");
  } catch (error) {
    console.error("Gagal membaca atau mem-parse JSON storage:", error.message);
    return [];
  }
}

/**
 * Menyimpan riwayat kota ke storage dengan proteksi error.
 * @param {string[]} cities 
 * @returns {boolean} Status keberhasilan simpan
 */
export function saveHistory(cities) {
  if (!Array.isArray(cities)) {
    console.error("saveHistory: parameter harus berupa Array");
    return false;
  }

  try {
    const jsonString = JSON.stringify(cities);
    storage.setItem(STORAGE_KEY, jsonString);
    return true;
  } catch (error) {
    // Tangani kemungkinan QuotaExceededError atau batasan privasi browser
    console.error("Gagal menulis ke local storage:", error.message);
    return false;
  }
}

/**
 * Menghapus hanya key riwayat aplikasi tanpa merusak key aplikasi lain.
 */
export function clearHistory() {
  storage.removeItem(STORAGE_KEY);
}

// =================================================================
// PENGUJIAN DEFENSIVE PROGRAMMING
// =================================================================
console.log("=== DEMO 3: DEFENSIVE STORAGE HELPER (SOLUSI) ===");

// 1. Simpan riwayat normal
saveHistory(["Jakarta", "Bandung", "Surabaya"]);
console.log("1. Riwayat Normal Disimpan:", readHistory());

// 2. Simulasi Data Korup di Storage
storage.setItem(STORAGE_KEY, "{ json-rusak-tanpa-kurung: true ");
console.log("2. Baca Data Korup (Otomatis Tangani SyntaxError):", readHistory()); // Output: []

// 3. Simulasi Tipe Data Bukan Array
storage.setItem(STORAGE_KEY, JSON.stringify({ kota: "Jakarta", suhu: 32 }));
console.log("3. Baca Data Bukan Array (Validasi Skema):", readHistory()); // Output: []

// 4. Reset & Hapus
clearHistory();
console.log("4. Riwayat Pasca-Hapus Key:", readHistory()); // Output: []
