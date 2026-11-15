# Session 9: Asynchronous JS & API Integration — Starter Packs & Solutions

## 1. Programme Context
- **Curriculum Reference:** `researches/web-development-banking-odp-v2/curriculum.md` (Session 9: 3.5 Jam / 210 Menit)
- **Slide Deck Reference:** `slides-creation/web-development-banking-odp-v2/session-9.md` (44 Slides)
- **Target Audience:** Peserta BNI Officer Development Program (ODP IT) 2026
- **Sector Governance:** Standar Integrasi API Layanan Eksternal Perbankan:
  - Validasi ketat kode status HTTP (`response.ok`) dan penanganan error jaringan.
  - Pencegahan double-request / klik ganda dengan penonaktifan tombol submit saat status `loading`.
  - Pemulihan antarmuka terjamin pada blok `finally`.
  - Keamanan rendering anti-XSS (`textContent`) dan atribusi layanan eksternal (Open-Meteo).

---

## 2. Directory Index & Syllabus Mapping

| Module / Folder | Segment in Deck | Topic & Focus Area | Starter (`1-starter`) | Solution (`2-solution`) |
| :--- | :--- | :--- | :--- | :--- |
| [`demo-1`](./demo-1/) | Slides 4–10 | **Eksekusi Asinkron & Event Loop**<br>Perbedaan blocking CPU vs non-blocking I/O, antrean task queue `setTimeout(..., 0)`, dan urutan output konsol (`A -> C -> B`). | Skrip prediksi urutan alur dengan callback kosong | Pembuktian Event Loop dan beban komputasi CPU sinkron |
| [`demo-2`](./demo-2/) | Slides 11–21 | **Promise Lifecycle & Modern `async/await`**<br>Tiga state Promise (`pending`, `fulfilled`, `rejected`), pembuatan Promise `cekLimitKredit`, konsumsi via `.then()` chaining vs `async/await` dengan `try/catch/finally`. | Template fungsi Promise dengan executor belum lengkap | Simulasi pengajuan kredit perbankan dengan audit trail pada blok `finally` |
| [`demo-3`](./demo-3/) | Slides 24–26 | **Fetch API & Helper `getJSON(url)`**<br>Membaca header dan body JSON, validasi boolean `response.ok`, serta melempar error eksplisit pada status HTTP 4xx/5xx agar tertangkap di blok `catch`. | Kerangka helper getJSON tanpa validasi status | Helper getJSON enterprise dengan penanganan HTTP 400 dan 404 |
| [`demo-4`](./demo-4/) | Slides 33 | **UI State Machine & Double-Request Prevention**<br>Arsitektur state UI (`loading`, `success`, `empty`, `error`, `invalid`) dan penonaktifan tombol submit untuk mencegah spam request pengguna. | Halaman dengan fungsi state belum terisi | State machine responsif dengan pemulihan tombol pada blok `finally` |
| [`hands-on-lab-9`](./hands-on-lab-9/) | Slides 31–43 | **Capstone Lab: Weather Web App (Milestone 3)**<br>Membangun aplikasi cuaca end-to-end terintegrasi Open-Meteo: `findCity` (Geocoding API) dan `fetchWeather` (Forecast API), state UI terpadu, dan challenge pilihan 5 kota. | Scaffolded starter dengan 4 pending tests | Solusi referensi 100% compliant (10/10 test harness lulus) + challenge |

---

## 3. Structural Standard per Module
Setiap modul menerapkan arsitektur dua subfolder yang ketat:
- **`1-starter/`**: Kode baseline untuk trainee dengan bimbingan pedagogis dan komentar `TODO` bernomor.
- **`2-solution/`**: Solusi referensi instruktur berstandar industri dengan pengujian otomatis 100% lulus.

---

## 4. Cara Menjalankan & Verifikasi
1. **Menjalankan Modul Demo dengan Node.js / Browser:**
   ```bash
   node slides-materials/web-development-banking-odp-v2/session-9/demo-1/2-solution/async-order.js
   node slides-materials/web-development-banking-odp-v2/session-9/demo-2/2-solution/promises.js
   node slides-materials/web-development-banking-odp-v2/session-9/demo-3/2-solution/fetch-helper.js
   open slides-materials/web-development-banking-odp-v2/session-9/demo-4/2-solution/index.html
   ```
2. **Menjalankan Automated Test Harness pada Starter (Trainee):**
   ```bash
   cd slides-materials/web-development-banking-odp-v2/session-9/hands-on-lab-9/1-starter
   node scripts/test-runner.js
   ```
3. **Menguji Solusi Referensi Instruktur:**
   ```bash
   cd slides-materials/web-development-banking-odp-v2/session-9/hands-on-lab-9/2-solution
   node scripts/test-runner.js
   ```
