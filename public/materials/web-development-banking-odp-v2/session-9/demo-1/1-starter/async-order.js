/**
 * Demo 1: Synchronous Blocking vs Asynchronous Non-blocking
 * Starter File (Trainee Exercise)
 * 
 * Latihan: Prediksi urutan log di konsol sebelum menjalankan skrip!
 */

console.log("=== LATIHAN PREDIKSI URUTAN EKSEKUSI ===");

// 1. Log pertama (Sinkron)
console.log("A: Permintaan data nasabah dikirim...");

// TODO 1: Pasang setTimeout dengan callback yang mencetak "B: Data nasabah diterima!"
// Atur durasi penundaan ke 0 ms.
// Apakah "B" akan dicetak sebelum atau sesudah "C"?
setTimeout(() => {
  // Isi callback di sini
}, 0);

// 2. Log berikutnya (Sinkron)
console.log("C: Thread utama lanjut memproses rendering antarmuka...");

// TODO 2: Tambahkan simulasi pembuktian Event Loop
// Buat loop kalkulasi ringan untuk membuktikan bahwa thread utama menyelesaikan
// semua kode sinkron sebelum callback setTimeout dieksekusi.
