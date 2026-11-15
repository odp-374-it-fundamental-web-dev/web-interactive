# Solusi: Boolean Expressions & Truthy / Falsy

## Catatan Instruktur
- Dalam aplikasi perbankan, penggunaan operator perbandingan longgar `==` adalah anti-pattern yang dilarang keras karena coercion implisit dapat menyebabkan kondisi keamanan terlewati (mis. `0 == ""` menghasilkan `true`).
- Ingat bahwa `[]` (array kosong) dan `{}` (objek kosong) bernilai **Truthy**. Memeriksa apakah array kosong tidak bisa dengan `if (arr)`, melainkan harus dengan memeriksa panjangnya `if (arr.length === 0)`.
