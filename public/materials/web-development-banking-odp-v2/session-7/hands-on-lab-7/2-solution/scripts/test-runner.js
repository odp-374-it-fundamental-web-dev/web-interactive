#!/usr/bin/env node

/**
 * AUTOMATED TEST HARNESS: SESSION 7 HANDS-ON LAB VERIFICATION
 * Target File: banking-engine.js
 * 
 * Verifikasi 10 kriteria evaluasi (100 Poin)
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Target file is ../banking-engine.js
const targetFile = path.resolve(__dirname, '..', 'banking-engine.js');

let totalTests = 0;
let passedTests = 0;

function assert(condition, testName, category = "General") {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✔ PASS: [${category}] ${testName}`);
  } else {
    console.log(`  ✖ FAIL: [${category}] ${testName}`);
  }
}

async function runTests() {
  console.log("=================================================================");
  console.log("AUTOMATED TEST HARNESS: SESSION 7 HANDS-ON LAB VERIFICATION");
  console.log(`Target File: ${targetFile}`);
  console.log("=================================================================\n");

  if (!fs.existsSync(targetFile)) {
    console.error(`FATAL: Target file not found at ${targetFile}`);
    process.exit(1);
  }

  const fileContent = fs.readFileSync(targetFile, 'utf8');

  // SUITE 1: Code Hygiene
  console.log("[SUITE 1: JavaScript Standards & Hygiene]");
  const hasVarKeyword = /\bvar\s+[a-zA-Z0-9_$]+/.test(fileContent);
  assert(!hasVarKeyword, "No legacy var keyword used in implementation", "Syntax Hygiene");

  // Load Module
  let module;
  try {
    module = await import(pathToFileURL(targetFile).href);
  } catch (err) {
    console.error(`FATAL: Error importing ${targetFile}:`, err.message);
    process.exit(1);
  }

  const {
    checkLogin,
    transaksi,
    ambilValid,
    ambilRingkasan,
    hitungTotal
  } = module;

  // SUITE 2: checkLogin
  console.log("\n[SUITE 2: Authentication Logic (checkLogin)]");
  try {
    const wrongType1 = checkLogin(123, "k0s4s1h");
    const wrongType2 = checkLogin("Kosasih", false);
    assert(
      wrongType1 === "input salah" && wrongType2 === "input salah",
      "checkLogin rejects non-string inputs with 'input salah'",
      "Guard Clauses"
    );
  } catch (e) {
    assert(false, `checkLogin throws error on non-string input: ${e.message}`, "Guard Clauses");
  }

  try {
    const wrongCred1 = checkLogin("Kosasih", "salah");
    const wrongCred2 = checkLogin("Budi", "k0s4s1h");
    assert(
      wrongCred1 === "coba lagi" && wrongCred2 === "coba lagi",
      "checkLogin returns 'coba lagi' on mismatched credentials",
      "Credential Check"
    );
  } catch (e) {
    assert(false, `checkLogin throws error on wrong credentials: ${e.message}`, "Credential Check");
  }

  try {
    const loginOk = checkLogin("Kosasih", "k0s4s1h");
    assert(
      loginOk === "login berhasil",
      "checkLogin returns 'login berhasil' when credentials match exactly",
      "Login Success"
    );
  } catch (e) {
    assert(false, `checkLogin error on correct credentials: ${e.message}`, "Login Success");
  }

  // SUITE 3: ambilValid
  console.log("\n[SUITE 3: Transaction Filtering (ambilValid)]");
  try {
    const sample = [
      { id: "T01", nominal: 50000, status: "berhasil" },
      { id: "T02", nominal: 25000, status: "gagal" },
      { id: "T03", nominal: 75000, status: "berhasil" },
      { id: "T04", nominal: -10000, status: "berhasil" }
    ];
    const valid = ambilValid(sample);
    const isCorrect = Array.isArray(valid) &&
      valid.length === 2 &&
      valid[0].id === "T01" &&
      valid[1].id === "T03";
    assert(isCorrect, "ambilValid filters status === 'berhasil' and nominal > 0", "Filter Predicate");
  } catch (e) {
    assert(false, `ambilValid failed: ${e.message}`, "Filter Predicate");
  }

  try {
    const emptyResult = ambilValid([]);
    assert(Array.isArray(emptyResult) && emptyResult.length === 0, "ambilValid handles empty array [] returning []", "Edge Cases");
  } catch (e) {
    assert(false, `ambilValid crashed on empty array: ${e.message}`, "Edge Cases");
  }

  // SUITE 4: ambilRingkasan
  console.log("\n[SUITE 4: Data Transformation (ambilRingkasan)]");
  try {
    const validItems = [
      { id: "T01", nominal: 50000, status: "berhasil" },
      { id: "T03", nominal: 75000, status: "berhasil" }
    ];
    const summary = ambilRingkasan(validItems);
    const isTransformed = Array.isArray(summary) &&
      summary.length === 2 &&
      summary[0].id === "T01" &&
      summary[0].nominal === 50000 &&
      summary[0].status === undefined &&
      summary[1].id === "T03" &&
      summary[1].nominal === 75000 &&
      summary[1].status === undefined;
    assert(isTransformed, "ambilRingkasan maps items to { id, nominal } via map()", "Transformation");
  } catch (e) {
    assert(false, `ambilRingkasan failed: ${e.message}`, "Transformation");
  }

  // SUITE 5: hitungTotal
  console.log("\n[SUITE 5: Financial Accumulation (hitungTotal)]");
  try {
    const validItems = [
      { id: "T01", nominal: 50000 },
      { id: "T03", nominal: 75000 }
    ];
    const total = hitungTotal(validItems);
    assert(total === 125000, "hitungTotal produces exact sum 125000 via reduce()", "Accumulation");
  } catch (e) {
    assert(false, `hitungTotal failed: ${e.message}`, "Accumulation");
  }

  try {
    const zeroTotal = hitungTotal([]);
    assert(zeroTotal === 0, "hitungTotal returns 0 on empty array [] without crashing (enforces initialValue 0)", "Accumulation Edge");
  } catch (e) {
    assert(false, `hitungTotal crashed on empty array: ${e.message}`, "Accumulation Edge");
  }

  // SUITE 6: Immutability
  console.log("\n[SUITE 6: Immutability & Pipeline Integrity]");
  try {
    const originalCopy = JSON.parse(JSON.stringify(transaksi));
    ambilValid(transaksi);
    ambilRingkasan(transaksi);
    hitungTotal(transaksi);
    const remainsUnmutated = JSON.stringify(transaksi) === JSON.stringify(originalCopy);
    assert(remainsUnmutated, "Original transaksi dataset remains completely unmutated (Pure Functions)", "Immutability");
  } catch (e) {
    assert(false, `Immutability check failed: ${e.message}`, "Immutability");
  }

  console.log("\n=================================================================");
  const percentage = Math.round((passedTests / totalTests) * 100);
  console.log(`LAB RESULTS: ${passedTests}/${totalTests} Checks Passed (${percentage}%)`);
  if (passedTests === totalTests) {
    console.log("✔ EXCELLENT: 100% Acceptance Criteria Satisfied!");
  } else {
    console.log(`✖ ATTENTION: ${totalTests - passedTests} Checks Pending/Failed. Check TODO comments.`);
  }
  console.log("=================================================================\n");

  if (passedTests < totalTests) {
    process.exit(1);
  }
}

runTests();
