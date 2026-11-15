# Instructor Guide: Hands-on Lab 2 (`kontak.html` & Git Workflow)

## 1. Solution Architecture & Code Structure
Solusi ini menyajikan implementasi lengkap antarmuka formulir web yang aksesibel dan standar pengelolaan kode sumber:
- **Keamanan Transmisi**: Menggunakan `method="POST"` sehingga data payload dikirim dalam body request HTTP tanpa mencemari URL browser.
- **Aksesibilitas Label-Input**: Setiap field (`namaLengkap`, `emailPengirim`, `topikPesan`, `isiPesan`) memiliki elemen `<label for="...">` yang terhubung 1-to-1 dengan `id` dan `name`.
- **Validasi HTML5 Bawaan**: Field nama mewajibkan `minlength="3"`, email ber-`type="email"`, select bertopik memiliki opsi pertama bernilai kosong (`value=""`), dan textarea dibatasi `minlength="10"`.
- **Navigasi Dua Arah**: `index.html` dan `kontak.html` saling terhubung melalui navigasi relatif.
- **Tugas Mandiri (Challenge)**: Berkas `pendaftaran.html` menyajikan formulir pendaftaran pelatihan internal L&D perbankan dengan validasi lengkap.
- **Kepatuhan Git**: Berkas `.gitignore` enterprise melindungi secret `.env`, cache OS `.DS_Store`, dan direktori `node_modules/`.

## 2. Rubrik Evaluasi & Pembobotan Nilai

| Komponen | Bobot | Kriteria Penerimaan |
| :--- | :---: | :--- |
| **Aksesibilitas Form** | 25 Poin | Menggunakan `method="POST"`, label for cocok dengan id, name terpasang |
| **Validasi HTML5** | 25 Poin | Menggunakan required, minlength, type="email", dan default empty select |
| **Navigasi 2-Arah** | 20 Poin | Tautan antarhalaman index.html dan kontak.html bekerja sempurna |
| **Konfigurasi Git** | 20 Poin | Berkas .gitignore mengabaikan .env, .DS_Store, dan node_modules |
| **Kepatuhan Perbankan** | 10 Poin | Bebas data nasabah/PIN riil, lulus 100% test harness |

## 3. Hasil Pengujian Otomatis
```bash
node scripts/test-runner.js
```
Hasil: **13/13 Passed (100%)**.
