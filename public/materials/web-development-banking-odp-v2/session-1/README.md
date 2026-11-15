# Session 1: Web Fundamentals & Semantic HTML5 — Starter Packs & Solutions

## 1. Programme Context
- **Curriculum Reference:** `researches/web-development-banking-odp-v2/curriculum.md` (Session 1: 3.5 Jam / 210 Menit)
- **Slide Deck Reference:** `slides-creation/web-development-banking-odp-v2/session-1.md` (53 Slides)
- **Target Audience:** Peserta BNI Officer Development Program (ODP IT) 2026
- **Sector Governance:** Standar Web Semantik W3C, Kepatuhan Aksesibilitas WCAG 2.1 Level AA, Disiplin Keamanan Perbankan (Zero Sensitive Data in Code, strictly synthetic training fixtures).

---

## 2. Directory Index & Syllabus Mapping

| Module / Folder | Segment in Deck | Topic & Focus Area | Starter (`1-starter`) | Solution (`2-solution`) |
| :--- | :--- | :--- | :--- | :--- |
| [`demo-1`](./demo-1/) | Slides 6–17 | **Dokumen HTML Pertama & Anatomi Tag**<br>Deklarasi `<!DOCTYPE html>`, root `<html lang="id">`, metadata `<meta charset="UTF-8">` & viewport, judul `<title>`, serta hierarki judul `h1`–`h6`. | Dokumen tidak lengkap dengan tag yang salah bersarang dan TODOs | Dokumen HTML5 valid berstandar W3C |
| [`demo-2`](./demo-2/) | Slides 18–26 | **Tautan (Links) & Media Gambar**<br>Tautan absolut vs relatif, tautan fragment `#id`, atribut keamanan `target="_blank" rel="noopener noreferrer"`, dan gambar `<img>` dengan `alt` deskriptif. | Tautan eksternal tanpa protokol, path rusak, dan gambar tanpa atribut `alt` | Tautan navigasi aman dan gambar avatar relatif |
| [`demo-3`](./demo-3/) | Slides 27–36 | **List & Struktur Semantik HTML5**<br>Refactoring *div-soup* menjadi landmark semantik: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, serta daftar terurut `<ol>` dan tak terurut `<ul>`. | Tata letak generik `<div>` tanpa makna semantik | Struktur dokumen semantik aksesibel |
| [`demo-4`](./demo-4/) | Slides 37–40 | **Tabel Data Terstruktur**<br>Data tabular relasional dengan `<table>`, `<caption>`, `<thead>`, `<tbody>`, `<th scope="col">`, dan `<td>`. Larangan memakai tabel untuk layout halaman. | Tabel tanpa caption, header scope, atau pemisahan thead/tbody | Tabel rencana belajar berstandar aksesibilitas |
| [`hands-on-lab-1`](./hands-on-lab-1/) | Slides 41–50 | **Capstone Lab: Halaman Profil Web Mandiri (`profil-web`)**<br>Membangun dokumen profil trainee lengkap dengan landmark semantik, foto profil `assets/avatar.svg`, tautan fragment, tautan eksternal ber-`noopener`, dan tabel rencana belajar. Termasuk challenge mandiri `jadwal.html`. | Scaffolded starter dengan 11 TODOs dan automated test runner | 100% compliant reference solution (12/12 test lulus) + `jadwal.html` |

---

## 3. Structural Standard per Module
Setiap folder modul menerapkan arsitektur dua subfolder yang ketat:
- **`1-starter/`**: Kode baseline untuk trainee dengan bimbingan pedagogis dan komentar `TODO` bernomor.
- **`2-solution/`**: Solusi referensi instruktur berstandar industri dengan pengujian otomatis 100% lulus.

---

## 4. Cara Menjalankan & Verifikasi
1. **Menggunakan VS Code Live Server:**
   Klik kanan berkas `index.html` dan pilih **"Open with Live Server"**.
2. **Menjalankan Automated Test Harness:**
   ```bash
   cd slides-materials/web-development-banking-odp-v2/session-1/hands-on-lab-1/1-starter
   node scripts/test-runner.js
   ```
3. **Menguji Solusi Referensi Instruktur:**
   ```bash
   cd slides-materials/web-development-banking-odp-v2/session-1/hands-on-lab-1/2-solution
   node scripts/test-runner.js
   ```
