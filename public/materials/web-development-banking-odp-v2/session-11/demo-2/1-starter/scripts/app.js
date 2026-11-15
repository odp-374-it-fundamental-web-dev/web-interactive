/**
 * Demo 2: Storage Startup Bug (Starter)
 */

const KEY = "demo-session11-bug-history";
const daftar = document.querySelector("#daftar");
const btnTambah = document.querySelector("#btnTambah");

// =================================================================
// BUG AKTIF: Kode pengujian yang tidak sengaja tertinggal di startup!
// =================================================================
// TODO 1: Identifikasi mengapa baris di bawah ini menyebabkan riwayat selalu hilang saat reload!
localStorage.removeItem(KEY); // <-- SISA KODE TESTING YANG MENYEBABKAN BUG

function render() {
  daftar.replaceChildren();
  const raw = localStorage.getItem(KEY);
  const items = raw ? JSON.parse(raw) : [];

  if (items.length === 0) {
    daftar.textContent = "Riwayat KOSONG. (Data hilang setelah reload!)";
    daftar.style.color = "#dc2626";
    return;
  }

  daftar.textContent = "";
  items.forEach((item) => {
    const span = document.createElement("span");
    span.className = "badge";
    span.textContent = item;
    daftar.appendChild(span);
  });
}

btnTambah.addEventListener("click", () => {
  const raw = localStorage.getItem(KEY);
  const items = raw ? JSON.parse(raw) : [];
  items.push("Bandung (" + new Date().toLocaleTimeString() + ")");
  localStorage.setItem(KEY, JSON.stringify(items));
  render();
});

render();
