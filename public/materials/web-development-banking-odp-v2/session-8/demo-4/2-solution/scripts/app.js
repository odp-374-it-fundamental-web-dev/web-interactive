/**
 * Demo 4: Dynamic List Rendering
 * Reference Solution (Instruktur)
 */

const transaksi = [];
const form = document.querySelector("#formTransaksi");
const namaInput = document.querySelector("#nama");
const nominalInput = document.querySelector("#nominal");
const pesan = document.querySelector("#pesan");
const daftar = document.querySelector("#daftarTransaksi");

function renderTransaksi() {
  // replaceChildren() mengosongkan kontainer sebelum render ulang
  daftar.replaceChildren();

  transaksi.forEach((item) => {
    const li = document.createElement("li");
    // textContent menjamin teks input aman dari parsing HTML/XSS
    li.textContent = `${item.nama}: Rp ${item.nominal.toLocaleString("id-ID")}`;
    daftar.appendChild(li);
  });
}

form.addEventListener("submit", (event) => {
  // Hentikan perilaku default form reload browser
  event.preventDefault();

  const nama = namaInput.value.trim();
  const nominal = nominalInput.valueAsNumber;

  // Validasi input form: nama tidak boleh kosong, nominal harus angka > 0
  if (!nama || !Number.isFinite(nominal) || nominal <= 0) {
    pesan.textContent = "Isi nama dan nominal di atas 0.";
    pesan.className = "pesan-error";
    return;
  }

  // Tambahkan transaksi baru ke state array
  transaksi.push({ nama, nominal });
  renderTransaksi();

  pesan.textContent = "Transaksi ditambahkan.";
  pesan.className = "pesan-sukses";

  // Reset kolom input form
  form.reset();
  namaInput.focus();
});

// Render awal saat dokumen siap
renderTransaksi();
