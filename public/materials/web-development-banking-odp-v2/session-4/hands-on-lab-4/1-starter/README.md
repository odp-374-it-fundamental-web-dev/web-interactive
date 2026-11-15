# Trainee Guide: Hands-on Lab 4 (`profil-bootstrap`)

## Misi Trainee
Anda ditugaskan membangun portal profil profesional berbasis Bootstrap 5.3 (`profil-bootstrap`) yang sepenuhnya responsif di perangkat mobile (375px), tablet (768px), dan desktop (1280px).

## Checklist Tugas & Target Poin (Total: 100 Poin)
- [ ] **Tugas 1: Integrasi Framework & Urutan Impor (20 Poin)**
  - Pasang Bootstrap 5.3.8 CSS CDN di `<head>`.
  - Pasang `<link rel="stylesheet" href="styles/custom.css">` **setelah** link Bootstrap.
  - Pasang Bootstrap 5.3.8 Bundle JS tepat sebelum tag penutup `</body>`.
  - Pastikan `<meta name="viewport" content="width=device-width, initial-scale=1.0">` aktif.
- [ ] **Tugas 2: Navbar & Alert ARIA (20 Poin)**
  - Bangun bilah navigasi Bootstrap dengan `.navbar`, `.navbar-expand-lg`, `.navbar-dark`, `.bg-dark`, dan `.navbar-brand`.
  - Tambahkan banner notifikasi `.alert .alert-info` dengan atribut `role="status"`.
- [ ] **Tugas 3: Grid 12 Kolom Responsif (25 Poin)**
  - Susun kartu modul dalam hierarki `.container` -> `.row g-3` -> `.col-12 .col-md-6 .col-lg-4`.
  - Gunakan struktur `.card` dan `.card-body` untuk setiap modul.
- [ ] **Tugas 4: Formulir & Tabel Bootstrap (20 Poin)**
  - Beri kelas `.form-label` dan `.form-control` pada form kontak.
  - Beri kelas `.table .table-hover .table-striped` pada tabel rencana studi.
- [ ] **Tugas 5: Mobile-First Custom CSS (15 Poin)**
  - Pada `styles/custom.css`, terapkan `@media (min-width: 768px)` untuk mengatur transisi hero section dari kolom (mobile) ke baris (desktop).
  - Lulus 100% automated test harness.

## Cara Menjalankan Verifikasi Otomatis
```bash
node scripts/test-runner.js
```
