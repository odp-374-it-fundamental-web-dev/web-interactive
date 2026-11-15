# Trainee Guide: Hands-on Lab 1 (`profil-web`)

## Misi Trainee
Anda ditugaskan membangun dokumen HTML5 mandiri `index.html` untuk profil engineer BNI ODP IT 2026. Halaman ini akan menjadi fondasi proyek web yang akan terus dikembangkan dengan Form & Git (Sesi 2), Styling CSS & Flexbox/Grid (Sesi 3), dan Responsive Bootstrap (Sesi 4).

## Checklist Tugas & Target Poin (Total: 100 Poin)
- [ ] **Tugas 1: Deklarasi & Metadata (20 Poin)**
  - Deklarasikan `<!DOCTYPE html>` di baris 1.
  - Tambahkan `<html lang="id">`.
  - Tambahkan `<meta charset="UTF-8">`, `<meta name="viewport" content="width=device-width, initial-scale=1.0">`, dan `<title>`.
- [ ] **Tugas 2: Landmark Semantik (25 Poin)**
  - Pasang `<header>`, `<nav>`, `<main>`, `<section>`, dan `<footer>`.
  - Pastikan tepat **satu** elemen `<main>` di seluruh halaman.
- [ ] **Tugas 3: Media & Navigasi Terstruktur (25 Poin)**
  - Tampilkan avatar dari `assets/avatar.svg` lengkap dengan atribut `alt` dan `width="120" height="120"`.
  - Buat tautan fragment `<a href="#minat">` menuju `<section id="minat">`.
  - Buat tautan eksternal resmi `https://www.bni.co.id` dengan `target="_blank" rel="noopener noreferrer"`.
- [ ] **Tugas 4: Tabel Rencana Belajar (20 Poin)**
  - Lengkapi tabel dengan `<caption>`, `<thead>`, `<tbody>`, dan `<th scope="col">`.
- [ ] **Tugas 5: Disiplin Keamanan Perbankan (10 Poin)**
  - Gunakan hanya data sintetis / fiktif (nama trainee contoh, jadwal latihan).

## Cara Menjalankan Verifikasi
Jalankan test harness otomatis untuk melihat status pengerjaan Anda:
```bash
node scripts/test-runner.js
```
