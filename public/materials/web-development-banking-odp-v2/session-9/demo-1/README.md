# Demo 1: Synchronous Blocking vs Asynchronous Non-blocking

## Deskripsi Singkat
Modul demo ini membedah perbedaan mendasar antara eksekusi sinkron (*blocking*) dan asinkron (*non-blocking*) di lingkungan JavaScript (Slides 4–10):
1. **Eksekusi Sinkron (Blocking)**:
   - Setiap baris dieksekusi secara sekuensial.
   - Loop berat atau operasi I/O sinkron menghentikan (*freeze*) thread utama dan membuat UI tidak responsif terhadap klik pengguna.
2. **Eksekusi Asinkron (Non-blocking)**:
   - Operasi yang membutuhkan waktu didelegasikan ke web API / libuv runtime (misal `setTimeout`, `fetch`).
   - Eksekusi dilanjutkan ke baris berikutnya tanpa menunggu.
   - Callback dipindahkan ke *Event Loop Task Queue* dan dieksekusi setelah Call Stack kosong (urutan klasik: `A -> C -> B`).

## Instruksi Menjalankan
```bash
# Jalankan solusi referensi
node slides-materials/web-development-banking-odp-v2/session-9/demo-1/2-solution/async-order.js
```
Perhatikan urutan output di terminal dan catat mengapa log `B` selalu muncul setelah `C` meskipun timer diatur ke `0 ms`.
