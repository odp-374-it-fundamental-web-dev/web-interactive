# TODO Checklist — Kalkulator Kurs Rupiah (Mini Capstone)

> Gunakan berkas ini sebagai daftar kerja pribadi Anda. Kerjakan **dari nol** (folder kosong), centang (`[x]`) setiap item yang sudah benar-benar selesai dan teruji. Dengan waktu 1 hari, kerjakan fase berurutan dan **jangan berlama-lama di satu fase** — commit setiap fase selesai.

---

## Fase 0 — Persiapan Proyek (± 30 menit)

- [ ] Tentukan jalur tooling: **Vite + Tailwind CSS / Bootstrap** atau **Vanilla HTML + CSS + JS** (lihat README bagian 3A).
- [ ] Buat repositori baru di GitHub (publik), misalnya `bni-kurs-app`.
- [ ] Clone repositori ke komputer lokal Anda, masuk ke folder proyek.
- [ ] Buat struktur folder wajib: `styles/` dan `scripts/`.
- [ ] Buat berkas kosong: `index.html`, `styles/main.css`, `scripts/rate-helper.js`, `scripts/next-history.js`, `scripts/app.js`.
- [ ] Buat berkas `.gitignore` (minimal mengabaikan `.DS_Store` dan `node_modules/` bila pakai Vite).
- [ ] Buat berkas `README.md` proyek (kerangka saja dulu: nama aplikasi, cara menjalankan — isi link live demo belakangan).
- [ ] Buat branch `main` dan lakukan commit awal.

---

## Fase 1 — Riset API (± 20 menit, tanpa menulis kode aplikasi)

> Lakukan eksperimen di terminal (`curl`) atau browser sebelum menyentuh kode, agar Anda paham bentuk datanya.

- [ ] Buka dokumentasi resmi Frankfurter (`frankfurter.dev`) dan baca bagian *Latest*.
- [ ] Panggil endpoint **latest** untuk pasangan `USD → IDR` dan perhatikan bentuk JSON-nya: di mana letak nilai kurs? di mana letak tanggal data?
- [ ] Cari tahu apa yang terjadi jika kode mata uang salah (mis. `XXX`) — status HTTP berapa? (Ini menentukan cara Anda menangani state *empty*.)
- [ ] Catat di `README.md` proyek: contoh URL endpoint yang Anda pakai beserta ringkasan bentuk responsnya.

---

## Fase 2 — HTML (`index.html`, ± 45 menit)

### Struktur & Semantik

- [ ] `<!DOCTYPE html>` + `<html lang="id">` lengkap.
- [ ] `<meta charset>` dan `<meta viewport>` terpasang.
- [ ] `<title>` yang bermakna (nama aplikasi, bukan "Document").
- [ ] Struktur landmark: `<header>` (judul + subjudul), `<main>` (seluruh konten utama), `<footer>` (atribusi sumber data).
- [ ] CSS dimuat via `<link rel="stylesheet">` dengan **jalur relatif** (`./styles/main.css`).
- [ ] Ketiga skrip dimuat dengan `defer` dan **jalur relatif** (`./scripts/...`), urutan: helper → history → app.

### Form Konversi

- [ ] Semua input berada di dalam satu `<form>` (submit ditangani via JS, bukan navigasi bawaan).
- [ ] Input **jumlah** bertipe `number` (non-negatif) dan punya pasangan `<label>` dengan atribut `for`/`id`.
- [ ] Input **kode mata uang dasar** (maks 3 karakter) dan pasangan `<label>`-nya.
- [ ] Input **kode mata uang tujuan** (maks 3 karakter) dan pasangan `<label>`-nya.
- [ ] Tombol submit konversi di dalam form.
- [ ] Setiap input punya `placeholder` yang menjelaskan contoh isian.

### Kontainer Status & Hasil

- [ ] Elemen `<p>` status dengan `role="status"` dan `aria-live="polite"` (kosong saat awal).
- [ ] Kontainer kartu hasil konversi.
- [ ] `<section>` riwayat berisi heading, tombol "Hapus Riwayat" (`type="button"`), dan kontainer chip riwayat.
- [ ] Footer memuat atribusi Frankfurter/ECB dengan link `target="_blank"` **dan** `rel="noopener noreferrer"`.

---

## Fase 3 — CSS (`styles/main.css`, ± 45 menit)

- [ ] Reset sederhana (`box-sizing: border-box` + `margin: 0` + `padding: 0`) pada selector universal.
- [ ] Definisikan warna via CSS custom properties (`:root`): minimal warna utama, latar, teks, border, dan aksen.
- [ ] `body`: font keluarga system-stack, latar netral, warna teks kontras (cek minimal rasio AA).
- [ ] Kontainer utama: lebar maksimum, ter-center, kartu putih dengan border/sudut membulat.
- [ ] Form: layout fleksibel yang tidak pecah saat wrap di layar sempit.
- [ ] Focus state yang jelas pada input (outline/ring) — aksesibilitas.
- [ ] Status tombol: gaya berbeda untuk `hover`, `active`, dan **`:disabled`** (jelas terlihat non-klik).
- [ ] Kotak status: gaya berbeda per kondisi (loading/success/empty/error/invalid) — mis. warna border kiri + latar.
- [ ] Kotak status **tidak menyisakan ruang kosong** saat isinya kosong.
- [ ] Kartu hasil utama: menonjol (mis. latar gradient warna utama, teks terang).
- [ ] Chip riwayat: pill shape, wrap rapi ke baris baru saat banyak.
- [ ] Uji di ukuran layar HP (~360px) dan desktop: **tidak ada horizontal scroll** di ukuran mana pun.

