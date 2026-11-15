import React, { useState, useEffect } from 'react';
import { Search, X, Globe, Terminal, Award, ChevronRight } from 'lucide-react';
import { SessionData, DemoModule, LabModule } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  sessions: SessionData[];
  onSelectResult: (module: DemoModule | LabModule, sessionNum: number) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  sessions,
  onSelectResult
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // Toggle modal if trigger
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Search items across all sessions
  const searchResults: Array<{ module: DemoModule | LabModule; sessionNum: number; sessionTitle: string; kind: 'demo' | 'lab' }> = [];

  const q = query.trim().toLowerCase();
  for (const session of sessions) {
    // Demos
    for (const demo of session.demos) {
      if (!q || demo.title.toLowerCase().includes(q) || session.title.toLowerCase().includes(q)) {
        searchResults.push({
          module: demo,
          sessionNum: session.sessionNum,
          sessionTitle: session.title,
          kind: 'demo'
        });
      }
    }
    // Lab
    if (!q || session.lab.title.toLowerCase().includes(q) || session.title.toLowerCase().includes(q)) {
      searchResults.push({
        module: session.lab,
        sessionNum: session.sessionNum,
        sessionTitle: session.title,
        kind: 'lab'
      });
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[75vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari materi, judul demo, lab, fungsi (misal: 'Grid', 'Event Loop', 'Fetch')..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400 font-medium text-slate-800"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-2 divide-y divide-slate-100">
          {searchResults.length === 0 ? (
            <div className="p-8 text-center text-slate-400 text-xs">
              Tidak ada modul yang cocok dengan pencarian "{query}".
            </div>
          ) : (
            searchResults.slice(0, 30).map((item) => (
              <button
                key={item.module.id}
                onClick={() => {
                  onSelectResult(item.module, item.sessionNum);
                  onClose();
                }}
                className="w-full p-3 text-left hover:bg-slate-50 rounded-xl flex items-center justify-between gap-3 group transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className={`p-2 rounded-lg shrink-0 ${
                    item.kind === 'lab'
                      ? 'bg-amber-100 text-amber-700'
                      : item.module.type === 'web'
                      ? 'bg-sky-100 text-sky-700'
                      : 'bg-emerald-100 text-emerald-700'
                  }`}>
                    {item.kind === 'lab' ? (
                      <Award className="w-4 h-4" />
                    ) : item.module.type === 'web' ? (
                      <Globe className="w-4 h-4" />
                    ) : (
                      <Terminal className="w-4 h-4" />
                    )}
                  </div>

                  <div className="truncate">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase text-[#f06634]">
                        Sesi {item.sessionNum}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="text-[11px] text-slate-500 truncate">
                        {item.sessionTitle}
                      </span>
                    </div>

                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#1d3d70] truncate mt-0.5 font-worksans">
                      {item.kind === 'lab' ? `Lab: ${item.module.title}` : `Demo: ${item.module.title}`}
                    </h4>
                  </div>
                </div>

                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-600 shrink-0" />
              </button>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between">
          <span>Menampilkan {Math.min(searchResults.length, 30)} dari {searchResults.length} modul</span>
          <span className="hidden sm:inline">Tekan ESC untuk keluar</span>
        </div>
      </div>
    </div>
  );
};
