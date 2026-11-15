# Weather Web App (Capstone Mini Project) — Instructor Reference Solution

Dokumen ini merupakan panduan solusi referensi instruktur untuk proyek akhir **Weather Web App (Capstone Mini Project)** pada kurikulum **BNI ODP IT 2026**.

Solusi ini mendemonstrasikan implementasi web modern dengan kepatuhan 100% terhadap standar perbankan: keandalan, modularitas, keamanan XSS, performa, dan kesiapan deployment statis.

---

## 1. Arsitektur & Prinsip Desain Solusi

### A. Modularitas Berbasis Pure Functions
- `scripts/forecast-helper.js`: Memisahkan logika pembentukan URL API dan transformasi data respons menjadi fungsi murni tanpa ketergantungan pada DOM.
- `scripts/next-history.js`: Mengisolasi manipulasi array riwayat (`nextHistory`) sehingga bebas dari efek samping (*side effects*) dan menjaga immutabilitas data.

### B. Pertahanan Concurrency & Race Condition
- Guard `if (button && button.disabled) return;` diletakkan tepat di baris awal `loadWeather` untuk mencegah *multiple submission* akibat klik cepat pengguna atau jaringan lambat.
- Status tombol `disabled = true` secara konsisten dikontrol melalui mesin status `setState("loading")` dan dijamin kembali normal pada blok `finally`.

### C. Keamanan DOM & XSS Prevention
- Semua pembaruan teks (nama kota, suhu, arah angin, tanggal prakiraan) memanfaatkan properti `textContent` dan metode `replaceChildren()`.
- Tidak ada interpolasi string HTML mentah ke dalam `innerHTML`.

### D. Desain Responsif Mobile-First
- Grid prakiraan 7 hari menggunakan deklarasi modern:
  ```css
  grid-template-columns: repeat(auto-fit, minmax(8.5rem, 1fr));
  ```
  Kartu cuaca secara dinamis mengisi baris pada monitor desktop lebar dan melipat secara proporsional ke baris baru pada layar tablet dan ponsel tanpa menghasilkan overflow horizontal.

### E. Kesiapan Deployment GitHub Pages
- Seluruh tautan CSS (`./styles/main.css`) dan skrip (`./scripts/...`) menggunakan jalur relatif (*relative path*) berspesifikasi `./` sehingga tidak rusak ketika dijalankan di bawah subpath repositori (`https://user.github.io/repo/`).

---

## 2. Verifikasi Test Harness

Untuk memvalidasi kelulusan solusi 100%:

```bash
cd slides-materials/web-development-banking-odp-v2/session-12/hands-on-lab-12/2-solution
node scripts/test-runner.js
```

### Hasil yang Diharapkan:
```text
=================================================================
AUTOMATED TEST HARNESS: SESSION 12 CAPSTONE LAB VERIFICATION
=================================================================

[SUITE 1: HTML Architecture & Relative Paths]
  ✔ PASS: [HTML Landmarks] HTML contains #formCuaca, #forecast, and #riwayatKota
  ✔ PASS: [Deployment Path] HTML uses relative paths (./styles/... and ./scripts/...) for GitHub Pages
  ✔ PASS: [Attribution] Mandatory Open-Meteo attribution present

[SUITE 2: Code Hygiene & Security]
  ✔ PASS: [Syntax Hygiene] No legacy var keyword used in any script
  ✔ PASS: [XSS Security] DOM updates use textContent safely without innerHTML injection

[SUITE 3: 7-Day Forecast URL Builder]
  ✔ PASS: [Forecast URL] makeWeatherURL constructs valid URL with forecast_days=7 and daily parameters

[SUITE 4: Pure Function toForecastRows]
  ✔ PASS: [Data Transform] toForecastRows maps parallel arrays into 7 daily row objects

[SUITE 5: Responsive Auto-Fit CSS Grid]
  ✔ PASS: [Responsive CSS] CSS defines responsive grid using repeat(auto-fit, minmax(...))

[SUITE 6: Pure Function nextHistory & Immutability]
  ✔ PASS: [History Logic] nextHistory creates unmutated, deduplicated history array with city at index 0

[SUITE 7: Double-Request Guard in loadWeather]
  ✔ PASS: [Race Condition] loadWeather contains double-request fail-fast guard 'if (button.disabled) return;'

[SUITE 8: Forecast Card DOM Rendering]
  ✔ PASS: [Forecast Renderer] renderForecast function exists to populate #forecast list items

=================================================================
LAB RESULTS: 11/11 Checks Passed (100%)
✔ EXCELLENT: 100% Acceptance Criteria Satisfied!
=================================================================
```
