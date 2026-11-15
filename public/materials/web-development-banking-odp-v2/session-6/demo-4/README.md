# Demo 4: Perulangan (Loops) & Pencegahan Infinite Loop

## 1. Overview
Demo ini membahas ragam perulangan di JavaScript dan teknik navigasi elemen data:
- `for (let i = 0; i < arr.length; i++)`: Loop indeks klasik, rentan *off-by-one error* jika kondisi batas keliru (`<= arr.length`).
- `for...of`: Cara paling modern dan bersih untuk mengiterasi nilai elemen array tanpa repot mengelola indeks.
- `while (kondisi)` dan `do...while`: Digunakan saat jumlah perulangan tidak diketahui sejak awal (mis. menunggu respons polling atau percobaan input PIN hingga 3 kali).
- Perintah pengontrol alur: `break` (menghentikan paksa loop seketika) dan `continue` (melewati sisa iterasi saat ini dan langsung maju ke iterasi berikutnya).
- Mencegah bahaya *infinite loop* yang dapat membekukan browser atau proses server Node.js.

## 2. Learning Objectives
- Memilih antara loop `for...of` vs loop berindeks.
- Menggunakan `continue` untuk melewati transaksi yang dibatalkan/dilewati.
- Menggunakan `break` untuk menghentikan loop saat target pencarian transaksi ditemukan.
