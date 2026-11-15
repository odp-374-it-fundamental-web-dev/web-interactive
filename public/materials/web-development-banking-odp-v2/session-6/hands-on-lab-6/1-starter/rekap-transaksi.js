// rekap-transaksi.js - Trainee Starter Lab 6

/**
 * Melakukan rekapitulasi data mutasi transaksi menggunakan loop for...of.
 * 
 * TODO 1: Validasi defensif:
 *   - Jika !Array.isArray(daftarTransaksi), lempar Error("Input harus berupa array transaksi")
 * 
 * TODO 2: Inisialisasi akumulator:
 *   - totalBerhasil = 0, jumlahBerhasil = 0, jumlahDilewati = 0, transaksiValid = []
 * 
 * TODO 3: Lakukan perulangan for...of pada daftarTransaksi:
 *   - Kriteria transaksi valid: trx.nominal > 0 && trx.status === "BERHASIL"
 *   - Jika tidak memenuhi kriteria: jumlahDilewati++, lalu panggil 'continue'
 *   - Jika memenuhi:
 *     - totalBerhasil += trx.nominal
 *     - jumlahBerhasil++
 *     - transaksiValid.push(trx)
 * 
 * TODO 4: Kembalikan objek { totalBerhasil, jumlahBerhasil, jumlahDilewati, transaksiValid }
 * 
 * @param {Array<{ id: string, deskripsi: string, nominal: number, status: string }>} daftarTransaksi
 * @returns {{ totalBerhasil: number, jumlahBerhasil: number, jumlahDilewati: number, transaksiValid: Array }}
 */
export function rekapTransaksi(daftarTransaksi) {
  // Trainee TODO: Ganti stub di bawah
  throw new Error("TODO: rekapTransaksi belum diimplementasikan");
}

/**
 * Mengelompokkan kode status transaksi menggunakan switch-case.
 * 
 * TODO 5: Gunakan switch (statusCode)
 *   - "BERHASIL" -> return "SUKSES"
 *   - "PENDING" -> return "MENUNGGU"
 *   - "GAGAL", "DITOLAK", "KEDALUWARSA" -> return "TIDAK_DIPROSES"
 *   - default -> return "TIDAK_DIKENAL"
 * 
 * @param {string} statusCode
 * @returns {string}
 */
export function kategoriStatus(statusCode) {
  // Trainee TODO: Ganti stub di bawah
  throw new Error("TODO: kategoriStatus belum diimplementasikan");
}

/**
 * Memvalidasi nomor PIN transaksi menggunakan pola Guard Clauses.
 * 
 * TODO 6: Terapkan Guard Clauses:
 *   - Guard 1: jika typeof pinInput !== "string" || pinInput.length !== 6 || !/^\d{6}$/.test(pinInput)
 *     -> return "FORMAT_TIDAK_VALID"
 *   - Guard 2: jika pinInput !== pinBenar -> return "PIN_SALAH"
 *   - Alur sukses: return "PIN_BENAR"
 * 
 * @param {string} pinInput
 * @param {string} pinBenar
 * @returns {string}
 */
export function validasiPin(pinInput, pinBenar) {
  // Trainee TODO: Ganti stub di bawah
  throw new Error("TODO: validasiPin belum diimplementasikan");
}
