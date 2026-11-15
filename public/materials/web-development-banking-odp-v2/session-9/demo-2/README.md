# Demo 2: Promise Lifecycle & Modern `async/await`

## Deskripsi Singkat
Modul demo ini membedah siklus hidup Promise dan evolusi penulisan alur asinkron di JavaScript modern (Slides 11–21):
1. **Tiga Status Promise**:
   - `pending`: Operasi masih berjalan (menunggu kepastian).
   - `fulfilled`: Operasi selesai sukses (memanggil `resolve(nilai)`).
   - `rejected`: Operasi gagal/error (memanggil `reject(alasan)`).
2. **Evolusi Penulisan**:
   - Pola Tradisional: Callback bertingkat (*Callback Hell* / *Pyramid of Doom*).
   - Pola ES6 Promise: `.then(onFulfilled).catch(onRejected)`.
   - Pola ES2017 `async/await`: Alur asinkron ditulis seperti kode sinkron linier dengan blok `try / catch / finally`.

## Instruksi Menjalankan
```bash
# Jalankan solusi referensi
node slides-materials/web-development-banking-odp-v2/session-9/demo-2/2-solution/promises.js
```
