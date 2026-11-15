# Session 10: Client-Side Data & UI State Management — Starter Packs & Solutions

## 1. Programme Context
- **Curriculum Reference:** `researches/web-development-banking-odp-v2/curriculum.md` (Session 10: 3.5 Jam / 210 Menit)
- **Slide Deck Reference:** `slides-creation/web-development-banking-odp-v2/session-10.md` (38 Slides)
- **Target Audience:** Peserta BNI Officer Development Program (ODP IT) 2026
- **Sector Governance:** Standar Pengelolaan Data Client-Side & Ketahanan Penyimpanan:
  - Disiplin namespace key terisolasi (`bni-odp-weather-history-v1`) untuk mencegah tabrakan data.
  - Penanganan defensif terhadap data korup via `try/catch` dan validasi skema `Array.isArray()`.
  - Larangan mutasi langsung pada array sumber (disiplin `[...array].sort()` dan immutabilitas).
  - Larangan penggunaan `localStorage.clear()` demi menjaga integritas data aplikasi lain pada origin yang sama.

---

## 2. Directory Index & Syllabus Mapping

| Module / Folder | Segment in Deck | Topic & Focus Area | Starter (`1-starter`) | Solution (`2-solution`) |
| :--- | :--- | :--- | :--- | :--- |
| [`demo-1`](./demo-1/) | Slides 4–11 | **Array Searching (`find` vs `filter` vs Linear)**<br>Perbedaan linear search manual, `find()` (1 item pertama atau `undefined`), dan `filter()` (array kecocokan atau `[]`). | Kerangka pencarian tanpa implementasi method | Pencarian lengkap dengan penanganan kondisi data tidak ditemukan |
| [`demo-2`](./demo-2/) | Slides 12–18 | **Array Sorting & Immutability**<br>Jebakan default UTF-16 pada `sort()`, comparator numerik `(a, b) => a - b`, comparator string `localeCompare("id")`, dan pencegahan mutasi via `[...array].sort()`. | Skrip sort bawaan yang memicu bug leksikografis | Pengurutan numerik dan nama alfabetis non-mutating |
| [`demo-3`](./demo-3/) | Slides 20–26 | **JSON Serialization & Defensive Local Storage**<br>Operasi `JSON.stringify` dan `JSON.parse`, validasi skema `Array.isArray()`, isolasi key storage, serta safe fallback `[]` saat JSON korup. | Storage helper tanpa penanganan exception | Helper `readHistory`, `saveHistory`, dan `clearHistory` enterprise |
| [`demo-4`](./demo-4/) | Slides 27–34 | **Dynamic History UI & Re-Search Buttons**<br>Rendering tombol riwayat interaktif ke `#riwayatKota`, pembersihan kontainer via `replaceChildren()`, dan tombol `#hapusRiwayat`. | Kontainer riwayat dengan click handler kosong | Daftar tombol riwayat interaktif yang memicu pencarian ulang |
| [`hands-on-lab-10`](./hands-on-lab-10/) | Slides 27–38 | **Capstone Lab: Persistent Search History (Milestone 4)**<br>Membangun fitur riwayat hingga 5 kota unik terbaru di Weather Web App, integrasi `rememberCity()`, tombol `#hapusRiwayat`, dan challenge kota favorit A-Z. | Scaffolded starter dengan 3 pending tests | Solusi referensi 100% compliant (10/10 test harness lulus) + kota favorit |

---

## 3. Structural Standard per Module
Setiap modul menerapkan arsitektur dua subfolder yang ketat:
- **`1-starter/`**: Kode baseline untuk trainee dengan bimbingan pedagogis dan komentar `TODO` bernomor.
- **`2-solution/`**: Solusi referensi instruktur berstandar industri dengan pengujian otomatis 100% lulus.

---

## 4. Cara Menjalankan & Verifikasi
1. **Menjalankan Modul Demo dengan Node.js / Browser:**
   ```bash
   node slides-materials/web-development-banking-odp-v2/session-10/demo-1/2-solution/searching.js
   node slides-materials/web-development-banking-odp-v2/session-10/demo-2/2-solution/sorting.js
   node slides-materials/web-development-banking-odp-v2/session-10/demo-3/2-solution/storage-helper.js
   open slides-materials/web-development-banking-odp-v2/session-10/demo-4/2-solution/index.html
   ```
2. **Menjalankan Automated Test Harness pada Starter (Trainee):**
   ```bash
   cd slides-materials/web-development-banking-odp-v2/session-10/hands-on-lab-10/1-starter
   node scripts/test-runner.js
   ```
3. **Menguji Solusi Referensi Instruktur:**
   ```bash
   cd slides-materials/web-development-banking-odp-v2/session-10/hands-on-lab-10/2-solution
   node scripts/test-runner.js
   ```
