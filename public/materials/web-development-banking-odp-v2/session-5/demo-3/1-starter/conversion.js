// conversion.js - Trainee Starter Demo 3

const nominalInput = "50000"; // Input pengguna dari form selalu bertipe string
const biayaAdmin = 2500;

// BUG COERCION: Operator + menggabungkan string alih-alih menjumlahkan!
const totalSalah = nominalInput + biayaAdmin;
console.log("Hasil Salah (Coercion):", totalSalah); // Output: "500002500"

// TODO 1: Konversi nominalInput menjadi tipe number menggunakan Number(nominalInput)
const nominalBenar = 0; // Ganti ini

// TODO 2: Hitung total yang benar: nominalBenar + biayaAdmin
const totalBenar = 0; // Ganti ini

console.log("Hasil Benar:", totalBenar);

// TODO 3: Demonstrasikan Number.isNaN() jika input tidak valid, misal: "50rb"
const inputRusak = "50rb";
const hasilKonversiRusak = Number(inputRusak);
console.log("Konversi input rusak:", hasilKonversiRusak);
console.log("Apakah NaN?:", Number.isNaN(hasilKonversiRusak));
