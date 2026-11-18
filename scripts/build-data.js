import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootMaterialsDir = path.resolve(__dirname, '../../../slides-materials/web-development-banking-odp-v2');
const outputDir = path.resolve(__dirname, '../src/data');
const outputFile = path.resolve(outputDir, 'materials-data.json');

const sessionMeta = {
  1: {
    phase: "Fase 1: HTML5, Git & CSS Modern",
    title: "Web Fundamentals & Semantic HTML5",
    tagline: "Arsitektur dokumen HTML5, semantik landmarks, tautan aman, dan data table.",
    hours: 3.5,
    slides: 50
  },
  2: {
    phase: "Fase 1: HTML5, Git & CSS Modern",
    title: "HTML Forms, Git & GitHub",
    tagline: "Formulir aksesibel, validasi HTML5, keamanan POST vs GET, dan Git CLI.",
    hours: 3.5,
    slides: 64
  },
  3: {
    phase: "Fase 1: HTML5, Git & CSS Modern",
    title: "CSS Fundamentals & Modern Layouts",
    tagline: "Universal box-sizing reset, Flexbox navigasi 1D, dan CSS Grid responsif 2D.",
    hours: 3.5,
    slides: 86
  },
  4: {
    phase: "Fase 1: HTML5, Git & CSS Modern",
    title: "Responsive Website with Bootstrap",
    tagline: "Bootstrap 5.3.8 CDN, komponen UI perbankan, 12-kolom grid, dan mobile-first media query.",
    hours: 3.5,
    slides: 84
  },
  5: {
    phase: "Fase 2: JavaScript Modern, Logika & DOM",
    title: "JavaScript Fundamentals",
    tagline: "Runtime browser vs Node.js, konversi eksplisit Number(), dan pemodelan objek/array.",
    hours: 3.5,
    slides: 51
  },
  6: {
    phase: "Fase 2: JavaScript Modern, Logika & DOM",
    title: "Conditional & Looping",
    tagline: "Strict equality ===, 8 nilai Falsy, Guard Clauses, switch-case, dan loop perbankan.",
    hours: 3.5,
    slides: 47
  },
  7: {
    phase: "Fase 2: JavaScript Modern, Logika & DOM",
    title: "Functions & Data Processing",
    tagline: "Arrow functions, early return checkLogin, callbacks, dan array methods (filter, map, reduce).",
    hours: 3.5,
    slides: 42
  },
  8: {
    phase: "Fase 2: JavaScript Modern, Logika & DOM",
    title: "DOM, Events & Form Interaction",
    tagline: "DOM traversal, rendering aman anti-XSS textContent, replaceChildren(), dan Milestone 2.",
    hours: 3.5,
    slides: 44
  },
  9: {
    phase: "Fase 3: Async, Storage, Quality & Capstone",
    title: "Asynchronous JavaScript & REST APIs",
    tagline: "Event Loop, Promise, async/await, getJSON() error guard, UI State Machine, dan Milestone 3.",
    hours: 3.5,
    slides: 43
  },
  10: {
    phase: "Fase 3: Async, Storage, Quality & Capstone",
    title: "Array Search, Sorting & LocalStorage",
    tagline: "Array find/filter, non-mutating sort, defensif JSON localStorage, dan Milestone 4.",
    hours: 3.5,
    slides: 38
  },
  11: {
    phase: "Fase 3: Async, Storage, Quality & Capstone",
    title: "Debugging, Testing & Project Integration",
    tagline: "Root-cause analysis, pure unit tests nextHistory, double-submit guard, dan Milestone 5.",
    hours: 3.5,
    slides: 39
  },
  12: {
    phase: "Fase 3: Async, Storage, Quality & Capstone",
    title: "Capstone Mini Project & Deployment",
    tagline: "Kalkulator kurs Rupiah Frankfurter API, validasi input, status UI, riwayat localStorage, dan deployment daring.",
    hours: 3.5,
    slides: 39
  }
};

