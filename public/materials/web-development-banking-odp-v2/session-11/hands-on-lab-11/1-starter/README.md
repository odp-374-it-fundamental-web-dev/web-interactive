# Panduan Trainee: Hands-on Lab 11 (Starter Pack)

## Deskripsi Tugas
Selesaikan tugas **Milestone 5: Pengerasan Kualitas & Integrasi Akhir**:
1. Buka `scripts/next-history.js` dan lengkapi fungsi murni `nextHistory(prev, newCity, max = 5)`:
   - Saring duplikasi nama kota (*case-insensitive*).
   - Masukkan kota baru di posisi paling depan (`index 0`).
   - Batasi panjang array hasil maksimal 5 item.
   - Jangan mutasi array `prev` asli.
2. Buka `scripts/app.js`:
   - Hubungkan `nextHistory()` ke dalam fungsi `rememberCity()`.
   - Pasang guard double-request di baris awal `loadWeather()`: `if (button && button.disabled) return;`.
3. Jalankan uji otomatis di terminal untuk memeriksa pemenuhan kriteria 100 poin:
   ```bash
   node scripts/test-runner.js
   ```
