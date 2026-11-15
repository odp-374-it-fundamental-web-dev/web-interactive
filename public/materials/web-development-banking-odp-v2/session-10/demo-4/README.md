# Demo 4: Dynamic History UI with Re-search Buttons

## Deskripsi Singkat
Modul demo ini mempraktikkan perancangan antarmuka riwayat kota interaktif (Slides 27–34 Sesi 10):
1. **Perilaku Riwayat Kota**:
   - Menampung maksimal 5 kota unik terbaru di posisi paling depan (`[kotaBaru, ...riwayatLama.filter(k => k !== kotaBaru)].slice(0, 5)`).
   - Menghindari duplikasi nama kota.
2. **Tombol Pencarian Ulang (*Re-search Buttons*)**:
   - Setiap kota dalam riwayat dirender sebagai elemen tombol interaktif.
   - Mengklik tombol riwayat otomatis mengisi input dan memicu pemanggilan cuaca ulang.
3. **Pembersihan Kontainer Riwayat**:
   - Menggunakan `replaceChildren()` saat me-render riwayat.
   - Menyediakan tombol hapus riwayat (`#hapusRiwayat`) yang memanggil `localStorage.removeItem(KEY)`.

## Instruksi Menjalankan
```bash
# Buka di browser
open slides-materials/web-development-banking-odp-v2/session-10/demo-4/2-solution/index.html
```
