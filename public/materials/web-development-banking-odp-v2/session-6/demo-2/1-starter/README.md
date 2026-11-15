# Starter: Percabangan & Guard Clauses

## Instruksi Latihan
Buka `branching.js` dan jalankan dengan Node.js:
```bash
node branching.js
```
1. Buat fungsi `kategoriTransaksi(nominal)`:
   - Jika `nominal >= 100000000` -> `"TRANSAKSI BESAR"`
   - Jika `nominal >= 10000000` -> `"TRANSAKSI MENENGAH"`
   - Jika `nominal > 0` -> `"TRANSAKSI MIKRO"`
   - Jika `nominal <= 0` atau tidak valid -> `"TIDAK VALID"`
2. Refaktor fungsi validasi transfer yang bersarang menggunakan pola Guard Clauses.
