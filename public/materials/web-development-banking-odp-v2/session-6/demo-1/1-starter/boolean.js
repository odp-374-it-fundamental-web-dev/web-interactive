// boolean.js - Trainee Starter Demo 1

// 1. Perbandingan Ketat vs Longgar
console.log("0 == ''       :", 0 == "");       // true (akibat coercion)
console.log("0 === ''      :", 0 === "");      // false (tipe berbeda)
console.log("0 == false    :", 0 == false);   // true
console.log("0 === false   :", 0 === false);  // false

// TODO 1: Tuliskan evaluasi transaksi
const nominalTransfer = 500000;
const saldoNasabah = 750000;
const statusAkun = "AKTIF";

// TODO 2: Cek apakah saldo cukup DAN status akun aktif
const bisaTransfer = false; // Ganti ini
console.log("Dapat memproses transfer:", bisaTransfer);

// TODO 3: Evaluasi kebenaran nilai falsy vs truthy
const daftarNilai = [0, "", null, undefined, NaN, [], {}];
daftarNilai.forEach((item) => {
  // Cetak item dan hasil Boolean(item)
  console.log("Item:", item, "-> Boolean:", Boolean(item));
});