---

## Fase 4 — Pure Functions: `scripts/rate-helper.js` (± 40 menit)

> Semua fungsi di berkas ini HARUS murni: tanpa `fetch`, tanpa DOM, tanpa `localStorage`. Uji tiap fungsi langsung di Node (`node -e "..."` atau REPL) sebelum lanjut.

- [ ] `makeLatestURL(base, symbols)` — memvalidasi `base`: string tepat 3 huruf alfabet; melempar `TypeError` jika tidak.
- [ ] Memvalidasi `symbols`: array, minimal 1 item, setiap item string 3 huruf alfabet; melempar `TypeError` jika tidak.
- [ ] Menghasilkan URL endpoint latest dengan `base` dan `symbols` **UPPERCASE** (input huruf kecil pun harus menghasilkan URL huruf besar).
- [ ] `describeCurrencyCode(code)` — memetakan minimal 14 kode (USD, IDR, SGD, JPY, EUR, GBP, MYR, AUD, CNY, CHF, CAD, HKD, KRW, INR) ke nama Bahasa Indonesia.
- [ ] Case-insensitive: kode huruf kecil menghasilkan nama yang sama.
- [ ] Kode tidak dikenal / bukan string mengembalikan label "tidak dikenal", bukan `undefined` atau error.
- [ ] Ekspor modul Node tetap terpasang (`module.exports`) agar bisa diuji di Node.

---

## Fase 5 — Pure Function: `scripts/next-history.js` (± 30 menit)

- [ ] `nextHistory(prev, newPair, max = 5)` — menerima pasangan baru **string** `"USD/IDR"` (bukan objek).
- [ ] `prev` bukan array → mengembalikan array kosong.
- [ ] Entri invalid (bukan string / tanpa pemisah `/` / kode bukan 3 huruf) → mengembalikan `prev` apa adanya.
- [ ] Spasi di sekitar string dibersihkan; hasil tersimpan dalam format **UPPERCASE**.
- [ ] Deduplikasi: pasangan yang sama (abaikan besar-kecil huruf) **dibuang dari posisi lamanya** sebelum pasangan baru disisipkan.
- [ ] Pasangan baru selalu di indeks 0 (paling atas).
- [ ] Panjang hasil tidak pernah melebihi `max`.
- [ ] **Immutability**: array `prev` asli tidak berubah (uji: salin dulu sebelum panggil, bandingkan JSON-nya setelahnya).
- [ ] Uji manual semua kasus di Node: pasangan baru, duplikat, batas `max`, entri invalid.

---

## Fase 6 — Orkestrasi: `scripts/app.js` (± 90 menit)

### Pengambilan Referensi DOM & State

- [ ] Semua elemen yang dibutuhkan diambil sekali di awal (form, 3 input, tombol submit, status, kontainer hasil, kontainer riwayat, tombol hapus riwayat).
- [ ] Konstanta key `localStorage` sudah ditentukan (jangan hardcode string di banyak tempat).

### UI States

- [ ] Fungsi `setState(state)` yang mengubah teks + kelas kotak status sekaligus.
- [ ] Kondisi **loading**: kotak status tampil, tombol submit `disabled = true`.
- [ ] Kondisi **success**: kotak status sukses, kartu hasil tampil.
- [ ] Kondisi **empty**: kotak status "tidak ditemukan", kartu hasil dikosongkan.
- [ ] Kondisi **error**: kotak status ramah (bukan stack trace), kartu hasil dikosongkan.
- [ ] Kondisi **invalid**: muncul saat jumlah kosong/negatif atau kode bukan 3 huruf — **tanpa memanggil API sama sekali**.

### Data & Riwayat (localStorage)

- [ ] Fungsi baca riwayat yang **toleran terhadap data rusak** (JSON tidak valid / bukan array / item bukan string → tetap aman, tidak crash).
- [ ] Fungsi simpan riwayat yang menangkap kegagalan kuota/error (try-catch, log ke console).
- [ ] Setelah konversi sukses, pasangan baru (`BASE/TARGET`) dimasukkan ke riwayat via `nextHistory` (fungsi murni dari Fase 5) lalu disimpan.
- [ ] Fungsi render riwayat: chip per pasangan, state kosong ada teks placeholder.
- [ ] Klik chip: mengisi ulang kedua input dengan pasangan tersebut lalu menjalankan konversi.
- [ ] Tombol "Hapus Riwayat": mengosongkan `localStorage` (key riwayat saja) dan merender ulang.

