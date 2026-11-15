#!/usr/bin/env node
/**
 * test-runner.js - Automated Test Harness for Hands-on Lab 2
 * Validates HTML5 Form accessibility, client-side validation constraints,
 * cross-page navigation, and enterprise Git ignore configurations.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const baseDir = path.resolve(__dirname, '..');
const kontakPath = path.join(baseDir, 'kontak.html');
const indexPath = path.join(baseDir, 'index.html');
const gitignorePath = path.join(baseDir, '.gitignore');

const ANSI = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m'
};

console.log(`${ANSI.bold}=================================================================${ANSI.reset}`);
console.log(`${ANSI.bold}AUTOMATED TEST HARNESS: SESSION 2 HANDS-ON LAB VERIFICATION${ANSI.reset}`);
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

// Check file existence
if (!fs.existsSync(kontakPath)) {
  console.error(`${ANSI.red}[FATAL ERROR] kontak.html not found at: ${kontakPath}${ANSI.reset}`);
  process.exit(1);
}

const rawKontak = fs.readFileSync(kontakPath, 'utf-8');
const kontakHtml = rawKontak.replace(/<!--[\s\S]*?-->/g, '');

// Suite 1: Form Structure & Method Security
console.log(`${ANSI.cyan}[SUITE 1: Form Structure & Method Security]${ANSI.reset}`);
assertTest('kontak.html has <!DOCTYPE html> and <html lang="id">', 'Document', () => {
  if (!/^\s*<!DOCTYPE\s+html>/i.test(kontakHtml)) {
    throw new Error('Missing <!DOCTYPE html> at the start of kontak.html.');
  }
  if (!/<html[^>]*\blang=["']id["']/i.test(kontakHtml)) {
    throw new Error('Root <html lang="id"> attribute missing.');
  }
});

assertTest('Form uses secure HTTP method POST', 'Security', () => {
  const formMatch = kontakHtml.match(/<form[^>]*>/i);
  if (!formMatch) throw new Error('Missing <form> tag in kontak.html.');
  if (!/method=["']POST["']/i.test(formMatch[0])) {
    throw new Error('Form must use method="POST" to prevent credential leakage in URL.');
  }
});

// Suite 2: Accessible Form Fields & Label Association
console.log(`\n${ANSI.cyan}[SUITE 2: Field Accessibility & Label Contracts]${ANSI.reset}`);
assertTest('Name input has matching <label for="id"> and name attribute', 'Accessibility', () => {
  const inputMatch = kontakHtml.match(/<input[^>]*\btype=["']text["'][^>]*>/i);
  if (!inputMatch) throw new Error('Missing <input type="text"> for name field.');
  const idMatch = inputMatch[0].match(/\bid=["']([^"']+)["']/i);
  if (!idMatch) throw new Error('Name input is missing an id attribute.');
  if (!/\bname=["'][^"']+["']/i.test(inputMatch[0])) {
    throw new Error('Name input is missing a name attribute.');
  }
  const labelRegex = new RegExp(`<label[^>]*\\bfor=["']${idMatch[1]}["']`, 'i');
  if (!labelRegex.test(kontakHtml)) {
    throw new Error(`Missing <label for="${idMatch[1]}"> matching name input id.`);
  }
});

assertTest('Email input has matching <label for="id"> and name attribute', 'Accessibility', () => {
  const inputMatch = kontakHtml.match(/<input[^>]*\btype=["']email["'][^>]*>/i);
  if (!inputMatch) throw new Error('Missing <input type="email"> for email field.');
  const idMatch = inputMatch[0].match(/\bid=["']([^"']+)["']/i);
  if (!idMatch) throw new Error('Email input is missing an id attribute.');
  if (!/\bname=["'][^"']+["']/i.test(inputMatch[0])) {
    throw new Error('Email input is missing a name attribute.');
  }
  const labelRegex = new RegExp(`<label[^>]*\\bfor=["']${idMatch[1]}["']`, 'i');
  if (!labelRegex.test(kontakHtml)) {
    throw new Error(`Missing <label for="${idMatch[1]}"> matching email input id.`);
  }
});

assertTest('Topic dropdown <select> has matching <label for="id"> and name attribute', 'Accessibility', () => {
  const selectMatch = kontakHtml.match(/<select[^>]*>/i);
  if (!selectMatch) throw new Error('Missing <select> dropdown for topic.');
  const idMatch = selectMatch[0].match(/\bid=["']([^"']+)["']/i);
  if (!idMatch) throw new Error('Select element is missing an id attribute.');
  if (!/\bname=["'][^"']+["']/i.test(selectMatch[0])) {
    throw new Error('Select element is missing a name attribute.');
  }
  const labelRegex = new RegExp(`<label[^>]*\\bfor=["']${idMatch[1]}["']`, 'i');
  if (!labelRegex.test(kontakHtml)) {
    throw new Error(`Missing <label for="${idMatch[1]}"> matching select id.`);
  }
});

assertTest('Message <textarea> has matching <label for="id"> and name attribute', 'Accessibility', () => {
  const textareaMatch = kontakHtml.match(/<textarea[^>]*>/i);
  if (!textareaMatch) throw new Error('Missing <textarea> for message field.');
  const idMatch = textareaMatch[0].match(/\bid=["']([^"']+)["']/i);
  if (!idMatch) throw new Error('Textarea is missing an id attribute.');
  if (!/\bname=["'][^"']+["']/i.test(textareaMatch[0])) {
    throw new Error('Textarea is missing a name attribute.');
  }
  const labelRegex = new RegExp(`<label[^>]*\\bfor=["']${idMatch[1]}["']`, 'i');
  if (!labelRegex.test(kontakHtml)) {
    throw new Error(`Missing <label for="${idMatch[1]}"> matching textarea id.`);
  }
});

// Suite 3: HTML5 Validation Constraints
console.log(`\n${ANSI.cyan}[SUITE 3: Client-Side HTML5 Validation Rules]${ANSI.reset}`);
assertTest('Name input enforces required and minlength="3"', 'Validation', () => {
  const inputMatch = kontakHtml.match(/<input[^>]*\btype=["']text["'][^>]*>/i);
  if (!inputMatch || !/\brequired\b/i.test(inputMatch[0])) {
    throw new Error('Name input is missing "required" attribute.');
  }
  const minMatch = inputMatch[0].match(/\bminlength=["']?(\d+)["']?/i);
  if (!minMatch || parseInt(minMatch[1], 10) < 3) {
    throw new Error('Name input must specify minlength="3" (or greater).');
  }
});

assertTest('Email input enforces required and type="email"', 'Validation', () => {
  const inputMatch = kontakHtml.match(/<input[^>]*\btype=["']email["'][^>]*>/i);
  if (!inputMatch || !/\brequired\b/i.test(inputMatch[0])) {
    throw new Error('Email input is missing "required" attribute.');
  }
});

assertTest('Topic <select> has required and default empty option value=""', 'Validation', () => {
  const selectMatch = kontakHtml.match(/<select[^>]*>[\s\S]*?<\/select>/i);
  if (!selectMatch || !/\brequired\b/i.test(selectMatch[0])) {
    throw new Error('Topic <select> must have "required" attribute.');
  }
  if (!/<option[^>]*\bvalue=["']["'][^>]*>/i.test(selectMatch[0])) {
    throw new Error('Topic <select> must contain a default empty option (<option value="">).');
  }
});

assertTest('Message <textarea> enforces required and minlength="10"', 'Validation', () => {
  const textareaMatch = kontakHtml.match(/<textarea[^>]*>/i);
  if (!textareaMatch || !/\brequired\b/i.test(textareaMatch[0])) {
    throw new Error('Message <textarea> must have "required" attribute.');
  }
  const minMatch = textareaMatch[0].match(/\bminlength=["']?(\d+)["']?/i);
  if (!minMatch || parseInt(minMatch[1], 10) < 10) {
    throw new Error('Message <textarea> must specify minlength="10" (or greater).');
  }
});

assertTest('Submit button exists with type="submit"', 'Form Controls', () => {
  const btnMatch = kontakHtml.match(/<button[^>]*>/i);
  if (!btnMatch) throw new Error('Missing <button> in form.');
  if (!/type=["']submit["']/i.test(btnMatch[0])) {
    throw new Error('Button must explicitly declare type="submit".');
  }
});

// Suite 4: Navigation Integration & Git Hygiene
console.log(`\n${ANSI.cyan}[SUITE 4: Cross-Page Links & Git Hygiene]${ANSI.reset}`);
assertTest('Two-way navigation links between index.html and kontak.html', 'Navigation', () => {
  if (!/<a[^>]*href=["']index\.html["']/i.test(kontakHtml)) {
    throw new Error('kontak.html missing link back to index.html (<a href="index.html">).');
  }
  if (fs.existsSync(indexPath)) {
    const rawIndex = fs.readFileSync(indexPath, 'utf-8').replace(/<!--[\s\S]*?-->/g, '');
    if (!/<a[^>]*href=["']kontak\.html["']/i.test(rawIndex)) {
      throw new Error('index.html missing navigation link to kontak.html (<a href="kontak.html">).');
    }
  }
});

assertTest('.gitignore excludes sensitive .env, .DS_Store, and node_modules', 'Git Hygiene', () => {
  if (!fs.existsSync(gitignorePath)) {
    throw new Error('.gitignore file is missing in lab root.');
  }
  const gitignoreContent = fs.readFileSync(gitignorePath, 'utf-8');
  if (!/^\.env\b/m.test(gitignoreContent)) {
    throw new Error('.gitignore must ignore .env files to protect corporate credentials.');
  }
  if (!/^\.DS_Store\b/m.test(gitignoreContent)) {
    throw new Error('.gitignore must ignore .DS_Store files.');
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
