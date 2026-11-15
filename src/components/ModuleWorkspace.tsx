import React, { useState, useEffect } from 'react';
import {
  Globe,
  Terminal,
  Code2,
  SplitSquareVertical,
  FlaskConical,
  BookOpen,
  Award,
  ChevronRight,
  ExternalLink,
  Layers,
  Sparkles,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { DemoModule, LabModule, ViewMode, TargetVersion } from '../types';
import { LivePreview } from './LivePreview';
import { CodeInspector } from './CodeInspector';
import { DiffViewer } from './DiffViewer';
import { TestRunnerPanel } from './TestRunnerPanel';
import { ReadmeViewer } from './ReadmeViewer';
import { CapstoneRubricView } from './CapstoneRubricView';

interface ModuleWorkspaceProps {
  module: DemoModule | LabModule;
  sessionNum: number;
  sessionTitle: string;
  isLab: boolean;
  onOpenRubric: () => void;
  viewMode?: ViewMode;
  onViewModeChange?: (mode: ViewMode) => void;
  targetVersion?: TargetVersion;
  onTargetVersionChange?: (version: TargetVersion) => void;
}

export const ModuleWorkspace: React.FC<ModuleWorkspaceProps> = ({
  module,
  sessionNum,
  sessionTitle,
  isLab,
  onOpenRubric,
  viewMode: propsViewMode,
  onViewModeChange,
  targetVersion: propsTargetVersion,
  onTargetVersionChange
}) => {
  const isCapstoneLab = isLab && sessionNum === 12;

  const [internalViewMode, setInternalViewMode] = useState<ViewMode>(
    isCapstoneLab ? 'guide' : 'preview'
  );
  const [internalTargetVersion, setInternalTargetVersion] = useState<TargetVersion>('starter');

  const viewMode = propsViewMode !== undefined ? propsViewMode : internalViewMode;
  const targetVersion = propsTargetVersion !== undefined ? propsTargetVersion : internalTargetVersion;

  const handleViewModeChange = (mode: ViewMode) => {
    if (onViewModeChange) onViewModeChange(mode);
    setInternalViewMode(mode);
  };

  const handleTargetVersionChange = (target: TargetVersion) => {
    if (onTargetVersionChange) onTargetVersionChange(target);
    setInternalTargetVersion(target);
  };

  // Ensure that Capstone Lab 12 only displays 'guide' or 'rubric'
  useEffect(() => {
    if (isCapstoneLab) {
      if (viewMode !== 'guide' && viewMode !== 'rubric') {
        handleViewModeChange('guide');
      }
    } else {
      if (viewMode === 'rubric') {
        handleViewModeChange('preview');
      }
    }
  }, [isCapstoneLab, viewMode]);

  const activeFiles = targetVersion === 'starter' ? module.starter.files : module.solution.files;

  return (
    <main className="flex-1 min-w-0 flex flex-col bg-[#f8fafc] h-full min-h-0 overflow-hidden">
      {/* 1. Capstone Rubric Banner (Exclusive to Lab 12 - Mini Capstone Project) */}
      {isCapstoneLab && (
        <div className="bg-gradient-to-r from-[#1d3d70] via-[#1a3867] to-[#005e6a] text-white px-4 sm:px-6 py-2.5 flex items-center justify-between flex-wrap gap-3 shrink-0 shadow-xs border-b border-[#1d3d70]">
          <div className="flex items-center gap-2.5 text-xs">
            <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
              <Award className="w-3.5 h-3.5 text-amber-300" />
            </div>
            <div>
              <span className="font-bold font-worksans text-white">Mini Capstone Project: Weather Web App</span>
              <span className="text-slate-300 ml-2 hidden sm:inline text-[11px]">— Standar Penilaian Software Engineer BNI ODP IT 2026</span>
            </div>
          </div>

          <button
            onClick={() => handleViewModeChange('rubric')}
            className="btn-interactive flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold text-[#1d3d70] bg-white hover:bg-slate-100 shadow-sm"
          >
            <Award className="w-3.5 h-3.5 text-[#f06634]" />
            <span>Rubrik 100 Poin</span>
          </button>
        </div>
      )}

      {/* 2. Workspace Sub-Header: Breadcrumbs, Title, Tabs & Target Switcher */}
      <div className="bg-white border-b border-slate-200 px-4 sm:px-6 py-3 shrink-0 shadow-2xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          <div>
            {/* Breadcrumbs */}
            <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-0.5 flex-wrap">
              <span className="font-bold text-[#f06634] font-worksans">Sesi {sessionNum < 10 ? `0${sessionNum}` : sessionNum}</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-600 truncate max-w-[220px]">{sessionTitle}</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-bold text-[#1d3d70] uppercase tracking-wider text-[11px] font-worksans">
                {isLab ? `Hands-on Lab ${sessionNum}` : `Demo ${(module as DemoModule).demoNum}`}
              </span>
            </div>

            {/* Module Title & Tag */}
            <div className="flex items-center gap-2.5 flex-wrap">
              <h2 className="text-lg sm:text-xl font-black text-slate-900 font-worksans tracking-tight">
                {module.title}
              </h2>

              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                isLab
                  ? 'bg-amber-50 text-amber-800 border-amber-200'
                  : module.type === 'web'
                  ? 'bg-sky-50 text-sky-800 border-sky-200'
                  : 'bg-emerald-50 text-emerald-800 border-emerald-200'
              }`}>
                {isLab ? 'Hands-on Lab' : module.type === 'web' ? 'Web Interface' : 'Node Script'}
              </span>

              {/* Rubric Quick Trigger for Lab 12 */}
              {isCapstoneLab && (
                <button
                  onClick={() => handleViewModeChange('rubric')}
                  className="btn-interactive inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#fff7ed] text-[#f06634] border border-[#fed7aa] hover:bg-[#ffedd5]"
                  title="Buka Evaluator Rubrik Capstone 100 Poin"
                >
                  <Award className="w-3 h-3 text-[#f06634]" />
                  <span>Rubrik 100 Poin</span>
                </button>
              )}
            </div>
          </div>

          {/* Mode Switcher Tabs & Target Switcher */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {/* View Mode Tabs: Special for Lab 12 vs Standard */}
            {isCapstoneLab ? (
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
                <button
                  onClick={() => handleViewModeChange('guide')}
                  className={`btn-interactive flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                    viewMode === 'guide'
                      ? 'bg-white text-[#1d3d70] shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Buka panduan instruksi Markdown Capstone"
                >
                  <BookOpen className={`w-3.5 h-3.5 ${viewMode === 'guide' ? 'text-[#f06634]' : 'text-slate-400'}`} />
                  <span>Panduan</span>
                </button>

                <button
                  onClick={() => handleViewModeChange('rubric')}
                  className={`btn-interactive flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                    viewMode === 'rubric'
                      ? 'bg-white text-[#1d3d70] shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Buka Rubrik Penilaian Capstone 100 Poin"
                >
                  <Award className={`w-3.5 h-3.5 ${viewMode === 'rubric' ? 'text-[#f06634]' : 'text-slate-400'}`} />
                  <span>Rubrik 100 Poin</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200 max-w-full overflow-x-auto">
                <button
                  onClick={() => handleViewModeChange('preview')}
                  className={`btn-interactive flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                    viewMode === 'preview'
                      ? 'bg-white text-[#1d3d70] shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Pratinjau langsung interaktif (Web iframe / Node Terminal)"
                >
                  <Globe className={`w-3.5 h-3.5 ${viewMode === 'preview' ? 'text-[#f06634]' : 'text-slate-400'}`} />
                  <span>Live Preview</span>
                </button>

                <button
                  onClick={() => handleViewModeChange('code')}
                  className={`btn-interactive flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                    viewMode === 'code'
                      ? 'bg-white text-[#1d3d70] shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Penjelajah kode multi-file full height"
                >
                  <Code2 className={`w-3.5 h-3.5 ${viewMode === 'code' ? 'text-indigo-600' : 'text-slate-400'}`} />
                  <span>Kode Sumber</span>
                </button>

                <button
                  onClick={() => handleViewModeChange('diff')}
                  className={`btn-interactive flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                    viewMode === 'diff'
                      ? 'bg-white text-[#1d3d70] shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Komparasi komparatif Starter vs Solution"
                >
                  <SplitSquareVertical className={`w-3.5 h-3.5 ${viewMode === 'diff' ? 'text-amber-600' : 'text-slate-400'}`} />
                  <span>Komparasi Diff</span>
                </button>

                {isLab && (
                  <button
                    onClick={() => handleViewModeChange('test')}
                    className={`btn-interactive flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                      viewMode === 'test'
                        ? 'bg-white text-emerald-800 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                    title="Jalankan automated test assertions lab"
                  >
                    <FlaskConical className={`w-3.5 h-3.5 ${viewMode === 'test' ? 'text-emerald-600' : 'text-slate-400'}`} />
                    <span>Test Harness</span>
                  </button>
                )}

                <button
                  onClick={() => handleViewModeChange('guide')}
                  className={`btn-interactive flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                    viewMode === 'guide'
                      ? 'bg-white text-[#1d3d70] shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Buka panduan instruksi Markdown"
                >
                  <BookOpen className={`w-3.5 h-3.5 ${viewMode === 'guide' ? 'text-[#f06634]' : 'text-slate-400'}`} />
                  <span>Panduan</span>
                </button>
              </div>
            )}

            {/* Target Version Switcher Pill: Hidden for Lab 12 */}
            {!isCapstoneLab && (
              <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-xs">
                <button
                  onClick={() => handleTargetVersionChange('starter')}
                  className={`btn-interactive px-2.5 py-1 rounded-md text-[11px] font-bold transition-all ${
                    targetVersion === 'starter'
                      ? 'bg-amber-500 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Tampilkan versi 1-starter (Trainee)"
                >
                  1-Starter
                </button>
                <button
                  onClick={() => handleTargetVersionChange('solution')}
                  className={`btn-interactive px-2.5 py-1 rounded-md text-[11px] font-bold transition-all ${
                    targetVersion === 'solution'
                      ? 'bg-emerald-600 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Tampilkan versi 2-solution (Instruktur)"
                >
                  2-Solution
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 3. Main Content Workspace Body: Full Height Edge-to-Edge */}
      <div className="flex-1 flex flex-col min-h-0 overflow-hidden bg-slate-100">
        {viewMode === 'preview' && !isCapstoneLab && (
          <LivePreview
            module={module}
            targetVersion={targetVersion}
            onSwitchTarget={handleTargetVersionChange}
          />
        )}

        {viewMode === 'code' && !isCapstoneLab && (
          <CodeInspector
            files={activeFiles}
            targetVersion={targetVersion}
            onSwitchTarget={handleTargetVersionChange}
          />
        )}

        {viewMode === 'diff' && !isCapstoneLab && (
          <DiffViewer
            starterFiles={module.starter.files}
            solutionFiles={module.solution.files}
          />
        )}

        {viewMode === 'test' && isLab && !isCapstoneLab && (
          <TestRunnerPanel
            lab={module as LabModule}
            targetVersion={targetVersion}
            onSwitchTarget={handleTargetVersionChange}
          />
        )}

        {viewMode === 'guide' && (
          <ReadmeViewer
            title={module.title}
            content={module.readme}
          />
        )}

        {viewMode === 'rubric' && isCapstoneLab && (
          <CapstoneRubricView />
        )}
      </div>
    </main>
  );
};
