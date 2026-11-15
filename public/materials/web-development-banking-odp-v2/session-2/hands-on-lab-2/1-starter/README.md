# Trainee Guide: Hands-on Lab 2 (`kontak.html` & Git Workflow)

## Misi Trainee
Anda ditugaskan membangun halaman formulir kontak interaktif (`kontak.html`), menautkannya dengan halaman profil `index.html`, dan mengonfigurasi berkas `.gitignore` untuk melindungi berkas sensitif sebelum membuat commit Git.

## Checklist Tugas & Target Poin (Total: 100 Poin)
- [ ] **Tugas 1: Struktur & Keamanan Form (25 Poin)**
  - Deklarasikan `<!DOCTYPE html>`, `<html lang="id">`, `<head>`, dan `<title>`.
  - Gunakan `<form action="#" method="POST">`.
  - Pasangkan setiap `<label for="...">` dengan `<input id="...">`, `<select>`, atau `<textarea>`.
- [ ] **Tugas 2: Validasi HTML5 Deklaratif (25 Poin)**
  - Nama: `type="text"`, `required`, `minlength="3"`.
  - Email: `type="email"`, `required`.
  - Topik: `<select required>` dengan opsi awal `<option value="">-- Pilih Topik --</option>`.
  - Pesan: `<textarea required minlength="10" rows="4">`.
  - Tombol: `<button type="submit">`.
- [ ] **Tugas 3: Integrasi Navigasi Dua Arah (20 Poin)**
  - Di `kontak.html`: tambahkan tautan `<a href="index.html">Kembali ke Profil</a>`.
  - Di `index.html`: tambahkan tautan `<a href="kontak.html">Hubungi Saya</a>` di dalam `<nav>`.
- [ ] **Tugas 4: Konfigurasi Git & `.gitignore` (20 Poin)**
  - Pastikan berkas `.gitignore` mengabaikan `.env`, `.DS_Store`, dan `node_modules/`.
- [ ] **Tugas 5: Disiplin Keamanan Perbankan (10 Poin)**
  - Pastikan seluruh data input bersifat publik fiktif (bukan nomor rekening/PIN riil).

## Cara Menjalankan Verifikasi Otomatis
```bash
node scripts/test-runner.js
```
