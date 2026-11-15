// switch.js - Solusi Demo 3

function formatStatusTransaksi(statusCode) {
  switch (statusCode) {
    case "BERHASIL":
      return "Transaksi berhasil diproses dan dana telah diteruskan ke rekening tujuan.";

    case "PENDING":
      return "Transaksi sedang menunggu konfirmasi kliring dari jaringan Bank Indonesia.";

    // Intentional fall-through: tiga status ini berbagi perlakuan pesan yang sama
    case "GAGAL":
    case "DITOLAK":
    case "KEDALUWARSA":
      return "Transaksi tidak dapat diproses. Silakan periksa kembali saldo atau hubungi call center.";

    default:
      return "Status transaksi tidak dikenal oleh sistem perbankan.";
  }
}

console.log("[HASIL SWITCH STATUS]");
console.log("BERHASIL    ->", formatStatusTransaksi("BERHASIL"));
console.log("PENDING     ->", formatStatusTransaksi("PENDING"));
console.log("DITOLAK     ->", formatStatusTransaksi("DITOLAK"));
console.log("KEDALUWARSA ->", formatStatusTransaksi("KEDALUWARSA"));
console.log("UNKNOWN_XYZ ->", formatStatusTransaksi("UNKNOWN_XYZ"));
