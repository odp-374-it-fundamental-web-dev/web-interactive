# Demo 1: CSS Syntax, Pemasangan & Specificity

## 1. Overview
Demo ini membahas fondasi styling CSS:
- Tiga cara pemasangan CSS: Inline (`style="..."`), Internal (`<style>`), dan External (`<link rel="stylesheet" href="...">`). Mengapa External CSS adalah standar industri terbaik untuk pemisahan tugas (*separation of concerns*) dan caching browser.
- Anatomi aturan CSS: Selector, Property, Value, dan Declaration Block.
- Hirarki Specificity: Elemen (1) < Class / Atribut / Pseudo-class (10) < ID (100) < Inline Style (1000). Mengapa aturan terakhir menang jika specificity seimbang, dan bahaya overuse `!important`.
- Combinator: Descendant selector (`nav a`) vs Child selector (`nav > a`).
- Pseudo-classes interaksi: `:hover` dan indikator aksesibilitas `:focus-visible`.

## 2. Learning Objectives
- Menghubungkan berkas stylesheet eksternal menggunakan `<link rel="stylesheet">`.
- Mendiagnosis benturan gaya menggunakan kalkulasi Specificity dan panel DevTools Styles.
- Memastikan indikator fokus keyboard `:focus-visible` selalu kontras dan jelas bagi pengguna keyboard navigasi.
