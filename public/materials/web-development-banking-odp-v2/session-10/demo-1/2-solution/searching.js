/**
 * Demo 1: Array Searching (find vs filter vs Linear Search)
 * Reference Solution (Instruktur)
 */

const daftarKota = [
  { nama: "Jakarta", suhu: 32, status: "Cerah" },
  { nama: "Bandung", suhu: 24, status: "Hujan Ringan" },
  { nama: "Surabaya", suhu: 34, status: "Cerah" },
  { nama: "Malang", suhu: 22, status: "Berawan" },
  { nama: "Medan", suhu: 31, status: "Hujan Petir" }
];

console.log("=== DEMO 1: METODE PENCARIAN PADA ARRAY OBJECT ===");
console.table(daftarKota);

// 1. Linear Search Manual (Menginspeksi setiap elemen satu per satu)
function cariKotaManual(data, targetNama) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].nama.toLowerCase() === targetNama.toLowerCase()) {
      return data[i]; // Return langsung saat ketemu
    }
  }
  return null;
}

const hasilLinear = cariKotaManual(daftarKota, "Surabaya");
console.log("\n1. Linear Search ('Surabaya') ->", hasilLinear);

// 2. Array.prototype.find(): Mengembalikan 1 objek pertama yang lolos predikat
const kotaSejuk = daftarKota.find((item) => item.suhu < 25);
console.log("\n2. find() (suhu < 25°C) ->", kotaSejuk?.nama, `(${kotaSejuk?.suhu}°C)`);

// Uji find() saat tidak ditemukan -> menghasilkan undefined
const tidakAda = daftarKota.find((item) => item.nama === "Denpasar");
console.log("   find() tidak ditemukan ->", tidakAda); // undefined

// 3. Array.prototype.filter(): Mengembalikan array baru berisi seluruh kecocokan
const kotaCerah = daftarKota.filter((item) => item.status === "Cerah");
console.log(`\n3. filter() (status === 'Cerah') -> Ditemukan ${kotaCerah.length} kota:`);
console.table(kotaCerah);

// Uji filter() saat tidak ada yang lolos -> menghasilkan array kosong []
const kotaSalju = daftarKota.filter((item) => item.status === "Bersalju");
console.log("   filter() tidak ditemukan ->", kotaSalju); // []
