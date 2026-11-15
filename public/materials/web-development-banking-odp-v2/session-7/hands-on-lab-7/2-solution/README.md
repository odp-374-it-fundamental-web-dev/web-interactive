# Panduan Solusi Referensi: Hands-on Lab 7 (Instruktur)

## Arsitektur & Prinsip Desain
Solusi ini mengimplementasikan prinsip rekayasa perangkat lunak modern:
1. **Pola Guard Clauses pada `checkLogin`**:
   - Memeriksa tipe data dengan `typeof !== "string"` sebelum pemrosesan logika otentikasi.
   - Mengembalikan nilai secara dini (*early return*), menjaga indentasi kode tetap flat (tidak bertingkat).
2. **Pemrosesan Fungsional & Immutabilitas**:
   - `ambilValid`: Menggunakan `data.filter(...)` untuk menyaring kondisi bisnis (`status === "berhasil" && nominal > 0`).
   - `ambilRingkasan`: Menggunakan `data.map(...)` dengan sintaks ringkas `({ id: item.id, nominal: item.nominal })`.
   - `hitungTotal`: Menggunakan `data.reduce(...)` dengan `initialValue: 0`. Penentuan nilai awal `0` sangat krusial agar fungsi tidak melempar `TypeError: Reduce of empty array with no initial value` ketika input adalah array kosong `[]`.
   - Menjamin integritas data transaksi perbankan tanpa mutasi sampingan (*side-effects*).

## Menjalankan Pengujian
```bash
node scripts/test-runner.js
node rekap-pesanan.js
```
Output yang diharapkan adalah `10/10 Checks Passed (100%)`.
