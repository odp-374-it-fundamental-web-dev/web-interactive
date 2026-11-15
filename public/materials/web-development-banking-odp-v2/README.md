# Web Development Fundamentals — BNI ODP IT 2026: Training Materials

## 1. Programme Overview
Repositori ini memuat seluruh materi praktikum, paket starter peserta (*trainee starter packs*), dan kode solusi referensi instruktur (*instructor reference solutions*) untuk program pelatihan intensif **Web Development Fundamentals — BNI Officer Development Program (ODP IT) 2026** (12 Sesi / 42 Jam Pelatihan).

- **Curriculum Reference:** [`researches/web-development-banking-odp-v2/curriculum.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/researches/web-development-banking-odp-v2/curriculum.md)
- **Slide Decks Reference:** [`slides-creation/web-development-banking-odp-v2/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-creation/web-development-banking-odp-v2/)
- **Target Audience:** Peserta BNI ODP IT Dev 2026 (calon Software Engineer perbankan)
- **Sektor & Tata Kelola:** Perbankan Digital BNI, Regulasi OJK & Bank Indonesia, Kepatuhan Aksesibilitas WCAG 2.1 AA, dan Perlindungan Data Sensitif (*Zero Credentials/PII in code & repository*).

---

## 2. Struktur Modul & Arsitektur Direktori

Seluruh materi diorganisasikan ke dalam 12 sesi praktikum dengan arsitektur dual-folder yang ketat:
- **`1-starter/`**: Workspace latihan mandiri bagi trainee dengan panduan pedagogis dan komentar `TODO` bernomor.
- **`2-solution/`**: Solusi referensi produksi instruktur yang 100% compliant dengan standar industri perbankan dan lolos uji otomatis (*test harness*).

```text
slides-materials/web-development-banking-odp-v2/
├── README.md                          # Master programme documentation
├── session-1/                         # [FASE 1] Web Fundamentals & Semantic HTML5 (100% Verified)
├── session-2/                         # [FASE 1] HTML Forms, Git & GitHub (100% Verified)
├── session-3/                         # [FASE 1] CSS Fundamentals & Modern Layouts (100% Verified)
├── session-4/                         # [FASE 1] Responsive Website with Bootstrap (100% Verified)
├── session-5/                         # [FASE 2] JavaScript Fundamentals (100% Verified)
├── session-6/                         # [FASE 2] Conditional & Looping (100% Verified)
├── session-7/                         # [FASE 2] Functions & Data Processing (100% Verified)
├── session-8/                         # [FASE 2] DOM, Events & Form Interaction (100% Verified)
├── session-9/                         # [FASE 3] Asynchronous JavaScript & REST APIs (100% Verified)
├── session-10/                        # [FASE 3] Array Search, Sorting & LocalStorage (100% Verified)
├── session-11/                        # [FASE 3] Debugging, Testing & Project Integration (100% Verified)
└── session-12/                        # [FASE 3] Capstone Mini Project & Deployment (100% Verified)
```

---

## 3. Matriks Sesi & Silabus

| Sesi | Topik Utama | Demos | Hands-on Lab | Status Kelulusan |
| :---: | :--- | :---: | :--- | :---: |
| **1** | **Web Fundamentals & HTML5**<br>HTTP lifecycle, anatomi HTML5, metadata, links, semantik landmarks, data tables. | 4 Demos | `hands-on-lab-1`: Profil Web Mandiri & `jadwal.html` | **12/12 Passed (100%)** |
| **2** | **HTML Forms, Git & GitHub**<br>Label-input pairing, validasi deklaratif, metode POST vs GET, Git CLI & `.gitignore`. | 4 Demos | `hands-on-lab-2`: Formulir Kontak & `pendaftaran.html` | **13/13 Passed (100%)** |
| **3** | **CSS Fundamentals & Layout**<br>External CSS, Specificity, Box Model border-box reset, Flexbox 1D, CSS Grid 2D. | 4 Demos | `hands-on-lab-3`: Styling Terpadu Profil & Kontak | **12/12 Passed (100%)** |
| **4** | **Responsive Website with Bootstrap**<br>Bootstrap 5.3.8 CDN, komponen UI, grid 12 kolom, media queries mobile-first. | 4 Demos | `hands-on-lab-4`: Portal Profil Responsif Bootstrap | **12/12 Passed (100%)** |
| **5** | **JavaScript Fundamentals**<br>Runtime Console vs Node.js, `const`/`let`, konversi eksplisit `Number()`, model objek/array. | 4 Demos | `hands-on-lab-5`: Engine Transaksi & `pesanan.js` | **10/10 Passed (100%)** |
| **6** | **Conditional & Looping**<br>Strict equality `===`, 8 Falsy values, Guard Clauses, `switch-case`, iterasi defensif. | 4 Demos | `hands-on-lab-6`: Rekapitulasi Transaksi Finansial | **10/10 Passed (100%)** |
| **7** | **Functions & Data Processing**<br>Function declaration/expression/arrow, early return `checkLogin`, callbacks, array methods. | 4 Demos | `hands-on-lab-7`: Financial Data Processing Engine | **10/10 Passed (100%)** |
| **8** | **DOM, Events & Form Interaction**<br>DOM traversal, anti-XSS `textContent`, event handling, `replaceChildren()`, **Milestone 2**. | 4 Demos | `hands-on-lab-8`: Portal Transaksi Kas & Real-Time Search | **10/10 Passed (100%)** |
| **9** | **Asynchronous JS & REST APIs**<br>Event Loop, Promises, `async/await`, `getJSON()` guard, UI State Machine, **Milestone 3**. | 4 Demos | `hands-on-lab-9`: Weather Web App (Geocoding & Forecast) | **10/10 Passed (100%)** |
| **10** | **Array Search, Sorting & LocalStorage**<br>Array `find`/`filter`, non-mutating `sort()`, JSON storage helper, **Milestone 4**. | 4 Demos | `hands-on-lab-10`: Weather Web App Persistent History | **10/10 Passed (100%)** |
| **11** | **Debugging, Testing & Integration**<br>Root-cause analysis, DevTools breakpoint, pure unit tests, race condition guard, **Milestone 5**. | 4 Demos | `hands-on-lab-11`: Weather Web App Quality Hardening | **10/10 Passed (100%)** |
| **12** | **Capstone Project & Deployment**<br>7-Day forecast URL & row mapping, responsive CSS grid auto-fit, subpath audit, GitHub Pages. | 4 Demos | `hands-on-lab-12`: Weather Web App Capstone Final Release | **11/11 Passed (100%)** |

---

## 4. Panduan Komprehensif Seluruh Modul: Demo & Hands-on Lab (Sesi 1–12)

Bagian ini memuat dokumentasi teknis mendalam mengenai setiap demo dan hands-on lab di seluruh kurikulum, mencakup konsep kunci, kondisi awal (*starter*), solusi instruktur, serta relevansi terhadap tata kelola teknologi perbankan.

```
DAFTAR ISI SESI:
- Sesi 1: Web Fundamentals & Semantic HTML5
- Sesi 2: HTML Forms, Git & GitHub
- Sesi 3: CSS Fundamentals & Modern Layouts
- Sesi 4: Responsive Website with Bootstrap
- Sesi 5: JavaScript Fundamentals
- Sesi 6: Conditional & Looping
- Sesi 7: Functions & Data Processing
- Sesi 8: DOM, Events & Form Interaction
- Sesi 9: Asynchronous JavaScript & REST APIs
- Sesi 10: Array Search, Sorting & LocalStorage
- Sesi 11: Debugging, Testing & Project Integration
- Sesi 12: Capstone Mini Project & Deployment
```

---

### Sesi 1: Web Fundamentals & Semantic HTML5
- **Curriculum & Slide Reference:** Sesi 1 (3.5 Jam / 210 Menit) | [`session-1.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-creation/web-development-banking-odp-v2/session-1.md)
- **Modul README:** [`session-1/README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-1/README.md)

#### Demo 1.1: Dokumen HTML Pertama & Anatomi Tag
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-1/demo-1/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-1/demo-1/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-1/demo-1/README.md)
- **Tujuan Pembelajaran:** Memahami siklus dokumen HTML5 standar W3C, peran `<!DOCTYPE html>`, spesifikasi bahasa `<html lang="id">`, metadata `<meta charset="UTF-8">`, viewport mobile, serta tata urutan hierarki heading `h1`–`h6`.
- **Kondisi Awal (1-starter):** Dokumen tidak memiliki doctype, tag saling tumpang tindih (*improper nesting*), atribut `lang` hilang, dan heading melompat langsung dari `h1` ke `h4`.
- **Solusi Teknis (2-solution):** Standarisasi struktur HTML5 valid dengan hierarki heading yang runut dan meta tag responsive viewport.
- **Relevansi Perbankan:** Kepatuhan aksesibilitas WCAG 2.1 AA agar portal web perbankan dapat dibaca secara akurat oleh screen reader nasabah disabilitas dan diindeks dengan baik oleh mesin pencari.

