#!/usr/bin/env node
/**
 * test-runner.js - Automated Test Harness for Hands-on Lab 3
 * Validates CSS3 Box Model resets, Flexbox navbar architecture,
 * CSS Grid fluid responsiveness, form accessibility, and table styling.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const baseDir = path.resolve(__dirname, '..');
const cssPath = path.join(baseDir, 'styles/style.css');
const indexPath = path.join(baseDir, 'index.html');
const kontakPath = path.join(baseDir, 'kontak.html');

const ANSI = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m'
};

console.log(`${ANSI.bold}=================================================================${ANSI.reset}`);
console.log(`${ANSI.bold}AUTOMATED TEST HARNESS: SESSION 3 HANDS-ON LAB VERIFICATION${ANSI.reset}`);
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

if (!fs.existsSync(cssPath)) {
  console.error(`${ANSI.red}[FATAL ERROR] style.css not found at: ${cssPath}${ANSI.reset}`);
  process.exit(1);
}

const rawCss = fs.readFileSync(cssPath, 'utf-8');
// Strip CSS comments before testing
const css = rawCss.replace(/\/\*[\s\S]*?\*\//g, '');

// Suite 1: Stylesheet Linking
console.log(`${ANSI.cyan}[SUITE 1: Stylesheet Linking Across Pages]${ANSI.reset}`);
assertTest('index.html links to styles/style.css', 'Linking', () => {
  if (!fs.existsSync(indexPath)) throw new Error('index.html not found.');
  const indexHtml = fs.readFileSync(indexPath, 'utf-8').replace(/<!--[\s\S]*?-->/g, '');
  if (!/<link[^>]*rel=["']stylesheet["'][^>]*href=["']styles\/style\.css["']/i.test(indexHtml) &&
      !/<link[^>]*href=["']styles\/style\.css["'][^>]*rel=["']stylesheet["']/i.test(indexHtml)) {
    throw new Error('index.html is missing <link rel="stylesheet" href="styles/style.css">.');
  }
});

assertTest('kontak.html links to styles/style.css', 'Linking', () => {
  if (!fs.existsSync(kontakPath)) throw new Error('kontak.html not found.');
  const kontakHtml = fs.readFileSync(kontakPath, 'utf-8').replace(/<!--[\s\S]*?-->/g, '');
  if (!/<link[^>]*rel=["']stylesheet["'][^>]*href=["']styles\/style\.css["']/i.test(kontakHtml) &&
      !/<link[^>]*href=["']styles\/style\.css["'][^>]*rel=["']stylesheet["']/i.test(kontakHtml)) {
    throw new Error('kontak.html is missing <link rel="stylesheet" href="styles/style.css">.');
  }
});

// Suite 2: Box Model & Typography
console.log(`\n${ANSI.cyan}[SUITE 2: Universal Box Model & Base Typography]${ANSI.reset}`);
assertTest('Universal reset applies box-sizing: border-box', 'Box Model', () => {
  if (!/box-sizing\s*:\s*border-box/i.test(css)) {
    throw new Error('Missing "box-sizing: border-box" in universal reset (*).');
  }
});

assertTest('Base typography sets font-family and line-height', 'Typography', () => {
  if (!/font-family\s*:/i.test(css)) {
    throw new Error('Missing font-family declaration in body or html.');
  }
  if (!/line-height\s*:/i.test(css)) {
    throw new Error('Missing line-height declaration in body for readability.');
  }
});

// Suite 3: Flexbox Navigation
console.log(`\n${ANSI.cyan}[SUITE 3: Flexbox Navigation Mechanics]${ANSI.reset}`);
assertTest('Navbar uses display: flex and flex-wrap', 'Flexbox', () => {
  if (!/display\s*:\s*flex/i.test(css)) {
    throw new Error('Missing "display: flex" declaration for navigation or layout.');
  }
  if (!/flex-wrap\s*:\s*wrap/i.test(css)) {
    throw new Error('Navbar should include "flex-wrap: wrap" for narrow viewports.');
  }
});

assertTest('Navbar implements align-items and gap/spacing', 'Flexbox', () => {
  if (!/align-items\s*:\s*center/i.test(css)) {
    throw new Error('Navbar should declare "align-items: center" for vertical alignment.');
  }
  if (!/gap\s*:/i.test(css)) {
    throw new Error('Missing modern "gap" property for flex spacing.');
  }
});

assertTest('Interactive elements declare :hover and :focus-visible', 'Accessibility', () => {
  if (!/:hover\b/i.test(css)) {
    throw new Error('Missing :hover pseudo-class for interactive links or buttons.');
  }
  if (!/:focus-visible\b/i.test(css)) {
    throw new Error('Missing :focus-visible pseudo-class for keyboard navigation rings.');
  }
});

// Suite 4: CSS Grid Cards Layout
console.log(`\n${ANSI.cyan}[SUITE 4: CSS Grid 2D Card Layout]${ANSI.reset}`);
assertTest('Cards container uses display: grid', 'CSS Grid', () => {
  if (!/display\s*:\s*grid/i.test(css)) {
    throw new Error('Missing "display: grid" declaration for card gallery.');
  }
});

assertTest('CSS Grid applies repeat(auto-fit, minmax(...)) responsive pattern', 'CSS Grid', () => {
  if (!/grid-template-columns\s*:\s*repeat\s*\(\s*auto-fit/i.test(css) ||
      !/minmax\s*\(/i.test(css)) {
    throw new Error('Grid must use repeat(auto-fit, minmax(..., 1fr)) for fluid responsiveness.');
  }
});

assertTest('Cards have padding, border-radius, and background', 'Card Styling', () => {
  if (!/\.card[\s\S]*?padding\s*:/i.test(css) && !/\.interest-card[\s\S]*?padding\s*:/i.test(css)) {
    throw new Error('Card elements must have internal padding.');
  }
  if (!/border-radius\s*:/i.test(css)) {
    throw new Error('Card elements must specify border-radius.');
  }
});

// Suite 5: Form & Table Styling
console.log(`\n${ANSI.cyan}[SUITE 5: Form Inputs & Data Table Styling]${ANSI.reset}`);
assertTest('Form inputs specify padding and full width or box model', 'Form Styling', () => {
  if (!/(?:input|textarea|select)[\s\S]*?padding\s*:/i.test(css)) {
    throw new Error('Form input/select/textarea elements must declare comfortable padding.');
  }
});

assertTest('Data table specifies border-collapse: collapse', 'Table Styling', () => {
  if (!/border-collapse\s*:\s*collapse/i.test(css)) {
    throw new Error('Table element must specify "border-collapse: collapse".');
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
  console.log(`${ANSI.yellow}⚠ PENDING: ${failed} checks remaining. Review the errors above and update style.css.${ANSI.reset}`);
}
console.log(`${ANSI.bold}=================================================================\n${ANSI.reset}`);

process.exit(failed === 0 ? 0 : 1);
