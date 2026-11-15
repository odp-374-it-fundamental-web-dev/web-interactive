# Solusi: Perulangan & Tracing Eksekusi

## Catatan Instruktur
- `for...of` jauh lebih aman daripada loop `for (let i = 0; i <= arr.length; i++)` yang sering mengalami error mengakses indeks di luar batas array (`undefined`).
- Perintah `continue` meningkatkan keterbacaan dengan mengeliminasi indentasi tambahan: kita langsung mengabaikan data anomali di awal blok iterasi (*guard within loop*).
- Pada loop `while`, pastikan variabel terminator (`attemptIndex++`) selalu bergerak menuju kondisi selesai di setiap cabang iterasi agar loop tidak berjalan tanpa henti.
