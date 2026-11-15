/**
 * Milestone 3: Weather Web App with Open-Meteo
 * Reference Solution (Instruktur)
 * 
 * Standar integrasi perbankan:
 * - Anti-Double Request (tombol disabled saat loading)
 * - Error Recovery (try / catch / finally)
 * - Safe Rendering (textContent, replaceChildren)
 * - Geocoding & Forecast Endpoints Open-Meteo
 */

// =================================================================
// 1. REFERENSI ELEMEN DOM & STATE LABEL
// =================================================================
const form = document.querySelector("#formCuaca");
const kotaInput = document.querySelector("#kota");
const button = document.querySelector("#cariCuaca");
const status = document.querySelector("#status");
const hasil = document.querySelector("#hasilCuaca");

const label = {
  loading: "Mengambil data...",
  success: "Data cuaca dimuat.",
  empty: "Kota tidak ditemukan.",
  error: "Data gagal dimuat. Coba lagi.",
  invalid: "Masukkan minimal dua karakter nama kota."
};

// =================================================================
// 2. STATE MACHINE UI
// =================================================================
/**
 * Memperbarui antarmuka berdasarkan state aktif.
 * @param {"loading"|"success"|"empty"|"error"|"invalid"} state 
 */
function setState(state) {
  if (status) {
    status.textContent = label[state] || "";
    status.className = `status-box state-${state}`;
  }

  // Bersihkan hasil jika state bukan sukses
  if (state !== "success" && hasil) {
    hasil.replaceChildren();
  }

  // Nonaktifkan tombol saat loading untuk mencegah klik ganda
  if (button) {
    button.disabled = state === "loading";
  }
}

// =================================================================
// 3. HTTP HELPER: getJSON(url)
// =================================================================
/**
 * Memanggil URL dan mem-parse body JSON secara defensif.
 * @param {string|URL} url 
 * @returns {Promise<any>}
 */
async function getJSON(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  return response.json();
}

// =================================================================
// 4. GEOCODING API: findCity(name)
// =================================================================
/**
 * Mencari koordinat geografis kota berdasarkan nama.
 * @param {string} name 
 * @returns {Promise<object|null>}
 */
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

// =================================================================
// 5. FORECAST API: fetchWeather(city)
// =================================================================
/**
 * Mengambil data cuaca berdasarkan koordinat kota.
 * @param {{latitude: number, longitude: number}} city 
 * @returns {Promise<object>}
 */
async function fetchWeather(city) {
  const url = new URL("https://api.open-meteo.com/v1/forecast");
  url.search = new URLSearchParams({
    latitude: city.latitude,
    longitude: city.longitude,
    current: "temperature_2m,wind_speed_10m",
    timezone: "auto"
  }).toString();

  const data = await getJSON(url);
  if (
    !Number.isFinite(data.current?.temperature_2m) ||
    !Number.isFinite(data.current?.wind_speed_10m)
  ) {
    throw new Error("Data suhu tidak tersedia");
  }
  return data;
}

// =================================================================
// 6. RENDER DATA KE DOM
// =================================================================
/**
 * Merender informasi cuaca ke elemen #hasilCuaca.
 * @param {object} city 
 * @param {object} data 
 */
function renderWeather(city, data) {
  if (!hasil) return;

  const c = data.current;
  const u = data.current_units;

  const card = document.createElement("div");
  card.className = "weather-card";

  // textContent menjaga data masukan dari respons API murni sebagai teks
  card.textContent =
    `${city.name}, ${city.country ?? ""}: ` +
    `${c.temperature_2m} ${u.temperature_2m}; ` +
    `angin ${c.wind_speed_10m} ${u.wind_speed_10m}. ` +
    `Waktu data: ${c.time} (${data.timezone}).`;

  hasil.replaceChildren(card);
}

// =================================================================
// 7. ORKESTRASI END-TO-END: loadWeather(name)
// =================================================================
/**
 * Mengorkestrasi pencarian Geocoding, Forecast, dan penanganan error.
 * @param {string} name 
 */
async function loadWeather(name) {
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
  } catch (error) {
    console.error("Gagal memuat cuaca:", error.message);
    setState("error");
  } finally {
    // Blok finally menjamin tombol cari selalu dipulihkan
    if (button) {
      button.disabled = false;
    }
  }
}

// =================================================================
// 8. EVENT HANDLER FORM SUBMIT
// =================================================================
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
