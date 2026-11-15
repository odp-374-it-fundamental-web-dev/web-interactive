# Panduan Solusi Referensi: Hands-on Lab 10 (Instruktur)

## Arsitektur & Prinsip Desain
Solusi ini mendemonstrasikan persistensi data client-side tingkat enterprise:
1. **Namespace Key Terisolasi**:
   - `bni-odp-weather-history-v1` untuk riwayat pencarian.
   - `bni-odp-weather-favorites-v1` untuk kota favorit.
   - Menghindari tabrakan (*namespace collision*) dan menghindari pemanggilan `localStorage.clear()` yang dapat menghapus key aplikasi lain pada origin yang sama.
2. **Defensive Parsing & Skema Validasi**:
   - `readHistory()` membungkus `JSON.parse()` dalam `try / catch` untuk menangkap data korup.
   - Memastikan `Array.isArray(parsed)` sebelum data dikonsumsi lebih lanjut.
3. **Pipeline Deduplikasi & Batas 5 Kota**:
   - `[city, ...filtered].slice(0, 5)` memindahkan kota yang baru dicari ke `index 0` dan memastikan jumlah riwayat tidak pernah melebihi 5 elemen.
4. **Interaksi Pencarian Ulang (*Re-search*)**:
   - Tombol riwayat memanggil `loadWeather(kota)` saat diklik tanpa memerlukan masukan teks ulang dari pengguna.

## Menjalankan Pengujian
```bash
node scripts/test-runner.js
```
Harapan hasil: `10/10 Checks Passed (100%)`.
