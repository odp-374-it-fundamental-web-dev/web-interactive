/**
 * Demo 4: UI State Machine & Double-Request Prevention
 * Reference Solution (Instruktur)
 */

const btnSuccess = document.querySelector("#btnSuccess");
const btnEmpty = document.querySelector("#btnEmpty");
const btnError = document.querySelector("#btnError");
const allButtons = [btnSuccess, btnEmpty, btnError];

const status = document.querySelector("#status");
const hasil = document.querySelector("#hasil");

const label = {
  loading: "Mengambil data...",
  success: "Data cuaca dimuat.",
  empty: "Kota tidak ditemukan.",
  error: "Data gagal dimuat. Coba lagi.",
  invalid: "Masukkan minimal dua karakter nama kota."
};

function setState(state) {
  status.textContent = label[state] || "Siap.";
  status.className = `status-box state-${state}`;

  // Bersihkan konten hasil jika state bukan success
  if (state !== "success") {
    hasil.replaceChildren();
  }

  // Nonaktifkan seluruh tombol saat loading untuk mencegah spam klik
  const isLoading = state === "loading";
  allButtons.forEach((btn) => {
    btn.disabled = isLoading;
  });
}

// Simulasi alur asinkron dengan kontrol state
async function jalankanSimulasi(targetState) {
  setState("loading");

  try {
    // Simulasi jeda network latency 1 detik
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (targetState === "error") {
      throw new Error("Koneksi jaringan terputus (Network Error)");
    }

    if (targetState === "empty") {
      setState("empty");
      return;
    }

    // Skenario Sukses: Render hasil
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = "Data Cuaca Jakarta: 31°C, Angin 14 km/jam. Waktu: " + new Date().toLocaleTimeString();
    hasil.replaceChildren(card);
    setState("success");
  } catch (err) {
    console.error("Tertangkap di handler:", err.message);
    setState("error");
  } finally {
    // Blok finally menjamin tombol kembali aktif apa pun hasilnya
    allButtons.forEach((btn) => {
      btn.disabled = false;
    });
  }
}

btnSuccess.addEventListener("click", () => jalankanSimulasi("success"));
btnEmpty.addEventListener("click", () => jalankanSimulasi("empty"));
btnError.addEventListener("click", () => jalankanSimulasi("error"));
