/**
 * Hands-on Lab 7: Financial Data Processing Engine
 * Reference Solution (Instruktur)
 * 
 * Standar industri perbankan: Pure Functions, Immutability, dan Defensive Guards.
 */

// =================================================================
// 1. SIMULASI AUTENTIKASI: checkLogin
// =================================================================
/**
 * Memvalidasi tipe input dan kredensial pengguna.
 * @param {any} username 
 * @param {any} password 
 * @returns {string} "input salah" | "login berhasil" | "coba lagi"
 */
export function checkLogin(username, password) {
  // Guard 1: Validasi tipe data input
  if (typeof username !== "string" || typeof password !== "string") {
    return "input salah";
  }

  // Guard 2: Validasi kredensial (simulasi data fiktif)
  if (username === "Kosasih" && password === "k0s4s1h") {
    return "login berhasil";
  }

  // Fallback: Kredensial tidak cocok
  return "coba lagi";
}

// =================================================================
// 2. DATA TRANSAKSI FINANSIAL (Sesi 6 & 7)
// =================================================================
export const transaksi = [
  { id: "T01", nominal: 50000, status: "berhasil" },
  { id: "T02", nominal: 25000, status: "gagal" },
  { id: "T03", nominal: 75000, status: "berhasil" },
  { id: "T04", nominal: -10000, status: "berhasil" }
];

// =================================================================
// 3. PIPELINE PEMROSESAN DATA REUSABLE & IMMUTABLE
// =================================================================
/**
 * Menyaring transaksi berstatus "berhasil" dan nominal > 0.
 * @param {Array<object>} data 
 * @returns {Array<object>} Array baru hasil filter
 */
export const ambilValid = (data) => {
  if (!Array.isArray(data)) return [];
  return data.filter((item) => item.status === "berhasil" && item.nominal > 0);
};

/**
 * Mentransformasi array transaksi menjadi ringkasan { id, nominal }.
 * @param {Array<object>} data 
 * @returns {Array<{id: string, nominal: number}>} Array baru hasil map
 */
export const ambilRingkasan = (data) => {
  if (!Array.isArray(data)) return [];
  return data.map((item) => ({ id: item.id, nominal: item.nominal }));
};

/**
 * Menghitung akumulasi total nominal transaksi dengan initialValue 0.
 * @param {Array<object>} data 
 * @returns {number} Akumulasi nominal
 */
export const hitungTotal = (data) => {
  if (!Array.isArray(data)) return 0;
  return data.reduce((total, item) => total + (item.nominal || 0), 0);
};

// =================================================================
// 4. EKSEKUSI PIPELINE & LOGGING
// =================================================================
console.log("=== EKSEKUSI PIPELINE TRANSAKSI (SOLUSI) ===");
const valid = ambilValid(transaksi);
console.log("1. Transaksi Valid:");
valid.forEach((item) => {
  console.log(`   - ID: ${item.id} | Nominal: Rp ${item.nominal.toLocaleString("id-ID")}`);
});

console.log("\n2. Ringkasan Objek (map):", ambilRingkasan(valid));
console.log("\n3. Total Akumulasi (reduce): Rp", hitungTotal(valid).toLocaleString("id-ID"));
