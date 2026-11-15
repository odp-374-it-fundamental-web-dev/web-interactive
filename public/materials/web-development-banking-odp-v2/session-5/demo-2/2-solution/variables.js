// variables.js - Solusi Demo 2

// 1. Konstanta dengan binding tetap
const BANK_NAME = "PT Bank Negara Indonesia (Persero) Tbk";

// 2. Variabel dinamis dengan let
let saldo = 100000;
saldo = 150000; // Reassignment valid pada let

// 3. Tipe data primitif
const isAktif = true;
const catatan = null;
let nomorReferensi; // Default bernilai undefined

// 4. Output dan inspeksi tipe data
console.log("BANK_NAME :", BANK_NAME, `(${typeof BANK_NAME})`);
console.log("saldo     :", saldo, `(${typeof saldo})`);
console.log("isAktif   :", isAktif, `(${typeof isAktif})`);
console.log("catatan   :", catatan, `(${typeof catatan} - catatan ketiadaan nilai)`);
console.log("nomorRef  :", nomorReferensi, `(${typeof nomorReferensi})`);
