#!/usr/bin/env bash
# verify-git.sh - Verifikasi Kesiapan Repository Git Solusi
set -e

echo "=== VERIFIKASI PERLINDUNGAN BERKAS & GITIGNORE ==="
if [ ! -f ".gitignore" ]; then
  echo "✖ ERROR: .gitignore tidak ditemukan!"
  exit 1
fi

echo "1. Memeriksa aturan penolakan berkas sensitif:"
for pattern in ".env" ".DS_Store" "node_modules"; do
  if grep -q "$pattern" .gitignore; then
    echo "  ✔ Pola '$pattern' terlindungi di .gitignore"
  else
    echo "  ✖ Pola '$pattern' belum terdaftar di .gitignore!"
    exit 1
  fi
done

echo -e "\n✔ SELURUH ATURAN GITIGNORE VALID & AMAN UNTUK LINGKUNGAN PERBANKAN."
