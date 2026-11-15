# Demo 1: Evidence-Based Debugging & Root-Cause Analysis

## Deskripsi Singkat
Modul demo ini membedah metodologi debugging berbasis bukti (*Evidence-Based Debugging*) sesuai standar perbankan (Slides 4–11 Sesi 11):
1. **Langkah Debugging Sistematis**:
   - Langkah Reproduksi (*Reproduction Steps*): Rincian tindakan untuk memicu error.
   - Perbandingan *Expected* vs *Actual*: Apa yang seharusnya terjadi vs apa yang terjadi.
   - Bukti Nyata: Stack trace di Console, variabel pada panel Scope Sources, atau payload di Network.
   - Perbaikan Penyebab Tunggal: Jangan menebak-nebak atau mengubah banyak hal acak sekaligus.
   - Uji Ulang & Regresi.
2. **Studi Kasus Bug Geocoding**:
   - Kode bug: Mengakses `data.results[1]` (mengambil item kedua alih-alih pertama) atau melempar crash `TypeError: Cannot read properties of undefined` saat kota tidak ditemukan.
   - Solusi defensif: `data.results?.[0] ?? null`.

## Instruksi Menjalankan
```bash
# Jalankan solusi referensi
node slides-materials/web-development-banking-odp-v2/session-11/demo-1/2-solution/debug-bug.js
```
