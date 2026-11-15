# Demo 4: Mobile-First Media Queries & Custom CSS Overrides

## 1. Overview
Demo ini berfokus pada integrasi CSS kustom dengan framework Bootstrap menggunakan filosofi Mobile-First:
- Aturan urutan impor CSS: Selalu muat `bootstrap.min.css` terlebih dahulu, baru kemudian muat berkas CSS kustom proyek (`styles/custom.css`). Jika urutannya terbalik, aturan kustom akan kalah ditimpa oleh aturan bawaan Bootstrap karena urutan penulisan (*order of appearance* dalam CSS Cascade).
- Filosofi **Mobile-First**: Menulis aturan CSS default untuk layar terkecil terlebih dahulu (tanpa media query), lalu menambahkan media query `@media (min-width: 768px)` dan `@media (min-width: 1200px)` untuk memperkaya tata letak saat ruang layar bertambah lebar.
- Mengapa pendekatan `min-width` jauh lebih bersih dan minim bug dibanding pendekatan desktop-first dengan `max-width`.

## 2. Learning Objectives
- Mengatur urutan tautan `<link>` di `<head>` secara tepat agar CSS custom dapat meng-override kelas Bootstrap.
- Menerapkan media query `@media (min-width: 768px)` untuk mengubah arah flex dari kolom ke baris pada tampilan tablet ke atas.
- Menggunakan variabel warna korporat kustom (`--bni-orange`, `--bni-navy`) di atas komponen Bootstrap.
