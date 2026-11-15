# Trainee Guide: Hands-on Lab 6 (`rekap-transaksi.js`)

## Misi Trainee
Anda ditugaskan membangun modul audit data mutasi perbankan `rekap-transaksi.js`:
1. Buat fungsi `rekapTransaksi(daftarTransaksi)` yang memproses array transaksi dengan loop `for...of`, melewati record tidak valid (`nominal <= 0` atau `status !== "BERHASIL"`) menggunakan `continue`, dan menghitung rekapitulasi data.
2. Buat fungsi `kategoriStatus(statusCode)` yang mengklasifikasikan kode status sistem via `switch-case`.
3. Buat fungsi `validasiPin(pinInput, pinBenar)` yang mengecek validitas format PIN 6 digit dan kecocokannya menggunakan pola Guard Clauses.

## Checklist Tugas & Target Poin (Total: 100 Poin)
- [ ] **Tugas 1: Rekapitulasi for...of (35 Poin)**
  - Mengiterasi `daftarTransaksi` menggunakan loop `for...of`.
  - Melewati transaksi tidak valid dengan `continue`.
  - Pada dataset latihan Sesi 6 (`T01`–`T04`), menghasilkan `totalBerhasil: 175000`, `jumlahBerhasil: 2`, dan `jumlahDilewati: 2`.
- [ ] **Tugas 2: Switch Status (25 Poin)**
  - Petakan `"BERHASIL"` -> `"SUKSES"`, `"PENDING"` -> `"MENUNGGU"`.
  - Gabungkan `"GAGAL"`, `"DITOLAK"`, `"KEDALUWARSA"` -> `"TIDAK_DIPROSES"`.
  - `default` -> `"TIDAK_DIKENAL"`.
- [ ] **Tugas 3: Validasi PIN Guard Clauses (20 Poin)**
  - Validasi string 6 digit angka dengan fail-fast returns.
- [ ] **Tugas 4: Defensive Guard (10 Poin)**
  - Lempar `Error("Input harus berupa array transaksi")` jika parameter bukan array.
- [ ] **Tugas 5: Standar Kode Bersih (10 Poin)**
  - Tidak menggunakan `var`. Lulus seluruh test runner.

## Cara Menjalankan Verifikasi Otomatis
```bash
node scripts/test-runner.js
```
