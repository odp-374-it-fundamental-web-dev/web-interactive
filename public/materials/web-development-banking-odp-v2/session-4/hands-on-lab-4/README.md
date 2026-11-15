# Hands-on Lab 4: Portal Profil Responsif Berbasis Bootstrap (`profil-bootstrap`)

## 1. Executive Summary & Business Scenario
Sebagai puncak dari modul fondasi tampilan web (Sesi 1–4) di BNI ODP IT 2026, Anda ditugaskan merekonstruksi portal profil engineer menjadi aplikasi web responsif berstandar enterprise (`profil-bootstrap`) menggunakan Bootstrap 5.3.8 CDN dan custom CSS mobile-first.

Aplikasi harus beradaptasi secara mulus di tiga kategori perangkat:
- **Mobile (375px)**: Tata letak kolom tunggal (100% lebar), tombol berukuran nyaman untuk sentuhan jari (*tap targets* minimal 44px), navbar dapat dilipat/responsif.
- **Tablet (768px)**: Kartu modul berderet 2 kolom (`col-md-6`), hero profile berjejer horizontal.
- **Desktop (1280px)**: Kartu modul berderet 3 kolom (`col-lg-4`), kontainer berpusat dengan margin seimbang.

## 2. Business & Technical Acceptance Criteria

1. **Integrasi Framework & Urutan Impor (20 Poin):**
   - Menggunakan CDN Bootstrap 5.3.8 CSS di `<head>` dan Bootstrap 5.3.8 Bundle JS di akhir `<body>`.
   - Menghubungkan `styles/custom.css` **setelah** link Bootstrap CSS agar override warna korporat bekerja rapi.
   - Menyertakan `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.
2. **Bilah Navigasi & Alert Status (20 Poin):**
   - Komponen Navbar Bootstrap responsif (`.navbar`, `.navbar-expand-lg`, `.navbar-dark`, `.bg-dark` atau palet BNI navy).
   - Alert status perbankan (`.alert .alert-info` atau `.alert-success`) dengan atribut ARIA `role="status"`.
3. **Sistem 12 Kolom Grid Responsif (25 Poin):**
   - Struktur grid yang benar: `.container` -> `.row` -> `.col-*`.
   - Modul minat disusun dalam kartu responsif: `.col-12 .col-md-6 .col-lg-4` dengan gutter `g-3` atau `g-4`.
   - Setiap kartu menggunakan kelas `.card`, `.card-body`, `.card-title`, `.card-text`.
4. **Formulir & Tabel Bootstrap (20 Poin):**
   - Formulir kontak menggunakan kelas `.form-label`, `.form-control`, dan tombol `.btn .btn-primary`.
   - Tabel rencana belajar menggunakan kelas `.table .table-hover .table-striped`.
5. **Mobile-First Media Query Kustom (15 Poin):**
   - Pada `styles/custom.css`, gunakan `@media (min-width: 768px)` untuk mengatur transisi tata letak hero section.
   - Override warna primer Bootstrap dengan palet oranye BNI `#F05A22`.
   - Lulus 100% verifikasi automated test runner.

## 3. Rubrik Penilaian (Total: 100 Poin)

| Kriteria Penilaian | Bobot | Indikator Keberhasilan |
| :--- | :---: | :--- |
| **Framework & CDN Setup** | 20% | Bootstrap 5.3 CSS & JS dimuat dari CDN, custom.css dimuat sesudahnya |
| **Navbar & Alert ARIA** | 20% | Navbar responsif expand-lg, alert ber-role="status" |
| **Grid 12 Kolom Mobile-First**| 25% | .container > .row > .col-12.col-md-6.col-lg-4, gutter g-3/g-4 |
| **Komponen Form & Table** | 20% | .form-label, .form-control, .table.table-hover, .btn |
| **Mobile-First CSS & Palet** | 15% | @media (min-width: 768px), warna korporat BNI, 100% test lulus |

## 4. Cara Menjalankan Automated Test Harness
```bash
cd slides-materials/web-development-banking-odp-v2/session-4/hands-on-lab-4/1-starter
node scripts/test-runner.js
```
