#!/usr/bin/env node
/**
 * test-runner.js - Automated Test Harness for Hands-on Lab 6
 * Validates transaction reconciliation logic, for...of looping,
 * switch-case status categorization, and guard-clause PIN validation.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const baseDir = path.resolve(__dirname, '..');
const rekapPath = path.join(baseDir, 'rekap-transaksi.js');

const ANSI = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m'
};

console.log(`${ANSI.bold}=================================================================${ANSI.reset}`);
console.log(`${ANSI.bold}AUTOMATED TEST HARNESS: SESSION 6 HANDS-ON LAB VERIFICATION${ANSI.reset}`);
console.log(`${ANSI.bold}Target File: ${rekapPath}${ANSI.reset}`);
console.log(`${ANSI.bold}=================================================================\n${ANSI.reset}`);

if (!fs.existsSync(rekapPath)) {
  console.error(`${ANSI.red}[FATAL ERROR] rekap-transaksi.js not found at: ${rekapPath}${ANSI.reset}`);
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
  engine = await import(`file://${rekapPath}`);
} catch (err) {
  console.error(`${ANSI.red}[IMPORT ERROR] Failed to import rekap-transaksi.js: ${err.message}${ANSI.reset}`);
}

const rawCode = fs.readFileSync(rekapPath, 'utf-8');
const codeWithoutComments = rawCode.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '');

// Suite 1: Clean Code Standards
console.log(`${ANSI.cyan}[SUITE 1: JavaScript Standards & Hygiene]${ANSI.reset}`);
assertTest('No legacy var keyword used in implementation', 'Syntax Hygiene', () => {
  if (/\bvar\s+/i.test(codeWithoutComments)) {
    throw new Error('Found legacy "var" declaration. Only "const" and "let" are permitted in modern code.');
  }
});

// Suite 2: Transaction Reconciliation (rekapTransaksi)
console.log(`\n${ANSI.cyan}[SUITE 2: Transaction Reconciliation & Loops]${ANSI.reset}`);
const datasetLatihan = [
  { id: 'T01', deskripsi: 'Setoran Awal', nominal: 100000, status: 'BERHASIL' },
  { id: 'T02', deskripsi: 'Biaya Layanan', nominal: -2500, status: 'BERHASIL' },
  { id: 'T03', deskripsi: 'Transfer Keluar', nominal: 50000, status: 'PENDING' },
  { id: 'T04', deskripsi: 'Pembelian Paket', nominal: 75000, status: 'BERHASIL' }
];

assertTest('rekapTransaksi calculates correct totals on Session 6 dataset (total 175.000 IDR)', 'Reconciliation', () => {
  if (!engine || typeof engine.rekapTransaksi !== 'function') {
    throw new Error('rekapTransaksi function is not exported or not defined.');
  }
  const result = engine.rekapTransaksi(datasetLatihan);
  if (!result || result.totalBerhasil !== 175000) {
    throw new Error(`Expected totalBerhasil 175000, got ${result?.totalBerhasil}`);
  }
  if (result.jumlahBerhasil !== 2) {
    throw new Error(`Expected jumlahBerhasil 2, got ${result?.jumlahBerhasil}`);
  }
  if (result.jumlahDilewati !== 2) {
    throw new Error(`Expected jumlahDilewati 2, got ${result?.jumlahDilewati}`);
  }
});

assertTest('rekapTransaksi populates transaksiValid array with exactly T01 and T04', 'Reconciliation', () => {
  if (!engine || typeof engine.rekapTransaksi !== 'function') {
    throw new Error('rekapTransaksi function is not exported.');
  }
  const result = engine.rekapTransaksi(datasetLatihan);
  if (!Array.isArray(result?.transaksiValid) || result.transaksiValid.length !== 2) {
    throw new Error(`Expected transaksiValid to contain 2 records, got ${result?.transaksiValid?.length}`);
  }
  const ids = result.transaksiValid.map(t => t.id);
  if (!ids.includes('T01') || !ids.includes('T04')) {
    throw new Error(`Expected transaksiValid IDs to be ['T01', 'T04'], got ${JSON.stringify(ids)}`);
  }
});

assertTest('rekapTransaksi handles empty array without crashing', 'Edge Cases', () => {
  if (!engine || typeof engine.rekapTransaksi !== 'function') {
    throw new Error('rekapTransaksi function is not exported.');
  }
  const result = engine.rekapTransaksi([]);
  if (!result || result.totalBerhasil !== 0 || result.jumlahBerhasil !== 0 || result.jumlahDilewati !== 0) {
    throw new Error(`Expected all zeros for empty array, got ${JSON.stringify(result)}`);
  }
});

assertTest('rekapTransaksi throws Error on non-array parameter', 'Defensive Guard', () => {
  if (!engine || typeof engine.rekapTransaksi !== 'function') {
    throw new Error('rekapTransaksi function is not exported.');
  }
  let threw = false;
  try {
    engine.rekapTransaksi('bukan_array');
  } catch (e) {
    threw = true;
  }
  if (!threw) throw new Error('rekapTransaksi must throw Error when parameter is not an array.');
});

// Suite 3: Status Categorization via Switch
console.log(`\n${ANSI.cyan}[SUITE 3: Switch-Case Status Categorization]${ANSI.reset}`);
assertTest('kategoriStatus categorizes BERHASIL and PENDING', 'Switch Logic', () => {
  if (!engine || typeof engine.kategoriStatus !== 'function') {
    throw new Error('kategoriStatus function is not exported.');
  }
  if (engine.kategoriStatus('BERHASIL') !== 'SUKSES') {
    throw new Error(`Expected "SUKSES" for BERHASIL, got ${engine.kategoriStatus('BERHASIL')}`);
  }
  if (engine.kategoriStatus('PENDING') !== 'MENUNGGU') {
    throw new Error(`Expected "MENUNGGU" for PENDING, got ${engine.kategoriStatus('PENDING')}`);
  }
});

assertTest('kategoriStatus handles intentional fall-through for failed states', 'Switch Logic', () => {
  if (!engine || typeof engine.kategoriStatus !== 'function') {
    throw new Error('kategoriStatus function is not exported.');
  }
  for (const st of ['GAGAL', 'DITOLAK', 'KEDALUWARSA']) {
    if (engine.kategoriStatus(st) !== 'TIDAK_DIPROSES') {
      throw new Error(`Expected "TIDAK_DIPROSES" for ${st}, got ${engine.kategoriStatus(st)}`);
    }
  }
});

assertTest('kategoriStatus defaults to TIDAK_DIKENAL for unknown codes', 'Switch Logic', () => {
  if (!engine || typeof engine.kategoriStatus !== 'function') {
    throw new Error('kategoriStatus function is not exported.');
  }
  if (engine.kategoriStatus('UNKNOWN_CODE_99') !== 'TIDAK_DIKENAL') {
    throw new Error(`Expected "TIDAK_DIKENAL", got ${engine.kategoriStatus('UNKNOWN_CODE_99')}`);
  }
});

// Suite 4: PIN Validation via Guard Clauses
console.log(`\n${ANSI.cyan}[SUITE 4: Guard Clauses PIN Validation]${ANSI.reset}`);
assertTest('validasiPin validates correct matching 6-digit PIN', 'PIN Validation', () => {
  if (!engine || typeof engine.validasiPin !== 'function') {
    throw new Error('validasiPin function is not exported.');
  }
  const result = engine.validasiPin('123456', '123456');
  if (result !== 'PIN_BENAR') {
    throw new Error(`Expected "PIN_BENAR", got "${result}"`);
  }
});

assertTest('validasiPin rejects mismatch and invalid format via fail-fast guards', 'PIN Validation', () => {
  if (!engine || typeof engine.validasiPin !== 'function') {
    throw new Error('validasiPin function is not exported.');
  }
  if (engine.validasiPin('123455', '123456') !== 'PIN_SALAH') {
    throw new Error(`Expected "PIN_SALAH", got "${engine.validasiPin('123455', '123456')}"`);
  }
  if (engine.validasiPin('123', '123456') !== 'FORMAT_TIDAK_VALID') {
    throw new Error(`Expected "FORMAT_TIDAK_VALID" for 3 digits, got "${engine.validasiPin('123', '123456')}"`);
  }
  if (engine.validasiPin(123456, '123456') !== 'FORMAT_TIDAK_VALID') {
    throw new Error(`Expected "FORMAT_TIDAK_VALID" for non-string, got "${engine.validasiPin(123456, '123456')}"`);
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
  console.log(`${ANSI.yellow}⚠ PENDING: ${failed} checks remaining. Review the errors above and update rekap-transaksi.js.${ANSI.reset}`);
}
console.log(`${ANSI.bold}=================================================================\n${ANSI.reset}`);

process.exit(failed === 0 ? 0 : 1);
