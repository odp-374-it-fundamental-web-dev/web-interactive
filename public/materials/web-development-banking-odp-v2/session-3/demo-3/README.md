# Demo 3: Flexbox untuk Navigasi & Komponen 1D

## 1. Overview
Demo ini berfokus pada teknik tata letak satu dimensi (1D layout) menggunakan CSS Flexbox:
- Konsep Flex Container (`display: flex`) dan Flex Items.
- Sumbu Utama (*Main Axis*) yang diatur oleh `flex-direction: row` atau `column`, dan Sumbu Silang (*Cross Axis*).
- Penjajaran sepanjang Main Axis dengan `justify-content` (`flex-start`, `center`, `space-between`, `space-around`).
- Penjajaran sepanjang Cross Axis dengan `align-items` (`stretch`, `center`, `baseline`).
- Pengelolaan ruang antar item secara modern dengan properti `gap` (menggantikan margin hack).
- Pemecahan baris otomatis dengan `flex-wrap: wrap` untuk navigasi yang responsif pada layar sempit.

## 2. Learning Objectives
- Membangun bilah navigasi (*navbar*) perbankan yang responsif dengan logo di kiri dan tautan menu di kanan (`justify-content: space-between`).
- Menyelaraskan teks dan tombol secara vertikal menggunakan `align-items: center`.
- Menggunakan `flex-wrap: wrap` dan `gap: 12px` agar menu tidak bertabrakan saat lebar layar mengecil.