#### Demo 1.2: Tautan (Links) & Media Gambar
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-1/demo-2/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-1/demo-2/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-1/demo-2/README.md)
- **Tujuan Pembelajaran:** Menguasai tautan absolut vs relatif, navigasi fragment `#id`, atribut keamanan tautan eksternal `target="_blank" rel="noopener noreferrer"`, dan gambar `<img>` ber-`alt` kontekstual.
- **Kondisi Awal (1-starter):** Tautan eksternal membuka tab baru tanpa rel keamanan (rentan eksploitasi `window.opener`), jalur gambar rusak (*broken path*), dan tag gambar tanpa teks alternatif.
- **Solusi Teknis (2-solution):** Penerapan `rel="noopener noreferrer"` pada setiap tautan eksternal, jalur lokal aset SVG yang valid, dan atribut `alt` deskriptif.
- **Relevansi Perbankan:** Perlindungan nasabah dari serangan siber *Reverse Tabnabbing* dan phishing saat dialihkan ke tautan eksternal institusi mitra perbankan.

#### Demo 1.3: List & Struktur Semantik HTML5
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-1/demo-3/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-1/demo-3/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-1/demo-3/README.md)
- **Tujuan Pembelajaran:** Melakukan refactoring dari tumpukan elemen generik (*div-soup*) ke landmark semantik HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), serta penggunaan daftar terurut `<ol>` dan tak terurut `<ul>`.
- **Kondisi Awal (1-starter):** Seluruh layout dibangun menggunakan tag `<div>` bertingkat tanpa arti semantik sehingga menyulitkan navigasi assistive technology.
- **Solusi Teknis (2-solution):** Transformasi tata letak ke dalam landmark semantik baku yang memisahkan navigasi, konten inti, dan informasi hak cipta footer secara eksplisit.
- **Relevansi Perbankan:** Memenuhi regulasi OJK terkait kemudahan aksesibilitas layanan perbankan digital untuk seluruh lapisan masyarakat.

#### Demo 1.4: Tabel Data Terstruktur
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-1/demo-4/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-1/demo-4/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-1/demo-4/README.md)
- **Tujuan Pembelajaran:** Membangun tabel data relasional menggunakan `<table>`, `<caption>`, `<thead>`, `<tbody>`, `<th scope="col">`, dan `<td>`. Larangan penggunaan tabel untuk layout.
- **Kondisi Awal (1-starter):** Tabel data tanpa caption, tanpa header scope, dan tanpa pemisahan thead/tbody yang menyebabkan pembacaan sel membingungkan.
- **Solusi Teknis (2-solution):** Struktur tabel data finansial yang dilengkapi caption ringkas dan atribut `scope="col"` pada setiap header kolom.
- **Relevansi Perbankan:** Format penyajian mutasi rekening, jadwal cicilan kredit, dan tarif transaksi perbankan yang transparan dan dapat dibaca screen reader secara teratur.

#### Hands-on Lab 1: Halaman Profil Web Mandiri (`profil-web`)
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-1/hands-on-lab-1/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-1/hands-on-lab-1/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-1/hands-on-lab-1/README.md)
- **Objektif Bisnis:** Membangun halaman profil portofolio Software Engineer ODP IT BNI yang memuat biodata profesional, avatar SVG, rencana pelatihan tabular, dan navigasi anchor dua arah.
- **Kriteria Evaluasi & Uji Otomatis:** 12 checks lulus (100%) via `scripts/test-runner.js`: validitas DOCTYPE, `<html lang="id">`, UTF-8, title unik, 4 landmark semantik (`<header>`, `<nav>`, `<main>`, `<footer>`), hierarki heading, `alt` gambar, fragment anchor, security `noopener`, tabel `<caption>`, serta `<thead>` & `<th scope="col">`.
- **Tantangan Tambahan (*Challenge*):** Membuat halaman jadwal mandiri `jadwal.html` yang terhubung dua arah dengan `index.html`.

---

### Sesi 2: HTML Forms, Git & GitHub
- **Curriculum & Slide Reference:** Sesi 2 (3.5 Jam / 210 Menit) | [`session-2.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-creation/web-development-banking-odp-v2/session-2.md)
- **Modul README:** [`session-2/README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-2/README.md)

#### Demo 2.1: Anatomi Form & Hubungan Label-Input
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-2/demo-1/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-2/demo-1/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-2/demo-1/README.md)
- **Tujuan Pembelajaran:** Memahami elemen `<form>`, keterikatan eksplisit `<label for="id">` dengan input target, pentingnya atribut `name` untuk HTTP payload, dan tombol submit.
- **Kondisi Awal (1-starter):** Form mengandalkan placeholder sebagai pengganti label, dan field input tidak memiliki atribut `name` sehingga data formulir tidak terkirim.
- **Solusi Teknis (2-solution):** Menautkan setiap field dengan `<label for="...">` dan memastikan semua elemen masukan memiliki atribut `name` yang unik.
- **Relevansi Perbankan:** Formulir pendaftaran nasabah atau pengajuan kredit yang wajib memiliki label pasti untuk menghindari kesalahan input dan sengketa transaksi.

#### Demo 2.2: Jenis Input & Validasi HTML5
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-2/demo-2/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-2/demo-2/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-2/demo-2/README.md)
- **Tujuan Pembelajaran:** Menggunakan tipe input `text`, `email`, dropdown `<select>`, radio buttons bertema sama via `name`, dan validasi deklaratif `required`, `minlength`, `maxlength`.
- **Kondisi Awal (1-starter):** Seluruh field menggunakan `type="text"`, dropdown tanpa opsi default kosong, dan ketiadaan validasi sisi peramban.
- **Solusi Teknis (2-solution):** Form interaktif dengan validasi format email native, pemilihan departemen wajib via `<select>`, dan radio button pilihan metode komunikasi.
- **Relevansi Perbankan:** *Data sanitization* dan validasi tahap awal (*first line of defense*) sebelum request dikirimkan ke server API perbankan.

#### Demo 2.3: Metode Pengiriman GET vs POST & Keamanan
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-2/demo-3/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-2/demo-3/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-2/demo-3/README.md)
- **Tujuan Pembelajaran:** Membedakan transmisi parameter melalui URL query string (`GET`) versus HTTP request body (`POST`). Larangan keras pengiriman kredensial sensitif via `GET`.
- **Kondisi Awal (1-starter):** Form login menggunakan `method="GET"` yang mengekspos kata sandi nasabah secara terbuka di bilah URL, histori peramban, dan log proxy.
- **Solusi Teknis (2-solution):** Pengubahan form login ke `method="POST"` dengan atribut `autocomplete="current-password"` dan `type="password"`.
- **Relevansi Perbankan:** Kepatuhan regulasi OJK & PCI-DSS dalam pencegahan kebocoran data rahasia (*credentials leakage*) pada log infrastruktur jaringan perbankan.

#### Demo 2.4: Navigasi Terminal & Git Workflow CLI
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-2/demo-4/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-2/demo-4/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-2/demo-4/README.md)
- **Tujuan Pembelajaran:** Menguasai navigasi terminal (`pwd`, `ls`, `cd`, `mkdir`), inisialisasi Git `git init`, staging `git add`, komitmen `git commit -m`, dan konfigurasi berkas `.gitignore` untuk melindungi secrets.
- **Kondisi Awal (1-starter):** Repositori tidak terkonfigurasi, berkas rahasia kredensial `.env` tidak terlindungi dan siap ter-commit ke version control.
- **Solusi Teknis (2-solution):** Pembuatan berkas `.gitignore` berstandar industri yang memblokir `.env`, `.DS_Store`, dan artefak build, dilengkapi skrip `verify-git.sh`.
- **Relevansi Perbankan:** Menjamin tidak ada kebocoran kunci privat (*API keys/private certs*) ke repositori kode publik yang dapat berakibat fatal pada keamanan bank.

#### Hands-on Lab 2: Halaman Kontak (`kontak.html`) & Manajemen Git
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-2/hands-on-lab-2/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-2/hands-on-lab-2/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-2/hands-on-lab-2/README.md)
- **Objektif Bisnis:** Membangun halaman kontak pengaduan nasabah berbasis form `POST` dengan field nama, email, topik keluhan, dan pesan, serta mengelola repositori Git secara higienis.
- **Kriteria Evaluasi & Uji Otomatis:** 13 checks lulus (100%) via `scripts/test-runner.js`: metode `POST`, relasi `<label for>` pada seluruh masukan, validasi `required`/`minlength`, navigasi dua arah dengan `index.html`, dan proteksi `.gitignore`.
- **Tantangan Tambahan (*Challenge*):** Membangun form pendaftaran nasabah `pendaftaran.html` dengan verifikasi radio button tipe rekening.

---

### Sesi 3: CSS Fundamentals & Modern Layouts
- **Curriculum & Slide Reference:** Sesi 3 (3.5 Jam / 210 Menit) | [`session-3.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-creation/web-development-banking-odp-v2/session-3.md)
- **Modul README:** [`session-3/README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-3/README.md)

