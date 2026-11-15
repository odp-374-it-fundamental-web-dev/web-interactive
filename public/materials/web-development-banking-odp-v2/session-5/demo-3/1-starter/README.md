# Starter: Operator Aritmetika & Konversi Tipe

## Instruksi Latihan
Buka `conversion.js` dan jalankan dengan Node.js:
```bash
node conversion.js
```
1. Perhatikan bug kalkulasi transfer: input string `"50000"` ditambah biaya administrasi `2500` menghasilkan `"500002500"`!
2. Perbaiki bug tersebut menggunakan `Number()` atau `parseInt(..., 10)`.
3. Tambahkan validasi dengan `Number.isFinite()` untuk memastikan nilai yang dikonversi adalah angka valid sebelum melakukan operasi matematika.
