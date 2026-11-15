# Hands-on Lab 3: Styling Terpadu Halaman Profil & Kontak (`profil-web`)

## 1. Executive Summary & Business Scenario
Sebagai Software Engineer di BNI ODP IT 2026, Anda ditugaskan membangun sistem desain visual terpadu menggunakan satu berkas stylesheet eksternal (`styles/style.css`) yang diterapkan secara seragam pada `index.html` (halaman profil) dan `kontak.html` (halaman formulir kontak).

Desain harus mematuhi identitas korporat perbankan (palet warna BNI: Navy `#183153`, Oranye `#F05A22`, Latar `#F8FAFC`), menerapkan universal Box Model reset (`border-box`), memanfaatkan **Flexbox** untuk bilah navigasi horizontal satu dimensi, serta menerapkan **CSS Grid** untuk galeri kartu minat dua dimensi.

## 2. Business & Technical Acceptance Criteria

1. **Universal Box Model Reset & Typography (20 Poin):**
   - Mendeklarasikan `*, *::before, *::after { box-sizing: border-box; }` di baris pertama stylesheet.
   - Mengatur tipografi sistem (`font-family`), warna dasar teks `#183153` / `#2D3748`, dan `line-height: 1.5` atau lebih besar.
2. **Bilah Navigasi Flexbox (25 Poin):**
   - Elemen `<nav>` atau `.navbar` menggunakan `display: flex`, `justify-content: space-between` (atau `space-around`), `align-items: center`, `flex-wrap: wrap`, dan `gap`.
   - Tautan menu memiliki efek `:hover` dan indikator `:focus-visible` yang kontras.
3. **Galeri Kartu CSS Grid (25 Poin):**
   - Daftar minat atau kartu materi disusun menggunakan `display: grid`.
   - Menggunakan kolom responsif fluid `grid-template-columns: repeat(auto-fit, minmax(..., 1fr))` dengan properti `gap`.
   - Kartu memiliki padding, border halus, latar belakang putih, dan sedikit bayangan (*box-shadow*).
4. **Styling Formulir Kontak Aksesibel (20 Poin):**
   - Input teks, email, select, dan textarea pada `kontak.html` memiliki lebar penuh (`width: 100%`), padding nyaman (minimal 8px), border ber-radius, dan fokus ring `:focus-visible`.
   - Tombol submit memiliki warna oranye `#F05A22` dengan kursor pointer.
5. **Styling Data Table & Kerapian (10 Poin):**
   - Tabel rencana belajar memiliki `border-collapse: collapse`, padding sel, dan latar belakang header `<thead>` yang kontras.
   - Lulus 100% pengujian automated test runner.

## 3. Rubrik Penilaian (Total: 100 Poin)

| Kriteria Penilaian | Bobot | Indikator Keberhasilan |
| :--- | :---: | :--- |
| **Box Model & Reset** | 20% | `box-sizing: border-box` universal, font-family terbaca, line-height memadai |
| **Flexbox Navigasi** | 25% | `display: flex`, space-between, align-items center, flex-wrap, hover/focus |
| **CSS Grid Kartu** | 25% | `display: grid`, auto-fit minmax(..., 1fr), gap, kartu card-style |
| **Formulir & Aksesibilitas** | 20% | Input 100% lebar, padding nyaman, outline focus-visible jelas |
| **Tabel & Kepatuhan** | 10% | Border-collapse, warna palet korporat, 100% test lulus |

## 4. Cara Menjalankan Automated Test Harness
```bash
cd slides-materials/web-development-banking-odp-v2/session-3/hands-on-lab-3/1-starter
node scripts/test-runner.js
```
