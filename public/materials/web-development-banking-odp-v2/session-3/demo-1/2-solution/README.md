# Solusi: CSS Syntax, Pemasangan & Specificity

## Catatan Instruktur
- External stylesheet `<link rel="stylesheet" href="styles/style.css">` memungkinkan stylesheet yang sama di-*cache* oleh browser dan dibagikan ke seluruh halaman (mis. `index.html` dan `kontak.html`), memastikan konsistensi desain sistem.
- Menghindari inline style (`style="..."`) penting karena memiliki Specificity sangat tinggi (1000) yang sulit di-*override* secara bersih tanpa menggunakan `!important`.
- Selector combinator `nav a` secara spesifik menarget tautan di dalam navigasi tanpa mempengaruhi tautan lain di dalam isi paragraf.
- Aturan `:focus-visible` memberikan *focus ring* 2px solid oranye saat pengguna bernavigasi menggunakan tombol Tab keyboard, memenuhi kepatuhan aksesibilitas WCAG 2.1 Focus Visible (Success Criterion 2.4.7).
