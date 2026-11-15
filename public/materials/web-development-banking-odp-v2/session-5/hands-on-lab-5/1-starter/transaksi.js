// transaksi.js - Trainee Starter Lab 5

/**
 * Menghitung subtotal dan total transaksi dengan konversi numerik aman.
 * 
 * TODO 1: Implementasikan konversi eksplisit menggunakan Number():
 *   - h = Number(harga), j = Number(jumlah), d = Number(diskon || 0)
 * TODO 2: Validasi fail-fast:
 *   - Jika !Number.isFinite(h) || !Number.isFinite(j) || !Number.isFinite(d) -> lempar Error("Input tidak valid")
 *   - Jika h < 0 || j < 0 || d < 0 -> lempar Error("Input tidak valid")
 * TODO 3: Hitung subtotal = h * j
 * TODO 4: Hitung total = Math.max(0, subtotal - d)
 * 
 * @param {number|string} harga - Harga satuan barang
 * @param {number|string} jumlah - Kuantitas barang
 * @param {number|string} diskon - Potongan harga
 * @returns {{ subtotal: number, total: number }}
 */
export function hitungTransaksi(harga, jumlah, diskon = 0) {
  // Trainee TODO: Ganti stub di bawah
  throw new Error("TODO: hitungTransaksi belum diimplementasikan");
}

/**
 * Membentuk objek transaksi standar perbankan.
 * 
 * TODO 5: Kembalikan objek dengan properti:
 *   - id: string
 *   - deskripsi: string
 *   - nominal: number
 *   - status: string (default "BERHASIL")
 *   - waktu: string tanggal ISO atau format lokal
 * 
 * @param {string} id
 * @param {string} deskripsi
 * @param {number} nominal
 * @param {string} [status="BERHASIL"]
 * @returns {object}
 */
export function buatTransaksi(id, deskripsi, nominal, status = "BERHASIL") {
  // Trainee TODO: Ganti stub di bawah
  throw new Error("TODO: buatTransaksi belum diimplementasikan");
}

/**
 * Mengelola mutasi elemen array dan penambahan nominal baru.
 * 
 * TODO 6:
 *   - Salin atau mutasi arrayAwal: arrayAwal[indexUbah] = nilaiBaru
 *   - Tambahkan nilaiPush ke akhir array menggunakan arrayAwal.push(nilaiPush)
 *   - Kembalikan arrayAwal
 * 
 * @param {number[]} arrayAwal
 * @param {number} indexUbah
 * @param {number} nilaiBaru
 * @param {number} nilaiPush
 * @returns {number[]}
 */
export function kelolaNominal(arrayAwal, indexUbah, nilaiBaru, nilaiPush) {
  // Trainee TODO: Ganti stub di bawah
  throw new Error("TODO: kelolaNominal belum diimplementasikan");
}
