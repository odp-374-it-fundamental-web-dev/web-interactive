/**
 * Milestone 5: Pure Function nextHistory
 * Starter Script (Trainee)
 */

/**
 * Menghitung state riwayat baru secara murni dan tanpa mutasi.
 * @param {string[]} prev - Riwayat kota sebelumnya
 * @param {string} newCity - Nama kota yang baru dicari
 * @param {number} [max=5] - Batas maksimal item riwayat
 * @returns {string[]}
 */
function nextHistory(prev, newCity, max = 5) {
  // TODO 1: Implementasikan fungsi murni:
  // 1. Validasi: jika !newCity atau bukan string, kembalikan prev
  // 2. Filter prev secara case-insensitive agar newCity tidak terduplikasi
  // 3. Sisipkan newCity.trim() di posisi index 0
  // 4. Potong panjangnya dengan .slice(0, max)
  // 5. Kembalikan array baru (JANGAN mutasi array prev!)
  return [];
}

// Dukungan environment Node.js & browser
if (typeof module !== "undefined" && module.exports) {
  module.exports = { nextHistory };
}
