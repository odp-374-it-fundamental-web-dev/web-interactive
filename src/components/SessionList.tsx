import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronRight,
  Code2,
  FileCode,
  Terminal,
  Globe,
  Award,
  CheckCircle2,
  BookOpen,
  FlaskConical,
  Sparkles,
  Search,
  X
} from 'lucide-react';
import { SessionData, DemoModule, LabModule, PhaseId } from '../types';

interface SessionListProps {
  sessions: SessionData[];
  activePhase: PhaseId;
  selectedSessionNum: number;
  selectedModuleId: string;
  onSelectSession: (sessionNum: number) => void;
  onSelectModule: (module: DemoModule | LabModule, sessionNum: number) => void;
}

export const SessionList: React.FC<SessionListProps> = ({
  sessions,
  activePhase,
  selectedSessionNum,
  selectedModuleId,
  onSelectSession,
  onSelectModule
}) => {
  const [searchFilter, setSearchFilter] = useState('');

  const filteredSessions = sessions.filter(session => {
    // Filter by Phase
    if (activePhase === 'phase-1' && session.sessionNum > 4) return false;
    if (activePhase === 'phase-2' && (session.sessionNum < 5 || session.sessionNum > 8)) return false;
    if (activePhase === 'phase-3' && session.sessionNum < 9) return false;

    // Filter by text search
    if (searchFilter.trim()) {
      const q = searchFilter.toLowerCase();
      const matchSession = session.title.toLowerCase().includes(q) || session.tagline.toLowerCase().includes(q);
      const matchDemo = session.demos.some(d => d.title.toLowerCase().includes(q));
      const matchLab = session.lab.title.toLowerCase().includes(q);
      return matchSession || matchDemo || matchLab;
    }

    return true;
  });

  return (
    <aside className="w-full lg:w-80 shrink-0 bg-white border-r border-slate-200 flex flex-col h-full min-h-0 overflow-hidden">
      {/* Sidebar Search Bar */}
      <div className="p-3 border-b border-slate-200 bg-slate-50/80 shrink-0">
        <div className="relative">
          <input
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder="Cari sesi, demo, atau lab..."
            className="w-full pl-8 pr-7 py-1.5 text-xs bg-white border border-slate-200 rounded-lg outline-none focus:border-[#f06634] focus:ring-2 focus:ring-[#f06634]/10 transition-all placeholder:text-slate-400 font-sans"
          />
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
          {searchFilter && (
            <button
              onClick={() => setSearchFilter('')}
              className="absolute right-2 top-2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Sessions Accordion List */}
      <div className="flex-1 min-h-0 overflow-y-auto divide-y divide-slate-100 p-2 space-y-1.5">
        {filteredSessions.map((session) => {
          const isSelected = session.sessionNum === selectedSessionNum;

          return (
            <div
              key={session.id}
              className={`rounded-xl overflow-hidden border transition-all ${
                isSelected
                  ? 'border-[#1d3d70]/30 shadow-xs bg-white'
                  : 'border-slate-200/70 bg-white hover:border-slate-300'
              }`}
            >
              {/* Session Header Item */}
              <button
                onClick={() => onSelectSession(session.sessionNum)}
                className={`w-full text-left p-3 transition-colors flex items-start gap-2.5 ${
                  isSelected
                    ? 'bg-[#1d3d70]/5 border-l-4 border-l-[#1d3d70]'
                    : 'hover:bg-slate-50'
                }`}
              >
                <div className="mt-0.5 shrink-0">
                  {isSelected ? (
                    <ChevronDown className="w-4 h-4 text-[#1d3d70]" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#f06634] font-worksans">
                      Sesi {session.sessionNum < 10 ? `0${session.sessionNum}` : session.sessionNum}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {session.hours}h • {session.slides}p
                    </span>
                    {session.sessionNum === 12 && (
                      <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 border border-amber-200">
                        Capstone
                      </span>
                    )}
                  </div>

                  <h3 className="text-xs font-bold text-slate-900 truncate mt-0.5 font-worksans">
                    {session.title}
                  </h3>

                  <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5 leading-snug">
                    {session.tagline}
                  </p>
                </div>
              </button>

              {/* Sub-modules (Demos & Hands-on Lab) */}
              {isSelected && (
                <div className="p-2 bg-slate-50/70 border-t border-slate-100 space-y-1">
                  {/* Instructor Demos */}
                  {session.demos.map((demo) => {
                    const isDemoActive = demo.id === selectedModuleId;
                    return (
                      <button
                        key={demo.id}
                        onClick={() => onSelectModule(demo, session.sessionNum)}
                        className={`w-full text-left px-2.5 py-2 rounded-lg text-xs transition-all flex items-center justify-between group ${
                          isDemoActive
                            ? 'bg-white text-[#1d3d70] font-bold shadow-xs border border-slate-200'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <Code2 className={`w-3.5 h-3.5 shrink-0 ${isDemoActive ? 'text-[#f06634]' : 'text-slate-400'}`} />
                          <span className="truncate">Demo {demo.demoNum}: {demo.title}</span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400 shrink-0 ml-1 uppercase">
                          {demo.type}
                        </span>
                      </button>
                    );
                  })}

                  {/* Hands-on Lab */}
                  {session.lab && (
                    <button
                      onClick={() => onSelectModule(session.lab, session.sessionNum)}
                      className={`w-full text-left px-2.5 py-2 rounded-lg text-xs transition-all flex items-center justify-between group ${
                        session.lab.id === selectedModuleId
                          ? 'bg-amber-50 text-amber-900 font-bold shadow-xs border border-amber-200'
                          : 'text-slate-700 hover:text-slate-900 hover:bg-amber-50/50'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <FlaskConical className={`w-3.5 h-3.5 shrink-0 ${session.lab.id === selectedModuleId ? 'text-[#f06634]' : 'text-amber-600'}`} />
                        <span className="truncate">Lab {session.sessionNum}: {session.lab.title}</span>
                      </div>
                      <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 border border-amber-200 shrink-0 ml-1">
                        Trainee Lab
                      </span>
                    </button>
                  )}
                </div>
              )}
            </div>
          );
        })}

        {filteredSessions.length === 0 && (
          <div className="p-6 text-center text-slate-400 text-xs">
            Tidak ada modul yang sesuai dengan pencarian "{searchFilter}".
          </div>
        )}
      </div>
    </aside>
  );
};
