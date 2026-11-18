/**
 * Mini Capstone: Rate Helper Module
 * Reference Solution (Instruktur)
 */

/**
 * Membangun URL Frankfurter Latest Rates untuk satu pasangan mata uang.
 * @param {string} base - Kode mata uang dasar (contoh: "USD")
 * @param {string[]} symbols - Array kode mata uang tujuan (contoh: ["IDR"])
 * @returns {URL} Objek URL Frankfurter latest
 */
function makeLatestURL(base, symbols) {
  if (
    typeof base !== "string" ||
    !/^[A-Za-z]{3}$/.test(base) ||
    !Array.isArray(symbols) ||
    symbols.length < 1 ||
    !symbols.every((s) => typeof s === "string" && /^[A-Za-z]{3}$/.test(s))
  ) {
    throw new TypeError("Parameter base/symbols tidak valid");
  }

  const url = new URL("https://api.frankfurter.dev/v1/latest");
  url.search = new URLSearchParams({
    base: base.toUpperCase(),
    symbols: symbols.map((s) => s.toUpperCase()).join(",")
  }).toString();

  return url;
}

/**
 * Memetakan kode mata uang ISO 4217 menjadi nama dalam Bahasa Indonesia.
 * @param {string} code - Kode mata uang (contoh: "USD", "IDR")
 * @returns {string} Nama mata uang dalam Bahasa Indonesia
 */
function describeCurrencyCode(code) {
  if (typeof code !== "string") {
    return "Mata uang tidak dikenal";
  }

  const names = {
    USD: "Dolar AS",
    IDR: "Rupiah",
    SGD: "Dolar Singapura",
    JPY: "Yen Jepang",
    EUR: "Euro",
    GBP: "Poundsterling",
    MYR: "Ringgit Malaysia",
    AUD: "Dolar Australia",
    CNY: "Yuan Tiongkok",
    CHF: "Franc Swiss",
    CAD: "Dolar Kanada",
    HKD: "Dolar Hong Kong",
    KRW: "Won Korea Selatan",
    INR: "Rupee India"
  };

  return names[code.toUpperCase()] ?? "Mata uang tidak dikenal";
}

// Kompatibilitas Node.js (Unit Test) dan Browser
if (typeof module !== "undefined" && module.exports) {
  module.exports = { makeLatestURL, describeCurrencyCode };
}