#### Demo 3.1: CSS Syntax, Pemasangan & Specificity
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-3/demo-1/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-3/demo-1/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-3/demo-1/README.md)
- **Tujuan Pembelajaran:** Menghubungkan stylesheet eksternal, memahami kalkulasi Specificity (Inline > ID > Class > Element), combinator `nav a`, serta pseudo-class `:hover` dan `:focus-visible`.
- **Kondisi Awal (1-starter):** Gaya visual tercecer pada inline styles dan internal tag `<style>`, terjadi benturan aturan warna, dan ketiadaan indikator fokus keyboard.
- **Solusi Teknis (2-solution):** Menyatukan styling ke dalam `styles/style.css` dengan bobot specificity yang seimbang dan indikator outline fokus aksesibel.
- **Relevansi Perbankan:** Memudahkan pemeliharaan desain konsisten (*Design System*) dan menjamin kenyamanan navigasi keyboard bagi nasabah berkebutuhan khusus.

#### Demo 3.2: Box Model & Universal Reset
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-3/demo-2/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-3/demo-2/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-3/demo-2/README.md)
- **Tujuan Pembelajaran:** Memahami 4 komponen Box Model (Content, Padding, Border, Margin), simulasi bug layout pada default `content-box`, dan solusinya via universal reset `* { box-sizing: border-box; }`.
- **Kondisi Awal (1-starter):** Dua kartu dengan `width: 50%` pecah ke baris baru saat diberi padding dan border karena total lebar melebihi 100% lebar kontainer.
- **Solusi Teknis (2-solution):** Penerapan deklarasi `box-sizing: border-box` universal yang mengunci kalkulasi lebar elemen mencakup padding dan border.
- **Relevansi Perbankan:** Mencegah pergeseran tata letak antarmuka transaksi dan menghindari munculnya scrollbar horizontal yang tidak diinginkan pada aplikasi perbankan.

#### Demo 3.3: Flexbox Navigasi 1D
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-3/demo-3/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-3/demo-3/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-3/demo-3/README.md)
- **Tujuan Pembelajaran:** Menata layout satu dimensi dengan `display: flex`, sumbu utama (`justify-content`), sumbu silang (`align-items`), `flex-wrap`, dan pengaturan jarak via `gap`.
- **Kondisi Awal (1-starter):** Bilah navigasi vertikal bertumpuk secara kaku dengan penggunaan float dan margin hack yang rapuh.
- **Solusi Teknis (2-solution):** Navbar horizontal adaptif dengan penataan brand di sisi kiri, menu navigasi di sisi kanan, dan auto-wrap saat ukuran layar menyempit.
- **Relevansi Perbankan:** Antarmuka navigasi perbankan modern yang kokoh dan tidak rusak saat diakses di berbagai resolusi layar laptop dan tablet kerja teller.

#### Demo 3.4: CSS Grid untuk Kartu 2D
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-3/demo-4/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-3/demo-4/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-3/demo-4/README.md)
- **Tujuan Pembelajaran:** Menguasai tata letak dua dimensi dengan `display: grid`, pola fluid responsif `repeat(auto-fit, minmax(260px, 1fr))`, dan spasi antar-sel via `gap`.
- **Kondisi Awal (1-starter):** Matriks kartu produk memiliki dimensi lebar tetap (*fixed width*) sehingga terpotong pada layar kecil dan meninggalkan ruang kosong pada monitor lebar.
- **Solusi Teknis (2-solution):** Grid fluid responsif yang otomatis mengatur jumlah kolom secara dinamis (3 kolom pada desktop, 2 pada tablet, 1 pada ponsel) tanpa banyak media query.
- **Relevansi Perbankan:** Dashboard katalog produk finansial (tabungan, giro, reksa dana) yang tersaji rapi dan proporsional di seluruh jenis perangkat nasabah.

#### Hands-on Lab 3: Styling Terpadu Halaman Profil & Kontak
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-3/hands-on-lab-3/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-3/hands-on-lab-3/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-3/hands-on-lab-3/README.md)
- **Objektif Bisnis:** Mendesain stylesheet tunggal `styles/style.css` yang memberikan tampilan visual korporat BNI (Navy `#1D3D70` dan Oranye `#F06634`) pada halaman `index.html` dan `kontak.html`.
- **Kriteria Evaluasi & Uji Otomatis:** 12 checks lulus (100%) via `scripts/test-runner.js`: stylesheet linking, universal box-sizing reset, flex navbar, responsive grid `repeat(auto-fit, minmax(...))`, styling form input, focus styling, dan format tabel.
- **Tantangan Tambahan (*Challenge*):** Menambahkan kartu testimoni nasabah dengan efek transisi elevasi bayangan (*box-shadow hover*).

---

### Sesi 4: Responsive Website with Bootstrap
- **Curriculum & Slide Reference:** Sesi 4 (3.5 Jam / 210 Menit) | [`session-4.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-creation/web-development-banking-odp-v2/session-4.md)
- **Modul README:** [`session-4/README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-4/README.md)

#### Demo 4.1: Pemasangan Bootstrap 5.3.8 CDN & Dasar Utility
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-4/demo-1/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-4/demo-1/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-4/demo-1/README.md)
- **Tujuan Pembelajaran:** Memahami konsep CSS Framework, impor `bootstrap.min.css` dan `bootstrap.bundle.min.js` via CDN, utility classes spacing (`p-3`, `m-2`), serta kontainer responsif `.container`.
- **Kondisi Awal (1-starter):** Halaman HTML polos tanpa framework dan tanpa integrasi skrip interaktif.
- **Solusi Teknis (2-solution):** Integrasi Bootstrap 5.3.8 resmi via CDN lengkap dengan pembungkus `.container` dan utility spasi terstandarisasi.
- **Relevansi Perbankan:** Standardisasi tampilan cepat (*rapid prototyping*) pada portal internal perbankan tanpa membangun komponen dasar dari nol.

#### Demo 4.2: Komponen Bootstrap (Navbar, Card, Button, Alert)
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-4/demo-2/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-4/demo-2/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-4/demo-2/README.md)
- **Tujuan Pembelajaran:** Memanfaatkan komponen siap pakai: `.navbar`, `.card` dengan `.card-body`, alert status perbankan ber-`role="status"`, varian tombol (`btn-primary`), dan form control `.form-control`.
- **Kondisi Awal (1-starter):** Elemen HTML default yang kaku tanpa hierarki visual dan tanpa komponen penanda status.
- **Solusi Teknis (2-solution):** Perancangan antarmuka transaksi modern yang dilengkapi banner notifikasi status layanan BI-FAST dan kartu informasi kurs valas.
- **Relevansi Perbankan:** Memberikan umpan balik instan yang jelas mengenai status transaksi perbankan (berhasil, pending, gangguan jaringan).

#### Demo 4.3: Sistem 12 Kolom Grid Bootstrap
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-4/demo-3/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-4/demo-3/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-4/demo-3/README.md)
- **Tujuan Pembelajaran:** Menguasai matematika 12 kolom Bootstrap: `.container` -> `.row g-3` -> `.col-*`, serta breakpoint multi-device (`col-12 col-md-6 col-lg-4`).
- **Kondisi Awal (1-starter):** Kartu-kartu diletakkan di luar kontainer `.row` sehingga saling menimpa atau patah tidak beraturan saat layar mengecil.
- **Solusi Teknis (2-solution):** Struktur grid responsif rapi yang bertransisi mulus dari 1 kolom penuh di mobile, 2 kolom di tablet, hingga 3 kolom di desktop.
- **Relevansi Perbankan:** Menjamin dashboard monitoring transaksi dan statistik perbankan tetap ergonomis di berbagai perangkat kerja operasional.

#### Demo 4.4: Mobile-First Media Queries & Custom Overrides
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-4/demo-4/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-4/demo-4/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-4/demo-4/README.md)
- **Tujuan Pembelajaran:** Memahami filosofi desain mobile-first `@media (min-width: ...)`, urutan kaset CSS (Bootstrap dimuat sebelum custom stylesheet), dan override warna brand institusi.
- **Kondisi Awal (1-starter):** Urutan pemuatan CSS terbalik (CSS kustom tertimpa Bootstrap) dan penerapan media query desktop-first `max-width` yang menyulitkan optimasi mobile.
- **Solusi Teknis (2-solution):** Penataan urutan pemuatan yang benar dengan kustomisasi CSS mobile-first untuk palet warna korporat oranye dan teal BNI.
- **Relevansi Perbankan:** Menyelaraskan komponen publik framework dengan panduan identitas visual korporat (*Corporate Brand Guidelines*) bank.

