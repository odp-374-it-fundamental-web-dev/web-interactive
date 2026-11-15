/**
 * Demo 3: Event Listeners & Callback (Starter)
 */

let hitungan = 0;
const displayHitungan = document.querySelector("#displayHitungan");
const btnTambah = document.querySelector("#btnTambah");
const btnLepas = document.querySelector("#btnLepas");
const logInfo = document.querySelector("#logInfo");

// TODO 1: Buat fungsi bernama handlerTambah(event)
// - Tambah nilai hitungan + 1
// - Update textContent displayHitungan
// - Cetak log event.type dan event.target.id
function handlerTambah(event) {
  // Isi logika di sini
}

// TODO 2: Pasang handlerTambah ke btnTambah menggunakan addEventListener("click", handlerTambah)

// TODO 3: Pasang event listener ke btnLepas untuk melepaskan listener pada btnTambah
// memakai removeEventListener("click", handlerTambah)
