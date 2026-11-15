# Demo 3: Fetch API, Response Parsing & `getJSON(url)` Helper

## Deskripsi Singkat
Modul demo ini membedah penggunaan `fetch()` dan pembuatan fungsi utilitas `getJSON(url)` sesuai standar materi Slide 24–26:
1. **Dua Tahap `fetch()`**:
   - Tahap 1: `const response = await fetch(url)` menghasilkan objek `Response`. Pada tahap ini, baru header HTTP yang diterima.
   - Tahap 2: `const data = await response.json()` membaca dan mem-parse body JSON.
2. **Jebakan `fetch()`**:
   - `fetch()` **TIDAK me-reject Promise** saat menerima kode status HTTP 404 (Not Found) atau 500 (Internal Server Error).
   - Pengembang **wajib** memeriksa properti boolean `response.ok` (bernilai `true` jika status `200–299`).
   - Melempar `new Error('HTTP ' + response.status)` saat `!response.ok` memastikan kegagalan HTTP ikut tertangkap pada blok `catch`.

## Instruksi Menjalankan
```bash
# Jalankan solusi referensi
node slides-materials/web-development-banking-odp-v2/session-9/demo-3/2-solution/fetch-helper.js
```
