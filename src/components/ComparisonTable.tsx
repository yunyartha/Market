import React from 'react';
import { Language } from '../types/market';
import { COMPARISON_MATRIX, MARKET_STRUCTURES } from '../data/marketData';
import { Table, Check, ExternalLink } from 'lucide-react';

interface ComparisonTableProps {
  currentLang: Language;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ currentLang }) => {
  return (
    <section id="comparison" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
            <span>{currentLang === 'en' ? 'Study Matrix & Cheat Sheet' : 'Matriks Perbandingan Cepat'}</span>
            <span aria-hidden="true">·</span>
            <span>{currentLang === 'en' ? 'Exam Preparation' : 'Persiapan Ujian & Tugas'}</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {currentLang === 'en' ? 'Side-by-Side Market Matrix' : 'Matriks Perbandingan 4 Struktur Pasar'}
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            {currentLang === 'en'
              ? 'A quick reference table summarizing how each market structure behaves regarding sellers, products, barriers, and pricing power.'
              : 'Tabel ringkasan praktis yang membandingkan perilaku penjual, keunikan produk, hambatan masuk, dan kuasa penetapan harga di tiap struktur pasar.'}
          </p>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100/80 border-b border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-wider">
                <th className="p-4 sm:p-5 w-1/5">{currentLang === 'en' ? 'Dimension' : 'Kriteria'}</th>
                <th className="p-4 sm:p-5 w-1/5 text-amber-800">
                  {MARKET_STRUCTURES.perfect_competition.title[currentLang]}
                </th>
                <th className="p-4 sm:p-5 w-1/5 text-slate-900">
                  {MARKET_STRUCTURES.monopolistic_competition.title[currentLang]}
                </th>
                <th className="p-4 sm:p-5 w-1/5 text-slate-900">
                  {MARKET_STRUCTURES.oligopoly.title[currentLang]}
                </th>
                <th className="p-4 sm:p-5 w-1/5 text-slate-900">
                  {MARKET_STRUCTURES.monopoly.title[currentLang]}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-xs text-slate-700">
              {COMPARISON_MATRIX.map((row, idx) => (
                <tr
                  key={idx}
                  className={`hover:bg-slate-50/70 transition-colors ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'
                  }`}
                >
                  <td className="p-4 sm:p-5 font-bold text-slate-900 whitespace-nowrap bg-slate-50/60">
                    {row.feature[currentLang]}
                  </td>
                  <td className="p-4 sm:p-5 font-medium leading-relaxed">
                    {row.perfect_competition[currentLang]}
                  </td>
                  <td className="p-4 sm:p-5 font-medium leading-relaxed">
                    {row.monopolistic_competition[currentLang]}
                  </td>
                  <td className="p-4 sm:p-5 font-medium leading-relaxed">
                    {row.oligopoly[currentLang]}
                  </td>
                  <td className="p-4 sm:p-5 font-medium leading-relaxed">
                    {row.monopoly[currentLang]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
