/**
 * Demo 1: DOM Selection & Traversal
 * Reference Solution (Instruktur)
 */

// 1. getElementById: Memilih elemen tunggal berdasarkan atribut id
const judul = document.getElementById("judulUtama");
if (judul) {
  console.log("1. getElementById ->", judul.textContent);
}

// 2. querySelector: Memilih elemen pertama dengan CSS selector
const deskripsi = document.querySelector(".deskripsi");
if (deskripsi) {
  console.log("2. querySelector ->", deskripsi.textContent);
}

// 3. querySelectorAll: Memilih seluruh elemen dengan CSS selector (menghasilkan NodeList)
const semuaRekening = document.querySelectorAll(".item-rekening");
console.log(`3. querySelectorAll -> Ditemukan ${semuaRekening.length} rekening:`);
semuaRekening.forEach((item, index) => {
  const tipe = item.getAttribute("data-tipe");
  console.log(`   [${index + 1}] Tipe: ${tipe} | Teks: ${item.textContent}`);
});

// 4. Hubungan Node (Parent & Sibling Traversal)
if (semuaRekening.length > 0) {
  const itemPertama = semuaRekening[0];
  console.log("4. Parent Node ->", itemPertama.parentElement.id); // daftarRekening
  console.log("5. Next Sibling ->", itemPertama.nextElementSibling?.textContent);
}
