# Hands-on Lab 12: Weather Web App Final Capstone & Deployment

## 1. Latar Belakang Proyek
Sebagai calon Software Engineer di BNI (ODP IT 2026), proyek **Weather Web App (Mini Capstone)** ini adalah tugas akhir untuk mempraktikkan seluruh materi yang telah dipelajari dari Sesi 1 sampai Sesi 12.

Di dunia perbankan, aplikasi web harus memenuhi standar dasar yang baik:
- **Tampilan Rapi & Responsif**: Nyaman dibuka di HP, tablet, maupun laptop tanpa ada bagian yang terpotong atau geser ke samping (*no horizontal scroll*).
- **Aman dari XSS**: Data nama kota atau teks dari luar tidak boleh langsung dimasukkan via `innerHTML` sembarangan agar tidak disusupi skrip berbahaya.
- **Ramah Aksesibilitas**: Formulir mudah digunakan, punya label yang jelas, dan status aplikasi terbaca oleh pembaca layar (*screen reader*).
- **Penanganan Error yang Baik**: Jika koneksi internet lambat atau nama kota tidak ditemukan, aplikasi tetap stabil dan menampilkan pesan yang jelas (tidak mendadak *blank white screen* atau *crash*).

---

## 2. Masalah yang Perlu Diselesaikan
Aplikasi **Weather Web App** yang akan Anda buat bertugas menampilkan cuaca saat ini dan prakiraan cuaca 7 hari ke depan untuk kota yang dicari pengguna.

Tantangan yang harus Anda selesaikan:
1. **Pencarian Cuaca 2 Langkah**: API Open-Meteo memerlukan koordinat (latitude & longitude). Jadi, Anda perlu mencari koordinat kota terlebih dahulu via Geocoding API, lalu mengambil data cuaca harian via Forecast API.
2. **Kondisi Tampilan yang Jelas (UI States)**: Pengguna harus tahu apa yang sedang terjadi melalui 4 kondisi:
   - **Loading**: Saat data sedang diambil (tombol dinonaktifkan sementara agar tidak diklik berkali-kali).
   - **Berhasil (Success)**: Menampilkan kartu cuaca hari ini dan prakiraan 7 hari ke depan.
   - **Tidak Ditemukan (Empty)**: Memberi tahu jika kota yang dicari tidak ada.
   - **Gagal (Error)**: Menampilkan pesan ramah jika ada kendala jaringan atau server down.
3. **Mencegah Klik Ganda (*Double Request*)**: Jika tombol cari diklik cepat berkali-kali (*spam click*), aplikasi hanya boleh memproses satu permintaan saja.
4. **Penyimpanan Riwayat Pencarian**: Mengingat 5 kota terakhir yang dicari menggunakan `localStorage`, sehingga pengguna bisa mengklik kembali kota tersebut tanpa perlu mengetik ulang.
5. **Publikasi Online (Deployment)**: Proyek harus diunggah ke internet agar bisa dicoba langsung oleh penguji melalui tautan live.

---

## 3. Panduan Pengerjaan dari Nol (Build from Scratch)
Buatlah proyek ini dari folder kosong di komputer Anda sendiri:

### A. Struktur File Proyek
Buat dan susun file-file berikut:
```text
weather-app/
├── README.md                      # Penjelasan cara pakai, fitur, dan link live demo aplikasi
├── .gitignore                     # Mengabaikan file yang tidak perlu di-upload (misal: .DS_Store)
├── index.html                     # Halaman utama aplikasi (HTML semantik & aksesibel)
├── styles/
│   └── main.css                   # Tampilan CSS responsif dengan CSS Grid auto-fit
└── scripts/
    ├── forecast-helper.js         # Fungsi penyusun URL API dan pengolah data 7 hari
    ├── next-history.js            # Fungsi pengatur daftar riwayat 5 kota (tanpa mutasi array)
    └── app.js                     # Penghubung event tombol, manipulasi DOM, dan localStorage
```

### B. Hal-Hal yang Wajib Dibuat

#### 1. Halaman HTML Semantik & Aksesibilitas
- Gunakan struktur standar: `<!DOCTYPE html>`, `<html lang="id">`, `<header>`, `<main>`, `<section>`, dan `<footer>`.
- Buat form pencarian dengan `<form>`, input teks yang dipasangkan dengan `<label>` menggunakan atribut `for` dan `id`, serta tombol cari.
- Pasang kontainer status dengan atribut `role="status"` dan `aria-live="polite"` agar pesan loading atau error otomatis dibacakan oleh pembaca layar.
- Cantumkan sumber data resmi Open-Meteo pada footer dengan tautan aman (`target="_blank"` dan `rel="noopener noreferrer"`).
- **Penting**: Gunakan **jalur relatif** (`./styles/main.css`, `./scripts/...`) untuk memanggil file CSS dan JavaScript agar aset tidak rusak saat di-deploy online.

#### 2. Tampilan CSS Responsif (CSS Grid Auto-Fit)
- Gunakan reset sederhana:
  ```css
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  ```
- Buat kartu prakiraan cuaca 7 hari otomatis menyesuaikan layar dengan CSS Grid:
  ```css
  .forecast-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(8.5rem, 1fr));
    gap: 0.75rem;
  }
  ```
- Pastikan tampilan rapi di layar HP tanpa ada scroll samping yang bocor.
- Berikan gaya yang bersih dan kontras warna yang nyaman dibaca.

