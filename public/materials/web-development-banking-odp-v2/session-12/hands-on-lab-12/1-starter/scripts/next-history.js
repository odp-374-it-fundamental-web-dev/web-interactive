/**
 * Capstone Mini Project: Pure Function nextHistory
 * Starter Script (Trainee)
 */

/**
 * Menghitung state riwayat baru secara murni dan tanpa mutasi.
 * @param {string[]} prev - Riwayat kota sebelumnya
 * @param {string} newCity - Nama kota yang baru dicari
 * @param {number} [max=5] - Batas maksimal item riwayat
 * @returns {string[]} Array riwayat baru tanpa mutasi array prev
 */
function nextHistory(prev, newCity, max = 5) {
  // TODO 3: Implementasikan fungsi murni:
  // 1. Validasi: jika newCity bukan string atau kosong, kembalikan prev
  // 2. Filter prev secara case-insensitive agar newCity tidak terduplikasi
  // 3. Sisipkan newCity.trim() di posisi paling depan (index 0)
  // 4. Batasi panjang maksimal dengan .slice(0, max)
  // 5. Pastikan array prev TIDAK dimutasi
  return [];
}

// Kompatibilitas Node.js (Unit Test) dan Browser
if (typeof module !== "undefined" && module.exports) {
  module.exports = { nextHistory };
}
