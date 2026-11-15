/**
 * Milestone 4: Weather Web App with Persistent Search History
 * Starter Script (Trainee)
 */

// =================================================================
// 1. REFERENSI ELEMEN DOM & KONSTANTA
// =================================================================
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

// =================================================================
// 2. STATE MACHINE UI
// =================================================================
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

// =================================================================
// 3. PERSISTENSI LOCAL STORAGE & DEFENSIVE JSON
// =================================================================
/**
 * Membaca riwayat kota dari localStorage secara defensif.
 * @returns {string[]}
 */
function readHistory() {
  // TODO 1:
  // - Ambil string raw dari localStorage.getItem(STORAGE_KEY)
  // - Jika null/kosong, return []
  // - Bungkus JSON.parse(raw) dalam try / catch
  // - Periksa Array.isArray(parsed). Jika bukan, return []
  // - Return parsed
  return [];
}

/**
 * Menyimpan array riwayat kota ke localStorage.
 * @param {string[]} cities 
 */
function saveHistory(cities) {
  // TODO 2:
  // - Bungkus di try / catch
  // - Panggil localStorage.setItem(STORAGE_KEY, JSON.stringify(cities))
}

/**
 * Menambahkan kota baru ke posisi paling depan (index 0),
 * membuang duplikasi, dan membatasi maksimal 5 kota terbaru.
 * @param {string} city 
 */
function rememberCity(city) {
  // TODO 3:
  // - Baca riwayat saat ini: prev = readHistory()
  // - Filter agar nama kota tidak terduplikasi (case-insensitive)
  // - Bentuk array baru: [city, ...filtered].slice(0, 5)
  // - Panggil saveHistory(nextHistory)
  // - Panggil renderHistory()
}

/**
 * Me-render tombol-tombol riwayat kota ke dalam #riwayatKota.
 */
function renderHistory() {
  // TODO 4:
  // - Bersihkan kontainer dengan riwayatContainer.replaceChildren()
  // - Baca cities = readHistory()
  // - Jika cities.length === 0, tampilkan pesan "Belum ada riwayat."
  // - Iterasi cities:
  //   * Buat elemen <button type="button" class="btn-city">
  //   * Set textContent = kota
  //   * Pasang click listener yang memanggil loadWeather(kota)
  //   * appendChild ke riwayatContainer
}

// =================================================================
// 4. API OPEN-METEO & ORKESTRASI
// =================================================================
async function getJSON(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
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
    // TODO 5: Simpan kota ke riwayat setelah sukses memuat
    rememberCity(city.name);
  } catch (error) {
    console.error("Gagal:", error.message);
    setState("error");
  } finally {
    if (button) button.disabled = false;
  }
}

// =================================================================
// 5. EVENT LISTENERS
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

if (btnHapusRiwayat) {
  btnHapusRiwayat.addEventListener("click", () => {
    // TODO 6: Hapus key STORAGE_KEY dari localStorage dan panggil renderHistory()
  });
}

// Render riwayat awal saat dokumen dimuat
renderHistory();
