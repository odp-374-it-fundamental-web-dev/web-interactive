# Solusi: Pemasangan Bootstrap 5.3.8 CDN

## Catatan Instruktur
- Penggunaan CDN mempercepat waktu muat awal (*Initial Page Load*) karena aset Bootstrap kemungkinan besar sudah ter-cache di browser pengguna dari situs lain.
- Atribut `integrity` (Subresource Integrity / SRI) memastikan browser memverifikasi hash kriptografis berkas CSS dari CDN untuk mencegah modifikasi skrip oleh pihak ketiga yang jahat (*tampering / MITM*).
- Bootstrap `5.3` menyertakan sistem reset modern (*Reboot*) yang secara otomatis menyetel `box-sizing: border-box`, menormalkan font, dan menghilangkan margin bawaan browser.
