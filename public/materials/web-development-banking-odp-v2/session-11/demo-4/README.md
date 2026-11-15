# Demo 4: Race Condition Guard & Double-Submit Prevention

## Deskripsi Singkat
Modul demo ini mempraktikkan mitigasi masalah *race condition* dan pengiriman berulang (*double-submit*) pada aplikasi perbankan (Slide 32 Sesi 11):
1. **Bahaya Race Condition**:
   - Jika pengguna mengklik tombol pencarian berkali-kali secara cepat, beberapa request asinkron berjalan paralel.
   - Respons dari request lama bisa tiba lebih lambat daripada respons terbaru, menimpa data yang valid dengan data usang (*stale data*).
2. **Pola Early Guard Clause**:
   ```javascript
   async function loadWeather(name) {
     // Guard: Jika sedang loading, batalkan panggilan baru langsung
     if (button.disabled) return;
     button.disabled = true;
     try {
       // Operasi asinkron...
     } finally {
       button.disabled = false;
     }
   }
   ```

## Instruksi Menjalankan
```bash
# Buka di browser
open slides-materials/web-development-banking-odp-v2/session-11/demo-4/2-solution/index.html
```
