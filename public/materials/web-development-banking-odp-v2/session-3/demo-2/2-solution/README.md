# Solusi: Box Model & Universal Reset

## Catatan Instruktur
- Pada model kalkulasi default browser (`box-sizing: content-box`):
  `Lebar Elemen = width + padding-left + padding-right + border-left + border-right`.
  Sehingga elemen dengan `width: 50%` ditambah padding `24px` dan border `4px` di kedua sisi memiliki total lebar `50% + 56px`, yang menyebabkan total dua kartu adalah `100% + 112px` (melebihi 100% kontainer, memicu drop baris).
- Dengan menerapkan:
  ```css
  *, *::before, *::after {
    box-sizing: border-box;
  }
  ```
  `width` yang dideklarasikan (`50%`) sudah mencakup content, padding, dan border, sehingga dua kartu persis memenuhi 100% lebar kontainer secara konsisten.
