/**
 * Milestone 4: Weather Web App with Persistent Search History
 * Reference Solution (Instruktur)
 * 
 * Standar penyimpanan perbankan:
 * - Namespace key terisolasi: bni-odp-weather-history-v1
 * - Skema defensif Array.isArray()
 * - Deduplikasi & batas 5 kota terbaru
 * - Re-search button interaction
 * - Fitur Challenge: Kota Favorit (A-Z localeCompare & storage terpisah)
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

const favoritContainer = document.querySelector("#favoritKota");
const btnTambahFavorit = document.querySelector("#tambahFavorit");

const STORAGE_KEY = "bni-odp-weather-history-v1";
const FAVORITES_KEY = "bni-odp-weather-favorites-v1";

let kotaTerakhirSukses = null;

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
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      console.warn("Skema storage tidak sesuai (bukan array). Fallback [].");
      return [];
    }

    return parsed.filter((item) => typeof item === "string");
  } catch (error) {
    console.error("Gagal membaca history dari storage:", error.message);
    return [];
  }
}

/**
 * Menyimpan array riwayat kota ke localStorage.
 * @param {string[]} cities 
 */
function saveHistory(cities) {
  if (!Array.isArray(cities)) return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cities));
  } catch (error) {
    console.error("Gagal menyimpan history ke storage:", error.message);
  }
}

/**
 * Menambahkan kota baru ke posisi paling depan (index 0),
 * membuang duplikasi, dan membatasi maksimal 5 kota terbaru.
 * @param {string} city 
 */
function rememberCity(city) {
  if (!city || typeof city !== "string") return;

  const prev = readHistory();
  // Filter case-insensitive agar kota tidak duplikat
  const filtered = prev.filter(
    (c) => c.trim().toLowerCase() !== city.trim().toLowerCase()
  );

  // Sisipkan di posisi 0 dan potong ke batas 5 item
  const nextHistory = [city.trim(), ...filtered].slice(0, 5);
  saveHistory(nextHistory);
  renderHistory();
}

/**
 * Me-render tombol-tombol riwayat kota ke dalam #riwayatKota.
 */
function renderHistory() {
  if (!riwayatContainer) return;

  riwayatContainer.replaceChildren();
  const cities = readHistory();

  if (cities.length === 0) {
    const spanKosong = document.createElement("span");
    spanKosong.textContent = "Belum ada riwayat kota tersimpan.";
    spanKosong.style.color = "#94a3b8";
    spanKosong.style.fontStyle = "italic";
    riwayatContainer.appendChild(spanKosong);
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

// =================================================================
// 4. FITUR CHALLENGE: KOTA FAVORIT (STORAGE TERPISAH & SORT A-Z)
// =================================================================
function readFavorites() {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveFavorites(favs) {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favs));
  } catch {}
}

function renderFavorites() {
  if (!favoritContainer) return;
  favoritContainer.replaceChildren();

  // Pengurutan alfabetis A-Z tanpa mutasi data asli
  const favs = [...readFavorites()].sort((a, b) => a.localeCompare(b, "id"));

  if (favs.length === 0) {
    const span = document.createElement("span");
    span.textContent = "Belum ada kota favorit.";
    span.style.color = "#94a3b8";
    span.style.fontStyle = "italic";
    favoritContainer.appendChild(span);
    return;
  }

  favs.forEach((kota, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn-city";
    btn.style.background = "#fff7ed";
    btn.style.borderColor = "#fed7aa";
    btn.style.color = "#c2410c";
    btn.textContent = `⭐ ${kota}`;

    btn.addEventListener("click", () => {
      if (kotaInput) kotaInput.value = kota;
      loadWeather(kota);
    });

    favoritContainer.appendChild(btn);
  });
}

// =================================================================
// 5. API OPEN-METEO & ORKESTRASI
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

    kotaTerakhirSukses = city.name;
    // Simpan kota ke riwayat setelah sukses memuat
    rememberCity(city.name);
  } catch (error) {
    console.error("Gagal:", error.message);
    setState("error");
  } finally {
    if (button) button.disabled = false;
  }
}

// =================================================================
// 6. EVENT LISTENERS
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
    // Hapus key riwayat spesifik tanpa menggunakan clear()
    localStorage.removeItem(STORAGE_KEY);
    renderHistory();
  });
}

if (btnTambahFavorit) {
  btnTambahFavorit.addEventListener("click", () => {
    if (!kotaTerakhirSukses) {
      alert("Cari kota terlebih dahulu sebelum menambahkan ke favorit!");
      return;
    }
    const favs = readFavorites();
    // Gunakan find() untuk memeriksa duplikasi
    const sudahAda = favs.find(
      (c) => c.toLowerCase() === kotaTerakhirSukses.toLowerCase()
    );
    if (!sudahAda) {
      favs.push(kotaTerakhirSukses);
      saveFavorites(favs);
      renderFavorites();
    }
  });
}

// Inisialisasi awal saat dokumen dimuat
renderHistory();
renderFavorites();
