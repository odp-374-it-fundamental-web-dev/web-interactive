# Session 12: Capstone Mini Project & Deployment — Starter Packs & Solutions

## 1. Programme Context
- **Curriculum Reference:** `researches/web-development-banking-odp-v2/curriculum.md` (Session 12: 3.5 Jam / 210 Menit)
- **Slide Deck Reference:** `slides-creation/web-development-banking-odp-v2/session-12.md` (40 Slides)
- **Target Audience:** Peserta BNI Officer Development Program (ODP IT) 2026
- **Sector Governance & Capstone Focus:**
  - Integrasi akhir *Weather Web App* menggabungkan seluruh pilar web perbankan (HTML5 semantik, CSS Grid fluid, async API orchestration, pure functions, local storage).
  - Parameterisasi prakiraan harian 7 hari Open-Meteo (`forecast_days: "7"` & `daily: "temperature_2m_max,temperature_2m_min"`).
  - Transformasi data array paralel ke struktur objek baris harian (`toForecastRows`).
  - Tata letak responsif auto-fit (`repeat(auto-fit, minmax(8.5rem, 1fr))`) bebas overflow horizontal pada perangkat mobile.
  - Mitigasi bug jalur subpath (*relative paths*) untuk publikasi statis tanpa error 404 pada GitHub Pages.
  - Rubrik evaluasi komprehensif 100 poin berstandar Software Engineer perbankan.

---

## 2. Directory Index & Syllabus Mapping

| Module / Folder | Segment in Deck | Topic & Focus Area | Starter (`1-starter`) | Solution (`2-solution`) |
| :--- | :--- | :--- | :--- | :--- |
| [`demo-1`](./demo-1/) | Slides 4–9 | **7-Day Forecast URL Construction**<br>Penyusunan parameter Open-Meteo API (`forecast_days=7`, `daily=temperature_2m_max,temperature_2m_min`, `timezone=auto`) via `URLSearchParams`. | Kerangka URL builder dengan parameter belum lengkap | URL builder 100% valid dengan validasi tipe data |
| [`demo-2`](./demo-2/) | Slides 10–15 | **Daily Forecast Transformation**<br>Pemetaan array paralel Open-Meteo (`time`, `temperature_2m_max`, `temperature_2m_min`) menjadi 7 baris objek terstruktur `{ date, max, min }`. | Fungsi pemetaan stub dengan return array kosong | Fungsi murni `toForecastRows` teruji 100% |
| [`demo-3`](./demo-3/) | Slides 17–22 | **Responsive Auto-Fit CSS Grid**<br>Implementasi CSS Grid `repeat(auto-fit, minmax(8.5rem, 1fr))` untuk kartu prakiraan cuaca fluid di berbagai ukuran layar. | Layout flexbox dasar dengan wrapping kaku | Tata letak modern auto-fit grid dengan hover styling |
| [`demo-4`](./demo-4/) | Slides 24–29 | **GitHub Pages Deployment Readiness**<br>Audit jalur absolut vs relatif (`./`), verifikasi scope origin `localStorage`, dan panduan live release. | Proyek dengan bug jalur absolut (`/styles/main.css`) | Proyek bersih bersertifikasi jalur relatif |
| [`hands-on-lab-12`](./hands-on-lab-12/) | Slides 30–39 | **Capstone Mini Project: Weather Web App Final Release**<br>Rilis final aplikasi cuaca: modularitas `forecast-helper.js` & `next-history.js`, grid 7 hari, race condition guard, dan kesiapan hosting. | Scaffolded starter dengan 5 pending TODOs (6/11 passed) | Solusi referensi produksi 100% compliant (11/11 passed) |

---

## 3. Structural Standard per Module
Setiap modul menerapkan arsitektur dua subfolder yang ketat:
- **`1-starter/`**: Kode baseline untuk trainee dengan bimbingan pedagogis dan komentar `TODO` bernomor.
- **`2-solution/`**: Solusi referensi instruktur berstandar industri dengan pengujian otomatis 100% lulus.

---

## 4. Cara Menjalankan & Verifikasi
1. **Menjalankan Modul Demo dengan Node.js / Browser:**
   ```bash
   node slides-materials/web-development-banking-odp-v2/session-12/demo-1/2-solution/forecast-url.js
   node slides-materials/web-development-banking-odp-v2/session-12/demo-2/2-solution/forecast-rows.js
   open slides-materials/web-development-banking-odp-v2/session-12/demo-3/2-solution/index.html
   open slides-materials/web-development-banking-odp-v2/session-12/demo-4/2-solution/index.html
   ```
2. **Menjalankan Automated Test Harness pada Starter (Trainee):**
   ```bash
   cd slides-materials/web-development-banking-odp-v2/session-12/hands-on-lab-12/1-starter
   node scripts/test-runner.js
   ```
3. **Menguji Solusi Referensi Instruktur:**
   ```bash
   cd slides-materials/web-development-banking-odp-v2/session-12/hands-on-lab-12/2-solution
   node scripts/test-runner.js
   ```
