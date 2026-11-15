# Session 4: Responsive Website with Bootstrap — Starter Packs & Solutions

## 1. Programme Context
- **Curriculum Reference:** `researches/web-development-banking-odp-v2/curriculum.md` (Session 4: 3.5 Jam / 210 Menit)
- **Slide Deck Reference:** `slides-creation/web-development-banking-odp-v2/session-4.md` (87 Slides)
- **Target Audience:** Peserta BNI Officer Development Program (ODP IT) 2026
- **Sector Governance:** Standar Desain Responsif Perbankan Multi-Perangkat (Mobile 375px, Tablet 768px, Desktop 1280px), Kepatuhan Aksesibilitas Alert ARIA (`role="status"`), dan Pemisahan Bersih Utility Framework vs CSS Korporat.

---

## 2. Directory Index & Syllabus Mapping

| Module / Folder | Segment in Deck | Topic & Focus Area | Starter (`1-starter`) | Solution (`2-solution`) |
| :--- | :--- | :--- | :--- | :--- |
| [`demo-1`](./demo-1/) | Slides 4–13 | **Pemasangan Bootstrap 5.3.8 CDN & Dasar Utility**<br>Konsep CSS framework, cara kerja & keuntungan CDN, import `bootstrap.min.css` dan `bootstrap.bundle.min.js`, utility classes spacing (`p-3`, `m-2`), dan kontainer `.container`. | Halaman unstyled tanpa link CDN dan utility Bootstrap | Halaman terintegrasi CDN Bootstrap 5.3.8 dengan utility |
| [`demo-2`](./demo-2/) | Slides 14–21 | **Komponen Bootstrap (Navbar, Card, Button, Alert)**<br>Perakitan antarmuka siap pakai: `.navbar`, `.card` dengan `.card-body`, alert ber-`role="status"`, button variants, serta form control `.form-label` & `.form-control`. | Tag unstyled tanpa kelas komponen Bootstrap | UI perbankan profesional dengan komponen Bootstrap |
| [`demo-3`](./demo-3/) | Slides 22–38 | **Sistem 12 Kolom Grid Bootstrap**<br>Hierarki grid `.container` -> `.row g-3` -> `.col-*`, breakpoint responsif (`col-12 col-md-6 col-lg-4`), dan matematika 12 kolom mobile-first. | Kartu tersusun tanpa .row dan kolom responsif | Galeri kartu responsif beradaptasi 1 -> 2 -> 3 kolom |
| [`demo-4`](./demo-4/) | Slides 39–74 | **Mobile-First Media Queries & Custom Overrides**<br>Filosofi desain mobile-first `@media (min-width: ...)`, urutan kaset CSS (Bootstrap sebelum Custom CSS), dan penyesuaian palet warna BNI. | Urutan kaset terbalik dan media query desktop-first | Mobile-first clean CSS dengan palet BNI oranye/navy |
| [`hands-on-lab-4`](./hands-on-lab-4/) | Slides 75–84 | **Capstone Lab: Portal Profil Responsif Berbasis Bootstrap (`profil-bootstrap`)**<br>Membangun portal rekayasa perangkat lunak lengkap: Bootstrap 5.3.8 navbar, alert status BI-FAST, 12/6/4 grid kartu modul, formulir kontak berlabel, data table striped, dan custom media query. | Scaffolded starter dengan 0/12 checks passing (12 failing checks) | 100% compliant reference solution (12/12 passing checks) |

---

## 3. Structural Standard per Module
Setiap folder modul menerapkan arsitektur dua subfolder yang ketat:
- **`1-starter/`**: Kode baseline untuk trainee dengan bimbingan pedagogis dan komentar `TODO` bernomor.
- **`2-solution/`**: Solusi referensi instruktur berstandar industri dengan pengujian otomatis 100% lulus.

---

## 4. Cara Menjalankan & Verifikasi
1. **Menguji Tampilan di Browser:**
   Buka `index.html` menggunakan ekstensi VS Code Live Server dan uji responsivitas pada lebar 375px, 768px, dan 1280px via Chrome DevTools Device Mode (Ctrl+Shift+M / Cmd+Shift+M).
2. **Menjalankan Automated Test Harness:**
   ```bash
   cd slides-materials/web-development-banking-odp-v2/session-4/hands-on-lab-4/1-starter
   node scripts/test-runner.js
   ```
3. **Menguji Solusi Referensi Instruktur:**
   ```bash
   cd slides-materials/web-development-banking-odp-v2/session-4/hands-on-lab-4/2-solution
   node scripts/test-runner.js
   ```
