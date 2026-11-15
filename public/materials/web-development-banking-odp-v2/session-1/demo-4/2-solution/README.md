# Solusi: Tabel Data Terstruktur

## Catatan Instruktur
- Elemen `<caption>` menyediakan ringkasan kontekstual mengenai isi tabel yang dibaca pertama kali oleh screen reader saat pengguna fokus pada tabel.
- Pemisahan `<thead>` dan `<tbody>` membedakan metadata kolom dari record data, serta memungkinkan browser mengulang header saat dokumen dicetak (*print pagination*).
- Atribut `scope="col"` secara eksplisit mengasosiasikan sel header kolom dengan sel data di bawahnya, menghilangkan ambiguitas navigasi pada tabel kompleks.
