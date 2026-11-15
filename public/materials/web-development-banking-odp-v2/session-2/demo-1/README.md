# Demo 1: Anatomi Form & Hubungan Label-Input

## 1. Overview
Demo ini membahas elemen dasar formulir HTML (`<form>`), asosiasi aksesibilitas eksplisit antara `<label for="id">` dan `<input id="...">`, peran vital atribut `name` dalam pembentukan *key-value pair* data form, serta tombol submit (`<button type="submit">`).

## 2. Learning Objectives
- Memahami mengapa `placeholder` bukan pengganti elemen `<label>`.
- Mengaitkan atribut `for` pada `<label>` dengan `id` pada elemen input agar area klik input menjadi luas dan dapat dibaca oleh pembaca layar.
- Memastikan setiap input yang perlu dikirim memiliki atribut `name`.

## 3. Pedagogical Progression
1. **1-starter**: Form yang hanya mengandalkan placeholder tanpa label, atribut `name` hilang sehingga data tidak terkirim, dan tombol tanpa `type="submit"`.
2. **2-solution**: Form aksesibel dengan pasangan `<label for>` yang rapi dan atribut `name` yang konsisten.
