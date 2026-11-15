# Demo 4: Dynamic List Rendering & `replaceChildren()`

## Deskripsi Singkat
Modul demo ini membedah alur pengelolaan form dinamis dan teknik me-render ulang daftar (Slides 27–32):
1. **Pencegahan Default Reload**: `event.preventDefault()` pada handler submit form.
2. **Validasi Input**:
   - `namaInput.value.trim()` (menolak string kosong atau hanya spasi).
   - `nominalInput.valueAsNumber` dan `Number.isFinite(nominal)` (memastikan nilai numerik valid `> 0`).
3. **Pembersihan Kontainer dengan `replaceChildren()`**:
   - Mengosongkan kontainer `<ul>` sebelum render state baru, mencegah bug akumulasi elemen ganda (*duplicate children*).
4. **Keamanan Rendering**:
   - `li.textContent = ...` menjamin input nama tidak dievaluasi sebagai tag HTML.

## Instruksi Menjalankan
```bash
# Buka di browser
open slides-materials/web-development-banking-odp-v2/session-8/demo-4/2-solution/index.html
```
