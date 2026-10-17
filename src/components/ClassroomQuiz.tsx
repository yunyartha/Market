import React, { useState } from 'react';
import { Language, QuizQuestion } from '../types/market';
import { QUIZ_QUESTIONS } from '../data/marketData';
import confetti from 'canvas-confetti';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  ArrowRight,
  BookOpen,
  Award,
} from 'lucide-react';

interface ClassroomQuizProps {
  currentLang: Language;
}

export const ClassroomQuiz: React.FC<ClassroomQuizProps> = ({ currentLang }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  const question: QuizQuestion = QUIZ_QUESTIONS[currentQuestionIndex];

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    if (idx === question.correctIndex) {
      setScore((prev) => prev + 1);
      confetti({
        particleCount: 30,
        spread: 50,
        origin: { y: 0.8 },
      });
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex + 1 < QUIZ_QUESTIONS.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setShowHint(false);
    } else {
      setQuizFinished(true);
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setShowHint(false);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <section id="quiz" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
            <span>{currentLang === 'en' ? 'Classroom Assessment' : 'Evaluasi Belajar Siswa'}</span>
            <span aria-hidden="true">·</span>
            <span>{currentLang === 'en' ? 'Check Your Mastery' : 'Uji Pemahaman Materi'}</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {currentLang === 'en' ? 'Interactive Economics Quiz' : 'Kuis Evaluasi Struktur Pasar'}
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            {currentLang === 'en'
              ? 'Test your knowledge on price takers, barriers to entry, cartels, and differentiated products.'
              : 'Uji pemahamanmu tentang penentu harga, hambatan masuk, kartel, dan produk terdiferensiasi.'}
          </p>
        </div>

        {!quizFinished ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
            {/* Question Progress Header */}
            <div className="flex items-center justify-between text-xs text-slate-500 pb-4 border-b border-slate-100">
              <span className="font-semibold text-amber-700 uppercase tracking-wide">
                {question.conceptTag[currentLang]}
              </span>
              <div className="flex items-center gap-2 font-mono">
                <span>
                  {currentLang === 'en' ? 'Question' : 'Soal'}{' '}
                  <strong className="text-slate-900">{currentQuestionIndex + 1}</strong> of{' '}
                  {QUIZ_QUESTIONS.length}
                </span>
                <span aria-hidden="true">·</span>
                <span>
                  {currentLang === 'en' ? 'Score' : 'Nilai'}:{' '}
                  <strong className="text-emerald-700">{score}</strong>
                </span>
              </div>
            </div>

            {/* Question Text */}
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
              {question.question[currentLang]}
            </h3>

            {/* Options */}
            <div className="space-y-3 pt-2">
              {question.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === question.correctIndex;

                let optClass = 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800';

                if (isAnswered) {
                  if (isCorrect) {
                    optClass = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-semibold ring-1 ring-emerald-400';
                  } else if (isSelected && !isCorrect) {
                    optClass = 'bg-rose-50 border-rose-300 text-rose-950';
                  } else {
                    optClass = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={isAnswered}
                    className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm transition-all cursor-pointer disabled:cursor-default flex items-center justify-between gap-3 ${optClass}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-md bg-white/80 border border-slate-300 text-slate-700 flex items-center justify-center font-bold text-xs shrink-0 font-mono">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{opt[currentLang]}</span>
                    </div>

                    {isAnswered && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    )}
                    {isAnswered && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Hint & Actions Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
              {!isAnswered ? (
                <div>
                  {!showHint ? (
                    <button
                      onClick={() => setShowHint(true)}
                      className="text-xs text-amber-700 hover:text-amber-800 font-semibold flex items-center gap-1.5 cursor-pointer"
                    >
                      <HelpCircle className="w-4 h-4" />
                      <span>{currentLang === 'en' ? 'Show Teacher Hint' : 'Buka Petunjuk Guru'}</span>
                    </button>
                  ) : (
                    <div className="text-xs text-amber-900 bg-amber-50 px-3 py-2 rounded-lg border border-amber-200 max-w-md">
                      <strong>{currentLang === 'en' ? 'Hint' : 'Petunjuk'}:</strong> {question.hint[currentLang]}
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-xs text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-200 flex-1 mr-4">
                  <strong>{currentLang === 'en' ? 'Teacher Explanation' : 'Pembahasan Guru'}:</strong>{' '}
                  {question.explanation[currentLang]}
                </div>
              )}

              {isAnswered && (
                <button
                  onClick={handleNext}
                  className="px-5 py-2.5 rounded-lg bg-slate-900 text-white font-semibold text-xs tracking-wide hover:bg-slate-800 transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer shadow-sm ml-auto"
                >
                  <span>
                    {currentQuestionIndex + 1 < QUIZ_QUESTIONS.length
                      ? currentLang === 'en'
                        ? 'Next Question'
                        : 'Soal Selanjutnya'
                      : currentLang === 'en'
                      ? 'Finish Quiz'
                      : 'Lihat Nilai'}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Results Card */
          <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 text-center space-y-6 shadow-xs">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <Award className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                {currentLang === 'en' ? 'Quiz Completed!' : 'Kuis Selesai!'}
              </h3>
              <p className="text-sm text-slate-600 mt-1 max-w-md mx-auto">
                {currentLang === 'en'
                  ? `You answered ${score} out of ${QUIZ_QUESTIONS.length} correctly (${Math.round(
                      (score / QUIZ_QUESTIONS.length) * 100
                    )}%).`
                  : `Kamu menjawab benar ${score} dari ${QUIZ_QUESTIONS.length} soal (${Math.round(
                      (score / QUIZ_QUESTIONS.length) * 100
                    )}%).`}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-sm mx-auto text-xs text-slate-700">
              {score >= QUIZ_QUESTIONS.length - 1
                ? currentLang === 'en'
                  ? '🌟 Excellent Mastery! You understand market structures like an economics professor!'
                  : '🌟 Penguasaan Luar Biasa! Kamu memahami konsep struktur pasar layaknya ekonom handal!'
                : score >= Math.floor(QUIZ_QUESTIONS.length / 2)
                ? currentLang === 'en'
                  ? '👍 Good Job! Review the comparison matrix and sandbox to master subtle differences.'
                  : '👍 Bagus! Pelajari kembali tabel matriks dan simulasi untuk mempertajam konsepmu.'
                : currentLang === 'en'
                ? '📚 Keep practicing! Re-read the visual core concepts and try the simulator.'
                : '📚 Tetap semangat! Baca kembali penjelasan visual di atas dan coba lagi kuisnya.'}
            </div>

            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={handleRestart}
                className="px-6 py-2.5 rounded-lg bg-slate-900 text-white font-semibold text-xs transition-colors hover:bg-slate-800 flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <RotateCcw className="w-4 h-4" />
                <span>{currentLang === 'en' ? 'Retake Quiz' : 'Ulangi Kuis'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
