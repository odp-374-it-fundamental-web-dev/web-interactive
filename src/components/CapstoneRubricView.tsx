import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Award, CheckCircle2, RotateCcw, Sparkles, Check, HelpCircle } from 'lucide-react';

export interface RubricItem {
  id: string;
  category: string;
  points: number;
  title: string;
  description: string;
  checked: boolean;
}

export const initialRubricItems: RubricItem[] = [
  {
    id: '1',
    category: '1. Version Control & GitHub',
    points: 10,
    title: 'Repositori Publik & Komitmen Terstruktur',
    description: 'Repositori GitHub publik, komitmen git teratur dengan deskripsi informatif, dan berkas README.md proyek profesional.',
    checked: true
  },
  {
    id: '2',
    category: '2. HTML Semantik & Aksesibilitas',
    points: 8,
    title: 'Landmark Semantik & Kontrak Form',
    description: 'Penggunaan elemen semantik (<header>, <main>, <footer>), form dengan input berlabel unik, dan ketiadaan error konsol.',
    checked: true
  },
  {
    id: '3',
    category: '2. HTML Semantik & Aksesibilitas',
    points: 7,
    title: 'Aksesibilitas WAI-ARIA & Jalur Relatif',
    description: 'Elemen live region (role="status", aria-live="polite"), atribusi resmi Open-Meteo, dan jalur relatif (./) siap subpath.',
    checked: true
  },
  {
    id: '4',
    category: '3. CSS & Responsive Grid',
    points: 8,
    title: 'Auto-Fit CSS Grid 7 Hari',
    description: 'Tata letak kartu cuaca fluid menggunakan repeat(auto-fit, minmax(8.5rem, 1fr)) tanpa overflow horizontal pada mobile.',
    checked: true
  },
  {
    id: '5',
    category: '3. CSS & Responsive Grid',
    points: 7,
    title: 'Hierarki Visual & Elevasi Hover',
    description: 'Desain bersih berpalet BNI/Hacktiv8, status badge hari ini/besok, dan efek transisi hover kartu.',
    checked: true
  },
  {
    id: '6',
    category: '4. Fungsi Murni & Transformasi Data',
    points: 10,
    title: 'Penyusunan URL 7 Hari (makeWeatherURL)',
    description: 'Konstruksi URLSearchParams mencakup latitude, longitude, forecast_days=7, daily, dan timezone=auto.',
    checked: true
  },
  {
    id: '7',
    category: '4. Fungsi Murni & Transformasi Data',
    points: 10,
    title: 'Transformasi Array Harian (toForecastRows)',
    description: 'Pemetaan array paralel harian ke 7 baris objek terstruktur { date, max, min } dengan sanitasi angka Number.isFinite().',
    checked: true
  },
  {
    id: '8',
    category: '5. Integrasi API Asinkron & Guard',
    points: 10,
    title: 'Orkestrasi Geocoding & Forecast API',
    description: 'Pemanggilan asinkron 2 tahap melalui getJSON(), status loading/success/empty/error, dan penanganan kota tidak ditemukan.',
    checked: true
  },
  {
    id: '9',
    category: '5. Integrasi API Asinkron & Guard',
    points: 10,
    title: 'Race Condition Fail-Fast Guard',
    description: "Guard clause 'if (button.disabled) return;' di awal loadWeather dan pemulihan status tombol di blok finally.",
    checked: true
  },
  {
    id: '10',
    category: '6. Persistensi Storage & Deployment',
    points: 10,
    title: 'Persistensi Riwayat 5 Kota (nextHistory)',
    description: 'Penyimpanan 5 kota unik terbaru di localStorage, deduplikasi case-insensitive, dan tombol hapus riwayat.',
    checked: true
  },
  {
    id: '11',
    category: '6. Persistensi Storage & Deployment',
    points: 10,
    title: 'Publikasi Live (Vercel / GitHub Pages / Netlify)',
    description: 'Aplikasi ter-deploy live dan berfungsi 100% pada URL publik (Vercel, GitHub Pages, atau Netlify) tanpa aset rusak atau error 404.',
    checked: true
  }
];

