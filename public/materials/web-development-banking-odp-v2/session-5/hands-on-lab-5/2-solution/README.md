# Instructor Guide: Hands-on Lab 5 (`transaksi.js` & `pesanan.js`)

## 1. Solution Architecture & Code Structure
Solusi ini menyediakan engine perhitungan transaksi finansial yang aman, presisi, dan defensif:
- **Konversi Eksplisit**: Mengonversi setiap argumen (`harga`, `jumlah`, `diskon`) menggunakan `Number(val)`.
- **Validasi Fail-Fast**: Menggunakan `Number.isFinite()` untuk menolak `NaN`, `Infinity`, string non-numerik, dan nilai negatif dengan melemparkan `Error("Input tidak valid")`.
- **Proteksi Batas**: Menggunakan `Math.max(0, subtotal - d)` untuk menjamin total akhir transaksi tidak pernah bernilai negatif.
- **Pemodelan Objek Finansial**: `buatTransaksi` mengembalikan struktur objek yang konsisten dengan timestamp ISO string untuk keperluan audit trail transaksi.
- **Manipulasi Array**: `kelolaNominal` memodifikasi elemen array pada indeks tertentu dan menambahkan item baru menggunakan `push()`.

## 2. Rubrik Evaluasi & Pembobotan Nilai

| Komponen | Bobot | Kriteria Penerimaan |
| :--- | :---: | :--- |
| **Kalkulasi & Konversi** | 30 Poin | Subtotal & total terhitung benar dari input number maupun string |
| **Validasi & Error Handling** | 25 Poin | Menolak NaN/negatif, total minimal 0 |
| **Pemodelan Objek** | 25 Poin | Objek terstruktur dengan id, deskripsi, nominal, status, waktu |
| **Manipulasi Array** | 10 Poin | Modifikasi indeks dan operasi push |
| **Kepatuhan Kode Bersih** | 10 Poin | Bebas var, lulus 100% test harness |

## 3. Hasil Pengujian Otomatis
```bash
node scripts/test-runner.js
```
Hasil: **10/10 Passed (100%)**.
