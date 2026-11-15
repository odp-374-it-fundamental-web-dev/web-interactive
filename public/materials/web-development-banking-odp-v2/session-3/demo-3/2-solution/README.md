# Solusi: Flexbox untuk Navigasi & Komponen 1D

## Catatan Instruktur
- Flexbox adalah solusi terbaik untuk tata letak 1 dimensi (sebaris atau sekolom), seperti navbar, tombol aksi, dan pagination bar.
- `justify-content: space-between` secara otomatis mendorong elemen pertama (`.brand`) ke tepi kiri dan elemen kedua (`.nav-links`) ke tepi kanan tanpa memerlukan kalkulasi lebar manual atau float.
- `flex-wrap: wrap` bersama dengan `gap: 12px` menjamin bahwa saat ukuran layar menyempit (misal diuji pada lebar 375px), item menu akan turun secara elegan ke baris kedua tanpa menabrak atau meluap ke luar layar.
