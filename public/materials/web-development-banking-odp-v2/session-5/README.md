# Session 5: JavaScript Fundamentals — Starter Packs & Solutions

## 1. Programme Context
- **Curriculum Reference:** `researches/web-development-banking-odp-v2/curriculum.md` (Session 5: 3.5 Jam / 210 Menit)
- **Slide Deck Reference:** `slides-creation/web-development-banking-odp-v2/session-5.md` (103 Slides)
- **Target Audience:** Peserta BNI Officer Development Program (ODP IT) 2026
- **Sector Governance:** Standar Presisi Kalkulasi Finansial (Larangan implicit string concatenation pada nominal uang), Defensive Type Conversion, dan Disiplin Data Modeling Perbankan.

---

## 2. Directory Index & Syllabus Mapping

| Module / Folder | Segment in Deck | Topic & Focus Area | Starter (`1-starter`) | Solution (`2-solution`) |
| :--- | :--- | :--- | :--- | :--- |
| [`demo-1`](./demo-1/) | Slides 4–10 | **Runtime JavaScript (Browser vs Node.js)**<br>Eksekusi kode via Browser DevTools Console dan Node.js terminal CLI. Deteksi lingkungan eksekusi dan output diagnostik `console.log/info`. | Skrip unconfigured tanpa deteksi runtime | Skrip universal dengan deteksi platform otomatis |
| [`demo-2`](./demo-2/) | Slides 11–17 | **Variables & Data Types**<br>Deklarasi `const` vs `let` (larangan `var`), tipe data primitif (`number`, `string`, `boolean`, `null`, `undefined`), serta inspeksi tipe dengan `typeof`. | Deklarasi belum lengkap dan reassignment error | Manajemen variabel modern sesuai standar enterprise |
| [`demo-3`](./demo-3/) | Slides 18–22 | **Operator Aritmetika & Konversi Tipe**<br>Jebakan coercion string (`"5" + 2 = "52"`), konversi eksplisit `Number()`, deteksi `NaN`, dan validasi `Number.isFinite()`. | Bug kalkulasi transfer dana akibat pemaksaan string | Kalkulasi presisi dengan konversi eksplisit dan validasi |
| [`demo-4`](./demo-4/) | Slides 23–46 | **Struktur Data (Objects & Arrays)**<br>Indeks array berbasis 0, operasi `push()`/`pop()`, pemodelan transaksi perbankan dalam objek, serta perbedaan mutasi isi vs reassign binding `const`. | Array dan objek dengan properti belum lengkap | Model entitas transaksi dan mutasi array terkelola |
| [`hands-on-lab-5`](./hands-on-lab-5/) | Slides 47–51 | **Capstone Lab: Engine Perhitungan Transaksi Finansial (`transaksi.js`)**<br>Membangun fungsi `hitungTransaksi`, validasi boundary non-negatif, generator objek `buatTransaksi`, dan fungsi mutasi `kelolaNominal`. Termasuk challenge `pesanan.js`. | Scaffolded starter dengan 7 pending tests | 100% compliant reference solution (10/10 test lulus) + `pesanan.js` |

---

## 3. Structural Standard per Module
Setiap folder modul menerapkan arsitektur dua subfolder yang ketat:
- **`1-starter/`**: Kode baseline untuk trainee dengan bimbingan pedagogis dan komentar `TODO` bernomor.
- **`2-solution/`**: Solusi referensi instruktur berstandar industri dengan pengujian otomatis 100% lulus.

---

## 4. Cara Menjalankan & Verifikasi
1. **Menjalankan Modul Demo dengan Node.js:**
   ```bash
   node slides-materials/web-development-banking-odp-v2/session-5/demo-1/2-solution/runtime.js
   node slides-materials/web-development-banking-odp-v2/session-5/demo-2/2-solution/variables.js
   node slides-materials/web-development-banking-odp-v2/session-5/demo-3/2-solution/conversion.js
   node slides-materials/web-development-banking-odp-v2/session-5/demo-4/2-solution/structures.js
   ```
2. **Menjalankan Automated Test Harness:**
   ```bash
   cd slides-materials/web-development-banking-odp-v2/session-5/hands-on-lab-5/1-starter
   node scripts/test-runner.js
   ```
3. **Menguji Solusi Referensi Instruktur:**
   ```bash
   cd slides-materials/web-development-banking-odp-v2/session-5/hands-on-lab-5/2-solution
   node scripts/test-runner.js
   node pesanan.js
   ```
