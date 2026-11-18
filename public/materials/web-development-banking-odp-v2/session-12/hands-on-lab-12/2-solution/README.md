# Kalkulator Kurs Rupiah (Mini Capstone) — Instructor Reference Solution

Dokumen ini merupakan panduan solusi referensi instruktur untuk proyek akhir **Kalkulator Kurs Rupiah (Mini Capstone)** pada kurikulum **BNI ODP IT 2026**.

Solusi ini mendemonstrasikan implementasi web modern dengan kepatuhan 100% terhadap standar perbankan: keandalan, modularitas, keamanan XSS, dan kesiapan deployment statis.

---

## 1. Arsitektur & Prinsip Desain Solusi

### A. Modularitas Berbasis Pure Functions
- `scripts/rate-helper.js`: `makeLatestURL` (validasi kode ISO 3 huruf + URL builder dengan normalisasi UPPERCASE) dan `describeCurrencyCode` (pemetaan 14 kode ISO → nama Indonesia, case-insensitive) — tanpa ketergantungan DOM.
- `scripts/next-history.js`: `nextHistory` untuk pasangan **string** `"USD/IDR"` — validasi pola `XXX/XXX`, deduplikasi case-insensitive, normalisasi UPPERCASE, immutability penuh.

### B. Pertahanan Concurrency
- Guard `if (button && button.disabled) return;` mencegah *double submission* akibat spam click.
- Tombol dinonaktifkan via `setState("loading")` dan dijamin aktif kembali di blok `finally`.

### C. Validasi Sebelum Jaringan
- Jumlah (number ≥ 0) dan kedua kode mata uang (3 huruf) divalidasi **sebelum** satu `fetch` pun dipanggil → state `invalid`, zero request.
- Kode mata uang tidak dikenal (HTTP 404 dari API) tertangkap di `catch` → state yang jelas, bukan crash.

### D. Keamanan DOM & XSS Prevention
- Semua pembaruan teks memanfaatkan `textContent` dan `replaceChildren()`; tidak ada `innerHTML` dengan data eksternal.

### E. Kesiapan Deployment
- Seluruh aset memakai jalur relatif `./` sehingga aman di GitHub Pages subpath, Vercel, maupun Netlify.

---

## 2. Verifikasi Test Harness

```bash
cd 2-solution
node scripts/test-runner.js
```

### Hasil yang Diharapkan:
```text
[SUITE 1: HTML Architecture & Relative Paths]         3/3 ✔
[SUITE 2: Code Hygiene & Security]                    2/2 ✔
[SUITE 3: Latest URL Builder]                         2/2 ✔
[SUITE 4: Pure Function describeCurrencyCode]         1/1 ✔
[SUITE 5: Pure Function nextHistory & Immutability]   2/2 ✔
[SUITE 6: Responsive Styling]                         1/1 ✔
[SUITE 7: Double-Request Guard in loadRate]           2/2 ✔
[SUITE 8: Input Validation & Error States]            2/2 ✔
[SUITE 9: localStorage History Wiring]                1/1 ✔

LAB RESULTS: 16/16 Checks Passed (100%)
✔ EXCELLENT: 100% Acceptance Criteria Satisfied!
```

Starter (belum dikerjakan) bernilai **10/16** — semua check yang gagal dipetakan langsung ke 5 TODO.

---

## 3. Pemetaan Rubrik 100 Poin

| Kategori | Implementasi Kunci |
| :--- | :--- |
| Version Control & GitHub | Commit terstruktur + README dengan tautan live |
| HTML Semantik & Aksesibilitas | `role="status"`, `aria-live`, label 3 input form, atribusi Frankfurter/ECB |
| CSS Responsif | Flex layout form + chip wrap, tanpa overflow |
| Fungsi Murni & Transformasi | `makeLatestURL`, `describeCurrencyCode`, `nextHistory` (string pasangan, immutability) |
| Integrasi API & Guard | Latest Rates API, guard klik ganda di `finally`, 5 UI states, validasi tanpa fetch |
| Penyimpanan Lokal & Deployment | Riwayat 5 pasangan string di `localStorage`, tautan live berfungsi |
