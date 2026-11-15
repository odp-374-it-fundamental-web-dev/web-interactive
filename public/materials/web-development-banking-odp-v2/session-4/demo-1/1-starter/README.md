# Starter: Pemasangan Bootstrap 5.3.8 CDN

## Instruksi Latihan
Buka `index.html`:
1. Tambahkan link CDN Bootstrap 5.3.8 CSS ke dalam elemen `<head>`:
   ```html
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIx6qjGz2A5KWpD2uE+g+sC9k7e8p8E2Y3eM2x3R1U5x6qjGz2A5KWpD2uE+g+s" crossorigin="anonymous">
   ```
   *(Atau gunakan URL standar jsDelivr Bootstrap 5.3).*
2. Tambahkan script bundle Bootstrap JS tepat sebelum tag penutup `</body>`:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
   ```
3. Tambahkan kelas `.container` pada elemen `<main>` dan `.py-5` untuk padding vertikal.
4. Terapkan kelas utility `.bg-light`, `.p-4`, `.rounded`, dan `.shadow-sm` pada kartu informasi perbankan.
