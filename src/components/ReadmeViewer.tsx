import React, { useState, useMemo } from 'react';
import { marked } from 'marked';
import {
  BookOpen,
  Copy,
  Check,
  FileText,
  Code2,
  Clock,
  Sparkles,
  Info,
  AlertTriangle,
  Lightbulb,
  ShieldAlert
} from 'lucide-react';

interface ReadmeViewerProps {
  title: string;
  content: string;
}

export const ReadmeViewer: React.FC<ReadmeViewerProps> = ({ title, content }) => {
  const [viewType, setViewType] = useState<'rendered' | 'raw'>('rendered');
  const [copied, setCopied] = useState(false);

  // Configure marked for clean security and formatting
  const htmlContent = useMemo(() => {
    if (!content) return '<p class="text-slate-400 italic">Tidak ada dokumentasi panduan untuk modul ini.</p>';
    try {
      // Pre-process custom alerts like > [!NOTE], > [!WARNING], > [!IMPORTANT]
      const preprocessed = content
        .replace(/>\s*\[!NOTE\]\s*(.*)/gi, '<div class="markdown-alert markdown-alert-note"><strong>📌 Catatan:</strong> $1</div>')
        .replace(/>\s*\[!TIP\]\s*(.*)/gi, '<div class="markdown-alert markdown-alert-tip"><strong>💡 Tips:</strong> $1</div>')
        .replace(/>\s*\[!IMPORTANT\]\s*(.*)/gi, '<div class="markdown-alert markdown-alert-important"><strong>⚡ Penting:</strong> $1</div>')
        .replace(/>\s*\[!WARNING\]\s*(.*)/gi, '<div class="markdown-alert markdown-alert-warning"><strong>⚠️ Peringatan:</strong> $1</div>')
        .replace(/>\s*\[!CAUTION\]\s*(.*)/gi, '<div class="markdown-alert markdown-alert-caution"><strong>🛑 Perhatian:</strong> $1</div>');

      return marked.parse(preprocessed) as string;
    } catch (err: any) {
      return `<div class="p-4 bg-rose-50 text-rose-600 rounded">Gagal merender markdown: ${err.message}</div>`;
    }
  }, [content]);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = content ? content.split('\n') : [];
  const wordCount = content ? content.trim().split(/\s+/).length : 0;
  const readingTimeMin = Math.max(1, Math.ceil(wordCount / 180));

  return (
    <div className="flex flex-col h-full w-full bg-white overflow-hidden text-xs">
      {/* Header Bar */}
      <div className="bg-slate-50 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between flex-wrap gap-2 shrink-0">
        <div className="flex items-center gap-2.5">
          <BookOpen className="w-4 h-4 text-[#f06634]" />
          <span className="font-bold text-slate-800 text-xs font-worksans truncate max-w-[260px] sm:max-w-md">
            Panduan Modul: {title}
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-slate-500 font-sans">
            <Clock className="w-3 h-3 text-slate-400" /> ~{readingTimeMin} mnt baca ({wordCount} kata)
          </span>
        </div>

        {/* View Switcher & Copy Action */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-slate-200/70 p-0.5 rounded-lg border border-slate-300/70">
            <button
              onClick={() => setViewType('rendered')}
              className={`btn-interactive flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold transition-all ${
                viewType === 'rendered'
                  ? 'bg-white text-[#1d3d70] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-[#f06634]" />
              <span>Format Dokumen</span>
            </button>

            <button
              onClick={() => setViewType('raw')}
              className={`btn-interactive flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold transition-all ${
                viewType === 'raw'
                  ? 'bg-white text-[#1d3d70] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Code2 className="w-3.5 h-3.5 text-indigo-600" />
              <span>Markdown Mentah</span>
            </button>
          </div>

          <button
            onClick={handleCopy}
            className="btn-interactive flex items-center gap-1 px-3 py-1 text-slate-700 hover:text-slate-900 bg-white rounded-lg border border-slate-300 text-xs shadow-2xs hover:border-slate-400 font-medium"
            title="Salin isi mentah Markdown"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-bold">Tersalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Salin Raw</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Body Area */}
      <div className="flex-1 overflow-auto p-4 sm:p-6">
        {viewType === 'rendered' ? (
          <div
            className="markdown-body max-w-4xl mx-auto selection:bg-[#f06634]/20"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        ) : (
          <div className="bg-[#0f172a] rounded-xl border border-slate-800 p-4 font-mono text-xs text-slate-200 overflow-auto select-text">
            {lines.map((line, idx) => (
              <div key={idx} className="flex gap-4 hover:bg-slate-800/40 py-0.5">
                <span className="text-slate-600 select-none w-10 text-right shrink-0">{idx + 1}</span>
                <span className="whitespace-pre">{line}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
