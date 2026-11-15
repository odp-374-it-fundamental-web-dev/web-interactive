# Solusi: Percabangan switch-case

## Catatan Instruktur
- Pada JavaScript, perbandingan di dalam `switch` menggunakan perbandingan identitas ketat (`===`), bukan `==`. Oleh karena itu, tipe data harus cocok secara persis (mis. `case 1:` tidak akan cocok dengan string `"1"`).
- Fall-through yang disengaja (*intentional fall-through*) dapat membuat kode sangat ringkas ketika beberapa status error memerlukan penanganan yang sama, namun wajib diberi komentar penjelasan agar tidak dianggap sebagai bug kelalaian lupa menulis `break`.
