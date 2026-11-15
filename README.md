# Interactive Learning Platform — Web Development Banking ODP IT 2026

Platform web interaktif resmi kurikulum **Web Development Fundamentals — BNI Officer Development Program (ODP IT) 2026** yang diselenggarakan oleh **Hacktiv8 Indonesia** dan **PT Bank Negara Indonesia (Persero) Tbk**.

Aplikasi ini menyatukan seluruh 12 sesi pelatihan, 48 modul live demo instruktur, dan 12 hands-on lab mandiri ke dalam satu antarmuka interaktif yang dapat langsung diuji coba, diinspeksi kode sumbernya, dibandingkan perbedaannya (*diff*), serta dieksekusi pengujian otomatisnya (*automated test harness*) di browser.

---

## 1. Fitur Utama Platform Interaktif

### A. Three.js 3D Interactive Hero Canvas
- Visualisasi 3D jaringan simpul (*banking network nodes*) berbasis Three.js yang merespons pergerakan mouse.
- Menampilkan ringkasan metrik pelatihan (12 Sesi, 48 Demos, 12 Labs, 42 Jam Pelatihan).
- Navigasi cepat penyaringan fase kurikulum (**Semua Fase**, **Fase 1: HTML & CSS**, **Fase 2: JS & DOM**, **Fase 3: Async & Capstone**).

### B. Live Preview Sandbox (Interactive Runner)
- **Modul Antarmuka Web**: Preview langsung via sandbox `<iframe>` interaktif dengan pengubah ukuran perangkat (*Desktop*, *Tablet 768px*, *Mobile 375px*), tombol muat ulang, dan tautan pembuka tab baru.
- **Modul Skrip JavaScript (Node.js)**: Terminal simulasi interaktif bergaya IDE macOS (`#0f172a`) dengan tombol **"Jalankan Skrip"**, penangkapan log konsol real-time (`log`, `info`, `warn`, `error`, `assert`), dan pembersih output.
- **Peralihan Versi**: Beralih secara instan antara versi latihan **`1-starter` (Trainee)** dan solusi lengkap **`2-solution` (Instruktur)**.

### C. Multi-File Code Inspector & Syntax Highlighting
- Tab pemilih berkas untuk setiap modul (`index.html`, `styles/main.css`, `scripts/app.js`, `test-runner.js`, dll.).
- Tema gelap IDE berstandar Slidev (`#0f172a` body, `#1e293b` title bar dengan titik kontrol macOS).
- Nomor baris, sorotan khusus baris komentar `TODO`, tombol **"Salin Kode"** sekali klik, dan indikator kuota baris kode (standar 25–35 baris per slide).

### D. Side-by-Side Diff Viewer
- Komparasi visual berdampingan antara kode baseline `1-starter` vs solusi referensi `2-solution`.
- Memudahkan trainee memahami secara visual perbedaan baris yang harus diisi untuk menyelesaikan setiap latihan.

### E. Automated Test Harness Runner di Browser
- Menjalankan suite pengujian otomatis Node.js secara interaktif di browser.
- Menampilkan bilah progres pengujian, status kelulusan check-by-check (`✔ PASS` atau `✖ FAIL`), dan persentase skor.
- Integrasi efek animasi selebrasi (*confetti*) saat solusi mencapai kelulusan **100% (Acceptance Criteria Satisfied)**.
- Trainee dapat menguji starter (melihat TODO yang belum lengkap) dan menguji solusi (melihat seluruh kriteria lulus hijau).

### F. Capstone Mini Project 100-Point Rubric Evaluator
- Modal interaktif rubrik penilaian 100 poin untuk Sesi 12 Capstone Mini Project.
- 6 kategori penilaian (Version Control, HTML5 Semantik, Responsive Grid, Fungsi Murni, Async API Guard, LocalStorage & Deployment).
- Kotak centang interaktif dengan kalkulasi skor instan secara real-time.

### G. Global Search & Shortcut Navigasi (⌘K)
- Pencarian instan melintasi seluruh 60 modul berdasarkan judul, kata kunci (misal: *Event Loop*, *Grid*, *LocalStorage*, *XSS*, *Fetch*, *Bootstrap*), nomor sesi, atau nama fungsi.

---

## 2. Cara Menjalankan & Membangun Aplikasi

### Prasyarat:
- Node.js versi 18+ (direkomendasikan Node.js v20+)
- npm versi 9+

### Instalasi Dependensi:
```bash
cd web-interactive/web-development-banking-odp-v2
npm install
```

### Menjalankan Mode Pengembangan (Dev Server):
```bash
npm run dev
# Server dev aktif pada: http://localhost:5173
```

### Membangun Versi Produksi:
```bash
npm run build
# Menghasilkan bundel teroptimasi di folder dist/
```

### Menjalankan Pratinjau Produksi:
```bash
npm run preview
# Server preview aktif pada: http://localhost:4173
```

### Memperbarui Dataset Kurikulum:
Jika terdapat perubahan berkas pada materi di `slides-materials/web-development-banking-odp-v2/`, perbarui data interaktif dengan menjalankan:
```bash
node scripts/build-data.js
# Memperbarui data/materials-data.json secara otomatis
```

---

## 3. Struktur Direktori Proyek

```text
web-interactive/web-development-banking-odp-v2/
├── package.json                       # Konfigurasi dependensi mandiri
├── vite.config.ts                     # Konfigurasi Vite bundler
├── tailwind.config.js                 # Konfigurasi token desain Hacktiv8 & BNI
├── tsconfig.json                      # Konfigurasi TypeScript
├── index.html                         # Dokumen HTML utama
├── public/                            # Aset statis publik
│   ├── logos/                         # Logo resmi Hacktiv8
│   ├── backgrounds/                   # Grafis latar belakang busur (arc)
│   └── materials/                     # Salinan statis seluruh materi kurikulum
├── scripts/
│   └── build-data.js                  # Pembangun JSON dataset 12 sesi (1.1 MB)
└── src/
    ├── main.tsx                       # Titik masuk React 18
    ├── App.tsx                        # Komponen utama & state management
    ├── index.css                      # Styling Tailwind & custom arc
    ├── types/                         # Definisi antarmuka TypeScript
    ├── data/
    │   └── materials-data.json        # Dataset lengkap 12 sesi, 48 demos & 12 labs
    └── components/
        ├── Header.tsx                 # Bilah navigasi atas dengan branding Hacktiv8
        ├── Hero3D.tsx                 # Canvas 3D Three.js & filter tab fase
        ├── SessionList.tsx            # Sidebar daftar 12 sesi & modul
        ├── ModuleWorkspace.tsx        # Workbench utama (Preview, Code, Diff, Test, Guide)
        ├── LivePreview.tsx            # Runner iframe web & terminal script sandbox
        ├── CodeInspector.tsx          # Multi-file viewer & penyorot sintaks
        ├── DiffViewer.tsx             # Komparasi Starter vs Solution berdampingan
        ├── TestRunnerPanel.tsx        # Runner uji otomatis interaktif + confetti
        ├── ReadmeViewer.tsx           # Penampil dokumentasi panduan modul
        ├── CapstoneRubricModal.tsx    # Modal kalkulator rubrik 100 poin
        ├── SearchModal.tsx            # Modal pencarian global (⌘K)
        └── Footer.tsx                 # Footer resmi kurikulum BNI ODP IT
```
