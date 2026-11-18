# Hands-on Lab 12: Kalkulator Kurs Rupiah — Mini Capstone

## 1. Latar Belakang Proyek

Sebagai calon Software Engineer di BNI (ODP IT 2026), proyek **Kalkulator Kurs Rupiah (Mini Capstone)** ini adalah tugas akhir untuk mempraktikkan materi inti yang telah dipelajari dari Sesi 1 sampai Sesi 12.

Sebagai bank, BNI berhubungan erat dengan **kurs mata uang**. Pada proyek ini Anda akan membangun aplikasi web konversi kurs yang memakai data resmi publik: **[Frankfurter API](https://frankfurter.dev)** — API kurs referensi Bank Central Eropa (ECB) yang **gratis, tanpa API key, dan bisa diakses langsung dari browser** via `fetch`.

> [!NOTE]
> Aplikasi harus dibangun **murni frontend** (tanpa backend/server sendiri). Waktu pengerjaan: **2 hari** — batasi ruang lingkup sesuai waktu yang tersedia.

### Standar Dasar Aplikasi Web Perbankan

Di dunia perbankan, aplikasi web harus memenuhi standar dasar yang baik berikut ini:

| No | Aspek | Penjelasan |
| :---: | :--- | :--- |
| 1 | **Tampilan Rapi & Responsif** | Nyaman dibuka di HP maupun laptop tanpa ada bagian yang terpotong atau geser ke samping (*no horizontal scroll*). |
| 2 | **Aman dari XSS** | Data kode mata uang atau teks dari luar tidak boleh langsung dimasukkan via `innerHTML` sembarangan agar tidak disusupi skrip berbahaya. |
| 3 | **Ramah Aksesibilitas** | Formulir mudah digunakan, punya label yang jelas, dan status aplikasi terbaca oleh pembaca layar (*screen reader*). |
| 4 | **Anti-Klik Ganda** | Tidak ada request ganda saat pengguna mengklik tombol konversi berkali-kali dengan cepat. |
| 5 | **Penanganan Error yang Baik** | Kode mata uang tidak dikenal atau koneksi internet lambat tetap menampilkan pesan yang jelas tanpa mendadak *blank white screen* atau *crash*. |

---

## 2. Masalah yang Perlu Diselesaikan

Aplikasi **Kalkulator Kurs Rupiah** menampilkan hasil konversi jumlah uang untuk pasangan mata uang yang dipilih pengguna (contoh: `USD → IDR`).

### Tantangan yang Harus Anda Selesaikan

| No | Tantangan | Deskripsi |
| :---: | :--- | :--- |
| 1 | **Konversi Kurs via API** | Ambil kurs terkini dari **Latest Rates** (`https://api.frankfurter.dev/v1/latest?base=USD&symbols=IDR`), lalu tampilkan hasil konversi: jumlah input × kurs, beserta tanggal data. |
| 2 | **Kondisi Tampilan yang Jelas (UI States)** | Pengguna harus tahu apa yang sedang terjadi melalui 5 kondisi: **Loading** (tombol dinonaktifkan sementara), **Berhasil (Success)** — kartu hasil konversi, **Tidak Ditemukan (Empty)** — kode mata uang tidak ada, **Gagal (Error)** — kendala jaringan/server, dan **Input Tidak Valid (Invalid)**. |
| 3 | **Mencegah Klik Ganda (*Double Request*)** | Jika tombol konversi diklik cepat berkali-kali (*spam click*), aplikasi hanya boleh memproses satu permintaan saja. |
| 4 | **Riwayat Konversi (localStorage)** | Simpan maksimal **5 pasangan terakhir** pada key `bni-odp-kurs-history`. Riwayat berbentuk string pasangan (mis. `"USD/IDR"`), bisa diklik untuk konversi ulang, dan bisa dihapus. |
| 5 | **Nama Mata Uang** | API mengembalikan hanya kode ISO (mis. `USD`, `IDR`). Tampilkan **nama mata uang dalam Bahasa Indonesia** menggunakan fungsi murni pemetaan kode. |

---

## 3. Panduan Pengerjaan dari Nol (Build from Scratch)

Buatlah proyek ini dari folder kosong di komputer Anda sendiri.

### A. Pilihan Teknologi (Tooling)

Anda bebas memilih salah satu dari dua jalur pengembangan berikut:

| Jalur | Teknologi | Deskripsi |
| :---: | :--- | :--- |
| **A** | **Vite + Tailwind CSS / Bootstrap** | Inisialisasi proyek dengan Vite (`npm create vite@latest`), lalu styling memakai **Tailwind CSS** atau **Bootstrap**. Build production dihasilkan via Vite (`npm run build`). |
| **B** | **Vanilla HTML + CSS + JS** | Tanpa build tool sama sekali — HTML, CSS, dan JavaScript murni seperti pada sesi-sesi sebelumnya. Jalankan lokal dengan `python3 -m http.server 5500` atau Live Server. |

> [!IMPORTANT]
> Apapun jalur yang Anda pilih, **struktur berkas wajib di bawah tetap berlaku** dan semua fitur yang dinilai pada rubrik harus sama. Pastikan `index.html`, `styles/main.css`, dan `scripts/*.js` tetap dapat diakses pada jalur tersebut di repositori Anda (untuk jalur Vite, berkas sumber tetap disusun pada struktur ini sehingga test harness dapat mengevaluasinya).

### B. Daftar Kerja Terperinci

Gunakan **[TODO.md](./TODO.md)** sebagai checklist pribadi Anda — berisi rincian langkah dari fase persiapan, riset API, HTML, CSS, pure functions, orkestrasi, pengujian manual, deployment, hingga finalisasi repositori. Kerjakan berurutan dari folder kosong.

### C. Struktur File Proyek

```text
kurs-app/
├── README.md                      # Penjelasan cara pakai, fitur, dan link live demo aplikasi
├── .gitignore                     # Mengabaikan file yang tidak perlu di-upload (misal: .DS_Store, node_modules)
├── index.html                     # Halaman utama aplikasi (HTML semantik & aksesibel)
├── styles/
│   └── main.css                   # Stylesheet utama
└── scripts/
    ├── rate-helper.js             # Pure functions: URL builder dan nama mata uang
    ├── next-history.js            # Pure function: pengatur riwayat pasangan kurs (tanpa mutasi array)
    └── app.js                     # Penghubung event, DOM, dan localStorage
```

### D. Hal-Hal yang Wajib Dibuat

#### 1. Halaman HTML Semantik & Aksesibilitas

- Gunakan struktur standar: `<!DOCTYPE html>`, `<html lang="id">`, `<header>`, `<main>`, dan `<footer>`.
- Form konversi dengan `<form>`: input **jumlah** (`type="number"`), input **kode mata uang dasar** dan **kode tujuan** (`maxlength="3"`), masing-masing dipasangkan dengan `<label>` (`for`/`id`), dan tombol konversi.
- Kontainer status dengan `role="status"` dan `aria-live="polite"`.
- Sumber data Frankfurter/ECB di footer dengan tautan aman (`target="_blank"` dan `rel="noopener noreferrer"`).
- **Penting**: Gunakan **jalur relatif** (`./styles/main.css`, `./scripts/...`) agar aset tidak rusak saat di-deploy.

#### 2. Tampilan CSS Responsif

- Reset sederhana: `* { box-sizing: border-box; margin: 0; padding: 0; }`
- Hasil riwayat tampil sebagai deretan chip/pill yang wrap rapi di layar sempit.
- Rapi di layar HP tanpa *overflow* horizontal, kontras warna nyaman dibaca.
- **Jalur A (Tailwind/Bootstrap)**: gunakan utility/flex classes yang setara — yang dinilai adalah hasil responsifnya, bukan sintaks CSS mentahnya.

#### 3. Fungsi Logika JavaScript (Pure Functions) — `rate-helper.js`

- **`makeLatestURL(base, symbols)`**:
  - Validasi: `base` dan setiap item `symbols` harus string 3 huruf alfabet (`/^[A-Za-z]{3}$/`), jika tidak lempar `TypeError`.
  - Menyusun URL `https://api.frankfurter.dev/v1/latest` dengan parameter `base` dan `symbols` yang sudah **di-UPPERCASE** (`symbols` digabung dengan koma).
- **`describeCurrencyCode(code)`**:
  - Memetakan kode ISO ke nama Indonesia, minimal: `USD` → `"Dolar AS"`, `IDR` → `"Rupiah"`, `SGD` → `"Dolar Singapura"`, `JPY` → `"Yen Jepang"`, `EUR` → `"Euro"`, `GBP` → `"Poundsterling"`, `MYR`, `AUD`, `CNY`, `CHF`, `CAD`, `HKD`, `KRW`, `INR`.
  - Kode tidak dikenal → `"Mata uang tidak dikenal"` (case-insensitive).

#### 4. Fungsi Riwayat — `next-history.js`

- **`nextHistory(prevHistory, newPair, max = 5)`**:
  - Menerima riwayat sebelumnya, pasangan baru **string** `"USD/IDR"`, dan batas maksimal (5).
  - Validasi: `prevHistory` harus array; `newPair` harus string dengan pola `XXX/XXX` (keduanya 3 huruf alfabet). Jika tidak valid, kembalikan `prevHistory` apa adanya.
  - Bersihkan spasi dan cegah pasangan yang sama muncul dua kali (*case-insensitive*); simpan dalam format **UPPERCASE**.
  - Letakkan pasangan baru di urutan paling atas (indeks 0).
  - Batasi maksimal 5 item.
  - **Penting**: Jangan mengubah array asli `prevHistory`, selalu kembalikan array baru (*immutability*).

#### 5. Orkestrasi Aplikasi — `app.js`

- **Double-request guard**: di awal `loadRate()`:

  ```javascript
  if (button && button.disabled) return;
  ```

  Tombol dinonaktifkan saat loading (`button.disabled = true`) dan diaktifkan kembali di blok `finally`.
- **Validasi input**: jumlah harus number ≥ 0 dan kedua kode mata uang harus 3 huruf alfabet; jika gagal, tampilkan state `invalid`.
- **Pemanggilan API**: gunakan `async/await` dan `fetch()` untuk mengambil data dari Latest Rates API. Respons HTTP gagal (termasuk 404 kode tidak dikenal) harus ditangani sebagai state yang jelas, bukan crash.
- **Keamanan Anti-XSS**: semua teks dari input pengguna/API ditampilkan dengan `textContent`, hindari `innerHTML`.
- **Riwayat**: render chip dari string pasangan (`USD/IDR`), klik chip = konversi ulang, tombol "Hapus Riwayat" mengosongkan tampilan + `localStorage`.

#### 6. Unggah & Rilis Online (Pilihan Deployment)

Anda bebas memilih salah satu dari 3 platform hosting gratis:

- **Pilihan A: Vercel (Direkomendasikan)** — hubungkan repositori GitHub di [vercel.com](https://vercel.com), pilih repositori, klik **Deploy**.
- **Pilihan B: GitHub Pages** — **Settings** > **Pages**, pilih branch `main` dan folder `/ (root)`, klik **Save**.
- **Pilihan C: Netlify** — hubungkan repositori di [netlify.com](https://netlify.com) atau drag-and-drop folder proyek.

> [!NOTE]
> Platform mana pun yang dipilih, cantumkan tautan live pada `README.md` repositori GitHub dan pastikan aset CSS/JS termuat sempurna. Jalur Vite mengunggah hasil `npm run build` (folder `dist/`) atau mengonfigurasi build command pada platform tersebut.

---

## 4. Rubrik Penilaian Capstone 100 Poin

| No | Kategori | Skor | Bukti yang Dievaluasi |
| :---: | :--- | :---: | :--- |
| 1 | **Version Control & GitHub** | 10 | Riwayat commit terstruktur, repositori publik, `README.md` rapi dengan tautan live. |
| 2 | **HTML Semantik & Aksesibilitas** | 15 | Form berlabel (jumlah + 2 kode mata uang), `role="status"` & `aria-live="polite"`, atribusi Frankfurter/ECB, jalur relatif. |
| 3 | **CSS Responsif** | 10 | Tampilan rapi di HP & desktop tanpa overflow; chip riwayat wrap rapi. |
| 4 | **Fungsi Murni & Transformasi Data** | 20 | `makeLatestURL` (validasi + UPPERCASE), `describeCurrencyCode` (14 kode, case-insensitive), `nextHistory` (string pasangan, immutability). |
| 5 | **Integrasi API & Guard** | 25 | Latest Rates API, status UI lengkap (loading/success/empty/error/invalid), guard tombol disabled di `finally`, validasi input tanpa fetch. |
| 6 | **Penyimpanan Lokal & Deployment Live** | 20 | Riwayat 5 pasangan di `localStorage`, tombol cari ulang & hapus, serta tautan live (Vercel / GitHub Pages / Netlify) berfungsi lancar. |

---

## 5. Uji Otomatis (Test Harness)

Jalankan verifikasi otomatis dari folder proyek Anda:

```bash
node scripts/test-runner.js
```

Target: **100% (16/16 Checks Passed)** sebelum deployment.

> [!NOTE]
> Test harness mengevaluasi berkas sumber pada struktur wajib (`index.html`, `styles/main.css`, `scripts/*.js`) dan menerima gaya responsif dari kedua jalur tooling.
