# Session 8: DOM, Events & Form Interaction — Starter Packs & Solutions

## 1. Programme Context
- **Curriculum Reference:** `researches/web-development-banking-odp-v2/curriculum.md` (Session 8: 3.5 Jam / 210 Menit)
- **Slide Deck Reference:** `slides-creation/web-development-banking-odp-v2/session-8.md` (45 Slides)
- **Target Audience:** Peserta BNI Officer Development Program (ODP IT) 2026
- **Sector Governance:** Standar Interaksi DOM Enterprise & Keamanan Web Perbankan:
  - Mitigasi Cross-Site Scripting (XSS) melalui penetapan teks aman via `textContent` (larangan `innerHTML` pada data masukan pengguna).
  - Penghindaran kebocoran performa memori pada `removeEventListener` dengan referensi fungsi bernama yang identik.
  - Aksesibilitas formulir keuangan dengan atribut WAI-ARIA (`role="status"`, `aria-live="polite"`).
  - Penghindaran duplikasi antarmuka dengan metode modern `replaceChildren()`.

---

## 2. Directory Index & Syllabus Mapping

| Module / Folder | Segment in Deck | Topic & Focus Area | Starter (`1-starter`) | Solution (`2-solution`) |
| :--- | :--- | :--- | :--- | :--- |
| [`demo-1`](./demo-1/) | Slides 4–14 | **DOM Selection & Traversal**<br>Perbedaan `getElementById`, `querySelector`, dan `querySelectorAll` (NodeList vs HTMLCollection), penanganan node `null`, traversal hirarki DOM, serta atribut script `defer`. | Halaman dengan pemanggilan selektor kosong | Seleksi elemen lengkap dengan traversal parent/sibling dan logging |
| [`demo-2`](./demo-2/) | Slides 15–20 | **Safe DOM Modification & Anti-XSS**<br>Perbandingan keamanan `textContent` vs `innerHTML` menghadapi payload injeksi skrip, manipulasi kelas dinamis dengan `classList` (`add`, `remove`, `toggle`), serta pembuatan elemen baru. | Template kartu dengan rendering belum aman | Penanganan rendering aman dari bahaya XSS dan tombol interaktif status kartu |
| [`demo-3`](./demo-3/) | Slides 22–26 | **Event Listeners & Event Object**<br>Mekanisme callback event browser, membaca objek `event` (`event.type`, `event.target`), serta aturan pelepasan listener dengan referensi fungsi yang sama (`removeEventListener`). | Counter tanpa listener terpasang | Counter teller lengkap dengan pelepasan event listener deterministik |
| [`demo-4`](./demo-4/) | Slides 27–32 | **Dynamic List Rendering & `replaceChildren()`**<br>Penanganan form submit dengan `event.preventDefault()`, validasi input nama dan nominal positif, pembersihan kontainer via `replaceChildren()`, dan rendering item `<li>`. | Form unhandled yang melakukan reload halaman | Form transaksi interaktif dengan validasi, reset form, dan pencegah duplikasi |
| [`hands-on-lab-8`](./hands-on-lab-8/) | Slides 33–44 | **Capstone Lab: Portal Transaksi & Milestone 2 Real-Time Search**<br>Membangun form transaksi kas `#formTransaksi` terintegrasi WAI-ARIA, serta **Milestone 2**: modul pencarian real-time pada 5 katalog pelatihan (`pelatihan`) berbasis event `input`, filter *case-insensitive*, dan challenge hapus transaksi. | Scaffolded starter dengan 3 pending tests | Solusi referensi 100% compliant (10/10 test harness lulus) + dropdown kategori & tombol hapus |

---

## 3. Structural Standard per Module
Setiap modul menerapkan arsitektur dua subfolder yang ketat:
- **`1-starter/`**: Kode baseline untuk trainee dengan bimbingan pedagogis dan komentar `TODO` bernomor.
- **`2-solution/`**: Solusi referensi instruktur berstandar industri dengan pengujian otomatis 100% lulus.

---

## 4. Cara Menjalankan & Verifikasi
1. **Membuka Modul Demo di Web Browser:**
   ```bash
   open slides-materials/web-development-banking-odp-v2/session-8/demo-1/2-solution/index.html
   open slides-materials/web-development-banking-odp-v2/session-8/demo-2/2-solution/index.html
   open slides-materials/web-development-banking-odp-v2/session-8/demo-3/2-solution/index.html
   open slides-materials/web-development-banking-odp-v2/session-8/demo-4/2-solution/index.html
   ```
2. **Menjalankan Automated Test Harness pada Starter (Trainee):**
   ```bash
   cd slides-materials/web-development-banking-odp-v2/session-8/hands-on-lab-8/1-starter
   node scripts/test-runner.js
   ```
3. **Menguji Solusi Referensi Instruktur:**
   ```bash
   cd slides-materials/web-development-banking-odp-v2/session-8/hands-on-lab-8/2-solution
   node scripts/test-runner.js
   ```
