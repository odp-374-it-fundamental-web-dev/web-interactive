#!/usr/bin/env node

/**
 * AUTOMATED TEST HARNESS: SESSION 11 HANDS-ON LAB VERIFICATION
 * Target Files: index.html, scripts/next-history.js, scripts/app.js
 * 
 * Verifikasi 10 kriteria evaluasi (100 Poin)
 */

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseDir = path.resolve(__dirname, '..');
const htmlFile = path.resolve(baseDir, 'index.html');
const nextHistoryFile = path.resolve(baseDir, 'scripts', 'next-history.js');
const appFile = path.resolve(baseDir, 'scripts', 'app.js');

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
  console.log("AUTOMATED TEST HARNESS: SESSION 11 HANDS-ON LAB VERIFICATION");
  console.log(`Base Directory: ${baseDir}`);
  console.log("=================================================================\n");

  if (!fs.existsSync(htmlFile)) {
    console.error(`FATAL: index.html not found at ${htmlFile}`);
    process.exit(1);
  }
  if (!fs.existsSync(nextHistoryFile)) {
    console.error(`FATAL: next-history.js not found at ${nextHistoryFile}`);
    process.exit(1);
  }
  if (!fs.existsSync(appFile)) {
    console.error(`FATAL: app.js not found at ${appFile}`);
    process.exit(1);
  }

  const rawHtml = fs.readFileSync(htmlFile, 'utf8');
  const cleanHtml = rawHtml.replace(/<!--[\s\S]*?-->/g, '');
  const rawNextHistory = fs.readFileSync(nextHistoryFile, 'utf8');
  const rawApp = fs.readFileSync(appFile, 'utf8');

  // SUITE 1: HTML Architecture & Integration
  console.log("[SUITE 1: HTML Architecture & Integration]");
  const hasForm = /id=["']formCuaca["']/i.test(cleanHtml);
  const hasHistory = /id=["']riwayatKota["']/i.test(cleanHtml) && /id=["']hapusRiwayat["']/i.test(cleanHtml);
  assert(hasForm && hasHistory, "HTML contains #formCuaca, #riwayatKota, and #hapusRiwayat", "HTML Integration");

  const loadsNextHistory = /<script[^>]+src=["'][^"']*next-history\.js["']/i.test(cleanHtml);
  const loadsApp = /<script[^>]+src=["'][^"']*app\.js["']/i.test(cleanHtml);
  const hasDefer = /defer/i.test(cleanHtml);
  assert(loadsNextHistory && loadsApp && hasDefer, "HTML loads next-history.js and app.js with defer", "Script Tags");

  // SUITE 2: Code Hygiene & Security
  console.log("\n[SUITE 2: Code Hygiene & Security]");
  const hasVar = /\bvar\s+[a-zA-Z0-9_$]+/.test(rawNextHistory) || /\bvar\s+[a-zA-Z0-9_$]+/.test(rawApp);
  assert(!hasVar, "No legacy var keyword used in next-history.js or app.js", "Syntax Hygiene");

  const usesTextContent = /textContent\s*=/.test(rawApp);
  const unsafeInnerHTML = /innerHTML\s*=\s*[^;`]*(\${|kota|item|data)/.test(rawApp);
  assert(usesTextContent && !unsafeInnerHTML, "Safe DOM updates via textContent without innerHTML injection", "XSS Security");

  // SUITE 3: Pure Function Unit Tests (nextHistory)
  console.log("\n[SUITE 3: Pure Function Unit Tests (nextHistory)]");
  const sandbox = {
    console: { log: () => {}, error: () => {}, warn: () => {} },
    Array,
    String,
    Number,
    Math
  };
  vm.createContext(sandbox);

  try {
    vm.runInContext(rawNextHistory, sandbox);
  } catch (err) {
    console.error("Evaluation error in next-history.js:", err.message);
  }

  const nextHistoryFn = sandbox.nextHistory;
  const isFunction = typeof nextHistoryFn === 'function';

  let emptyOk = false;
  let dedupOk = false;
  let capOk = false;

  if (isFunction) {
    const resEmpty = nextHistoryFn([], "Jakarta");
    emptyOk = Array.isArray(resEmpty) && resEmpty.length === 1 && resEmpty[0] === "Jakarta";

    const resDedup = nextHistoryFn(["Surabaya", "Bandung", "Jakarta"], "Bandung");
    dedupOk = Array.isArray(resDedup) && resDedup.length === 3 &&
              resDedup[0] === "Bandung" && resDedup[1] === "Surabaya";

    const resCap = nextHistoryFn(["A", "B", "C", "D", "E"], "F", 5);
    capOk = Array.isArray(resCap) && resCap.length === 5 &&
            resCap[0] === "F" && resCap[4] === "D";
  }

  assert(isFunction && emptyOk, "nextHistory([], 'Jakarta') produces ['Jakarta']", "Unit Test Empty");
  assert(dedupOk, "nextHistory moves duplicate city to index 0 without duplicates", "Unit Test Deduplication");
  assert(capOk, "nextHistory strictly caps results to 5 items", "Unit Test Boundary");

  // SUITE 4: Immutability Guarantee
  console.log("\n[SUITE 4: Immutability Guarantee]");
  let immutabilityOk = false;
  if (isFunction) {
    const original = ["Jakarta", "Bandung"];
    const copyOriginal = [...original];
    nextHistoryFn(original, "Surabaya");
    immutabilityOk = original.length === copyOriginal.length &&
                     original[0] === copyOriginal[0] &&
                     original[1] === copyOriginal[1];
  }
  assert(immutabilityOk, "nextHistory does not mutate the input array (Pure Function)", "Immutability");

  // SUITE 5: Double-Request Guard in loadWeather
  console.log("\n[SUITE 5: Double-Request Guard in loadWeather]");
  const hasDoubleRequestGuard = /if\s*\(\s*(button\s*&&\s*)?button\.disabled\s*\)\s*return/.test(rawApp);
  assert(hasDoubleRequestGuard, "loadWeather contains fail-fast guard 'if (button.disabled) return;'", "Race Condition Guard");

  // SUITE 6: Startup Storage Preservation
  console.log("\n[SUITE 6: Startup Storage Preservation]");
  // Make sure localStorage.removeItem or clear is not called unconditionally at the top level
  const cleanAppLines = rawApp.split('\n')
    .filter(line => !line.trim().startsWith('//'))
    .join('\n');
  const hasGlobalRemoveItem = /^localStorage\.(removeItem|clear)\s*\(/m.test(cleanAppLines);
  assert(!hasGlobalRemoveItem, "Storage is not accidentally wiped on startup (bug fix verified)", "Storage Integrity");

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
