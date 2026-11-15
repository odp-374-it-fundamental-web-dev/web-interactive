# Starter: Percabangan switch-case

## Instruksi Latihan
Buka `switch.js` dan jalankan dengan Node.js:
```bash
node switch.js
```
1. Buat fungsi `formatStatusTransaksi(status)` menggunakan struktur `switch`:
   - `"BERHASIL"`: kembalikan `"Transaksi berhasil diproses."`
   - `"PENDING"`: kembalikan `"Transaksi sedang menunggu konfirmasi kliring."`
   - `"GAGAL"`, `"DITOLAK"`, `"KEDALUWARSA"`: kembalikan `"Transaksi tidak dapat diproses."` (gunakan fall-through yang disengaja).
   - `default`: kembalikan `"Status tidak dikenal."`
2. Pastikan setiap blok `case` yang berdiri sendiri diakhiri dengan `break` atau `return`.
