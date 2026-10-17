import React from 'react';
import { Language } from '../types/market';
import { BookOpen, Languages, Printer } from 'lucide-react';

interface TopBarProps {
  currentLang: Language;
  onToggleLang: () => void;
  onOpenWorksheet: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ currentLang, onToggleLang, onOpenWorksheet }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark */}
        <a href="#hero" className="text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center text-sm font-black shadow-sm">
            M
          </span>
          <span>MarketVerse</span>
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <a href="#concepts" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
            {currentLang === 'en' ? 'Core Concepts' : 'Konsep Dasar'}
          </a>
          <a href="#sandbox" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
            {currentLang === 'en' ? 'Market Sandbox' : 'Simulasi Pasar'}
          </a>
          <a href="#classifier" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
            {currentLang === 'en' ? 'Detective Game' : 'Game Detektif'}
          </a>
          <a href="#quiz" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
            {currentLang === 'en' ? 'Class Quiz' : 'Kuis Kelas'}
          </a>
          <a href="#comparison" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
            {currentLang === 'en' ? 'Comparison Matrix' : 'Tabel Matriks'}
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            title="Toggle Language / Ganti Bahasa"
            aria-label="Toggle language"
          >
            <Languages className="w-3.5 h-3.5 text-slate-500" />
            <span className="font-semibold">{currentLang === 'en' ? 'ID' : 'EN'}</span>
          </button>

          <button
            onClick={onOpenWorksheet}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0 shadow-sm cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>{currentLang === 'en' ? 'Teacher Worksheet' : 'Lembar Kerja Siswa'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
