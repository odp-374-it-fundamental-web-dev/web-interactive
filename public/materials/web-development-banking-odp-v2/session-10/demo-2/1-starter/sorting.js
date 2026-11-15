/**
 * Demo 2: Array Sorting & Non-Mutating Immutability
 * Starter File (Trainee Exercise)
 */

const angka = [100, 25, 5, 80, 10];
const kota = [
  { nama: "Surabaya", suhu: 34 },
  { nama: "Bandung", suhu: 24 },
  { nama: "Jakarta", suhu: 32 },
  { nama: "Malang", suhu: 22 }
];

console.log("=== DATA AWAL ===");
console.log("Angka:", angka);

// TODO 1: Amati perilaku sort() default tanpa comparator
const sortBawaan = [...angka].sort();
console.log("Sort default tanpa comparator (Jebakan UTF-16):", sortBawaan);

// TODO 2: Urutkan array angka secara ascending (kecil ke besar) dengan comparator (a, b) => a - b
const angkaAsc = []; // Tulis pengurutan di sini
console.log("Angka Ascending yang Benar:", angkaAsc);

// TODO 3: Urutkan array kota berdasarkan suhu descending (paling panas ke paling dingin)
// PENTING: Jangan mutasi array kota asli! Gunakan [...kota].sort(...)
const kotaSuhuDesc = []; // Tulis pengurutan di sini
console.log("Kota Suhu Descending:", kotaSuhuDesc);

// TODO 4: Urutkan array kota berdasarkan nama alfabetis (A-Z) memakai localeCompare
const kotaNamaAsc = []; // Tulis pengurutan di sini
console.log("Kota Nama A-Z:", kotaNamaAsc);
