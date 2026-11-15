# Instructor Guide: Hands-on Lab 1 (`profil-web`)

## 1. Solution Architecture & Code Structure
Solusi ini menyajikan implementasi 100% compliant dari halaman profil web mandiri (`index.html`) dan halaman pengayaan jadwal pelatihan (`jadwal.html`):
- **Dokumen & Header**: Menggunakan `<!DOCTYPE html>`, `<html lang="id">`, `<meta charset="UTF-8">`, dan `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.
- **Landmark Semantik**: Memiliki `<header>`, `<nav>`, tepat satu `<main>`, tiga `<section id="...">`, dan `<footer>`.
- **Aksesibilitas Media & Navigasi**: Foto profil `assets/avatar.svg` dilengkapi `alt` deskriptif dan dimensi `width="120"` serta `height="120"`. Tautan fragment internal melompat mulus ke section yang dituju. Tautan eksternal ke portal BNI menyertakan protokol aman `https://` dan `rel="noopener noreferrer"`.
- **Tabel Data Tabular**: Tabel rencana studi menggunakan `<caption>`, `<thead>`, `<tbody>`, dan sel judul kolom `<th scope="col">`.
- **Tugas Mandiri (Challenge)**: Berkas `jadwal.html` mendemonstrasikan situs dua halaman untuk tim L&D perbankan dengan tabel jadwal 4 kegiatan.

## 2. Rubrik Evaluasi & Pembobotan Nilai

| Komponen | Bobot | Kriteria Penerimaan |
| :--- | :---: | :--- |
| **Dokumen & Metadata** | 20 Poin | Valid DOCTYPE, root `lang="id"`, meta charset, meta viewport, title bermakna |
| **Struktur Semantik** | 25 Poin | Tepat satu `<main>`, header, nav, section ber-heading, footer |
| **Media & Tautan** | 25 Poin | Avatar ber-`alt`, fragment links berfungsi, eksternal link ber-`noopener` |
| **Tabel Aksesibel** | 20 Poin | Menggunakan caption, thead, tbody, th scope="col" |
| **Keamanan Data & Sintesis** | 10 Poin | Bebas data rahasia nasabah/karyawan, bebas broken link |

## 3. Hasil Pengujian Otomatis
Jalankan test harness:
```bash
node scripts/test-runner.js
```
Hasil: **12/12 Passed (100%)**.
