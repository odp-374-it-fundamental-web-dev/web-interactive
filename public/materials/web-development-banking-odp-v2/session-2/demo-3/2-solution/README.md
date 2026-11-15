# Solusi: Metode GET vs POST & Keamanan Perbankan

## Catatan Instruktur
- Saat formulir menggunakan `method="GET"`, browser merangkai data input ke URL (`index.html?user_id=trainee01&user_pin=latihan123`).
  - Ini mengakibatkan kredensial tersimpan di histori browser klien, mudah terlihat oleh orang di sekitar layar (*shoulder surfing*), dan tersimpan dalam plaintext log web server perantara/proxy.
- Dengan `method="POST"`, data dikemas di dalam pesan HTTP request body (`Content-Type: application/x-www-form-urlencoded` atau `multipart/form-data`), sehingga URL browser tetap bersih.
- Standar ISO 27001 dan regulasi perbankan OJK mewajibkan seluruh pengiriman data otentikasi menggunakan metode `POST` melalui jalur terenkripsi TLS/HTTPS.
