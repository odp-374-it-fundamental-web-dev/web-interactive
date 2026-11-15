# Demo 2: Percabangan if / else if / else & Guard Clauses

## 1. Overview
Demo ini membahas teknik penulisan percabangan logika kondisi:
- Struktur `if`, `else if`, dan `else` untuk mengkategorikan total nominal transaksi (mis. "TRANSAKSI BESAR", "TRANSAKSI MENENGAH", "TRANSAKSI MIKRO").
- Bahaya *deeply nested if* (kondisi bersarang yang menjorok terlalu dalam dan sulit dibaca).
- Pola arsitektur **Guard Clauses** (klausa penjaga): Memeriksa kondisi kegagalan atau pembatalan di baris paling awal dan langsung keluar (*early return* / *fail-fast*), sehingga alur utama kode tetap berada pada tingkat indentasi terluar.

## 2. Learning Objectives
- Mengategorikan nilai nominal transaksi perbankan secara akurat.
- Merefaktor kode bersarang (*pyramid of doom*) menjadi alur guard clauses yang bersih dan mudah diuji.
