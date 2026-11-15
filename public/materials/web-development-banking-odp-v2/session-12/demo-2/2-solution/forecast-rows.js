/**
 * Demo 2: Daily Forecast Transformation
 * Reference Solution (Instruktur)
 */

/**
 * Mentransformasikan array paralel daily Open-Meteo menjadi array objek prakiraan 7 hari.
 * @param {object} data - Objek respons Open-Meteo
 * @returns {Array<{date: string, max: number, min: number}>}
 */
export function toForecastRows(data) {
  const daily = data?.daily;
  if (!daily || !Array.isArray(daily.time) || daily.time.length === 0) {
    return [];
  }

  const { time, temperature_2m_max, temperature_2m_min } = daily;

  // Lakukan pemetaan paralel dengan validasi integritas angka
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

// =================================================================
// PENGUJIAN DATA & VERIFIKASI
// =================================================================
console.log("=== DEMO 2: TO FORECAST ROWS (SOLUSI) ===");

const responsApi = {
  daily: {
    time: ["2026-11-14", "2026-11-15", "2026-11-16", "2026-11-17", "2026-11-18", "2026-11-19", "2026-11-20"],
    temperature_2m_max: [33.2, 32.8, 31.5, 30.2, 32.0, 33.5, 34.1],
    temperature_2m_min: [24.1, 23.9, 23.5, 23.0, 24.2, 24.5, 25.0]
  }
};

const barisPrakiraan = toForecastRows(responsApi);

console.log("Hasil Pemetaan 7 Hari:");
console.table(barisPrakiraan);

// Verifikasi kriteria
const isValid =
  barisPrakiraan.length === 7 &&
  barisPrakiraan[0].date === "2026-11-14" &&
  barisPrakiraan[0].max === 33.2 &&
  barisPrakiraan[0].min === 24.1;

console.log("\nStatus Validasi Kontrak:", isValid ? "✔ TEPAT 7 HARI & STRUKTUR VALID" : "✖ STRUKTUR CACAT");
