import React, { useState } from 'react';
import { Language, MarketType, ScenarioCard } from '../types/market';
import { SCENARIO_CARDS, MARKET_STRUCTURES } from '../data/marketData';
import confetti from 'canvas-confetti';
import {
  Award,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building,
  Store,
  Zap,
} from 'lucide-react';

interface MarketClassifierGameProps {
  currentLang: Language;
}

export const MarketClassifierGame: React.FC<MarketClassifierGameProps> = ({ currentLang }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<MarketType | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  const currentCard: ScenarioCard = SCENARIO_CARDS[currentIndex];

  const handleSelectMarket = (chosen: MarketType) => {
    if (isAnswered) return;

    setSelectedAnswer(chosen);
    setIsAnswered(true);

    const isCorrect = chosen === currentCard.correctMarket;
    if (isCorrect) {
      setScore((prev) => prev + 100 + streak * 20);
      setStreak((prev) => prev + 1);
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 },
      });
    } else {
      setStreak(0);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < SCENARIO_CARDS.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setIsGameOver(true);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
      });
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setIsGameOver(false);
  };

  const marketOptions: { id: MarketType; titleEn: string; titleId: string; icon: string }[] = [
    {
      id: 'perfect_competition',
      titleEn: 'Perfect Competition',
      titleId: 'Persaingan Sempurna',
      icon: '🌾',
    },
    {
      id: 'monopolistic_competition',
      titleEn: 'Monopolistic Comp.',
      titleId: 'Persaingan Monopolistis',
      icon: '☕',
    },
    {
      id: 'oligopoly',
      titleEn: 'Oligopoly',
      titleId: 'Oligopoli',
      icon: '✈️',
    },
    {
      id: 'monopoly',
      titleEn: 'Monopoly',
      titleId: 'Monopoli',
      icon: '⚡',
    },
  ];

  return (
    <section id="classifier" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
              <span>{currentLang === 'en' ? 'Interactive Classroom Game' : 'Game Interaktif Kelas'}</span>
              <span aria-hidden="true">·</span>
              <span>{currentLang === 'en' ? 'Market Detective' : 'Detektif Struktur Pasar'}</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              {currentLang === 'en' ? 'Market Detective: Case Sorter' : 'Detektif Pasar: Klasifikasikan Bisnis!'}
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              {currentLang === 'en'
                ? 'Read the real-world business case study, examine economic clues, and deduce which market structure it belongs to!'
                : 'Analisis studi kasus bisnis di bawah, perhatikan petunjuk ekonominya, lalu tentukan ke dalam struktur pasar manakah bisnis tersebut tergolong!'}
            </p>
          </div>

          {/* Score & Streak Counter (Unboxed clean tabular text) */}
          <div className="flex items-center gap-6 text-sm font-semibold text-slate-700 bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl">
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-medium">
                {currentLang === 'en' ? 'Score' : 'Skor'}:
              </span>
              <span className="font-mono text-base text-amber-700 tabular-nums font-bold">
                {score}
              </span>
            </div>
            <span className="text-slate-300" aria-hidden="true">|</span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-medium">
                {currentLang === 'en' ? 'Streak' : 'Beruntun'}:
              </span>
              <span className="font-mono text-base text-emerald-700 tabular-nums font-bold">
                {streak} 🔥
              </span>
            </div>
            <span className="text-slate-300" aria-hidden="true">|</span>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
              <span>Case</span>
              <span className="font-mono text-slate-900 font-bold tabular-nums">
                {currentIndex + 1}/{SCENARIO_CARDS.length}
              </span>
            </div>
          </div>
        </div>

        {/* Game Area */}
        {!isGameOver ? (
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
            {/* The Case Card */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
              <div className="flex items-center justify-between gap-4 mb-3">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                  {currentCard.business[currentLang]}
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  {currentLang === 'en' ? 'Level' : 'Tingkat'}: {currentCard.difficulty}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {currentCard.title[currentLang]}
              </h3>

              <p className="text-sm text-slate-700 leading-relaxed">
                {currentCard.scenario[currentLang]}
              </p>

              {/* Clues */}
              <div className="mt-5 pt-4 border-t border-slate-100">
                <div className="text-xs font-semibold text-slate-500 mb-2 flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
                  <span>{currentLang === 'en' ? 'Economic Clues & Observations' : 'Petunjuk Ekonomi Lapangan'}:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentCard.clues.map((clue, idx) => (
                    <div
                      key={idx}
                      className="text-xs text-slate-700 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200/70 flex items-center gap-2"
                    >
                      <span className="text-amber-500 font-bold text-sm">›</span>
                      <span>{clue[currentLang]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Market Selection Drop Targets */}
            <div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 text-center">
                {currentLang === 'en'
                  ? 'Tap the matching market structure below'
                  : 'Klik struktur pasar yang sesuai di bawah ini'}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {marketOptions.map((opt) => {
                  const isChosen = selectedAnswer === opt.id;
                  const isCorrect = opt.id === currentCard.correctMarket;

                  let buttonStyle = 'bg-white border-slate-200 hover:border-amber-300 text-slate-800';

                  if (isAnswered) {
                    if (isCorrect) {
                      buttonStyle = 'bg-emerald-50 border-emerald-400 text-emerald-900 ring-2 ring-emerald-400';
                    } else if (isChosen && !isCorrect) {
                      buttonStyle = 'bg-rose-50 border-rose-400 text-rose-900';
                    } else {
                      buttonStyle = 'bg-slate-100 border-slate-200 text-slate-400 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectMarket(opt.id)}
                      disabled={isAnswered}
                      className={`p-4 rounded-xl border text-center transition-all cursor-pointer disabled:cursor-default flex flex-col items-center justify-center gap-2 shadow-xs ${buttonStyle}`}
                    >
                      <span className="text-2xl">{opt.icon}</span>
                      <span className="text-xs font-bold leading-tight">
                        {currentLang === 'en' ? opt.titleEn : opt.titleId}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Answer Feedback & Teacher Explanation */}
            {isAnswered && (
              <div
                className={`p-5 rounded-xl border flex flex-col sm:flex-row items-start justify-between gap-4 ${
                  selectedAnswer === currentCard.correctMarket
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                    : 'bg-rose-50 border-rose-200 text-rose-950'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    {selectedAnswer === currentCard.correctMarket ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        <span>
                          {currentLang === 'en'
                            ? 'Brilliant Deduction! Correct!'
                            : 'Analisis Sempurna! Benar!'}
                        </span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-5 h-5 text-rose-600" />
                        <span>
                          {currentLang === 'en'
                            ? `Not quite! It belongs to ${MARKET_STRUCTURES[currentCard.correctMarket].title.en}`
                            : `Kurang tepat! Bisnis ini tergolong ke ${MARKET_STRUCTURES[currentCard.correctMarket].title.id}`}
                        </span>
                      </>
                    )}
                  </div>
                  <p className="text-xs leading-relaxed max-w-2xl">
                    {currentCard.explanation[currentLang]}
                  </p>
                </div>

                <button
                  onClick={handleNext}
                  className="px-5 py-2.5 rounded-lg bg-slate-900 text-white font-semibold text-xs tracking-wide hover:bg-slate-800 transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer shadow-sm ml-auto"
                >
                  <span>
                    {currentIndex + 1 < SCENARIO_CARDS.length
                      ? currentLang === 'en'
                        ? 'Next Case'
                        : 'Kasus Berikutnya'
                      : currentLang === 'en'
                      ? 'View Results'
                      : 'Lihat Hasil Akhir'}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Game Completed Screen */
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <Award className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                {currentLang === 'en' ? 'Investigation Complete!' : 'Penyelidikan Selesai!'}
              </h3>
              <p className="text-sm text-slate-600 mt-1 max-w-md mx-auto">
                {currentLang === 'en'
                  ? `You solved all ${SCENARIO_CARDS.length} economic cases with a total score of ${score} points!`
                  : `Anda berhasil menganalisis seluruh ${SCENARIO_CARDS.length} kasus struktur pasar dengan total skor ${score} poin!`}
              </p>
            </div>

            <div className="flex justify-center gap-3">
              <button
                onClick={handleRestart}
                className="px-6 py-2.5 rounded-lg bg-slate-900 text-white font-semibold text-xs transition-colors hover:bg-slate-800 flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <RotateCcw className="w-4 h-4" />
                <span>{currentLang === 'en' ? 'Play Again' : 'Mainkan Lagi'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
