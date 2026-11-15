/**
 * Demo 1: Function Declarations, Expressions, & Arrow Functions
 * Reference Solution (Instruktur)
 * 
 * Demonstrasi enterprise standard penulisan fungsi di JavaScript.
 */

// ==========================================
// 1. Function Declaration (Hoisted)
// ==========================================
function hitungBunga(pokok, sukuBunga) {
  if (typeof pokok !== "number" || typeof sukuBunga !== "number") {
    throw new TypeError("Parameter pokok dan sukuBunga harus berupa number");
  }
  return (pokok * sukuBunga) / 100;
}

// ==========================================
// 2. Function Expression (Non-Hoisted)
// ==========================================
const konversiValas = function (nominal, kurs) {
  if (typeof nominal !== "number" || typeof kurs !== "number") {
    throw new TypeError("Parameter nominal dan kurs harus berupa number");
  }
  return nominal * kurs;
};

// ==========================================
// 3. Arrow Function & Implicit Return
// ==========================================
// Implicit return string
const formatRekening = (cabang, noUrut) => `${cabang}-${noUrut}`;

// Implicit return Object Literal: wajib dibungkus kurung ({ ... })
const buatItemTransaksi = (id, nominal) => ({ id, nominal });

// Arrow function block body untuk kalkulasi multi-tahap
const hitungBiayaAdmin = (nominal, jenisTabungan) => {
  const TARIF_DEFAULT = 6500;
  const TARIF_PREMIUM = 0;
  return jenisTabungan === "PRIORITAS" ? TARIF_PREMIUM : TARIF_DEFAULT;
};

// ==========================================
// PENGUJIAN & INSPEKSI HASIL
// ==========================================
console.log("=== DEMO 1: FUNGSI JAVASCRIPT LENGKAP ===");
console.log("1. Bunga Pokok 10jt @ 5%:", hitungBunga(10000000, 5), "IDR");
console.log("2. Konversi 100 USD @ 16.000:", konversiValas(100, 16000), "IDR");
console.log("3. Format Rekening BNI:", formatRekening("009", "12345678"));
console.log("4. Object Transaksi Implisit:", buatItemTransaksi("TRX-001", 500000));
console.log("5. Biaya Admin Reguler:", hitungBiayaAdmin(500000, "REGULER"), "IDR");
console.log("6. Biaya Admin Prioritas:", hitungBiayaAdmin(500000, "PRIORITAS"), "IDR");
