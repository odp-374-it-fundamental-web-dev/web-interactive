/**
 * Demo 4: Dynamic History UI (Starter)
 */

let history = ["Jakarta", "Surabaya", "Bandung"];
const riwayatContainer = document.querySelector("#riwayatKota");
const btnHapus = document.querySelector("#hapusRiwayat");

// TODO 1: Implementasikan renderHistory()
// - Kosongkan riwayatContainer dengan replaceChildren()
// - Jika history.length === 0, tampilkan teks "Belum ada riwayat."
// - Iterasi history dengan forEach:
//   * Buat elemen <button>
//   * Set textContent = kota
//   * Pasang click listener untuk mencetak console.log("Pencarian ulang:", kota)
//   * appendChild ke riwayatContainer
function renderHistory() {
  // Tulis logika render di sini
}

// TODO 2: Pasang click listener ke btnHapus
// - Kosongkan array history
// - Panggil renderHistory()
btnHapus.addEventListener("click", () => {
  // Tulis logika hapus di sini
});

renderHistory();
