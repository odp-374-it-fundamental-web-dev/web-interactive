# Demo 2: Safe DOM Modification & Security (`textContent` vs `innerHTML`)

## Deskripsi Singkat
Modul demo ini mempraktikkan manipulasi node DOM sesuai materi Slide 15–20:
1. **Keamanan Konten & Mitigasi Cross-Site Scripting (XSS)**:
   - `textContent`: Menetapkan konten murni teks. Karakter HTML seperti `<script>` atau `<img onerror=...>` tidak akan dievaluasi oleh browser engine (aman dari injeksi XSS).
   - `innerHTML`: Mengurai string sebagai markup HTML. Sangat berbahaya jika digunakan untuk merender input pengguna tanpa sanitasi ketat.
2. **Manipulasi Kelas CSS (`classList`)**:
   - `classList.add("nama-kelas")`
   - `classList.remove("nama-kelas")`
   - `classList.toggle("nama-kelas")`
3. **Pembuatan Elemen Dinamis**:
   - `document.createElement("tag")`
   - `parent.appendChild(child)`
   - `child.remove()`

## Instruksi Menjalankan
```bash
# Buka file di browser
open slides-materials/web-development-banking-odp-v2/session-8/demo-2/2-solution/index.html
```
Perhatikan di console dan tampilan browser bagaimana payload XSS diperlakukan oleh `textContent` vs `innerHTML`.
