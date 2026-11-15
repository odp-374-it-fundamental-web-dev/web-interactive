# Demo 3: List & Struktur Semantik HTML5

## 1. Overview
Demo ini menunjukkan teknik migrasi dari "div-soup" (halaman yang didominasi oleh tag generik `<div>` tanpa makna) menuju struktur semantik HTML5 yang memenuhi standar aksesibilitas web perbankan:
- `<header>` untuk pengenal halaman/situs.
- `<nav>` untuk blok navigasi utama.
- `<main>` untuk konten inti halaman (hanya boleh satu per halaman).
- `<section>` untuk bagian tematik dokumen yang memiliki heading.
- `<article>` untuk bagian mandiri yang dapat didistribusikan ulang.
- `<footer>` untuk catatan kaki, hak cipta, dan informasi kontak.
- Daftar berurutan `<ol>` vs tidak berurutan `<ul>` dengan elemen `<li>`.

## 2. Learning Objectives
- Memilih elemen HTML berdasarkan makna (semantik), bukan tampilan visual semata.
- Menstrukturkan daftar minat dan tahapan belajar secara terurut dan tak terurut.
- Membantu teknologi pembantu (*assistive technology*) memetakan hierarki dokumen melalui *landmark elements*.
