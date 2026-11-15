# Demo 2: Early Return Pattern & Multi-Path Authentication Logic (`checkLogin`)

## Deskripsi Singkat
Modul demo ini membedah implementasi fungsi `checkLogin(username, password)` sesuai materi Slide 15–16. Demo ini menekankan pentingnya pengembalian nilai (`return`) alih-alih sekadar mencetak dengan `console.log()`, serta pola *Guard Clauses* untuk memeriksa seluruh jalur eksekusi:
1. Input bukan string (`typeof !== "string"`) -> mengembalikan `"input salah"`.
2. Kredensial tidak cocok (`username !== "Kosasih"` atau `password !== "k0s4s1h"`) -> mengembalikan `"coba lagi"`.
3. Kredensial valid dan cocok -> mengembalikan `"login berhasil"`.

## Spesifikasi & Jalur Return
| No | Parameter `(username, password)` | Tipe Data Valid? | Kredensial Cocok? | Output Fungsi (`return`) |
| :--- | :--- | :--- | :--- | :--- |
| 1 | `(123, "k0s4s1h")` | Tidak (number, string) | N/A | `"input salah"` |
| 2 | `("Kosasih", 9999)` | Tidak (string, number) | N/A | `"input salah"` |
| 3 | `("Kosasih", "salah")` | Ya (string, string) | Tidak | `"coba lagi"` |
| 4 | `("admin", "k0s4s1h")` | Ya (string, string) | Tidak | `"coba lagi"` |
| 5 | `("Kosasih", "k0s4s1h")` | Ya (string, string) | Ya | `"login berhasil"` |

## Instruksi Menjalankan
```bash
# Jalankan solusi referensi
node slides-materials/web-development-banking-odp-v2/session-7/demo-2/2-solution/auth.js
```
