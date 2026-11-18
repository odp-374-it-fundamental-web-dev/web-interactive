/**
 * Mini Capstone: Rate Helper Module
 * Starter Script (Trainee)
 */

/**
 * Membangun URL Frankfurter Latest Rates untuk satu pasangan mata uang.
 * @param {string} base - Kode mata uang dasar (contoh: "USD")
 * @param {string[]} symbols - Array kode mata uang tujuan (contoh: ["IDR"])
 * @returns {URL} Objek URL Frankfurter latest
 */
function makeLatestURL(base, symbols) {
  // TODO 1: Validasi parameter:
  // - base harus string dengan tepat 3 huruf alfabet (regex /^[A-Za-z]{3}$/)
  // - symbols harus array berisi minimal 1 string 3 huruf alfabet
  // Jika tidak valid, lempar TypeError("Parameter base/symbols tidak valid")

  // TODO 2: Bangun URL query string dengan parameter:
  // - base: base yang sudah di-UPPERCASE
  // - symbols: daftar kode yang sudah di-UPPERCASE, digabung dengan koma
  //   (contoh: symbols ["idr"] → "IDR")
  // Endpoint: https://api.frankfurter.dev/v1/latest
  const url = new URL("https://api.frankfurter.dev/v1/latest");
  // Implementasikan URLSearchParams sesuai spesifikasi di atas
  return url;
}

/**
 * Memetakan kode mata uang ISO 4217 menjadi nama dalam Bahasa Indonesia.
 * @param {string} code - Kode mata uang (contoh: "USD", "IDR")
 * @returns {string} Nama mata uang dalam Bahasa Indonesia
 */
function describeCurrencyCode(code) {
  // TODO 3: Petakan kode mata uang ke nama Indonesia, minimal:
  // - "USD" → "Dolar AS",  "IDR" → "Rupiah",        "SGD" → "Dolar Singapura"
  // - "JPY" → "Yen Jepang","EUR" → "Euro",          "GBP" → "Poundsterling"
  // - "MYR" → "Ringgit Malaysia", "AUD" → "Dolar Australia",
  // - "CNY" → "Yuan Tiongkok",    "CHF" → "Franc Swiss",
  // - "CAD" → "Dolar Kanada",     "HKD" → "Dolar Hong Kong",
  // - "KRW" → "Won Korea Selatan","INR" → "Rupee India"
  // - selain itu → "Mata uang tidak dikenal"
  return "Mata uang tidak dikenal";
}

// Kompatibilitas Node.js (Unit Test) dan Browser
if (typeof module !== "undefined" && module.exports) {
  module.exports = { makeLatestURL, describeCurrencyCode };
}
