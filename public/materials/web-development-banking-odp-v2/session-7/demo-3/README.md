# Demo 3: Synchronous Callbacks, Pure Functions, & Immutability

## Deskripsi Singkat
Modul demo ini menjelaskan peran **Callback Sinkron** sebagai fungsi yang dikirimkan sebagai argumen ke fungsi lain untuk menentukan cara pemrosesan data (sebagaimana dipelajari pada Slide 20–22: `prosesNilai(nilai, callback)`). Selain itu, modul ini menanamkan disiplin **Pure Functions** dan **Immutability**:
1. Fungsi murni tidak memutasi array input asli.
2. Callback referensial (`kaliDua`) dikirimkan tanpa tanda kurung eksekusi `()`.

## Konsep Kunci
- **Mengirim Referensi vs Memanggil Langsung**:
  ```js
  // BENAR: Mengirim referensi fungsi sebagai callback
  prosesArray([10, 20, 30], kaliDua);

  // KELIRU: Memanggil fungsi secara instan sebelum dikirim
  prosesArray([10, 20, 30], kaliDua(10)); // Error / Unexpected Type!
  ```
- **Immutabilitas**: Membuat array baru dengan nilai yang ditransformasi, menjaga array sumber tetap utuh untuk audit jejak transaksi perbankan.

## Instruksi Menjalankan
```bash
# Jalankan solusi referensi
node slides-materials/web-development-banking-odp-v2/session-7/demo-3/2-solution/callbacks.js
```
