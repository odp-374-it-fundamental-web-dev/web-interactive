// boolean.js - Solusi Demo 1

console.log("[PERBANDINGAN KETAT VS LONGGAR]");
console.log("0 == ''     :", 0 == "");       // true (coercion)
console.log("0 === ''    :", 0 === "");      // false (strict)
console.log("0 == false  :", 0 == false);   // true
console.log("0 === false :", 0 === false);  // false

// Evaluasi logika perbankan
const nominalTransfer = 500000;
const saldoNasabah = 750000;
const statusAkun = "AKTIF";

const bisaTransfer = saldoNasabah >= nominalTransfer && statusAkun === "AKTIF";
console.log("\n[EVALUASI TRANSAKSI]");
console.log(`Saldo: Rp ${saldoNasabah.toLocaleString('id-ID')} | Transfer: Rp ${nominalTransfer.toLocaleString('id-ID')} | Status: ${statusAkun}`);
console.log("Dapat memproses transfer:", bisaTransfer); // true

// Evaluasi tabel kebenaran truthy & falsy
console.log("\n[DAFTAR TRUTHY & FALSY]");
const nilaiUji = [
  { val: 0, desc: "Angka Nol" },
  { val: "", desc: "String Kosong" },
  { val: null, desc: "Null" },
  { val: undefined, desc: "Undefined" },
  { val: NaN, desc: "NaN" },
  { val: [], desc: "Array Kosong" },
  { val: {}, desc: "Objek Kosong" },
  { val: "0", desc: "String '0'" }
];

nilaiUji.forEach(({ val, desc }) => {
  const isTruthy = Boolean(val);
  console.log(`  ${desc.padEnd(16)}: ${String(val).padEnd(10)} -> ${isTruthy ? "TRUTHY ✔" : "FALSY ✖"}`);
});
