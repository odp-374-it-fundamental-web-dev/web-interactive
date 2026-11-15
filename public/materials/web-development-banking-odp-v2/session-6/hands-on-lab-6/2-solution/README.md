# Instructor Guide: Hands-on Lab 6 (`rekap-transaksi.js`)

## 1. Solution Architecture & Code Structure
Solusi ini menyajikan modul audit dan rekonsiliasi data transaksi finansial perbankan:
- **Perulangan & Penyaringan**: Menggunakan `for...of` untuk membaca objek transaksi satu per satu, dan langsung memanggil `continue` jika transaksi memiliki nominal minus/nol atau status tidak sama dengan `"BERHASIL"`.
- **Integritas Rekonsiliasi**: Mengakumulasikan total nominal sukses dan memisahkan daftar transaksi valid ke dalam array `transaksiValid`.
- **Pengelompokan Status (Switch)**: Memanfaatkan *intentional fall-through* untuk menyatukan penanganan kode gagal/ditolak/kedaluwarsa menjadi `"TIDAK_DIPROSES"`.
- **Guard Clauses PIN**: Mencegah serangan brute-force atau format rusak dengan langsung mengembalikan error kode sebelum membandingkan kecocokan PIN.

## 2. Rubrik Evaluasi & Pembobotan Nilai

| Komponen | Bobot | Kriteria Penerimaan |
| :--- | :---: | :--- |
| **Rekonsiliasi for...of** | 35 Poin | Menggunakan loop for...of dan continue, total 175.000 IDR tepat |
| **Kategorisasi Switch** | 25 Poin | Switch dengan fall-through dan default handling |
| **Validasi PIN Guard** | 20 Poin | Fail-fast early return, regex digit 6 karakter |
| **Defensive Array Guard** | 10 Poin | Lempar Error jika input bukan array |
| **Standar Kode Bersih** | 10 Poin | Strict equality, bebas var, 100% test lulus |

## 3. Hasil Pengujian Otomatis
```bash
node scripts/test-runner.js
```
Hasil: **10/10 Passed (100%)**.
