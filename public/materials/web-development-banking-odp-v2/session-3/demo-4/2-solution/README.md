# Solusi: CSS Grid untuk Kartu & Layout 2D

## Catatan Instruktur
- Pola `grid-template-columns: repeat(auto-fit, minmax(260px, 1fr))` merupakan teknik tata letak paling elegan dalam CSS modern.
  - Saat kontainer berukuran 900px, browser dapat memuat 3 kolom selebar ~286px.
  - Saat kontainer mengecil ke 600px, 3 kolom berukuran 260px tidak muat, sehingga browser otomatis membungkus menjadi 2 kolom selebar ~290px.
  - Pada layar mobile 375px, browser otomatis menyusun kartu menjadi 1 kolom penuh selebar 100%.
- Pola ini tidak memerlukan penulisan `@media` query perantara, mengurangi kompleksitas CSS dan mencegah visual glitch.
