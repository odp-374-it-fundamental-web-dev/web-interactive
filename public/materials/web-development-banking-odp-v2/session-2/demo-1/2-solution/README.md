# Solusi: Anatomi Form & Hubungan Label-Input

## Catatan Instruktur
- Atribut `for` pada `<label>` harus cocok secara persis (case-sensitive) dengan atribut `id` pada elemen `<input>`. Saat label diklik, browser otomatis memindahkan kursor fokus ke dalam input tersebut.
- Atribut `name` merupakan *kunci* (key) dalam payload data HTTP request (misal `nama_lengkap=Budi&email_kantor=budi@bni.co.id`). Tanpa atribut `name`, data input tersebut diabaikan oleh browser dan tidak terkirim sama sekali ke server.
- Default tipe tombol di dalam `<form>` umumnya adalah `submit`, namun menyatakannya secara eksplisit (`type="submit"`) merupakan *best practice* untuk menghindari perilaku tak terduga.
