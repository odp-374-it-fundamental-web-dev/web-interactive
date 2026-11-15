// loops.js - Trainee Starter Demo 4

const daftarNominal = [100000, -5000, 250000, 0, 50000];

// TODO 1: Hitung total transaksi valid (> 0) menggunakan for...of dan continue
let totalValid = 0;
// for (const nom of daftarNominal) { ... }

console.log("Total Nominal Valid:", totalValid);

// TODO 2: Simulasi percobaan PIN menggunakan while
// Target: PIN yang benar adalah "123456"
const pinTersimpan = "123456";
const riwayatPercobaan = ["111111", "222222", "123456"];
let attemptIndex = 0;
let loginBerhasil = false;

// while (attemptIndex < riwayatPercobaan.length && !loginBerhasil) { ... }

console.log("Status Akhir Login:", loginBerhasil);
