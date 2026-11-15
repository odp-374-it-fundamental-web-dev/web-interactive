/**
 * Demo 2: Early Return Pattern (checkLogin)
 * Starter File (Trainee Exercise)
 * 
 * Sesuai Slide 15-16 Sesi 7:
 * Buat function checkLogin(username, password) dengan spesifikasi:
 * 1. Cek apakah username dan password keduanya bertipe string (typeof).
 *    Jika bukan string, kembalikan string "input salah".
 * 2. Cek apakah username === "Kosasih" dan password === "k0s4s1h".
 *    Jika cocok, kembalikan "login berhasil".
 *    Jika tidak cocok, kembalikan "coba lagi".
 * 3. Selalu gunakan `return`, bukan sekadar `console.log()` di dalam function.
 */

function checkLogin(username, password) {
  // TODO 1: Tambahkan guard clause tipe data
  // Jika typeof username !== "string" ATAU typeof password !== "string",
  // kembalikan "input salah".

  // TODO 2: Tambahkan evaluasi kredensial
  // Jika username === "Kosasih" DAN password === "k0s4s1h",
  // kembalikan "login berhasil".

  // TODO 3: Kembalikan "coba lagi" jika kredensial tidak cocok
  return "";
}

// ==========================================
// PENGUJIAN STARTER
// ==========================================
console.log("=== PENGUJIAN checkLogin ===");
console.log("Test 1 (Bukan String 1):", checkLogin(123, "k0s4s1h"), "| Harapan: input salah");
console.log("Test 2 (Bukan String 2):", checkLogin("Kosasih", false), "| Harapan: input salah");
console.log("Test 3 (Kredensial Salah):", checkLogin("Kosasih", "salah"), "| Harapan: coba lagi");
console.log("Test 4 (Kredensial Cocok):", checkLogin("Kosasih", "k0s4s1h"), "| Harapan: login berhasil");