export const CapstoneRubricView: React.FC = () => {
  const [rubric, setRubric] = useState<RubricItem[]>(initialRubricItems);

  const toggleItem = (id: string) => {
    setRubric(prev => {
      const next = prev.map(item => (item.id === id ? { ...item, checked: !item.checked } : item));
      const newScore = next.filter(r => r.checked).reduce((acc, r) => acc + r.points, 0);
      if (newScore === 100) {
        confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
      }
      return next;
    });
  };

  const setAll = (val: boolean) => {
    setRubric(prev => prev.map(item => ({ ...item, checked: val })));
    if (val) {
      confetti({ particleCount: 90, spread: 80, origin: { y: 0.6 } });
    }
  };

  const totalScore = rubric.filter(r => r.checked).reduce((acc, r) => acc + r.points, 0);
  const checkedCount = rubric.filter(r => r.checked).length;

  return (
    <div className="flex-1 flex flex-col h-full min-h-0 bg-[#f8fafc] overflow-hidden">
      {/* Rubric Status Banner */}
      <div className="bg-white border-b border-slate-200 px-6 py-4 shrink-0 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1d3d70] to-[#254d8c] flex items-center justify-center text-white shadow-xs">
              <Award className="w-5 h-5 text-[#f06634]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-black text-slate-900 font-worksans">
                  Rubrik Penilaian Capstone (100 Poin)
                </h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#1d3d70]/10 text-[#1d3d70] border border-[#1d3d70]/20">
                  Standar BNI ODP IT
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Evaluasi komprehensif mini project Weather Web App & kesiapan rilis GitHub Pages
              </p>
            </div>
          </div>

          {/* Quick Score Counter & Actions */}
          <div className="flex items-center gap-3 self-end sm:self-center">
            <div className="bg-slate-50 border border-slate-200 px-3.5 py-1.5 rounded-xl flex items-baseline gap-1.5 shadow-2xs">
              <span className="text-xs font-semibold text-slate-500">Skor:</span>
              <span className={`text-xl font-black font-worksans ${totalScore >= 80 ? 'text-emerald-600' : 'text-amber-600'}`}>
                {totalScore}
              </span>
              <span className="text-xs font-bold text-slate-400">/ 100</span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setAll(true)}
                className="btn-interactive text-xs px-3 py-2 font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-xl border border-emerald-200 shadow-2xs transition-all flex items-center gap-1.5"
                title="Centang semua kriteria penilaian (100 Poin)"
              >
                <Check className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Centang Semua</span>
              </button>
              <button
                onClick={() => setAll(false)}
                className="btn-interactive text-xs px-3 py-2 font-bold text-slate-600 bg-white hover:bg-slate-100 rounded-xl border border-slate-200 shadow-2xs transition-all flex items-center gap-1.5"
                title="Reset semua kriteria penilaian"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            </div>
          </div>
        </div>

        {/* Progress Strip */}
        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold text-slate-500">
              {checkedCount} dari {rubric.length} kriteria terpenuhi
            </span>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
              totalScore === 100
                ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                : totalScore >= 80
                ? 'bg-sky-100 text-sky-800 border border-sky-200'
                : 'bg-amber-100 text-amber-800 border border-amber-200'
            }`}>
              {totalScore === 100
                ? '★ Nilai Sempurna (Distinction)'
                : totalScore >= 80
                ? '✓ Kompeten (Passed)'
                : 'Penyelesaian Bertahap'}
            </span>
          </div>

          <div className="w-36 h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
            <div
              className={`h-full transition-all duration-300 rounded-full ${
                totalScore >= 80 ? 'bg-emerald-500' : 'bg-amber-500'
              }`}
              style={{ width: `${totalScore}%` }}
            />
          </div>
        </div>
      </div>

      {/* Checklist Body */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-2.5">
        <div className="max-w-4xl mx-auto space-y-2.5">
          {rubric.map((item) => (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`p-4 rounded-xl border transition-all cursor-pointer select-none flex items-start gap-3.5 ${
                item.checked
                  ? 'bg-white border-emerald-300/80 shadow-2xs hover:border-emerald-400'
                  : 'bg-white border-slate-200/90 shadow-2xs hover:border-slate-300 hover:bg-slate-50/50'
              }`}
            >
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => {}} // handled by parent div
                className="mt-1 h-4 w-4 rounded text-[#f06634] focus:ring-[#f06634] border-slate-300 pointer-events-none shrink-0"
              />

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-3">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-worksans">
                    {item.title}
                  </h4>
                  <span className={`text-xs font-bold font-mono px-2 py-0.5 rounded-full shrink-0 ${
                    item.checked
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                      : 'bg-slate-100 text-slate-600 border border-slate-200'
                  }`}>
                    +{item.points} Poin
                  </span>
                </div>

                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <span className="text-[10px] font-mono font-medium text-slate-400 uppercase tracking-wider bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                    {item.category}
                  </span>
                  {item.checked && (
                    <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Terpenuhi</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
