# Demo 4: UI State Machine & Double-Request Prevention

## Deskripsi Singkat
Modul demo ini mempraktikkan arsitektur pengelolaan state antarmuka pada aplikasi asinkron (Slide 33 Sesi 9):
1. **Model State UI Deterministi**:
   - `loading`: Operasi jaringan sedang berlangsung; tombol dinonaktifkan (`button.disabled = true`), pesan berbunyi "Mengambil data...".
   - `success`: Data berhasil didapat; konten hasil dirender.
   - `empty`: Pencarian tidak menemukan data; kontainer hasil dikosongkan, pesan berbunyi "Kota tidak ditemukan.".
   - `error`: Terjadi kegagalan jaringan / HTTP error; pesan berbunyi "Data gagal dimuat. Coba lagi.".
   - `invalid`: Masukan pengguna tidak memenuhi batas minimal (misal < 2 karakter).
2. **Pencegahan Double-Request**:
   - Menonaktifkan tombol submit saat status `loading` mencegah pengguna memicu request beruntun (*spam click*) yang dapat membebani server dan menyebabkan *race condition*.
   - Mengembalikan tombol ke keadaan aktif di blok `finally`.

## Instruksi Menjalankan
```bash
# Buka di browser
open slides-materials/web-development-banking-odp-v2/session-9/demo-4/2-solution/index.html
```