#### 3. Fungsi Logika JavaScript (Pure Functions)
Buat logika bisnis terpisah dari tampilan DOM:
- **`makeWeatherURL(city)`**:
  - Menyusun URL ke Open-Meteo Forecast API dengan parameter:
    - `latitude` dan `longitude`
    - `current: "temperature_2m,wind_speed_10m"`
    - `daily: "temperature_2m_max,temperature_2m_min"`
    - `forecast_days: "7"`
    - `timezone: "auto"`
- **`toForecastRows(data)`**:
  - Mengubah data harian mentah dari API (`daily.time`, `daily.temperature_2m_max`, `daily.temperature_2m_min`) menjadi array berisi 7 objek rapi:
    `[{ date: "2026-11-15", max: 32.5, min: 24.0 }, ...]`
  - Pastikan nilai suhu berupa angka valid menggunakan `Number.isFinite()`.
- **`nextHistory(prevHistory, newCity, max = 5)`**:
  - Menerima riwayat kota sebelumnya, nama kota baru, dan batas maksimal (5).
  - Bersihkan spasi kosong dan cegah nama kota yang sama muncul dua kali (*case-insensitive*).
  - Letakkan kota baru di urutan paling atas (indeks 0).
  - Batasi maksimal 5 item.
  - **Penting**: Jangan mengubah array asli `prevHistory`, selalu kembalikan array baru (*immutability*).

#### 4. Pengambilan Data API & Pencegahan Klik Ganda
- Lakukan pemanggilan 2 tahap menggunakan `async/await` dan `fetch()`:
  1. Cari koordinat nama kota di Geocoding API (`https://geocoding-api.open-meteo.com/v1/search?name={city}&count=1&language=id&format=json`).
  2. Ambil data cuaca dari Forecast API menggunakan koordinat tersebut.
- Pasang penjaga klik ganda di awal fungsi pencarian:
  ```javascript
  if (button && button.disabled) return;
  ```
- Matikan tombol pencarian saat loading (`button.disabled = true`), dan aktifkan kembali tombol tersebut di dalam blok `finally`.
- **Keamanan Anti-XSS**: Gunakan `textContent` saat menampilkan nama kota atau pesan teks ke layar, hindari penggunaan `innerHTML` dengan teks input pengguna.

#### 5. Simpan Riwayat Pencarian (`localStorage`)
- Simpan daftar 5 kota terakhir ke `localStorage` dengan nama key `bni-odp-weather-history-v1`.
- Gunakan `JSON.stringify` saat menyimpan dan `JSON.parse` saat membaca kembali data.
- Tampilkan riwayat sebagai tombol chip/badge yang bisa diklik untuk mencari cuaca kota tersebut secara instan.
- Sediakan tombol "Hapus Riwayat" untuk mengosongkan riwayat dari tampilan dan `localStorage`.

#### 6. Unggah & Rilis Online (Pilihan Deployment)
Anda bebas memilih salah satu dari 3 platform hosting gratis berikut untuk merilis aplikasi Anda ke internet:

- **Pilihan A: Vercel (Direkomendasikan)**
  - Hubungkan akun GitHub Anda ke [vercel.com](https://vercel.com).
  - Pilih repositori proyek Anda dan klik **Deploy**.
  - Aplikasi langsung aktif dengan URL resmi (contoh: `https://weather-app-bni.vercel.app`).

- **Pilihan B: GitHub Pages**
  - Di halaman repositori GitHub Anda, buka menu **Settings** > **Pages**.
  - Pada bagian **Build and deployment**, pilih branch `main` dan folder `/ (root)`, lalu klik **Save**.
  - Tunggu 1–2 menit hingga URL live aktif (contoh: `https://<username>.github.io/<repo-name>/`).

- **Pilihan C: Netlify**
  - Hubungkan repositori GitHub Anda di [netlify.com](https://netlify.com) atau drag-and-drop folder proyek langsung.
  - Aplikasi langsung aktif dengan URL live (contoh: `https://weather-bni-odp.netlify.app`).

> [!NOTE]
> Platform mana pun yang Anda pilih, pastikan tautan live tersebut dicantumkan pada berkas `README.md` repositori GitHub Anda dan dapat dibuka tanpa ada aset CSS/JS yang gagal dimuat.

---

## 4. Rubrik Penilaian Capstone 100 Poin

| No | Kategori | Skor | Bukti yang Dievaluasi |
| :---: | :--- | :---: | :--- |
| 1 | **Version Control & GitHub** | 10 | Riwayat commit terstruktur, repositori GitHub publik, dan berkas `README.md` rapi. |
| 2 | **HTML Semantik & Aksesibilitas** | 15 | Form berlabel, WAI-ARIA `role="status"` & `aria-live="polite"`, atribusi Open-Meteo, jalur relatif (`./`). |
| 3 | **CSS & Responsive Grid** | 15 | Tampilan kartu cuaca responsif dengan CSS Grid `repeat(auto-fit, minmax(8.5rem, 1fr))` tanpa overflow. |
| 4 | **Fungsi Murni & Transformasi Data** | 20 | `makeWeatherURL` (7 hari), `toForecastRows` (7 objek data valid), dan `nextHistory` (tanpa mutasi array asli). |
| 5 | **Integrasi API Asinkron & Guard** | 20 | Geocoding + Forecast API, status UI lengkap (loading/success/empty/error), guard tombol disabled di `finally`. |
| 6 | **Penyimpanan Lokal & Deployment Live** | 20 | Riwayat 5 kota di `localStorage`, tombol cari ulang & hapus, serta tautan live (Vercel / GitHub Pages / Netlify) berfungsi lancar. |
