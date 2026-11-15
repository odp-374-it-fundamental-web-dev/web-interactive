# Weather Web App (Capstone Mini Project) — Starter Guide

Selamat datang di proyek akhir **Weather Web App (Capstone Mini Project)** program **BNI ODP IT 2026**!

Proyek ini menyatukan seluruh kompetensi pengembangan web dari Sesi 1 sampai Sesi 12:
- Struktur HTML5 semantik & standar aksesibilitas WAI-ARIA
- Desain antarmuka modern & responsive grid auto-fit (`repeat(auto-fit, minmax(8.5rem, 1fr))`)
- Pemrograman asinkron modular (`Promise`, `async/await`, `fetch`)
- Transformasi data API Open-Meteo 7 hari (*Daily Forecast*)
- Fungsi murni teruji unit (*Pure Functions*) & manajemen state tanpa mutasi
- Persistensi riwayat pencarian dengan `localStorage`
- Kesiapan publikasi produksi di **GitHub Pages** (menggunakan *relative path*)

---

## 1. Daftar Tugas (TODO Checklist)

Selesaikan 5 tugas terarah di bawah ini:

### 1. `scripts/forecast-helper.js`
- [ ] **TODO 1**: Lengkapi fungsi `makeWeatherURL(city)` agar menyusun URL Open-Meteo dengan parameter:
  - `latitude`, `longitude`
  - `current: "temperature_2m,wind_speed_10m"`
  - `daily: "temperature_2m_max,temperature_2m_min"`
  - `forecast_days: "7"`
  - `timezone: "auto"`
- [ ] **TODO 2**: Lengkapi fungsi murni `toForecastRows(data)` untuk mengekstrak array paralel `time`, `temperature_2m_max`, dan `temperature_2m_min` menjadi 7 baris objek:
  ```javascript
  [{ date: "2026-11-14", max: 33.2, min: 24.1 }, ...]
  ```

### 2. `scripts/next-history.js`
- [ ] **TODO 3**: Lengkapi fungsi murni `nextHistory(prev, newCity, max = 5)`:
  - Validasi parameter input
  - Lakukan deduplikasi case-insensitive
  - Sisipkan `newCity` di posisi awal (index 0)
  - Batasi panjang maksimal hingga `max` item
  - **Pastikan array `prev` asli tidak dimutasi (immutability)**

### 3. `scripts/app.js`
- [ ] **TODO 4**: Tambahkan *double-request fail-fast guard* di baris awal fungsi `loadWeather(name)`:
  ```javascript
  if (button && button.disabled) return;
  ```
- [ ] **TODO 5**: Implementasikan fungsi `renderForecast(data)`:
  - Panggil `toForecastRows(data)`
  - Bangun elemen `<li>` dengan kelas `.forecast-card`
  - Sisipkan nama tanggal, suhu maksimal, dan suhu minimal
  - Tampilkan ke dalam kontainer `#forecast`

---

## 2. Cara Menjalankan Uji Otomatis

Jalankan test harness terintegrasi di terminal:

```bash
node scripts/test-runner.js
```

Target Anda adalah mencapai kelulusan **100% (11/11 Checks Passed)** sebelum melakukan deployment.

---

## 3. Menjalankan di Lingkungan Lokal

Buka terminal di folder ini dan jalankan server lokal:

```bash
# Menggunakan Python 3
python3 -m http.server 5500

# Atau buka langsung dengan VS Code Live Server (port 5500)
```

Akses aplikasi di browser pada: `http://localhost:5500`

---

## 4. Panduan Publikasi ke GitHub Pages

1. Buat repositori publik baru di GitHub, misalnya `bni-weather-app`.
2. Push seluruh berkas starter yang telah diselesaikan ke branch `main`.
3. Masuk ke tab **Settings** repositori GitHub > **Pages**.
4. Pada bagian **Build and deployment**, pilih:
   - Source: **Deploy from a branch**
   - Branch: **main** / folder: **/ (root)**
5. Klik **Save**. Tunggu 1–2 menit hingga URL live aktif (`https://<username>.github.io/<repo>/`).
6. Uji coba aplikasi di URL tersebut (pastikan CSS dan skrip termuat dengan benar karena penggunaan jalur relatif `./`).
