# Solusi: Operator Aritmetika & Konversi Tipe

## Catatan Instruktur
- Konversi eksplisit `Number(val)` mengubah string numerik murni menjadi number, dan mengembalikan `NaN` jika terdapat karakter non-numerik.
- `parseInt(val, 10)` membaca karakter dari kiri hingga menemukan karakter non-angka (mis. `"50000_idr"` terbaca `50000`). Selalu sertakan radix basis `10` untuk mencegah parsing oktal pada runtime lama.
- `Number.isFinite(val)` adalah metode pertahanan terbaik karena mengecek apakah sebuah nilai adalah angka nyata (bukan `NaN`, `Infinity`, atau `-Infinity`).
