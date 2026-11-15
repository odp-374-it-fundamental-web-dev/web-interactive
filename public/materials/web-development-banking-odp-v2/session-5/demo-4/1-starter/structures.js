// structures.js - Trainee Starter Demo 4

// 1. Array Nominal Transaksi
const nominal = [25000, 50000, 75000];

console.log("Array awal:", nominal);
console.log("Panjang array awal:", nominal.length);

// TODO 1: Ubah item kedua (indeks 1) menjadi 60000

// TODO 2: Tambahkan 10000 ke akhir array menggunakan push()

console.log("Array setelah mutasi:", nominal);

// 2. Objek Transaksi Finansial
// TODO 3: Lengkapi properti objek transaksi
const transaksi = {
  id: "T01",
  deskripsi: "Pembelian Modul Web Dev",
  nominal: 70000,
  status: "BERHASIL"
};

// TODO 4: Tambahkan properti waktu (misal "2026-11-14 10:00:00") menggunakan dot notation
// transaksi.waktu = ...

console.log("Objek transaksi:", transaksi);
console.log("Akses nominal via dot notation    :", transaksi.nominal);
console.log("Akses status via bracket notation :", transaksi["status"]);
