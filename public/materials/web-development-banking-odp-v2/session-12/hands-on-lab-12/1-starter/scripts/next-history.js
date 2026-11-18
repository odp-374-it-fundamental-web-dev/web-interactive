/**
 * Mini Capstone: Pure Function nextHistory
 * Starter Script (Trainee)
 */

/**
 * Menghitung state riwayat baru secara murni dan tanpa mutasi.
 * Versi ini menyimpan riwayat sebagai STRING pasangan kurs (mis. "USD/IDR").
 * @param {string[]} prev - Riwayat pasangan kurs sebelumnya
 * @param {string} newPair - Pasangan kurs baru (contoh: "USD/IDR")
 * @param {number} [max=5] - Batas maksimal item riwayat
 * @returns {string[]} Array riwayat baru tanpa mutasi array prev
 */
function nextHistory(prev, newPair, max = 5) {
  // TODO 4: Implementasikan fungsi murni:
  // 1. Validasi: prev harus array; newPair harus string dengan pola
  //    "XXX/XXX" (keduanya 3 huruf alfabet, dipisah "/")
  //    Jika tidak valid, kembalikan prev apa adanya (atau [] jika prev bukan array)
  // 2. Bersihkan spasi di sekitar string dan simpan dalam format UPPERCASE
  // 3. Filter prev secara case-insensitive agar pasangan yang sama tidak terduplikasi
  // 4. Sisipkan newPair di posisi paling depan (index 0)
  // 5. Batasi panjang maksimal dengan .slice(0, max)
  // 6. Pastikan array prev TIDAK dimutasi
  return [];
}

// Kompatibilitas Node.js (Unit Test) dan Browser
if (typeof module !== "undefined" && module.exports) {
  module.exports = { nextHistory };
}