#### Hands-on Lab 4: Portal Profil Responsif Berbasis Bootstrap
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-4/hands-on-lab-4/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-4/hands-on-lab-4/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-4/hands-on-lab-4/README.md)
- **Objektif Bisnis:** Membangun portal profil profesional trainee berbasis Bootstrap 5.3.8 lengkap dengan navbar responsif, banner status BI-FAST, grid 12 kolom kartu materi, formulir kontak berlabel, dan data table bergaris (*striped table*).
- **Kriteria Evaluasi & Uji Otomatis:** 12 checks lulus (100%) via `scripts/test-runner.js`: link CDN Bootstrap, bundle JS, kaset custom CSS, navbar, grid 12 kolom, alert `role="status"`, class form Bootstrap, striped table, dan media query `@media (min-width: ...)`.
- **Tantangan Tambahan (*Challenge*):** Menambahkan modal dialog konfirmasi konfirmasi pengiriman formulir menggunakan Bootstrap JavaScript component.

---

### Sesi 5: JavaScript Fundamentals
- **Curriculum & Slide Reference:** Sesi 5 (3.5 Jam / 210 Menit) | [`session-5.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-creation/web-development-banking-odp-v2/session-5.md)
- **Modul README:** [`session-5/README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-5/README.md)

#### Demo 5.1: Runtime JavaScript (Browser vs Node.js)
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-5/demo-1/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-5/demo-1/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-5/demo-1/README.md)
- **Tujuan Pembelajaran:** Mengeksekusi kode melalui DevTools Console dan Node.js CLI, mendeteksi platform runtime via `typeof window` vs `typeof process`, dan diagnostik `console.info/error`.
- **Kondisi Awal (1-starter):** Skrip tanpa deteksi lingkungan yang menyebabkan crash fatal saat mengakses objek browser `window` di runtime server Node.js.
- **Solusi Teknis (2-solution):** Skrip universal yang mendeteksi platform secara otomatis dan mencetak informasi lingkungan eksekusi secara aman.
- **Relevansi Perbankan:** Skrip otomatisasi dan modul backend microservices perbankan yang dijalankan pada server Node.js dan container Docker.

#### Demo 5.2: Variables & Data Types
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-5/demo-2/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-5/demo-2/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-5/demo-2/README.md)
- **Tujuan Pembelajaran:** Mendalami deklarasi `const` vs `let`, memahami bahaya `var` (function scope leakage, variable hoisting), tipe primitif (`number`, `string`, `boolean`, `null`, `undefined`), serta inspeksi tipe `typeof`.
- **Kondisi Awal (1-starter):** Penggunaan `var` yang mengakibatkan kebocoran scope variabel antar-blok logika perbankan.
- **Solusi Teknis (2-solution):** Standarisasi variabel: gunakan `const` sebagai default dan `let` hanya jika nilai perlu dimutasi. Larangan total penggunaan `var`.
- **Relevansi Perbankan:** Menjaga keutuhan nilai saldo rekening dan ID nasabah dari re-assignment tidak disengaja.

#### Demo 5.3: Operator Aritmetika & Konversi Tipe
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-5/demo-3/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-5/demo-3/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-5/demo-3/README.md)
- **Tujuan Pembelajaran:** Mengidentifikasi jebakan implicit type coercion (`"5" + 2 = "52"`), konversi eksplisit `Number()`, deteksi `NaN`, dan validasi `Number.isFinite()`.
- **Kondisi Awal (1-starter):** Bug penambahan saldo tabungan akibat input dari form berupa string, menghasilkan penggabungan teks alih-alih penjumlahan matematis.
- **Solusi Teknis (2-solution):** Parsing eksplisit masukan numerik dengan validasi `Number.isFinite()` sebelum melakukan operasi kalkulasi finansial.
- **Relevansi Perbankan:** Mencegah kesalahan fatal pembukuan saldo nasabah, perhitungan bunga kredit, dan rekonsiliasi kas perbankan.

#### Demo 5.4: Struktur Data (Objects & Arrays)
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-5/demo-4/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-5/demo-4/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-5/demo-4/README.md)
- **Tujuan Pembelajaran:** Mengakses elemen array berbasis 0-index, manipulasi `push`/`pop`, pemodelan objek transaksi perbankan, dan pemahaman immutabilitas binding `const` pada objek.
- **Kondisi Awal (1-starter):** Struktur objek transaksi tidak konsisten dan upaya reassign variabel konstanta objek yang memicu error.
- **Solusi Teknis (2-solution):** Entitas transaksi terstandarisasi (`id`, `nasabah`, `nominal`, `status`) dengan mutasi properti yang terkontrol tanpa reassign binding objek.
- **Relevansi Perbankan:** Pemodelan skema data payload transaksi yang siap dipertukarkan antara antarmuka web dan core banking backend.

#### Hands-on Lab 5: Engine Perhitungan Transaksi Finansial (`transaksi.js`)
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-5/hands-on-lab-5/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-5/hands-on-lab-5/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-5/hands-on-lab-5/README.md)
- **Objektif Bisnis:** Membangun modul kalkulasi transaksi finansial yang memvalidasi input saldo non-negatif, menghitung total biaya admin dan potongan, serta mengembalikan objek transaksi resmi.
- **Kriteria Evaluasi & Uji Otomatis:** 10 checks lulus (100%) via `scripts/test-runner.js`: sintaks higienis tanpa `var`, konversi eksplisit `Number()`, validasi finite, penolakan saldo negatif, dan keutuhan objek kalkulasi.
- **Tantangan Tambahan (*Challenge*):** Menyelesaikan modul `pesanan.js` untuk kalkulasi pemesanan produk perbankan dengan diskon bertingkat.

---

### Sesi 6: Conditional & Looping
- **Curriculum & Slide Reference:** Sesi 6 (3.5 Jam / 210 Menit) | [`session-6.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-creation/web-development-banking-odp-v2/session-6.md)
- **Modul README:** [`session-6/README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-6/README.md)

#### Demo 6.1: Operator Perbandingan & Logika Boolean
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-6/demo-1/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-6/demo-1/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-6/demo-1/README.md)
- **Tujuan Pembelajaran:** Memahami perbandingan ketat `===` vs `==`, 8 nilai Falsy (`false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`), serta perbedaan operator Nullish Coalescing `??` vs Logical OR `||`.
- **Kondisi Awal (1-starter):** Penggunaan perbandingan longgar `==` yang meloloskan nilai coercif berbahaya (misal menganggap string kosong `""` sama dengan angka `0`).
- **Solusi Teknis (2-solution):** Penerapan strict equality deterministik dan pemanfaatan `??` untuk menjaga nilai saldo `0` agar tidak tertimpa nilai default.
- **Relevansi Perbankan:** Mencegah celah otorisasi transfer pada kondisi saldo bernilai nol atau akun nasabah yang berstatus non-aktif.

#### Demo 6.2: Percabangan `if/else` & Guard Clauses
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-6/demo-2/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-6/demo-2/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-6/demo-2/README.md)
- **Tujuan Pembelajaran:** Melakukan refactoring struktur percabangan bertingkat (*Pyramid of Doom*) menjadi Guard Clauses (*Fail-Fast Pattern*), validasi limit transfer dan kecukupan saldo.
- **Kondisi Awal (1-starter):** Logika otorisasi transfer dengan 5 tingkat nesting `if/else` yang membingungkan dan rawan kesalahan manusia saat diubah.
- **Solusi Teknis (2-solution):** Penulisan guard clauses di awal fungsi yang langsung menolak eksekusi dan mengembalikan pesan error spesifik jika batas limit atau saldo tidak memenuhi syarat.
- **Relevansi Perbankan:** Mempercepat audit kode keamanan perbankan, menurunkan kompleksitas siklomatik, dan meminimalkan celah bug operasional.

#### Demo 6.3: Evaluasi Kasus dengan `switch-case`
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-6/demo-3/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-6/demo-3/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-6/demo-3/README.md)
- **Tujuan Pembelajaran:** Mengevaluasi kode status transaksi perbankan (`SETTLED`, `SUCCESS`, `PENDING`, `REJECTED`, `EXPIRED`), disiplin kata kunci `break`, dan intentional fall-through.
- **Kondisi Awal (1-starter):** Struktur switch tanpa kata kunci `break` yang mengakibatkan eksekusi terus merembet ke blok status berikutnya (*accidental fall-through*).
- **Solusi Teknis (2-solution):** Pemetaan status terpadu dengan pengelompokan status gagal secara eksplisit dan penanganan kode tidak dikenal pada blok `default`.
- **Relevansi Perbankan:** Standarisasi pelaporan siklus transaksi pembayaran pada core banking dan payment gateway BNI.

#### Demo 6.4: Iterasi Finansial (`for...of`, `while`, `break`, `continue`)
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-6/demo-4/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-6/demo-4/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-6/demo-4/README.md)
- **Tujuan Pembelajaran:** Melakukan iterasi batch transaksi, memanfaatkan `continue` untuk melewati data anomali, dan `break` sebagai circuit breaker jika batas risiko terlampaui.
- **Kondisi Awal (1-starter):** Loop yang terus memproses seluruh transaksi tanpa mekanisme penghentian darurat saat terdeteksi indikasi anomali transaksi mencurigakan.
- **Solusi Teknis (2-solution):** Perulangan defensif yang melewati transaksi berstatus korup via `continue` dan menghentikan seluruh batch via `break` saat akumulasi transaksi harian melampaui limit risiko.
- **Relevansi Perbankan:** Mekanisme pengamanan transaksi masal (End-of-Day Settlement Batch) dari risiko kegagalan sistem dan fraud.

