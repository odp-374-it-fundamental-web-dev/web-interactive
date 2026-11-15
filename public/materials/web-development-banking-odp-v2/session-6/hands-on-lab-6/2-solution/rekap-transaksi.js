// rekap-transaksi.js - Solusi Lab 6

/**
 * Melakukan rekapitulasi data mutasi transaksi menggunakan loop for...of.
 * 
 * @param {Array<{ id: string, deskripsi: string, nominal: number, status: string }>} daftarTransaksi
 * @returns {{ totalBerhasil: number, jumlahBerhasil: number, jumlahDilewati: number, transaksiValid: Array }}
 */
export function rekapTransaksi(daftarTransaksi) {
  // 1. Defensive Guard: validasi tipe parameter
  if (!Array.isArray(daftarTransaksi)) {
    throw new Error("Input harus berupa array transaksi");
  }

  // 2. Akumulator data
  let totalBerhasil = 0;
  let jumlahBerhasil = 0;
  let jumlahDilewati = 0;
  const transaksiValid = [];

  // 3. Iterasi for...of dengan continue
  for (const trx of daftarTransaksi) {
    const isNominalValid = typeof trx.nominal === "number" && trx.nominal > 0;
    const isStatusValid = trx.status === "BERHASIL";

    if (!isNominalValid || !isStatusValid) {
      jumlahDilewati++;
      continue; // Lewati transaksi tidak valid
    }

    totalBerhasil += trx.nominal;
    jumlahBerhasil++;
    transaksiValid.push(trx);
  }

  return {
    totalBerhasil,
    jumlahBerhasil,
    jumlahDilewati,
    transaksiValid
  };
}

/**
 * Mengelompokkan kode status transaksi menggunakan switch-case.
 * 
 * @param {string} statusCode
 * @returns {string}
 */
export function kategoriStatus(statusCode) {
  switch (statusCode) {
    case "BERHASIL":
      return "SUKSES";

    case "PENDING":
      return "MENUNGGU";

    // Intentional fall-through untuk ragam kegagalan transaksi
    case "GAGAL":
    case "DITOLAK":
    case "KEDALUWARSA":
      return "TIDAK_DIPROSES";

    default:
      return "TIDAK_DIKENAL";
  }
}

/**
 * Memvalidasi nomor PIN transaksi menggunakan pola Guard Clauses.
 * 
 * @param {string} pinInput
 * @param {string} pinBenar
 * @returns {string}
 */
export function validasiPin(pinInput, pinBenar) {
  // Guard 1: validasi format (string tepat 6 digit angka)
  if (typeof pinInput !== "string" || pinInput.length !== 6 || !/^\d{6}$/.test(pinInput)) {
    return "FORMAT_TIDAK_VALID";
  }

  // Guard 2: verifikasi kecocokan
  if (pinInput !== pinBenar) {
    return "PIN_SALAH";
  }

  // Alur sukses
  return "PIN_BENAR";
}
