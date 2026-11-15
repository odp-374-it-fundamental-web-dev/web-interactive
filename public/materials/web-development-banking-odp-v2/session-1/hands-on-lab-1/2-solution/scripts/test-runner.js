#!/usr/bin/env node
/**
 * test-runner.js - Automated Test Harness for Hands-on Lab 1
 * Validates semantic HTML5 structure, landmarks, table accessibility, and link contracts.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targetPath = path.resolve(__dirname, '../index.html');

const ANSI = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m'
};

console.log(`${ANSI.bold}=================================================================${ANSI.reset}`);
console.log(`${ANSI.bold}AUTOMATED TEST HARNESS: SESSION 1 HANDS-ON LAB VERIFICATION${ANSI.reset}`);
console.log(`${ANSI.bold}Target File: ${targetPath}${ANSI.reset}`);
console.log(`${ANSI.bold}=================================================================\n${ANSI.reset}`);

if (!fs.existsSync(targetPath)) {
  console.error(`${ANSI.red}[FATAL ERROR] index.html not found at: ${targetPath}${ANSI.reset}`);
  process.exit(1);
}

const rawHtml = fs.readFileSync(targetPath, 'utf-8');
// Strip comments to test actual code written by trainee
const html = rawHtml.replace(/<!--[\s\S]*?-->/g, '');

let passed = 0;
let failed = 0;
const tests = [];

function assertTest(name, suite, testFn) {
  try {
    testFn();
    passed++;
    tests.push({ name, suite, ok: true });
    console.log(`  ${ANSI.green}✔ PASS:${ANSI.reset} [${suite}] ${name}`);
  } catch (err) {
    failed++;
    tests.push({ name, suite, ok: false, message: err.message });
    console.log(`  ${ANSI.red}✖ FAIL:${ANSI.reset} [${suite}] ${name} -> ${err.message}`);
  }
}

// Suite 1: Document Structure & Metadata
console.log(`${ANSI.cyan}[SUITE 1: Document Anatomy & Metadata]${ANSI.reset}`);
assertTest('DOCTYPE html declaration at file start', 'Metadata', () => {
  if (!/^\s*<!DOCTYPE\s+html>/i.test(html)) {
    throw new Error('Missing or misplaced <!DOCTYPE html> at the start of document.');
  }
});

assertTest('Root <html lang="id"> language specification', 'Metadata', () => {
  if (!/<html[^>]*\blang=["']id["']/i.test(html)) {
    throw new Error('<html lang="id"> attribute missing or not set to "id".');
  }
});

assertTest('Metadata: UTF-8 charset and mobile viewport', 'Metadata', () => {
  if (!/<meta[^>]*charset=["']?utf-8["']?/i.test(html)) {
    throw new Error('Missing <meta charset="UTF-8"> in <head>.');
  }
  if (!/<meta[^>]*name=["']viewport["'][^>]*content=["'][^"']*width=device-width/i.test(html)) {
    throw new Error('Missing responsive <meta name="viewport" content="width=device-width, initial-scale=1.0"> in <head>.');
  }
});

assertTest('Document Title exists and is descriptive', 'Metadata', () => {
  const match = html.match(/<title>([^<]+)<\/title>/i);
  if (!match || match[1].trim().length < 5) {
    throw new Error('Missing or empty <title> tag in <head>.');
  }
});

// Suite 2: Semantic Landmarks
console.log(`\n${ANSI.cyan}[SUITE 2: Semantic Landmarks & Structure]${ANSI.reset}`);
assertTest('Header, Nav, Section, and Footer landmarks exist', 'Landmarks', () => {
  if (!/<header[\s>]/i.test(html)) throw new Error('Missing semantic <header> landmark.');
  if (!/<nav[\s>]/i.test(html)) throw new Error('Missing semantic <nav> landmark.');
  if (!/<section[\s>]/i.test(html)) throw new Error('Missing semantic <section> element.');
  if (!/<footer[\s>]/i.test(html)) throw new Error('Missing semantic <footer> landmark.');
});

assertTest('Unique <main> landmark encompasses primary content', 'Landmarks', () => {
  const mainMatches = html.match(/<main[\s>]/gi);
  if (!mainMatches || mainMatches.length === 0) {
    throw new Error('Missing <main> element for page primary content.');
  }
  if (mainMatches.length > 1) {
    throw new Error(`Found ${mainMatches.length} <main> tags. Exactly one <main> tag allowed per page.`);
  }
});

assertTest('Single <h1> heading followed by logical <h2> headings', 'Headings', () => {
  const h1Matches = html.match(/<h1[\s>]/gi);
  if (!h1Matches || h1Matches.length === 0) {
    throw new Error('Missing primary <h1> heading.');
  }
  if (h1Matches.length > 1) {
    throw new Error(`Found ${h1Matches.length} <h1> tags. Expected exactly 1 <h1> for main page title.`);
  }
  if (!/<h2[\s>]/i.test(html)) {
    throw new Error('Missing secondary <h2> headings for sections.');
  }
});

// Suite 3: Media & Accessible Navigation
console.log(`\n${ANSI.cyan}[SUITE 3: Media & Hyperlink Integrity]${ANSI.reset}`);
assertTest('Image tag with valid src and descriptive alt attribute', 'Media', () => {
  const imgMatch = html.match(/<img([^>]+)>/i);
  if (!imgMatch) throw new Error('Missing <img> element.');
  const attrs = imgMatch[1];
  if (!/\bsrc=["'][^"']+["']/i.test(attrs)) throw new Error('<img> missing src attribute.');
  const altMatch = attrs.match(/\balt=["']([^"']*)["']/i);
  if (!altMatch || altMatch[1].trim().length === 0) {
    throw new Error('<img> missing descriptive non-empty alt attribute for accessibility.');
  }
});

assertTest('Fragment navigation link (#id) matches target element id', 'Navigation', () => {
  const fragMatch = html.match(/<a[^>]*href=["']#([a-zA-Z0-9_-]+)["']/i);
  if (!fragMatch) throw new Error('Missing fragment navigation link (<a href="#...">).');
  const targetId = fragMatch[1];
  const targetRegex = new RegExp(`\\bid=["']${targetId}["']`, 'i');
  if (!targetRegex.test(html)) {
    throw new Error(`Fragment link target #${targetId} not found in any element id.`);
  }
});

assertTest('External link uses https:// protocol and security rel attribute', 'Navigation', () => {
  const extMatch = html.match(/<a[^>]*href=["']https:\/\/[^"']+["'][^>]*>/i);
  if (!extMatch) throw new Error('Missing external link starting with https://.');
  if (/target=["']_blank["']/i.test(extMatch[0])) {
    if (!/rel=["'][^"']*noopener/i.test(extMatch[0])) {
      throw new Error('External link with target="_blank" must include rel="noopener" or rel="noreferrer".');
    }
  }
});

// Suite 4: Tabular Data
console.log(`\n${ANSI.cyan}[SUITE 4: Data Table Accessibility]${ANSI.reset}`);
assertTest('Table contains <caption> for screen reader context', 'Table', () => {
  if (!/<table[\s\S]*?<\/table>/i.test(html)) throw new Error('Missing <table> element.');
  if (!/<caption[\s>][\s\S]*?<\/caption>/i.test(html)) {
    throw new Error('Table is missing <caption> element.');
  }
});

assertTest('Table structure contains <thead>, <tbody>, and <th scope="col">', 'Table', () => {
  if (!/<thead[\s>]/i.test(html)) throw new Error('Table is missing <thead> element.');
  if (!/<tbody[\s>]/i.test(html)) throw new Error('Table is missing <tbody> element.');
  if (!/<th[^>]*scope=["']col["']/i.test(html)) {
    throw new Error('Table header cells must have scope="col" attribute.');
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
  console.log(`${ANSI.yellow}⚠ PENDING: ${failed} checks remaining. Review the errors above and update index.html.${ANSI.reset}`);
}
console.log(`${ANSI.bold}=================================================================\n${ANSI.reset}`);

process.exit(failed === 0 ? 0 : 1);
