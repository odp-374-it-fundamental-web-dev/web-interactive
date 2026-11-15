# Demo 3: Pure Function Unit Testing with `console.assert()`

## Deskripsi Singkat
Modul demo ini mempraktikkan pengujian unit (*Unit Testing*) ringan menggunakan fungsi bawaan `console.assert()` (Slides 18–24 Sesi 11):
1. **Memisahkan Fungsi Murni (*Pure Function*)**:
   - Fungsi `nextHistory(prevHistory, newCity, max = 5)` diisolasi dari DOM (`document`) dan Storage (`localStorage`).
   - Menerima parameter input dan mengembalikan array baru tanpa memutasi `prevHistory`.
2. **Mekanisme `console.assert(condition, message)`**:
   - Jika `condition` bernilai `true`, tidak ada pesan yang dicetak (lulus hening).
   - Jika `condition` bernilai `false`, pesan error dicetak ke konsol (*assertion failure*).
3. **Pola Red-Green**:
   - Menulis pengujian yang sengaja mendeteksi bug (Red), lalu memperbaiki logika fungsi hingga seluruh assertion lulus (Green).

## Instruksi Menjalankan
```bash
# Jalankan solusi referensi
node slides-materials/web-development-banking-odp-v2/session-11/demo-3/2-solution/test-assert.js
```
