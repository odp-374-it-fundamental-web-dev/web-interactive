// switch.js - Trainee Starter Demo 3

function formatStatusTransaksi(statusCode) {
  // TODO 1: Implementasikan switch (statusCode)
  // Tangani:
  // - "BERHASIL"
  // - "PENDING"
  // - "GAGAL", "DITOLAK", "KEDALUWARSA" (gabungkan dengan fall-through)
  // - default: "Status tidak dikenal."

  return "TODO";
}

console.log("Status BERHASIL    :", formatStatusTransaksi("BERHASIL"));
console.log("Status PENDING     :", formatStatusTransaksi("PENDING"));
console.log("Status DITOLAK     :", formatStatusTransaksi("DITOLAK"));
console.log("Status UNKNOWN_XYZ :", formatStatusTransaksi("UNKNOWN_XYZ"));
