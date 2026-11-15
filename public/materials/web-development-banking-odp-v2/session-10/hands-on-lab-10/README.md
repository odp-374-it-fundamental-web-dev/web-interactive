# Hands-on Lab 10: Persistent Search History & State Management (Milestone 4)

## 1. Latar Belakang & Deskripsi Masalah
Sebagai Software Engineer di Divisi IT Perbankan (BNI ODP IT 2026), Anda melanjutkan pengembangan Weather Web App ke **Milestone 4**: menambahkan fitur persistensi data client-side untuk menyimpan **riwayat pencarian kota** menggunakan `Window.localStorage` dan format JSON.

Penerapan ini harus mengikuti tata kelola keamanan dan ketahanan data perbankan:
- **Namespace Khusus**: Menggunakan key terisolasi `bni-odp-weather-history-v1`.
- **Perilaku Riwayat Terbaru**: Menyimpan maksimal **5 kota unik terbaru** di posisi paling depan (`index 0`). Jika kota sudah pernah dicari sebelumnya, posisinya dipindahkan ke depan tanpa duplikasi.
- **Toleransi Terhadap Data Korup**: Mengantisipasi kegagalan `JSON.parse()` dan memverifikasi skema data `Array.isArray()` dengan nilai fallback aman `[]`.
- **Interaktivitas Pencarian Ulang**: Setiap riwayat kota dirender sebagai tombol interaktif yang memicu `loadWeather(city)` saat diklik.
- **Penghapusan Terarah**: Tombol `#hapusRiwayat` menghapus key riwayat spesifik menggunakan `removeItem()` (bukan `clear()`).

---

## 2. Struktur Modul & Berkas
```text
hands-on-lab-10/
├── README.md                          # Dokumen spesifikasi bisnis & rubrik
├── 1-starter/                         # Workspace latihan trainee
│   ├── README.md                      # Panduan instruksional latihan
│   ├── index.html                     # Kerangka HTML dengan area riwayat
│   ├── styles/main.css                # Styling antarmuka cuaca & tombol riwayat
│   ├── scripts/
│   │   ├── app.js                     # Template skrip dengan TODO 1–6
│   │   └── test-runner.js             # Automated test harness trainee
└── 2-solution/                        # Solusi referensi instruktur
    ├── README.md                      # Panduan solusi dan arsitektur
    ├── index.html                     # HTML lengkap dengan tombol riwayat & favorit
    ├── styles/main.css                # Styling antarmuka lengkap
    ├── scripts/
    │   ├── app.js                     # Implementasi 100% compliant + challenge favorit
    │   └── test-runner.js             # Automated test harness solusi
```

---

## 3. Spesifikasi Teknis & Kebutuhan Bisnis

### A. Komponen HTML & Aksesibilitas (`index.html`)
- Area riwayat: `<div id="riwayatKota" class="history-list"></div>`
- Tombol pembersih: `<button id="hapusRiwayat" type="button">Hapus Riwayat</button>`
- Pemuatan skrip eksternal: `<script src="scripts/app.js" defer></script>`

### B. Helper Penyimpanan Defensif (Slide 25–26)
1. **`readHistory()`**:
   - Membaca `localStorage.getItem("bni-odp-weather-history-v1")`.
   - Menangani `null`, `SyntaxError`, dan memeriksa `Array.isArray(parsed)`.
   - Mengembalikan `[]` sebagai fallback aman.
2. **`saveHistory(cities)`**:
   - Memvalidasi parameter bertipe array.
   - Menyimpan `JSON.stringify(cities)` ke dalam `localStorage`.
   - Melindungi dari kemungkinan exception pada blok `try/catch`.

### C. Alur `rememberCity(city)` & Batas 5 Kota (Slide 29)
- Normalisasi nama kota.
- Filter riwayat lama untuk membuang duplikasi: `prev.filter(c => c.toLowerCase() !== city.toLowerCase())`.
- Sisipkan kota baru di depan: `[city, ...filtered].slice(0, 5)`.
- Simpan ke storage dan panggil `renderHistory()`.

### D. Render Tombol Riwayat & Pencarian Ulang (Slide 30)
- `riwayatContainer.replaceChildren()`.
- Untuk setiap kota, buat `<button type="button" class="btn-history">`.
- Pasang event `click` yang memicu pemanggilan `loadWeather(kota)`.

---

## 4. Challenge Mandiri (Slide 35–37)
Tambahkan fitur "Kota Favorit" dengan key `bni-odp-weather-favorites-v1` terpisah:
- Cek duplikasi menggunakan `.find()`.
- Urutkan tampilan favorit secara alfabetis A-Z menggunakan `localeCompare()`.
- Sediakan tombol hapus satuan per kota favorit.

---

## 5. Rubrik Penilaian (100 Poin)
| No | Kriteria Evaluasi | Bobot | Indikator Keberhasilan |
| :---: | :--- | :---: | :--- |
| 1 | **Struktur HTML & Riwayat** | 15% | Kontainer `#riwayatKota`, tombol `#hapusRiwayat`, dan skrip `defer` terpasang. |
| 2 | **Code Hygiene & XSS Defense** | 10% | Larangan `var`, rendering tombol riwayat memakai `textContent`. |
| 3 | **Storage Read & Corrupt Fallback** | 15% | `readHistory()` menangani nilai null dan JSON rusak dengan fallback `[]`. |
| 4 | **Deduplikasi & Batas 5 Kota** | 20% | `rememberCity` memindahkan kota ke `index 0` tanpa duplikasi dan membatasi maksimal 5 item. |
| 5 | **Render Tombol Riwayat & Re-Search** | 20% | Riwayat dirender sebagai elemen tombol yang memicu `loadWeather(kota)` saat diklik. |
| 6 | **Pembersihan Riwayat (`removeItem`)** | 20% | Tombol `#hapusRiwayat` menghapus key riwayat spesifik dan membersihkan DOM. |

---

## 6. Cara Menjalankan Uji Otomatis
```bash
# Menjalankan pengujian pada starter
cd slides-materials/web-development-banking-odp-v2/session-10/hands-on-lab-10/1-starter
node scripts/test-runner.js

# Menjalankan pengujian pada solusi
cd slides-materials/web-development-banking-odp-v2/session-10/hands-on-lab-10/2-solution
node scripts/test-runner.js
```
