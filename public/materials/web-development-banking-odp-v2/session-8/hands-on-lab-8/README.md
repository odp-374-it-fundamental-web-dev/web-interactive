# Hands-on Lab 8: DOM Manipulation, Form Validation & Milestone 2 Real-Time Search

## 1. Latar Belakang & Deskripsi Masalah
Sebagai Software Engineer di Divisi IT Perbankan (BNI ODP IT 2026), Anda ditugaskan mengintegrasikan antarmuka interaktif pada aplikasi portal perbankan:
1. **Pencatatan Transaksi Kas (`#formTransaksi`)**:
   - Mencegah default page reload browser (`event.preventDefault()`).
   - Melakukan validasi input ketat (nama transaksi non-kosong, nominal angka valid `> 0`).
   - Menampilkan status umpan balik aksesibel (`role="status"`, `aria-live="polite"`).
   - Me-render ulang daftar transaksi secara aman menggunakan `replaceChildren()` dan `textContent` (mencegah duplikasi dan serangan XSS).
2. **Milestone 2: Mesin Pencarian Pelatihan Real-Time (`#cari` & `#hasil`)**:
   - Memfilter 5 koleksi data lokal pelatihan (`pelatihan`) secara instan pada event `input`.
   - Melakukan pencarian *case-insensitive* pada properti `nama` dan `kategori`.
   - Menangani kondisi hasil kosong dengan pesan ramah `"Tidak ada hasil."`.
3. **Tugas Mandiri (Challenge)**:
   - Filter dropdown kategori (`Semua`, `Web`, `Data`) yang terintegrasi dengan kata kunci pencarian.
   - Tombol **Hapus** pada setiap item transaksi untuk menghapus baris transaksi dari state array.

---

## 2. Struktur Modul & Berkas
```text
hands-on-lab-8/
├── README.md                          # Dokumen spesifikasi bisnis & rubrik
├── 1-starter/                         # Workspace latihan trainee
│   ├── README.md                      # Panduan instruksional latihan
│   ├── index.html                     # Kerangka HTML dengan landmark & form
│   ├── styles/main.css                # Styling antarmuka
│   ├── scripts/
│   │   ├── app.js                     # Template skrip dengan TODO 1–5
│   │   └── test-runner.js             # Automated test harness trainee
└── 2-solution/                        # Solusi referensi instruktur
    ├── README.md                      # Panduan solusi dan arsitektur
    ├── index.html                     # HTML lengkap dengan fitur challenge
    ├── styles/main.css                # Styling antarmuka lengkap
    ├── scripts/
    │   ├── app.js                     # Implementasi 100% compliant + challenge
    │   └── test-runner.js             # Automated test harness solusi
```

---

## 3. Spesifikasi Teknis & Kebutuhan Bisnis

### A. Komponen Form Transaksi (`#formTransaksi`)
1. **Atribut Aksesibilitas**:
   - `<form id="formTransaksi" novalidate>`: Menonaktifkan balon validasi bawaan browser agar error ditangani secara konsisten via JavaScript.
   - `<p id="pesan" role="status" aria-live="polite">`: Mengumumkan pesan validasi/keberhasilan kepada pengguna pembaca layar (*screen reader*).
2. **Event `submit`**:
   - Panggil `event.preventDefault()` di baris awal.
   - Ambil nilai `nama` dengan `.trim()`. Jika kosong, tolak dan tampilkan `"Isi nama dan nominal di atas 0."`.
   - Ambil nilai `nominal` via `valueAsNumber`. Gunakan `Number.isFinite(nominal)` dan pastikan `nominal > 0`.
   - Simpan objek `{ nama, nominal }` ke dalam state array `transaksi`.
   - Bersihkan kontainer `#daftarTransaksi` dengan `replaceChildren()` lalu render ulang seluruh `<li>`.

### B. Milestone 2: Pencarian Pelatihan Real-Time
1. **Dataset Pelatihan Deterministi**:
   ```javascript
   const pelatihan = [
     { id: 1, nama: "HTML Dasar", kategori: "Web" },
     { id: 2, nama: "CSS Layout", kategori: "Web" },
     { id: 3, nama: "JavaScript", kategori: "Web" },
     { id: 4, nama: "SQL Dasar", kategori: "Data" },
     { id: 5, nama: "Analisis Data", kategori: "Data" }
   ];
   ```
2. **Perilaku Pencarian (`input` event)**:
   - Ambil teks dari `#cari` dan normalisasi dengan `.trim().toLowerCase()`.
   - Filter `pelatihan` jika kata kunci ada pada `nama.toLowerCase()` ATAU `kategori.toLowerCase()`.
   - Panggil `hasil.replaceChildren()`.
   - Jika hasil filter kosong (`cocok.length === 0`), render pesan `"Tidak ada hasil."`.
   - Tampilkan seluruh 5 data saat halaman pertama kali dibuka atau ketika input dikosongkan.

---

## 4. Rubrik Penilaian (100 Poin)
| No | Kriteria Evaluasi | Bobot | Indikator Keberhasilan |
| :---: | :--- | :---: | :--- |
| 1 | **Struktur HTML & Aksesibilitas** | 15% | Form memakai `novalidate`, pesan feedback memakai `role="status"` dan `aria-live="polite"`, skrip dimuat dengan `defer`. |
| 2 | **Code Hygiene & Modern Syntax** | 10% | Larangan kata kunci `var`, penggunaan `const`/`let`, pemanfaatan arrow functions. |
| 3 | **Keamanan DOM (XSS Defense)** | 15% | Seluruh data masukan pengguna dirender via `textContent`, tidak ada injeksi `innerHTML` pada nilai dinamis. |
| 4 | **Form Submit & Validasi** | 20% | `preventDefault()` aktif, validasi nama `.trim()` dan nominal `> 0`, reset form pasca submit. |
| 5 | **Pembersihan Kontainer (`replaceChildren`)** | 20% | Menggunakan `replaceChildren()` sebelum iterasi render, mencegah akumulasi duplikasi node DOM. |
| 6 | **Milestone 2 Real-Time Search** | 20% | Filter case-insensitive, pencarian `"data"`, `"layout"`, `"xyz"` (pesan "Tidak ada hasil."), dan reset pencarian. |

---

## 5. Cara Menjalankan Uji Otomatis
```bash
# Menjalankan pengujian pada starter
cd slides-materials/web-development-banking-odp-v2/session-8/hands-on-lab-8/1-starter
node scripts/test-runner.js

# Menjalankan pengujian pada solusi
cd slides-materials/web-development-banking-odp-v2/session-8/hands-on-lab-8/2-solution
node scripts/test-runner.js
```
