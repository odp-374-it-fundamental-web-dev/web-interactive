# Demo 4: Array of Objects & Built-in Methods (`forEach`, `map`, `filter`, `reduce`)

## Deskripsi Singkat
Modul demo ini membedah metode pemrosesan koleksi data modern di JavaScript (Slides 30–35):
1. **`forEach()`**: Menjalankan aksi/efek samping pada setiap elemen (selalu mengembalikan `undefined`).
2. **`map()`**: Mentransformasikan setiap elemen menjadi elemen baru pada array baru dengan panjang yang sama.
3. **`filter()`**: Menyaring elemen yang lolos kondisi predikat (menghasilkan array baru).
4. **`reduce()`**: Mengakumulasikan seluruh elemen menjadi satu nilai tunggal (wajib menyediakan `initialValue`).

## Panduan Memilih Method Sesuai Kebutuhan
| Pertanyaan Kunci | Gunakan Method | Return Value | Mutasi Sumber? |
| :--- | :--- | :--- | :--- |
| "Saya ingin mencetak/mengirim log setiap transaksi ke audit trail" | `forEach()` | `undefined` | Tidak |
| "Saya ingin mengambil hanya ID dan nominal dari setiap objek" | `map()` | `Array baru` (panjang sama) | Tidak |
| "Saya ingin menyaring transaksi yang statusnya berhasil dan nominal > 0" | `filter()` | `Array baru` (panjang <= sumber) | Tidak |
| "Saya ingin menghitung total akumulasi saldo seluruh transaksi" | `reduce()` | `Nilai tunggal` (number/object) | Tidak |

## Instruksi Menjalankan
```bash
# Jalankan solusi referensi
node slides-materials/web-development-banking-odp-v2/session-7/demo-4/2-solution/processing.js
```
