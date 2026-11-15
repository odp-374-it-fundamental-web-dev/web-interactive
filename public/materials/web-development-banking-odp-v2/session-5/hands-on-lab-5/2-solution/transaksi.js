// transaksi.js - Solusi Lab 5

/**
 * Menghitung subtotal dan total transaksi dengan konversi numerik aman.
 * 
 * @param {number|string} harga - Harga satuan barang
 * @param {number|string} jumlah - Kuantitas barang
 * @param {number|string} diskon - Potongan harga
 * @returns {{ subtotal: number, total: number }}
 */
export function hitungTransaksi(harga, jumlah, diskon = 0) {
  const h = Number(harga);
  const j = Number(jumlah);
  const d = Number(diskon);

  // 1. Defensive Validation: periksa apakah nilai adalah finite number dan non-negatif
  if (!Number.isFinite(h) || !Number.isFinite(j) || !Number.isFinite(d)) {
    throw new Error("Input tidak valid: Parameter harus dapat dikonversi ke angka valid.");
  }

  if (h < 0 || j < 0 || d < 0) {
    throw new Error("Input tidak valid: Parameter harga, jumlah, dan diskon tidak boleh bernilai negatif.");
  }

  // 2. Kalkulasi aritmetika
  const subtotal = h * j;
  const total = Math.max(0, subtotal - d);

  return { subtotal, total };
}

/**
 * Membentuk objek transaksi standar perbankan.
 * 
 * @param {string} id
 * @param {string} deskripsi
 * @param {number} nominal
 * @param {string} [status="BERHASIL"]
 * @returns {object}
 */
export function buatTransaksi(id, deskripsi, nominal, status = "BERHASIL") {
  if (!id || typeof id !== "string") {
    throw new Error("ID transaksi wajib diisi dalam bentuk string.");
  }

  return {
    id,
    deskripsi: String(deskripsi || ""),
    nominal: Number(nominal) || 0,
    status: String(status || "BERHASIL"),
    waktu: new Date().toISOString()
  };
}

/**
 * Mengelola mutasi elemen array dan penambahan nominal baru.
 * 
 * @param {number[]} arrayAwal
 * @param {number} indexUbah
 * @param {number} nilaiBaru
 * @param {number} nilaiPush
 * @returns {number[]}
 */
export function kelolaNominal(arrayAwal, indexUbah, nilaiBaru, nilaiPush) {
  if (!Array.isArray(arrayAwal)) {
    throw new Error("Parameter pertama harus berupa array.");
  }

  if (indexUbah >= 0 && indexUbah < arrayAwal.length) {
    arrayAwal[indexUbah] = Number(nilaiBaru);
  }

  arrayAwal.push(Number(nilaiPush));
  return arrayAwal;
}
