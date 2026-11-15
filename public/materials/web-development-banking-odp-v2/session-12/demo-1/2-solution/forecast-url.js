/**
 * Demo 1: 7-Day Forecast URL Construction
 * Reference Solution (Instruktur)
 */

export function makeWeatherURL(city) {
  if (!city || typeof city.latitude !== "number" || typeof city.longitude !== "number") {
    throw new TypeError("Parameter city harus memuat latitude dan longitude bertipe number");
  }

  const url = new URL("https://api.open-meteo.com/v1/forecast");
  url.search = new URLSearchParams({
    latitude: String(city.latitude),
    longitude: String(city.longitude),
    current: "temperature_2m,wind_speed_10m",
    daily: "temperature_2m_max,temperature_2m_min",
    forecast_days: "7",
    timezone: "auto"
  }).toString();

  return url;
}

// =================================================================
// PENGUJIAN & INSPEKSI PARAMETER
// =================================================================
console.log("=== DEMO 1: FORECAST URL BUILDER (SOLUSI) ===");

const kotaUji = { name: "Surabaya", latitude: -7.25, longitude: 112.75 };
const urlHasil = makeWeatherURL(kotaUji);

console.log("URL Lengkap:");
console.log(urlHasil.toString());

console.log("\nParameter Terverifikasi:");
urlHasil.searchParams.forEach((val, key) => {
  console.log(`  - ${key}: "${val}"`);
});

const isCorrect =
  urlHasil.searchParams.get("forecast_days") === "7" &&
  urlHasil.searchParams.get("daily") === "temperature_2m_max,temperature_2m_min" &&
  urlHasil.searchParams.get("timezone") === "auto";

console.log("\nStatus Verifikasi Parameter:", isCorrect ? "✔ LULUS SPESIFIKASI" : "✖ SALAH");