#### Hands-on Lab 6: Rekapitulasi & Filtering Transaksi Finansial (`rekap-transaksi.js`)
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-6/hands-on-lab-6/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-6/hands-on-lab-6/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-6/hands-on-lab-6/README.md)
- **Objektif Bisnis:** Membangun modul rekapitulasi batch transaksi T01–T04 yang menyaring transaksi valid, merekonsiliasi total nominal (Rp 175.000), mengelompokkan status transaksi, dan memverifikasi format PIN 6 digit.
- **Kriteria Evaluasi & Uji Otomatis:** 10 checks lulus (100%) via `scripts/test-runner.js`: sanitasi sintaks, total rekonsiliasi tepat, penanganan empty array, switch logic status berhasil & pending, intentional fall-through status gagal, dan validasi fail-fast PIN nasabah.

---

### Sesi 7: Functions & Data Processing
- **Curriculum & Slide Reference:** Sesi 7 (3.5 Jam / 210 Menit) | [`session-7.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-creation/web-development-banking-odp-v2/session-7.md)
- **Modul README:** [`session-7/README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-7/README.md)

#### Demo 7.1: Function Declaration, Expression, & Arrow Function
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-7/demo-1/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-7/demo-1/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-7/demo-1/README.md)
- **Tujuan Pembelajaran:** Memahami perbedaan hoisting deklarasi fungsi vs fungsi ekspresi `const`, sintaks ringkas Arrow Function (`=>`), dan trik implicit return objek literal `({ ... })`.
- **Kondisi Awal (1-starter):** Fungsi stub tanpa parameter validation dan kesalahan sintaks kurung kurawal pada return objek literal arrow function.
- **Solusi Teknis (2-solution):** Penerapan tiga paradigma fungsi modern dengan validasi tipe data parameter dan pengembalian nilai yang jelas.
- **Relevansi Perbankan:** Penulisan utilitas pemrosesan data finansial yang modular, terisolasi, dan bebas dari efek hoisting yang tidak terduga.

#### Demo 7.2: Early Return Pattern (`checkLogin`)
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-7/demo-2/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-7/demo-2/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-7/demo-2/README.md)
- **Tujuan Pembelajaran:** Menerapkan pola autentikasi dengan penolakan dini (*fail-fast*) `"input salah"`, evaluasi kredensial `"login berhasil"`, dan fallback `"coba lagi"`.
- **Kondisi Awal (1-starter):** Fungsi stub yang mengembalikan string kosong tanpa memeriksa validitas parameter username dan password.
- **Solusi Teknis (2-solution):** Guard clause bertingkat yang menolak input non-string, memvalidasi kecocokan kredensial, dan mengembalikan status autentikasi yang deterministik.
- **Relevansi Perbankan:** Gerbang pengamanan autentikasi pada layanan perbankan digital sebelum sesi nasabah diterbitkan.

#### Demo 7.3: Synchronous Callbacks & Immutability
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-7/demo-3/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-7/demo-3/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-7/demo-3/README.md)
- **Tujuan Pembelajaran:** Mengirim fungsi sebagai argumen (callback), implementasi higher-order function sederhana, dan membuktikan jaminan bahwa array input tidak termutasi.
- **Kondisi Awal (1-starter):** Fungsi pemroses yang memodifikasi array parameter masukan secara langsung (*in-place mutation*) sehingga merusak sumber data awal.
- **Solusi Teknis (2-solution):** Higher-order function yang mengembalikan array hasil transformasi baru tanpa mengubah sedikit pun elemen pada array asal.
- **Relevansi Perbankan:** Prinsip *Immutability* sangat krusial dalam sistem perbankan untuk memastikan log mutasi rekening asli tidak berubah di memori aplikasi.

#### Demo 7.4: Array of Objects & Built-in Methods
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-7/demo-4/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-7/demo-4/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-7/demo-4/README.md)
- **Tujuan Pembelajaran:** Mengolah data nasabah dengan method bawaan: `forEach()` (logging), `map()` (transformasi skema), `filter()` (penyaringan predikat), `reduce()` (akumulasi total), serta *method chaining*.
- **Kondisi Awal (1-starter):** Pengolahan data dilakukan dengan for-loop konvensional yang panjang, sulit dibaca, dan rawan kesalahan indeks array.
- **Solusi Teknis (2-solution):** Pipeline fungsional deklaratif yang menyaring transaksi sukses, mengekstrak ringkasan objek `{ id, nominal }`, dan menjumlahkan total nominal saldo secara akurat.
- **Relevansi Perbankan:** Transformasi data laporan portofolio nasabah yang efisien sebelum dikirimkan ke lapisan presentasi front-end.

#### Hands-on Lab 7: Financial Data Processing Engine (`banking-engine.js`)
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-7/hands-on-lab-7/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-7/hands-on-lab-7/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-7/hands-on-lab-7/README.md)
- **Objektif Bisnis:** Membangun mesin pemrosesan data finansial lengkap: `checkLogin`, `ambilValid` (filter status berhasil dan nominal positif), `ambilRingkasan` (map ke ID dan nominal), dan `hitungTotal` (akumulasi total Rp 125.000 dengan nilai awal `0`).
- **Kriteria Evaluasi & Uji Otomatis:** 10 checks lulus (100%) via `scripts/test-runner.js`: sintaks tanpa `var`, seluruh jalur pengembalian `checkLogin`, filter predikat tepat, pemetaan objek, akumulasi reduce dengan initial value 0, dan jaminan immutabilitas dataset asli.
- **Tantangan Tambahan (*Challenge*):** Menyelesaikan skrip pemrosesan pesanan perbankan `rekap-pesanan.js`.

---

### Sesi 8: DOM, Events & Form Interaction
- **Curriculum & Slide Reference:** Sesi 8 (3.5 Jam / 210 Menit) | [`session-8.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-creation/web-development-banking-odp-v2/session-8.md)
- **Modul README:** [`session-8/README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-8/README.md)

#### Demo 8.1: DOM Selection & Traversal
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-8/demo-1/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-8/demo-1/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-8/demo-1/README.md)
- **Tujuan Pembelajaran:** Memahami perbedaan `getElementById`, `querySelector`, dan `querySelectorAll`, perbedaan NodeList statis vs HTMLCollection, penanganan node `null`, traversal DOM, dan atribut script `defer`.
- **Kondisi Awal (1-starter):** Skrip dieksekusi sebelum elemen HTML selesai dibaca oleh browser (tanpa `defer`) sehingga menghasilkan error `TypeError: Cannot read properties of null`.
- **Solusi Teknis (2-solution):** Penambahan atribut `defer` pada tag script, seleksi elemen yang aman dengan null checking, serta traversal hirarki elemen parent/children.
- **Relevansi Perbankan:** Menghindari crash fatal pada antarmuka web perbankan saat diakses pada jaringan internet yang lambat.

#### Demo 8.2: Safe DOM Modification & Anti-XSS
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-8/demo-2/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-8/demo-2/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-8/demo-2/README.md)
- **Tujuan Pembelajaran:** Membandingkan tingkat keamanan `textContent` vs `innerHTML` menghadapi payload injeksi skrip (`<img src=x onerror=alert(1)>`), manipulasi kelas dengan `classList`, dan pembuatan elemen via `document.createElement`.
- **Kondisi Awal (1-starter):** Aplikasi menggunakan `innerHTML` untuk menampilkan nama nasabah yang diinput dari form, membuka celah injeksi script Cross-Site Scripting (XSS).
- **Solusi Teknis (2-solution):** Seluruh manipulasi teks diubah menggunakan `textContent` dan perakitan elemen dilakukan secara imperatif menggunakan `createElement`.
- **Relevansi Perbankan:** Perlindungan mutlak dari serangan pencurian session cookie nasabah dan manipulasi antarmuka perbankan (kepatuhan OWASP Top 10).

#### Demo 8.3: Event Listeners & Event Object
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-8/demo-3/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-8/demo-3/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-8/demo-3/README.md)
- **Tujuan Pembelajaran:** Memahami arsitektur event browser, membaca objek `event` (`event.type`, `event.target`), dan aturan pelepasan listener dengan referensi fungsi yang sama (`removeEventListener`).
- **Kondisi Awal (1-starter):** Tombol antrean teller tanpa listener terpasang dan upaya pelepasan listener yang gagal karena menggunakan anonymous function.
- **Solusi Teknis (2-solution):** Pemasangan listener menggunakan fungsi bernama (*named function*) sehingga dapat dilepas secara deterministik saat antrean ditutup.
- **Relevansi Perbankan:** Mencegah kebocoran memori (*memory leaks*) pada aplikasi operasional cabang yang dibuka terus-menerus selama jam kerja bank.

