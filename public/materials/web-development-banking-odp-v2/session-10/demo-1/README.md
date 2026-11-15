# Demo 1: Array Searching (`find()` vs `filter()` vs Linear Search)

## Deskripsi Singkat
Modul demo ini membedah teknik pencarian data pada koleksi objek JavaScript (Slides 4–11 Sesi 10):
1. **Linear Search Manual (`for` loop)**:
   - Menelusuri elemen dari indeks 0 hingga akhir.
   - Menggunakan `break` saat elemen ditemukan.
2. **`Array.prototype.find()`**:
   - Mengembalikan **satu elemen pertama** yang memenuhi kriteria predikat.
   - Jika tidak ada yang cocok, mengembalikan nilai `undefined`.
3. **`Array.prototype.filter()`**:
   - Mengembalikan **array baru berisi seluruh elemen** yang memenuhi kriteria.
   - Jika tidak ada yang cocok, mengembalikan array kosong `[]` (bukan `undefined`).

## Panduan Memilih Method
| Kebutuhan Bisnis | Gunakan | Nilai Kembalian jika Tidak Cocok |
| :--- | :--- | :--- |
| "Cari 1 kota berdasarkan nama unik" | `find()` | `undefined` |
| "Cari semua kota yang bersuhu di bawah 30°C" | `filter()` | `[]` (Array kosong) |

## Instruksi Menjalankan
```bash
# Jalankan solusi referensi
node slides-materials/web-development-banking-odp-v2/session-10/demo-1/2-solution/searching.js
```
