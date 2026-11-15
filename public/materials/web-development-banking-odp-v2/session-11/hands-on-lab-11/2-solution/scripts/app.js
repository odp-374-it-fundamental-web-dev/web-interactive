/**
 * Milestone 5: Weather Web App Final Integration
 * Reference Solution (Instruktur)
 * 
 * Standar integrasi perbankan:
 * - Double-request guard fail-fast
 * - Pemanfaatan pure function nextHistory()
 * - Bebas startup storage wipe
 * - State machine teruji
 */

const form = document.querySelector("#formCuaca");
const kotaInput = document.querySelector("#kota");
const button = document.querySelector("#cariCuaca");
const status = document.querySelector("#status");
const hasil = document.querySelector("#hasilCuaca");
const riwayatContainer = document.querySelector("#riwayatKota");
const btnHapusRiwayat = document.querySelector("#hapusRiwayat");

const STORAGE_KEY = "bni-odp-weather-history-v1";

const label = {
  loading: "Mengambil data...",
  success: "Data cuaca dimuat.",
  empty: "Kota tidak ditemukan.",
  error: "Data gagal dimuat. Coba lagi.",
  invalid: "Masukkan minimal dua karakter nama kota."
};

function setState(state) {
  if (status) {
    status.textContent = label[state] || "";
    status.className = `status-box state-${state}`;
  }
  if (state !== "success" && hasil) {
    hasil.replaceChildren();
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
    return Array.isArray(parsed) ? parsed.filter(i => typeof i === "string") : [];
  } catch {
    return [];
  }
}

function saveHistory(cities) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cities));
  } catch (error) {
    console.error("Gagal menyimpan ke storage:", error.message);
  }
}

function rememberCity(city) {
  const prev = readHistory();
  // Menggunakan pure function nextHistory yang dimuat secara modular
  const next = typeof nextHistory === "function" ? nextHistory(prev, city, 5) : [city, ...prev].slice(0, 5);
  saveHistory(next);
  renderHistory();
}

function renderHistory() {
  if (!riwayatContainer) return;
  riwayatContainer.replaceChildren();
  const cities = readHistory();

  if (cities.length === 0) {
    const span = document.createElement("span");
    span.textContent = "Belum ada riwayat kota tersimpan.";
    span.style.color = "#94a3b8";
    span.style.fontStyle = "italic";
    riwayatContainer.appendChild(span);
    return;
  }

  cities.forEach((kota) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn-city";
    btn.textContent = kota;
    btn.addEventListener("click", () => {
      if (kotaInput) kotaInput.value = kota;
      loadWeather(kota);
    });
    riwayatContainer.appendChild(btn);
  });
}

async function getJSON(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

async function findCity(name) {
  const url = new URL("https://geocoding-api.open-meteo.com/v1/search");
  url.search = new URLSearchParams({
    name, count: "1", language: "id", format: "json"
  }).toString();
  const data = await getJSON(url);
  return data.results?.[0] ?? null;
}

async function fetchWeather(city) {
  const url = new URL("https://api.open-meteo.com/v1/forecast");
  url.search = new URLSearchParams({
    latitude: city.latitude, longitude: city.longitude,
    current: "temperature_2m,wind_speed_10m", timezone: "auto"
  }).toString();
  const data = await getJSON(url);
  if (!Number.isFinite(data.current?.temperature_2m) || !Number.isFinite(data.current?.wind_speed_10m)) {
    throw new Error("Data suhu tidak tersedia");
  }
  return data;
}

function renderWeather(city, data) {
  if (!hasil) return;
  const c = data.current, u = data.current_units;
  const card = document.createElement("div");
  card.className = "weather-card";
  card.textContent = `${city.name}, ${city.country ?? ""}: ${c.temperature_2m} ${u.temperature_2m}; angin ${c.wind_speed_10m} ${u.wind_speed_10m}. Waktu data: ${c.time} (${data.timezone}).`;
  hasil.replaceChildren(card);
}

async function loadWeather(name) {
  // Guard Clause Race Condition: Batalkan seketika jika request sebelumnya masih berjalan
  if (button && button.disabled) return;

  setState("loading");
  try {
    const city = await findCity(name);
    if (!city) {
      setState("empty");
      return;
    }
    const data = await fetchWeather(city);
    renderWeather(city, data);
    setState("success");
    rememberCity(city.name);
  } catch (error) {
    console.error("Gagal memuat:", error.message);
    setState("error");
  } finally {
    if (button) button.disabled = false;
  }
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = kotaInput ? kotaInput.value.trim() : "";
    if (name.length < 2) {
      setState("invalid");
      return;
    }
    loadWeather(name);
  });
}

if (btnHapusRiwayat) {
  btnHapusRiwayat.addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEY);
    renderHistory();
  });
}

// Inisialisasi awal mempertahankan data yang tersimpan sebelumnya
renderHistory();
