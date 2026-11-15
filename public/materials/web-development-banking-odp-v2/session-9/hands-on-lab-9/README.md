# Hands-on Lab 9: Asynchronous JavaScript & Open-Meteo Weather App (Milestone 3)

## 1. Latar Belakang & Deskripsi Masalah
Sebagai Software Engineer di Divisi IT Perbankan (BNI ODP IT 2026), Anda ditugaskan membangun **Milestone 3: Weather Web App** yang mengintegrasikan layanan pihak ketiga (*Third-Party REST API*) secara tangguh dan asinkron.

Aplikasi ini menggunakan **Open-Meteo API** (gratis, tanpa API key) melalui pola orkestrasi 2-tahap:
1. **Geocoding API**: Mengubah nama kota masukan pengguna menjadi koordinat geografis (`latitude` dan `longitude`).
2. **Forecast API**: Mengambil data cuaca terkini (`temperature_2m`, `wind_speed_10m`) berdasarkan koordinat tersebut.

Aplikasi harus menerapkan tata kelola integrasi kelas enterprise:
- **Pencegahan Double-Request**: Tombol cari dinonaktifkan (`button.disabled = true`) selama request jaringan berlangsung.
- **Validasi Status HTTP & Kegagalan Jaringan**: Memeriksa `response.ok` dan menangkap error jaringan pada blok `catch`.
- **UI State Machine Terkelola**: Status `loading`, `success`, `empty`, `error`, dan `invalid` ditampilkan secara jelas ke pengguna.
- **Pemulihan Pasti**: Tombol dan antarmuka dipulihkan pada blok `finally`.
- **Keamanan Rendering**: Mencegah serangan injeksi XSS dengan menggunakan `textContent` dan node DOM murni.

---

## 2. Struktur Modul & Berkas
```text
hands-on-lab-9/
├── README.md                          # Dokumen spesifikasi bisnis & rubrik
├── 1-starter/                         # Workspace latihan trainee
│   ├── README.md                      # Panduan instruksional latihan
│   ├── index.html                     # Kerangka HTML dengan landmark form & status
│   ├── styles/main.css                # Styling antarmuka cuaca responsif
│   ├── scripts/
│   │   ├── app.js                     # Template skrip dengan TODO 1–6
│   │   └── test-runner.js             # Automated test harness trainee
└── 2-solution/                        # Solusi referensi instruktur
    ├── README.md                      # Panduan solusi dan arsitektur
    ├── index.html                     # HTML lengkap dengan atribusi
    ├── styles/main.css                # Styling antarmuka lengkap
    ├── scripts/
    │   ├── app.js                     # Implementasi 100% compliant + challenge 5 kota
    │   └── test-runner.js             # Automated test harness solusi
```

---

## 3. Spesifikasi Teknis & Kebutuhan Bisnis

### A. Komponen HTML & Aksesibilitas (`index.html`)
- Form pencarian: `<form id="formCuaca" novalidate>`
- Input kota: `<input id="kota" required minlength="2">`
- Tombol cari: `<button id="cariCuaca" type="submit">Cari cuaca</button>`
- Area status live: `<p id="status" role="status" aria-live="polite"></p>`
- Kontainer hasil: `<div id="hasilCuaca"></div>`
- Atribusi wajib: Mencantumkan teks *"Weather data by Open-Meteo.com"*
- Pemuatan skrip eksternal: `<script src="scripts/app.js" defer></script>`

### B. Helper HTTP Defensif: `getJSON(url)` (Slide 25)
- Memanggil `await fetch(url)`.
- Jika `!response.ok`, lempar `new Error(`HTTP ${response.status}`)`.
- Mengembalikan `await response.json()`.

### C. Geocoding & Forecast Endpoints (Slide 34–35)
1. **`findCity(name)`**:
   - URL: `https://geocoding-api.open-meteo.com/v1/search`
   - Parameter query: `name`, `count: "1"`, `language: "id"`, `format: "json"` (gunakan `URLSearchParams`).
   - Ekstraksi aman: `data.results?.[0] ?? null`.
2. **`fetchWeather(city)`**:
   - URL: `https://api.open-meteo.com/v1/forecast`
   - Parameter query: `latitude: city.latitude`, `longitude: city.longitude`, `current: "temperature_2m,wind_speed_10m"`, `timezone: "auto"`.
   - Validasi: Pastikan `Number.isFinite(data.current?.temperature_2m)` dan `Number.isFinite(data.current?.wind_speed_10m)`.

### D. State Machine & Orkestrasi `loadWeather(name)` (Slide 33 & 37)
- Pemetaan teks status:
  - `loading`: `"Mengambil data..."` (tombol disabled)
  - `success`: `"Data cuaca dimuat."`
  - `empty`: `"Kota tidak ditemukan."` (kontainer hasil dikosongkan)
  - `error`: `"Data gagal dimuat. Coba lagi."`
  - `invalid`: `"Masukkan minimal dua karakter nama kota."`
- `loadWeather(name)` dibungkus dalam `try / catch / finally`. Blok `finally` **wajib** mengembalikan `button.disabled = false`.

---

## 4. Challenge Mandiri (Slide 41–42)
Kembangkan `findCity(name)` agar menggunakan `count: "5"` dan menampilkan hingga 5 tombol pilihan kota beserta negaranya, lalu mengambil cuaca sesuai kota yang diklik pengguna.

---

## 5. Rubrik Penilaian (100 Poin)
| No | Kriteria Evaluasi | Bobot | Indikator Keberhasilan |
| :---: | :--- | :---: | :--- |
| 1 | **Struktur HTML & Aksesibilitas** | 15% | Form memakai `novalidate`, status memakai `role="status"` dan `aria-live="polite"`, atribusi Open-Meteo hadir, skrip dimuat dengan `defer`. |
| 2 | **Code Hygiene & XSS Defense** | 10% | Larangan `var`, penggunaan `const`/`let`, rendering teks aman via `textContent`. |
| 3 | **Helper `getJSON(url)` Defensif** | 15% | Memeriksa `response.ok` dan melempar `Error("HTTP ...")` pada status 4xx/5xx. |
| 4 | **Geocoding & Forecast Endpoints** | 20% | Konstruksi `URLSearchParams` benar, optional chaining pada respons, validasi `Number.isFinite()`. |
| 5 | **UI State Machine & Button Guard** | 20% | State `loading`, `success`, `empty`, `error`, `invalid` sesuai kontrak, tombol dinonaktifkan saat loading. |
| 6 | **Orkestrasi `loadWeather` & Finally** | 20% | Alur terbungkus `try/catch/finally`, tombol dipulihkan pada `finally`. |

---

## 6. Cara Menjalankan Uji Otomatis
```bash
# Menjalankan pengujian pada starter
cd slides-materials/web-development-banking-odp-v2/session-9/hands-on-lab-9/1-starter
node scripts/test-runner.js

# Menjalankan pengujian pada solusi
cd slides-materials/web-development-banking-odp-v2/session-9/hands-on-lab-9/2-solution
node scripts/test-runner.js
```
