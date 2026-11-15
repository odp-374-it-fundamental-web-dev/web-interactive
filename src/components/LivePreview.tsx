import React, { useState, useRef, useEffect } from 'react';
import {
  RotateCcw,
  ExternalLink,
  Smartphone,
  Tablet,
  Monitor,
  Play,
  Terminal as TerminalIcon,
  CheckCircle2,
  AlertTriangle,
  Code,
  ShieldCheck,
  Lock,
  Layers,
  Sparkles
} from 'lucide-react';
import { DemoModule, LabModule, TargetVersion, ViewportDevice } from '../types';

interface LivePreviewProps {
  module: DemoModule | LabModule;
  targetVersion: TargetVersion;
  onSwitchTarget: (version: TargetVersion) => void;
}

export const LivePreview: React.FC<LivePreviewProps> = ({
  module,
  targetVersion,
  onSwitchTarget
}) => {
  const [device, setDevice] = useState<ViewportDevice>('desktop');
  const [iframeKey, setIframeKey] = useState(0);
  const [scriptLogs, setScriptLogs] = useState<Array<{ type: 'log' | 'info' | 'warn' | 'error' | 'table'; message: string }>>([]);
  const [isRunningScript, setIsRunningScript] = useState(false);
  const [scriptRunSuccess, setScriptRunSuccess] = useState<boolean | null>(null);

  const activeFiles = targetVersion === 'starter' ? module.starter.files : module.solution.files;
  const hasHtml = targetVersion === 'starter' ? module.starter.hasIndexHtml : module.solution.hasIndexHtml;

  // Iframe preview URL
  const previewPath = `${module.previewBaseUrl}/${targetVersion === 'starter' ? '1-starter' : '2-solution'}/index.html`;

  const reloadPreview = () => {
    setIframeKey(prev => prev + 1);
  };

  // Run pure JavaScript script inside browser sandbox
  const runScriptInSandbox = () => {
    setIsRunningScript(true);
    setScriptLogs([]);
    setScriptRunSuccess(null);

    const logs: Array<{ type: 'log' | 'info' | 'warn' | 'error' | 'table'; message: string }> = [];

    // Gather JS files (excluding test-runner)
    const jsFiles = activeFiles.filter(f => f.name.endsWith('.js') && !f.name.includes('test-runner'));
    const codeToRun = jsFiles.map(f => `// File: ${f.name}\n${f.content}`).join('\n\n');

    // Custom console capturer
    const customConsole = {
      log: (...args: any[]) => {
        logs.push({ type: 'log', message: args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ') });
      },
      info: (...args: any[]) => {
        logs.push({ type: 'info', message: args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ') });
      },
      warn: (...args: any[]) => {
        logs.push({ type: 'warn', message: args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ') });
      },
      error: (...args: any[]) => {
        logs.push({ type: 'error', message: args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ') });
      },
      table: (data: any) => {
        logs.push({ type: 'table', message: JSON.stringify(data, null, 2) });
      },
      assert: (condition: boolean, ...args: any[]) => {
        if (!condition) {
          logs.push({ type: 'error', message: `Assertion failed: ${args.join(' ')}` });
        } else {
          logs.push({ type: 'info', message: `Assertion passed: ${args.join(' ')}` });
        }
      }
    };

    try {
      // Clean module statements for sandbox execution
      const sanitizedCode = codeToRun
        .replace(/export\s+default\s+/g, '')
        .replace(/export\s+(const|let|var|function|class)\s+/g, '$1 ')
        .replace(/import\s+.*?from\s+['"].*?['"];?/g, '')
        .replace(/if\s*\(typeof\s+module\s*!==\s*["']undefined["'][\s\S]*?}/g, '');

      const runner = new Function('console', sanitizedCode);
      runner(customConsole);

      const hasErrors = logs.some(l => l.type === 'error');
      setScriptRunSuccess(!hasErrors);
    } catch (err: any) {
      logs.push({ type: 'error', message: `Runtime Exception: ${err.message}` });
      setScriptRunSuccess(false);
    } finally {
      setScriptLogs(logs);
      setIsRunningScript(false);
    }
  };

  // Reset logs when switching modules
  useEffect(() => {
    setScriptLogs([]);
    setScriptRunSuccess(null);
  }, [module.id, targetVersion]);

  return (
    <div className="flex flex-col h-full w-full min-h-0 bg-white overflow-hidden">
      {/* 1. Web Modules: Browser Preview with Device Viewport Switcher */}
      {hasHtml ? (
        <>
          {/* Top Browser Bar */}
          <div className="bg-slate-100/90 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between flex-wrap gap-2 shrink-0">
            {/* Left: Window Dots & Device Selectors */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 hidden sm:flex">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
              </div>

              {/* Viewport Switcher */}
              <div className="flex items-center bg-white p-0.5 rounded-lg border border-slate-200 shadow-2xs">
                <button
                  onClick={() => setDevice('desktop')}
                  className={`btn-interactive p-1.5 rounded-md text-xs font-semibold ${
                    device === 'desktop'
                      ? 'bg-[#1d3d70] text-white shadow-2xs'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                  title="Desktop Viewport (100%)"
                >
                  <Monitor className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setDevice('tablet')}
                  className={`btn-interactive p-1.5 rounded-md text-xs font-semibold ${
                    device === 'tablet'
                      ? 'bg-[#1d3d70] text-white shadow-2xs'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                  title="Tablet Viewport (768px)"
                >
                  <Tablet className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setDevice('mobile')}
                  className={`btn-interactive p-1.5 rounded-md text-xs font-semibold ${
                    device === 'mobile'
                      ? 'bg-[#1d3d70] text-white shadow-2xs'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                  title="Mobile Viewport (375px)"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Simulated Address Bar */}
            <div className="flex-1 max-w-md mx-2">
              <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-lg border border-slate-200 text-[11px] font-mono text-slate-600 truncate shadow-2xs">
                <Lock className="w-3 h-3 text-emerald-600 shrink-0" />
                <span className="text-slate-400">https://bni-odp.internal</span>
                <span className="text-[#1d3d70] font-bold truncate">{previewPath}</span>
              </div>
            </div>

            {/* Actions: Reload & Open in Tab */}
            <div className="flex items-center gap-2">
              <button
                onClick={reloadPreview}
                className="btn-interactive p-1.5 text-slate-500 hover:text-slate-800 bg-white hover:bg-slate-50 rounded-lg border border-slate-200 shadow-2xs"
                title="Muat ulang halaman pratinjau"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <a
                href={previewPath}
                target="_blank"
                rel="noreferrer"
                className="btn-interactive flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white rounded-lg border border-slate-200 shadow-2xs"
                title="Buka mandiri di tab browser baru"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#f06634]" />
                <span className="hidden sm:inline">Tab Baru</span>
              </a>
            </div>
          </div>

          {/* Device Frame Viewport Container */}
          <div className={`flex-1 min-h-0 bg-slate-200/50 p-2 sm:p-4 lg:p-5 flex justify-center overflow-auto ${
            device === 'desktop' ? 'items-stretch' : 'items-center'
          }`}>
            <div
              className={`transition-all duration-300 flex flex-col bg-white rounded-xl shadow-lg border border-slate-300 overflow-hidden ${
                device === 'mobile'
                  ? 'w-[375px] max-w-full h-[667px] sm:h-[720px] shrink-0 my-auto'
                  : device === 'tablet'
                  ? 'w-[768px] max-w-full h-[760px] sm:h-[840px] shrink-0 my-auto'
                  : 'w-full h-full min-h-[calc(100vh-14rem)] lg:min-h-0'
              }`}
            >
              {/* Mobile Notch Indicator */}
              {device === 'mobile' && (
                <div className="bg-slate-900 h-5 w-full flex items-center justify-center shrink-0">
                  <div className="w-16 h-2.5 bg-black rounded-b-md" />
                </div>
              )}

              <iframe
                key={iframeKey}
                src={previewPath}
                title="Live Sandbox Preview"
                className="w-full flex-1 h-full min-h-[calc(100vh-15rem)] lg:min-h-0 border-0 bg-white"
                sandbox="allow-scripts allow-forms allow-same-origin allow-modals"
              />

              {/* Mobile Home Bar */}
              {device === 'mobile' && (
                <div className="bg-white h-4 w-full flex items-center justify-center shrink-0 border-t border-slate-100">
                  <div className="w-24 h-1 bg-slate-300 rounded-full" />
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        /* 2. Non-Web / Node Scripts: Dark IDE Terminal Frame */
        <div className="flex-1 min-h-0 flex flex-col bg-[#0f172a] text-slate-200 font-mono overflow-hidden">
          {/* Terminal Title Bar */}
          <div className="bg-[#1e293b] border-b border-slate-800 px-4 py-2.5 flex items-center justify-between flex-wrap gap-2 shrink-0">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
              </div>

              <div className="flex items-center gap-2 text-xs font-sans text-slate-300">
                <TerminalIcon className="w-4 h-4 text-[#f06634]" />
                <span className="font-bold">Node.js Execution Terminal</span>
                <span className="text-[10px] text-slate-500 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-700">
                  v26 Sandbox
                </span>
              </div>
            </div>

            {/* Run Button */}
            <button
              onClick={runScriptInSandbox}
              disabled={isRunningScript}
              className="btn-interactive flex items-center gap-2 px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold font-sans shadow-md disabled:opacity-50"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{isRunningScript ? 'Mengeksekusi...' : 'Jalankan Skrip Node.js'}</span>
            </button>
          </div>

          {/* Terminal Output Area */}
          <div className="flex-1 min-h-0 p-4 overflow-y-auto space-y-2 select-text text-xs leading-relaxed">
            {/* Initial Prompt */}
            <div className="text-slate-500 border-b border-slate-800/80 pb-2 mb-3">
              $ node {activeFiles.find(f => f.name.endsWith('.js'))?.name || 'app.js'} ({targetVersion})
            </div>

            {scriptLogs.length === 0 && !isRunningScript && (
              <div className="p-8 text-center text-slate-500">
                <TerminalIcon className="w-8 h-8 text-slate-600 mx-auto mb-2 opacity-50" />
                <p>Klik tombol <strong>"Jalankan Skrip Node.js"</strong> di atas untuk mengeksekusi logika transaksi dan melihat output log stdout.</p>
              </div>
            )}

            {scriptLogs.map((log, index) => {
              let color = 'text-slate-300';
              if (log.type === 'error') color = 'text-rose-400 bg-rose-950/30 p-2 rounded border border-rose-900/50';
              if (log.type === 'warn') color = 'text-amber-300 bg-amber-950/30 p-2 rounded border border-amber-900/50';
              if (log.type === 'info') color = 'text-sky-300';

              return (
                <div key={index} className={`font-mono whitespace-pre-wrap ${color}`}>
                  {log.message}
                </div>
              );
            })}

            {scriptRunSuccess !== null && (
              <div className={`mt-4 pt-3 border-t border-slate-800 text-xs flex items-center gap-2 ${
                scriptRunSuccess ? 'text-emerald-400' : 'text-rose-400'
              }`}>
                {scriptRunSuccess ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Proses selesai dengan kode status 0 (Success).</span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-4 h-4" />
                    <span>Terdeteksi kegagalan eksekusi atau assertion error. Periksa kembali kode sumber.</span>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
