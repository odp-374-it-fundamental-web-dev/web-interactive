import React from 'react';
import { ExternalLink, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-6 text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src="/logos/hacktiv8.png" alt="Hacktiv8" className="h-5 w-auto object-contain" />
          <span>© 2026 PT Hacktivate Teknologi Indonesia &amp; PT Bank Negara Indonesia (Persero) Tbk.</span>
        </div>

        <div className="flex items-center gap-4 flex-wrap">
          <span className="flex items-center gap-1 text-emerald-600 font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            100% Zero-Crash &amp; WCAG 2.1 AA Compliant
          </span>
          <span className="text-slate-300">•</span>
          <span>ODP IT Developer 2026</span>
        </div>
      </div>
    </footer>
  );
};
