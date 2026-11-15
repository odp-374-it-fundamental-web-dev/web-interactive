# Session 7: Functions & Data Processing — Starter Packs & Solutions

## 1. Programme Context
- **Curriculum Reference:** `researches/web-development-banking-odp-v2/curriculum.md` (Session 7: 3.5 Jam / 210 Menit)
- **Slide Deck Reference:** `slides-creation/web-development-banking-odp-v2/session-7.md` (43 Slides)
- **Target Audience:** Peserta BNI Officer Development Program (ODP IT) 2026
- **Sector Governance:** Standar Fungsi Rekapitulasi Data Keuangan (Larangan *side-effects* / mutasi data asal), Disiplin Nilai Awal Akumulasi (`initialValue: 0` pada `reduce()`), serta Pola *Guard Clauses* pada Validasi Input Transaksi & Otentikasi.

---

## 2. Directory Index & Syllabus Mapping

| Module / Folder | Segment in Deck | Topic & Focus Area | Starter (`1-starter`) | Solution (`2-solution`) |
| :--- | :--- | :--- | :--- | :--- |
| [`demo-1`](./demo-1/) | Slides 4–14 | **Function Declaration, Expression, & Arrow Function**<br>Perbedaan hoisting deklarasi vs ekspresi `const`, sintaks ringkas Arrow Function (`=>`), dan trik implicit return object literal `({ ... })`. | Kerangka fungsi kosong dengan nilai kembalian belum dihubungkan | Tiga pola fungsi modern dengan penanganan error tipe parameter |
| [`demo-2`](./demo-2/) | Slides 15–16 | **Early Return Pattern (`checkLogin`)**<br>Simulasi pengecekan kredensial dengan validasi tipe `typeof`, penolakan dini (*fail-fast*) `"input salah"`, evaluasi kredensial `"login berhasil"`, dan fallback `"coba lagi"`. | Fungsi stub dengan pengembalian string kosong | Implementasi guard clause modular dengan verifikasi seluruh jalur return |
| [`demo-3`](./demo-3/) | Slides 17–22 | **Synchronous Callbacks & Immutability**<br>Mengirim fungsi sebagai argumen (referensi vs invoke), implementasi higher-order function sederhana, dan verifikasi jaminan bahwa array input tidak mengalami mutasi. | Fungsi penampung tanpa iterasi callback | Higher-order function dengan verifikasi status mutasi data |
| [`demo-4`](./demo-4/) | Slides 23–35 | **Array of Objects & Built-in Methods**<br>Pemrosesan data nasabah perbankan dengan `forEach()` (side effect), `map()` (transformasi), `filter()` (penyaringan), `reduce()` (akumulasi), serta teknik *method chaining*. | Dataset nasabah dengan pemanggilan method belum terisi | Pipeline pemrosesan data lengkap dan tabel inspeksi DevTools |
| [`hands-on-lab-7`](./hands-on-lab-7/) | Slides 36–42 | **Capstone Lab: Financial Data Processing Engine (`banking-engine.js`)**<br>Membangun fungsi `checkLogin`, `ambilValid`, `ambilRingkasan`, `hitungTotal` (dataset T01–T04), serta penyelesaian challenge mandiri `rekap-pesanan.js`. | Scaffolded starter dengan 6 pending tests | Solusi referensi 100% compliant (10/10 test harness lulus) + `rekap-pesanan.js` |

---

## 3. Structural Standard per Module
Setiap modul menerapkan arsitektur dua subfolder yang ketat:
- **`1-starter/`**: Kode baseline untuk trainee dengan bimbingan pedagogis dan komentar `TODO` bernomor.
- **`2-solution/`**: Solusi referensi instruktur berstandar industri dengan pengujian otomatis 100% lulus.

---

## 4. Cara Menjalankan & Verifikasi
1. **Menjalankan Modul Demo dengan Node.js:**
   ```bash
   node slides-materials/web-development-banking-odp-v2/session-7/demo-1/2-solution/functions.js
   node slides-materials/web-development-banking-odp-v2/session-7/demo-2/2-solution/auth.js
   node slides-materials/web-development-banking-odp-v2/session-7/demo-3/2-solution/callbacks.js
   node slides-materials/web-development-banking-odp-v2/session-7/demo-4/2-solution/processing.js
   ```
2. **Menjalankan Automated Test Harness pada Starter (Trainee):**
   ```bash
   cd slides-materials/web-development-banking-odp-v2/session-7/hands-on-lab-7/1-starter
   node scripts/test-runner.js
   ```
3. **Menguji Solusi Referensi Instruktur:**
   ```bash
   cd slides-materials/web-development-banking-odp-v2/session-7/hands-on-lab-7/2-solution
   node scripts/test-runner.js
   node rekap-pesanan.js
   ```
