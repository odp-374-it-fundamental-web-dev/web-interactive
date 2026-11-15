# Demo 1: DOM Selection & Traversal

## Deskripsi Singkat
Modul demo ini membedah metode pemilihan elemen dokumen HTML (DOM) sesuai materi Slide 4–14:
1. **Seleksi Elemen Tunggal**:
   - `document.getElementById("id")`: Cepat, mengembalikan 1 elemen atau `null`.
   - `document.querySelector("selector")`: Fleksibel menggunakan CSS selector (misal `#id`, `.class`, `tag[attr]`), mengembalikan elemen pertama yang cocok atau `null`.
2. **Seleksi Koleksi Elemen**:
   - `document.querySelectorAll("selector")`: Mengembalikan objek *static* `NodeList` yang mendukung method `.forEach()`.
   - `document.getElementsByClassName("class")`: Mengembalikan *live* `HTMLCollection`.
3. **Pemuatan Skrip Eksternal**:
   - Menggunakan atribut `<script src="..." defer>` di tag `<head>` agar parser HTML tidak terblokir dan skrip dieksekusi setelah seluruh pohon DOM selesai dibentuk.

## Instruksi Menjalankan
Buka file `index.html` di browser (misal via Live Server atau double-click), atau inspeksi log console browser.
```bash
# Buka di browser
open slides-materials/web-development-banking-odp-v2/session-8/demo-1/2-solution/index.html
```
