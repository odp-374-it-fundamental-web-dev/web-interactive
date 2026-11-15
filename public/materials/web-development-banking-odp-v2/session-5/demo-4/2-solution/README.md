# Solusi: Struktur Data (Objects & Arrays)

## Catatan Instruktur
- Mendeklarasikan array atau objek dengan `const` melindungi referensi memori variabel agar tidak tertimpa variabel lain (`nominal = "rusak"` akan menghasilkan `TypeError: Assignment to constant variable`).
- Namun, properti objek dan elemen array di dalamnya tetap *mutable*.
- Pada sistem backend perbankan, riwayat mutasi rekening dipodelkan sebagai *array of objects* (kumpulan objek transaksi) yang nantinya akan diproses dengan loop (Sesi 6) dan fungsi pemetaan (Sesi 7).
