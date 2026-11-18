/**
 * Mini Capstone: Kalkulator Kurs Rupiah Orchestration
 * Reference Solution (Instruktur)
 *
 * Standar integrasi perbankan:
 * - Double-request fail-fast guard
 * - Pemanfaatan modul terpisah rate-helper.js dan next-history.js
 * - Render DOM aman bebas injeksi HTML (textContent)
 * - Tanpa penghapusan storage saat startup
 */

const form = document.querySelector("#formKurs");
const jumlahInput = document.querySelector("#jumlah");
const baseInput = document.querySelector("#inputDasar");
const targetInput = document.querySelector("#inputTujuan");
const button = document.querySelector("#konversiKurs");
const status = document.querySelector("#status");
const hasil = document.querySelector("#hasilKurs");
const riwayatContainer = document.querySelector("#riwayatPair");
const btnHapusRiwayat = document.querySelector("#hapusRiwayat");

const STORAGE_KEY = "bni-odp-kurs-history";

const label = {
  loading: "Mengambil data kurs...",
  success: "Data kurs berhasil dimuat.",
  empty: "Pasangan mata uang tidak ditemukan.",
  error: "Gagal memuat data kurs. Periksa koneksi Anda.",
  invalid: "Masukkan jumlah dan kode mata uang yang valid (3 huruf)."
};

function setState(state) {
  if (status) {
    status.textContent = label[state] || "";
    status.className = `status-box state-${state}`;
  }
  if (state !== "success") {
    if (hasil) hasil.replaceChildren();
  }
  if (button) {
    button.disabled = state === "loading";
  }
}

function readHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((i) => typeof i === "string") : [];
  } catch {
    return [];
  }
}

function saveHistory(pairs) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pairs));
  } catch (error) {
    console.error("Gagal menyimpan ke storage:", error.message);
  }
}

function rememberPair(pair) {
  const prev = readHistory();
  const next =
    typeof nextHistory === "function" ? nextHistory(prev, pair, 5) : [pair, ...prev].slice(0, 5);
  saveHistory(next);
  renderHistory();
}

function renderHistory() {
  if (!riwayatContainer) return;
  riwayatContainer.replaceChildren();
  const pairs = readHistory();

  if (pairs.length === 0) {
    const span = document.createElement("span");
    span.textContent = "Belum ada riwayat pasangan kurs tersimpan.";
    span.style.color = "#94a3b8";
    span.style.fontStyle = "italic";
    riwayatContainer.appendChild(span);
    return;
  }

  pairs.forEach((pair) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn-city";
    btn.textContent = pair.replace("/", " → ");
    btn.addEventListener("click", () => {
      const [base, target] = pair.split("/");
      if (baseInput) baseInput.value = base;
      if (targetInput) targetInput.value = target;
      loadRate();
    });
    riwayatContainer.appendChild(btn);
  });
}

async function getJSON(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

const round2 = (n) => Math.round(n * 100) / 100;

function renderRate(base, target, jumlah, data) {
  if (!hasil) return;
  const rate = data.rates?.[target];

  const card = document.createElement("div");
  card.className = "rate-card";

  const title = document.createElement("h2");
  title.textContent = `${jumlah} ${base} =`;

  const amount = document.createElement("div");
  amount.className = "amount-now";
  amount.textContent = Number.isFinite(rate)
    ? `${round2(jumlah * rate).toLocaleString("id-ID")} ${target}`
    : "Rate tidak tersedia";

  const meta = document.createElement("div");
  meta.className = "rate-meta";
  meta.textContent = `1 ${base} = ${round2(rate)} ${target} | Tanggal data: ${data.date}`;

  // Nama mata uang (dari describeCurrencyCode)
  if (typeof describeCurrencyCode === "function") {
    const nameEl = document.createElement("div");
    nameEl.className = "rate-name";
    nameEl.textContent = `${describeCurrencyCode(base)} → ${describeCurrencyCode(target)}`;
    card.appendChild(nameEl);
  }

  card.appendChild(title);
  card.appendChild(amount);
  card.appendChild(meta);

  hasil.replaceChildren(card);
}

async function loadRate() {
  // Fail-fast race condition guard
  if (button && button.disabled) return;

  const jumlah = Number(jumlahInput ? jumlahInput.value : NaN);
  const base = baseInput ? baseInput.value.trim().toUpperCase() : "";
  const target = targetInput ? targetInput.value.trim().toUpperCase() : "";
  if (!Number.isFinite(jumlah) || jumlah < 0 || !/^[A-Za-z]{3}$/.test(base) || !/^[A-Za-z]{3}$/.test(target)) {
    setState("invalid");
    return;
  }

  setState("loading");
  try {
    const data = await getJSON(makeLatestURL(base, [target]));
    renderRate(base, target, jumlah, data);
    setState("success");
    rememberPair(`${base}/${target}`);
  } catch (error) {
    console.error("Gagal memuat data kurs:", error.message);
    setState("error");
  } finally {
    if (button) button.disabled = false;
  }
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    loadRate();
  });
}

if (btnHapusRiwayat) {
  btnHapusRiwayat.addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEY);
    renderHistory();
  });
}

// Inisialisasi riwayat saat startup tanpa menghapus localStorage
renderHistory();
