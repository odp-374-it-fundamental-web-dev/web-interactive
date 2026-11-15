/**
 * Demo 4: Deployment Readiness Checker
 * Starter File (Trainee Exercise)
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const htmlFile = path.resolve(__dirname, '..', 'index.html');

console.log("=== PEMERIKSAAN PATH DEPLOYMENT (STARTER) ===");
const html = fs.readFileSync(htmlFile, 'utf8');

// TODO 1: Periksa apakah html masih memuat tautan absolut root (href="/..." atau src="/...")
const hasAbsoluteRoot = /href=["']\/[^"']+/i.test(html) || /src=["']\/[^"']+/i.test(html);

if (hasAbsoluteRoot) {
  console.log("✖ PERINGATAN: Ditemukan path absolut root ('/styles...' atau '/scripts...') yang akan 404 di GitHub Pages!");
} else {
  console.log("✔ Path aman menggunakan relative path.");
}
