# Starter: Metode GET vs POST & Keamanan Perbankan

## Instruksi Latihan
Buka `index.html` dan perhatikan bahaya formulir login simulasi yang dikonfigurasi dengan `method="GET"`:
1. Jalankan form di browser, masukkan data simulasi fiktif (misal username `odp_user` dan password fiktif `latihan123`), lalu klik Masuk.
2. Perhatikan address bar browser: apakah kata sandi muncul di URL? Mengapa hal ini merupakan pelanggaran keamanan berat dalam perbankan?
3. Ubah atribut form menjadi `method="POST"`.
4. Ulangi pengiriman dan perhatikan perbedaannya pada address bar browser.
5. Tambahkan `autocomplete="off"` pada input kata sandi sensitif.
