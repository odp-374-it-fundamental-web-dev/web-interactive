/**
 * Demo 4: Race Condition Guard & Double-Submit Prevention
 * Reference Solution (Instruktur)
 */

const btn = document.querySelector("#btnSpam");
const logArea = document.querySelector("#logArea");
let requestCount = 0;

async function prosesRequest() {
  // 1. Guard Clause: Jika proses sedang berjalan, tolak klik baru seketika!
  if (btn.disabled) {
    console.warn("Permintaan diabaikan: request sebelumnya masih berlangsung.");
    return;
  }

  // 2. Kunci tombol seketika sebelum async boundary
  btn.disabled = true;
  requestCount++;
  const id = requestCount;
  logArea.textContent = `[${new Date().toLocaleTimeString()}] Request #${id} sedang diproses di server... (Tombol TERKUNCI)`;

  try {
    // 3. Simulasi operasi asinkron perbankan selama 1.2 detik
    await new Promise((resolve) => setTimeout(resolve, 1200));
    logArea.textContent += `\n[${new Date().toLocaleTimeString()}] ✔ Request #${id} BERHASIL diverifikasi!`;
  } catch (err) {
    logArea.textContent += `\n[${new Date().toLocaleTimeString()}] ✖ Request #${id} GAGAL: ${err.message}`;
  } finally {
    // 4. Buka kembali tombol di blok finally
    btn.disabled = false;
    logArea.textContent += `\n[${new Date().toLocaleTimeString()}] ℹ Tombol siap menerima request berikutnya.`;
  }
}

btn.addEventListener("click", prosesRequest);
