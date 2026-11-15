/**
 * Demo 1: Synchronous Blocking vs Asynchronous Non-blocking
 * Reference Solution (Instruktur)
 * 
 * Pembuktian Arsitektur Single-Threaded JavaScript & Event Loop:
 * Call Stack -> Web API / C++ background -> Task Queue -> Event Loop -> Call Stack.
 */

console.log("=== DEMO 1: EKSEKUSI SINKRON VS ASINKRON (SOLUSI) ===");

// 1. Eksekusi Sinkron (Call Stack langsung)
console.log("[1] A: Request HTTP dikirim ke Payment Gateway BNI...");

// 2. Registrasi Asinkron (Didelegasikan ke Host Environment timer)
// Meskipun delay 0 ms, callback dimasukkan ke Task Queue (Macrotask)
setTimeout(() => {
  console.log("[3] B: Callback setTimeout selesai diproses di Event Loop! (Hasil data diterima)");
}, 0);

// 3. Eksekusi Sinkron Berikutnya (Call Stack langsung)
console.log("[2] C: UI tetap responsif, progress bar / skeleton loader dapat dirender...");

// Demonstrasi blocking jika kalkulasi dijalankan secara sinkron tanpa Web Worker / Async
function simulasiBebanSinkron() {
  const mulai = Date.now();
  let total = 0;
  for (let i = 0; i < 5000000; i++) {
    total += (i % 7);
  }
  const selesai = Date.now();
  console.log(`[*] Selesai beban CPU sinkron dalam ${selesai - mulai} ms (total kalkulasi: ${total})`);
}

simulasiBebanSinkron();

console.log("[*] Call Stack sekarang KOSONG. Event Loop mulai mengambil callback dari Task Queue:");
