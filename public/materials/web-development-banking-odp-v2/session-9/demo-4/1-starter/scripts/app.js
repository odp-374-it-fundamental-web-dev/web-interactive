/**
 * Demo 4: UI State Machine (Starter)
 */

const button = document.querySelector("#btnFetch");
const status = document.querySelector("#status");
const hasil = document.querySelector("#hasil");

const label = {
  loading: "Mengambil data...",
  success: "Data berhasil dimuat.",
  empty: "Data tidak ditemukan.",
  error: "Data gagal dimuat. Coba lagi.",
  invalid: "Parameter tidak valid."
};

// TODO 1: Buat fungsi setState(state)
// 1. Ubah status.textContent sesuai label[state]
// 2. Jika state !== "success", kosongkan hasil dengan replaceChildren()
// 3. Set button.disabled = (state === "loading")
function setState(state) {
  // Tulis logika setState di sini
}

button.addEventListener("click", async () => {
  // TODO 2: Panggil setState("loading"), simulasikan delay 1.5 detik dengan setTimeout,
  // lalu panggil setState("success") dan pulihkan button di finally
});
