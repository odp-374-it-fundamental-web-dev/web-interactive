#!/usr/bin/env node
/**
 * test-runner.js - Automated Test Harness for Hands-on Lab 5
 * Validates transaction calculations, explicit type conversions,
 * error handling, and object/array mutations.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const baseDir = path.resolve(__dirname, '..');
const transaksiPath = path.join(baseDir, 'transaksi.js');

const ANSI = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m'
};

console.log(`${ANSI.bold}=================================================================${ANSI.reset}`);
console.log(`${ANSI.bold}AUTOMATED TEST HARNESS: SESSION 5 HANDS-ON LAB VERIFICATION${ANSI.reset}`);
console.log(`${ANSI.bold}Target File: ${transaksiPath}${ANSI.reset}`);
console.log(`${ANSI.bold}=================================================================\n${ANSI.reset}`);

if (!fs.existsSync(transaksiPath)) {
  console.error(`${ANSI.red}[FATAL ERROR] transaksi.js not found at: ${transaksiPath}${ANSI.reset}`);
  process.exit(1);
}

let passed = 0;
let failed = 0;

function assertTest(name, suite, testFn) {
  try {
    testFn();
    passed++;
    console.log(`  ${ANSI.green}✔ PASS:${ANSI.reset} [${suite}] ${name}`);
  } catch (err) {
    failed++;
    console.log(`  ${ANSI.red}✖ FAIL:${ANSI.reset} [${suite}] ${name} -> ${err.message}`);
  }
}

let engine;
try {
  engine = await import(`file://${transaksiPath}`);
} catch (err) {
  console.error(`${ANSI.red}[IMPORT ERROR] Failed to import transaksi.js: ${err.message}${ANSI.reset}`);
}

const rawCode = fs.readFileSync(transaksiPath, 'utf-8');
const codeWithoutComments = rawCode.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '');

// Suite 1: Clean Code Standards
console.log(`${ANSI.cyan}[SUITE 1: JavaScript Standards & Hygiene]${ANSI.reset}`);
assertTest('No legacy var keyword used in implementation', 'Syntax Hygiene', () => {
  if (/\bvar\s+/i.test(codeWithoutComments)) {
    throw new Error('Found legacy "var" declaration. Only "const" and "let" are permitted in modern code.');
  }
});

// Suite 2: Calculation & Type Conversion
console.log(`\n${ANSI.cyan}[SUITE 2: Numeric Calculation & Explicit Conversion]${ANSI.reset}`);
assertTest('hitungTransaksi calculates subtotal and total for numeric inputs', 'Calculations', () => {
  if (!engine || typeof engine.hitungTransaksi !== 'function') {
    throw new Error('hitungTransaksi function is not exported or not defined.');
  }
  const result = engine.hitungTransaksi(25000, 3, 5000);
  if (!result || result.subtotal !== 75000 || result.total !== 70000) {
    throw new Error(`Expected { subtotal: 75000, total: 70000 }, got ${JSON.stringify(result)}`);
  }
});

assertTest('hitungTransaksi handles string numeric inputs cleanly (proves no string concatenation bug)', 'Conversion', () => {
  if (!engine || typeof engine.hitungTransaksi !== 'function') {
    throw new Error('hitungTransaksi function is not exported.');
  }
  const result = engine.hitungTransaksi('25000', '3', '5000');
  if (!result || result.subtotal !== 75000 || result.total !== 70000) {
    throw new Error(`Expected { subtotal: 75000, total: 70000 }, got ${JSON.stringify(result)}`);
  }
});

assertTest('hitungTransaksi floors total to 0 if diskon exceeds subtotal', 'Boundaries', () => {
  if (!engine || typeof engine.hitungTransaksi !== 'function') {
    throw new Error('hitungTransaksi function is not exported.');
  }
  const result = engine.hitungTransaksi(10000, 1, 15000);
  if (!result || result.total !== 0) {
    throw new Error(`Expected total to be 0 when diskon > subtotal, got ${result?.total}`);
  }
});

// Suite 3: Defensive Error Handling
console.log(`\n${ANSI.cyan}[SUITE 3: Defensive Input Validation]${ANSI.reset}`);
assertTest('hitungTransaksi executes cleanly for valid inputs without throwing', 'Validation', () => {
  if (!engine || typeof engine.hitungTransaksi !== 'function') {
    throw new Error('hitungTransaksi function is not exported.');
  }
  engine.hitungTransaksi(20000, 2, 5000);
});

assertTest('hitungTransaksi throws Error on NaN or unparseable input', 'Validation', () => {
  if (!engine || typeof engine.hitungTransaksi !== 'function') {
    throw new Error('hitungTransaksi function is not exported.');
  }
  let threw = false;
  try {
    engine.hitungTransaksi('rusak_50rb', 3, 1000);
  } catch (e) {
    threw = true;
  }
  if (!threw) {
    throw new Error('hitungTransaksi must throw Error when input cannot be parsed to finite number.');
  }
});

assertTest('hitungTransaksi throws Error on negative values', 'Validation', () => {
  if (!engine || typeof engine.hitungTransaksi !== 'function') {
    throw new Error('hitungTransaksi function is not exported.');
  }
  let threw = false;
  try {
    engine.hitungTransaksi(-5000, 2, 0);
  } catch (e) {
    threw = true;
  }
  if (!threw) {
    throw new Error('hitungTransaksi must throw Error when price or quantity is negative.');
  }
});

// Suite 4: Object & Array Modeling
console.log(`\n${ANSI.cyan}[SUITE 4: Banking Object & Array Modeling]${ANSI.reset}`);
assertTest('buatTransaksi returns structured transaction entity with timestamp', 'Object Modeling', () => {
  if (!engine || typeof engine.buatTransaksi !== 'function') {
    throw new Error('buatTransaksi function is not exported.');
  }
  const trx = engine.buatTransaksi('T01', 'Buku Panduan ODP', 70000, 'BERHASIL');
  if (!trx || trx.id !== 'T01' || trx.nominal !== 70000 || trx.status !== 'BERHASIL') {
    throw new Error(`Invalid transaction object: ${JSON.stringify(trx)}`);
  }
  if (!trx.waktu || typeof trx.waktu !== 'string') {
    throw new Error('Transaction object must include a string "waktu" timestamp property.');
  }
});

assertTest('buatTransaksi defaults status to "BERHASIL" when omitted', 'Object Modeling', () => {
  if (!engine || typeof engine.buatTransaksi !== 'function') {
    throw new Error('buatTransaksi function is not exported.');
  }
  const trx = engine.buatTransaksi('T02', 'Biaya Layanan', 2500);
  if (!trx || trx.status !== 'BERHASIL') {
    throw new Error(`Expected default status "BERHASIL", got "${trx?.status}"`);
  }
});

assertTest('kelolaNominal mutates index element and appends new nominal via push', 'Array Mutation', () => {
  if (!engine || typeof engine.kelolaNominal !== 'function') {
    throw new Error('kelolaNominal function is not exported.');
  }
  const inputArr = [25000, 50000, 75000];
  const modified = engine.kelolaNominal(inputArr, 1, 60000, 10000);
  if (!Array.isArray(modified) || modified.length !== 4) {
    throw new Error(`Expected array of length 4, got length ${modified?.length}`);
  }
  if (modified[1] !== 60000) {
    throw new Error(`Expected index 1 to be mutated to 60000, got ${modified[1]}`);
  }
  if (modified[3] !== 10000) {
    throw new Error(`Expected last element to be 10000, got ${modified[3]}`);
  }
});

// Final Report
const total = passed + failed;
const percentage = Math.round((passed / total) * 100);

console.log(`\n${ANSI.bold}=================================================================${ANSI.reset}`);
console.log(`LAB RESULTS: ${passed}/${total} Checks Passed (${percentage}%)`);
if (failed === 0) {
  console.log(`${ANSI.green}${ANSI.bold}✔ EXCELLENT: 100% Acceptance Criteria Satisfied!${ANSI.reset}`);
} else {
  console.log(`${ANSI.yellow}⚠ PENDING: ${failed} checks remaining. Review the errors above and update transaksi.js.${ANSI.reset}`);
}
console.log(`${ANSI.bold}=================================================================\n${ANSI.reset}`);

process.exit(failed === 0 ? 0 : 1);
