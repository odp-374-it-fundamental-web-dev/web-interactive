/**
 * Challenge Mandiri (Sesi 7 Slide 41-42):
 * Rekap Pesanan Pelatihan dengan Array Methods
 * Reference Solution (Instruktur)
 */

const daftarPesanan = [
  { nama: "HTML5 Fundamental", jumlah: 2, harga: 150000, status: "lunas" },
  { nama: "CSS Grid & Flexbox", jumlah: 1, harga: 200000, status: "lunas" },
  { nama: "JavaScript Engine", jumlah: 3, harga: 250000, status: "lunas" },
  { nama: "DevOps CI/CD", jumlah: 1, harga: 100000, status: "batal" },
  { nama: "Cloud Native", jumlah: 0, harga: 50000, status: "lunas" },
  { nama: "Security Testing", jumlah: 2, harga: -50000, status: "lunas" }
];

console.log("=== SOLUSI CHALLENGE MANDIRI: REKAP PESANAN PELATIHAN ===");

// 1. filter(): Pesanan lunas dengan kuantitas dan harga valid (> 0)
const pesananLunas = daftarPesanan.filter(
  (item) => item.status === "lunas" && item.jumlah > 0 && item.harga > 0
);

// 2. map(): Membentuk array ringkasan { nama, subtotal }
const ringkasanSubtotal = pesananLunas.map((item) => ({
  nama: item.nama,
  subtotal: item.jumlah * item.harga
}));

// 3. reduce(): Menghitung total seluruh pendapatan dengan initialValue 0
const totalPendapatan = ringkasanSubtotal.reduce(
  (acc, curr) => acc + curr.subtotal,
  0
);

// 4. forEach(): Menampilkan rincian transaksi valid ke konsol
console.log("\nRincian Pesanan Valid (forEach):");
pesananLunas.forEach((item, index) => {
  const subtotal = item.jumlah * item.harga;
  console.log(
    `  ${index + 1}. ${item.nama}: ${item.jumlah} x Rp ${item.harga.toLocaleString("id-ID")} = Rp ${subtotal.toLocaleString("id-ID")}`
  );
});

console.log("\nRingkasan Subtotal:");
console.table(ringkasanSubtotal);
console.log(`\nTotal Pendapatan Terverifikasi: Rp ${totalPendapatan.toLocaleString("id-ID")}`);
console.log(
  totalPendapatan === 1250000
    ? "✔ STATUS: Tepat 1.250.000 IDR (100% Cocok dengan Kriteria Sesi 7)"
    : "✖ STATUS: Perhitungan belum sesuai target"
);