#### Demo 8.4: Dynamic List Rendering & `replaceChildren()`
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-8/demo-4/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-8/demo-4/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-8/demo-4/README.md)
- **Tujuan Pembelajaran:** Menangani event submit form via `event.preventDefault()`, validasi masukan nominal, pembersihan kontainer via `replaceChildren()`, dan penambahan item baru secara dinamis.
- **Kondisi Awal (1-starter):** Klik pada tombol submit menyebabkan halaman me-reload secara default sehingga data transaksi hilang dan kontainer mengalami duplikasi data.
- **Solusi Teknis (2-solution):** Intersepsi submit tanpa reload halaman, pembersihan kontainer secara instan dengan `replaceChildren()`, dan penambahan item transaksi baru secara aman.
- **Relevansi Perbankan:** Menyediakan antarmuka input transaksi teller yang responsif tanpa jeda reload halaman.

#### Hands-on Lab 8: Portal Transaksi Kas & Milestone 2 Real-Time Search
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-8/hands-on-lab-8/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-8/hands-on-lab-8/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-8/hands-on-lab-8/README.md)
- **Objektif Bisnis:** Membangun portal transaksi kas perbankan dengan validasi form WAI-ARIA, serta mengintegrasikan **Milestone 2**: fitur pencarian data secara real-time pada katalog pelatihan tanpa reload halaman.
- **Kriteria Evaluasi & Uji Otomatis:** 10 checks lulus (100%) via `scripts/test-runner.js`: integrasi form & WAI-ARIA status, input pencarian `#cari` & daftar `#hasil`, skrip `defer`, keamanan anti-XSS `textContent`, `preventDefault()`, pembersihan kontainer via `replaceChildren()`, dan logika filter case-insensitive real-time.
- **Tantangan Tambahan (*Challenge*):** Menambahkan tombol hapus transaksi individu dan filter dropdown berdasarkan tipe transaksi.

---

### Sesi 9: Asynchronous JavaScript & REST APIs
- **Curriculum & Slide Reference:** Sesi 9 (3.5 Jam / 210 Menit) | [`session-9.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-creation/web-development-banking-odp-v2/session-9.md)
- **Modul README:** [`session-9/README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-9/README.md)

#### Demo 9.1: Eksekusi Asinkron & Event Loop
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-9/demo-1/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-9/demo-1/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-9/demo-1/README.md)
- **Tujuan Pembelajaran:** Memahami perbedaan operasi blocking CPU vs non-blocking I/O, Call Stack, Web APIs, Task Queue, eksekusi `setTimeout(..., 0)`, dan prediksi urutan output konsol (`A -> C -> B`).
- **Kondisi Awal (1-starter):** Skrip dengan loop sinkron berat yang membekukan thread utama browser (*UI freeze*) dan callback asinkron kosong.
- **Solusi Teknis (2-solution):** Pembuktian empiris cara kerja Event Loop dan pemindahan beban I/O ke antrean asinkron agar antarmuka tetap responsif.
- **Relevansi Perbankan:** Memastikan antarmuka mobile banking tetap interaktif dan tidak hang saat menunggu respons data dari server core banking.

#### Demo 9.2: Promise Lifecycle & Modern `async/await`
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-9/demo-2/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-9/demo-2/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-9/demo-2/README.md)
- **Tujuan Pembelajaran:** Mendalami 3 state Promise (`pending`, `fulfilled`, `rejected`), konstruksi Promise `cekLimitKredit`, perbandingan `.then()` chaining vs `async/await` dengan `try/catch/finally`.
- **Kondisi Awal (1-starter):** Fungsi berbasis callback bersarang (*Callback Hell*) yang rawan kebocoran error dan unhandled rejection.
- **Solusi Teknis (2-solution):** Pemodelan alur persetujuan kredit menggunakan `async/await` dengan blok `finally` yang menjamin pencatatan audit log transaksi selalu dilakukan.
- **Relevansi Perbankan:** Orkestrasi alur pembiayaan dan pengecekan limit kredit nasabah dengan jejak audit transaksi (*audit trail*) yang wajib selalu terekam.

#### Demo 9.3: Fetch API & Helper `getJSON(url)`
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-9/demo-3/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-9/demo-3/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-9/demo-3/README.md)
- **Tujuan Pembelajaran:** Menggunakan `fetch()`, validasi status HTTP via boolean `response.ok`, serta melempar error eksplisit pada status 4xx/5xx agar tertangkap di blok `catch`.
- **Kondisi Awal (1-starter):** Penggunaan fetch naif tanpa memeriksa `response.ok` (status HTTP 404 atau 500 tetap dianggap sukses karena Promise tidak me-reject secara otomatis).
- **Solusi Teknis (2-solution):** Helper fungsi `getJSON(url)` berstandar enterprise yang memvalidasi `response.ok` dan melempar error deskriptif dengan status HTTP.
- **Relevansi Perbankan:** Pencegahan silent failure saat backend API perbankan mengalami gangguan atau mengembalikan respon error.

#### Demo 9.4: UI State Machine & Double-Request Prevention
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-9/demo-4/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-9/demo-4/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-9/demo-4/README.md)
- **Tujuan Pembelajaran:** Mengelola status antarmuka (`loading`, `success`, `empty`, `error`, `invalid`) dan penonaktifan tombol submit (`disabled = true`) selama request berlangsung dengan pemulihan pada blok `finally`.
- **Kondisi Awal (1-starter):** Tombol submit tetap aktif saat proses jaringan berjalan, memungkinkan pengguna menekan tombol berulang kali dalam waktu singkat (*spam clicks*).
- **Solusi Teknis (2-solution):** Mesin status UI yang menonaktifkan tombol secara instan saat status `loading` dan menjamin pemulihan tombol di blok `finally`.
- **Relevansi Perbankan:** Mencegah nasabah menekan tombol "Transfer" atau "Bayar" ganda akibat jaringan lambat yang berisiko mendebit saldo rekening dua kali (*double debit*).

#### Hands-on Lab 9: Weather Web App (Milestone 3)
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-9/hands-on-lab-9/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-9/hands-on-lab-9/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-9/hands-on-lab-9/README.md)
- **Objektif Bisnis:** Membangun **Milestone 3**: aplikasi cuaca end-to-end terintegrasi Open-Meteo REST API melalui orkestrasi 2 tahap (Geocoding API untuk pencarian koordinat dan Forecast API untuk membaca temperatur dan angin).
- **Kriteria Evaluasi & Uji Otomatis:** 10 checks lulus (100%) via `scripts/test-runner.js`: form a11y, feedback live box `role="status"` & `aria-live="polite"`, atribusi Open-Meteo, script `defer`, higienis tanpa `var`, sanitasi `textContent`, helper `getJSON` defensif, endpoint contracts dengan optional chaining `results?.[0]`, state machine tombol, dan orkestrasi pemulihan `finally`.
- **Tantangan Tambahan (*Challenge*):** Menambahkan pilihan tombol cepat untuk 5 kota besar di Indonesia.

---

### Sesi 10: Array Search, Sorting & LocalStorage
- **Curriculum & Slide Reference:** Sesi 10 (3.5 Jam / 210 Menit) | [`session-10.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-creation/web-development-banking-odp-v2/session-10.md)
- **Modul README:** [`session-10/README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-10/README.md)

#### Demo 10.1: Array Searching (`find` vs `filter` vs Linear)
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-10/demo-1/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-10/demo-1/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-10/demo-1/README.md)
- **Tujuan Pembelajaran:** Memahami perbedaan pencarian linear manual, `find()` (1 elemen pertama atau `undefined`), dan `filter()` (array seluruh elemen yang cocok atau `[]`).
- **Kondisi Awal (1-starter):** Pencarian manual dengan for-loop yang rentan bug off-by-one dan tidak menangani kondisi ketika data tidak ditemukan.
- **Solusi Teknis (2-solution):** Penggunaan method deklaratif `find()` untuk mengambil profil nasabah tunggal dan `filter()` untuk menyaring riwayat transaksi dengan penanganan fallback yang aman.
- **Relevansi Perbankan:** Pencarian rekening tujuan transfer dan penyaringan histori transaksi nasabah berdasarkan kata kunci.

#### Demo 10.2: Array Sorting & Immutability
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-10/demo-2/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-10/demo-2/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-10/demo-2/README.md)
- **Tujuan Pembelajaran:** Menghindari jebakan default sorting leksikografis UTF-16 (`"10" < "2"`), menulis comparator numerik `(a, b) => a - b`, comparator string `localeCompare("id")`, dan pencegahan mutasi in-place via `[...array].sort()`.
- **Kondisi Awal (1-starter):** Memanggil `.sort()` langsung pada data angka sehingga urutan nominal kacau (misal: 1000 berada sebelum 20) dan memutasi data asli.
- **Solusi Teknis (2-solution):** Pengurutan presisi menggunakan comparator fungsi pada salinan array non-mutatif dengan spread operator.
- **Relevansi Perbankan:** Menjamin urutan mutasi saldo dan daftar tagihan tersaji secara akurat dari nominal terbesar atau tanggal terbaru tanpa merusak data asli di memory.

