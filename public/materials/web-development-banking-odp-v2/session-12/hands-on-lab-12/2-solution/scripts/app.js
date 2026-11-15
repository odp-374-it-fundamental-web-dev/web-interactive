/**
 * Capstone Mini Project: Weather Web App Orchestration
 * Reference Solution (Instruktur)
 * 
 * Standar integrasi perbankan:
 * - Double-request fail-fast guard
 * - Pemanfaatan modul terpisah forecast-helper.js dan next-history.js
 * - Render DOM aman bebas injeksi HTML (textContent)
 * - Tanpa penghapusan storage saat startup
 */

const form = document.querySelector("#formCuaca");
const kotaInput = document.querySelector("#kota");
const button = document.querySelector("#cariCuaca");
const status = document.querySelector("#status");
const hasil = document.querySelector("#hasilCuaca");
const forecastContainer = document.querySelector("#forecast");
const riwayatContainer = document.querySelector("#riwayatKota");
const btnHapusRiwayat = document.querySelector("#hapusRiwayat");

const STORAGE_KEY = "bni-odp-weather-history-v1";

const label = {
  loading: "Mengambil data prakiraan cuaca...",
  success: "Data cuaca berhasil dimuat.",
  empty: "Kota tidak ditemukan.",
  error: "Gagal memuat data cuaca. Periksa koneksi Anda.",
  invalid: "Masukkan minimal dua karakter nama kota."
};

function setState(state) {
  if (status) {
    status.textContent = label[state] || "";
    status.className = `status-box state-${state}`;
  }
  if (state !== "success") {
    if (hasil) hasil.replaceChildren();
    if (forecastContainer) forecastContainer.replaceChildren();
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

function saveHistory(cities) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cities));
  } catch (error) {
    console.error("Gagal menyimpan ke storage:", error.message);
  }
}

function rememberCity(city) {
  const prev = readHistory();
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
    name,
    count: "1",
    language: "id",
    format: "json"
  }).toString();
  const data = await getJSON(url);
  return data.results?.[0] ?? null;
}

async function fetchWeather(city) {
  const url = makeWeatherURL(city);
  return getJSON(url);
}

function renderWeather(city, data) {
  if (!hasil) return;
  const c = data.current;
  const u = data.current_units;

  const card = document.createElement("div");
  card.className = "weather-card";

  const title = document.createElement("h2");
  title.textContent = `${city.name}, ${city.country ?? ""}`;

  const temp = document.createElement("div");
  temp.className = "temp-now";
  temp.textContent = `${c.temperature_2m} ${u.temperature_2m}`;

  const wind = document.createElement("div");
  wind.className = "wind-now";
  wind.textContent = `Kecepatan angin: ${c.wind_speed_10m} ${u.wind_speed_10m} | Waktu data: ${c.time} (${data.timezone})`;

  card.appendChild(title);
  card.appendChild(temp);
  card.appendChild(wind);

  hasil.replaceChildren(card);
}

function renderForecast(data) {
  if (!forecastContainer) return;
  forecastContainer.replaceChildren();

  const rows = typeof toForecastRows === "function" ? toForecastRows(data) : [];

  rows.forEach((row, index) => {
    const card = document.createElement("li");
    card.className = "forecast-card";

    const dateEl = document.createElement("div");
    dateEl.className = "date";
    if (index === 0) {
      dateEl.textContent = `Hari Ini (${row.date})`;
    } else if (index === 1) {
      dateEl.textContent = `Besok (${row.date})`;
    } else {
      dateEl.textContent = row.date;
    }

    const maxEl = document.createElement("div");
    maxEl.className = "temp-max";
    maxEl.textContent = `${row.max}°C`;

    const minEl = document.createElement("div");
    minEl.className = "temp-min";
    minEl.textContent = `Min: ${row.min}°C`;

    card.appendChild(dateEl);
    card.appendChild(maxEl);
    card.appendChild(minEl);

    forecastContainer.appendChild(card);
  });
}

async function loadWeather(name) {
  // Fail-fast race condition guard
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
    renderForecast(data);
    setState("success");
    rememberCity(city.name);
  } catch (error) {
    console.error("Gagal memuat prakiraan cuaca:", error.message);
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

// Inisialisasi riwayat saat startup tanpa menghapus localStorage
renderHistory();
