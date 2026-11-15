# Starter: Box Model & Universal Reset

## Instruksi Latihan
Buka `index.html` dan `styles/style.css` di browser:
1. Perhatikan bahwa dua kartu di dalam `.card-container` seharusnya berbagi ruang 50% - 50%, tetapi kartu kedua justru terlempar ke bawah (*layout break*)!
2. Buka Chrome DevTools -> tab **Elements** -> tab **Computed** pada elemen `.card`.
3. Analisis mengapa lebar total kartu melebihi 50%: lebar `50%` + `padding: 20px` + `border: 4px` = melebihi `50%` saat memakai `content-box`!
4. Tambahkan universal reset `* { box-sizing: border-box; }` di baris pertama `styles/style.css`.
5. Amati bagaimana kedua kartu langsung sejajar rapi berdampingan tanpa mengubah nilai persentase lebar.