### Jaringan

- [ ] Fungsi pembantu `getJSON` yang melempar error bila respons tidak `ok` (HTTP error bukan dianggap sukses).
- [ ] `loadRate()`:
  - [ ] Validasi input dulu (state `invalid` bila gagal, tanpa fetch).
  - [ ] Guard klik ganda di baris awal.
  - [ ] Panggil endpoint latest dengan pasangan dari input.
  - [ ] `catch`: error di-log dan state error ditampilkan (respons 404 juga tertangkap di sini — pastikan pesannya sesuai).
  - [ ] `finally`: tombol submit diaktifkan kembali — apapun hasilnya.

### Rendering (semua via `textContent` / `replaceChildren` — nol `innerHTML`)

- [ ] Kartu hasil: jumlah + hasil konversi terformat (format angka ribuan Indonesia), rasio 1-unit, dan tanggal data.
- [ ] Kartu hasil memakai `describeCurrencyCode` untuk menampilkan nama mata uang.
- [ ] Rate tidak tersedia di data → tampil teks fallback, bukan `undefined`/`NaN`.

### Inisialisasi & Event

- [ ] Submit form: `preventDefault()`, panggil `loadRate`.
- [ ] Event listener terpasang dengan penjagaan elemen ada (tidak crash bila elemen hilang).
- [ ] Saat halaman dibuka: riwayat dirender — **localStorage tidak pernah dihapus saat startup**.

### Kebersihan Kode

- [ ] Tidak ada `var` — semua `const`/`let`.
- [ ] Tidak ada `innerHTML` dengan data dinamis di seluruh `app.js`.
- [ ] Error di-log secukupnya untuk debugging.

---

## Fase 7 — Pengujian Manual di Browser (± 40 menit)

- [ ] Jalankan server lokal (`python3 -m http.server 5500` atau Live Server) — buka di browser.
- [ ] Konversi normal (mis. `100 USD → IDR`): kartu hasil tampil dengan angka terformat dan tanggal data.
- [ ] Kode mata uang salah (mis. `ZZZ`): state *empty* tampil, tanpa crash.
- [ ] Matikan koneksi / blokir API (DevTools > Network > Offline): state *error* tampil.
- [ ] Kosongkan jumlah / isi kode 2 huruf: state *invalid*, tab Network **tidak ada request**.
- [ ] Spam klik tombol konversi 5× cepat: hanya 1 request di tab Network.
- [ ] Riwayat: pasangan duplikat tidak menumpuk (cari `usd idr` lalu `USD IDR` — tetap 1 chip, format tampil `USD/IDR`); maksimal 5 chip; hapus riwayat berfungsi; riwayat bertahan setelah refresh.
- [ ] Buka DevTools > Console: tidak ada error merah selama alur normal.
- [ ] Uji dengan screen reader (atau pemeriksaan aksesibilitas DevTools/Lighthouse): perubahan status terbaca.
- [ ] Jalankan `node scripts/test-runner.js` hingga **16/16 Checks Passed**.

---

## Fase 8 — Deployment (± 30 menit)

- [ ] Semua aset memakai jalur relatif `./` (cek ulang `index.html`).
- [ ] Pilih platform: Vercel / GitHub Pages / Netlify.
- [ ] (Jalur Vite) Pastikan build production (`npm run build`) sukses dan output-nya yang dipublikasikan.
- [ ] Deploy dan tunggu URL live aktif.
- [ ] Buka URL live di browser (mode incognito): CSS dan JS termuat, alur konversi berfungsi penuh.
- [ ] Uji ulang 3 kasus kunci di URL live: konversi sukses, kode tidak ditemukan, riwayat tersimpan.
- [ ] Cantumkan link live di `README.md` repositori.

---

## Fase 9 — Finalisasi Repositori (± 20 menit)

- [ ] `README.md` proyek lengkap: nama aplikasi, fitur, cara menjalankan lokal, teknologi yang dipakai, link live demo, atribusi API.
- [ ] Riwayat commit rapi: pesan commit deskriptif per fase (bukan satu commit "selesai" di akhir).
- [ ] Tidak ada berkas sampah ter-commit (`.DS_Store`, `node_modules`, berkas system).
- [ ] Repository publik dan tautan GitHub + tautan live siap diserahkan kepada penguji.

---

## Self-Check Rubrik (100 Poin)

| Kategori | Skor | Item checklist terkait |
| :--- | :---: | :--- |
| Version Control & GitHub | 10 | Fase 0, Fase 9 |
| HTML Semantik & Aksesibilitas | 15 | Fase 2 |
| CSS Responsif | 10 | Fase 3 |
| Fungsi Murni & Transformasi Data | 20 | Fase 4, Fase 5 |
| Integrasi API & Guard | 25 | Fase 6, Fase 7 |
| Penyimpanan Lokal & Deployment Live | 20 | Fase 6, Fase 8 |
