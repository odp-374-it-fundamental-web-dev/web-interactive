// branching.js - Solusi Demo 2

// 1. Kategorisasi Berjenjang
function kategoriTransaksi(nominal) {
  const n = Number(nominal);
  if (!Number.isFinite(n) || n <= 0) {
    return "TIDAK VALID";
  }

  if (n >= 100000000) {
    return "TRANSAKSI BESAR";
  } else if (n >= 10000000) {
    return "TRANSAKSI MENENGAH";
  } else {
    return "TRANSAKSI MIKRO";
  }
}

console.log("[KATEGORI TRANSAKSI]");
console.log("Nominal Rp 150.000.000 ->", kategoriTransaksi(150000000));
console.log("Nominal Rp  25.000.000 ->", kategoriTransaksi(25000000));
console.log("Nominal Rp      50.000 ->", kategoriTransaksi(50000));
console.log("Nominal Rp        -500 ->", kategoriTransaksi(-500));

// 2. Refactoring Nested if Menjadi Guard Clauses
function validasiTransferGuard(saldo, nominal, statusAkun) {
  // Guard 1: Status akun harus aktif
  if (statusAkun !== "AKTIF") {
    return "AKUN_TERBLOKIR";
  }

  // Guard 2: Nominal harus berupa angka positif
  if (typeof nominal !== "number" || nominal <= 0) {
    return "NOMINAL_TIDAK_VALID";
  }

  // Guard 3: Saldo harus mencukupi
  if (saldo < nominal) {
    return "SALDO_TIDAK_CUKUP";
  }

  // Alur sukses berada di tingkat terluar tanpa indentasi bersarang
  return "TRANSFER_DISETUJUI";
}

console.log("\n[VALIDASI TRANSFER (GUARD CLAUSES)]");
console.log("Akun Pasif   :", validasiTransferGuard(1000000, 50000, "TERKUNCI"));
console.log("Nominal Minus:", validasiTransferGuard(1000000, -500, "AKTIF"));
console.log("Kurang Saldo :", validasiTransferGuard(20000, 50000, "AKTIF"));
console.log("Transfer OK  :", validasiTransferGuard(1000000, 50000, "AKTIF"));
