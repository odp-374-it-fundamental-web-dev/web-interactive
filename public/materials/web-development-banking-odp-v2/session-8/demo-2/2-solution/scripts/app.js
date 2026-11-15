/**
 * Demo 2: Safe DOM Modification & Security
 * Reference Solution (Instruktur)
 */

const badgeStatus = document.querySelector("#badgeStatus");
const catatanKeamanan = document.querySelector("#catatanKeamanan");
const btnToggleStatus = document.querySelector("#btnToggleStatus");

// Payload berbahaya simulasi serangan XSS (OWASP A03: Injection)
const payloadXssUser = "<img src='x' onerror='alert(\"XSS Attack!\")'> Verifikasi Identitas Berhasil.";

// 1. Keamanan: Gunakan textContent untuk merender input/data yang tidak dipercaya
// Karakter '<' dan '>' akan di-escape otomatis menjadi string biasa tanpa parse HTML
catatanKeamanan.textContent = payloadXssUser;
console.log("Catatan Keamanan Dirender secara Aman via textContent:", catatanKeamanan.textContent);

// 2. Manipulasi Kelas Dinamis & Status
btnToggleStatus.addEventListener("click", () => {
  const isAktif = badgeStatus.classList.contains("aktif");

  if (isAktif) {
    badgeStatus.classList.remove("aktif");
    badgeStatus.classList.add("terblokir");
    badgeStatus.textContent = "TERBLOKIR SEMENTARA";
    btnToggleStatus.textContent = "Aktifkan Kembali Kartu";
  } else {
    badgeStatus.classList.remove("terblokir");
    badgeStatus.classList.add("aktif");
    badgeStatus.textContent = "AKTIF";
    btnToggleStatus.textContent = "Blokir Kartu";
  }
});
