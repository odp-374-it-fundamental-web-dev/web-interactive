# Demo 4: GitHub Pages Deployment Readiness & Path Resolution

## Deskripsi Singkat
Modul demo ini membedah checklist kesiapan publikasi website statis ke GitHub Pages (Slides 26–31 Sesi 12):
1. **Bahaya Absolute Path (`/style.css`) pada Project Site**:
   - URL GitHub Pages untuk repository berbentuk `https://<username>.github.io/<repo-name>/`.
   - Menggunakan `/style.css` akan mencari di root domain `https://<username>.github.io/style.css` -> Menghasilkan **HTTP 404 Not Found**!
   - Selalu gunakan **Relative Path**: `./styles/main.css` atau `styles/main.css`.
2. **Case Sensitivity Nama Berkas**:
   - Server Linux (seperti GitHub Pages) bersifat *case-sensitive*. Berkas `app.js` tidak dapat dipanggil dengan `App.js`.
3. **Isolasi Origin Local Storage**:
   - Origin di `http://localhost:5500` terpisah dari `https://username.github.io`.
   - Data riwayat yang dibuat di localhost tidak akan berpindah ke URL publik.

## Instruksi Menjalankan
```bash
# Jalankan skrip pemeriksa deployment
node slides-materials/web-development-banking-odp-v2/session-12/demo-4/2-solution/scripts/check-deployment.js
```
