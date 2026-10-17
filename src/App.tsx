import React, { useState } from 'react';
import { Language, MarketType } from './types/market';
import { TopBar } from './components/TopBar';
import { MarketHero } from './components/MarketHero';
import { MarketConceptsViewer } from './components/MarketConceptsViewer';
import { MarketSandboxSimulator } from './components/MarketSandboxSimulator';
import { MarketClassifierGame } from './components/MarketClassifierGame';
import { ClassroomQuiz } from './components/ClassroomQuiz';
import { ComparisonTable } from './components/ComparisonTable';
import { TeacherWorksheetModal } from './components/TeacherWorksheetModal';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [selectedMarket, setSelectedMarket] = useState<MarketType>('perfect_competition');
  const [isWorksheetOpen, setIsWorksheetOpen] = useState<boolean>(false);

  const handleToggleLang = () => {
    setCurrentLang((prev) => (prev === 'en' ? 'id' : 'en'));
  };

  const handleJumpToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectMarket = (id: MarketType) => {
    setSelectedMarket(id);
  };

  const handleSimulateMarket = (id: MarketType) => {
    setSelectedMarket(id);
    handleJumpToSection('sandbox');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* 3-Zone Top Navigation Bar */}
      <TopBar
        currentLang={currentLang}
        onToggleLang={handleToggleLang}
        onOpenWorksheet={() => setIsWorksheetOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <MarketHero
          currentLang={currentLang}
          onSelectMarket={handleSelectMarket}
          onJumpToSection={handleJumpToSection}
        />

        {/* Visual Concepts & Anatomy Viewer */}
        <MarketConceptsViewer
          currentLang={currentLang}
          selectedMarket={selectedMarket}
          onSelectMarket={handleSelectMarket}
          onSimulateMarket={handleSimulateMarket}
        />

        {/* Interactive Game 1: Market Simulator Sandbox */}
        <MarketSandboxSimulator
          currentLang={currentLang}
          initialMarket={selectedMarket}
        />

        {/* Interactive Game 2: Detective Sorter Game */}
        <MarketClassifierGame
          currentLang={currentLang}
        />

        {/* Interactive Game 3: Classroom Quiz */}
        <ClassroomQuiz
          currentLang={currentLang}
        />

        {/* Side-by-Side Comparison Matrix */}
        <ComparisonTable
          currentLang={currentLang}
        />
      </main>

      {/* Clean Footer (No fake telemetry, quiet copyright & educational credits) */}
      <footer className="bg-white border-t border-slate-200 py-10 no-print">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800">MarketVerse</span>
            <span aria-hidden="true">·</span>
            <span>{currentLang === 'en' ? 'Social Studies & Economics Education' : 'Pendidikan IPS & Ekonomi'}</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsWorksheetOpen(true)}
              className="hover:text-slate-800 transition-colors cursor-pointer"
            >
              {currentLang === 'en' ? 'Printable Worksheet' : 'Lembar Kerja Siswa'}
            </button>
            <a href="#hero" className="hover:text-slate-800 transition-colors">
              {currentLang === 'en' ? 'Back to top' : 'Kembali ke atas'}
            </a>
          </div>
        </div>
      </footer>

      {/* Printable Worksheet Modal */}
      <TeacherWorksheetModal
        isOpen={isWorksheetOpen}
        onClose={() => setIsWorksheetOpen(false)}
        currentLang={currentLang}
      />
    </div>
  );
}
