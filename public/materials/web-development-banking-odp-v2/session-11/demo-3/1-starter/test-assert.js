/**
 * Demo 3: Pure Function Unit Testing with console.assert()
 * Starter File (Trainee Exercise)
 */

// TODO 1: Implementasikan fungsi murni nextHistory(prev, newCity, max = 5)
// - Jangan mutasi array prev!
// - Filter case-insensitive nama kota yang sama
// - Sisipkan newCity di index 0
// - Batasi panjang array maksimal max item
function nextHistory(prev, newCity, max = 5) {
  // Ganti implementasi stub ini
  return [];
}

// =================================================================
// SUITE PENGUJIAN DENGAN console.assert()
// =================================================================
console.log("=== MENJALANKAN ASSERTION TEST ===");

// Test 1: Menambah kota ke riwayat kosong
const test1 = nextHistory([], "Jakarta");
console.assert(test1.length === 1 && test1[0] === "Jakarta", "Test 1 GAGAL: Harusnya ['Jakarta']");

// Test 2: Kota yang sudah ada dipindahkan ke depan tanpa duplikasi
const test2 = nextHistory(["Surabaya", "Bandung", "Jakarta"], "Bandung");
console.assert(
  test2.length === 3 && test2[0] === "Bandung" && test2[1] === "Surabaya",
  "Test 2 GAGAL: Bandung harusnya pindah ke depan"
);

// Test 3: Pembatasan panjang maksimal 5
const test3 = nextHistory(["A", "B", "C", "D", "E"], "F");
console.assert(test3.length === 5 && test3[0] === "F", "Test 3 GAGAL: Maksimal harus 5 item");

console.log("Pemeriksaan selesai. Jika ada kegagalan, pesan error akan tercetak di atas.");
