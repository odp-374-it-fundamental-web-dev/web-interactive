#!/usr/bin/env node
/**
 * test-runner.js - Automated Test Harness for Hands-on Lab 4
 * Validates Bootstrap 5.3 CDN integration, responsive 12-column grid hierarchy,
 * reusable UI components, and mobile-first custom CSS overrides.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const baseDir = path.resolve(__dirname, '..');
const indexPath = path.join(baseDir, 'index.html');
const cssPath = path.join(baseDir, 'styles/custom.css');

const ANSI = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m'
};

console.log(`${ANSI.bold}=================================================================${ANSI.reset}`);
console.log(`${ANSI.bold}AUTOMATED TEST HARNESS: SESSION 4 HANDS-ON LAB VERIFICATION${ANSI.reset}`);
console.log(`${ANSI.bold}Base Directory: ${baseDir}${ANSI.reset}`);
console.log(`${ANSI.bold}=================================================================\n${ANSI.reset}`);

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

if (!fs.existsSync(indexPath)) {
  console.error(`${ANSI.red}[FATAL ERROR] index.html not found at: ${indexPath}${ANSI.reset}`);
  process.exit(1);
}

const rawHtml = fs.readFileSync(indexPath, 'utf-8');
const html = rawHtml.replace(/<!--[\s\S]*?-->/g, '');

const rawCss = fs.existsSync(cssPath) ? fs.readFileSync(cssPath, 'utf-8') : '';
const css = rawCss.replace(/\/\*[\s\S]*?\*\//g, '');

// Suite 1: Bootstrap CDN & Link Hierarchy
console.log(`${ANSI.cyan}[SUITE 1: Bootstrap CDN Setup & Cascade Ordering]${ANSI.reset}`);
assertTest('index.html loads Bootstrap 5.3 CSS from CDN', 'CDN Setup', () => {
  if (!/<link[^>]*href=["'][^"']*bootstrap(?:\.min)?\.css["']/i.test(html)) {
    throw new Error('Missing Bootstrap CSS CDN <link> in <head>.');
  }
});

assertTest('index.html loads Bootstrap 5.3 Bundle JS from CDN', 'CDN Setup', () => {
  if (!/<script[^>]*src=["'][^"']*bootstrap\.bundle(?:\.min)?\.js["']/i.test(html)) {
    throw new Error('Missing Bootstrap Bundle JS <script> before </body>.');
  }
});

assertTest('custom.css is linked after Bootstrap CSS in cascade order', 'Cascade Order', () => {
  const bsIndex = html.search(/bootstrap(?:\.min)?\.css/i);
  const customIndex = html.search(/styles\/custom\.css/i);
  if (customIndex === -1) {
    throw new Error('Missing <link rel="stylesheet" href="styles/custom.css"> in <head>.');
  }
  if (bsIndex === -1 || customIndex < bsIndex) {
    throw new Error('styles/custom.css must be linked AFTER Bootstrap CSS to properly override styles.');
  }
});

assertTest('Viewport meta tag exists for mobile-first rendering', 'Metadata', () => {
  if (!/<meta[^>]*name=["']viewport["'][^>]*content=["'][^"']*width=device-width/i.test(html)) {
    throw new Error('Missing <meta name="viewport" content="width=device-width, initial-scale=1">.');
  }
});

// Suite 2: Bootstrap Components & Accessibility
console.log(`\n${ANSI.cyan}[SUITE 2: Reusable UI Components & ARIA Standards]${ANSI.reset}`);
assertTest('Navbar component uses .navbar, .navbar-expand-*, and .navbar-brand', 'Navbar', () => {
  if (!/class=["'][^"']*\bnavbar\b/i.test(html)) {
    throw new Error('Missing .navbar component class on navigation element.');
  }
  if (!/class=["'][^"']*\bnavbar-brand\b/i.test(html)) {
    throw new Error('Missing .navbar-brand class on brand element.');
  }
});

assertTest('Alert component includes role="status" or role="alert"', 'Alert Component', () => {
  const alertMatch = html.match(/<div[^>]*class=["'][^"']*\balert\b[^"']*["'][^>]*>/i);
  if (!alertMatch) {
    throw new Error('Missing .alert component in markup.');
  }
  if (!/role=["'](?:status|alert)["']/i.test(alertMatch[0])) {
    throw new Error('Alert component must declare accessibility role="status" or role="alert".');
  }
});

// Suite 3: Bootstrap 12-Column Grid
console.log(`\n${ANSI.cyan}[SUITE 3: 12-Column Grid Architecture]${ANSI.reset}`);
assertTest('Grid container hierarchy follows .container > .row > .col-*', 'Grid System', () => {
  if (!/class=["'][^"']*\bcontainer\b/i.test(html)) {
    throw new Error('Missing .container wrapper.');
  }
  if (!/class=["'][^"']*\brow\b/i.test(html)) {
    throw new Error('Missing .row wrapper for grid columns.');
  }
});

assertTest('Card columns declare mobile-first classes: col-12, col-md-6, and col-lg-4', 'Grid Responsiveness', () => {
  if (!/col-12\b/i.test(html) || !/col-md-6\b/i.test(html) || !/col-lg-4\b/i.test(html)) {
    throw new Error('Columns must specify responsive classes: "col-12 col-md-6 col-lg-4".');
  }
});

assertTest('Cards use .card and .card-body structure', 'Card Structure', () => {
  if (!/class=["'][^"']*\bcard\b/i.test(html)) throw new Error('Missing .card component class.');
  if (!/class=["'][^"']*\bcard-body\b/i.test(html)) throw new Error('Missing .card-body container class.');
});

// Suite 4: Form & Table Styling
console.log(`\n${ANSI.cyan}[SUITE 4: Bootstrap Forms & Table Styling]${ANSI.reset}`);
assertTest('Form inputs use .form-label and .form-control', 'Form Styling', () => {
  if (!/class=["'][^"']*\bform-label\b/i.test(html)) {
    throw new Error('Form labels must use Bootstrap class .form-label.');
  }
  if (!/class=["'][^"']*\bform-control\b/i.test(html)) {
    throw new Error('Form inputs must use Bootstrap class .form-control.');
  }
});

assertTest('Data table uses Bootstrap .table class', 'Table Styling', () => {
  if (!/<table[^>]*class=["'][^"']*\btable\b/i.test(html)) {
    throw new Error('Table element must use Bootstrap class .table.');
  }
});

// Suite 5: Custom Mobile-First Media Query
console.log(`\n${ANSI.cyan}[SUITE 5: Custom Mobile-First Media Queries]${ANSI.reset}`);
assertTest('custom.css declares mobile-first @media (min-width: 768px)', 'Mobile First CSS', () => {
  if (!/@media\s*\(\s*min-width\s*:\s*768px\s*\)/i.test(css)) {
    throw new Error('styles/custom.css must implement mobile-first @media (min-width: 768px).');
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
  console.log(`${ANSI.yellow}⚠ PENDING: ${failed} checks remaining. Review the errors above and update your files.${ANSI.reset}`);
}
console.log(`${ANSI.bold}=================================================================\n${ANSI.reset}`);

process.exit(failed === 0 ? 0 : 1);
