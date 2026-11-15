# Panduan Trainee: Hands-on Lab 10 (Starter Pack)

## Deskripsi Tugas
Lengkapi skrip `scripts/app.js` untuk mengimplementasikan **Milestone 4: Persistent Search History**:
1. `readHistory()`: Membaca dan mem-parse data JSON dari `localStorage` dengan penanganan fallback array kosong `[]` jika data korup atau bernilai null.
2. `saveHistory(cities)`: Menyimpan array riwayat kota dalam format string JSON ke `localStorage`.
3. `rememberCity(city)`: Menyisipkan kota baru ke posisi terdepan (`index 0`), membersihkan duplikasi (*case-insensitive*), dan memotong panjang riwayat hingga maksimal 5 kota terbaru.
4. `renderHistory()`: Me-render tombol-tombol riwayat ke `#riwayatKota` dan mengaitkan event klik agar memicu pencarian ulang ke `loadWeather(kota)`.
5. Event Handler `#hapusRiwayat`: Menghapus data riwayat dari `localStorage` dan membersihkan tampilan daftar riwayat.

## Langkah Pengerjaan
1. Buka `scripts/app.js` dan ikuti panduan **TODO 1 sampai TODO 6**.
2. Jalankan uji otomatis di terminal untuk memantau progres kelulusan kriteria:
   ```bash
   node scripts/test-runner.js
   ```
3. Buka `index.html` di web browser dan uji pencarian kota berulang kali, periksa apakah riwayat tersimpan di tab **Application > Local Storage** Chrome DevTools, lalu uji reload halaman.
