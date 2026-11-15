/**
 * Capstone Mini Project: Forecast Helper Module
 * Starter Script (Trainee)
 */

/**
 * Membangun URL Open-Meteo Forecast dengan dukungan prakiraan 7 hari.
 * @param {{ latitude: number, longitude: number }} city
 * @returns {URL} Objek URL Open-Meteo
 */
function makeWeatherURL(city) {
  // TODO 1: Bangun URL query string dengan parameter:
  // - latitude: String(city.latitude)
  // - longitude: String(city.longitude)
  // - current: "temperature_2m,wind_speed_10m"
  // - daily: "temperature_2m_max,temperature_2m_min"
  // - forecast_days: "7"
  // - timezone: "auto"
  const url = new URL("https://api.open-meteo.com/v1/forecast");
  // Implementasikan URLSearchParams sesuai spesifikasi di atas
  return url;
}

/**
 * Mentransformasikan data daily parallel arrays menjadi array of objects harian.
 * @param {object} data - Respons JSON dari Open-Meteo
 * @returns {Array<{ date: string, max: number, min: number }>}
 */
function toForecastRows(data) {
  // TODO 2: Transformasikan daily.time, daily.temperature_2m_max, dan daily.temperature_2m_min
  // menjadi 7 objek harian: [{ date, max, min }, ...]
  return [];
}

// Kompatibilitas Node.js (Unit Test) dan Browser
if (typeof module !== "undefined" && module.exports) {
  module.exports = { makeWeatherURL, toForecastRows };
}
