#!/usr/bin/env node

/**
 * AUTOMATED TEST HARNESS: SESSION 12 MINI CAPSTONE LAB VERIFICATION
 * Target Files: index.html, styles/main.css, scripts/rate-helper.js, scripts/next-history.js, scripts/app.js
 *
 * Verifikasi 18 kriteria evaluasi (100 Poin)
 */

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseDir = path.resolve(__dirname, '..');
const htmlFile = path.resolve(baseDir, 'index.html');
const cssFile = path.resolve(baseDir, 'styles', 'main.css');
const rateHelperFile = path.resolve(baseDir, 'scripts', 'rate-helper.js');
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

const round2 = (n) => Math.round(n * 100) / 100;

async function runTests() {
  console.log("=================================================================");
  console.log("AUTOMATED TEST HARNESS: SESSION 12 MINI CAPSTONE LAB VERIFICATION");
  console.log(`Base Directory: ${baseDir}`);
  console.log("=================================================================\n");

  const requiredFiles = [htmlFile, cssFile, rateHelperFile, nextHistoryFile, appFile];
  for (const f of requiredFiles) {
    if (!fs.existsSync(f)) {
      console.error(`FATAL: File not found at ${f}`);
      process.exit(1);
    }
  }

  const rawHtml = fs.readFileSync(htmlFile, 'utf8');
  const cleanHtml = rawHtml.replace(/<!--[\s\S]*?-->/g, '');
  const rawCss = fs.readFileSync(cssFile, 'utf8');
  const rawRateHelper = fs.readFileSync(rateHelperFile, 'utf8');
  const rawNextHistory = fs.readFileSync(nextHistoryFile, 'utf8');
  const rawApp = fs.readFileSync(appFile, 'utf8');

  // SUITE 1: HTML Architecture & Relative Paths
  console.log("[SUITE 1: HTML Architecture & Relative Paths]");
  const hasForm = /id=["']formKurs["']/i.test(cleanHtml);
  const hasResult = /id=["']hasilKurs["']/i.test(cleanHtml);
  const hasHistory = /id=["']riwayatPair["']/i.test(cleanHtml);
  assert(hasForm && hasResult && hasHistory, "HTML contains #formKurs, #hasilKurs, and #riwayatPair", "HTML Landmarks");

  const hasAbsoluteRoot = /href=["']\/[^\/]/i.test(cleanHtml) || /src=["']\/[^\/]/i.test(cleanHtml);
  assert(!hasAbsoluteRoot, "HTML uses relative paths (./styles/... and ./scripts/...) for deployment", "Deployment Path");

  const hasAttribution = /frankfurter/i.test(cleanHtml);
  assert(hasAttribution, "Mandatory Frankfurter/ECB attribution present", "Attribution");

  // SUITE 2: Code Hygiene & Security
  console.log("\n[SUITE 2: Code Hygiene & Security]");
  const allJs = rawRateHelper + "\n" + rawNextHistory + "\n" + rawApp;
  const hasVar = /\bvar\s+[a-zA-Z0-9_$]+/.test(allJs);
  assert(!hasVar, "No legacy var keyword used in any script", "Syntax Hygiene");

  const usesTextContent = /textContent\s*=/.test(rawApp);
  const unsafeInnerHTML = /innerHTML\s*=\s*[^;`]*(\${|base|target|item|pair)/.test(rawApp);
  assert(usesTextContent && !unsafeInnerHTML, "DOM updates use textContent safely without innerHTML injection", "XSS Security");

  // SUITE 3: Latest URL Builder
  console.log("\n[SUITE 3: Latest URL Builder]");
  const helperSandbox = {
    URL,
    URLSearchParams,
    Number,
    TypeError,
    Array,
    String,
    Object,
    console: { log: () => {}, error: () => {} }
  };
  vm.createContext(helperSandbox);

  try {
    vm.runInContext(rawRateHelper, helperSandbox);
  } catch (err) {
    console.error("Evaluation error in rate-helper.js:", err.message);
  }

  let latestUrlOk = false;
  let urlValidationOk = false;
  if (typeof helperSandbox.makeLatestURL === 'function') {
    try {
      const url = helperSandbox.makeLatestURL("usd", ["idr"]);
      const str = url ? url.toString() : '';
      latestUrlOk = str.includes("api.frankfurter.dev/v1/latest") &&
                    str.includes("base=USD") &&
                    str.includes("symbols=IDR");
    } catch {}
    try {
      let threw = false;
      try {
        helperSandbox.makeLatestURL("US", ["IDR"]);
      } catch {
        threw = true;
      }
      urlValidationOk = threw;
    } catch {}
  }
  assert(latestUrlOk, "makeLatestURL builds uppercase latest URL with base and symbols params", "Latest URL");
  assert(urlValidationOk, "makeLatestURL throws TypeError on invalid currency code", "Input Validation");

  // SUITE 4: Pure Function describeCurrencyCode
  console.log("\n[SUITE 4: Pure Function describeCurrencyCode]");
  let currencyCodeOk = false;
  if (typeof helperSandbox.describeCurrencyCode === 'function') {
    try {
      currencyCodeOk =
        helperSandbox.describeCurrencyCode("USD") === "Dolar AS" &&
        helperSandbox.describeCurrencyCode("idr") === "Rupiah" &&
        helperSandbox.describeCurrencyCode("SGD") === "Dolar Singapura" &&
        helperSandbox.describeCurrencyCode("JPY") === "Yen Jepang" &&
        helperSandbox.describeCurrencyCode("XXX") === "Mata uang tidak dikenal";
    } catch {}
  }
  assert(currencyCodeOk, "describeCurrencyCode maps ISO codes to Indonesian names (case-insensitive)", "Currency Mapping");

  // SUITE 5: Pure Function nextHistory & Immutability
  console.log("\n[SUITE 5: Pure Function nextHistory & Immutability]");
  const historySandbox = {
    Array,
    String,
    Number,
    Object,
    console: { log: () => {}, error: () => {} }
  };
  vm.createContext(historySandbox);
  try {
    vm.runInContext(rawNextHistory, historySandbox);
  } catch {}

  let historyOk = false;
  let historyInvalidOk = false;
  if (typeof historySandbox.nextHistory === 'function') {
    const initial = ["SGD/IDR", "JPY/IDR"];
    const copy = JSON.stringify(initial);

    try {
      const res = historySandbox.nextHistory(initial, "USD/IDR", 5);
      const immutability = JSON.stringify(initial) === copy;
      historyOk = Array.isArray(res) && res.length === 3 &&
        res[0] === "USD/IDR" &&
        immutability;

      // Deduplikasi case-insensitive
      const resDup = historySandbox.nextHistory(res, "  sgd/idr ", 5);
      historyOk = historyOk && resDup.length === 3 && resDup[0] === "SGD/IDR";

      // Batas maksimal
      const resMax = historySandbox.nextHistory(resDup, "JPY/IDR", 2);
      historyOk = historyOk && resMax.length === 2;
    } catch {}

    try {
      // Invalid entry harus mengembalikan prev apa adanya
      const bad1 = historySandbox.nextHistory(["SGD/IDR"], "USD-IDR", 5);
      const bad2 = historySandbox.nextHistory(["SGD/IDR"], 12345, 5);
      const bad3 = historySandbox.nextHistory(["SGD/IDR"], "US/IDR", 5);
      historyInvalidOk = Array.isArray(bad1) && bad1.length === 1 &&
        Array.isArray(bad2) && bad2.length === 1 &&
        Array.isArray(bad3) && bad3.length === 1;
    } catch {}
  }
  assert(historyOk, "nextHistory dedupes pair strings case-insensitively, uppercases, puts entry at index 0, respects max, no mutation", "History Logic");
  assert(historyInvalidOk, "nextHistory returns prev unchanged for invalid entries (wrong separator, non-string, short code)", "Input Validation");

  // SUITE 6: Responsive Styling
  console.log("\n[SUITE 6: Responsive Styling]");
  const hasBoxSizing = /box-sizing\s*:\s*border-box/.test(rawCss);
  const hasFlexOrGrid = /(display\s*:\s*(flex|grid))/.test(rawCss);
  assert(hasBoxSizing && hasFlexOrGrid, "CSS defines box-sizing reset and flex/grid layout", "Responsive CSS");

  // SUITE 7: Double-Request Guard in loadRate
  console.log("\n[SUITE 7: Double-Request Guard in loadRate]");
  const cleanApp = rawApp.replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');
  const hasGuard = /if\s*\(\s*(button\s*&&\s*)?button\.disabled\s*\)\s*return/.test(cleanApp);
  assert(hasGuard, "loadRate contains double-request fail-fast guard 'if (button.disabled) return;'", "Race Condition");

  const hasFinally = /finally/.test(cleanApp);
  assert(hasFinally, "loadRate re-enables the submit button inside a finally block", "Race Condition");

  // SUITE 8: Input Validation & Error States
  console.log("\n[SUITE 8: Input Validation & Error States]");
  const validatesInput = /invalid/.test(cleanApp) && /test\(/.test(cleanApp);
  assert(validatesInput, "app.js validates amount and 3-letter codes before any fetch (invalid state)", "Input Validation");

  const handlesEmptyState = /empty/.test(cleanApp);
  const handlesHttpError = /response\.ok|HTTP/.test(cleanApp);
  assert(handlesEmptyState && handlesHttpError, "app.js distinguishes empty result and HTTP errors with dedicated states", "Error Handling");

  // SUITE 9: localStorage History Wiring
  console.log("\n[SUITE 9: localStorage History Wiring]");
  const hasStorageKey = /STORAGE_KEY/.test(cleanApp) && /JSON\.stringify/.test(cleanApp);
  const hasRerender = /renderHistory\s*\(/.test(cleanApp);
  assert(hasStorageKey && hasRerender, "app.js persists history via JSON.stringify and re-renders the chip list", "Storage");

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
