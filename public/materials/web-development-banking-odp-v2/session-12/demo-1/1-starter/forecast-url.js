/**
 * Demo 1: 7-Day Forecast URL Construction
 * Starter File (Trainee Exercise)
 */

// TODO 1: Implementasikan makeWeatherURL(city) dengan spesifikasi:
// - Base URL: https://api.open-meteo.com/v1/forecast
// - Parameter query via URLSearchParams:
//   * latitude: city.latitude
//   * longitude: city.longitude
//   * current: "temperature_2m,wind_speed_10m"
//   * daily: "temperature_2m_max,temperature_2m_min"
//   * forecast_days: "7"
//   * timezone: "auto"
// - Kembalikan objek URL lengkap
function makeWeatherURL(city) {
  // Ganti implementasi stub ini
  return null;
}

// =================================================================
// PENGUJIAN STARTER
// =================================================================
const kotaUji = { name: "Surabaya", latitude: -7.25, longitude: 112.75 };
const urlHasil = makeWeatherURL(kotaUji);

console.log("=== HASIL MAKE WEATHER URL ===");
console.log("URL String:", urlHasil?.toString());
