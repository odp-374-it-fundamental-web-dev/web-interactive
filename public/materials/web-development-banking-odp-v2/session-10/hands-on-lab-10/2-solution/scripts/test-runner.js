#!/usr/bin/env node

/**
 * AUTOMATED TEST HARNESS: SESSION 10 HANDS-ON LAB VERIFICATION
 * Target Files: index.html & scripts/app.js
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
const jsFile = path.resolve(baseDir, 'scripts', 'app.js');

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

// Minimal DOM Simulation for Node.js Testing
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
  console.log("AUTOMATED TEST HARNESS: SESSION 10 HANDS-ON LAB VERIFICATION");
  console.log(`Base Directory: ${baseDir}`);
  console.log("=================================================================\n");

  if (!fs.existsSync(htmlFile)) {
    console.error(`FATAL: index.html not found at ${htmlFile}`);
    process.exit(1);
  }
  if (!fs.existsSync(jsFile)) {
    console.error(`FATAL: app.js not found at ${jsFile}`);
    process.exit(1);
  }

  const rawHtml = fs.readFileSync(htmlFile, 'utf8');
  const cleanHtml = rawHtml.replace(/<!--[\s\S]*?-->/g, '');
  const rawJs = fs.readFileSync(jsFile, 'utf8');

  // SUITE 1: HTML Architecture & Accessibility
  console.log("[SUITE 1: HTML Architecture & Accessibility]");
  const hasHistoryContainer = /id=["']riwayatKota["']/i.test(cleanHtml);
  const hasClearButton = /id=["']hapusRiwayat["']/i.test(cleanHtml);
  assert(hasHistoryContainer && hasClearButton, "HTML contains #riwayatKota container and #hapusRiwayat button", "History HTML");

  const hasForm = /id=["']formCuaca["']/i.test(cleanHtml);
  const hasStatus = /id=["']status["']/i.test(cleanHtml);
  assert(hasForm && hasStatus, "HTML preserves #formCuaca and #status elements", "Form Landmark");

  const hasScriptDefer = /<script[^>]+src=["'][^"']*app\.js["'][^>]*defer/i.test(cleanHtml) ||
                         /<script[^>]+defer[^>]*src=["'][^"']*app\.js["']/i.test(cleanHtml);
  assert(hasScriptDefer, "External script app.js loaded with 'defer' attribute", "Script Loading");

  // SUITE 2: Code Hygiene & Security
  console.log("\n[SUITE 2: Code Hygiene & Security]");
  const hasVar = /\bvar\s+[a-zA-Z0-9_$]+/.test(rawJs);
  assert(!hasVar, "No legacy var keyword used in app.js", "Syntax Hygiene");

  const usesTextContent = /textContent\s*=/.test(rawJs);
  const unsafeInnerHTML = /innerHTML\s*=\s*[^;`]*(\${|kota|item)/.test(rawJs);
  assert(usesTextContent && !unsafeInnerHTML, "History city names rendered safely via textContent", "XSS Security");

  // Set up Mock Storage & DOM Environment
  const memoryStore = new Map();
  const localStorageMock = {
    getItem: (key) => memoryStore.get(key) ?? null,
    setItem: (key, val) => memoryStore.set(key, String(val)),
    removeItem: (key) => memoryStore.delete(key),
    clear: () => memoryStore.clear()
  };

  const elements = {
    formCuaca: new MockElement('form', 'formCuaca'),
    kota: new MockElement('input', 'kota'),
    cariCuaca: new MockElement('button', 'cariCuaca'),
    status: new MockElement('p', 'status'),
    hasilCuaca: new MockElement('div', 'hasilCuaca'),
    riwayatKota: new MockElement('div', 'riwayatKota'),
    hapusRiwayat: new MockElement('button', 'hapusRiwayat')
  };

  const documentMock = {
    querySelector: (sel) => {
      const clean = sel.replace('#', '');
      return elements[clean] || null;
    },
    createElement: (tag) => new MockElement(tag)
  };

  let weatherLoadedWith = null;
  const sandbox = {
    document: documentMock,
    localStorage: localStorageMock,
    console: { log: () => {}, error: () => {}, warn: () => {} },
    fetch: async () => ({ ok: true, json: async () => ({}) }),
    loadWeather: (city) => { weatherLoadedWith = city; },
    URL,
    URLSearchParams,
    Number,
    Array,
    String,
    Math,
    Error,
    TypeError,
    Promise,
    Date,
    JSON
  };

  vm.createContext(sandbox);

  let executionOk = false;
  try {
    vm.runInContext(rawJs, sandbox);
    executionOk = true;
  } catch (err) {
    console.error("Execution error during script evaluation:", err.message);
  }

  // SUITE 3: Storage Read & Corrupt Fallback
  console.log("\n[SUITE 3: Storage Read & Corrupt Fallback]");
  let readHandlesCorrupt = false;
  if (typeof sandbox.readHistory === 'function') {
    // Test null
    memoryStore.clear();
    const resEmpty = sandbox.readHistory();
    // Test corrupt JSON
    memoryStore.set("bni-odp-weather-history-v1", "{ invalid json ");
    const resCorrupt = sandbox.readHistory();
    // Test non-array
    memoryStore.set("bni-odp-weather-history-v1", JSON.stringify({ name: "Jakarta" }));
    const resNonArray = sandbox.readHistory();

    readHandlesCorrupt = Array.isArray(resEmpty) && resEmpty.length === 0 &&
                         Array.isArray(resCorrupt) && resCorrupt.length === 0 &&
                         Array.isArray(resNonArray) && resNonArray.length === 0;
  }
  assert(
    readHandlesCorrupt,
    "readHistory() handles null, corrupted JSON, and non-array data returning safe fallback []",
    "Defensive Storage"
  );

  // SUITE 4: Deduplication & Max 5 Limit
  console.log("\n[SUITE 4: Deduplication & Max 5 Limit]");
  let deduplicationOk = false;
  let maxFiveOk = false;
  if (typeof sandbox.rememberCity === 'function') {
    memoryStore.clear();
    sandbox.rememberCity("Jakarta");
    sandbox.rememberCity("Surabaya");
    sandbox.rememberCity("Bandung");
    sandbox.rememberCity("Jakarta"); // Re-add Jakarta -> should move to index 0

    const current = sandbox.readHistory();
    deduplicationOk = Array.isArray(current) && current.length > 0 &&
                     current[0]?.toLowerCase() === "jakarta" &&
                     current.filter(c => c.toLowerCase() === "jakarta").length === 1;

    // Add 4 more cities (total 7 added)
    sandbox.rememberCity("Medan");
    sandbox.rememberCity("Semarang");
    sandbox.rememberCity("Yogyakarta");
    sandbox.rememberCity("Malang");

    const limited = sandbox.readHistory();
    maxFiveOk = Array.isArray(limited) && limited.length === 5 &&
                limited[0]?.toLowerCase() === "malang";
  }
  assert(deduplicationOk, "rememberCity() moves existing city to index 0 without duplicating", "Deduplication");
  assert(maxFiveOk, "rememberCity() strictly enforces maximum 5 recent cities limit", "History Cap");

  // SUITE 5: Render Buttons & Re-Search
  console.log("\n[SUITE 5: Render Buttons & Re-Search]");
  let renderButtonsOk = false;
  if (typeof sandbox.renderHistory === 'function') {
    sandbox.renderHistory();
    const buttons = elements.riwayatKota.children.filter(c => c.tagName === 'BUTTON');
    if (buttons.length > 0) {
      buttons[0].dispatchEvent({ type: 'click' });
      const reSearchTriggered = (elements.kota.value === buttons[0].textContent) ||
                                (weatherLoadedWith !== null) ||
                                (elements.status.textContent.includes("Mengambil"));
      renderButtonsOk = buttons.length === 5 && reSearchTriggered;
    }
  }
  assert(
    renderButtonsOk,
    "renderHistory() creates button elements and triggers loadWeather(city) on click",
    "Re-Search Interaction"
  );

  // SUITE 6: Clear History
  console.log("\n[SUITE 6: Clear History]");
  let clearHistoryOk = false;
  elements.hapusRiwayat.dispatchEvent({ type: 'click' });
  const afterClear = sandbox.readHistory ? sandbox.readHistory() : [];
  const noButtonsLeft = elements.riwayatKota.children.filter(c => c.tagName === 'BUTTON').length === 0;
  clearHistoryOk = afterClear.length === 0 && noButtonsLeft;
  assert(
    clearHistoryOk,
    "Clicking #hapusRiwayat removes storage key and cleans history DOM",
    "Clear Storage"
  );

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
