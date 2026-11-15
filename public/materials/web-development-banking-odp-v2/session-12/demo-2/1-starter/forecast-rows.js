/**
 * Demo 2: Daily Forecast Transformation
 * Starter File (Trainee Exercise)
 */

// Contoh data simulasi respons Open-Meteo
const responsApi = {
  daily: {
    time: ["2026-11-14", "2026-11-15", "2026-11-16", "2026-11-17", "2026-11-18", "2026-11-19", "2026-11-20"],
    temperature_2m_max: [33.2, 32.8, 31.5, 30.2, 32.0, 33.5, 34.1],
    temperature_2m_min: [24.1, 23.9, 23.5, 23.0, 24.2, 24.5, 25.0]
  }
};

// TODO 1: Implementasikan fungsi murni toForecastRows(data)
// 1. Ambil time = data?.daily?.time, max = data?.daily?.temperature_2m_max, min = data?.daily?.temperature_2m_min
// 2. Jika time bukan array atau time.length === 0, kembalikan []
// 3. Gunakan time.map((date, index) => ({ date, max: max[index], min: min[index] }))
// 4. Pastikan max dan min berupa angka berhingga
function toForecastRows(data) {
  // Ganti implementasi stub ini
  return [];
}

const barisPrakiraan = toForecastRows(responsApi);
console.log("=== HASIL TRANSFORMASI PRAKIRAAN 7 HARI ===");
console.table(barisPrakiraan);
