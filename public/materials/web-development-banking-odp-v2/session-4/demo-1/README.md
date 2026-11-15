# Demo 1: Pemasangan Bootstrap 5.3.8 CDN & Dasar Utility

## 1. Overview
Demo ini membahas integrasi CSS Framework terpopuler di industri, Bootstrap 5.3.8, melalui Content Delivery Network (CDN):
- Peran CDN (Content Delivery Network): cache global berlatensi rendah, otomatis menghemat bandwidth server internal perbankan.
- Pemasangan `<link href=".../bootstrap.min.css" rel="stylesheet">` di `<head>` dan `<script src=".../bootstrap.bundle.min.js">` di penutup `<body>`.
- Pengenalan Utility Classes Bootstrap:
  - Spacing: padding (`p-3`, `py-4`, `px-2`) dan margin (`m-2`, `mb-3`, `mt-4`).
  - Container responsif: `.container` (lebar tetap bertahap sesuai breakpoint) vs `.container-fluid` (lebar 100% penuh).
  - Warna dan tipografi: `.text-primary`, `.bg-light`, `.fs-4`, `.fw-bold`.

## 2. Learning Objectives
- Memasang Bootstrap 5.3.8 tanpa memerlukan bundler atau package manager terlebih dahulu.
- Mengetahui bahwa Bootstrap 5 modern **tidak lagi membutuhkan jQuery** (murni JavaScript modern dan Popper.js).
- Menggunakan kelas utility untuk menata elemen visual secara instan dan konsisten.