#### Demo 10.3: JSON Serialization & Defensive Local Storage
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-10/demo-3/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-10/demo-3/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-10/demo-3/README.md)
- **Tujuan Pembelajaran:** Menggunakan `JSON.stringify` dan `JSON.parse`, validasi skema tipe data `Array.isArray()`, isolasi storage key, dan penanganan error `try/catch` dengan safe fallback `[]`.
- **Kondisi Awal (1-starter):** Parsing data `localStorage.getItem` mentah tanpa proteksi `try/catch` sehingga memicu crash fatal saat data tersimpan mengalami korupsi atau kuota browser habis.
- **Solusi Teknis (2-solution):** Helper `readHistory`, `saveHistory`, dan `clearHistory` yang membungkus akses storage dalam blok `try/catch` dan mengembalikan array kosong sebagai fallback aman.
- **Relevansi Perbankan:** Persistensi preferensi dan riwayat transaksi nasabah pada perangkat lokal dengan jaminan kehandalan aplikasi (*zero-crash principle*).

#### Demo 10.4: Dynamic History UI & Re-Search Buttons
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-10/demo-4/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-10/demo-4/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-10/demo-4/README.md)
- **Tujuan Pembelajaran:** Merender tombol interaktif secara dinamis ke dalam `#riwayatKota`, membersihkan kontainer via `replaceChildren()`, dan memasang event listener yang memicu pencarian ulang.
- **Kondisi Awal (1-starter):** Kontainer riwayat statis dengan handler tombol kosong yang tidak terhubung dengan fungsi pemuat cuaca.
- **Solusi Teknis (2-solution):** Perakitan elemen tombol riwayat yang saat diklik langsung mengisi input pencarian dan mengeksekusi `loadWeather(kota)`.
- **Relevansi Perbankan:** Fitur transaksi berulang (*repeat transaction / favorite transfer*) yang memudahkan nasabah melakukan transfer kembali dengan satu klik.

#### Hands-on Lab 10: Persistent Search History (Milestone 4)
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-10/hands-on-lab-10/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-10/hands-on-lab-10/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-10/hands-on-lab-10/README.md)
- **Objektif Bisnis:** Membangun **Milestone 4**: fitur persistensi riwayat hingga maksimal 5 kota terbaru di Weather Web App dengan mekanisme deduplikasi, pembersihan riwayat `#hapusRiwayat`, dan pencarian ulang.
- **Kriteria Evaluasi & Uji Otomatis:** 10 checks lulus (100%) via `scripts/test-runner.js`: kontainer `#riwayatKota` & tombol `#hapusRiwayat`, pelestarian elemen form & status, script `defer`, higienis tanpa `var`, sanitasi `textContent`, storage fallback aman pada corrupted JSON, deduplikasi kota ke posisi terdepan (index 0), pembatasan ketat 5 item, interaksi tombol pencarian ulang, dan pembersihan storage saat tombol hapus diklik.
- **Tantangan Tambahan (*Challenge*):** Menambahkan fitur daftar kota favorit terurut abjad A-Z menggunakan `localeCompare("id")`.

---

### Sesi 11: Debugging, Testing & Project Integration
- **Curriculum & Slide Reference:** Sesi 11 (3.5 Jam / 210 Menit) | [`session-11.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-creation/web-development-banking-odp-v2/session-11.md)
- **Modul README:** [`session-11/README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-11/README.md)

#### Demo 11.1: Evidence-Based Debugging & Breakpoints
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-11/demo-1/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-11/demo-1/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-11/demo-1/README.md)
- **Tujuan Pembelajaran:** Melakukan investigasi bug sistematis berbasis bukti (Langkah Reproduksi, Expected vs Actual Behavior), menggunakan DevTools Sources Breakpoint, dan menerapkan perbaikan defensif `data.results?.[0] ?? null`.
- **Kondisi Awal (1-starter):** Fungsi `findCity` mengakses properti `data.results[0].latitude` secara langsung tanpa memeriksa apakah kota ditemukan, sehingga memicu crash `TypeError: Cannot read properties of undefined`.
- **Solusi Teknis (2-solution):** Analisis Root-Cause Analysis (RCA) lengkap dan penerapan optional chaining defensif serta nullish coalescing untuk menangani respon kosong.
- **Relevansi Perbankan:** Penanganan kegagalan sistem secara elegan (*graceful degradation*) tanpa menampilkan error teknis ke layar nasabah.

#### Demo 11.2: Network Inspection & Storage Startup Bug Fix
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-11/demo-2/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-11/demo-2/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-11/demo-2/README.md)
- **Tujuan Pembelajaran:** Melacak riwayat request pada DevTools Network dan Application Storage, serta mengisolasi dan membuang kode testing residual yang tidak sengaja tertinggal di produksi.
- **Kondisi Awal (1-starter):** Terdapat baris residual `localStorage.removeItem(STORAGE_KEY)` di level top-level script yang selalu menghapus riwayat setiap kali halaman di-refresh.
- **Solusi Teknis (2-solution):** Menghapus kode residual debugging dan memindahkan operasi pembersihan storage secara eksklusif ke dalam event handler tombol hapus riwayat.
- **Relevansi Perbankan:** Menjaga kebersihan kode produksi (*code hygiene*) dari sisa-sisa skrip testing pengembang yang dapat merusak data operasional perbankan.

#### Demo 11.3: Pure Function Unit Testing (`console.assert`)
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-11/demo-3/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-11/demo-3/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-11/demo-3/README.md)
- **Tujuan Pembelajaran:** Mengisolasi logika bisnis murni (*Pure Functions*) dari ketergantungan DOM dan Storage, siklus Red-Green testing, pengujian boundary, deduplikasi, dan jaminan immutabilitas.
- **Kondisi Awal (1-starter):** Fungsi manipulasi riwayat stub dengan serangkaian assertion pengujian unit `console.assert` yang gagal.
- **Solusi Teknis (2-solution):** Fungsi murni `nextHistory(prev, newCity, max)` deterministik yang lolos 100% pada seluruh skenario pengujian unit (array kosong, deduplikasi, dan batas kapasitas).
- **Relevansi Perbankan:** Pengujian unit otomatis independen merupakan syarat mutlak dalam pipeline CI/CD perbankan sebelum kode diizinkan masuk ke lingkungan produksi.

#### Demo 11.4: Race Condition Guard & Double-Submit Prevention
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-11/demo-4/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-11/demo-4/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-11/demo-4/README.md)
- **Tujuan Pembelajaran:** Mencegah request tumpang tindih akibat latency jaringan atau klik ganda pengguna dengan guard clause `if (button.disabled) return;` di awal fungsi transaksi.
- **Kondisi Awal (1-starter):** Fungsi pencarian cuaca tanpa guard clause yang membiarkan multiple request dieksekusi secara konkuren saat tombol diklik berkali-kali.
- **Solusi Teknis (2-solution):** Guard clause fail-fast yang membatalkan eksekusi seketika jika tombol dalam kondisi non-aktif, dipadukan dengan pemulihan status pada blok `finally`.
- **Relevansi Perbankan:** Mencegah race condition pada transaksi finansial kritis seperti transfer dana, pembayaran tagihan, atau top-up e-wallet.

#### Hands-on Lab 11: Weather Web App Hardening (Milestone 5)
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-11/hands-on-lab-11/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-11/hands-on-lab-11/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-11/hands-on-lab-11/README.md)
- **Objektif Bisnis:** Membangun **Milestone 5**: pengerasan kualitas (*hardening*) Weather Web App dengan memisahkan modul fungsi murni `next-history.js`, menerapkan double-request guard, menjamin kebersihan startup storage, dan verifikasi kualitas pra-rilis.
- **Kriteria Evaluasi & Uji Otomatis:** 10 checks lulus (100%) via `scripts/test-runner.js`: integrasi HTML & tag script `defer`, no `var`, safe `textContent`, 3 unit test fungsi `nextHistory`, jaminan immutabilitas array input, guard clause race condition `if (button.disabled) return;`, dan keutuhan storage saat aplikasi dimuat ulang.
- **Tantangan Tambahan (*Challenge*):** Menambahkan dialog modal konfirmasi sebelum pengguna menghapus seluruh riwayat kota tersimpan.

---

### Sesi 12: Capstone Mini Project & Deployment
- **Curriculum & Slide Reference:** Sesi 12 (3.5 Jam / 210 Menit) | [`session-12.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-creation/web-development-banking-odp-v2/session-12.md)
- **Modul README:** [`session-12/README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-12/README.md)

#### Demo 12.1: 7-Day Forecast URL Construction
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-12/demo-1/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-12/demo-1/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-12/demo-1/README.md)
- **Tujuan Pembelajaran:** Menyusun parameter Open-Meteo API prakiraan 7 hari (`forecast_days=7`, `daily=temperature_2m_max,temperature_2m_min`, `timezone=auto`) via `URLSearchParams`, serta validasi parameter latitude/longitude.
- **Kondisi Awal (1-starter):** URL builder belum menyertakan parameter `daily` dan `forecast_days` sehingga API hanya mengembalikan data cuaca saat ini.
- **Solusi Teknis (2-solution):** Fungsi `makeWeatherURL(city)` lengkap dengan validasi tipe data number dan perakitan query parameter yang valid.
- **Relevansi Perbankan:** Integrasi dengan API eksternal pihak ketiga (*Third-Party Financial Services*) dengan pemenuhan kontrak API yang presisi.

