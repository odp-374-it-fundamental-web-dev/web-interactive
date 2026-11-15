# Demo 2: Network Inspection & Storage Startup Bug Fix

## Deskripsi Singkat
Modul demo ini membedah studi kasus nyata bug persistensi pada Weather Web App (Slide 15 Sesi 11):
1. **Deskripsi Bug**:
   - Pengguna mengeluhkan riwayat pencarian kota selalu hilang setiap kali halaman di-reload (*F5*).
2. **Penyelidikan Bukti dengan DevTools**:
   - Tab Console: Tidak ada error.
   - Tab Application: Key `localStorage` terisi saat klik cari, tetapi langsung terhapus saat refresh.
   - Tab Sources: Ditemukan baris sisa eksperimen pengujian `localStorage.removeItem(KEY)` yang tertinggal di level global skrip saat startup!
3. **Perbaikan**:
   - Menghapus pemanggilan `removeItem` di alur inisialisasi startup dan memindahkannya hanya ke handler event klik tombol `#hapusRiwayat`.

## Instruksi Menjalankan
```bash
# Buka di browser
open slides-materials/web-development-banking-odp-v2/session-11/demo-2/2-solution/index.html
```
