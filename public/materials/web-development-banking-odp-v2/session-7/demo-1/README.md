# Demo 1: Function Declarations, Expressions, & Arrow Functions

## Deskripsi Singkat
Modul demo ini membandingkan 3 sintaks pembuatan fungsi di JavaScript modern:
1. **Function Declaration**: `function namaFungsi(param) { ... }` (di-hoist, cocok untuk fungsi umum/utilitas global).
2. **Function Expression**: `const namaFungsi = function(param) { ... }` (tidak di-hoist, disimpan dalam variabel `const`).
3. **Arrow Function**: `const namaFungsi = (param) => ...` (sintaks ringkas ES6, implicit return vs block body, leksikal `this`).

## Konsep Kunci
- **Implicit Return vs Block Body**:
  ```js
  // Implicit return (1 baris tanpa kurung kurawal)
  const tambah = (a, b) => a + b;

  // Implicit return Object Literal (wajib dibungkus tanda kurung biasa)
  const buatObjek = (id, nominal) => ({ id, nominal });

  // Block body (memerlukan kata kunci return eksplisit)
  const hitung = (a, b) => {
    const hasil = a + b;
    return hasil;
  };
  ```
- **Scope & Parameters**: Parameter yang tidak diisi bernilai `undefined`. Nilai default parameter dapat didefinisikan secara langsung (`(nominal, kurs = 1)`).

## Instruksi Menjalankan
```bash
# Jalankan solusi referensi
node slides-materials/web-development-banking-odp-v2/session-7/demo-1/2-solution/functions.js
```
