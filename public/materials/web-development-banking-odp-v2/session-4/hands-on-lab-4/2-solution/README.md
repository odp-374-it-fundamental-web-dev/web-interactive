# Instructor Guide: Hands-on Lab 4 (`profil-bootstrap`)

## 1. Solution Architecture & Code Structure
Solusi ini menyajikan portal profil rekayasa perangkat lunak perbankan terintegrasi (`profil-bootstrap`) yang dibangun dengan Bootstrap 5.3.8 CDN dan custom mobile-first CSS:
- **Framework CDN & Cascade**: Mengimpor Bootstrap 5.3.8 CSS CDN, diikuti berkas kustom `styles/custom.css`, dan menutup dokumen dengan `bootstrap.bundle.min.js`.
- **Komponen Reusable**:
  - Navbar responsif (`.navbar .navbar-expand-lg .navbar-dark`) dengan brand BNI ODP IT dan menu interaktif.
  - Alert banner status perbankan dengan atribut ARIA `role="status"` yang aksesibel.
  - Kartu modul `.card` dengan border atas tebal warna navy dan bayangan halus (`.shadow-sm`).
- **Grid Responsif 12 Kolom**: Menggunakan hierarki valid `.container` -> `.row g-3` -> `.col-12 .col-md-6 .col-lg-4`, otomatis menyusun kartu 1 kolom pada ponsel, 2 kolom pada tablet, dan 3 kolom pada desktop.
- **Formulir & Tabel Enterprise**: Formulir berlabel dengan `.form-label` dan `.form-control`. Tabel ber-hover dengan `.table .table-hover .table-striped`.
- **Custom Mobile-First CSS**: Menggunakan `@media (min-width: 768px)` untuk mengubah tata letak avatar dan bio dari posisi vertikal bertumpuk di ponsel menjadi horizontal sejajar di tablet dan desktop.

## 2. Rubrik Evaluasi & Pembobotan Nilai

| Komponen | Bobot | Kriteria Penerimaan |
| :--- | :---: | :--- |
| **Framework & CDN Setup** | 20 Poin | Bootstrap 5.3 CSS/JS aktif, custom.css dimuat sesudahnya, viewport meta aktif |
| **Navbar & Alert ARIA** | 20 Poin | Komponen navbar expand-lg, alert ber-role="status" |
| **Grid 12 Kolom Mobile-First**| 25 Poin | Hierarki container > row > col-12 col-md-6 col-lg-4 dengan gutter g-3/g-4 |
| **Formulir & Data Table** | 20 Poin | Menggunakan form-label, form-control, table hover striped |
| **Mobile-First CSS & Palet** | 15 Poin | @media (min-width: 768px), override palet BNI oranye, 100% test lulus |

## 3. Hasil Pengujian Otomatis
```bash
node scripts/test-runner.js
```
Hasil: **12/12 Passed (100%)**.
