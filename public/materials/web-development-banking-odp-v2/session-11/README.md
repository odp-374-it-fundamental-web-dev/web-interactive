# Session 11: Debugging, Testing & Project Integration — Starter Packs & Solutions

## 1. Programme Context
- **Curriculum Reference:** `researches/web-development-banking-odp-v2/curriculum.md` (Session 11: 3.5 Jam / 210 Menit)
- **Slide Deck Reference:** `slides-creation/web-development-banking-odp-v2/session-11.md` (39 Slides)
- **Target Audience:** Peserta BNI Officer Development Program (ODP IT) 2026
- **Sector Governance:** Standar Quality Assurance (QA) & Root-Cause Analysis (RCA) Perbankan:
  - Investigasi sistematis berbasis bukti (Langkah Reproduksi, Expected vs Actual, DevTools Sources Breakpoint).
  - Isolasi logika bisnis murni (*Pure Functions*) untuk pengujian unit deterministik (`nextHistory`).
  - Pencegahan race condition dan pengiriman ganda transaksi (*double-submit guard*).
  - Jaminan kebersihan lingkungan pengujian (larangan kode testing startup `removeItem` di kode produksi).

---

## 2. Directory Index & Syllabus Mapping

| Module / Folder | Segment in Deck | Topic & Focus Area | Starter (`1-starter`) | Solution (`2-solution`) |
| :--- | :--- | :--- | :--- | :--- |
| [`demo-1`](./demo-1/) | Slides 4–11 | **Evidence-Based Debugging & Breakpoints**<br>Langkah reproduksi bug, investigasi crash index Geocoding (`TypeError`), dan perbaikan defensif `data.results?.[0] ?? null`. | Fungsi bermasalah dengan akses indeks di luar batas | Investigasi RCA lengkap dan perbaikan optional chaining |
| [`demo-2`](./demo-2/) | Slides 12–16 | **Network Inspection & Storage Startup Bug Fix**<br>Melacak penyebab hilangnya data storage saat reload, isolasi baris residual testing, dan perbaikan pemanggilan `removeItem`. | Skrip dengan bug residual pembersih storage saat startup | Persistensi data storage utuh antar-reload |
| [`demo-3`](./demo-3/) | Slides 18–24 | **Pure Function Unit Testing (`console.assert`)**<br>Pemisahan fungsi murni `nextHistory` dari DOM dan storage, siklus Red-Green testing, dan pengujian boundary/immutabilitas. | Kerangka fungsi stub dengan assertion yang gagal | Modul fungsi murni teruji 100% lulus assertion |
| [`demo-4`](./demo-4/) | Slides 30–35 | **Race Condition Guard & Double-Submit Prevention**<br>Mitigasi request tumpang tindih dengan guard clause `if (button.disabled) return;` dan pemulihan pada blok `finally`. | Handler tombol tanpa proteksi spam klik | Alur transaksi terlindungi dari spam klik berulang |
| [`hands-on-lab-11`](./hands-on-lab-11/) | Slides 30–38 | **Capstone Lab: Weather Web App Hardening (Milestone 5)**<br>Integrasi fungsi murni `nextHistory.js`, pengujian unit deduplikasi & batas 5 item, guard race condition, dan kesiapan rilis. | Scaffolded starter dengan 4 pending tests | Solusi referensi 100% compliant (10/10 test harness lulus) |

---

## 3. Structural Standard per Module
Setiap modul menerapkan arsitektur dua subfolder yang ketat:
- **`1-starter/`**: Kode baseline untuk trainee dengan bimbingan pedagogis dan komentar `TODO` bernomor.
- **`2-solution/`**: Solusi referensi instruktur berstandar industri dengan pengujian otomatis 100% lulus.

---

## 4. Cara Menjalankan & Verifikasi
1. **Menjalankan Modul Demo dengan Node.js / Browser:**
   ```bash
   node slides-materials/web-development-banking-odp-v2/session-11/demo-1/2-solution/debug-bug.js
   open slides-materials/web-development-banking-odp-v2/session-11/demo-2/2-solution/index.html
   node slides-materials/web-development-banking-odp-v2/session-11/demo-3/2-solution/test-assert.js
   open slides-materials/web-development-banking-odp-v2/session-11/demo-4/2-solution/index.html
   ```
2. **Menjalankan Automated Test Harness pada Starter (Trainee):**
   ```bash
   cd slides-materials/web-development-banking-odp-v2/session-11/hands-on-lab-11/1-starter
   node scripts/test-runner.js
   ```
3. **Menguji Solusi Referensi Instruktur:**
   ```bash
   cd slides-materials/web-development-banking-odp-v2/session-11/hands-on-lab-11/2-solution
   node scripts/test-runner.js
   ```
