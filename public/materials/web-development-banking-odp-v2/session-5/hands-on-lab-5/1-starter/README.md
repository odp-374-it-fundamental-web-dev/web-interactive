# Trainee Guide: Hands-on Lab 5 (`transaksi.js` & `pesanan.js`)

## Misi Trainee
Anda ditugaskan membangun fungsi kalkulasi finansial `transaksi.js` dan pengayaan pesanan pelatihan `pesanan.js`:
1. Buat fungsi `hitungTransaksi(harga, jumlah, diskon)` yang mengonversi input string/number secara eksplisit, menghitung subtotal dan total, menolak `NaN`/negatif, dan memastikan total tidak pernah bernilai minus.
2. Buat fungsi `buatTransaksi(id, deskripsi, nominal, status)` yang memodelkan transaksi menjadi objek lengkap dengan properti `waktu`.
3. Buat fungsi `kelolaNominal(arrayAwal, indexUbah, nilaiBaru, nilaiPush)` yang memutasi elemen dan menambah data ke array nominal.
4. Buat skrip tantangan mandiri `pesanan.js` untuk menghitung biaya pesanan 4 peserta pelatihan.

## Checklist Tugas & Target Poin (Total: 100 Poin)
- [ ] **Tugas 1: Kalkulasi & Konversi Eksplisit (30 Poin)**
  - Gunakan `Number()` untuk memastikan konversi numerik.
  - Skenario `harga = 25000, jumlah = "3", diskon = 5000` harus menghasilkan `{ subtotal: 75000, total: 70000 }`.
- [ ] **Tugas 2: Validasi & Error Handling (25 Poin)**
  - Lempar `new Error("Input tidak valid")` jika ada parameter bernilai `NaN` atau negatif.
  - Batasi nilai `total` terhitung minimal `0` (tidak boleh negatif).
- [ ] **Tugas 3: Pemodelan Objek Transaksi (25 Poin)**
  - Kembalikan objek `{ id, deskripsi, nominal, status, waktu }`. Default status: `"BERHASIL"`.
- [ ] **Tugas 4: Manipulasi Array (10 Poin)**
  - Mutasi indeks dan gunakan `push()` pada array nominal.
- [ ] **Tugas 5: Standar Kode Bersih (10 Poin)**
  - Tidak menggunakan `var`. Lulus seluruh unit test di `test-runner.js`.

## Cara Menjalankan Verifikasi Otomatis
```bash
node scripts/test-runner.js
```