#### Demo 12.2: Daily Forecast Transformation
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-12/demo-2/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-12/demo-2/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-12/demo-2/README.md)
- **Tujuan Pembelajaran:** Mentransformasikan array paralel Open-Meteo (`time`, `temperature_2m_max`, `temperature_2m_min`) menjadi 7 baris objek terstruktur `{ date, max, min }`, validasi angka dengan `Number.isFinite()`.
- **Kondisi Awal (1-starter):** Fungsi stub yang mengembalikan array kosong tanpa melakukan iterasi pada array data daily.
- **Solusi Teknis (2-solution):** Fungsi murni `toForecastRows(data)` yang memetakan array paralel menjadi array objek dengan sanitasi nilai numerik.
- **Relevansi Perbankan:** Transformasi format data mentah (*raw API response*) menjadi domain model yang siap dikonsumsi lapisan antarmuka.

#### Demo 12.3: Responsive Auto-Fit CSS Grid
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-12/demo-3/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-12/demo-3/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-12/demo-3/README.md)
- **Tujuan Pembelajaran:** Mengimplementasikan deklarasi modern CSS Grid `repeat(auto-fit, minmax(8.5rem, 1fr))` untuk menyajikan kartu prakiraan cuaca 7 hari secara fluid tanpa overflow horizontal pada mobile.
- **Kondisi Awal (1-starter):** Tata letak kartu menggunakan flexbox dasar yang kaku sehingga terpotong pada layar ponsel sempit.
- **Solusi Teknis (2-solution):** Grid fluid auto-fit dengan efek hover elevasi, badge penanda hari ini/besok, dan tipografi hierarkis yang nyaman dibaca.
- **Relevansi Perbankan:** Tampilan matriks kartu ringkasan portofolio aset atau jadwal angsuran kredit yang adaptif di berbagai resolusi layar.

#### Demo 12.4: GitHub Pages Deployment Readiness
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-12/demo-4/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-12/demo-4/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-12/demo-4/README.md)
- **Tujuan Pembelajaran:** Melakukan audit jalur absolut root (`/styles/...`) vs relatif (`./styles/...`), memahami isolasi origin `localStorage`, dan panduan hosting statis di GitHub Pages.
- **Kondisi Awal (1-starter):** Berkas HTML memuat stylesheet dan script menggunakan absolute path root (`/styles/main.css`) yang menghasilkan error 404 saat diakses pada subpath repositori GitHub Pages (`username.github.io/repo/`).
- **Solusi Teknis (2-solution):** Standarisasi seluruh jalur aset menggunakan relative path (`./styles/...` dan `./scripts/...`) yang siap rilis tanpa konfigurasi build tambahan.
- **Relevansi Perbankan:** Menjamin aplikasi web mikroservis dapat di-deploy di balik reverse proxy atau subpath domain korporat tanpa mengalami kerusakan aset.

#### Hands-on Lab 12: Weather Web App Final Release & Hosting (Capstone Mini Project)
- **Berkas Terkait:** [`1-starter/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-12/hands-on-lab-12/1-starter/) | [`2-solution/`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-12/hands-on-lab-12/2-solution/) | [`README.md`](file:///Users/standard/Workspaces/RnD/works-templates-curriculum-programme/slides-materials/web-development-banking-odp-v2/session-12/hands-on-lab-12/README.md)
- **Objektif Bisnis:** Rilis final **Weather Web App (Capstone Mini Project)** yang menyatukan seluruh pilar web: struktur semantik & WAI-ARIA, grid responsif auto-fit 7 hari, modularitas fungsi murni `forecast-helper.js` & `next-history.js`, race condition guard, persistensi 5 kota di `localStorage`, dan kesiapan rilis produksi ke GitHub Pages.
- **Kriteria Evaluasi & Uji Otomatis:** 11 checks lulus (100%) via `scripts/test-runner.js`:
  1. Landmark semantik HTML (#formCuaca, #forecast, #riwayatKota)
  2. Relative path compliance (`./styles/...` & `./scripts/...`)
  3. Atribusi resmi Open-Meteo
  4. Sintaks higienis bebas dari kata kunci `var`
  5. Keamanan anti-XSS via `textContent`
  6. URL Builder 7 hari (`forecast_days=7`, `daily=...`, `timezone=auto`)
  7. Transformasi `toForecastRows` menghasilkan 7 objek harian valid
  8. CSS Grid responsif dengan `repeat(auto-fit, minmax(...))`
  9. Fungsi murni `nextHistory` teruji dengan jaminan immutabilitas
  10. Fail-fast double-request guard `if (button.disabled) return;`
  11. Fungsi perender elemen kartu `#forecast`
- **Rubrik Penilaian Capstone 100 Poin:**
  - *Version Control & GitHub* (10 Poin)
  - *HTML Semantik & Aksesibilitas* (15 Poin)
  - *CSS & Responsive Grid* (15 Poin)
  - *Fungsi Murni & Transformasi Data* (20 Poin)
  - *Integrasi API Asinkron & Guard* (20 Poin)
  - *Persistensi Storage & Deployment Live* (20 Poin)

---

## 5. Cara Menjalankan & Verifikasi Pengujian

Seluruh Hands-on Lab dilengkapi *automated test harness* mandiri berbasis Node.js murni tanpa dependensi pihak ketiga (*zero-dependency*).

### Menjalankan Seluruh Pengujian Solusi Fase 3 (Sesi 9–12):
```bash
node slides-materials/web-development-banking-odp-v2/session-9/hands-on-lab-9/2-solution/scripts/test-runner.js
node slides-materials/web-development-banking-odp-v2/session-10/hands-on-lab-10/2-solution/scripts/test-runner.js
node slides-materials/web-development-banking-odp-v2/session-11/hands-on-lab-11/2-solution/scripts/test-runner.js
node slides-materials/web-development-banking-odp-v2/session-12/hands-on-lab-12/2-solution/scripts/test-runner.js
```

### Menjalankan Seluruh Pengujian Solusi Fase 2 (Sesi 5–8):
```bash
node slides-materials/web-development-banking-odp-v2/session-5/hands-on-lab-5/2-solution/scripts/test-runner.js
node slides-materials/web-development-banking-odp-v2/session-6/hands-on-lab-6/2-solution/scripts/test-runner.js
node slides-materials/web-development-banking-odp-v2/session-7/hands-on-lab-7/2-solution/scripts/test-runner.js
node slides-materials/web-development-banking-odp-v2/session-8/hands-on-lab-8/2-solution/scripts/test-runner.js
```

### Menjalankan Seluruh Pengujian Solusi Fase 1 (Sesi 1–4):
```bash
node slides-materials/web-development-banking-odp-v2/session-1/hands-on-lab-1/2-solution/scripts/test-runner.js
node slides-materials/web-development-banking-odp-v2/session-2/hands-on-lab-2/2-solution/scripts/test-runner.js
node slides-materials/web-development-banking-odp-v2/session-3/hands-on-lab-3/2-solution/scripts/test-runner.js
node slides-materials/web-development-banking-odp-v2/session-4/hands-on-lab-4/2-solution/scripts/test-runner.js
```

### Menjalankan Uji Otomatis pada Starter Trainee:
Trainee dapat menjalankan script test harness di dalam folder masing-masing starter untuk melihat progres pengerjaan:
```bash
cd slides-materials/web-development-banking-odp-v2/session-12/hands-on-lab-12/1-starter
node scripts/test-runner.js
```

---

## 6. Panduan Pedagogis & Standar Kualitas Pengajaran

1. **Dual-Folder Architecture (`1-starter` & `2-solution`):**
   - Instruktur menggunakan `2-solution` sebagai tolok ukur demonstrasi kode (*live coding reference*) dan acuan penilaian (*grading benchmark*).
   - Trainee memulai latihan mandiri dari `1-starter` dengan bimbingan komentar `TODO` bernomor runut.
2. **Prinsip Red-Green Testing:**
   - Trainee diarahkan untuk menjalankan `node scripts/test-runner.js` terlebih dahulu untuk melihat kegagalan awal (*Red State*).
   - Trainee menyelesaikan setiap blok `TODO` hingga seluruh assertion uji otomatis berhasil dilewati (*Green State* / 100% Passed).
3. **Disiplin Keamanan & Kebersihan Kode Enterprise:**
   - **Zero Credentials in Code:** Dilarang keras menaruh API key, token, kredensial database, atau data pribadi nasabah (PII) ke dalam repositori.
   - **Anti-XSS Security:** Wajib menggunakan `textContent` untuk data dinamis yang berasal dari input pengguna atau API eksternal.
   - **Immutability First:** Memprioritaskan fungsi murni (*Pure Functions*) tanpa efek samping dan tanpa memutasi array masukan.
