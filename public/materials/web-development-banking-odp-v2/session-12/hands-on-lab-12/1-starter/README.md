# Kalkulator Kurs Rupiah (Mini Capstone) — Starter Guide

Selamat datang di proyek akhir **Kalkulator Kurs Rupiah (Mini Capstone)** program **BNI ODP IT 2026**!

Proyek ini menyatukan materi inti pengembangan web dari Sesi 1 sampai Sesi 12 dalam domain perbankan yang nyata — **kurs mata uang**:
- Struktur HTML5 semantik & standar aksesibilitas WAI-ARIA
- Desain antarmuka modern & responsif
- Pemrograman asinkron modular (`Promise`, `async/await`, `fetch`) dengan **Frankfurter API** (ECB, gratis, tanpa API key)
- **Pemetaan kode mata uang ISO** ke nama Bahasa Indonesia
- Fungsi murni teruji unit (*Pure Functions*) & manajemen state tanpa mutasi
- Persistensi riwayat pasangan kurs dengan `localStorage`

> Waktu pengerjaan: **1 hari**. Fokus pada yang wajib — lihat [TODO.md](../TODO.md) untuk checklist terperinci.

---

## 1. Daftar Tugas (TODO Checklist)

Selesaikan 5 tugas terarah di bawah ini:

### 1. `scripts/rate-helper.js`
- [ ] **TODO 1**: Lengkapi validasi `makeLatestURL(base, symbols)` — kode harus 3 huruf alfabet (`/^[A-Za-z]{3}$/`), jika tidak lempar `TypeError`.
- [ ] **TODO 2**: Lengkapi penyusunan URL latest dengan parameter `base` dan `symbols` yang sudah di-UPPERCASE.
- [ ] **TODO 3**: Lengkapi fungsi murni `describeCurrencyCode(code)` — pemetaan kode ISO ke nama Bahasa Indonesia (case-insensitive).

### 2. `scripts/next-history.js`
- [ ] **TODO 4**: Lengkapi fungsi murni `nextHistory(prev, newPair, max = 5)` untuk pasangan **string** `"USD/IDR"`:
  - Validasi parameter (entry invalid → kembalikan `prev`)
  - Bersihkan spasi, simpan UPPERCASE
  - Deduplikasi case-insensitive
  - Sisipkan pasangan baru di index 0, batasi `max` item
  - **Pastikan array `prev` asli tidak dimutasi (immutability)**

### 3. `scripts/app.js`
- [ ] **TODO 5**: Tambahkan *double-request fail-fast guard* di baris awal fungsi `loadRate()`:
  ```javascript
  if (button && button.disabled) return;
  ```

---

## 2. Cara Menjalankan Uji Otomatis

Jalankan test harness terintegrasi di terminal:

```bash
node scripts/test-runner.js
```

Target Anda adalah mencapai kelulusan **100% (16/16 Checks Passed)** sebelum melakukan deployment.

---

## 3. Menjalankan di Lingkungan Lokal

Buka terminal di folder ini dan jalankan server lokal:

```bash
# Menggunakan Python 3
python3 -m http.server 5500

# Atau buka langsung dengan VS Code Live Server (port 5500)
```

Akses aplikasi di browser pada: `http://localhost:5500`

---

## 4. Referensi Cepat API Frankfurter

- **Latest**: `https://api.frankfurter.dev/v1/latest?base=USD&symbols=IDR`
  ```json
  { "amount": 1.0, "base": "USD", "date": "2026-11-17", "rates": { "IDR": 18271 } }
  ```
- Kode mata uang tidak dikenal mengembalikan **HTTP 404** (manfaatkan untuk state *empty*).

---

## 5. Panduan Publikasi Online

Pilih salah satu: **Vercel** (hubungkan repo di vercel.com), **GitHub Pages** (Settings > Pages > branch `main` / folder `/ (root)`), atau **Netlify** (hubungkan repo atau drag-and-drop).

1. Buat repositori publik baru di GitHub, misalnya `bni-kurs-app`.
2. Push seluruh berkas starter yang telah diselesaikan ke branch `main`.
3. Aktifkan hosting sesuai pilihan di atas, tunggu hingga URL live aktif.
4. Uji coba aplikasi di URL tersebut (pastikan CSS dan skrip termuat karena penggunaan jalur relatif `./`).
5. Cantumkan tautan live pada `README.md` repositori Anda.
