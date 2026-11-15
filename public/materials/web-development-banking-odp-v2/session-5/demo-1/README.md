# Demo 1: Runtime JavaScript (Browser Console & Node.js CLI)

## 1. Overview
Demo ini mengenalkan dua lingkungan eksekusi JavaScript modern bagi calon software engineer perbankan:
- **Browser Environment**: Eksekusi melalui DevTools Console dan pemuatan skrip pada halaman web dengan atribut `<script src="..." defer>`.
- **Node.js Environment**: Eksekusi skrip backend/CLI langsung dari terminal menggunakan `node runtime.js`.
- Perbedaan runtime: Browser memiliki akses ke window/DOM (`document`), sedangkan Node.js memiliki akses ke modul sistem operasi dan file system (`process`, `fs`).

## 2. Learning Objectives
- Menjalankan skrip JavaScript dari terminal VS Code menggunakan Node.js.
- Memahami pesan diagnostik runtime: `console.log()`, `console.info()`, dan `console.warn()`.
- Mengetahui kapan kode dieksekusi di sisi klien (browser) vs di sisi runner otomatis (Node.js).
