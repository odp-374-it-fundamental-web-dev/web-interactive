# Demo 1: 7-Day Forecast URL Construction (`makeWeatherURL`)

## Deskripsi Singkat
Modul demo ini membedah teknik penyusunan URL query yang aman dan terstandar untuk mengambil data prakiraan cuaca 7 hari dari Open-Meteo API (Slides 10–12 Sesi 12):
1. **Parameter Wajib Forecast 7 Hari**:
   - `latitude` & `longitude`: Koordinat lokasi kota.
   - `current`: `"temperature_2m,wind_speed_10m"` (kondisi saat ini).
   - `daily`: `"temperature_2m_max,temperature_2m_min"` (suhu maksimal dan minimal harian).
   - `forecast_days`: `"7"` (membatasi rentang tanggal ke tepat 7 hari: hari ini + 6 hari ke depan).
   - `timezone`: `"auto"` (menyesuaikan zona waktu lokal lokasi).
2. **Penggunaan `URL` & `URLSearchParams`**:
   - Menghindari perangkaian string manual yang rawan error spasi, tanda tanya `?`, atau karakter khusus.

## Instruksi Menjalankan
```bash
# Jalankan solusi referensi
node slides-materials/web-development-banking-odp-v2/session-12/demo-1/2-solution/forecast-url.js
```
