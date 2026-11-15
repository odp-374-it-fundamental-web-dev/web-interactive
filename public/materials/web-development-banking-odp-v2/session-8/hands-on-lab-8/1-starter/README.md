# Panduan Trainee: Hands-on Lab 8 (Starter Pack)

## Deskripsi Tugas
Lengkapi skrip `scripts/app.js` untuk menghubungkan antarmuka `index.html` dengan interaktivitas JavaScript:
1. Menangani event form submit transaksi kas dengan pencegahan reload (`preventDefault`), validasi input, status pesan dinamis, dan rendering aman via `replaceChildren()`.
2. Mengembangkan **Milestone 2 Mini Project**: mesin pencarian katalog pelatihan real-time berbasis event `input`, filter *case-insensitive*, dan penanganan state hasil pencarian kosong.

## Langkah Pengerjaan
1. Buka `scripts/app.js`.
2. Selesaikan **TODO 1 & 2** pada Bagian Form Transaksi:
   - Gunakan `replaceChildren()` di `renderTransaksi()` untuk mencegah duplikasi item.
   - Gunakan `textContent` agar input pengguna aman dari injeksi HTML/XSS.
   - Tangani submit dengan `event.preventDefault()`, validasi `nama.trim()` dan `nominal > 0`, serta pesan status.
3. Selesaikan **TODO 3, 4 & 5** pada Bagian Milestone 2:
   - Implementasikan fungsi `renderPelatihan(data)`.
   - Pasang event listener `"input"` pada kolom pencarian `#cari`.
   - Panggil `renderPelatihan(pelatihan)` saat pertama kali skrip dimuat.
4. Jalankan pengujian otomatis untuk memeriksa progres:
   ```bash
   node scripts/test-runner.js
   ```
5. Buka `index.html` di browser untuk menguji tampilan dan interaktivitas secara visual.
