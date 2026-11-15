/**
 * Capstone Mini Project: Forecast Helper Module
 * Reference Solution (Instruktur)
 */

/**
 * Membangun URL Open-Meteo Forecast dengan dukungan prakiraan 7 hari.
 * @param {{ latitude: number, longitude: number }} city
 * @returns {URL} Objek URL Open-Meteo
 */
function makeWeatherURL(city) {
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

/**
 * Mentransformasikan data daily parallel arrays menjadi array of objects harian.
 * @param {object} data - Respons JSON dari Open-Meteo
 * @returns {Array<{ date: string, max: number, min: number }>}
 */
function toForecastRows(data) {
  const daily = data?.daily;
  if (!daily || !Array.isArray(daily.time) || daily.time.length === 0) {
    return [];
  }

  const { time, temperature_2m_max, temperature_2m_min } = daily;

  return time.map((date, index) => {
    const max = temperature_2m_max?.[index];
    const min = temperature_2m_min?.[index];

    return {
      date,
      max: Number.isFinite(max) ? max : 0,
      min: Number.isFinite(min) ? min : 0
    };
  });
}

// Kompatibilitas Node.js (Unit Test) dan Browser
if (typeof module !== "undefined" && module.exports) {
  module.exports = { makeWeatherURL, toForecastRows };
}
