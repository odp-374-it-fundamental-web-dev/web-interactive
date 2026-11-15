# Demo 3: Sistem 12 Kolom Grid Bootstrap

## 1. Overview
Demo ini membedah arsitektur Grid 12 Kolom Bootstrap:
- Aturan ketat hierarki grid: `.container` -> `.row` -> `.col-*`. (Elemen `.col-*` tidak boleh ditaruh langsung di luar elemen `.row` karena margin negatif pada `.row` bertugas menetralkan padding horizontal kontainer).
- Pengendalian jarak antar kolom menggunakan utility gutter: `g-3` (1rem), `g-4` (1.5rem), `gx-*` (horizontal), `gy-*` (vertikal).
- Breakpoint responsif Bootstrap 5.3:
  - `col-12`: 1 kolom penuh di layar terkecil (`xs` < 576px).
  - `col-md-6`: 2 kolom seimbang di layar tablet (`md` >= 768px).
  - `col-lg-4`: 3 kolom seimbang di layar desktop (`lg` >= 992px).
  - `col-xl-3`: 4 kolom di layar lebar (`xl` >= 1200px).

## 2. Learning Objectives
- Memahami matematika 12 kolom (misal: 4 kolom masing-masing berukuran 3 unit: `3 x 4 = 12`).
- Menata galeri kartu perbankan yang otomatis berganti tata letak dari 1 kolom (mobile 375px) ke 2 kolom (tablet 768px) ke 3 kolom (desktop 1280px).
