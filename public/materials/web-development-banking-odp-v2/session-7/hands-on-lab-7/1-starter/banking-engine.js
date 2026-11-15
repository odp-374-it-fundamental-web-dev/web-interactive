/**
 * Hands-on Lab 7: Financial Data Processing Engine
 * Starter Code (Trainee)
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
  // TODO 1.1: Guard clause tipe data. Jika username atau password bukan string,
  // kembalikan "input salah".

  // TODO 1.2: Cek kredensial: username === "Kosasih" && password === "k0s4s1h".
  // Jika cocok, kembalikan "login berhasil".

  // TODO 1.3: Jika kredensial salah, kembalikan "coba lagi".
  return "";
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
  // TODO 2: Gunakan data.filter(...) untuk mengembalikan transaksi
  // dengan status === "berhasil" dan nominal > 0
  return [];
};

/**
 * Mentransformasi array transaksi menjadi ringkasan { id, nominal }.
 * @param {Array<object>} data 
 * @returns {Array<{id: string, nominal: number}>} Array baru hasil map
 */
export const ambilRingkasan = (data) => {
  // TODO 3: Gunakan data.map(...) untuk mengembalikan object { id, nominal }
  // Petunjuk: Bungkus object literal dengan tanda kurung: ({ id: ..., nominal: ... })
  return [];
};

/**
 * Menghitung akumulasi total nominal transaksi dengan initialValue 0.
 * @param {Array<object>} data 
 * @returns {number} Akumulasi nominal
 */
export const hitungTotal = (data) => {
  // TODO 4: Gunakan data.reduce(...) dengan initialValue 0
  return 0;
};

// =================================================================
// 4. EKSEKUSI PIPELINE & LOGGING
// =================================================================
console.log("=== EKSEKUSI PIPELINE STARTER ===");
const valid = ambilValid(transaksi);
console.log("Transaksi Valid:", valid);
console.log("Ringkasan:", ambilRingkasan(valid));
console.log("Total Nominal:", hitungTotal(valid));
