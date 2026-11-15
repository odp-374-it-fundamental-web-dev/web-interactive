# Trainee Guide: Hands-on Lab 3 (`profil-web` Styling Terpadu)

## Misi Trainee
Anda ditugaskan merancang satu berkas stylesheet terpadu (`styles/style.css`) yang memperindah dan menata `index.html` dan `kontak.html` sesuai standar korporat BNI:
1. Universal Box Model reset `border-box`.
2. Bilah navigasi horizontal responsif berbasis **Flexbox**.
3. Galeri kartu minat rekayasa perangkat lunak berbasis **CSS Grid** (`repeat(auto-fit, minmax(250px, 1fr))`).
4. Styling formulir kontak yang aksesibel dengan indikator `:focus-visible`.
5. Tabel data rencana belajar dengan `border-collapse: collapse`.

## Checklist Tugas & Target Poin (Total: 100 Poin)
- [ ] **Tugas 1: Box Model Reset & Tipografi (20 Poin)**
  - Pasang `*, *::before, *::after { box-sizing: border-box; }`.
  - Atur `font-family` sistem dan `line-height: 1.6` pada `body`.
- [ ] **Tugas 2: Navigasi Flexbox (25 Poin)**
  - Atur `.navbar` dengan `display: flex`, `justify-content: space-between`, `align-items: center`, `flex-wrap: wrap`, dan `gap: 12px`.
  - Berikan efek `a:hover` dan `a:focus-visible` (ring 2px solid oranye).
- [ ] **Tugas 3: Kartu CSS Grid (25 Poin)**
  - Atur `.grid-container` dengan `display: grid`, `grid-template-columns: repeat(auto-fit, minmax(260px, 1fr))`, dan `gap: 20px`.
  - Beri gaya pada `.card` dengan padding, border-radius, dan bayangan lembut.
- [ ] **Tugas 4: Formulir Kontak Aksesibel (20 Poin)**
  - Atur input teks, email, select, dan textarea agar memiliki `width: 100%`, padding nyaman, dan border bersih.
  - Beri warna oranye `#F05A22` pada tombol submit.
- [ ] **Tugas 5: Tabel & Uji Responsif (10 Poin)**
  - Atur tabel rencana belajar dengan `border-collapse: collapse` dan padding sel.
  - Periksa tampilan pada lebar layar 375px dan 1280px menggunakan DevTools Device Toolbar.

## Cara Menjalankan Verifikasi Otomatis
```bash
node scripts/test-runner.js
```