function getFileLanguage(fileName) {
  const ext = path.extname(fileName).toLowerCase();
  if (ext === '.html') return 'html';
  if (ext === '.css') return 'css';
  if (ext === '.js') return 'javascript';
  if (ext === '.json') return 'json';
  if (ext === '.md') return 'markdown';
  if (ext === '.sh') return 'bash';
  if (ext === '.svg') return 'svg';
  if (ext === '.txt') return 'text';
  return 'text';
}

function readDirRecursive(dirPath, relBase = '') {
  const results = [];
  if (!fs.existsSync(dirPath)) return results;

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    const relPath = relBase ? `${relBase}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      results.push(...readDirRecursive(fullPath, relPath));
    } else {
      try {
        const content = fs.readFileSync(fullPath, 'utf8');
        results.push({
          name: entry.name,
          relativePath: relPath,
          content,
          language: getFileLanguage(entry.name),
          size: content.length
        });
      } catch (e) {
        // Skip binary files
      }
    }
  }
  return results;
}

function parseMarkdownTitle(mdContent) {
  if (!mdContent) return '';
  const lines = mdContent.split('\n');
  for (const line of lines) {
    if (line.startsWith('# ')) {
      return line.replace('# ', '').trim();
    }
  }
  return '';
}

const data = {
  metadata: {
    title: "Web Development Fundamentals — BNI ODP IT 2026",
    company: "Hacktiv8 Indonesia & PT Bank Negara Indonesia (Persero) Tbk",
    totalSessions: 12,
    totalHours: 42,
    totalDemos: 48,
    totalLabs: 12,
    buildTime: new Date().toISOString()
  },
  phases: [
    {
      id: "phase-1",
      name: "Fase 1: HTML5, Git & CSS Modern",
      sessions: [1, 2, 3, 4],
      focus: "Membangun fondasi web semantik berstandar WCAG 2.1 AA, manajemen source code Git, dan layout modern responsif."
    },
    {
      id: "phase-2",
      name: "Fase 2: JavaScript Modern, Logika & DOM",
      sessions: [5, 6, 7, 8],
      focus: "Penguasaan logika komputasi finansial, manipulasi array fungsional, dan manipulasi DOM interaktif anti-XSS."
    },
    {
      id: "phase-3",
      name: "Fase 3: Async, Storage, Quality & Capstone",
      sessions: [9, 10, 11, 12],
      focus: "Integrasi REST API asinkron, persistensi client-side, pengujian unit fungsi murni, dan rilis Capstone Mini Project."
    }
  ],
  sessions: []
};

for (let s = 1; s <= 12; s++) {
  const sessionDir = path.join(rootMaterialsDir, `session-${s}`);
  const meta = sessionMeta[s] || { phase: "Unknown", title: `Session ${s}`, tagline: "", hours: 3.5, slides: 40 };

  const sessionReadmePath = path.join(sessionDir, 'README.md');
  const sessionReadme = fs.existsSync(sessionReadmePath) ? fs.readFileSync(sessionReadmePath, 'utf8') : '';

  const demos = [];
  for (let d = 1; d <= 4; d++) {
    const demoDir = path.join(sessionDir, `demo-${d}`);
    const demoReadmePath = path.join(demoDir, 'README.md');
    const demoReadme = fs.existsSync(demoReadmePath) ? fs.readFileSync(demoReadmePath, 'utf8') : '';

    const starterDir = path.join(demoDir, '1-starter');
    const solutionDir = path.join(demoDir, '2-solution');

    const starterFiles = readDirRecursive(starterDir);
    const solutionFiles = readDirRecursive(solutionDir);

    const hasHtml = solutionFiles.some(f => f.name.endsWith('.html'));
    const demoType = hasHtml ? 'web' : 'script';

    const rawTitle = parseMarkdownTitle(demoReadme);
    const demoTitle = rawTitle.replace(/^Demo \d+(\.\d+)?:?\s*/i, '') || `Demo ${s}.${d}`;

    demos.push({
      id: `session-${s}-demo-${d}`,
      demoNum: d,
      sessionNum: s,
      title: demoTitle,
      type: demoType,
      readme: demoReadme,
      previewBaseUrl: `/materials/web-development-banking-odp-v2/session-${s}/demo-${d}`,
      starter: {
        files: starterFiles,
        hasIndexHtml: starterFiles.some(f => f.name === 'index.html'),
        mainFile: starterFiles.find(f => f.name === 'index.html' || f.name.endsWith('.js'))?.name || starterFiles[0]?.name
      },
      solution: {
        files: solutionFiles,
        hasIndexHtml: solutionFiles.some(f => f.name === 'index.html'),
        mainFile: solutionFiles.find(f => f.name === 'index.html' || f.name.endsWith('.js'))?.name || solutionFiles[0]?.name
      }
    });
  }

  // Hands-on Lab
  const labDir = path.join(sessionDir, `hands-on-lab-${s}`);
  const labReadmePath = path.join(labDir, 'README.md');
  const labReadme = fs.existsSync(labReadmePath) ? fs.readFileSync(labReadmePath, 'utf8') : '';

  const labStarterDir = path.join(labDir, '1-starter');
  const labSolutionDir = path.join(labDir, '2-solution');

  const labStarterFiles = readDirRecursive(labStarterDir);
  const labSolutionFiles = readDirRecursive(labSolutionDir);

  const labHasHtml = labSolutionFiles.some(f => f.name.endsWith('.html'));
  const labType = labHasHtml ? 'web' : 'script';

  const rawLabTitle = parseMarkdownTitle(labReadme);
  const labTitle = rawLabTitle.replace(/^Hands-on Lab \d+:?\s*/i, '') || `Hands-on Lab ${s}`;

  const testRunnerStarter = labStarterFiles.find(f => f.relativePath.includes('test-runner.js'))?.content || '';
  const testRunnerSolution = labSolutionFiles.find(f => f.relativePath.includes('test-runner.js'))?.content || '';

  const lab = {
    id: `session-${s}-hands-on-lab-${s}`,
    labNum: s,
    sessionNum: s,
    title: labTitle,
    type: labType,
    readme: labReadme,
    previewBaseUrl: `/materials/web-development-banking-odp-v2/session-${s}/hands-on-lab-${s}`,
    testRunner: {
      hasTestRunner: !!testRunnerSolution,
      starterScript: testRunnerStarter,
      solutionScript: testRunnerSolution
    },
    starter: {
      files: labStarterFiles,
      hasIndexHtml: labStarterFiles.some(f => f.name === 'index.html'),
      mainFile: labStarterFiles.find(f => f.name === 'index.html' || f.name.endsWith('.js'))?.name || labStarterFiles[0]?.name
    },
    solution: {
      files: labSolutionFiles,
      hasIndexHtml: labSolutionFiles.some(f => f.name === 'index.html'),
      mainFile: labSolutionFiles.find(f => f.name === 'index.html' || f.name.endsWith('.js'))?.name || labSolutionFiles[0]?.name
    }
  };

  data.sessions.push({
    id: `session-${s}`,
    sessionNum: s,
    phase: meta.phase,
    title: meta.title,
    tagline: meta.tagline,
    hours: meta.hours,
    slides: meta.slides,
    readme: sessionReadme,
    demos,
    lab
  });
}

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputFile, JSON.stringify(data, null, 2), 'utf8');
console.log(`✔ Successfully built materials data at ${outputFile}`);
console.log(`  - Total Sessions: ${data.sessions.length}`);
console.log(`  - Total Demos: ${data.sessions.reduce((acc, s) => acc + s.demos.length, 0)}`);
console.log(`  - Total Labs: ${data.sessions.length}`);
