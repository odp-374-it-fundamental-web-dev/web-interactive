# Demo 3: Metode Pengiriman GET vs POST & Keamanan Perbankan

## 1. Overview
Demo ini membedah perbedaan fundamental antara pengiriman data form melalui HTTP method `GET` dan `POST`, serta implikasi keamanannya dalam domain perbankan:
- **Metode GET**: Data form dirangkai ke dalam query string URL (`?nama=Budi&pin=1234`).
  - *Risiko Keamanan Perbankan*: Data terekspos di address bar browser, tersimpan dalam browser history, terekam di server web access log, dan dapat bocor melalui HTTP `Referer` header.
- **Metode POST**: Data dikirim di dalam body HTTP request.
  - Wajib digunakan untuk formulir transaksi, otentikasi, pembuatan akun, dan pengiriman data pribadi.
  - Tetap memerlukan enkripsi transport layer (HTTPS) di lingkungan produksi perbankan.

## 2. Learning Objectives
- Membedakan use case yang tepat untuk `GET` (pencarian, navigasi katalog publik) vs `POST` (modifikasi data, transmisi informasi rahasia).
- Mengidentifikasi celah keamanan data pribadi/kredensial yang bocor via query string URL.
- Menerapkan atribut `method="POST"` dan atribut keamanan pelengkap.
