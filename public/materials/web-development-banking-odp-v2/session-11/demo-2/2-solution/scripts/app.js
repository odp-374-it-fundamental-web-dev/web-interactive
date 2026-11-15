/**
 * Demo 2: Storage Startup Bug Fix
 * Reference Solution (Instruktur)
 * 
 * Perbaikan:
 * Menghilangkan pemanggilan localStorage.removeItem() yang tidak sengaja
 * tertinggal di baris startup global, dan memindahkannya hanya ke event handler tombol hapus.
 */

const KEY = "demo-session11-bug-history";
const daftar = document.querySelector("#daftar");
const btnTambah = document.querySelector("#btnTambah");
const btnHapus = document.querySelector("#btnHapus");

// CATATAN: Kode startup di bawah ini TIDAK LAGI menghapus storage!

function render() {
  daftar.replaceChildren();
  const raw = localStorage.getItem(KEY);
  const items = raw ? JSON.parse(raw) : [];

  if (items.length === 0) {
    const span = document.createElement("span");
    span.textContent = "Belum ada riwayat tersimpan.";
    span.style.color = "#94a3b8";
    span.style.fontStyle = "italic";
    daftar.appendChild(span);
    return;
  }

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
  items.unshift("Kota #" + (items.length + 1) + " (" + new Date().toLocaleTimeString() + ")");
  localStorage.setItem(KEY, JSON.stringify(items.slice(0, 5)));
  render();
});

btnHapus.addEventListener("click", () => {
  // removeItem hanya dipanggil saat pengguna secara sadar mengklik tombol Hapus
  localStorage.removeItem(KEY);
  render();
});

// Render awal mempertahankan data yang tersimpan sebelumnya
render();
