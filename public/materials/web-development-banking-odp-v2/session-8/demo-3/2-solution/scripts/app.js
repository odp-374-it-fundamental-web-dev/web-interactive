/**
 * Demo 3: Event Listeners & Event Object
 * Reference Solution (Instruktur)
 */

let hitungan = 0;
const displayHitungan = document.querySelector("#displayHitungan");
const btnTambah = document.querySelector("#btnTambah");
const btnLepas = document.querySelector("#btnLepas");
const logInfo = document.querySelector("#logInfo");

// Named Callback Function (Memiliki identitas referensi fungsi yang tetap)
function handlerTambah(event) {
  hitungan++;
  displayHitungan.textContent = hitungan;

  // Membaca properti object event
  logInfo.textContent = `Event Triggered!\n- Tipe Event: "${event.type}"\n- Target ID: "#${event.target.id}"\n- Timestamp: ${Math.round(event.timeStamp)} ms`;
  console.log("Event Object Detail:", {
    type: event.type,
    target: event.target,
    bubbles: event.bubbles
  });
}

// 1. Memasang Event Listener dengan referensi fungsi bernama
btnTambah.addEventListener("click", handlerTambah);

// 2. Melepaskan Event Listener menggunakan referensi fungsi yang sama
btnLepas.addEventListener("click", () => {
  btnTambah.removeEventListener("click", handlerTambah);
  btnTambah.disabled = true;
  btnTambah.style.opacity = "0.5";
  btnTambah.style.cursor = "not-allowed";
  logInfo.textContent = "Status: Listener berhasil dilepas (removeEventListener). Tombol Tambah dinonaktifkan.";
});
