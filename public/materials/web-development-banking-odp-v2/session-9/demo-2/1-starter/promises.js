/**
 * Demo 2: Promise Lifecycle & Modern async/await
 * Starter File (Trainee Exercise)
 */

// =================================================================
// 1. MEMBUAT PROMISE MANUAL
// =================================================================
// TODO 1: Buat fungsi cekLimitKredit(nominal) yang mengembalikan Promise:
// - Jika nominal <= 50000000 (50 Juta), panggil resolve("Limit kredit disetujui")
// - Jika nominal > 50000000, panggil reject(new Error("Nominal melampaui limit kredit nasabah"))
function cekLimitKredit(nominal) {
  return new Promise((resolve, reject) => {
    // Tulis executor Promise di sini
  });
}

// =================================================================
// 2. KONSUMSI PROMISE DENGAN .then() & .catch()
// =================================================================
console.log("=== UJI PROMISE .THEN() ===");
cekLimitKredit(25000000)
  .then((hasil) => {
    console.log("Hasil 1:", hasil);
  })
  .catch((err) => {
    console.error("Error 1:", err.message);
  });

// =================================================================
// 3. KONSUMSI DENGAN ASYNC / AWAIT (TRY/CATCH/FINALLY)
// =================================================================
// TODO 2: Tulis fungsi async prosesPengajuan(nominal) yang memanggil
// await cekLimitKredit(nominal) di dalam blok try / catch / finally.
async function prosesPengajuan(nominal) {
  console.log(`\nMemulai proses pengajuan kredit Rp ${nominal}...`);
  // Tulis blok try / catch / finally di sini
}

prosesPengajuan(75000000);
