# Demo 3: JSON Serialization & Defensive Local Storage

## Deskripsi Singkat
Modul demo ini membedah mekanisme persistensi data lokal menggunakan `Window.localStorage` dan serialisasi JSON (Slides 20–26 Sesi 10):
1. **Serialisasi JSON**:
   - `JSON.stringify(obj)`: Mengubah objek JS menjadi string JSON.
   - `JSON.parse(str)`: Mem-parse string JSON kembali menjadi objek/array.
2. **Penanganan Defensif & Validasi Skema**:
   - `JSON.parse()` melempar `SyntaxError` jika string data rusak/korup di browser.
   - Selalu bungkus dalam blok `try / catch` dan periksa `Array.isArray(parsed)` sebelum digunakan.
3. **Disiplin Namespace & Larangan `localStorage.clear()`**:
   - Selalu gunakan namespace key spesifik (misal `"bni-odp-weather-history-v1"`).
   - Jangan gunakan `localStorage.clear()` karena akan menghapus key aplikasi lain pada domain/origin yang sama. Gunakan `localStorage.removeItem(KEY)`.

## Instruksi Menjalankan
```bash
# Jalankan solusi referensi
node slides-materials/web-development-banking-odp-v2/session-10/demo-3/2-solution/storage-helper.js
```
