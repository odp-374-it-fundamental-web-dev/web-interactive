/**
 * Demo 4: Deployment Readiness Checker
 * Reference Solution (Instruktur)
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const htmlFile = path.resolve(__dirname, '..', 'index.html');

console.log("=== CHECKLIST KESIAPAN DEPLOYMENT GITHUB PAGES (SOLUSI) ===");
const html = fs.readFileSync(htmlFile, 'utf8');

// 1. Pemeriksaan Relative Path
const hasAbsoluteRoot = /href=["']\/[^\/]/i.test(html) || /src=["']\/[^\/]/i.test(html);
if (!hasAbsoluteRoot) {
  console.log("1. ✔ Relative Path: Aman. Tidak ada tautan mutlak root ('/styles...')");
} else {
  console.log("1. ✖ Relative Path: Gagal. Ditemukan tautan absolut root.");
}

// 2. Pemeriksaan Tag Wajib
const hasViewport = /<meta[^>]+viewport/i.test(html);
const hasTitle = /<title>[^<]+<\/title>/i.test(html);
console.log(`2. ✔ Meta Viewport & Title: ${hasViewport && hasTitle ? "Lengkap" : "Kurang"}`);

// 3. Catatan Origin LocalStorage
console.log(`3. ℹ Pengingat Storage: Origin 'https://<username>.github.io' terisolasi dari localhost.`);
