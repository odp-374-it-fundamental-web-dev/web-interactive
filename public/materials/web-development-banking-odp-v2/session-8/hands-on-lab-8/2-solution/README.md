# Panduan Solusi Referensi: Hands-on Lab 8 (Instruktur)

## Arsitektur & Prinsip Desain
Solusi ini mengintegrasikan seluruh konsep modul Sesi 8:
1. **Keamanan & Pencegahan XSS**:
   - Seluruh konten berbasis string pengguna dan data dummy dirender dengan `textContent` atau dibuat melalui node teks (`document.createElement`).
   - Tidak ada penetapan langsung `innerHTML` yang mengevaluasi string masukan.
2. **Anti-Duplikasi dengan `replaceChildren()`**:
   - Kontainer `#daftarTransaksi` dan `#hasil` selalu dibersihkan dengan `element.replaceChildren()` sebelum menambahkan `<li>` baru.
3. **Penyaringan Real-Time Multi-Parameter (Milestone 2 & Challenge)**:
   - Menggabungkan event `input` pada `#cari` dengan event `change` pada `#filterKategori`.
   - Melakukan normalisasi `trim().toLowerCase()` untuk pencarian *case-insensitive*.
4. **Mutasi Data State Terkelola**:
   - Fitur challenge tombol **Hapus** memanfaatkan `transaksi.splice(index, 1)` lalu memanggil `renderTransaksi()` untuk memperbarui tampilan visual secara reaktif.

## Menjalankan Pengujian
```bash
node scripts/test-runner.js
```
Harapan hasil: `10/10 Checks Passed (100%)`.
