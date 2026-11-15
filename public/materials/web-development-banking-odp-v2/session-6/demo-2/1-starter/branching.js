// branching.js - Trainee Starter Demo 2

// TODO 1: Implementasikan kategoriTransaksi(nominal) menggunakan if / else if / else
function kategoriTransaksi(nominal) {
  // Ganti return stub di bawah
  return "TODO";
}

console.log("Kategori 150 Juta :", kategoriTransaksi(150000000));
console.log("Kategori 25 Juta  :", kategoriTransaksi(25000000));
console.log("Kategori 50 Ribu :", kategoriTransaksi(50000));
console.log("Kategori -500    :", kategoriTransaksi(-500));

// TODO 2: Refaktor fungsi nested if di bawah menjadi Guard Clauses
function validasiTransferNested(saldo, nominal, statusAkun) {
  if (statusAkun === "AKTIF") {
    if (nominal > 0) {
      if (saldo >= nominal) {
        return "TRANSFER_DISETUJUI";
      } else {
        return "SALDO_TIDAK_CUKUP";
      }
    } else {
      return "NOMINAL_TIDAK_VALID";
    }
  } else {
    return "AKUN_TERBLOKIR";
  }
}

// TODO 3: Tulis versi Guard Clauses:
function validasiTransferGuard(saldo, nominal, statusAkun) {
  // Trainee TODO: Gunakan fail-fast returns di awal
  return "TODO";
}
