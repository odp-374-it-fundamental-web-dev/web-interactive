# Session 2: HTML Forms, Git & GitHub — Starter Packs & Solutions

## 1. Programme Context
- **Curriculum Reference:** `researches/web-development-banking-odp-v2/curriculum.md` (Session 2: 3.5 Jam / 210 Menit)
- **Slide Deck Reference:** `slides-creation/web-development-banking-odp-v2/session-2.md` (67 Slides)
- **Target Audience:** Peserta BNI Officer Development Program (ODP IT) 2026
- **Sector Governance:** Standar Aksesibilitas WCAG 2.1 (Form Label Associations), Regulasi Kerahasiaan Data Nasabah (Larangan transmisi kredensial via HTTP GET), dan Disiplin Git Audit Trail (Conventional Commits & .gitignore Secret Protection).

---

## 2. Directory Index & Syllabus Mapping

| Module / Folder | Segment in Deck | Topic & Focus Area | Starter (`1-starter`) | Solution (`2-solution`) |
| :--- | :--- | :--- | :--- | :--- |
| [`demo-1`](./demo-1/) | Slides 5–10 | **Anatomi Form & Hubungan Label-Input**<br>Elemen `<form>`, pasangan `<label for="...">` dan `id`, atribut `name` untuk penyusunan data payload, dan `<button type="submit">`. | Form tanpa label (hanya placeholder) dan input tanpa atribut name | Form aksesibel dengan pasangan label-input eksplisit |
| [`demo-2`](./demo-2/) | Slides 11–18 | **Jenis Input & Validasi HTML5**<br>Tipe input `text`, `email`, dropdown `<select>`, radio button berkelompok via `name`, dan `textarea`. Atribut deklaratif `required` dan `minlength`. | Form tanpa tipe validasi dan opsi dropdown yang belum lengkap | Form lengkap dengan pesan validasi native browser |
| [`demo-3`](./demo-3/) | Slides 19–26 | **Metode Pengiriman GET vs POST & Keamanan**<br>Perbedaan transmisi URL query string (`GET`) vs HTTP request body (`POST`). Larangan pengiriman kata sandi/data pribadi via `GET`. | Simulasi form login dengan metode GET yang membocorkan data ke URL | Form secure POST dengan proteksi autocomplete |
| [`demo-4`](./demo-4/) | Slides 27–54 | **Navigasi Terminal & Git Workflow CLI**<br>Perintah `pwd`, `ls`, `cd`, `mkdir`, `git init`, `git config`, `git status`, `git add`, `git commit -m`, dan `.gitignore` untuk melindungi `.env`. | Folder uninitialized dengan berkas rahasia `.env` yang belum dilindungi | Repositori bersih dengan `.gitignore`, commit log, dan script verifikasi |
| [`hands-on-lab-2`](./hands-on-lab-2/) | Slides 55–64 | **Capstone Lab: Halaman Kontak (`kontak.html`) & Manajemen Git**<br>Membangun form kontak interaktif ber-`POST`, terhubung dua arah dengan `index.html`, validasi HTML5 ketat, dan `.gitignore` enterprise. Termasuk challenge `pendaftaran.html`. | Scaffolded starter dengan TODOs dan test runner (12 failing checks) | 100% compliant reference solution (13/13 passing checks) + `pendaftaran.html` |

---

## 3. Structural Standard per Module
Setiap folder modul menerapkan arsitektur dua subfolder yang ketat:
- **`1-starter/`**: Kode baseline untuk trainee dengan bimbingan pedagogis dan komentar `TODO` bernomor.
- **`2-solution/`**: Solusi referensi instruktur berstandar industri dengan pengujian otomatis 100% lulus.

---

## 4. Cara Menjalankan & Verifikasi
1. **Menguji Halaman Form di Browser:**
   Buka `kontak.html` menggunakan ekstensi VS Code Live Server.
2. **Menjalankan Automated Test Harness:**
   ```bash
   cd slides-materials/web-development-banking-odp-v2/session-2/hands-on-lab-2/1-starter
   node scripts/test-runner.js
   ```
3. **Menguji Solusi Referensi Instruktur:**
   ```bash
   cd slides-materials/web-development-banking-odp-v2/session-2/hands-on-lab-2/2-solution
   node scripts/test-runner.js
   bash verify-git.sh
   ```
