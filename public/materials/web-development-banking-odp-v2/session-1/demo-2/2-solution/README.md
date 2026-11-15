# Solusi: Tautan & Gambar

## Catatan Instruktur
- Tautan eksternal yang ditulis tanpa protokol (mis. `href="www.bni.co.id"`) akan dianggap browser sebagai subfolder file lokal (`./www.bni.co.id`), menyebabkan error HTTP 404. Solusinya adalah selalu menyertakan protokol lengkap `https://www.bni.co.id`.
- Atribut `rel="noopener noreferrer"` saat menggunakan `target="_blank"` mencegah halaman baru mengakses `window.opener` dari halaman asal, menutup potensi eksploitasi keamanan *reverse tabnabbing*.
- Path relatif gambar `assets/avatar.svg` memastikan portabilitas dokumen di berbagai server web dan direktori tanpa mengandalkan path absolut komputer lokal.
- Atribut `alt` wajib diisi secara deskriptif untuk memenuhi standar WCAG (aksesibilitas) bagi tunanetra.
