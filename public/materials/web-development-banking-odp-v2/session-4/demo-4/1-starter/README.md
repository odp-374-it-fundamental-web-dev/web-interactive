# Starter: Mobile-First Media Queries & Custom CSS Overrides

## Instruksi Latihan
Buka `index.html` dan `styles/custom.css`:
1. Pada `index.html`, perhatikan bahwa `styles/custom.css` saat ini dimuat **sebelum** Bootstrap! Perbaiki urutannya sehingga Bootstrap dimuat lebih dulu, diikuti oleh `styles/custom.css`.
2. Di dalam `styles/custom.css`:
   - Tulis gaya dasar `.hero-profile` secara mobile-first: `display: flex; flex-direction: column; text-align: center;`.
   - Tambahkan media query mobile-first `@media (min-width: 768px)`:
     - Ubah `flex-direction: row;`
     - Ubah `text-align: left;`
   - Override tombol Bootstrap `.btn-primary` agar menggunakan warna korporat oranye `#F05A22`.
