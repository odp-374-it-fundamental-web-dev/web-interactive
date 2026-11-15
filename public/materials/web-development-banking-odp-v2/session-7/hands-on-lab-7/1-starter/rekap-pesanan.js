/**
 * Challenge Mandiri (Sesi 7 Slide 41-42):
 * Rekap Pesanan Pelatihan dengan Array Methods
 * 
 * Spesifikasi:
 * 1. Filter pesanan dengan status === "lunas", jumlah > 0, dan harga > 0.
 * 2. Map menjadi array { nama, subtotal } di mana subtotal = jumlah * harga.
 * 3. Reduce untuk menghitung total pendapatan (initialValue: 0). Target: 1.250.000 IDR.
 * 4. forEach untuk mencetak ringkasan tiap pesanan valid.
 */

const daftarPesanan = [
  { nama: "HTML5 Fundamental", jumlah: 2, harga: 150000, status: "lunas" },
  { nama: "CSS Grid & Flexbox", jumlah: 1, harga: 200000, status: "lunas" },
  { nama: "JavaScript Engine", jumlah: 3, harga: 250000, status: "lunas" },
  { nama: "DevOps CI/CD", jumlah: 1, harga: 100000, status: "batal" },
  { nama: "Cloud Native", jumlah: 0, harga: 50000, status: "lunas" },
  { nama: "Security Testing", jumlah: 2, harga: -50000, status: "lunas" }
];

console.log("=== CHALLENGE MANDIRI: REKAP PESANAN PELATIHAN ===");

// TODO 1: Gunakan filter() untuk memilih pesanan lunas dengan jumlah & harga positif
const pesananLunas = []; // Ganti dengan daftarPesanan.filter(...)

// TODO 2: Gunakan map() untuk membentuk { nama, subtotal }
const ringkasanSubtotal = []; // Ganti dengan pesananLunas.map(...)

// TODO 3: Gunakan reduce() untuk menghitung total pendapatan
const totalPendapatan = 0; // Ganti dengan ringkasanSubtotal.reduce(...)

// TODO 4: Gunakan forEach() untuk mencetak tiap pesanan
console.log("Rincian Pesanan Valid:");
// pesananLunas.forEach(...)

console.log("\nRingkasan Subtotal:", ringkasanSubtotal);
console.log("Total Pendapatan Akhir:", totalPendapatan, "IDR (Target: 1.250.000)");
