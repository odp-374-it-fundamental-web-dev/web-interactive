/**
 * Milestone 5: Pure Function nextHistory
 * Reference Solution (Instruktur)
 * 
 * Standar Fungsi Murni (Pure Function):
 * - Deterministik & bebas efek samping (tanpa akses DOM/Storage)
 * - Mencegah mutasi array input 'prev' (Immutabilitas)
 * - Deduplikasi case-insensitive
 * - Pemotongan batas maksimal item
 */

/**
 * Menghitung state riwayat baru secara murni dan tanpa mutasi.
 * @param {string[]} prev - Riwayat kota sebelumnya
 * @param {string} newCity - Nama kota yang baru dicari
 * @param {number} [max=5] - Batas maksimal item riwayat
 * @returns {string[]} Array riwayat baru
 */
function nextHistory(prev, newCity, max = 5) {
  if (!Array.isArray(prev) || typeof newCity !== "string" || !newCity.trim()) {
    return Array.isArray(prev) ? prev : [];
  }

  const cleanCity = newCity.trim();

  // Filter case-insensitive untuk membuang duplikasi
  const filtered = prev.filter(
    (c) => typeof c === "string" && c.toLowerCase() !== cleanCity.toLowerCase()
  );

  // Sisipkan di posisi depan (index 0) dan potong hingga batas max
  return [cleanCity, ...filtered].slice(0, max);
}

// Dukungan environment Node.js & browser
if (typeof module !== "undefined" && module.exports) {
  module.exports = { nextHistory };
}
