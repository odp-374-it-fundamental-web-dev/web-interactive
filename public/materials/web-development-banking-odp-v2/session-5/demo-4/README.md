# Demo 4: Struktur Data (Objects & Arrays)

## 1. Overview
Demo ini membahas pemodelan data finansial menggunakan Array dan Object:
- **Array**: Struktur data berurutan berbasis indeks 0 (`[item0, item1, ...]`), manipulasi akhir antrean dengan `push()` dan `pop()`, akses panjang data melalui properti `.length`.
- **String vs Array**: String memiliki indeks karakter dan properti `.length`, tetapi string bersifat primitif dan *immutable* (tidak memiliki method `push()`/`pop()`).
- **Object**: Struktur data entitas berbentuk pasangan kunci-nilai (`{ id, deskripsi, nominal }`).
- Cara mengakses properti: *Dot notation* (`obj.nominal`) vs *Bracket notation* (`obj['nominal']`).
- **Const Immutability vs Mutation**: Variabel `const` yang menyimpan array atau object melarang penugasan ulang variabel (`arr = [...]` error), namun elemen atau properti di dalamnya tetap dapat dimutasi (`arr.push()` atau `obj.status = "BERHASIL"` valid).

## 2. Learning Objectives
- Memilih struktur data yang tepat: Array untuk kumpulan record/riwayat transaksi; Object untuk entitas transaksi tunggal yang memiliki atribut.
- Melakukan mutasi elemen array dan penambahan properti objek secara terkontrol.
