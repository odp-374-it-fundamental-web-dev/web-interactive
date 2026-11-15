import React, { useState } from 'react';
import { Columns, SplitSquareVertical, FileCode, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { CodeFile } from '../types';

interface DiffViewerProps {
  starterFiles: CodeFile[];
  solutionFiles: CodeFile[];
}

export const DiffViewer: React.FC<DiffViewerProps> = ({
  starterFiles,
  solutionFiles
}) => {
  // Find matching file names between starter and solution
  const commonFileNames = starterFiles
    .map(f => f.name)
    .filter(name => solutionFiles.some(sf => sf.name === name));

  const [selectedFileName, setSelectedFileName] = useState<string>(
    commonFileNames.find(n => n.endsWith('.js') || n === 'index.html') || commonFileNames[0] || ''
  );

  const starterFile = starterFiles.find(f => f.name === selectedFileName);
  const solutionFile = solutionFiles.find(f => f.name === selectedFileName);

  const starterLines = starterFile ? starterFile.content.split('\n') : [];
  const solutionLines = solutionFile ? solutionFile.content.split('\n') : [];

  const starterTodoCount = starterLines.filter(l => l.includes('TODO')).length;

  return (
    <div className="flex flex-col h-full w-full bg-[#0f172a] overflow-hidden font-mono text-xs">
      {/* Top Header / File Selection */}
      <div className="bg-[#1e293b] border-b border-slate-800 px-4 py-2.5 flex items-center justify-between flex-wrap gap-2 shrink-0">
        <div className="flex items-center gap-2">
          <SplitSquareVertical className="w-4 h-4 text-[#f06634]" />
          <span className="font-sans font-bold text-slate-200 text-xs">
            Komparasi Solusi: Starter vs Solution
          </span>
          {starterTodoCount > 0 && (
            <span className="font-sans text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-950/60 text-amber-300 border border-amber-800">
              {starterTodoCount} Tugas TODO
            </span>
          )}
        </div>

        {/* File Select Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto max-w-full">
          {commonFileNames.map((name) => (
            <button
              key={name}
              onClick={() => setSelectedFileName(name)}
              className={`btn-interactive flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] transition-colors border ${
                selectedFileName === name
                  ? 'bg-slate-900 text-amber-300 border-slate-700 font-bold'
                  : 'text-slate-400 border-transparent hover:text-white hover:bg-slate-800'
              }`}
            >
              <FileCode className="w-3 h-3" />
              <span>{name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Side-by-side Viewports */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-800 overflow-hidden">
        {/* Left Column: Starter (Trainee) */}
        <div className="flex flex-col h-full overflow-hidden">
          <div className="bg-amber-950/30 px-4 py-2 border-b border-slate-800 flex items-center justify-between text-xs font-sans shrink-0">
            <span className="font-bold text-amber-300 flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5" /> 1-Starter (Trainee Baseline)
            </span>
            <span className="text-slate-400 font-mono text-[11px]">{starterLines.length} baris</span>
          </div>

          <div className="flex-1 overflow-auto p-4 select-text font-mono text-[11.5px] leading-relaxed">
            {starterLines.map((line, idx) => {
              const isTodo = line.includes('TODO');
              return (
                <div
                  key={idx}
                  className={`flex gap-3 hover:bg-slate-800/40 py-0.5 px-1.5 rounded ${
                    isTodo ? 'bg-amber-950/50 border-l-2 border-amber-500 text-amber-300 font-bold' : 'text-slate-300'
                  }`}
                >
                  <span className="text-slate-600 select-none w-8 text-right shrink-0">{idx + 1}</span>
                  <span className="whitespace-pre">{line}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Solution (Instructor) */}
        <div className="flex flex-col h-full overflow-hidden">
          <div className="bg-emerald-950/30 px-4 py-2 border-b border-slate-800 flex items-center justify-between text-xs font-sans shrink-0">
            <span className="font-bold text-emerald-300 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" /> 2-Solution (Referensi Instruktur)
            </span>
            <span className="text-slate-400 font-mono text-[11px]">{solutionLines.length} baris</span>
          </div>

          <div className="flex-1 overflow-auto p-4 select-text font-mono text-[11.5px] leading-relaxed">
            {solutionLines.map((line, idx) => (
              <div
                key={idx}
                className="flex gap-3 hover:bg-slate-800/40 py-0.5 px-1.5 rounded text-slate-200"
              >
                <span className="text-slate-600 select-none w-8 text-right shrink-0">{idx + 1}</span>
                <span className="whitespace-pre">{line}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
