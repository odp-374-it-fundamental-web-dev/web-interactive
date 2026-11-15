# Session 6: Conditional & Looping — Starter Packs & Solutions

## 1. Programme Context
- **Curriculum Reference:** `researches/web-development-banking-odp-v2/curriculum.md` (Session 6: 3.5 Jam / 210 Menit)
- **Slide Deck Reference:** `slides-creation/web-development-banking-odp-v2/session-6.md` (66 Slides)
- **Target Audience:** Peserta BNI Officer Development Program (ODP IT) 2026
- **Sector Governance:** Standar Logika Percabangan & Guard Clauses (Larangan nested `if` berlebih / *Pyramid of Doom*), Evaluasi Status Transaksi dengan `switch-case` Terkelola, serta Iterasi Defensif (`continue` untuk memfilter data cacat, `break` untuk abort kondisi darurat).

---

## 2. Directory Index & Syllabus Mapping

| Module / Folder | Segment in Deck | Topic & Focus Area | Starter (`1-starter`) | Solution (`2-solution`) |
| :--- | :--- | :--- | :--- | :--- |
| [`demo-1`](./demo-1/) | Slides 4–12 | **Operator Perbandingan & Logika Boolean**<br>Strict equality `===` vs loose `==`, identifikasi 8 nilai Falsy JavaScript, Nullish Coalescing `??` vs OR `\|\|`, serta evaluasi logika otorisasi perbankan. | Skrip evaluasi dengan loose comparison dan bug coercion | Implementasi strict equality dan evaluasi boolean deterministik |
| [`demo-2`](./demo-2/) | Slides 13–21 | **Percabangan `if/else` & Guard Clauses**<br>Refactoring *Pyramid of Doom* menjadi pola Guard Clause / *Fail-Fast*, validasi limit transfer harian dan kecukupan saldo rekening. | Kode bertingkat (*nested if*) rawan error kognitif | Arsitektur guard clause bersih dengan validasi fail-fast |
| [`demo-3`](./demo-3/) | Slides 22–30 | **Evaluasi Kasus dengan `switch-case`**<br>Pemetaan kode status transaksi perbankan (`SETTLED`, `SUCCESS`, `PENDING`, `REJECTED`, `EXPIRED`), disiplin kata kunci `break`, dan intentional fall-through. | Switch tanpa penanganan status gagal dan hilang `break` | Pemetaan status enterprise lengkap dengan audit fall-through |
| [`demo-4`](./demo-4/) | Slides 31–41 | **Iterasi Finansial (`for...of`, `while`, `break`, `continue`)**<br>Traversing batch transaksi, pemanfaatan `continue` untuk melewati transaksi anomali, dan `break` untuk menghentikan batch jika limit risiko terlampaui. | Loop konvensional tanpa kontrol alur dan filter | Pipeline iterasi defensif dengan skipping anomali dan safety stop |
| [`hands-on-lab-6`](./hands-on-lab-6/) | Slides 42–47 | **Capstone Lab: Rekapitulasi & Filtering Transaksi Finansial (`rekap-transaksi.js`)**<br>Membangun fungsi `rekapTransaksi` (dataset T01–T04), pengkategorian status `kategoriStatus` via switch-case, dan verifikasi PIN `validasiPin` via guard clauses. | Scaffolded starter dengan 8 pending tests | Solusi referensi 100% compliant (10/10 test harness lulus) |

---

## 3. Structural Standard per Module
Setiap modul menerapkan arsitektur dua subfolder yang ketat:
- **`1-starter/`**: Kode baseline untuk trainee dengan bimbingan pedagogis dan komentar `TODO` bernomor.
- **`2-solution/`**: Solusi referensi instruktur berstandar industri dengan pengujian otomatis 100% lulus.

---

## 4. Cara Menjalankan & Verifikasi
1. **Menjalankan Modul Demo dengan Node.js:**
   ```bash
   node slides-materials/web-development-banking-odp-v2/session-6/demo-1/2-solution/boolean.js
   node slides-materials/web-development-banking-odp-v2/session-6/demo-2/2-solution/branching.js
   node slides-materials/web-development-banking-odp-v2/session-6/demo-3/2-solution/switch.js
   node slides-materials/web-development-banking-odp-v2/session-6/demo-4/2-solution/loops.js
   ```
2. **Menjalankan Automated Test Harness pada Starter (Trainee):**
   ```bash
   cd slides-materials/web-development-banking-odp-v2/session-6/hands-on-lab-6/1-starter
   node scripts/test-runner.js
   ```
3. **Menguji Solusi Referensi Instruktur:**
   ```bash
   cd slides-materials/web-development-banking-odp-v2/session-6/hands-on-lab-6/2-solution
   node scripts/test-runner.js
   ```
