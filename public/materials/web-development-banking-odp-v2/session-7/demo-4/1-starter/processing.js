/**
 * Demo 4: Array Methods (forEach, map, filter, reduce)
 * Starter File (Trainee Exercise)
 */

const dataNasabah = [
  { id: "NSB-01", nama: "Budi Santoso", saldo: 15000000, tipe: "PRIORITAS" },
  { id: "NSB-02", nama: "Siti Rahma", saldo: 4500000, tipe: "REGULER" },
  { id: "NSB-03", nama: "Andi Wijaya", saldo: 75000000, tipe: "PRIORITAS" },
  { id: "NSB-04", nama: "Dewi Lestari", saldo: 2000000, tipe: "REGULER" }
];

console.log("=== DATA NASABAH AWAL ===");
console.table(dataNasabah);

// ==========================================
// 1. filter()
// ==========================================
// TODO 1: Saring nasabah yang bertipe "PRIORITAS"
const nasabahPrioritas = []; // Ganti dengan dataNasabah.filter(...)
console.log("Nasabah Prioritas:", nasabahPrioritas);

// ==========================================
// 2. map()
// ==========================================
// TODO 2: Transformasi dataNasabah menjadi array ringkas: { nama, saldoDalamJuta }
// Contoh: { nama: "Budi Santoso", saldoDalamJuta: 15 }
const ringkasanNasabah = []; // Ganti dengan dataNasabah.map(...)
console.log("Ringkasan Nasabah:", ringkasanNasabah);

// ==========================================
// 3. reduce()
// ==========================================
// TODO 3: Hitung total seluruh saldo simpanan nasabah. Wajib sertakan initialValue 0!
const totalSimpanan = 0; // Ganti dengan dataNasabah.reduce(...)
console.log("Total Simpanan:", totalSimpanan);

// ==========================================
// 4. forEach()
// ==========================================
// TODO 4: Cetak pesan notifikasi: "Halo [nama], saldo Anda adalah Rp [saldo]"
// Gunakan dataNasabah.forEach(...)
console.log("Notifikasi Nasabah:");
// Tulis forEach di sini
