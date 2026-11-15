# Hands-on Lab 11: Unit Testing, Bug Hardening & Milestone 5 Final Integration

## 1. Latar Belakang & Deskripsi Masalah
Sebagai Software Engineer di Divisi IT Perbankan (BNI ODP IT 2026), Anda ditugaskan menyelesaikan **Milestone 5: Pengerasan Kualitas (*Hardening*), Pengujian Unit, dan Integrasi Akhir** pada Weather Web App sebelum fase rilis deployment produksi.

Fokus rekayasa perangkat lunak pada lab ini meliputi:
1. **Pemisahan Logika Murni (*Pure Function Separation*)**:
   - Memindahkan kalkulasi array riwayat kota ke dalam berkas modular `scripts/next-history.js` (`nextHistory(prev, newCity, max = 5)`).
   - Menjamin fungsi bersifat murni (*pure function*): deterministik, bebas efek samping DOM/storage, dan tidak memutasi array input asal.
2. **Pengujian Unit Otomatis**:
   - Menulis pengujian unit assertion untuk memverifikasi penambahan ke array kosong, pemindahan kota duplikat ke depan, dan pemotongan batas maksimal 5 item.
3. **Pencegahan Race Condition di UI**:
   - Menambahkan guard clause `if (button && button.disabled) return;` di awal fungsi `loadWeather()` agar klik ganda yang cepat tidak memicu request tumpang tindih.
4. **Verifikasi Bebas Bug Startup**:
   - Memastikan tidak ada sisa perintah pembersih storage `localStorage.removeItem()` yang tereksekusi otomatis saat startup aplikasi.

---

## 2. Struktur Modul & Berkas
```text
hands-on-lab-11/
├── README.md                          # Dokumen spesifikasi bisnis & rubrik
├── 1-starter/                         # Workspace latihan trainee
│   ├── README.md                      # Panduan instruksional latihan
│   ├── index.html                     # Kerangka HTML aplikasi terintegrasi
│   ├── styles/main.css                # Styling antarmuka
│   ├── scripts/
│   │   ├── next-history.js            # Modul fungsi murni (TODO 1)
│   │   ├── app.js                     # Skrip integrasi aplikasi (TODO 2–4)
│   │   └── test-runner.js             # Automated test harness trainee
└── 2-solution/                        # Solusi referensi instruktur
    ├── README.md                      # Panduan solusi dan arsitektur
    ├── index.html                     # HTML lengkap siap deployment
    ├── styles/main.css                # Styling antarmuka lengkap
    ├── scripts/
    │   ├── next-history.js            # Implementasi fungsi murni 100% compliant
    │   ├── app.js                     # Integrasi aplikasi 100% terlindungi
    │   └── test-runner.js             # Automated test harness solusi
```

---

## 3. Spesifikasi Teknis & Kebutuhan Bisnis

### A. Fungsi Murni `nextHistory(prev, newCity, max = 5)`
- Menerima parameter:
  - `prev` (`string[]`): Array riwayat kota saat ini.
  - `newCity` (`string`): Nama kota baru yang dicari.
  - `max` (`number`, default `5`): Batas panjang maksimal riwayat.
- Aturan logika:
  - Jika `newCity` kosong atau bukan string, kembalikan `prev`.
  - Bersihkan spasi ujung dengan `.trim()`.
  - Filter `prev` secara *case-insensitive* untuk membuang duplikasi kota.
  - Kembalikan array baru dengan `newCity` di posisi terdepan (`index 0`) dipotong hingga `max` elemen (`.slice(0, max)`).
  - **Larangan**: Tidak boleh ada mutasi `prev` (`no splice/push/pop/shift/unshift` pada array masukan).

### B. Integrasi `rememberCity(city)` di `app.js`
- Membaca `prev = readHistory()`.
- Menghitung `next = nextHistory(prev, city, 5)`.
- Menyimpan ke storage via `saveHistory(next)` dan me-render ulang UI via `renderHistory()`.

### C. Guard Race Condition di `loadWeather(name)`
- Pada baris pertama `loadWeather(name)`:
  ```javascript
  if (button && button.disabled) return;
  ```

---

## 4. Rubrik Penilaian (100 Poin)
| No | Kriteria Evaluasi | Bobot | Indikator Keberhasilan |
| :---: | :--- | :---: | :--- |
| 1 | **Struktur HTML & Integrasi** | 15% | Seluruh elemen form, status, hasil, dan riwayat terintegrasi dengan pemuatan skrip `defer`. |
| 2 | **Code Hygiene & XSS Defense** | 10% | Tidak ada kata kunci `var`, pembaruan DOM berbasis teks menggunakan `textContent`. |
| 3 | **Fungsi Murni `nextHistory` (Deduplikasi)** | 15% | Memindahkan nama kota duplikat ke posisi `index 0` tanpa duplikasi (*case-insensitive*). |
| 4 | **Fungsi Murni `nextHistory` (Batas Max 5)** | 15% | Membatasi hasil maksimal 5 elemen dan menangani array kosong. |
| 5 | **Jaminan Immutabilitas** | 15% | `nextHistory` tidak memutasi array input `prev` (pengujian pure function). |
| 6 | **Guard Race Condition & Bebas Bug Startup** | 30% | `loadWeather` memiliki guard `if (button.disabled) return;` dan tidak ada pembersihan storage otomatis saat startup. |

---

## 5. Cara Menjalankan Uji Otomatis
```bash
# Menjalankan pengujian pada starter
cd slides-materials/web-development-banking-odp-v2/session-11/hands-on-lab-11/1-starter
node scripts/test-runner.js

# Menjalankan pengujian pada solusi
cd slides-materials/web-development-banking-odp-v2/session-11/hands-on-lab-11/2-solution
node scripts/test-runner.js
```
