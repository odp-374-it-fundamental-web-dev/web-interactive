import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Award, CheckCircle2, RotateCcw, Sparkles } from 'lucide-react';

interface CapstoneRubricModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface RubricItem {
  id: string;
  category: string;
  points: number;
  title: string;
  description: string;
  checked: boolean;
}

const initialRubric: RubricItem[] = [
  {
    id: '1',
    category: '1. Version Control & GitHub',
    points: 10,
    title: 'Repositori Publik & Komitmen Terstruktur',
    description: 'Repositori GitHub publik, komitmen git teratur dengan deskripsi informatif, dan berkas README.md proyek profesional dengan tautan live.',
    checked: true
  },
  {
    id: '2',
    category: '2. HTML Semantik & Aksesibilitas',
    points: 8,
    title: 'Landmark Semantik & Kontrak Form (#formKurs)',
    description: 'Penggunaan elemen semantik (<header>, <main>, <footer>), form konversi dengan label terkait untuk jumlah dan kode mata uang, serta ketiadaan error konsol.',
    checked: true
  },
  {
    id: '3',
    category: '2. HTML Semantik & Aksesibilitas',
    points: 7,
    title: 'Aksesibilitas WAI-ARIA & Jalur Relatif',
    description: 'Elemen live feedback status (role="status", aria-live="polite"), atribusi resmi Frankfurter/ECB, dan jalur relatif (./) siap hosting subpath.',
    checked: true
  },
  {
    id: '4',
    category: '3. CSS Responsif',
    points: 5,
    title: 'Tata Letak Responsif Mobile-First',
    description: 'Tampilan rapi di HP & laptop tanpa horizontal scroll; box-sizing reset; kartu konversi kurs bergradien dengan kontras tinggi.',
    checked: true
  },
  {
    id: '5',
    category: '3. CSS Responsif',
    points: 5,
    title: 'Deretan Chip Riwayat Flex-Wrap',
    description: 'Jajaran chip pasangan mata uang menggunakan flex-wrap yang turun baris rapi pada layar sempit.',
    checked: true
  },
  {
    id: '6',
    category: '4. Fungsi Murni & Transformasi Data',
    points: 10,
    title: 'URL Builder Frankfurter (makeLatestURL)',
    description: 'Validasi alfabet 3 huruf, UPPERCASE otomatis, dan penyusunan query string base & symbols via URLSearchParams.',
    checked: true
  },
  {
    id: '7',
    category: '4. Fungsi Murni & Transformasi Data',
    points: 10,
    title: 'Pemetaan Valuta Indonesia (describeCurrencyCode)',
    description: 'Pemetaan 14 kode ISO (USD, IDR, SGD, EUR, JPY, dll.) ke Bahasa Indonesia dengan fallback case-insensitive.',
    checked: true
  },
  {
    id: '8',
    category: '5. Integrasi API & Double-Request Guard',
    points: 15,
    title: 'Integrasi Frankfurter API & 5 State UI',
    description: 'Pengambilan kurs via Latest Rates API, penanganan 5 status UI lengkap (loading, success, empty, error, invalid), dan rendering aman textContent anti-XSS.',
    checked: true
  },
  {
    id: '9',
    category: '5. Integrasi API & Double-Request Guard',
    points: 10,
    title: 'Double-Request Fail-Fast Guard',
    description: "Guard clause 'if (button && button.disabled) return;' di awal loadRate dan pemulihan status tombol di blok finally.",
    checked: true
  },
  {
    id: '10',
    category: '6. Penyimpanan Lokal & Deployment Live',
    points: 10,
    title: 'Persistensi Riwayat 5 Pasangan (nextHistory)',
    description: 'Penyimpanan maksimal 5 string pasangan unik (XXX/XXX) di localStorage, deduplikasi case-insensitive, array immutability, dan tombol hapus riwayat.',
    checked: true
  },
  {
    id: '11',
    category: '6. Penyimpanan Lokal & Deployment Live',
    points: 10,
    title: 'Publikasi Live (Vercel / GitHub Pages / Netlify)',
    description: 'Aplikasi ter-deploy live dan berfungsi 100% pada URL publik (Vercel, GitHub Pages, atau Netlify) tanpa aset rusak atau error 404.',
    checked: true
  }
];

export const CapstoneRubricModal: React.FC<CapstoneRubricModalProps> = ({ isOpen, onClose }) => {
  const [rubric, setRubric] = useState<RubricItem[]>(initialRubric);

  if (!isOpen) return null;

  const toggleItem = (id: string) => {
    setRubric(prev =>
      prev.map(item => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  const setAll = (val: boolean) => {
    setRubric(prev => prev.map(item => ({ ...item, checked: val })));
    if (val) {
      confetti({ particleCount: 70, spread: 60 });
    }
  };

  const totalScore = rubric.filter(r => r.checked).reduce((acc, r) => acc + r.points, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-[#1d3d70] to-[#254d8c] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Award className="w-6 h-6 text-[#f06634]" />
            <div>
              <h3 className="text-base font-bold font-worksans">
                Rubrik Evaluasi Capstone Mini Project (100 Poin)
              </h3>
              <p className="text-xs text-slate-200">
                Kalkulator Kurs Rupiah Final Release — Standar Penilaian Software Engineer BNI ODP IT 2026
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Score Tally Bar */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-3 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-600">Total Skor Capstone:</span>
            <div className="flex items-baseline gap-1">
              <span className={`text-2xl font-black font-worksans ${totalScore >= 80 ? 'text-emerald-600' : 'text-amber-600'}`}>
                {totalScore}
              </span>
              <span className="text-xs font-bold text-slate-400">/ 100 Poin</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setAll(true)}
              className="text-xs px-2.5 py-1 font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded border border-emerald-200"
            >
              Centang Semua (100 Poin)
            </button>
            <button
              onClick={() => setAll(false)}
              className="text-xs px-2.5 py-1 font-semibold text-slate-600 bg-white hover:bg-slate-100 rounded border border-slate-200"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Rubric Checklist Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-3 divide-y divide-slate-100">
          {rubric.map((item) => (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`pt-3 first:pt-0 flex items-start gap-3.5 cursor-pointer select-none p-2 rounded-xl transition-colors ${
                item.checked ? 'bg-emerald-50/40 hover:bg-emerald-50/70' : 'hover:bg-slate-50'
              }`}
            >
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => {}} // handled by parent div
                className="mt-1 h-4 w-4 rounded text-[#f06634] focus:ring-[#f06634] border-slate-300"
              />

              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-slate-900 font-worksans">
                    {item.title}
                  </span>
                  <span className="text-xs font-bold text-[#f06634] shrink-0 font-mono">
                    +{item.points} Poin
                  </span>
                </div>
                <p className="text-[11.5px] text-slate-600 mt-0.5 leading-relaxed">
                  {item.description}
                </p>
                <span className="inline-block mt-1 text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#1d3d70] hover:bg-[#152c52] text-white font-semibold text-xs rounded-xl shadow-md transition-colors"
          >
            Tutup Rubrik
          </button>
        </div>
      </div>
    </div>
  );
};
