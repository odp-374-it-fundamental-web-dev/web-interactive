# Demo 3: Percabangan switch-case

## 1. Overview
Demo ini membahas penggunaan struktur `switch-case` untuk mencocokkan satu nilai variabel diskret (seperti status transaksi perbankan atau kanal kliring):
- Anatomi `switch (ekspresi) { case nilai: ...; break; default: ...; }`.
- Fungsi krusial perintah `break` untuk mencegah fenomena *fall-through* (di mana blok case di bawahnya ikut dieksekusi secara tidak sengaja).
- Kasus di mana *intentional fall-through* sengaja dimanfaatkan (misalnya beberapa status gagal dikelompokkan ke satu penanganan bersama).
- Klausul `default` sebagai penanganan defensif untuk kode status yang tidak dikenal.

## 2. Learning Objectives
- Memilih antara `if / else if` (cocok untuk evaluasi rentang/range angka atau multi-kondisi kompleks) vs `switch-case` (cocok untuk perbandingan nilai tunggal/enum).
- Memetakan kode status transaksi (`BERHASIL`, `PENDING`, `GAGAL`, `EXPIRED`, `REJECTED`) menjadi pesan notifikasi nasabah.
