/**
 * Mini Capstone: Pure Function nextHistory
 * Reference Solution (Instruktur)
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
  if (!Array.isArray(prev)) {
    return [];
  }

  const isValidPair =
    typeof newPair === "string" &&
    /^[A-Za-z]{3}\/[A-Za-z]{3}$/.test(newPair.trim());

  if (!isValidPair) {
    return prev;
  }

  const cleanPair = newPair.trim().toUpperCase();

  // Filter case-insensitive untuk membuang duplikasi
  const filtered = prev.filter(
    (p) => typeof p !== "string" || p.toUpperCase() !== cleanPair
  );

  // Sisipkan di posisi depan (index 0) dan potong hingga batas max
  return [cleanPair, ...filtered].slice(0, max);
}

// Kompatibilitas Node.js (Unit Test) dan Browser
if (typeof module !== "undefined" && module.exports) {
  module.exports = { nextHistory };
}
