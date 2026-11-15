#!/usr/bin/env node

/**
 * AUTOMATED TEST HARNESS: SESSION 8 HANDS-ON LAB VERIFICATION
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
    this.valueAsNumber = NaN;
    this.className = '';
    this.style = {};
    this.classList = {
      add: (cls) => { if (!this.className.includes(cls)) this.className += ` ${cls}`; },
      remove: (cls) => { this.className = this.className.replace(new RegExp(`\\b${cls}\\b`, 'g'), '').trim(); },
      contains: (cls) => this.className.includes(cls)
    };
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

  reset() {
    this.value = '';
    this.valueAsNumber = NaN;
  }

  focus() {}
}

function runTests() {
  console.log("=================================================================");
  console.log("AUTOMATED TEST HARNESS: SESSION 8 HANDS-ON LAB VERIFICATION");
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
  const hasFormNovalidate = /<form[^>]+id=["']formTransaksi["'][^>]*novalidate/i.test(cleanHtml) ||
                            /<form[^>]+novalidate[^>]*id=["']formTransaksi["']/i.test(cleanHtml);
  assert(hasFormNovalidate, "Form has id='formTransaksi' and 'novalidate' attribute", "Form A11y");

  const hasStatusLive = /role=["']status["'][^>]*aria-live=["']polite["']/i.test(cleanHtml) ||
                        /aria-live=["']polite["'][^>]*role=["']status["']/i.test(cleanHtml);
  assert(hasStatusLive, "Feedback element contains role='status' and aria-live='polite'", "Status Live");

  const hasSearchElements = /id=["']cari["']/i.test(cleanHtml) && /id=["']hasil["']/i.test(cleanHtml);
  assert(hasSearchElements, "Search input (#cari) and result list (#hasil) exist in HTML", "Milestone 2 HTML");

  const hasScriptDefer = /<script[^>]+src=["'][^"']*app\.js["'][^>]*defer/i.test(cleanHtml) ||
                         /<script[^>]+defer[^>]*src=["'][^"']*app\.js["']/i.test(cleanHtml);
  assert(hasScriptDefer, "External script app.js loaded with 'defer' attribute", "Script Loading");

  // SUITE 2: Code Hygiene & Security
  console.log("\n[SUITE 2: Code Hygiene & Security]");
  const hasVar = /\bvar\s+[a-zA-Z0-9_$]+/.test(rawJs);
  assert(!hasVar, "No legacy var keyword used in app.js", "Syntax Hygiene");

  const usesTextContent = /textContent\s*=/.test(rawJs);
  const unsafeInnerHTML = /innerHTML\s*=\s*[^;`]*(\${|item\.|nama|nominal)/.test(rawJs);
  assert(usesTextContent && !unsafeInnerHTML, "DOM values updated safely using textContent (OWASP XSS defense)", "XSS Security");

  // Set up Mock DOM Environment for Functional Testing
  const elements = {
    formTransaksi: new MockElement('form', 'formTransaksi'),
    nama: new MockElement('input', 'nama'),
    nominal: new MockElement('input', 'nominal'),
    pesan: new MockElement('p', 'pesan'),
    daftarTransaksi: new MockElement('ul', 'daftarTransaksi'),
    cari: new MockElement('input', 'cari'),
    hasil: new MockElement('ul', 'hasil')
  };

  const documentMock = {
    querySelector: (sel) => {
      const clean = sel.replace('#', '');
      return elements[clean] || null;
    },
    createElement: (tag) => new MockElement(tag)
  };

  const sandbox = {
    document: documentMock,
    console: { log: () => {}, table: () => {}, error: () => {} },
    Number,
    Array,
    String,
    Math
  };

  vm.createContext(sandbox);

  let executionOk = false;
  try {
    vm.runInContext(rawJs, sandbox);
    executionOk = true;
  } catch (err) {
    console.error("Execution error during script evaluation:", err.message);
  }

  // SUITE 3: Form Submit & Validation Logic
  console.log("\n[SUITE 3: Form Submit & Validation Logic]");
  let preventDefaultCalled = false;
  const mockSubmitEvent = {
    type: 'submit',
    preventDefault: () => { preventDefaultCalled = true; }
  };

  // Test 1: Invalid Submit (Empty)
  elements.nama.value = "   ";
  elements.nominal.value = "";
  elements.nominal.valueAsNumber = NaN;
  elements.formTransaksi.dispatchEvent(mockSubmitEvent);

  const errorRendered = elements.pesan.textContent.toLowerCase().includes("isi nama");
  const noTransactionAdded = !elements.daftarTransaksi.textContent.includes(":") ||
                             elements.daftarTransaksi.children.length === 0;
  assert(
    preventDefaultCalled && errorRendered && noTransactionAdded,
    "Form submit calls preventDefault() and rejects invalid/empty inputs with error message",
    "Validation Guard"
  );

  // Test 2: Valid Submit
  elements.nama.value = "Setoran Latihan";
  elements.nominal.value = "50000";
  elements.nominal.valueAsNumber = 50000;
  elements.formTransaksi.dispatchEvent(mockSubmitEvent);

  const itemAdded = elements.daftarTransaksi.children.length > 0 &&
                    elements.daftarTransaksi.children[0].textContent.includes("Setoran Latihan");
  assert(itemAdded, "Valid submission adds transaction and renders new list item safely", "Submit Flow");

  // SUITE 4: Container Cleaning & Anti-Duplication
  console.log("\n[SUITE 4: Container Cleaning & Anti-Duplication]");
  const usesReplaceChildren = /replaceChildren\s*\(/.test(rawJs);
  assert(usesReplaceChildren, "Container cleaned via replaceChildren() before re-rendering", "Anti-Duplication");

  // SUITE 5: Milestone 2 Real-Time Search Logic
  console.log("\n[SUITE 5: Milestone 2 Real-Time Search Logic]");
  const mockInputEvent = { type: 'input' };

  // Test A: Initial render or reset
  elements.cari.value = "";
  elements.cari.dispatchEvent(mockInputEvent);
  const initialCount = elements.hasil.children.length;

  // Test B: Search "data" (Case-insensitive)
  elements.cari.value = "data";
  elements.cari.dispatchEvent(mockInputEvent);
  const dataCount = elements.hasil.children.length;

  // Test C: Search "xyz" (Empty result handling)
  elements.cari.value = "xyz";
  elements.cari.dispatchEvent(mockInputEvent);
  const emptyText = elements.hasil.textContent.toLowerCase();

  const searchWorks = (initialCount === 5) &&
                      (dataCount === 2) &&
                      (emptyText.includes("tidak ada hasil"));

  assert(
    searchWorks,
    "Milestone 2 real-time search filters 5 dummy records (data -> 2, xyz -> 'Tidak ada hasil.')",
    "Real-Time Filter"
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
