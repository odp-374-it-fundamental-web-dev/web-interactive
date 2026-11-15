/**
 * Demo 4: Dynamic History UI with Re-search Buttons
 * Reference Solution (Instruktur)
 */

let history = ["Jakarta", "Surabaya", "Bandung", "Medan", "Semarang"];
const riwayatContainer = document.querySelector("#riwayatKota");
const btnHapus = document.querySelector("#hapusRiwayat");
const logInfo = document.querySelector("#logInfo");

function renderHistory() {
  // replaceChildren() membersihkan elemen tombol sebelumnya
  riwayatContainer.replaceChildren();

  if (history.length === 0) {
    const spanKosong = document.createElement("span");
    spanKosong.textContent = "Belum ada riwayat kota tersimpan.";
    spanKosong.style.color = "#94a3b8";
    spanKosong.style.fontStyle = "italic";
    riwayatContainer.appendChild(spanKosong);
    return;
  }

  history.forEach((kota) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn-city";
    btn.textContent = kota;

    btn.addEventListener("click", () => {
      logInfo.textContent = `[Pencarian Ulang] Memicu request data cuaca untuk: "${kota}"`;
      console.log("Re-fetching weather for:", kota);
    });

    riwayatContainer.appendChild(btn);
  });
}

btnHapus.addEventListener("click", () => {
  history = [];
  renderHistory();
  logInfo.textContent = "Riwayat pencarian telah dibersihkan.";
});

renderHistory();
