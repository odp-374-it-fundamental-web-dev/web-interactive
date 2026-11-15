# Panduan Trainee: Hands-on Lab 7 (Starter Pack)

## Deskripsi Tugas
Lengkapi berkas `banking-engine.js` dan selesaikan tantangan mandiri di `rekap-pesanan.js`.
Modul ini menguji penguasaan Anda terhadap:
1. Validasi tipe data dan pola Guard Clauses (`checkLogin`).
2. Pemrosesan data transaksi secara immutable dan fungsional menggunakan `filter()`, `map()`, dan `reduce()`.

## Langkah Pengerjaan
1. Buka berkas `banking-engine.js`.
2. Selesaikan **TODO 1** (`checkLogin`):
   - Cek `typeof username` dan `typeof password`. Jika bukan string, kembalikan `"input salah"`.
   - Cek apakah kredensial cocok dengan `"Kosasih"` dan `"k0s4s1h"`. Jika cocok, kembalikan `"login berhasil"`, jika tidak kembalikan `"coba lagi"`.
3. Selesaikan **TODO 2** (`ambilValid`):
   - Gunakan `data.filter(...)` untuk menyaring `status === "berhasil"` dan `nominal > 0`.
4. Selesaikan **TODO 3** (`ambilRingkasan`):
   - Gunakan `data.map(...)` untuk mengubah setiap item menjadi object `{ id, nominal }`. Ingat gunakan pembungkus kurung `({ id: item.id, nominal: item.nominal })`.
5. Selesaikan **TODO 4** (`hitungTotal`):
   - Gunakan `data.reduce(...)` untuk menjumlahkan nominal transaksi dengan `initialValue: 0`.
6. Jalankan uji otomatis:
   ```bash
   node scripts/test-runner.js
   ```
7. Kerjakan tugas mandiri di `rekap-pesanan.js` dan jalankan dengan `node rekap-pesanan.js`.
