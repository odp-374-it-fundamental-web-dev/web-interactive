# Panduan Solusi Referensi: Hands-on Lab 11 (Instruktur)

## Arsitektur & Prinsip Desain
Solusi ini merefleksikan standar jaminan mutu (*Quality Assurance*) perangkat lunak perbankan:
1. **Fungsi Murni Modular (`scripts/next-history.js`)**:
   - `nextHistory` terpisah dari runtime browser DOM dan `localStorage`.
   - Menggunakan *immutability pattern*: array sumber `prev` tidak pernah dimutasi secara langsung.
   - Menggunakan `filter()` *case-insensitive* untuk menjamin nama kota tidak berulang.
2. **Pencegahan Race Condition**:
   - Guard clause `if (button && button.disabled) return;` di baris pertama `loadWeather()` secara instan mengabaikan klik ganda (*spam clicks*) dari pengguna saat koneksi jaringan sedang lambat.
3. **Integritas Penyimpanan**:
   - Menghilangkan kode residual testing pembersih storage saat startup, sehingga riwayat bertahan antar-reload.

## Menjalankan Pengujian
```bash
node scripts/test-runner.js
```
Harapan hasil: `10/10 Checks Passed (100%)`.
