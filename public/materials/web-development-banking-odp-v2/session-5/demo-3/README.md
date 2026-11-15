# Demo 3: Operator Aritmetika, Coercion & Konversi Eksplisit

## 1. Overview
Demo ini menyoroti bahaya jebakan *implicit type coercion* (pemaksaan tipe implisit) dalam JavaScript dan pentingnya konversi tipe eksplisit dalam domain perbankan:
- Operator `+` berfungsi ganda: penjumlahan matematis (`5 + 2 === 7`) dan penggabungan string (`"5" + 2 === "52"`).
- Jika input nominal dari pengguna berupa string (misalnya dari `<input>` form), menjumlahkannya langsung tanpa konversi akan menghasilkan `"50000" + 25000 = "5000025000"`, bukan `75000`!
- Konversi eksplisit: `Number(value)`, `parseInt(value, 10)`, `parseFloat(value)`.
- Nilai `NaN` (*Not-a-Number*) dan cara mendeteksinya menggunakan `Number.isNaN()` atau `Number.isFinite()`.

## 2. Learning Objectives
- Mempraktikkan konversi eksplisit sebelum menjalankan operasi aritmetika pada input.
- Mengenali situasi yang menghasilkan `NaN` (misalnya `Number("bukan_angka")`).
- Memformat angka menjadi format mata uang Rupiah yang rapi menggunakan `Intl.NumberFormat('id-ID')`.
