/**
 * Demo 2: Promise Lifecycle & Modern async/await
 * Reference Solution (Instruktur)
 */

// =================================================================
// 1. MEMBUAT PROMISE BERBASIS LOGIKA PERBANKAN
// =================================================================
function cekLimitKredit(nominal) {
  return new Promise((resolve, reject) => {
    // Simulasi network latency 50 ms
    setTimeout(() => {
      if (typeof nominal !== "number" || nominal <= 0) {
        reject(new TypeError("Nominal pengajuan kredit harus berupa angka positif"));
        return;
      }

      const LIMIT_MAKSIMAL = 50000000; // 50 Juta Rupiah
      if (nominal <= LIMIT_MAKSIMAL) {
        resolve({
          status: "DISETUJUI",
          nominal,
          pesan: "Limit kredit disetujui oleh sistem otorisasi."
        });
      } else {
        reject(new Error(`Nominal Rp ${nominal.toLocaleString("id-ID")} melampaui limit kredit nasabah (Maks. Rp 50.000.000).`));
      }
    }, 50);
  });
}

// =================================================================
// 2. KONSUMSI DENGAN .then() CHAINING
// =================================================================
console.log("=== DEMO 2: PROMISE & ASYNC/AWAIT PERBANKAN ===");

cekLimitKredit(20000000)
  .then((res) => {
    console.log(`[Pola .then()] ✔ Status: ${res.status} | ${res.pesan}`);
    return res.nominal * 0.01; // Kalkulasi biaya provisi 1%
  })
  .then((biayaProvisi) => {
    console.log(`[Pola .then()] Biaya Provisi 1%: Rp ${biayaProvisi.toLocaleString("id-ID")}`);
  })
  .catch((err) => {
    console.error(`[Pola .catch()] ✖ Gagal: ${err.message}`);
  });

// =================================================================
// 3. KONSUMSI MODERN: ASYNC / AWAIT DENGAN TRY / CATCH / FINALLY
// =================================================================
async function prosesPengajuanModern(nominal) {
  console.log(`\n[async/await] Memulai audit pengajuan kredit Rp ${nominal.toLocaleString("id-ID")}...`);
  try {
    const hasil = await cekLimitKredit(nominal);
    console.log(`[async/await] ✔ Hasil: ${hasil.status} — ${hasil.pesan}`);
  } catch (err) {
    console.error(`[async/await] ✖ Ditolak: ${err.message}`);
  } finally {
    console.log(`[async/await] ℹ Audit pengajuan selesai (koneksi audit trail ditutup).`);
  }
}

// Jalankan skenario sukses & skenario gagal
setTimeout(async () => {
  await prosesPengajuanModern(35000000); // Lolos limit
  await prosesPengajuanModern(90000000); // Melebihi limit (tertangkap di catch)
}, 100);
