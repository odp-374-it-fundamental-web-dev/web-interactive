import React, { useState, useEffect } from 'react';
import materialsData from './data/materials-data.json';
import { CurriculumData, PhaseId, DemoModule, LabModule, AppView, ViewMode, TargetVersion } from './types';
import { Header } from './components/Header';
import { Hero3D } from './components/Hero3D';
import { CurriculumRoadmap } from './components/CurriculumRoadmap';
import { SessionList } from './components/SessionList';
import { ModuleWorkspace } from './components/ModuleWorkspace';
import { CapstoneRubricModal } from './components/CapstoneRubricModal';
import { SearchModal } from './components/SearchModal';
import { Footer } from './components/Footer';

const data = materialsData as unknown as CurriculumData;

export function App() {
  // Initial load points to "Peta Kurikulum" (roadmap)
  const [currentView, setCurrentView] = useState<AppView>('roadmap');
  const [hasVisitedStudio, setHasVisitedStudio] = useState(false);
  const [activePhase, setActivePhase] = useState<PhaseId>('all');
  const [selectedSessionNum, setSelectedSessionNum] = useState<number>(1);
  const [selectedModule, setSelectedModule] = useState<DemoModule | LabModule>(
    data.sessions[0].demos[0]
  );
  const [viewMode, setViewMode] = useState<ViewMode>('preview');
  const [targetVersion, setTargetVersion] = useState<TargetVersion>('starter');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isRubricOpen, setIsRubricOpen] = useState(false);

  // Current session object
  const currentSession = data.sessions.find(s => s.sessionNum === selectedSessionNum) || data.sessions[0];
  const isLab = 'labNum' in selectedModule;

  // View switcher handler with first-time redirect to Demo 1 -> Live Preview -> 1-starter
  const handleViewChange = (view: AppView) => {
    if (view === 'workbench') {
      if (!hasVisitedStudio) {
        setSelectedSessionNum(1);
        const session1 = data.sessions.find(s => s.sessionNum === 1) || data.sessions[0];
        setSelectedModule(session1.demos[0]);
        setViewMode('preview');
        setTargetVersion('starter');
        setHasVisitedStudio(true);
      }
    }
    setCurrentView(view);
  };

  // Handle phase change
  const handlePhaseChange = (phase: PhaseId) => {
    setActivePhase(phase);
    if (phase === 'phase-1' && selectedSessionNum > 4) {
      handleSelectSession(1);
    } else if (phase === 'phase-2' && (selectedSessionNum < 5 || selectedSessionNum > 8)) {
      handleSelectSession(5);
    } else if (phase === 'phase-3' && selectedSessionNum < 9) {
      handleSelectSession(9);
    }
  };

  // Handle session selection: always open the top Demo, instead of Lab
  const handleSelectSession = (sessionNum: number) => {
    setSelectedSessionNum(sessionNum);
    const targetSession = data.sessions.find(s => s.sessionNum === sessionNum);
    if (targetSession) {
      const topDemo = targetSession.demos && targetSession.demos.length > 0
        ? targetSession.demos[0]
        : targetSession.lab;
      if (topDemo) {
        setSelectedModule(topDemo);
      }
      if (viewMode === 'rubric') {
        setViewMode('preview');
      }
    }
  };

  // Handle module selection
  const handleSelectModule = (mod: DemoModule | LabModule, sessionNum: number) => {
    setSelectedSessionNum(sessionNum);
    setSelectedModule(mod);
    setCurrentView('workbench');
    const isTargetCapstoneLab = 'labNum' in mod && sessionNum === 12;
    if (isTargetCapstoneLab) {
      if (viewMode !== 'guide' && viewMode !== 'rubric') {
        setViewMode('guide');
      }
    } else if (viewMode === 'rubric') {
      setViewMode('preview');
    }
  };

  // Global hotkeys (⌘K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`${currentView === 'workbench' ? 'h-screen overflow-hidden' : 'min-h-screen'} flex flex-col bg-[#f8fafc] text-slate-800 selection:bg-[#f06634]/20 selection:text-[#f06634]`}>
      {/* 1. Global Navigation Bar */}
      <Header
        currentView={currentView}
        onChangeView={handleViewChange}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* 2. Main View Display: Workbench IDE vs Curriculum Roadmap */}
      {currentView === 'workbench' ? (
        <div className="flex-1 min-h-0 flex flex-col lg:flex-row h-[calc(100vh-4rem)] max-w-[100vw] overflow-hidden">
          {/* Left Sidebar: 12 Sessions & Modules Accordion */}
          <SessionList
            sessions={data.sessions}
            activePhase={activePhase}
            selectedSessionNum={selectedSessionNum}
            selectedModuleId={selectedModule.id}
            onSelectSession={handleSelectSession}
            onSelectModule={handleSelectModule}
          />

          {/* Right Main Workbench: Live Preview, Code Inspector, Diff, Test Harness, Rubrik */}
          <ModuleWorkspace
            module={selectedModule}
            sessionNum={currentSession.sessionNum}
            sessionTitle={currentSession.title}
            isLab={isLab}
            onOpenRubric={() => setIsRubricOpen(true)}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            targetVersion={targetVersion}
            onTargetVersionChange={setTargetVersion}
          />
        </div>
      ) : (
        <div className="flex-1 flex flex-col">
          {/* Hero 3D Interactive Banner */}
          <Hero3D
            totalSessions={data.metadata.totalSessions}
            totalDemos={data.metadata.totalDemos}
            totalLabs={data.metadata.totalLabs}
          />

          {/* Detailed Curriculum Roadmap & Capstone Architecture */}
          <CurriculumRoadmap
            data={data}
            onSelectSession={(sNum) => {
              handleSelectSession(sNum);
              handleViewChange('workbench');
            }}
            onSwitchToWorkbench={() => handleViewChange('workbench')}
          />

          {/* Footer */}
          <Footer />
        </div>
      )}

      {/* 3. Global Capstone 100-Point Rubric Modal */}
      <CapstoneRubricModal
        isOpen={isRubricOpen}
        onClose={() => setIsRubricOpen(false)}
      />

      {/* 4. Global Search Modal (⌘K) */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        sessions={data.sessions}
        onSelectResult={handleSelectModule}
      />
    </div>
  );
}

export default App;
