/**
 * Demo 1: Function Declarations, Expressions, & Arrow Functions
 * Starter File (Trainee Exercise)
 * 
 * Lengkapi TODO di bawah ini untuk memahami perbedaan deklarasi fungsi,
 * ekspresi fungsi, dan arrow function dengan implicit return.
 */

// ==========================================
// 1. Function Declaration (Hoisted)
// ==========================================
// TODO 1: Buat function declaration bernama hitungBunga(pokok, sukuBunga)
// yang mengembalikan (pokok * sukuBunga) / 100.
function hitungBunga(pokok, sukuBunga) {
  // Tulis logika kalkulasi di sini
  return 0; // Ganti dengan return yang benar
}

// ==========================================
// 2. Function Expression (Non-Hoisted)
// ==========================================
// TODO 2: Buat function expression yang disimpan dalam variabel const konversiValas
// yang menerima parameter (nominal, kurs) dan mengembalikan nominal * kurs.
const konversiValas = function (nominal, kurs) {
  // Tulis logika konversi di sini
  return 0; // Ganti dengan return yang benar
};

// ==========================================
// 3. Arrow Function & Implicit Return
// ==========================================
// TODO 3: Buat arrow function formatRekening(cabang, noUrut) dengan 1 baris
// implicit return string dengan format: `${cabang}-${noUrut}`.
const formatRekening = (cabang, noUrut) => ""; // Ganti dengan implicit return

// TODO 4: Buat arrow function buatItemTransaksi(id, nominal) yang mengembalikan
// object literal { id, nominal } secara implicit return.
// Ingat: object literal wajib dibungkus tanda kurung ({ ... })!
const buatItemTransaksi = (id, nominal) => null; // Ganti dengan implicit return object

// ==========================================
// PENGUJIAN MANUAL
// ==========================================
console.log("=== HASIL UJI STARTER ===");
console.log("Bunga:", hitungBunga(10000000, 5));
console.log("Valas (USD ke IDR):", konversiValas(100, 16000));
console.log("Format Rekening:", formatRekening("009", "12345678"));
console.log("Item Transaksi:", buatItemTransaksi("TRX-001", 500000));
