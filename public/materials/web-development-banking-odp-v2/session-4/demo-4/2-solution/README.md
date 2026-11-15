# Solusi: Mobile-First Media Queries & Custom CSS Overrides

## Catatan Instruktur
- Urutan link CSS pada `<head>`:
  1. `<link href=".../bootstrap.min.css" rel="stylesheet">` (Fondasi Framework)
  2. `<link href="styles/custom.css" rel="stylesheet">` (Override Kustom)
  Dengan urutan ini, selector kustom dengan Specificity yang sama akan menang karena dideklarasikan terakhir dalam Cascade.
- Pendekatan **Mobile-First** (`min-width`):
  Aturan dasar di luar media query menarget layar paling sempit (smartphone). Ketika layar melebar melampaui `768px`, aturan `@media (min-width: 768px)` dieksekusi untuk merapikan tata letak tablet dan desktop. Ini menghasilkan kode CSS yang jauh lebih terstruktur dan ringan.
