# Demo 3: Responsive Auto-Fit CSS Grid for 7-Day Forecast Cards

## Deskripsi Singkat
Modul demo ini membedah perancangan tata letak responsif modern menggunakan CSS Grid untuk menampilkan kartu cuaca harian (Slides 15–16 Sesi 12):
1. **Pola CSS Grid Auto-Fit**:
   ```css
   .forecast-grid {
     display: grid;
     grid-template-columns: repeat(auto-fit, minmax(8.5rem, 1fr));
     gap: 0.75rem;
   }
   ```
2. **Keunggulan Tanpa Media Query Berlebih**:
   - Pada layar desktop lebar: 7 kartu berjejer horizontal dalam satu baris.
   - Pada layar tablet: Kartu otomatis terbagi menjadi 3 atau 4 kolom.
   - Pada layar mobile sempit: Kartu otomatis terbungkus rapi menjadi 2 kolom atau 1 kolom tanpa overflow horizontal (*zero horizontal scrollbar*).

## Instruksi Menjalankan
```bash
# Buka di browser dan resize ukuran window untuk melihat responsivitas
open slides-materials/web-development-banking-odp-v2/session-12/demo-3/2-solution/index.html
```
