/**
 * Demo 3: Fetch API & getJSON Helper
 * Reference Solution (Instruktur)
 * 
 * Sesuai Slide 25 Sesi 9:
 * Helper getJSON(url) yang membungkus pengecekan response.ok dan parsing json().
 */

export async function getJSON(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  return response.json();
}

// =================================================================
// PENGUJIAN & ANALISIS SKENARIO KEGAGALAN
// =================================================================
async function jalankanPengujian() {
  console.log("=== DEMO 3: HELPER getJSON & HTTP STATUS DEFENSIVE ===");

  // 1. Skenario Berhasil: Mengambil data cuaca Jakarta dari Open-Meteo
  try {
    const urlJakarta = new URL("https://api.open-meteo.com/v1/forecast");
    urlJakarta.search = new URLSearchParams({
      latitude: "-6.2088",
      longitude: "106.8456",
      current: "temperature_2m",
      timezone: "auto"
    }).toString();

    const data = await getJSON(urlJakarta);
    console.log("1. ✔ Skenario Sukses (HTTP 200):");
    console.log(`   - Timezone: ${data.timezone}`);
    console.log(`   - Suhu Terkini: ${data.current?.temperature_2m} ${data.current_units?.temperature_2m}`);
  } catch (err) {
    console.error("1. ✖ Gagal tak terduga:", err.message);
  }

  // 2. Skenario Gagal HTTP: Parameter latitude tidak valid (Latitude must be in range -90 to 90) -> HTTP 400
  try {
    console.log("\n2. Menguji Parameter Invalid (Latitude = 999)...");
    await getJSON("https://api.open-meteo.com/v1/forecast?latitude=999&longitude=100");
  } catch (err) {
    console.log(`2. ✔ Berhasil Ditangkap di Catch -> "${err.message}" (Pengecekan response.ok bekerja sempurna)`);
  }

  // 3. Skenario Gagal HTTP: Endpoint 404 Not Found
  try {
    console.log("\n3. Menguji Endpoint 404 Not Found...");
    await getJSON("https://api.open-meteo.com/v1/endpoint-tidak-ada");
  } catch (err) {
    console.log(`3. ✔ Berhasil Ditangkap di Catch -> "${err.message}"`);
  }
}

// Eksekusi jika dijalankan secara mandiri
jalankanPengujian();
