#!/usr/bin/env node

/**
 * AUTOMATED TEST HARNESS: SESSION 9 HANDS-ON LAB VERIFICATION
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
  console.log("AUTOMATED TEST HARNESS: SESSION 9 HANDS-ON LAB VERIFICATION");
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
  const hasFormNovalidate = /<form[^>]+id=["']formCuaca["'][^>]*novalidate/i.test(cleanHtml) ||
                            /<form[^>]+novalidate[^>]*id=["']formCuaca["']/i.test(cleanHtml);
  assert(hasFormNovalidate, "Form has id='formCuaca' and 'novalidate' attribute", "Form A11y");

  const hasStatusLive = /role=["']status["'][^>]*aria-live=["']polite["']/i.test(cleanHtml) ||
                        /aria-live=["']polite["'][^>]*role=["']status["']/i.test(cleanHtml);
  assert(hasStatusLive, "Feedback element contains role='status' and aria-live='polite'", "Status Live");

  const hasAttribution = /open-meteo/i.test(cleanHtml);
  assert(hasAttribution, "Mandatory Open-Meteo attribution included in HTML", "Attribution");

  const hasScriptDefer = /<script[^>]+src=["'][^"']*app\.js["'][^>]*defer/i.test(cleanHtml) ||
                         /<script[^>]+defer[^>]*src=["'][^"']*app\.js["']/i.test(cleanHtml);
  assert(hasScriptDefer, "External script app.js loaded with 'defer' attribute", "Script Loading");

  // SUITE 2: Code Hygiene & Security
  console.log("\n[SUITE 2: Code Hygiene & Security]");
  const hasVar = /\bvar\s+[a-zA-Z0-9_$]+/.test(rawJs);
  assert(!hasVar, "No legacy var keyword used in app.js", "Syntax Hygiene");

  const usesTextContent = /textContent\s*=/.test(rawJs);
  const unsafeInnerHTML = /innerHTML\s*=\s*[^;`]*(\${|city\.|c\.|u\.|data)/.test(rawJs);
  assert(usesTextContent && !unsafeInnerHTML, "API weather values rendered safely using textContent", "XSS Security");

  // Set up Mock DOM Environment for Functional Testing
  const elements = {
    formCuaca: new MockElement('form', 'formCuaca'),
    kota: new MockElement('input', 'kota'),
    cariCuaca: new MockElement('button', 'cariCuaca'),
    status: new MockElement('p', 'status'),
    hasilCuaca: new MockElement('div', 'hasilCuaca')
  };

  const documentMock = {
    querySelector: (sel) => {
      const clean = sel.replace('#', '');
      return elements[clean] || null;
    },
    createElement: (tag) => new MockElement(tag)
  };

  // Mock Fetch to intercept API calls safely in test
  let lastFetchedUrl = '';
  const fetchMock = async (url) => {
    lastFetchedUrl = String(url);
    if (lastFetchedUrl.includes("simulate-404")) {
      return { ok: false, status: 404, json: async () => ({}) };
    }
    if (lastFetchedUrl.includes("simulate-500")) {
      return { ok: false, status: 500, json: async () => ({}) };
    }
    if (lastFetchedUrl.includes("geocoding-api")) {
      if (lastFetchedUrl.includes("name=UnknownCity")) {
        return { ok: true, status: 200, json: async () => ({ results: [] }) };
      }
      return {
        ok: true,
        status: 200,
        json: async () => ({
          results: [{ name: "Jakarta", country: "Indonesia", latitude: -6.2, longitude: 106.8 }]
        })
      };
    }
    if (lastFetchedUrl.includes("api.open-meteo.com/v1/forecast")) {
      return {
        ok: true,
        status: 200,
        json: async () => ({
          timezone: "Asia/Jakarta",
          current: { temperature_2m: 31.5, wind_speed_10m: 12.2, time: "2026-11-14T12:00" },
          current_units: { temperature_2m: "°C", wind_speed_10m: "km/h" }
        })
      };
    }
    return { ok: true, status: 200, json: async () => ({}) };
  };

  const sandbox = {
    document: documentMock,
    console: { log: () => {}, error: () => {}, warn: () => {} },
    fetch: fetchMock,
    URL,
    URLSearchParams,
    Number,
    Array,
    String,
    Math,
    Error,
    TypeError,
    Promise,
    Date
  };

  vm.createContext(sandbox);

  let executionOk = false;
  try {
    vm.runInContext(rawJs, sandbox);
    executionOk = true;
  } catch (err) {
    console.error("Execution error during script evaluation:", err.message);
  }

  // SUITE 3: HTTP Defensive Helper (getJSON)
  console.log("\n[SUITE 3: HTTP Defensive Helper (getJSON)]");
  let helperThrowsHttpError = false;
  try {
    if (typeof sandbox.getJSON === 'function') {
      await sandbox.getJSON("https://example.com/simulate-404");
    } else {
      // Check if getJSON is written in app.js
      const matchesThrow = /throw\s+new\s+Error\s*\(\s*`HTTP\s*\$\{response\.status\}`\s*\)/.test(rawJs) ||
                           /!response\.ok/.test(rawJs);
      helperThrowsHttpError = matchesThrow;
    }
  } catch (err) {
    helperThrowsHttpError = err.message.includes("HTTP 404");
  }
  assert(
    helperThrowsHttpError,
    "getJSON(url) checks response.ok and throws Error on HTTP 4xx/5xx failures",
    "HTTP Guard"
  );

  // SUITE 4: Geocoding & Forecast Endpoints
  console.log("\n[SUITE 4: Geocoding & Forecast Endpoints]");
  const hasGeocoding = /geocoding-api\.open-meteo\.com/.test(rawJs);
  const hasForecast = /api\.open-meteo\.com\/v1\/forecast/.test(rawJs);
  const hasOptionalChaining = /results\?\.\[0\]/.test(rawJs);
  assert(
    hasGeocoding && hasForecast && hasOptionalChaining,
    "findCity and fetchWeather construct valid Open-Meteo endpoints with optional chaining (results?.[0])",
    "API Contract"
  );

  // SUITE 5: UI State Machine & Button Guard
  console.log("\n[SUITE 5: UI State Machine & Button Guard]");
  let stateMachineWorking = false;
  if (typeof sandbox.setState === 'function') {
    sandbox.setState("loading");
    const loadingOk = elements.cariCuaca.disabled === true && elements.status.textContent.includes("Mengambil");
    sandbox.setState("empty");
    const emptyOk = elements.status.textContent.includes("tidak ditemukan");
    stateMachineWorking = loadingOk && emptyOk;
  }
  assert(
    stateMachineWorking,
    "setState updates status text and disables button during 'loading' state",
    "State Machine"
  );

  // SUITE 6: Orchestration loadWeather with Finally
  console.log("\n[SUITE 6: End-to-End Orchestration & Finally Block]");
  let orchestrationWorking = false;
  if (typeof sandbox.loadWeather === 'function') {
    elements.cariCuaca.disabled = true;
    await sandbox.loadWeather("Jakarta");
    const successRendered = elements.hasilCuaca.children.length > 0 &&
                            elements.hasilCuaca.textContent.includes("Jakarta") &&
                            elements.status.textContent.includes("dimuat");
    const buttonRestored = elements.cariCuaca.disabled === false;
    orchestrationWorking = successRendered && buttonRestored;
  }
  assert(
    orchestrationWorking,
    "loadWeather orchestrates geocoding + forecast and restores button in finally block",
    "Orchestration"
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
