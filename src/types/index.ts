export type PhaseId = 'all' | 'phase-1' | 'phase-2' | 'phase-3';

export interface CodeFile {
  name: string;
  relativePath: string;
  content: string;
  language: string;
  size: number;
}

export interface DemoModule {
  id: string;
  demoNum: number;
  sessionNum: number;
  title: string;
  type: 'web' | 'script';
  readme: string;
  previewBaseUrl: string;
  starter: {
    files: CodeFile[];
    hasIndexHtml: boolean;
    mainFile: string;
  };
  solution: {
    files: CodeFile[];
    hasIndexHtml: boolean;
    mainFile: string;
  };
}

export interface LabModule {
  id: string;
  labNum: number;
  sessionNum: number;
  title: string;
  type: 'web' | 'script';
  readme: string;
  previewBaseUrl: string;
  testRunner: {
    hasTestRunner: boolean;
    starterScript: string;
    solutionScript: string;
  };
  starter: {
    files: CodeFile[];
    hasIndexHtml: boolean;
    mainFile: string;
  };
  solution: {
    files: CodeFile[];
    hasIndexHtml: boolean;
    mainFile: string;
  };
}

export interface SessionData {
  id: string;
  sessionNum: number;
  phase: string;
  title: string;
  tagline: string;
  hours: number;
  slides: number;
  readme: string;
  demos: DemoModule[];
  lab: LabModule;
}

export interface CurriculumData {
  metadata: {
    title: string;
    company: string;
    totalSessions: number;
    totalHours: number;
    totalDemos: number;
    totalLabs: number;
    buildTime: string;
  };
  phases: {
    id: string;
    name: string;
    sessions: number[];
    focus: string;
  }[];
  sessions: SessionData[];
}

export type AppView = 'workbench' | 'roadmap';
export type ViewMode = 'preview' | 'code' | 'diff' | 'test' | 'guide' | 'rubric';
export type TargetVersion = 'starter' | 'solution';
export type ViewportDevice = 'desktop' | 'tablet' | 'mobile';

export interface TestResultItem {
  id: string;
  category: string;
  name: string;
  passed: boolean;
  message?: string;
}
