import React from 'react';
import { Language, MarketType } from '../types/market';
import { MARKET_STRUCTURES } from '../data/marketData';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  TrendingUp,
  Layers,
  Building2,
  Users,
  ShieldAlert,
  Sliders,
  DollarSign,
  Lightbulb,
} from 'lucide-react';

interface MarketConceptsViewerProps {
  currentLang: Language;
  selectedMarket: MarketType;
  onSelectMarket: (id: MarketType) => void;
  onSimulateMarket: (id: MarketType) => void;
}

export const MarketConceptsViewer: React.FC<MarketConceptsViewerProps> = ({
  currentLang,
  selectedMarket,
  onSelectMarket,
  onSimulateMarket,
}) => {
  const currentData = MARKET_STRUCTURES[selectedMarket];

  const marketList: MarketType[] = [
    'perfect_competition',
    'monopolistic_competition',
    'oligopoly',
    'monopoly',
  ];

  return (
    <section id="concepts" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
              <span>{currentLang === 'en' ? 'Visual Knowledge Base' : 'Materi Pembelajaran Visual'}</span>
              <span aria-hidden="true">·</span>
              <span>{currentLang === 'en' ? 'In-Depth Analysis' : 'Analisis Mendalam'}</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              {currentLang === 'en' ? 'Explore Market Structure Anatomy' : 'Bedah Anatomi 4 Struktur Pasar'}
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              {currentLang === 'en'
                ? 'Select a market model below to inspect the economic rules, barriers, pricing power, and real-life examples.'
                : 'Pilih model pasar di bawah untuk mempelajari karakteristik ekonomi, hambatan masuk, kuasa harga, dan contoh konkret di masyarakat.'}
            </p>
          </div>

          {/* Segmented Control Buttons */}
          <div className="flex flex-wrap items-center p-1 bg-slate-100 rounded-xl gap-1">
            {marketList.map((id) => (
              <button
                key={id}
                onClick={() => onSelectMarket(id)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  selectedMarket === id
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {MARKET_STRUCTURES[id].title[currentLang]}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Split: Image & Overview on Left, Deep Characteristics on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Visual Artwork & High-Level Metrics (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
              <div className="relative aspect-[4/3] bg-slate-200">
                <img
                  src={currentData.imagePath}
                  alt={currentData.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-1">
                  <span>{currentLang === 'en' ? 'Model Benchmark' : 'Tolok Ukur Ekonomi'}</span>
                  <span aria-hidden="true">·</span>
                  <span>{currentData.keyStats.pricingPower[currentLang]}</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {currentData.title[currentLang]}
                </h3>

                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {currentData.summary[currentLang]}
                </p>

                {/* KPI Metric Grid */}
                <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-slate-200">
                  <div className="p-3 bg-white rounded-lg border border-slate-200/80">
                    <div className="text-xs text-slate-500 font-medium">
                      {currentLang === 'en' ? 'Number of Sellers' : 'Jumlah Penjual'}
                    </div>
                    <div className="text-sm font-bold text-slate-900 mt-0.5">
                      {currentData.keyStats.numberOfFirms[currentLang]}
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-slate-200/80">
                    <div className="text-xs text-slate-500 font-medium">
                      {currentLang === 'en' ? 'Product Type' : 'Jenis Produk'}
                    </div>
                    <div className="text-sm font-bold text-slate-900 mt-0.5">
                      {currentData.keyStats.productType[currentLang]}
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-slate-200/80">
                    <div className="text-xs text-slate-500 font-medium">
                      {currentLang === 'en' ? 'Barriers to Entry' : 'Hambatan Masuk'}
                    </div>
                    <div className="text-sm font-bold text-slate-900 mt-0.5">
                      {currentData.keyStats.entryBarriers[currentLang]}
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-slate-200/80">
                    <div className="text-xs text-slate-500 font-medium">
                      {currentLang === 'en' ? 'Demand Elasticity' : 'Elastisitas Permintaan'}
                    </div>
                    <div className="text-sm font-bold text-slate-900 mt-0.5">
                      {currentData.keyStats.demandElasticity[currentLang]}
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    onClick={() => onSimulateMarket(selectedMarket)}
                    className="w-full py-2.5 px-4 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold text-xs tracking-wide transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Sliders className="w-4 h-4" />
                    <span>
                      {currentLang === 'en'
                        ? `Test Pricing Power in ${currentData.title.en} Sandbox`
                        : `Uji Simulasi ${currentData.title.id}`}
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Teacher's Insight Box */}
            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200/80">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                    {currentLang === 'en' ? "Teacher's Discussion Prompt" : "Panduan Diskusi Guru di Kelas"}
                  </h4>
                  <p className="text-xs text-amber-950 mt-1.5 leading-relaxed">
                    {currentData.teacherTip[currentLang]}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Characteristics, Real-Life Cases, Pros & Cons (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* 4 Core Pillars */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-amber-600" />
                <span>{currentLang === 'en' ? 'Core Economic Characteristics' : 'Ciri-Ciri Utama Pasar'}</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentData.characteristics.map((char, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors"
                  >
                    <div className="text-xs font-semibold text-amber-700 mb-1">
                      0{idx + 1}. {char.title[currentLang]}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {char.description[currentLang]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Real World Examples */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-amber-600" />
                <span>{currentLang === 'en' ? 'Real-World Everyday Examples' : 'Contoh Konkret Sehari-Hari'}</span>
              </h3>
              <div className="space-y-3">
                {currentData.realExamples.map((ex, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50/50 transition-colors flex items-start justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-1">
                        <span>{ex.badge[currentLang]}</span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">{ex.name[currentLang]}</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {ex.description[currentLang]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Advantages & Disadvantages Side by Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-xl bg-emerald-50/50 border border-emerald-200">
                <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{currentLang === 'en' ? 'Advantages / Consumer Welfare' : 'Kelebihan Bagi Masyarakat'}</span>
                </h4>
                <ul className="space-y-2.5">
                  {currentData.advantages.map((adv, idx) => (
                    <li key={idx} className="text-xs text-emerald-950 leading-relaxed flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>{adv[currentLang]}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-rose-50/50 border border-rose-200">
                <h4 className="text-xs font-bold text-rose-800 uppercase tracking-wider flex items-center gap-2 mb-3">
                  <XCircle className="w-4 h-4 text-rose-600" />
                  <span>{currentLang === 'en' ? 'Disadvantages & Inefficiencies' : 'Kekurangan & Risiko'}</span>
                </h4>
                <ul className="space-y-2.5">
                  {currentData.disadvantages.map((dis, idx) => (
                    <li key={idx} className="text-xs text-rose-950 leading-relaxed flex items-start gap-2">
                      <span className="text-rose-500 font-bold">•</span>
                      <span>{dis[currentLang]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
