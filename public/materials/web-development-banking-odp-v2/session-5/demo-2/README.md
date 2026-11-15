# Demo 2: Variables & Data Types

## 1. Overview
Demo ini membahas deklarasi variabel dan tipe data dasar dalam JavaScript:
- Kata kunci deklarasi: `const` (standar utama untuk binding nilai tetap) vs `let` (variabel yang nilainya akan berubah/reassign) vs `var` (legacy, function-scoped, rentan bug hoisting).
- Larangan redeklarasi variabel dengan nama yang sama dalam scope yang sama saat menggunakan `let` atau `const`.
- Tujuh tipe data primitif: `number`, `string`, `boolean`, `null`, `undefined`, `bigint`, `symbol`.
- Memeriksa tipe data dengan operator `typeof`.

## 2. Learning Objectives
- Menerapkan prinsip *prefer const over let*: Selalu gunakan `const`, kecuali jika variabel memang membutuhkan penetapan ulang nilai.
- Membedakan antara `undefined` (variabel telah dideklarasikan namun belum diberi nilai) dan `null` (representasi eksplisit ketiadaan nilai/kosong).
- Menghindari penggunaan `var` dalam seluruh basis kode modern perbankan.
