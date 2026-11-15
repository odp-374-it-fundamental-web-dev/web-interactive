# Demo 1: Boolean Expressions & Truthy / Falsy

## 1. Overview
Demo ini membahas logika boolean dan konsep nilai truthy/falsy dalam JavaScript:
- Operator perbandingan ketat (`===` dan `!==`) vs perbandingan longgar bertipe coercion (`==` dan `!=`). Dalam perbankan, selalu gunakan `===` untuk mencegah `0 == ""` bernilai `true`!
- Enam nilai dasar **Falsy**: `false`, `0`, `""` (string kosong), `null`, `undefined`, dan `NaN`.
- Semua nilai selain keenam nilai di atas adalah **Truthy** (termasuk array kosong `[]` dan objek kosong `{}`).
- Operator logika: AND (`&&`), OR (`||`), dan NOT (`!`).

## 2. Learning Objectives
- Memprediksi hasil evaluasi logika boolean tanpa ambigu.
- Mencegah celah logika validasi akun: memahami bahwa array kosong `[]` tetap bernilai truthy.
