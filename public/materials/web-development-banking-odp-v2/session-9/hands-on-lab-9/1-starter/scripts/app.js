/**
 * Milestone 3: Weather Web App with Open-Meteo
 * Starter Script (Trainee)
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
  // TODO 1:
  // - Set status.textContent sesuai label[state]
  // - Jika state !== "success", kosongkan hasil dengan hasil.replaceChildren()
  // - Set button.disabled = (state === "loading")
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
  // TODO 2:
  // - Panggil fetch(url)
  // - Jika !response.ok, lempar new Error(`HTTP ${response.status}`)
  // - Kembalikan response.json()
  return null;
}

// =================================================================
// 4. GEOCODING API: findCity(name)
// =================================================================
/**
 * Mencari koordinat geografis kota berdasarkan nama.
 * @param {string} name 
 * @returns {Promise<object|null>} Objek kota pertama atau null jika kosong
 */
async function findCity(name) {
  // TODO 3:
  // - Susun URL: https://geocoding-api.open-meteo.com/v1/search
  // - Gunakan URLSearchParams dengan parameter: { name, count: "1", language: "id", format: "json" }
  // - Ambil data dengan await getJSON(url)
  // - Kembalikan data.results?.[0] ?? null
  return null;
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
  // TODO 4:
  // - Susun URL: https://api.open-meteo.com/v1/forecast
  // - Gunakan URLSearchParams: { latitude: city.latitude, longitude: city.longitude, current: "temperature_2m,wind_speed_10m", timezone: "auto" }
  // - Ambil data dengan await getJSON(url)
  // - Validasi Number.isFinite() untuk temperature_2m dan wind_speed_10m
  // - Kembalikan objek data
  return null;
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
  // TODO 5:
  // - Ambil c = data.current dan u = data.current_units
  // - Buat elemen <p> atau <div> (misal class "weather-card")
  // - Isi teks dengan aman menggunakan textContent (nama, negara, suhu, angin, waktu)
  // - Masukkan ke #hasilCuaca menggunakan hasil.replaceChildren(card)
}

// =================================================================
// 7. ORKESTRASI END-TO-END: loadWeather(name)
// =================================================================
/**
 * Mengorkestrasi pencarian Geocoding, Forecast, dan penanganan error.
 * @param {string} name 
 */
async function loadWeather(name) {
  // TODO 6:
  // - Panggil setState("loading")
  // - Di dalam blok try:
  //   * city = await findCity(name)
  //   * jika !city: panggil setState("empty") lalu return
  //   * data = await fetchWeather(city)
  //   * renderWeather(city, data)
  //   * setState("success")
  // - Di dalam blok catch(error):
  //   * console.error(error)
  //   * setState("error")
  // - Di dalam blok finally:
  //   * button.disabled = false
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
