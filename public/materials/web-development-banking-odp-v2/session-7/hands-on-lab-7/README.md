# Hands-on Lab 7: Financial Data Processing Engine & Reusable Functions

## 1. Latar Belakang & Deskripsi Masalah
Sebagai Software Engineer di Divisi IT Perbankan (BNI ODP IT 2026), Anda diminta merefaktor modul monolitik dan skrip kalkulasi batch prosedural menjadi arsitektur fungsi fungsional murni (**Pure Functions**). Arsitektur ini harus bersifat:
1. **Reusable**: Menerima data melalui parameter dan mengembalikan hasil melalui `return`.
2. **Immutable**: Tidak memutasi atau merusak array sumber transaksi asli.
3. **Defensive**: Memiliki penanganan terhadap input kosong (`[]`), nilai anomali, dan tipe data yang tidak sesuai.

Selain fungsi pemrosesan data, Anda juga mengimplementasikan simulasi validasi kredensial `checkLogin` yang mempraktikkan pola *Guard Clauses* dan *Early Return*.

---

## 2. Struktur Modul & Berkas
```text
hands-on-lab-7/
├── README.md                          # Dokumen spesifikasi bisnis & rubrik
├── 1-starter/                         # Workspace latihan trainee
│   ├── README.md                      # Panduan instruksional latihan
│   ├── banking-engine.js              # Template kode dengan TODO 1–5
│   ├── rekap-pesanan.js               # Challenge mandiri pesanan pelatihan
│   └── scripts/
│       └── test-runner.js             # Automated test harness trainee
└── 2-solution/                        # Solusi referensi instruktur
    ├── README.md                      # Panduan solusi dan arsitektur
    ├── banking-engine.js              # Implementasi 100% compliant
    ├── rekap-pesanan.js               # Solusi challenge mandiri
    └── scripts/
        └── test-runner.js             # Automated test harness solusi
```

---

## 3. Spesifikasi Teknis & Kebutuhan Bisnis

### A. Fungsi `checkLogin(username, password)` (Slide 15–16)
1. **Validasi Tipe Data Input**:
   - Jika `typeof username !== "string"` atau `typeof password !== "string"`, kembalikan `"input salah"`.
2. **Validasi Kredensial Pengguna**:
   - Jika `username === "Kosasih"` dan `password === "k0s4s1h"`, kembalikan `"login berhasil"`.
3. **Fallback**:
   - Jika username/password bertipe string namun tidak cocok, kembalikan `"coba lagi"`.

### B. Pipeline Data Transaksi Finansial (Slide 36–39)
Diberikan dataset transaksi perbankan:
```js
const transaksi = [
  { id: "T01", nominal: 50000, status: "berhasil" },
  { id: "T02", nominal: 25000, status: "gagal" },
  { id: "T03", nominal: 75000, status: "berhasil" },
  { id: "T04", nominal: -10000, status: "berhasil" }
];
```

1. **`ambilValid(data)`**:
   - Menggunakan method `filter()`.
   - Hanya meloloskan transaksi dengan kriteria: `status === "berhasil"` dan `nominal > 0`.
   - Mengembalikan array baru. Pada dataset di atas, menghasilkan transaksi `T01` dan `T03`.
2. **`ambilRingkasan(data)`**:
   - Menggunakan method `map()`.
   - Mentransformasi array objek menjadi array baru yang hanya memuat `{ id, nominal }`.
   - Menggunakan syntax implicit return object literal `({ id: item.id, nominal: item.nominal })`.
3. **`hitungTotal(data)`**:
   - Menggunakan method `reduce()`.
   - Menghitung akumulasi nilai `nominal`.
   - **Wajib** menggunakan `initialValue: 0`. Pada dataset valid di atas, mengembalikan angka `125000`.
   - Pada input array kosong `[]`, wajib mengembalikan angka `0`.
4. **Jaminan Immutabilitas**:
   - Seluruh fungsi di atas dilarang memodifikasi array input asli (tidak boleh ada `pop`, `shift`, `splice`, atau reassign properti objek langsung).

---

## 4. Challenge Mandiri: `rekap-pesanan.js` (Slide 41–42)
Lakukan pemrosesan 6 pesanan fiktif:
- Pesanan valid:
  1. HTML: 2 x Rp 150.000 = Rp 300.000 (status: `"lunas"`)
  2. CSS: 1 x Rp 200.000 = Rp 200.000 (status: `"lunas"`)
  3. JS: 3 x Rp 250.000 = Rp 750.000 (status: `"lunas"`)
- Pesanan anomali (wajib difilter):
  4. Status batal: 1 x Rp 100.000 (status: `"batal"`)
  5. Kuantitas nol: 0 x Rp 50.000 (status: `"lunas"`)
  6. Harga negatif: 2 x -Rp 50.000 (status: `"lunas"`)
- Target kalkulasi:
  - Total pendapatan bersih: **Rp 1.250.000**.

---

## 5. Rubrik Penilaian (100 Poin)
| No | Kriteria Evaluasi | Bobot | Indikator Keberhasilan |
| :---: | :--- | :---: | :--- |
| 1 | **Code Hygiene & Modern Syntax** | 10% | Larangan kata kunci `var`, penggunaan `const`/`let`, arrow function, dan template literals. |
| 2 | **Fungsi `checkLogin`** | 20% | Menangani guard clause tipe bukan string (`"input salah"`), kredensial keliru (`"coba lagi"`), dan valid (`"login berhasil"`). |
| 3 | **Fungsi `ambilValid`** | 20% | Menggunakan `filter()`, memfilter status bukan berhasil dan nominal non-positif. |
| 4 | **Fungsi `ambilRingkasan`** | 20% | Menggunakan `map()`, membentuk objek ringkas `{ id, nominal }` secara bersih. |
| 5 | **Fungsi `hitungTotal`** | 20% | Menggunakan `reduce()` dengan `initialValue: 0`, menghasilkan `125000` pada data valid dan `0` pada array kosong. |
| 6 | **Immutabilitas & Edge Cases** | 10% | Array sumber transaksi tidak termutasi; penanganan array kosong `[]` aman tanpa runtime crash. |

---

## 6. Cara Menjalankan Uji Otomatis
```bash
# Menjalankan pengujian pada starter
cd slides-materials/web-development-banking-odp-v2/session-7/hands-on-lab-7/1-starter
node scripts/test-runner.js

# Menjalankan pengujian pada solusi
cd slides-materials/web-development-banking-odp-v2/session-7/hands-on-lab-7/2-solution
node scripts/test-runner.js
node rekap-pesanan.js
```
