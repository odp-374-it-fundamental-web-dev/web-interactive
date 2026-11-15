# Demo 2: Box Model & Universal Reset

## 1. Overview
Demo ini mendemonstrasikan anatomi Box Model dalam CSS:
- Empat lapisan Box Model: **Content**, **Padding** (ruang dalam), **Border** (garis tepi), dan **Margin** (ruang luar).
- Perbedaan kritis antara default browser `box-sizing: content-box` (di mana padding dan border memperbesar lebar total elemen, merusak tata letak kontainer) vs `* { box-sizing: border-box; }` (di mana padding dan border dihitung ke dalam lebar yang telah ditentukan).
- Nilai properti `display`: `block`, `inline`, `inline-block`, dan `none`.
- Menggunakan panel **Computed** di Chrome DevTools untuk menginspeksi ukuran piksel aktual tiap lapisan box.

## 2. Learning Objectives
- Memasang universal reset `*, *::before, *::after { box-sizing: border-box; }` di baris pertama setiap proyek CSS.
- Mendiagnosis bug elemen yang melebar melampaui lebar induk (*overflow horizontal*).
- Menata padding dan margin menggunakan unit relatif (`rem`, `px`) secara proporsional.
