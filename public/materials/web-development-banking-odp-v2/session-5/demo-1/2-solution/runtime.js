// runtime.js - Solusi Demo 1

console.log("Selamat datang di Modul JavaScript - BNI ODP IT 2026");

if (typeof process !== "undefined" && process.versions && process.versions.node) {
  console.info(`[RUNTIME] Berjalan di Node.js ${process.version} (Platform: ${process.platform})`);
} else if (typeof window !== "undefined") {
  console.info("[RUNTIME] Berjalan di Browser Environment");
} else {
  console.info("[RUNTIME] Lingkungan eksekusi tidak dikenal");
}

console.log("Status: Kesiapan runtime terverifikasi 100%.");
