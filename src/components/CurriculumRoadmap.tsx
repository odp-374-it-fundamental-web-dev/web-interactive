import React from 'react';
import {
  Layers,
  Code2,
  Terminal,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  BookOpen,
  Award,
  Globe,
  Database,
  Cpu,
  Lock,
  Zap,
  Sparkles,
  GitBranch
} from 'lucide-react';
import { CurriculumData, PhaseId, DemoModule, LabModule } from '../types';

interface CurriculumRoadmapProps {
  data: CurriculumData;
  onSelectSession: (sessionNum: number) => void;
  onOpenRubric?: () => void;
  onSwitchToWorkbench: () => void;
}

export const CurriculumRoadmap: React.FC<CurriculumRoadmapProps> = ({
  data,
  onSelectSession,
  onSwitchToWorkbench
}) => {
  const phases = [
    {
      id: 'phase-1',
      number: 'Fase 1',
      title: 'HTML5 Semantik, Git & CSS Modern',
      range: 'Sesi 1 – 4',
      duration: '14 Jam',
      sessions: [1, 2, 3, 4],
      accent: 'from-[#1d3d70] to-[#2b5797]',
      badgeColor: 'bg-sky-100 text-[#1d3d70] border-sky-200',
      description: 'Membangun fondasi dokumen web berstandar W3C, form aksesibel, version control Git hygiene, dan tata letak responsif mobile-first menggunakan Box Model, Flexbox, serta Grid 12 kolom Bootstrap 5.3.',
      deliverables: [
        'Situs Profil Statis Semantik (profil-web)',
        'Form Kontak dengan Validasi HTML5 POST',
        'Repositori Git Bersih dengan .gitignore Aman',
        'Website Responsif Bootstrap 5.3 (profil-bootstrap)'
      ]
    },
    {
      id: 'phase-2',
      number: 'Fase 2',
      title: 'JavaScript Modern, Logika & DOM',
      range: 'Sesi 5 – 8',
      duration: '14 Jam',
      sessions: [5, 6, 7, 8],
      accent: 'from-[#f06634] to-[#ea580c]',
      badgeColor: 'bg-orange-100 text-orange-800 border-orange-200',
      description: 'Mempelajari pemrograman JavaScript native modern (ES6+): tipe data, strict equality, guard clauses, struktur perulangan, pure functions, array callback methods, manipulasi DOM aman, dan pencegahan injeksi XSS.',
      deliverables: [
        'Pemodelan Data Mutasi Rekening (transaksi.js)',
        'Logika Diskon Tiered & Guard Clauses (conditional.js)',
        'Fungsi Murni Pengolahan Data (ambilValid, hitungTotal)',
        'Milestone 1 & 2 Weather App (Grid Layout & Form Event)'
      ]
    },
    {
      id: 'phase-3',
      number: 'Fase 3',
      title: 'Async, Storage, Quality & Capstone',
      range: 'Sesi 9 – 12',
      duration: '14 Jam',
      sessions: [9, 10, 11, 12],
      accent: 'from-[#005e6a] to-[#0d9488]',
      badgeColor: 'bg-teal-100 text-teal-800 border-teal-200',
      description: 'Mengintegrasikan REST API publik secara asinkron dengan status UI lengkap, persistensi aman di localStorage, debugging terstruktur DevTools, unit testing assertion, dan rilis publik ke GitHub Pages.',
      deliverables: [
        'Integrasi REST API Frankfurter Kurs Referensi ECB',
        'Penyimpanan Riwayat 5 Pasangan Valuta di LocalStorage',
        'Pengujian Otomatis Test Harness (16/16 Checks Passed)',
        'Capstone Mini Project Kalkulator Kurs Rupiah & Rilis Daring'
      ]
    }
  ];

  const milestones = [
    {
      step: '01',
      session: 'Sesi 8',
      title: 'Milestone 1: UI Shell & Kartu Cuaca Fluid',
      desc: 'Mendesain antarmuka Weather Web App menggunakan auto-fit CSS Grid repeat(auto-fit, minmax(8.5rem, 1fr)) tanpa overflow horizontal.',
      tags: ['CSS Grid', 'Fluid Typography', 'Responsive Card']
    },
    {
      step: '02',
      session: 'Sesi 8–9',
      title: 'Milestone 2: Form Submit & Data Dummy Interaktif',
      desc: 'Mencegah refresh default via preventDefault(), membaca input pencarian kota, dan merender data dummy menggunakan textContent anti-XSS.',
      tags: ['Event Listener', 'DOM Traversal', 'Anti-XSS']
    },
    {
      step: '03',
      session: 'Sesi 10',
      title: 'Milestone 3: Integrasi Asinkron REST API Open-Meteo',
      desc: 'Mengorkestrasi panggilan API 2 tahap (Geocoding -> Forecast) via async/await dengan State Machine UI: loading, success, empty, dan error.',
      tags: ['fetch()', 'async/await', 'Error Guard']
    },
    {
      step: '04',
      session: 'Sesi 11',
      title: 'Milestone 4: Persistensi Riwayat Kota di LocalStorage',
      desc: 'Menyimpan 5 kota unik terbaru secara terisolasi di localStorage dengan sanitasi JSON parsers dan tombol pembersihan riwayat.',
      tags: ['localStorage', 'JSON Serialization', 'Deduplikasi']
    },
    {
      step: '05',
      session: 'Sesi 12',
      title: 'Milestone 5: Mini Capstone Kalkulator Kurs Rupiah',
      desc: 'Konversi kurs real-time Frankfurter API, pure functions helper, double-request guard, test-runner 16 checks, dan deployment live.',
      tags: ['Frankfurter API', 'Double-Request Guard', 'Test Harness', 'Rubrik 100 Poin']
    }
  ];

  const bankingPillars = [
    {
      icon: Lock,
      title: 'Kerahasiaan Data & Zero-Secret',
      color: 'text-rose-600 bg-rose-50 border-rose-200',
      desc: 'Tidak pernah menyimpan kredensial, API token privat, nomor rekening nasabah, atau data sensitif di dalam HTML, berkas JS publik, ataupun localStorage browser.'
    },
    {
      icon: ShieldCheck,
      title: 'Defensive UI & Pencegahan XSS',
      color: 'text-amber-600 bg-amber-50 border-amber-200',
      desc: 'Selalu menggunakan textContent dan replaceChildren() untuk merender data eksternal, membendung celah injeksi kode berbahaya cross-site scripting.'
    },
    {
      icon: Zap,
      title: 'Proteksi Concurrency & Race Condition',
      color: 'text-sky-600 bg-sky-50 border-sky-200',
      desc: 'Menerapkan guard clause tombol disabled saat request HTTP berlangsung untuk mencegah duplikasi transaksi dan response balapan asinkron.'
    },
    {
      icon: Cpu,
      title: 'Pengujian Berbasis Bukti (Deterministic)',
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      desc: 'Memverifikasi fungsi transformasi bisnis murni menggunakan assertion otomatis sebelum kode dideploy ke lingkungan production.'
    }
  ];

  return (
    <div className="w-full bg-[#f8fafc] text-slate-800 pb-20">
      {/* 1. Header Section */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200 pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#f06634]/10 to-transparent pointer-events-none rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#1d3d70]/10 to-transparent pointer-events-none rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1d3d70]/5 text-[#1d3d70] border border-[#1d3d70]/10 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#f06634]" />
                <span>Peta Kurikulum & Standar Rekayasa • BNI ODP IT 2026</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-worksans tracking-tight leading-tight">
                Roadmap Belajar <span className="text-[#1d3d70]">12 Sesi</span> Menuju Developer Handal
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                Kurikulum terstruktur berbasis proyek perbankan: 42 jam tatap muka intensif, 24 modul latihan kode 
                (1-starter & 2-solution), validasi test harness otomatis, dan mini project 
                <strong className="text-slate-900 font-semibold"> Kalkulator Kurs Rupiah</strong> siap rilis ke Vercel atau GitHub Pages.
              </p>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-slate-100">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="text-2xl sm:text-3xl font-black text-[#1d3d70] font-worksans">12 Sesi</div>
              <div className="text-xs font-medium text-slate-500 mt-1">Total 42 Jam Pelatihan</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="text-2xl sm:text-3xl font-black text-[#f06634] font-worksans">24+ Modul</div>
              <div className="text-xs font-medium text-slate-500 mt-1">Demo & Hands-on Lab</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="text-2xl sm:text-3xl font-black text-emerald-600 font-worksans">100 Poin</div>
              <div className="text-xs font-medium text-slate-500 mt-1">Rubrik Evaluasi Capstone</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="text-2xl sm:text-3xl font-black text-[#005e6a] font-worksans">100% Native</div>
              <div className="text-xs font-medium text-slate-500 mt-1">Standar W3C & ES6+</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Three Progressive Phases */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="mb-10 text-center sm:text-left">
          <div className="text-xs font-bold uppercase tracking-wider text-[#f06634] mb-1">
            Tahapan Belajar Sistematis
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-worksans">
            3 Fase Progresif Pembelajaran
          </h2>
          <p className="text-slate-600 text-sm mt-2 max-w-2xl">
            Setiap fase dirancang untuk memperkuat fondasi sebelum melangkah ke konsep yang lebih kompleks, 
            memastikan setiap peserta ODP IT siap membangun sistem perbankan nyata.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {phases.map((phase) => (
            <div
              key={phase.id}
              className="card-interactive bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden flex flex-col"
            >
              {/* Card Header */}
              <div className="p-6 border-b border-slate-100 relative">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${phase.badgeColor}`}>
                    {phase.number} • {phase.range}
                  </span>
                  <span className="text-xs font-mono font-semibold text-slate-400">
                    {phase.duration}
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-900 font-worksans tracking-tight">
                  {phase.title}
                </h3>

                <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                  {phase.description}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="p-6 bg-slate-50/50 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Artefak & Hasil Karya Utama:
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {phase.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-200">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Sesi dalam Fase Ini:
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {phase.sessions.map((sNum) => {
                      const session = data.sessions.find(s => s.sessionNum === sNum);
                      return (
                        <button
                          key={sNum}
                          onClick={() => {
                            onSelectSession(sNum);
                            onSwitchToWorkbench();
                          }}
                          className="btn-interactive text-left p-2.5 rounded-lg bg-white border border-slate-200 hover:border-[#1d3d70] hover:bg-[#1d3d70]/5 transition-all text-xs group"
                        >
                          <div className="font-bold text-[#1d3d70] group-hover:text-[#f06634] flex items-center justify-between">
                            <span>Sesi {sNum}</span>
                            <ArrowRight className="w-3 h-3 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                          </div>
                          <div className="text-[11px] text-slate-500 truncate mt-0.5">
                            {session?.title || `Materi Sesi ${sNum}`}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. The 5-Milestone Capstone Weather App Evolution */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#f06634] mb-2 inline-block">
              Evolusi Proyek Berkelanjutan
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-worksans">
              Arsitektur 5 Milestone: Weather Web App
            </h2>
            <p className="text-slate-600 text-sm mt-2 leading-relaxed">
              Mulai dari tata letak kartu cuaca di Sesi 8 hingga deployment aplikasi produksi di Sesi 12. 
              Peserta membangun kode lapis demi lapis sesuai prinsip evolusi perangkat lunak modern.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {milestones.map((m, idx) => (
              <div
                key={m.step}
                className="card-interactive bg-slate-50 rounded-2xl p-5 border border-slate-200/90 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black text-[#1d3d70] font-mono px-2 py-0.5 bg-white rounded border border-slate-200">
                      MS-{m.step}
                    </span>
                    <span className="text-[11px] font-bold text-[#f06634]">{m.session}</span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm font-worksans mb-2 leading-snug">
                    {m.title}
                  </h3>

                  <p className="text-slate-600 text-[11px] leading-relaxed mb-4">
                    {m.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80">
                  <div className="flex flex-wrap gap-1">
                    {m.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono bg-white px-1.5 py-0.5 rounded border border-slate-200 text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3">
            <Award className="w-5 h-5 text-[#f06634]" />
            <span className="text-xs sm:text-sm font-semibold text-slate-700">
              Pencapaian Capstone dinilai menggunakan rubrik formal 100 poin berstandar industri pada Lab Sesi 12.
            </span>
          </div>
        </div>
      </section>

      {/* 4. Banking IT Security & Engineering Discipline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="mb-10">
          <div className="text-xs font-bold uppercase tracking-wider text-[#005e6a] mb-1">
            Kepatuhan & Keamanan Perbankan
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-worksans">
            4 Pilar Disiplin Rekayasa BNI ODP IT
          </h2>
          <p className="text-slate-600 text-sm mt-2 max-w-2xl">
            Sistem perbankan menuntut keandalan tinggi dan perlindungan data yang ketat. 
            Prinsip-prinsip ini ditanamkan di seluruh 12 sesi pelatihan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bankingPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="card-interactive bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border mb-4 ${pillar.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm font-worksans mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] font-mono text-slate-400">
                  Standar Keamanan ODP IT #0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Bottom Interactive CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="bg-gradient-to-r from-[#1d3d70] via-[#152c52] to-[#005e6a] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          <div className="max-w-2xl relative z-10">
            <h2 className="text-2xl sm:text-3xl font-black font-worksans tracking-tight">
              Siap Menjelajahi Studio & Menjalankan Kode?
            </h2>
            <p className="mt-3 text-slate-200 text-xs sm:text-sm leading-relaxed">
              Beralih ke antarmuka Studio Praktik untuk melihat live interactive preview, meninjau kode multi-file, 
              membandingkan starter vs solusi, menjalankan automated test harness, dan membaca panduan lengkap.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 text-white border border-white/20 text-xs font-medium">
              <Terminal className="w-4 h-4 text-[#f06634]" />
              <span>Gunakan menu navigasi <strong>"Studio Praktik"</strong> di bagian atas untuk mulai mengeksplorasi kode.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
