# Demo 2: Array Sorting & Non-Mutating Immutability

## Deskripsi Singkat
Modul demo ini membedah mekanisme pengurutan data dengan `Array.prototype.sort()` (Slides 12–18 Sesi 10):
1. **Jebakan Default `sort()`**:
   - Tanpa comparator, `sort()` mengonversi elemen menjadi string lalu mengurutkannya secara leksikografis kode UTF-16 (akibatnya `"100"` berada sebelum `"25"`).
2. **Comparator Numerik**:
   - Ascending (Kecil ke Besar): `(a, b) => a - b`
   - Descending (Besar ke Kecil): `(a, b) => b - a`
3. **Comparator String (Internasionalisasi)**:
   - Menggunakan `a.localeCompare(b, "id")` untuk pengurutan alfabet yang akurat.
4. **Bahaya Mutasi Data**:
   - `sort()` **memutasi array sumber secara langsung di tempat** (*in-place mutation*).
   - Selalu buat shallow copy terlebih dahulu menggunakan spread operator: `[...array].sort(...)`.

## Instruksi Menjalankan
```bash
# Jalankan solusi referensi
node slides-materials/web-development-banking-odp-v2/session-10/demo-2/2-solution/sorting.js
```
