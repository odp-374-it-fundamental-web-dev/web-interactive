/**
 * Demo 4: Dynamic List Rendering (Starter)
 */

const transaksi = [];
const form = document.querySelector("#formTransaksi");
const namaInput = document.querySelector("#nama");
const nominalInput = document.querySelector("#nominal");
const pesan = document.querySelector("#pesan");
const daftar = document.querySelector("#daftarTransaksi");

function renderTransaksi() {
  // TODO 1: Kosongkan isi elemen daftar sebelum render ulang
  // Gunakan daftar.replaceChildren()

  // TODO 2: Iterasi array transaksi dengan forEach
  // Buat <li>, isi textContent dengan format `${item.nama}: ${item.nominal}`,
  // lalu appendChild(li) ke dalam daftar
}

form.addEventListener("submit", (event) => {
  // TODO 3: Hentikan default form reload dengan event.preventDefault()

  // TODO 4: Ambil value nama dan nominal (valueAsNumber)
  // Lakukan validasi: nama tidak kosong (.trim()), nominal angka berhingga > 0

  // TODO 5: Jika valid, push { nama, nominal } ke array transaksi,
  // panggil renderTransaksi(), update pesan.textContent, dan reset form
});
