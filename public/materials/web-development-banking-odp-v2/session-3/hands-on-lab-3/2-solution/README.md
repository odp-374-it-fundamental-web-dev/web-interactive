# Instructor Guide: Hands-on Lab 3 (`profil-web` Styling Terpadu)

## 1. Solution Architecture & Code Structure
Solusi ini menyediakan sistem desain visual terpadu berstandar industri perbankan menggunakan satu berkas stylesheet `styles/style.css` yang dipakai bersama oleh `index.html` dan `kontak.html`:
- **Universal Box Model Reset**: Menerapkan `*, *::before, *::after { box-sizing: border-box; }` sehingga padding dan border dihitung ke dalam dimensi elemen.
- **Identitas Visual BNI**: Menggunakan palet korporat resmi (Navy `#183153`, Oranye `#F05A22`, Latar `#F8FAFC`, Border `#E2E8F0`).
- **Navigasi 1D Flexbox**: Menggunakan `display: flex`, `justify-content: space-between`, `align-items: center`, `flex-wrap: wrap`, dan `gap: 12px`.
- **Aksesibilitas Fokus Keyboard**: Indikator fokus `:focus-visible` kontras tinggi (2px solid #F05A22 dengan offset 2px) pada tautan, tombol, dan seluruh input formulir (memenuhi WCAG 2.1 AA).
- **Galeri Kartu 2D CSS Grid**: Menggunakan `display: grid` dengan `grid-template-columns: repeat(auto-fit, minmax(260px, 1fr))` dan `gap: 20px`, otomatis beradaptasi dari 3 kolom desktop ke 2 kolom tablet dan 1 kolom mobile tanpa bug horizontal scrollbar.
- **Formulir & Data Table**: Input memiliki tinggi dan padding nyaman (`padding: 10px 14px`), border-radius halus, dan tombol call-to-action oranye. Tabel data memiliki `border-collapse: collapse` dengan baris zebra dan hover state.

## 2. Rubrik Evaluasi & Pembobotan Nilai

| Komponen | Bobot | Kriteria Penerimaan |
| :--- | :---: | :--- |
| **Box Model & Reset** | 20 Poin | Menggunakan universal border-box reset, font-family terbaca, line-height 1.6 |
| **Navigasi Flexbox** | 25 Poin | Flexbox container, space-between, align-items center, flex-wrap, hover/focus |
| **CSS Grid Kartu** | 25 Poin | Grid repeat(auto-fit, minmax(260px, 1fr)), gap 20px, card styling |
| **Formulir Aksesibel** | 20 Poin | Input padding nyaman, border halus, focus-visible ring 2px oranye |
| **Tabel & Kepatuhan** | 10 Poin | Border-collapse collapse, warna palet korporat, 100% test lulus |

## 3. Hasil Pengujian Otomatis
```bash
node scripts/test-runner.js
```
Hasil: **12/12 Passed (100%)**.
