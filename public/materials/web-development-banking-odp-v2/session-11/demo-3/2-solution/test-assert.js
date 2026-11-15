/**
 * Demo 3: Pure Function Unit Testing with console.assert()
 * Reference Solution (Instruktur)
 */

/**
 * Fungsi murni untuk menghitung state riwayat kota berikutnya.
 * Bebas dari efek samping (tanpa akses DOM atau localStorage).
 * 
 * @param {string[]} prev - Riwayat kota saat ini
 * @param {string} newCity - Nama kota baru yang dicari
 * @param {number} max - Batas maksimal panjang riwayat (default: 5)
 * @returns {string[]} Array riwayat baru
 */
export function nextHistory(prev, newCity, max = 5) {
  if (!Array.isArray(prev) || typeof newCity !== "string" || !newCity.trim()) {
    return Array.isArray(prev) ? prev : [];
  }

  const cleanCity = newCity.trim();
  // Filter case-insensitive untuk mencegah duplikasi
  const filtered = prev.filter(
    (c) => c.toLowerCase() !== cleanCity.toLowerCase()
  );

  // Sisipkan di posisi depan (index 0) dan potong ke batas max
  return [cleanCity, ...filtered].slice(0, max);
}

// =================================================================
// SUITE PENGUJIAN UNIT (RED -> GREEN VERIFIKASI)
// =================================================================
console.log("=== DEMO 3: UNIT TEST DENGAN console.assert() (SOLUSI) ===");

let passed = 0;
let total = 0;

function runCheck(name, fn) {
  total++;
  try {
    fn();
    passed++;
    console.log(`  ✔ PASS: ${name}`);
  } catch (err) {
    console.error(`  ✖ FAIL: ${name} -> ${err.message}`);
  }
}

// Test Case 1: Riwayat Kosong
runCheck("Menambah kota ke riwayat kosong", () => {
  const res = nextHistory([], "Jakarta");
  console.assert(res.length === 1 && res[0] === "Jakarta", "Gagal di riwayat kosong");
  if (res.length !== 1 || res[0] !== "Jakarta") throw new Error("Output tidak sesuai");
});

// Test Case 2: Kota Duplikat Dipindahkan ke Depan
runCheck("Kota duplikat dipindahkan ke index 0", () => {
  const awal = ["Surabaya", "Bandung", "Jakarta"];
  const res = nextHistory(awal, "Bandung");
  console.assert(res.length === 3 && res[0] === "Bandung" && res[1] === "Surabaya", "Gagal deduplikasi");
  if (res.length !== 3 || res[0] !== "Bandung" || res[1] !== "Surabaya") throw new Error("Urutan salah");
});

// Test Case 3: Pembatasan Maksimal 5 Elemen
runCheck("Pemotongan maksimal 5 item saat melebihi batas", () => {
  const awal = ["E", "D", "C", "B", "A"];
  const res = nextHistory(awal, "F", 5);
  console.assert(res.length === 5 && res[0] === "F" && res[4] === "B", "Gagal pemotongan batas 5");
  if (res.length !== 5 || res[0] !== "F" || res[4] !== "B") throw new Error("Batas elemen terlanggar");
});

// Test Case 4: Jaminan Immutabilitas Array Asal
runCheck("Array asal tidak mengalami mutasi (Pure Function)", () => {
  const asal = ["Jakarta", "Bandung"];
  const copyAsal = [...asal];
  nextHistory(asal, "Surabaya");
  console.assert(asal.length === copyAsal.length && asal[0] === copyAsal[0], "Array asal termutasi!");
  if (asal.length !== copyAsal.length || asal[0] !== copyAsal[0]) throw new Error("Mutasi terdeteksi");
});

console.log(`\nHasil Unit Test: ${passed}/${total} Lulus.`);
