/**
 * Demo 2: DOM Manipulation (Starter)
 */

const badgeStatus = document.querySelector("#badgeStatus");
const catatanKeamanan = document.querySelector("#catatanKeamanan");
const btnToggleStatus = document.querySelector("#btnToggleStatus");

// Simulasi input dari user yang berpotensi mengandung karakter XSS
const inputCatatanUser = "<img src='invalid' onerror='alert(\"XSS Attack!\")'> Verifikasi Identitas Berhasil.";

// TODO 1: Tampilkan inputCatatanUser ke dalam elemen catatanKeamanan secara AMAN memakai textContent!
// Jangan gunakan innerHTML!
catatanKeamanan.textContent = "TODO: Gunakan textContent";

// TODO 2: Ubah class dan teks status saat tombol diklik
btnToggleStatus.addEventListener("click", () => {
  // Tambahkan/hapus class 'aktif' dan 'terblokir'
  // Ubah teks badgeStatus
});
