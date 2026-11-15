// loops.js - Solusi Demo 4

// 1. Perulangan for...of dengan continue untuk filter data
const daftarNominal = [100000, -5000, 250000, 0, 50000];
let totalValid = 0;
let jumlahDilewati = 0;

for (const nom of daftarNominal) {
  if (nom <= 0) {
    jumlahDilewati++;
    continue; // Lewati nominal minus atau nol
  }
  totalValid += nom;
}

console.log("[REKAP DENGAN FOR...OF]");
console.log("Total Nominal Valid  : Rp", totalValid.toLocaleString("id-ID"));
console.log("Data Anomali Dilewati:", jumlahDilewati);

// 2. Simulasi Percobaan PIN dengan while loop
const pinTersimpan = "123456";
const riwayatPercobaan = ["111111", "222222", "123456"];
let attemptIndex = 0;
let loginBerhasil = false;

console.log("\n[SIMULASI PERCOBAAN PIN]");
while (attemptIndex < riwayatPercobaan.length && !loginBerhasil) {
  const pinInput = riwayatPercobaan[attemptIndex];
  attemptIndex++;

  if (pinInput === pinTersimpan) {
    loginBerhasil = true;
    console.log(`  Percobaan ke-${attemptIndex}: ${pinInput} -> PIN BENAR ✔`);
    break;
  } else {
    console.log(`  Percobaan ke-${attemptIndex}: ${pinInput} -> PIN SALAH ✖`);
  }
}

if (!loginBerhasil && attemptIndex >= 3) {
  console.warn("PERINGATAN: Akun terblokir sementara setelah 3 kali gagal.");
} else {
  console.log("Hasil Otentikasi: Berhasil masuk ke sesi perbankan.");
}
