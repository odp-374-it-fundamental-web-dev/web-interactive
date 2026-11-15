# Solusi: Sistem 12 Kolom Grid Bootstrap

## Catatan Instruktur
- Hierarki `.container` -> `.row` -> `.col-*` wajib ditaati:
  - `.container` memberikan padding horizontal (12px / 0.75rem di tiap sisi).
  - `.row` menerapkan margin negatif horizontal setara (-0.75rem) untuk mensejajarkan konten tepi dengan kontainer luar.
  - `.col-*` menerapkan padding horizontal kembali untuk membuat celah (*gutter*) antar kolom.
- Mengombinasikan `col-12 col-md-6 col-lg-4` menciptakan desain responsif mobile-first:
  - Default (mobile): `col-12` (100% lebar, 1 kartu per baris).
  - Dari breakpoint `md` (>= 768px): `col-md-6` (50% lebar, 2 kartu per baris).
  - Dari breakpoint `lg` (>= 992px): `col-lg-4` (33.33% lebar, 3 kartu per baris).
