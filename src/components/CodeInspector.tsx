import React, { useState } from 'react';
import { Copy, Check, FileCode, Code2, AlertCircle, Sparkles, Terminal } from 'lucide-react';
import { CodeFile, TargetVersion } from '../types';

interface CodeInspectorProps {
  files: CodeFile[];
  targetVersion: TargetVersion;
  onSwitchTarget: (version: TargetVersion) => void;
}

export const CodeInspector: React.FC<CodeInspectorProps> = ({
  files,
  targetVersion,
  onSwitchTarget
}) => {
  const [selectedFileName, setSelectedFileName] = useState<string>(
    files.find(f => f.name === 'index.html' || f.name.endsWith('.js'))?.name || files[0]?.name || ''
  );
  const [copied, setCopied] = useState(false);

  // If selected file is not in current files, pick the first
  const currentFile = files.find(f => f.name === selectedFileName) || files[0];

  const handleCopy = () => {
    if (!currentFile) return;
    navigator.clipboard.writeText(currentFile.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = currentFile ? currentFile.content.split('\n') : [];
  const lineCount = lines.length;

  return (
    <div className="flex flex-col h-full w-full bg-[#0f172a] overflow-hidden font-mono text-xs">
      {/* Top Header / File Tabs */}
      <div className="bg-[#1e293b] border-b border-slate-800 flex items-center justify-between px-4 py-2 flex-wrap gap-2 shrink-0">
        {/* Left: Window Dots & Version Badge */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 hidden sm:flex">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
          </div>

          <div className="flex items-center bg-slate-900/80 p-0.5 rounded-lg border border-slate-700/80 text-[11px] font-sans">
            <button
              onClick={() => onSwitchTarget('starter')}
              className={`btn-interactive px-2.5 py-0.5 rounded font-semibold transition-all ${
                targetVersion === 'starter'
                  ? 'bg-amber-500 text-white shadow-2xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              1-Starter
            </button>
            <button
              onClick={() => onSwitchTarget('solution')}
              className={`btn-interactive px-2.5 py-0.5 rounded font-semibold transition-all ${
                targetVersion === 'solution'
                  ? 'bg-emerald-600 text-white shadow-2xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              2-Solution
            </button>
          </div>
        </div>

        {/* Center: File Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto max-w-full">
          {files.map((file) => {
            const isActive = file.name === currentFile?.name;
            return (
              <button
                key={file.relativePath}
                onClick={() => setSelectedFileName(file.name)}
                className={`btn-interactive flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] transition-colors whitespace-nowrap border ${
                  isActive
                    ? 'bg-[#0f172a] text-amber-300 border-slate-700 font-bold shadow-inner'
                    : 'text-slate-400 border-transparent hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <FileCode className="w-3.5 h-3.5" />
                <span>{file.relativePath}</span>
              </button>
            );
          })}
        </div>

        {/* Right: File Metadata & Copy Button */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-1.5 text-[11px] font-sans text-slate-400">
            <span>Berkas:</span>
            <span className="font-mono text-emerald-400 font-bold">{lineCount} baris</span>
            <span className="text-slate-600">•</span>
            <span className="font-mono uppercase text-slate-300">{currentFile?.language || 'TEXT'}</span>
          </div>

          <button
            onClick={handleCopy}
            className="btn-interactive flex items-center gap-1.5 px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-md border border-slate-700 text-xs font-sans font-medium"
            title="Salin isi berkas"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-bold">Tersalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Salin</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code Editor Body: Full Height Scrollable Viewport */}
      <div className="flex-1 overflow-auto p-4 select-text font-mono text-[12px] leading-relaxed bg-[#0b1120]">
        {lines.map((line, idx) => {
          const isTodo = line.includes('TODO');
          return (
            <div
              key={idx}
              className={`flex gap-4 hover:bg-slate-800/40 py-0.5 px-2 rounded ${
                isTodo ? 'bg-amber-950/40 border-l-2 border-amber-500' : ''
              }`}
            >
              <span className="text-slate-600 select-none w-10 text-right shrink-0 font-mono">
                {idx + 1}
              </span>
              <span className={`whitespace-pre font-mono ${isTodo ? 'text-amber-300 font-bold' : 'text-slate-200'}`}>
                {line}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
