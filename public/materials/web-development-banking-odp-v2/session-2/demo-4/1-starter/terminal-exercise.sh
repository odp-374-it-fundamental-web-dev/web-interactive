#!/usr/bin/env bash
# terminal-exercise.sh - Skrip Latihan Perintah CLI & Simulasi Git
set -e

echo "=== LATIHAN CLI & GIT WORKFLOW ==="
echo "1. Direktori aktif saat ini:"
pwd

echo -e "\n2. Daftar berkas di dalam folder:"
ls -la

echo -e "\n3. Status berkas sensitif:"
if [ -f ".gitignore" ]; then
  if grep -q "^\.env" .gitignore 2>/dev/null; then
    echo "✔ AMAN: Berkas .env sudah tercatat di dalam .gitignore."
  else
    echo "✖ PERINGATAN: Berkas .gitignore ada, tetapi belum mengabaikan .env!"
  fi
else
  echo "✖ PERINGATAN KRITIS: Berkas .gitignore belum dibuat! Berkas .env berisiko terunggah."
fi

echo -e "\nSelesai. Buat berkas .gitignore untuk melanjutkan."
