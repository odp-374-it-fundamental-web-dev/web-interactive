/**
 * Hands-on Lab 8: Portal Transaksi & Milestone 2 Real-Time Search
 * Reference Solution (Instruktur)
 * 
 * Standar industri perbankan:
 * - Anti-XSS (textContent)
 * - Container cleaning (replaceChildren)
 * - Accessible live status (role="status", aria-live="polite")
 * - Combined Search & Category Filter (Milestone 2 + Challenge)
 */

// =================================================================
// BAGIAN 1: FORM TRANSAKSI FINANSIAL
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
  // replaceChildren() mengosongkan kontainer sebelum render ulang
  daftar.replaceChildren();

  if (transaksi.length === 0) {
    const liKosong = document.createElement("li");
    liKosong.textContent = "Belum ada transaksi tercatat.";
    liKosong.style.color = "#64748b";
    liKosong.style.fontStyle = "italic";
    daftar.appendChild(liKosong);
    return;
  }

  transaksi.forEach((item, index) => {
    const li = document.createElement("li");

    const spanInfo = document.createElement("span");
    spanInfo.textContent = `${item.nama}: Rp ${item.nominal.toLocaleString("id-ID")}`;
    li.appendChild(spanInfo);

    // Fitur Challenge: Tombol Hapus per Item
    const btnHapus = document.createElement("button");
    btnHapus.type = "button";
    btnHapus.textContent = "Hapus";
    btnHapus.className = "btn-hapus";
    btnHapus.addEventListener("click", () => {
      transaksi.splice(index, 1);
      renderTransaksi();
      if (pesan) {
        pesan.textContent = `Transaksi "${item.nama}" berhasil dihapus.`;
        pesan.className = "pesan-sukses";
      }
    });

    li.appendChild(btnHapus);
    daftar.appendChild(li);
  });
}

if (form) {
  form.addEventListener("submit", (event) => {
    // 1. Hentikan form submission default browser
    event.preventDefault();

    const nama = namaInput ? namaInput.value.trim() : "";
    const nominal = nominalInput ? nominalInput.valueAsNumber : NaN;

    // 2. Validasi input: nama tidak boleh kosong, nominal harus angka berhingga > 0
    if (!nama || !Number.isFinite(nominal) || nominal <= 0) {
      if (pesan) {
        pesan.textContent = "Isi nama dan nominal di atas 0.";
        pesan.className = "pesan-error";
      }
      return;
    }

    // 3. Simpan ke state array transaksi
    transaksi.push({ nama, nominal });
    renderTransaksi();

    if (pesan) {
      pesan.textContent = "Transaksi ditambahkan.";
      pesan.className = "pesan-sukses";
    }

    // 4. Reset formulir & fokuskan kembali ke input nama
    form.reset();
    if (namaInput) namaInput.focus();
  });
}

// =================================================================
// BAGIAN 2: MILESTONE 2 - PENCARIAN & FILTER REAL-TIME
// =================================================================
const pelatihan = [
  { id: 1, nama: "HTML Dasar", kategori: "Web" },
  { id: 2, nama: "CSS Layout", kategori: "Web" },
  { id: 3, nama: "JavaScript", kategori: "Web" },
  { id: 4, nama: "SQL Dasar", kategori: "Data" },
  { id: 5, nama: "Analisis Data", kategori: "Data" }
];

const cari = document.querySelector("#cari");
const filterKategori = document.querySelector("#filterKategori");
const hasil = document.querySelector("#hasil");

/**
 * Me-render hasil pencarian katalog pelatihan ke DOM.
 * @param {Array<object>} data 
 */
function renderPelatihan(data) {
  if (!hasil) return;

  // Bersihkan kontainer sebelum render
  hasil.replaceChildren();

  // Penanganan ketika filter tidak menemukan hasil yang cocok
  if (!data || data.length === 0) {
    hasil.textContent = "Tidak ada hasil.";
    return;
  }

  data.forEach((item) => {
    const li = document.createElement("li");

    const spanNama = document.createElement("span");
    spanNama.textContent = `${item.nama} (${item.kategori})`;
    li.appendChild(spanNama);

    const spanBadge = document.createElement("span");
    spanBadge.textContent = item.kategori;
    spanBadge.className = "badge-tag";
    li.appendChild(spanBadge);

    hasil.appendChild(li);
  });
}

/**
 * Filter gabungan: kata kunci teks + dropdown kategori (Challenge)
 */
function filterDanRender() {
  const kata = cari ? cari.value.trim().toLowerCase() : "";
  const kategoriDipilih = filterKategori ? filterKategori.value : "Semua";

  const cocok = pelatihan.filter((item) => {
    const matchKata =
      item.nama.toLowerCase().includes(kata) ||
      item.kategori.toLowerCase().includes(kata);
    const matchKategori =
      kategoriDipilih === "Semua" || item.kategori === kategoriDipilih;
    return matchKata && matchKategori;
  });

  renderPelatihan(cocok);
}

if (cari) {
  cari.addEventListener("input", filterDanRender);
}

if (filterKategori) {
  filterKategori.addEventListener("change", filterDanRender);
}

// Inisialisasi awal saat halaman dibuka
renderTransaksi();
renderPelatihan(pelatihan);
