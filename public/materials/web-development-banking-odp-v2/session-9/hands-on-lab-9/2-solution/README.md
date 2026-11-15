# Panduan Solusi Referensi: Hands-on Lab 9 (Instruktur)

## Arsitektur & Prinsip Desain
Solusi ini mendemonstrasikan pola integrasi REST API modern:
1. **Pola 2-Tahap Geocoding & Forecast**:
   - Pengguna memasukkan nama kota -> `findCity(name)` memanggil endpoint Geocoding Open-Meteo.
   - Hasil koordinat pertama (`data.results?.[0]`) diekstrak secara aman menggunakan *optional chaining*.
   - Koordinat diteruskan ke `fetchWeather(city)` untuk memanggil endpoint Forecast.
2. **Defensive Network Programming**:
   - `getJSON(url)` secara eksplisit memeriksa `response.ok`. Jika menerima status 4xx atau 5xx, error dilempar sehingga alur langsung beralih ke blok `catch`.
   - `fetchWeather` memeriksa `Number.isFinite()` pada nilai suhu dan kecepatan angin sebelum melakukan rendering.
3. **Pencegahan Double-Submit & State Machine**:
   - `setState("loading")` menonaktifkan tombol submit (`button.disabled = true`).
   - Blok `finally` di `loadWeather` menjamin tombol kembali aktif meskipun terjadi exception di tengah eksekusi.
4. **Rendering Aman**:
   - Seluruh data teks ditampilkan menggunakan `textContent` dan kontainer dibersihkan via `replaceChildren()`.

## Menjalankan Pengujian
```bash
node scripts/test-runner.js
```
Harapan hasil: `10/10 Checks Passed (100%)`.
