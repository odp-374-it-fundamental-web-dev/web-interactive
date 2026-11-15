/**
 * Demo 3: Fetch API & getJSON Helper
 * Starter File (Trainee Exercise)
 */

// TODO 1: Buat fungsi async getJSON(url) dengan spesifikasi:
// 1. Panggil fetch(url)
// 2. Cek apakah response.ok bernilai false. Jika false, lempar Error dengan format `HTTP ${response.status}`.
// 3. Kembalikan response.json()
async function getJSON(url) {
  // Tulis logika getJSON di sini
  return null;
}

// =================================================================
// PENGUJIAN STARTER
// =================================================================
async function test() {
  console.log("=== PENGUJIAN getJSON STARTER ===");

  // Uji endpoint valid
  try {
    const data = await getJSON("https://api.open-meteo.com/v1/forecast?latitude=-6.2088&longitude=106.8456&current=temperature_2m");
    console.log("Data diterima:", data);
  } catch (err) {
    console.error("Error:", err.message);
  }

  // Uji endpoint invalid (404 / 400)
  try {
    const errorData = await getJSON("https://api.open-meteo.com/v1/forecast?latitude=999");
    console.log("Data invalid:", errorData);
  } catch (err) {
    console.log("Tertangkap di catch:", err.message);
  }
}

test();
