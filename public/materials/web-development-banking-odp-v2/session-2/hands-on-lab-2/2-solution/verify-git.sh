#!/usr/bin/env bash
# verify-git.sh - Verifikasi Kepatuhan Repositori Git Lab 2
set -e

echo "=== VERIFIKASI KEBERSIHAN REPOSITORI GIT ==="

if [ ! -f ".gitignore" ]; then
  echo "✖ ERROR: .gitignore tidak ditemukan di folder lab!"
  exit 1
fi

echo "1. Memeriksa keberadaan file yang wajib ada:"
for file in "index.html" "kontak.html" "pendaftaran.html" ".gitignore"; do
  if [ -f "$file" ]; then
    echo "  ✔ File '$file' ditemukan."
  else
    echo "  ✖ File '$file' hilang!"
    exit 1
  fi
done

echo -e "\n2. Memeriksa proteksi berkas rahasia di .gitignore:"
for pattern in "^\.env" "^\.DS_Store" "^node_modules"; do
  if grep -E -q "$pattern" .gitignore; then
    echo "  ✔ Aturan '$pattern' terlindungi."
  else
    echo "  ✖ Aturan '$pattern' hilang dari .gitignore!"
    exit 1
  fi
done

echo -e "\n✔ SELURUH KRITERIA PENILAIAN REPOSITORI TERPENUHI (100%)."
