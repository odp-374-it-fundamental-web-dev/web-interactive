# Solusi: Jenis Input & Validasi HTML5

## Catatan Instruktur
- Atribut `required` mencegah form disubmit jika field dalam kondisi kosong atau hanya berisi spasi kosong pada browser modern.
- Atribut `type="email"` secara otomatis memicu validasi pola alamat surel (memeriksa adanya karakter `@` dan nama domain).
- Pada radio button, atribut `name` yang identik (`name="kategori_penanya"`) membentuk satu kelompok (*radio group*), sehingga memilih salah satu otomatis membatalkan pilihan yang lain (*mutually exclusive*).
- Tag `<fieldset>` dan `<legend>` mengelompokkan opsi radio secara aksesibel sehingga pembaca layar membacakan konteks pertanyaan sebelum membacakan pilihan tombol radio.
