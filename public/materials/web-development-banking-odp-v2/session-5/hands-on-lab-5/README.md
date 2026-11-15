# Hands-on Lab 5: Engine Perhitungan Transaksi Finansial (`transaksi.js`)

## 1. Executive Summary & Business Scenario
Sebagai calon IT Software Engineer di BNI ODP IT 2026, Anda ditugaskan membangun modul kalkulasi transaksi finansial dan pesanan pelatihan internal (`transaksi.js` dan `pesanan.js`). Modul ini memproses input harga barang, jumlah kuantitas, dan potongan diskon promosi yang sering kali diterima dari formulir web dalam bentuk string numerik (`"3"`, `"25000"`).

Modul ini harus mengonversi input secara eksplisit ke tipe `number`, mencegah jebakan penggabungan string (*string concatenation coercion*), memvalidasi batas nilai non-negatif, serta memodelkan transaksi ke dalam struktur objek dan array standar perbankan.

## 2. Business & Technical Acceptance Criteria

1. **Kalkulasi & Konversi Eksplisit (30 Poin):**
   - Fungsi `hitungTransaksi(harga, jumlah, diskon)` mengonversi input menjadi number (`Number(val)`).
   - Menghitung `subtotal = harga * jumlah` dan `total = subtotal - diskon`.
   - Mampu menangani input bertipe string (mis. `harga = 25000`, `jumlah = "3"`, `diskon = "5000"` menghasilkan `subtotal: 75000` dan `total: 70000`).
2. **Defensive Validation & Guard Clauses (25 Poin):**
   - Jika salah satu parameter tidak dapat dikonversi menjadi angka valid (`NaN`) atau bernilai negatif, lempar `Error("Input tidak valid")`.
   - Jika nilai `total` terhitung bernilai negatif (diskon melebihi subtotal), kembalikan `total: 0`.
3. **Pemodelan Objek Transaksi (25 Poin):**
   - Fungsi `buatTransaksi(id, deskripsi, nominal, status)` mengembalikan objek transaksi perbankan `{ id, deskripsi, nominal, status, waktu }`.
   - Properti `waktu` otomatis terisi timestamp string.
4. **Manipulasi Array Finansial (10 Poin):**
   - Fungsi `kelolaNominal(arrayAwal, indexUbah, nilaiBaru, nilaiPush)` mengubah elemen pada `indexUbah` dan menambahkan `nilaiPush` menggunakan `push()`.
5. **Kepatuhan Data & Standar Perbankan (10 Poin):**
   - Bebas penggunaan `var` (hanya `const` dan `let`).
   - Lulus 100% verifikasi automated test runner.

## 3. Rubrik Penilaian (Total: 100 Poin)

| Kriteria Penilaian | Bobot | Indikator Keberhasilan |
| :--- | :---: | :--- |
| **Kalkulasi Presisi** | 30% | Subtotal dan total terhitung benar dari input number maupun string |
| **Validasi & Error Handling** | 25% | Menolak `NaN` dan angka negatif, total tidak boleh negatif |
| **Objek Transaksi** | 25% | Mengembalikan struktur objek standar perbankan ber-timestamp |
| **Manipulasi Array** | 10% | Mutasi elemen sesuai indeks dan operasi push |
| **Clean Code & Keamanan** | 10% | Tidak menggunakan `var`, lulus 100% test harness |

## 4. Cara Menjalankan Automated Test Harness
```bash
cd slides-materials/web-development-banking-odp-v2/session-5/hands-on-lab-5/1-starter
node scripts/test-runner.js
```
