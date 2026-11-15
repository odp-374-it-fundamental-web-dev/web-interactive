/**
 * Demo 4: Race Condition Guard (Starter)
 */

const btn = document.querySelector("#btnSpam");
const logArea = document.querySelector("#logArea");
let requestCount = 0;

async function prosesRequest() {
  // TODO 1: Pasang guard clause di baris pertama!
  // Jika btn.disabled === true, return langsung untuk mencegah eksekusi ganda!

  requestCount++;
  const id = requestCount;
  logArea.textContent += `\n[Request #${id}] Mulai diproses...`;

  // TODO 2: Set btn.disabled = true sebelum operasi async

  // Simulasi operasi async 1 detik
  await new Promise((r) => setTimeout(r, 1000));

  logArea.textContent += `\n[Request #${id}] SELESAI.`;

  // TODO 3: Pulihkan btn.disabled = false pada blok finally
}

btn.addEventListener("click", prosesRequest);
