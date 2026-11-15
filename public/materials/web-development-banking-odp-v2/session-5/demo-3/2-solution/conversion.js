// conversion.js - Solusi Demo 3

const nominalInput = "50000";
const biayaAdmin = 2500;

// 1. Konversi eksplisit yang aman
const nominalBenar = Number(nominalInput);

if (Number.isFinite(nominalBenar) && nominalBenar > 0) {
  const totalTagihan = nominalBenar + biayaAdmin;
  console.log(`[SUKSES] Nominal: Rp ${nominalBenar.toLocaleString('id-ID')}`);
  console.log(`[SUKSES] Biaya  : Rp ${biayaAdmin.toLocaleString('id-ID')}`);
  console.log(`[SUKSES] Total  : Rp ${totalTagihan.toLocaleString('id-ID')}`);
} else {
  console.error("[ERROR] Input nominal tidak valid!");
}

// 2. Deteksi input rusak (NaN)
const inputRusak = "50rb";
const hasilKonversi = Number(inputRusak);

console.log("\n[DIAGNOSTIK INPUT RUSAK]");
console.log("Raw Input        :", inputRusak);
console.log("Number(input)    :", hasilKonversi); // NaN
console.log("Number.isNaN()   :", Number.isNaN(hasilKonversi)); // true
console.log("Number.isFinite():", Number.isFinite(hasilKonversi)); // false
