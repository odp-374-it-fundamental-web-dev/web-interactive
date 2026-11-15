# Hands-on Lab 2: Halaman Kontak (`kontak.html`) & Manajemen Repository Git

## 1. Executive Summary & Business Scenario
Sebagai kelanjutan dari modul Sesi 1, peserta BNI ODP IT 2026 ditugaskan untuk:
1. Membangun halaman formulir kontak interaktif (`kontak.html`) yang memungkinkan pengguna mengirimkan pesan atau pertanyaan kepada trainee terkait proyek pelatihan perbankan.
2. Menautkan navigasi dua arah antara `index.html` dan `kontak.html`.
3. Mengelola repositori proyek latihan dengan Version Control Git, mengonfigurasi `.gitignore` untuk melindungi informasi sensitif, dan mencatat riwayat commit yang bermakna.

## 2. Business & Technical Acceptance Criteria

1. **Struktur & Aksesibilitas Formulir (25 Poin):**
   - Menggunakan `<form action="#" method="POST">` (metode `POST` wajib untuk mencegah kebocoran data di URL).
   - Setiap elemen input, select, dan textarea harus memiliki `<label>` yang terasosiasi secara eksplisit menggunakan pasangan atribut `for` dan `id`.
   - Setiap field formulir wajib memiliki atribut `name` yang unik.
2. **Validasi Client-Side HTML5 (25 Poin):**
   - Nama lengkap: bertipe `text`, memiliki atribut `required`, dan batas `minlength="3"`.
   - Email: bertipe `email` dan `required`.
   - Topik pertanyaan: elemen `<select>` ber-`required` dengan opsi pertama kosong (`value=""`).
   - Pesan: elemen `<textarea>` dengan `required`, `minlength="10"`, dan `rows="4"`.
3. **Integrasi Navigasi Antarhalaman (20 Poin):**
   - `index.html` memiliki tautan navigasi relatif `<a href="kontak.html">Hubungi Saya</a>`.
   - `kontak.html` memiliki tautan navigasi relatif `<a href="index.html">Kembali ke Profil</a>`.
4. **Disiplin Version Control & `.gitignore` (20 Poin):**
   - Berkas `.gitignore` harus mengabaikan berkas rahasia `.env`, berkas kunci `*.key`, berkas sistem `.DS_Store`, dan direktori `node_modules/`.
5. **Kepatuhan Regulasi & Keamanan Data (10 Poin):**
   - Tidak mencantumkan atau meminta data rekening riil, PIN/password nyata, ataupun PII (Personally Identifiable Information) nasabah.
   - Menggunakan hanya data sintetis/fiktif.

## 3. Rubrik Penilaian (Total: 100 Poin)

| Kriteria Penilaian | Bobot | Indikator Keberhasilan |
| :--- | :---: | :--- |
| **Aksesibilitas Form** | 25% | `method="POST"`, pasangan `<label for>`–`id`, atribut `name` lengkap |
| **Validasi HTML5** | 25% | `required`, `type="email"`, `minlength`, `<select>` opsi default |
| **Integrasi Halaman** | 20% | Navigasi dua arah `index.html` <-> `kontak.html` berfungsi |
| **Konfigurasi Git** | 20% | Berkas `.gitignore` aktif mencegah upload `.env` dan `.DS_Store` |
| **Keamanan & Kerapian** | 10% | Data sintetis, lulus 100% verifikasi test runner |

## 4. Cara Menjalankan Automated Test Harness
```bash
cd slides-materials/web-development-banking-odp-v2/session-2/hands-on-lab-2/1-starter
node scripts/test-runner.js
```
