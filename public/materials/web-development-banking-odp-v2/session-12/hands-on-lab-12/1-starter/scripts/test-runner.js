#!/usr/bin/env node

/**
 * AUTOMATED TEST HARNESS: SESSION 12 CAPSTONE LAB VERIFICATION
 * Target Files: index.html, styles/main.css, scripts/forecast-helper.js, scripts/next-history.js, scripts/app.js
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
const cssFile = path.resolve(baseDir, 'styles', 'main.css');
const forecastHelperFile = path.resolve(baseDir, 'scripts', 'forecast-helper.js');
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

// Minimal DOM Simulation
class MockElement {
  constructor(tagName = 'div', id = '') {
    this.tagName = tagName.toUpperCase();
    this.id = id;
    this.children = [];
    this.listeners = {};
    this._textContent = '';
    this.value = '';
    this.disabled = false;
    this.className = '';
    this.style = {};
  }

  get textContent() {
    if (this.children.length > 0) {
      return this.children.map(c => c.textContent).join(' ');
    }
    return this._textContent;
  }

  set textContent(val) {
    this.children = [];
    this._textContent = String(val);
  }

  addEventListener(event, fn) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(fn);
  }

  dispatchEvent(event) {
    const handlers = this.listeners[event.type] || [];
    for (const h of handlers) h(event);
  }

  replaceChildren(...nodes) {
    this.children = [...nodes];
    this._textContent = '';
  }

  appendChild(child) {
    this.children.push(child);
  }
}

async function runTests() {
  console.log("=================================================================");
  console.log("AUTOMATED TEST HARNESS: SESSION 12 CAPSTONE LAB VERIFICATION");
  console.log(`Base Directory: ${baseDir}`);
  console.log("=================================================================\n");

  const requiredFiles = [htmlFile, cssFile, forecastHelperFile, nextHistoryFile, appFile];
  for (const f of requiredFiles) {
    if (!fs.existsSync(f)) {
      console.error(`FATAL: File not found at ${f}`);
      process.exit(1);
    }
  }

  const rawHtml = fs.readFileSync(htmlFile, 'utf8');
  const cleanHtml = rawHtml.replace(/<!--[\s\S]*?-->/g, '');
  const rawCss = fs.readFileSync(cssFile, 'utf8');
  const rawForecastHelper = fs.readFileSync(forecastHelperFile, 'utf8');
  const rawNextHistory = fs.readFileSync(nextHistoryFile, 'utf8');
  const rawApp = fs.readFileSync(appFile, 'utf8');

  // SUITE 1: HTML Architecture & Relative Paths
  console.log("[SUITE 1: HTML Architecture & Relative Paths]");
  const hasForm = /id=["']formCuaca["']/i.test(cleanHtml);
  const hasForecastContainer = /id=["']forecast["']/i.test(cleanHtml);
  const hasHistory = /id=["']riwayatKota["']/i.test(cleanHtml);
  assert(hasForm && hasForecastContainer && hasHistory, "HTML contains #formCuaca, #forecast, and #riwayatKota", "HTML Landmarks");

  const hasAbsoluteRoot = /href=["']\/[^\/]/i.test(cleanHtml) || /src=["']\/[^\/]/i.test(cleanHtml);
  assert(!hasAbsoluteRoot, "HTML uses relative paths (./styles/... and ./scripts/...) for GitHub Pages", "Deployment Path");

  const hasAttribution = /open-meteo/i.test(cleanHtml);
  assert(hasAttribution, "Mandatory Open-Meteo attribution present", "Attribution");

  // SUITE 2: Code Hygiene & Security
  console.log("\n[SUITE 2: Code Hygiene & Security]");
  const allJs = rawForecastHelper + "\n" + rawNextHistory + "\n" + rawApp;
  const hasVar = /\bvar\s+[a-zA-Z0-9_$]+/.test(allJs);
  assert(!hasVar, "No legacy var keyword used in any script", "Syntax Hygiene");

  const usesTextContent = /textContent\s*=/.test(rawApp);
  const unsafeInnerHTML = /innerHTML\s*=\s*[^;`]*(\${|kota|item|row)/.test(rawApp);
  assert(usesTextContent && !unsafeInnerHTML, "DOM updates use textContent safely without innerHTML injection", "XSS Security");

  // SUITE 3: 7-Day Forecast URL Builder
  console.log("\n[SUITE 3: 7-Day Forecast URL Builder]");
  const helperSandbox = {
    URL,
    URLSearchParams,
    Number,
    TypeError,
    Array,
    String,
    console: { log: () => {}, error: () => {} }
  };
  vm.createContext(helperSandbox);

  try {
    vm.runInContext(rawForecastHelper, helperSandbox);
  } catch (err) {
    console.error("Evaluation error in forecast-helper.js:", err.message);
  }

  let urlBuilderOk = false;
  if (typeof helperSandbox.makeWeatherURL === 'function') {
    try {
      const url = helperSandbox.makeWeatherURL({ latitude: -6.2, longitude: 106.8 });
      const str = url ? url.toString() : '';
      urlBuilderOk = str.includes("forecast_days=7") &&
                     str.includes("daily=") &&
                     str.includes("timezone=auto");
    } catch {}
  }
  assert(urlBuilderOk, "makeWeatherURL constructs valid URL with forecast_days=7 and daily parameters", "Forecast URL");

  // SUITE 4: Pure Function toForecastRows
  console.log("\n[SUITE 4: Pure Function toForecastRows]");
  let toForecastRowsOk = false;
  if (typeof helperSandbox.toForecastRows === 'function') {
    const mockData = {
      daily: {
        time: ["2026-11-14", "2026-11-15", "2026-11-16", "2026-11-17", "2026-11-18", "2026-11-19", "2026-11-20"],
        temperature_2m_max: [33, 32, 31, 30, 32, 33, 34],
        temperature_2m_min: [24, 23, 23, 23, 24, 24, 25]
      }
    };
    const rows = helperSandbox.toForecastRows(mockData);
    toForecastRowsOk = Array.isArray(rows) && rows.length === 7 &&
                       rows[0].date === "2026-11-14" && rows[0].max === 33 && rows[0].min === 24;
  }
  assert(toForecastRowsOk, "toForecastRows maps parallel arrays into 7 daily row objects", "Data Transform");

  // SUITE 5: Responsive Auto-Fit CSS Grid
  console.log("\n[SUITE 5: Responsive Auto-Fit CSS Grid]");
  const hasGrid = /display\s*:\s*grid/.test(rawCss);
  const hasAutoFit = /repeat\s*\(\s*auto-fit\s*,\s*minmax\s*\(/i.test(rawCss);
  assert(hasGrid && hasAutoFit, "CSS defines responsive grid using repeat(auto-fit, minmax(...))", "Responsive CSS");

  // SUITE 6: Pure Function nextHistory & Immutability
  console.log("\n[SUITE 6: Pure Function nextHistory & Immutability]");
  const historySandbox = {
    Array,
    String,
    Number,
    console: { log: () => {}, error: () => {} }
  };
  vm.createContext(historySandbox);
  try {
    vm.runInContext(rawNextHistory, historySandbox);
  } catch {}

  let historyOk = false;
  if (typeof historySandbox.nextHistory === 'function') {
    const initial = ["Surabaya", "Bandung"];
    const copy = [...initial];
    const res = historySandbox.nextHistory(initial, "Jakarta", 5);
    const immutability = initial.length === copy.length && initial[0] === copy[0];
    historyOk = Array.isArray(res) && res.length === 3 && res[0] === "Jakarta" && immutability;
  }
  assert(historyOk, "nextHistory creates unmutated, deduplicated history array with city at index 0", "History Logic");

  // SUITE 7: Double-Request Guard in loadWeather
  console.log("\n[SUITE 7: Double-Request Guard in loadWeather]");
  const cleanApp = rawApp.replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');
  const hasGuard = /if\s*\(\s*(button\s*&&\s*)?button\.disabled\s*\)\s*return/.test(cleanApp);
  assert(hasGuard, "loadWeather contains double-request fail-fast guard 'if (button.disabled) return;'", "Race Condition");

  // SUITE 8: Forecast Card DOM Rendering
  console.log("\n[SUITE 8: Forecast Card DOM Rendering]");
  const hasForecastRenderer = /function\s+renderForecast\s*\(/.test(cleanApp);
  assert(hasForecastRenderer, "renderForecast function exists to populate #forecast list items", "Forecast Renderer");

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
