/**
 * Hands-on Lab 8: Portal Transaksi & Milestone 2 Real-Time Search
 * Starter Script (Trainee)
 */

// =================================================================
// BAGIAN 1: FORM TRANSAKSI
// =================================================================
const transaksi = [];
const form = document.querySelector("#formTransaksi");
const namaInput = document.querySelector("#nama");
const nominalInput = document.querySelector("#nominal");
const pesan = document.querySelector("#pesan");
const daftar = document.querySelector("#daftarTransaksi");

/**
 * Me-render daftar transaksi secara aman dan tanpa duplikasi.
 */
function renderTransaksi() {
  // TODO 1.1: Bersihkan kontainer dengan replaceChildren()
  
  // TODO 1.2: Iterasi array transaksi menggunakan forEach
  // - Buat elemen <li>
  // - Isi teks dengan aman menggunakan textContent (misal: `${item.nama}: ${item.nominal}`)
  // - Tambahkan <li> ke dalam daftar dengan appendChild()
}

if (form) {
  form.addEventListener("submit", (event) => {
    // TODO 2.1: Hentikan default submit reload browser
    
    // TODO 2.2: Ambil nilai nama (dengan .trim()) dan nominal (valueAsNumber)
    
    // TODO 2.3: Validasi input. Jika nama kosong ATAU nominal tidak valid / <= 0:
    // - Tampilkan pesan "Isi nama dan nominal di atas 0." pada pesan.textContent
    // - Kembalikan eksekusi lebih awal (return)
    
    // TODO 2.4: Jika valid:
    // - Simpan objek { nama, nominal } ke array transaksi
    // - Panggil renderTransaksi()
    // - Tampilkan pesan sukses: "Transaksi ditambahkan." pada pesan.textContent
    // - Reset formulir dengan form.reset()
  });
}

// =================================================================
// BAGIAN 2: MILESTONE 2 - PENCARIAN PELATIHAN REAL-TIME
// =================================================================
const pelatihan = [
  { id: 1, nama: "HTML Dasar", kategori: "Web" },
  { id: 2, nama: "CSS Layout", kategori: "Web" },
  { id: 3, nama: "JavaScript", kategori: "Web" },
  { id: 4, nama: "SQL Dasar", kategori: "Data" },
  { id: 5, nama: "Analisis Data", kategori: "Data" }
];

const cari = document.querySelector("#cari");
const hasil = document.querySelector("#hasil");

/**
 * Me-render hasil pencarian katalog pelatihan.
 * @param {Array<object>} data 
 */
function renderPelatihan(data) {
  // TODO 3.1: Bersihkan kontainer dengan hasil.replaceChildren()

  // TODO 3.2: Jika data kosong (data.length === 0):
  // - Set hasil.textContent = "Tidak ada hasil."
  // - Return lebih awal

  // TODO 3.3: Iterasi setiap item pada array data:
  // - Buat elemen <li>
  // - Set textContent = `${item.nama} (${item.kategori})`
  // - appendChild ke dalam hasil
}

if (cari) {
  // TODO 4: Pasang event listener "input" pada elemen cari
  // - Ambil kata kunci dengan cari.value.trim().toLowerCase()
  // - Saring array pelatihan menggunakan .filter(...) jika kata cocok dengan
  //   item.nama.toLowerCase() ATAU item.kategori.toLowerCase()
  // - Panggil renderPelatihan(cocok)
}

// TODO 5: Panggil renderPelatihan(pelatihan) untuk me-render 5 data awal
