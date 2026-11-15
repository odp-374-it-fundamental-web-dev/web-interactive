# Session 3: CSS Fundamentals & Layout — Starter Packs & Solutions

## 1. Programme Context
- **Curriculum Reference:** `researches/web-development-banking-odp-v2/curriculum.md` (Session 3: 3.5 Jam / 210 Menit)
- **Slide Deck Reference:** `slides-creation/web-development-banking-odp-v2/session-3.md` (89 Slides)
- **Target Audience:** Peserta BNI Officer Development Program (ODP IT) 2026
- **Sector Governance:** Standar Aksesibilitas Visual WCAG 2.1 Level AA (Kontras Warna, Focus Visible 2.4.7), Universal Box Model Standard (`border-box`), dan Desain Responsif Perbankan.

---

## 2. Directory Index & Syllabus Mapping

| Module / Folder | Segment in Deck | Topic & Focus Area | Starter (`1-starter`) | Solution (`2-solution`) |
| :--- | :--- | :--- | :--- | :--- |
| [`demo-1`](./demo-1/) | Slides 4–17 | **CSS Syntax, Pemasangan & Specificity**<br>Metode pemasangan stylesheet external, deklarasi aturan CSS, kalkulasi hierarki Specificity (Elemen vs Class vs ID), combinator `nav a`, dan pseudo-class `:hover` & `:focus-visible`. | Inline/internal style campur aduk dan benturan warna | External stylesheet terpadu dengan Specificity bersih |
| [`demo-2`](./demo-2/) | Slides 18–34 | **Box Model & Universal Reset**<br>Empat lapisan Box Model (Content, Padding, Border, Margin), simulasi bug layout pada default `content-box`, dan solusinya menggunakan universal reset `box-sizing: border-box`. | Bug layout kartu 50% pecah ke baris baru akibat padding/border | Universal border-box reset dengan kartu berdampingan rapi |
| [`demo-3`](./demo-3/) | Slides 35–64 | **Flexbox Navigasi 1D**<br>Tata letak satu dimensi dengan `display: flex`, sumbu utama/silang, `justify-content: space-between`, `align-items: center`, `flex-wrap: wrap`, dan `gap` tanpa margin hack. | Navigasi vertikal bertumpuk tanpa Flexbox | Bilah navigasi modern adaptif dengan brand dan menu |
| [`demo-4`](./demo-4/) | Slides 65–76 | **CSS Grid untuk Kartu 2D**<br>Tata letak dua dimensi dengan `display: grid`, pola responsif fluid `repeat(auto-fit, minmax(260px, 1fr))`, dan `gap` 20px yang beradaptasi tanpa media query berlebih. | Galeri kartu bertumpuk manual dengan lebar tetap | Matriks kartu auto-fit responsif (3-2-1 kolom otomatis) |
| [`hands-on-lab-3`](./hands-on-lab-3/) | Slides 77–86 | **Capstone Lab: Styling Terpadu Halaman Profil & Kontak (`profil-web`)**<br>Membangun satu berkas `styles/style.css` untuk `index.html` dan `kontak.html`: Box model reset, Flexbox navbar, CSS Grid kartu minat, form kontak aksesibel, tabel rencana belajar, dan palet warna korporat BNI. | Scaffolded starter dengan 10 failing tests | 100% compliant reference solution (12/12 passing tests) |

---

## 3. Structural Standard per Module
Setiap folder modul menerapkan arsitektur dua subfolder yang ketat:
- **`1-starter/`**: Kode baseline untuk trainee dengan bimbingan pedagogis dan komentar `TODO` bernomor.
- **`2-solution/`**: Solusi referensi instruktur berstandar industri dengan pengujian otomatis 100% lulus.

---

## 4. Cara Menjalankan & Verifikasi
1. **Menguji Tampilan di Browser:**
   Buka `index.html` atau `kontak.html` menggunakan ekstensi VS Code Live Server.
2. **Menjalankan Automated Test Harness:**
   ```bash
   cd slides-materials/web-development-banking-odp-v2/session-3/hands-on-lab-3/1-starter
   node scripts/test-runner.js
   ```
3. **Menguji Solusi Referensi Instruktur:**
   ```bash
   cd slides-materials/web-development-banking-odp-v2/session-3/hands-on-lab-3/2-solution
   node scripts/test-runner.js
   ```
