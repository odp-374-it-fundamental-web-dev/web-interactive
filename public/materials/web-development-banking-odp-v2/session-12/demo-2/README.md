# Demo 2: Daily Forecast Transformation (`toForecastRows`)

## Deskripsi Singkat
Modul demo ini membedah teknik transformasi data respons API Open-Meteo dari struktur *Parallel Arrays* menjadi *Array of Objects* yang terstandar (Slides 13–14 Sesi 12):
1. **Struktur Asal Respons Open-Meteo**:
   ```javascript
   daily: {
     time: ["2026-11-14", "2026-11-15", ...],
     temperature_2m_max: [33.2, 32.8, ...],
     temperature_2m_min: [24.1, 23.9, ...]
   }
   ```
2. **Kebutuhan Transformasi**:
   - Komponen UI membutuhkan array baris objek `{ date, min, max }`.
   - Fungsi murni `toForecastRows(data)` memvalidasi bahwa panjang array `time` tepat 7 hari dan seluruh nilai suhu bertipe angka berhingga (`Number.isFinite`).

## Instruksi Menjalankan
```bash
# Jalankan solusi referensi
node slides-materials/web-development-banking-odp-v2/session-12/demo-2/2-solution/forecast-rows.js
```
