# Hands-on Lab 6: Rekapitulasi Transaksi Finansial (`rekap-transaksi.js`)

## 1. Executive Summary & Business Scenario
Sebagai Software Engineer di BNI ODP IT 2026, Anda ditugaskan membangun modul audit dan rekonsiliasi data mutasi rekening (`rekap-transaksi.js`). Sistem menerima sekumpulan log transaksi yang berpotensi memuat record transaksi pending, transaksi gagal, ataupun nilai nominal negatif/anomali akibat kesalahan sistem kliring hulu.

Modul ini bertanggung jawab memproses kumpulan transaksi menggunakan perulangan `for...of`, memvalidasi setiap record menggunakan percabangan boolean (`nominal > 0 && status === "BERHASIL"`), mengumpulkan transaksi valid, dan menghitung statistik rekonsiliasi (total saldo berhasil, kuantitas transaksi sukses, dan jumlah record yang dilewati/dieliminasi).

## 2. Business & Technical Acceptance Criteria

1. **Rekonsiliasi Transaksi (`rekapTransaksi`) (35 Poin):**
   - Menerima parameter array of objects `daftarTransaksi`.
   - Memproses setiap record menggunakan loop `for...of`.
   - Mengabaikan (skip dengan `continue`) record yang memiliki `nominal <= 0` atau `status !== "BERHASIL"`.
   - Mengembalikan ringkasan objek `{ totalBerhasil, jumlahBerhasil, jumlahDilewati, transaksiValid }`.
   - Pada dataset 4 transaksi latihan Sesi 6 (`T01`–`T04`), kalkulasi menghasilkan `totalBerhasil = 175000`, `jumlahBerhasil = 2`, dan `jumlahDilewati = 2`.
2. **Kategorisasi Status via Switch (`kategoriStatus`) (25 Poin):**
   - Menggunakan `switch-case` untuk memetakan kode status sistem perbankan:
     - `"BERHASIL"` -> `"SUKSES"`
     - `"PENDING"` -> `"MENUNGGU"`
     - `"GAGAL"`, `"DITOLAK"`, `"KEDALUWARSA"` -> `"TIDAK_DIPROSES"` (intentional fall-through)
     - status lain -> `"TIDAK_DIKENAL"`
3. **Validasi PIN Perbankan via Guard Clauses (`validasiPin`) (20 Poin):**
   - Memvalidasi PIN 6 digit angka menggunakan pola Guard Clauses.
   - Menolak input non-string atau panjang != 6 dengan `"FORMAT_TIDAK_VALID"`.
   - Mengembalikan `"PIN_BENAR"` jika cocok persis, dan `"PIN_SALAH"` jika tidak cocok.
4. **Defensive Validation & Array Input Check (10 Poin):**
   - Jika `rekapTransaksi` menerima input bukan array, lempar `Error("Input harus berupa array transaksi")`.
5. **Kepatuhan Standar Kode (10 Poin):**
   - Bebas keyword `var`, menggunakan perbandingan ketat `===`, dan lulus 100% automated test harness.

## 3. Rubrik Penilaian (Total: 100 Poin)

| Kriteria Penilaian | Bobot | Indikator Keberhasilan |
| :--- | :---: | :--- |
| **Rekonsiliasi & Loop** | 35% | Menggunakan `for...of` dan `continue`, hasil rekapitulasi 175.000 IDR tepat |
| **Kategorisasi Switch** | 25% | Menggunakan switch dengan case group fall-through dan default |
| **Validasi PIN Guard** | 20% | Early exit fail-fast, validasi format string 6 digit numerik |
| **Defensive Input** | 10% | Menolak input bukan array dengan Error terstruktur |
| **Kepatuhan Enterprise** | 10% | Strict equality `===`, bebas `var`, lulus 100% test runner |

## 4. Cara Menjalankan Automated Test Harness
```bash
cd slides-materials/web-development-banking-odp-v2/session-6/hands-on-lab-6/1-starter
node scripts/test-runner.js
```
