# Panduan Trainee: Hands-on Lab 9 (Starter Pack)

## Deskripsi Tugas
Lengkapi skrip `scripts/app.js` untuk membangun **Milestone 3: Weather Web App** terintegrasi dengan REST API Open-Meteo:
1. Mengimplementasikan `setState(state)` untuk mengelola status antarmuka dan menonaktifkan tombol submit selama request berlangsung.
2. Membangun fungsi helper `getJSON(url)` yang menangkap kode error HTTP (misal 404/500).
3. Mengambil koordinat kota dengan `findCity(name)` (Geocoding API).
4. Mengambil cuaca dengan `fetchWeather(city)` (Forecast API).
5. Merender hasil ke DOM secara aman via `textContent` di `renderWeather(city, data)`.
6. Mengorkestrasi seluruh alur di `loadWeather(name)` dengan blok `try / catch / finally`.

## Langkah Pengerjaan
1. Buka `scripts/app.js` dan ikuti panduan **TODO 1 sampai TODO 6**.
2. Jalankan uji otomatis di terminal untuk memantau progres kelulusan kriteria:
   ```bash
   node scripts/test-runner.js
   ```
3. Buka `index.html` di web browser (misal via Live Server) dan uji pencarian kota Jakarta, nama kota acak, serta pengujian mode Offline di Chrome DevTools.
