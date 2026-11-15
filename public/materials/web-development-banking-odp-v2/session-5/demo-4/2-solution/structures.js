// structures.js - Solusi Demo 4

// 1. Array Nominal Transaksi
const nominal = [25000, 50000, 75000];

console.log("[ARRAY AWAL]");
console.log("Isi    :", nominal);
console.log("Length :", nominal.length);

// Mengubah elemen kedua (indeks 1)
nominal[1] = 60000;

// Menambahkan nominal baru ke akhir
nominal.push(10000);

console.log("\n[ARRAY SETELAH MUTASI]");
console.log("Isi    :", nominal);
console.log("Length :", nominal.length);

// 2. Objek Transaksi Finansial
const transaksi = {
  id: "T01",
  deskripsi: "Pembelian Modul Web Dev",
  nominal: 70000,
  status: "BERHASIL"
};

// Menambahkan properti baru secara dinamis
transaksi.waktu = "2026-11-14 10:00:00 WIB";
transaksi.kanal = "BI_FAST";

console.log("\n[OBJEK TRANSAKSI]");
console.log("Objek Lengkap :", transaksi);
console.log("ID Transaksi  :", transaksi.id);
console.log("Nominal (Dot) : Rp", transaksi.nominal.toLocaleString("id-ID"));
console.log("Status (Brkt) :", transaksi["status"]);
console.log("Kanal Kliring :", transaksi["kanal"]);
