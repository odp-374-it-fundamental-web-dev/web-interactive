/**
 * Demo 2: Early Return Pattern (checkLogin)
 * Reference Solution (Instruktur)
 * 
 * Implementasi bersih menggunakan Guard Clauses dan Strict Equality.
 */

function checkLogin(username, password) {
  // Guard 1: Validasi tipe data input (harus string)
  if (typeof username !== "string" || typeof password !== "string") {
    return "input salah";
  }

  // Guard 2: Validasi kredensial pengguna
  if (username === "Kosasih" && password === "k0s4s1h") {
    return "login berhasil";
  }

  // Fallback: Kredensial tidak cocok
  return "coba lagi";
}

// ==========================================
// PENGUJIAN JALUR LENGKAP & DIAGNOSTIK
// ==========================================
console.log("=== DEMO 2: SOLUSI CHECK LOGIN ===");
const testCases = [
  { u: 123, p: "k0s4s1h", expected: "input salah", label: "Username tipe number" },
  { u: "Kosasih", p: null, expected: "input salah", label: "Password tipe null" },
  { u: undefined, p: "k0s4s1h", expected: "input salah", label: "Username undefined" },
  { u: "Kosasih", p: "salah", expected: "coba lagi", label: "Password keliru" },
  { u: "Budi", p: "k0s4s1h", expected: "coba lagi", label: "Username keliru" },
  { u: "Kosasih", p: "k0s4s1h", expected: "login berhasil", label: "Kredensial valid" }
];

testCases.forEach((tc, idx) => {
  const result = checkLogin(tc.u, tc.p);
  const status = result === tc.expected ? "✔ OK" : "✖ FAIL";
  console.log(`[${status}] Case ${idx + 1} (${tc.label}): Output = "${result}"`);
});
