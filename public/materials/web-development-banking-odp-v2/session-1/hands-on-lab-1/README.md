# Hands-on Lab 1: Halaman Profil Web Mandiri (`profil-web`)

## 1. Executive Summary & Business Scenario
Sebagai calon Software Engineer di program BNI Officer Development Program (ODP IT) 2026, Anda ditugaskan membangun prototipe halaman profil web mandiri (`profil-web/index.html`) yang mendokumentasikan identitas diri, ringkasan peran, fokus keahlian, dan rencana studi mingguan selama masa pelatihan.

Halaman web ini harus dibangun **murni menggunakan HTML5 semantik (tanpa CSS atau framework)** untuk melatih pemahaman mendalam mengenai arsitektur dokumen web standar, keterbacaan struktur, dan kepatuhan aksesibilitas perbankan sebelum memasuki modul styling.

## 2. Business & Technical Acceptance Criteria

1. **Anatomi & Validitas Dokumen (20 Poin):**
   - Menggunakan deklarasi `<!DOCTYPE html>` standar W3C.
   - Tag root `<html lang="id">`.
   - Bagian `<head>` memuat `<meta charset="UTF-8">`, `<meta name="viewport" content="width=device-width, initial-scale=1.0">`, dan `<title>` yang relevan.
2. **Elemen Landmark Semantik (25 Poin):**
   - Menggunakan `<header>`, `<nav>`, `<main>`, minimal 2 `<section>`, dan `<footer>`.
   - Halaman hanya memiliki tepat satu elemen `<main>`.
   - Menghindari *div-soup* untuk struktur utama konten.
3. **Media & Navigasi Terstruktur (25 Poin):**
   - Menampilkan foto profil dari berkas relatif `assets/avatar.svg` dengan atribut `alt` yang deskriptif dan dimensi `width`/`height`.
   - Memiliki tautan navigasi fragment internal (misalnya `href="#minat"` yang terhubung ke elemen dengan `id="minat"`).
   - Memiliki tautan eksternal resmi (mis. portal BNI) dengan protokol lengkap `https://` serta atribut keamanan `target="_blank" rel="noopener noreferrer"`.
4. **Data Tabular & Hierarki Konten (20 Poin):**
   - Tabel rencana belajar dilengkapi dengan `<caption>`, `<thead>`, `<tbody>`, serta sel judul kolom bertipe `<th scope="col">`.
   - Hierarki judul tersusun rapi (`h1` utama, diikuti `h2` pada tiap section) tanpa lompatan jenjang heading.
5. **Kepatuhan Keamanan & Standar Perbankan (10 Poin):**
   - Seluruh data kontak, nama, dan jadwal sepenuhnya fiktif/sintetis.
   - Tidak mencantumkan informasi sensitif (nomor rekening nyata, NIK nyata, atau kata sandi).

## 3. Rubrik Penilaian (Total: 100 Poin)

| Kriteria Penilaian | Bobot | Indikator Keberhasilan |
| :--- | :---: | :--- |
| **Dokumen & Metadata** | 20% | DOCTYPE, `lang="id"`, meta charset, meta viewport, title |
| **Landmark Semantik** | 25% | Header, nav, main tunggal, section tematik, footer |
| **Media & Tautan Aksesibel** | 25% | Avatar dengan `alt` deskriptif, tautan fragment `#id`, tautan `https://` eksternal ber-`noopener` |
| **Tabel Rencana Belajar** | 20% | Table dengan `caption`, `thead`, `tbody`, dan `th scope="col"` |
| **Keamanan & Format Kode** | 10% | Indentasi rapi, validasi data sintetis, lulus automated test runner |

## 4. Cara Menjalankan Automated Test Harness
Jalankan verifikasi otomatis dari terminal:
```bash
cd slides-materials/web-development-banking-odp-v2/session-1/hands-on-lab-1/1-starter
node scripts/test-runner.js
```
