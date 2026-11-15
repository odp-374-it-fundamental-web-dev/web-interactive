/**
 * Demo 2: Array Sorting & Non-Mutating Immutability
 * Reference Solution (Instruktur)
 */

const angka = [100, 25, 5, 80, 10];
const kota = [
  { nama: "Surabaya", suhu: 34 },
  { nama: "Bandung", suhu: 24 },
  { nama: "Jakarta", suhu: 32 },
  { nama: "Malang", suhu: 22 }
];

console.log("=== DEMO 2: PENGURUTAN DATA & IMMUTABILITAS ===");
console.log("Array Angka Sumber:", angka);

// 1. Jebakan sort() bawaan tanpa comparator (konversi string ASCII)
const sortStringJebakan = [...angka].sort();
console.log("\n1. sort() bawaan tanpa comparator:", sortStringJebakan);
// Output: [10, 100, 25, 5, 80] -> "100" sebelum "25"!

// 2. Comparator Numerik Terstandar
const angkaAsc = [...angka].sort((a, b) => a - b);
const angkaDesc = [...angka].sort((a, b) => b - a);
console.log("2. Numerik Ascending (a - b):", angkaAsc);
console.log("   Numerik Descending (b - a):", angkaDesc);

// 3. Pengurutan Objek Berdasarkan Nilai Numerik (Descending)
// Menggunakan spread operator [...kota] agar array asli tidak termutasi
const kotaSuhuDesc = [...kota].sort((a, b) => b.suhu - a.suhu);
console.log("\n3. Objek Kota Diurutkan Berdasarkan Suhu (Terpanas ke Terdingin):");
console.table(kotaSuhuDesc);

// 4. Pengurutan Objek Berdasarkan Nama Alfabetis (A-Z) memakai localeCompare
const kotaNamaAsc = [...kota].sort((a, b) => a.nama.localeCompare(b.nama, "id"));
console.log("\n4. Objek Kota Diurutkan Berdasarkan Nama (A-Z):");
console.table(kotaNamaAsc);

// 5. Verifikasi Immutabilitas: Array asal tidak boleh berubah urutan indeksnya
const tetapUtuh = kota[0].nama === "Surabaya" && kota[1].nama === "Bandung";
console.log("\n5. Integritas Array Asal:", tetapUtuh ? "✔ TERJAGA (Pure / Non-Mutating)" : "✖ RUSAK (Mutated)");
