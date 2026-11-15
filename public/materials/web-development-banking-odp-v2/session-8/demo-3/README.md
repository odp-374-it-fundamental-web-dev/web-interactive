# Demo 3: Event Listeners, Callbacks & Event Object

## Deskripsi Singkat
Modul demo ini membedah mekanisme Event Listener di browser (Slides 22–26):
1. **Pemasangan Listener**:
   ```js
   element.addEventListener(eventType, callbackFunction);
   ```
2. **Pentingnya Referensi Fungsi pada `removeEventListener`**:
   - Menghapus listener **wajib** menggunakan referensi nama fungsi yang sama persis.
   - Menggunakan anonymous function `() => ...` tidak dapat dilepas oleh `removeEventListener` karena menciptakan referensi objek memori baru.
3. **Objek Event (`event`)**:
   - Membaca `event.type` (jenis kejadian, misal `"click"`, `"input"`).
   - Membaca `event.target` (node DOM yang memicu event).

## Instruksi Menjalankan
```bash
# Buka di browser
open slides-materials/web-development-banking-odp-v2/session-8/demo-3/2-solution/index.html
```
