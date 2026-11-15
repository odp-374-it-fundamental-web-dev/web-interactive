# Demo 4: CSS Grid untuk Kartu & Layout 2D

## 1. Overview
Demo ini mengeksplorasi tata letak dua dimensi (2D layout) menggunakan CSS Grid:
- Konsep Grid Container (`display: grid`) dan Grid Items.
- Pendefinisian kolom responsif dengan fungsi `repeat(auto-fit, minmax(260px, 1fr))`:
  - `auto-fit`: Mengisi kolom sebanyak mungkin sesuai lebar viewport.
  - `minmax(260px, 1fr)`: Kartu tidak akan pernah lebih sempit dari 260px, namun dapat membesar secara fleksibel (`1fr`) untuk mengisi ruang kosong.
- Jarak antar baris dan kolom yang konsisten menggunakan `gap: 20px`.
- Kriteria pemilihan: Gunakan **Flexbox** untuk komponen satu arah (seperti navbar atau baris tombol), dan gunakan **CSS Grid** untuk tata letak matriks baris-dan-kolom (seperti galeri kartu modul perbankan).

## 2. Learning Objectives
- Membangun galeri kartu minat atau modul perbankan yang otomatis menyesuaikan jumlah kolom (3 kolom di desktop, 2 di tablet, 1 di mobile) tanpa perlu menulis banyak media query.
- Memahami unit fraksional `fr` dan fungsi `minmax()`.
