# Solusi: Percabangan if / else if / else & Guard Clauses

## Catatan Instruktur
- Pola Guard Clauses membalik kondisi kegagalan: alih-alih mengecek `if (statusAkun === "AKTIF")`, kita langsung mengeliminasi kasus kegagalan `if (statusAkun !== "AKTIF") return "AKUN_TERBLOKIR"`.
- Manfaat: Kode utama (alur sukses) berada di baris paling bawah tanpa menjorok ke dalam piramida kurung kurawal, membuat kode mudah dibaca, di-*review*, dan dimodifikasi di masa depan.
