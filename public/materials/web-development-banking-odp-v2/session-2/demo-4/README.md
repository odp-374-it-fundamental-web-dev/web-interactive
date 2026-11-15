# Demo 4: Navigasi Terminal & Git Workflow CLI

## 1. Overview
Demo ini mencakup perintah navigasi terminal (Command Line Interface / CLI) dan alur kerja Version Control System (VCS) berbasis Git untuk repositori perbankan:
- Perintah navigasi direktori: `pwd`, `ls`, `cd`, `mkdir`, `touch`, `cp`, `rm`.
- Konfigurasi identitas Git: `git config --global user.name "..."` dan `git config --global user.email "..."`.
- Siklus commit lokal: `git init`, `git status`, `git add .`, `git commit -m "feat: ..."`.
- Perlindungan berkas sensitif melalui `.gitignore`: Mencegah kebocoran berkas lingkungan (`.env`), kunci kredensial (`*.key`, `*.pem`), dan berkas sampah sistem operasi (`.DS_Store`, `Thumbs.db`).

## 2. Learning Objectives
- Terampil bernavigasi dan mengelola berkas menggunakan CLI terintegrasi di VS Code.
- Memahami konsep Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`) untuk audit trail yang rapi dalam rekayasa perangkat lunak perbankan.
- Mencegah insiden kebocoran rahasia (*secret leak*) ke repository publik melalui konfigurasi `.gitignore` sejak commit awal.
