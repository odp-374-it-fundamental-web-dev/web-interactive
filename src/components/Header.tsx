import React from 'react';
import { Search, Map, Terminal } from 'lucide-react';
import { AppView } from '../types';

interface HeaderProps {
  currentView: AppView;
  onChangeView: (view: AppView) => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onChangeView,
  onOpenSearch
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Brand Logo & Corporate Co-branding */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onChangeView('roadmap')}
              className="flex items-center gap-2 group text-left focus:outline-none"
              title="Kembali ke Beranda Kurikulum"
            >
              <img
                src="/logos/hacktiv8-dark.png"
                alt="Hacktiv8 Indonesia"
                className="h-7 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </button>

            <div className="h-6 w-[1px] bg-slate-200 hidden sm:block" />

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] sm:text-xs font-black text-[#1d3d70] tracking-wide uppercase font-worksans">
                  PT Bank Negara Indonesia (Persero) Tbk
                </span>
                <span className="hidden md:inline-flex text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.2 bg-[#005e6a]/10 text-[#005e6a] rounded border border-[#005e6a]/20">
                  ODP IT
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] text-[#f06634] font-semibold truncate">
                Web Development Fundamentals 2026
              </span>
            </div>
          </div>

          {/* Central View Switcher: "Peta Kurikulum" LEFT, "Studio Praktik" RIGHT */}
          <nav className="flex items-center bg-slate-100/90 p-1 rounded-xl border border-slate-200">
            <button
              onClick={() => onChangeView('roadmap')}
              className={`btn-interactive flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currentView === 'roadmap'
                  ? 'bg-white text-[#1d3d70] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Map className={`w-3.5 h-3.5 ${currentView === 'roadmap' ? 'text-[#1d3d70]' : 'text-slate-500'}`} />
              <span>Peta Kurikulum</span>
            </button>

            <button
              onClick={() => onChangeView('workbench')}
              className={`btn-interactive flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currentView === 'workbench'
                  ? 'bg-white text-[#1d3d70] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Terminal className={`w-3.5 h-3.5 ${currentView === 'workbench' ? 'text-[#f06634]' : 'text-slate-500'}`} />
              <span>Studio Praktik</span>
            </button>
          </nav>

          {/* Right Action Controls: Search Only */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="btn-interactive flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 rounded-lg transition-colors border border-slate-200/60"
              title="Cari materi & modul (⌘K)"
            >
              <Search className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden sm:inline">Cari Modul</span>
              <kbd className="hidden sm:inline text-[10px] font-mono bg-white px-1.5 py-0.5 rounded border border-slate-200 text-slate-500 shadow-2xs">
                ⌘K
              </kbd>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
