import React from 'react';
import { Language, MarketType } from '../types/market';
import { MARKET_STRUCTURES } from '../data/marketData';
import { ArrowDown, Sparkles, Layers, ShieldCheck, Gamepad2, Award } from 'lucide-react';

interface MarketHeroProps {
  currentLang: Language;
  onSelectMarket: (id: MarketType) => void;
  onJumpToSection: (sectionId: string) => void;
}

export const MarketHero: React.FC<MarketHeroProps> = ({
  currentLang,
  onSelectMarket,
  onJumpToSection,
}) => {
  const marketList: MarketType[] = [
    'perfect_competition',
    'monopolistic_competition',
    'oligopoly',
    'monopoly',
  ];

  return (
    <section id="hero" className="relative bg-gradient-to-b from-amber-50/50 via-white to-slate-50 pt-12 pb-16 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Content */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-wider mb-3">
            <span>{currentLang === 'en' ? 'Social Studies & Economics Academy' : 'Pendidikan IPS & Ekonomi'}</span>
            <span aria-hidden="true">·</span>
            <span>{currentLang === 'en' ? 'Grade 9–12 Curriculum' : 'Tingkat SMP & SMA / SMK'}</span>
            <span aria-hidden="true">·</span>
            <span>{currentLang === 'en' ? '4 Core Market Structures' : '4 Struktur Pasar Utama'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
            {currentLang === 'en'
              ? 'Master Market Structures Through Visuals & Live Simulations'
              : 'Pahami Struktur Pasar Melalui Visual & Simulasi Interaktif'}
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            {currentLang === 'en'
              ? 'Why do farmers take whatever price they are given, while power utilities set the price, airlines watch each other constantly, and cafes create viral flavors? Explore economic realities through real-world illustrations and interactive games.'
              : 'Mengapa petani harus menerima harga pasar apa adanya, perusahaan listrik bisa menentukan tarif, maskapai saling mengawasi, dan kedai kopi terus menciptakan rasa baru? Pelajari konsep ekonomi lewat ilustrasi visual nyata dan game interaktif.'}
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-8">
            <button
              onClick={() => onJumpToSection('sandbox')}
              className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold text-sm transition-all shadow-sm flex items-center gap-2 cursor-pointer"
            >
              <Gamepad2 className="w-4 h-4" />
              <span>{currentLang === 'en' ? 'Launch Market Sandbox' : 'Buka Simulasi Pasar'}</span>
            </button>
            <button
              onClick={() => onJumpToSection('classifier')}
              className="px-5 py-2.5 rounded-lg bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-semibold text-sm transition-all shadow-xs flex items-center gap-2 cursor-pointer"
            >
              <Award className="w-4 h-4 text-amber-600" />
              <span>{currentLang === 'en' ? 'Play Detective Game' : 'Game Detektif Kasus'}</span>
            </button>
            <button
              onClick={() => onJumpToSection('concepts')}
              className="px-4 py-2.5 text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>{currentLang === 'en' ? 'Explore 4 Structures' : 'Pelajari 4 Struktur'}</span>
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Market Cards Grid with Generated High-Res Artwork */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {marketList.map((marketId) => {
            const data = MARKET_STRUCTURES[marketId];
            return (
              <div
                key={marketId}
                onClick={() => {
                  onSelectMarket(marketId);
                  onJumpToSection('concepts');
                }}
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-amber-300 transition-all duration-200 cursor-pointer flex flex-col"
              >
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    src={data.imagePath}
                    alt={data.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-4">
                    <span className="text-white text-xs font-semibold tracking-wide">
                      {data.keyStats.pricingPower[currentLang]}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1.5 font-medium">
                      <span>{data.keyStats.numberOfFirms[currentLang]}</span>
                      <span aria-hidden="true">·</span>
                      <span>{data.keyStats.entryBarriers[currentLang]}</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                      {data.title[currentLang]}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-2 mt-1.5 leading-relaxed">
                      {data.subtitle[currentLang]}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-amber-700 group-hover:translate-x-0.5 transition-transform">
                    <span>{currentLang === 'en' ? 'Explore details' : 'Lihat penjelasan'}</span>
                    <span aria-hidden="true">&rarr;</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
