import React, { useState } from 'react';
import { Language, MarketType } from '../types/market';
import {
  Sliders,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  Users,
  ShieldCheck,
  RefreshCw,
  Sparkles,
  ArrowRight,
  TrendingDown,
  Info,
} from 'lucide-react';

interface MarketSandboxSimulatorProps {
  currentLang: Language;
  initialMarket?: MarketType;
}

export const MarketSandboxSimulator: React.FC<MarketSandboxSimulatorProps> = ({
  currentLang,
  initialMarket = 'perfect_competition',
}) => {
  const [activeMarket, setActiveMarket] = useState<MarketType>(initialMarket);

  // Perfect Competition State
  const [pcPrice, setPcPrice] = useState<number>(10);
  const pcEquilibriumPrice = 10;
  const pcProductionCost = 6;
  const pcCapacity = 500; // units

  // Monopoly State
  const [monopolyPrice, setMonopolyPrice] = useState<number>(35);
  const [hasPriceCapRegulation, setHasPriceCapRegulation] = useState<boolean>(false);
  const effectiveMonopolyPrice = hasPriceCapRegulation ? Math.min(monopolyPrice, 25) : monopolyPrice;

  // Oligopoly State
  const [oligopolyAction, setOligopolyAction] = useState<'stable' | 'cut' | 'raise' | null>('stable');
  const [oligopolyRivalReactions, setOligopolyRivalReactions] = useState<string>('');

  // Monopolistic Competition State
  const [mcPrice, setMcPrice] = useState<number>(5.5);
  const [mcBrandingLevel, setMcBrandingLevel] = useState<number>(50); // 0 to 100
  const [mcRecipeQuality, setMcRecipeQuality] = useState<number>(60); // 0 to 100

  // Calculations for Perfect Competition
  let pcQuantitySold = 0;
  let pcFeedback = '';
  if (pcPrice > pcEquilibriumPrice) {
    pcQuantitySold = 0;
    pcFeedback =
      currentLang === 'en'
        ? `Because all wheat is identical, buyers refused your $${pcPrice} price and bought from other farmers at $${pcEquilibriumPrice}. Total sales: 0!`
        : `Karena gabah bersifat homogen, pembeli menolak harga $${pcPrice} Anda dan beralih ke petani lain yang menjual seharga $${pcEquilibriumPrice}. Penjualan: 0!`;
  } else if (pcPrice === pcEquilibriumPrice) {
    pcQuantitySold = pcCapacity;
    pcFeedback =
      currentLang === 'en'
        ? `Optimal Price Taker! You sold all ${pcCapacity} bushels at the market rate ($${pcEquilibriumPrice}).`
        : `Harga Pasar Ideal! Anda menjual seluruh ${pcCapacity} karung gabah pada harga keseimbangan ($${pcEquilibriumPrice}).`;
  } else {
    pcQuantitySold = pcCapacity;
    pcFeedback =
      currentLang === 'en'
        ? `You sold out quickly at $${pcPrice}, but you left money on the table because you could have sold everything at $${pcEquilibriumPrice}!`
        : `Barang ludes terjual pada $${pcPrice}, namun Anda merugi potensi keuntungan karena sebenarnya di harga $${pcEquilibriumPrice} pun tetap laku semua!`;
  }
  const pcRevenue = pcQuantitySold * pcPrice;
  const pcProfit = pcQuantitySold * (pcPrice - pcProductionCost);

  // Calculations for Monopoly
  // Linear demand: Q = 1000 - 15 * P
  const monopolyQuantity = Math.max(0, Math.round(1000 - 16 * effectiveMonopolyPrice));
  const monopolyCostPerUnit = 12;
  const monopolyRevenue = monopolyQuantity * effectiveMonopolyPrice;
  const monopolyProfit = Math.max(0, monopolyQuantity * (effectiveMonopolyPrice - monopolyCostPerUnit));
  const consumerSurplusEstimate = Math.round(0.5 * monopolyQuantity * (62.5 - effectiveMonopolyPrice));
  const deadweightLossEstimate = Math.max(
    0,
    Math.round(0.5 * (effectiveMonopolyPrice - monopolyCostPerUnit) * (Math.max(0, 1000 - 16 * monopolyCostPerUnit) - monopolyQuantity))
  );

  // Calculations for Monopolistic Competition
  // Base demand influenced by price and boosted by branding & quality
  const perceivedValue = 3.0 + (mcBrandingLevel * 0.03) + (mcRecipeQuality * 0.03);
  const priceDelta = perceivedValue - mcPrice;
  const mcDailyCustomers = Math.max(
    10,
    Math.round(200 + priceDelta * 80 + (mcBrandingLevel * 1.5))
  );
  const mcCostPerCup = 1.8 + (mcRecipeQuality * 0.015);
  const mcDailyFixedCost = 150 + (mcBrandingLevel * 1.2);
  const mcDailyRevenue = mcDailyCustomers * mcPrice;
  const mcDailyProfit = Math.round(mcDailyRevenue - (mcDailyCustomers * mcCostPerCup) - mcDailyFixedCost);

  const marketOptions: { id: MarketType; titleEn: string; titleId: string; roleEn: string; roleId: string }[] = [
    {
      id: 'perfect_competition',
      titleEn: '1. Perfect Competition',
      titleId: '1. Persaingan Sempurna',
      roleEn: 'Wheat Farmer John',
      roleId: 'Petani Padi Pak Wayan',
    },
    {
      id: 'monopoly',
      titleEn: '2. Pure Monopoly',
      titleId: '2. Monopoli Murni',
      roleEn: 'Metropolis Water Board',
      roleId: 'Perusahaan Air Bersih (PDAM)',
    },
    {
      id: 'oligopoly',
      titleEn: '3. Oligopoly Rivalry',
      titleId: '3. Oligopoli Antara Raksasa',
      roleEn: 'SkyJet Commercial Airline',
      roleId: 'Maskapai Penerbangan Komersial',
    },
    {
      id: 'monopolistic_competition',
      titleEn: '4. Monopolistic Competition',
      titleId: '4. Persaingan Monopolistis',
      roleEn: 'Artisan Cafe Owner',
      roleId: 'Pemilik Kedai Kopi Artisan',
    },
  ];

  return (
    <section id="sandbox" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
            <span>{currentLang === 'en' ? 'Interactive Economics Lab' : 'Laboratorium Interaktif Ekonomi'}</span>
            <span aria-hidden="true">·</span>
            <span>{currentLang === 'en' ? 'Hands-On Decision Sandbox' : 'Simulasi Pengambilan Keputusan'}</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {currentLang === 'en' ? 'The Market Structure Simulator' : 'Simulasi Dinamika Pasar Nyata'}
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            {currentLang === 'en'
              ? 'Step into the shoes of a seller in each market structure. Adjust prices and observe how real customers, rivals, and economic laws respond in real-time!'
              : 'Jadilah pengusaha di tiap struktur pasar! Ubah harga dan saksikan bagaimana pembeli, pesaing, dan hukum ekonomi merespons secara langsung!'}
          </p>
        </div>

        {/* Market Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 bg-slate-200/80 rounded-xl">
          {marketOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setActiveMarket(opt.id)}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeMarket === opt.id
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>{currentLang === 'en' ? opt.titleEn : opt.titleId}</span>
            </button>
          ))}
        </div>

        {/* ---------------- SIMULATOR 1: PERFECT COMPETITION ---------------- */}
        {activeMarket === 'perfect_competition' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
            {/* Control Panel (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-medium text-amber-700">
                  {currentLang === 'en' ? 'Your Business Role' : 'Peran Bisnis Anda'}
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  {currentLang === 'en' ? 'Wheat Farmer John (Grain Market)' : 'Petani Padi Pak Wayan'}
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {currentLang === 'en'
                    ? 'You produce standard golden wheat. There are 2,000 other farmers selling the exact same wheat at the market equilibrium price of $10 per bushel.'
                    : 'Anda memanen gabah kering standar. Ada ribuan petani lain yang menjual gabah identik dengan harga pasar $10 per karung.'}
                </p>
              </div>

              {/* Price Slider */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-slate-700">
                    {currentLang === 'en' ? 'Set Your Bushel Price' : 'Tentukan Harga Jual Anda'}
                  </label>
                  <span className="text-base font-bold font-mono text-slate-900 tabular-nums">
                    ${pcPrice}
                  </span>
                </div>
                <input
                  type="range"
                  min="7"
                  max="14"
                  step="1"
                  value={pcPrice}
                  onChange={(e) => setPcPrice(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                  <span>$7 (Discount)</span>
                  <span className="font-bold text-amber-700">$10 (Equilibrium)</span>
                  <span>$14 (Markup)</span>
                </div>
              </div>

              {/* Economic Lesson Banner */}
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-1">
                <div className="font-bold uppercase tracking-wider text-[11px] text-amber-800 flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-amber-600" />
                  <span>{currentLang === 'en' ? 'Core Economic Rule' : 'Hukum Ekonomi Pasar Sempurna'}</span>
                </div>
                <p>
                  {currentLang === 'en'
                    ? 'In perfect competition, the firm faces a horizontal, perfectly elastic demand curve. You must ACCEPT the market price ($10). Raising price by even $1 sends buyers to competitors.'
                    : 'Kurva permintaan yang dihadapi satu petani berbentuk horizontal (elastis sempurna). Anda adalah Penerima Harga (Price Taker). Naik $1 saja, pembeli kabur 100%.'}
                </p>
              </div>
            </div>

            {/* Live Results & Diagram (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Financial Tally */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500 font-medium">
                    {currentLang === 'en' ? 'Units Sold' : 'Jumlah Terjual'}
                  </div>
                  <div className="text-2xl font-black font-mono text-slate-900 tabular-nums mt-1">
                    {pcQuantitySold}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {currentLang === 'en' ? 'out of 500 max capacity' : 'dari maks 500 karung'}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500 font-medium">
                    {currentLang === 'en' ? 'Total Revenue' : 'Total Pendapatan'}
                  </div>
                  <div className="text-2xl font-black font-mono text-slate-900 tabular-nums mt-1">
                    ${pcRevenue}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {currentLang === 'en' ? 'Price × Quantity' : 'Harga × Jumlah'}
                  </div>
                </div>

                <div
                  className={`p-4 rounded-xl border ${
                    pcProfit > 0
                      ? 'bg-emerald-50 border-emerald-200'
                      : pcProfit === 0
                      ? 'bg-slate-50 border-slate-200'
                      : 'bg-rose-50 border-rose-200'
                  }`}
                >
                  <div className="text-xs text-slate-600 font-medium">
                    {currentLang === 'en' ? 'Net Profit' : 'Laba Bersih'}
                  </div>
                  <div
                    className={`text-2xl font-black font-mono tabular-nums mt-1 ${
                      pcProfit > 0
                        ? 'text-emerald-700'
                        : pcProfit === 0
                        ? 'text-slate-700'
                        : 'text-rose-700'
                    }`}
                  >
                    ${pcProfit}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {currentLang === 'en' ? 'Cost: $6/unit' : 'Biaya: $6/unit'}
                  </div>
                </div>
              </div>

              {/* Reaction Box */}
              <div
                className={`p-5 rounded-xl border flex items-start gap-3.5 ${
                  pcPrice > pcEquilibriumPrice
                    ? 'bg-rose-50 border-rose-200 text-rose-950'
                    : pcPrice === pcEquilibriumPrice
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                    : 'bg-amber-50 border-amber-200 text-amber-950'
                }`}
              >
                {pcPrice > pcEquilibriumPrice ? (
                  <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                ) : pcPrice === pcEquilibriumPrice ? (
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                )}
                <div>
                  <div className="font-bold text-xs uppercase tracking-wider mb-1">
                    {currentLang === 'en' ? 'Buyer Reaction Feedback' : 'Respons Nyata Pembeli di Pasar'}
                  </div>
                  <p className="text-xs leading-relaxed">{pcFeedback}</p>
                </div>
              </div>

              {/* Elasticity Visual Graph Representation */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="text-xs font-bold text-slate-800 mb-3 flex items-center justify-between">
                  <span>{currentLang === 'en' ? 'Visual Demand Curve' : 'Kurva Permintaan Horisontal'}</span>
                  <span className="font-mono text-[11px] text-slate-500">P = MR = AR = Demand</span>
                </div>
                <div className="h-28 w-full border-b-2 border-l-2 border-slate-400 relative p-2 flex items-center">
                  {/* Axis labels */}
                  <span className="absolute -left-6 top-0 text-[10px] font-mono text-slate-500 font-bold">P ($)</span>
                  <span className="absolute right-0 -bottom-5 text-[10px] font-mono text-slate-500 font-bold">Q (Units)</span>

                  {/* Horizontal Demand line at $10 */}
                  <div className="w-full h-0.5 bg-amber-500 relative flex items-center">
                    <span className="absolute -left-5 text-[10px] font-mono font-bold text-amber-700">$10</span>
                    <span className="ml-auto text-[10px] font-bold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded">
                      {currentLang === 'en' ? 'Market Equilibrium' : 'Garis Harga Pasar'}
                    </span>
                  </div>

                  {/* Current User Dot */}
                  <div
                    className="absolute w-3.5 h-3.5 rounded-full border-2 border-white shadow-sm flex items-center justify-center transition-all duration-300"
                    style={{
                      left: pcQuantitySold > 0 ? '70%' : '5%',
                      top: `${Math.max(10, Math.min(85, 100 - (pcPrice - 6) * 12))}%`,
                      backgroundColor: pcPrice === 10 ? '#059669' : pcPrice > 10 ? '#dc2626' : '#d97706',
                    }}
                  ></div>
                </div>
                <div className="text-[11px] text-slate-500 mt-4 text-center">
                  {currentLang === 'en'
                    ? 'Notice: If your price point is above the line, sales drop immediately to zero.'
                    : 'Perhatikan: Begitu titik harga Anda berada di atas garis $10, jumlah pembeli langsung anjlok ke nol.'}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ---------------- SIMULATOR 2: MONOPOLY ---------------- */}
        {activeMarket === 'monopoly' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
            {/* Control Panel (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-medium text-amber-700">
                  {currentLang === 'en' ? 'Your Business Role' : 'Peran Bisnis Anda'}
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  {currentLang === 'en' ? 'Metropolis Water Board (Sole Tap Utility)' : 'PDAM Tirta Kota (Utilitas Air Minum)'}
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {currentLang === 'en'
                    ? 'You operate the only underground piped clean water system in the municipality. Citizens have no direct substitutes. You are the "Price Maker".'
                    : 'Anda memiliki satu-satunya jaringan pipa air minum ke rumah warga. Warga tidak punya alternatif pengganti langsung. Anda adalah Penentu Harga (Price Maker).'}
                </p>
              </div>

              {/* Price Slider */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-slate-700">
                    {currentLang === 'en' ? 'Monthly Water Tariff ($/m³)' : 'Tarif Air Bersih ($/m³)'}
                  </label>
                  <span className="text-base font-bold font-mono text-slate-900 tabular-nums">
                    ${effectiveMonopolyPrice}
                  </span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="55"
                  step="1"
                  value={monopolyPrice}
                  onChange={(e) => setMonopolyPrice(Number(e.target.value))}
                  disabled={hasPriceCapRegulation}
                  className="w-full accent-amber-500 cursor-pointer disabled:opacity-50"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                  <span>$15 (Low Tariff)</span>
                  <span>$35 (Monopoly Peak)</span>
                  <span>$55 (Extreme Squeeze)</span>
                </div>
              </div>

              {/* Government Intervention Toggle */}
              <div className="p-4 rounded-xl border border-slate-200 bg-white flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    {currentLang === 'en' ? 'Government Price Cap Regulation' : 'Regulasi Batas Tarif Pemerintah'}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {currentLang === 'en' ? 'Caps public utility rate at $25 to protect households' : 'Membatasi tarif maksimal $25 demi melindungi rakyat'}
                  </div>
                </div>
                <button
                  onClick={() => setHasPriceCapRegulation(!hasPriceCapRegulation)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                    hasPriceCapRegulation
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {hasPriceCapRegulation
                    ? currentLang === 'en'
                      ? 'Regulated (Capped $25)'
                      : 'Aktif ($25)'
                    : currentLang === 'en'
                    ? 'Unregulated'
                    : 'Tanpa Kuota'}
                </button>
              </div>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-1">
                <div className="font-bold uppercase tracking-wider text-[11px] text-amber-800 flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-amber-600" />
                  <span>{currentLang === 'en' ? 'Economic Principle' : 'Prinsip Monopoli & Regulasi'}</span>
                </div>
                <p>
                  {currentLang === 'en'
                    ? 'An unregulated monopolist restricts quantity and raises prices above marginal cost. This creates "Deadweight Loss" (economic loss for society), which is why public utilities are heavily supervised.'
                    : 'Monopolis murni cenderung membatasi produksi untuk mengeruk laba maksimal, memicu hilangnya kesejahteraan masyarakat (Deadweight Loss). Karena itulah utilitas umum diawasi pemerintah.'}
                </p>
              </div>
            </div>

            {/* Monopoly Output (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500 font-medium">
                    {currentLang === 'en' ? 'Water Consumed' : 'Volume Konsumsi'}
                  </div>
                  <div className="text-xl font-black font-mono text-slate-900 tabular-nums mt-1">
                    {monopolyQuantity} m³
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500 font-medium">
                    {currentLang === 'en' ? 'Total Revenue' : 'Pendapatan'}
                  </div>
                  <div className="text-xl font-black font-mono text-slate-900 tabular-nums mt-1">
                    ${monopolyRevenue.toLocaleString()}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200">
                  <div className="text-xs text-emerald-700 font-medium">
                    {currentLang === 'en' ? 'Monopoly Profit' : 'Laba Monopoli'}
                  </div>
                  <div className="text-xl font-black font-mono text-emerald-800 tabular-nums mt-1">
                    ${monopolyProfit.toLocaleString()}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200">
                  <div className="text-xs text-rose-700 font-medium">
                    {currentLang === 'en' ? 'Deadweight Loss' : 'Kerugian Sosial'}
                  </div>
                  <div className="text-xl font-black font-mono text-rose-800 tabular-nums mt-1">
                    ${deadweightLossEstimate.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Analysis Explanation */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  {currentLang === 'en' ? 'Welfare Distribution Analysis' : 'Analisis Kesejahteraan Publik'}
                </h4>
                <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                  <p>
                    {currentLang === 'en'
                      ? `At $${effectiveMonopolyPrice}/m³, households pay a high tariff because they cannot substitute piped clean water. The firm collects $${monopolyProfit.toLocaleString()} in supernormal profit.`
                      : `Pada tarif $${effectiveMonopolyPrice}/m³, warga terpaksa membayar tarif tinggi karena tidak ada pilihan lain. PDAM mengantongi laba supernormal $${monopolyProfit.toLocaleString()}.`}
                  </p>
                  {deadweightLossEstimate > 2000 && !hasPriceCapRegulation && (
                    <p className="text-rose-700 font-medium">
                      {currentLang === 'en'
                        ? `Notice the $${deadweightLossEstimate.toLocaleString()} Deadweight Loss: low-income households had to cut back critical water hygiene because tariffs are too high!`
                        : `Terjadi Deadweight Loss senilai $${deadweightLossEstimate.toLocaleString()}: keluarga berpenghasilan rendah terpaksa membatasi pemakaian air esensial akibat tarif terlalu mahal!`}
                    </p>
                  )}
                  {hasPriceCapRegulation && (
                    <p className="text-emerald-700 font-medium">
                      {currentLang === 'en'
                        ? 'Government price ceiling successfully protected households, expanded water access, and reduced economic deadweight loss!'
                        : 'Batas tarif pemerintah berhasil melindungi daya beli warga, meningkatkan akses air bersih, dan menekan kerugian ekonomi masyarakat!'}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ---------------- SIMULATOR 3: OLIGOPOLY ---------------- */}
        {activeMarket === 'oligopoly' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
            {/* Control Panel (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-medium text-amber-700">
                  {currentLang === 'en' ? 'Your Business Role' : 'Peran Bisnis Anda'}
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  {currentLang === 'en' ? 'SkyJet Airways (3 Major Airlines Fly Route)' : 'Maskapai Penerbangan Komersial (3 Raksasa)'}
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {currentLang === 'en'
                    ? 'Only 3 airlines fly the prime domestic flight corridor. Every airline charges $100 per ticket. How will your rivals react if you change fares?'
                    : 'Hanya ada 3 maskapai besar di rute penerbangan utama ini. Tiket saat ini dibanderol $100. Apa reaksi 2 maskapai pesaing jika Anda mengubah harga tiket?'}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5">
                <button
                  onClick={() => {
                    setOligopolyAction('cut');
                    setOligopolyRivalReactions(
                      currentLang === 'en'
                        ? 'PRICE WAR TRIGGERED! Rival Airlines AeroBlue and JetSwift instantly matched your $75 fare within 2 hours. Nobody gained new market share, but all airlines lost 25% of profit margins!'
                        : 'PERANG TARIF TERPICU! Dua maskapai pesaing langsung membalas menurunkan tarif ke $75 dalam waktu 2 jam. Pangsa pasar Anda tidak bertambah, namun semua maskapai menderita margin laba tipis!'
                    );
                  }}
                  className={`w-full p-3.5 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer flex items-center justify-between ${
                    oligopolyAction === 'cut'
                      ? 'bg-rose-50 border-rose-300 text-rose-950'
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-800'
                  }`}
                >
                  <div>
                    <div className="font-bold">{currentLang === 'en' ? 'Action A: Slash Fare to $75' : 'Opsi A: Banting Harga Tiket Jadi $75'}</div>
                    <div className="text-[11px] font-normal text-slate-500 mt-0.5">
                      {currentLang === 'en' ? 'Attempt to steal passengers from rivals' : 'Mencoba merebut penumpang maskapai lawan'}
                    </div>
                  </div>
                  <TrendingDown className="w-5 h-5 text-rose-600 shrink-0" />
                </button>

                <button
                  onClick={() => {
                    setOligopolyAction('stable');
                    setOligopolyRivalReactions(
                      currentLang === 'en'
                        ? 'EQUILIBRIUM MAINTAINED. Rivals kept fares at $100. Airlines compete via non-price perks: frequent flyer points, gourmet snacks, and on-time departures.'
                        : 'KESEIMBANGAN TERJAGA. Pesaing tetap mematok $100. Persaingan dilakukan secara non-harga: fasilitas bagasi gratis, makanan hangat, dan poin loyalitas.'
                    );
                  }}
                  className={`w-full p-3.5 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer flex items-center justify-between ${
                    oligopolyAction === 'stable'
                      ? 'bg-amber-50 border-amber-300 text-amber-950'
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-800'
                  }`}
                >
                  <div>
                    <div className="font-bold">{currentLang === 'en' ? 'Action B: Hold Fare at $100' : 'Opsi B: Tahan Tarif Stabil di $100'}</div>
                    <div className="text-[11px] font-normal text-slate-500 mt-0.5">
                      {currentLang === 'en' ? 'Compete through advertising & service quality' : 'Bersaing lewat promosi & mutu pelayanan'}
                    </div>
                  </div>
                  <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0" />
                </button>

                <button
                  onClick={() => {
                    setOligopolyAction('raise');
                    setOligopolyRivalReactions(
                      currentLang === 'en'
                        ? 'RIVALS DID NOT FOLLOW! Rivals AeroBlue and JetSwift stayed at $100. 70% of your business travelers switched to them. Your flight departed half empty!'
                        : 'PESAING TIDAK MENGIKUTI! Maskapai lain tetap menjual seharga $100. Lebih dari 70% penumpang kabur memesan tiket di maskapai lain. Pesawat Anda terbang setengah kosong!'
                    );
                  }}
                  className={`w-full p-3.5 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer flex items-center justify-between ${
                    oligopolyAction === 'raise'
                      ? 'bg-rose-50 border-rose-300 text-rose-950'
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-800'
                  }`}
                >
                  <div>
                    <div className="font-bold">{currentLang === 'en' ? 'Action C: Hike Fare to $135' : 'Opsi C: Naikkan Tarif Sendirian Jadi $135'}</div>
                    <div className="text-[11px] font-normal text-slate-500 mt-0.5">
                      {currentLang === 'en' ? 'Hoping rivals will also raise prices' : 'Berharap maskapai lain ikut-ikutan menaikkan'}
                    </div>
                  </div>
                  <TrendingUp className="w-5 h-5 text-rose-600 shrink-0" />
                </button>
              </div>
            </div>

            {/* Oligopoly Result (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  {currentLang === 'en' ? 'Rival Airlines AI Reaction Feed' : 'Respons Langsung 2 Maskapai Pesaing'}
                </div>
                <div className="p-4 rounded-lg bg-white border border-slate-200 text-xs text-slate-800 leading-relaxed font-medium">
                  {oligopolyRivalReactions ||
                    (currentLang === 'en'
                      ? 'Select an action on the left to test rival responses.'
                      : 'Pilih salah satu tindakan di sebelah kiri untuk melihat reaksi lawan.')}
                </div>
              </div>

              {/* The Kinked Demand Curve Explanation Card */}
              <div className="p-5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950 space-y-2">
                <h4 className="font-bold text-amber-900 uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>
                    {currentLang === 'en'
                      ? 'The Famous "Kinked Demand Curve" (Sweezy Model)'
                      : 'Konsep Kurva Permintaan Patah (Kinked Demand Curve)'}
                  </span>
                </h4>
                <p className="leading-relaxed">
                  {currentLang === 'en'
                    ? 'Why are prices sticky in an oligopoly? Because: 1. If you raise price, competitors do NOT follow (elastic demand = you lose customers). 2. If you lower price, competitors DO follow (inelastic demand = nobody gains share). Therefore, firms prefer non-price competition!'
                    : 'Mengapa harga dalam oligopoli cenderung kaku (sticky)? Karena: 1. Jika menaikkan harga, pesaing TIDAK mengikuti (kurva elastis, Anda rugi). 2. Jika menurunkan harga, pesaing IKUT banting harga (kurva inelastis, memicu perang tarif). Akibatnya, perusahaan lebih memilih bersaing lewat iklan dan fasilitas!'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ---------------- SIMULATOR 4: MONOPOLISTIC COMPETITION ---------------- */}
        {activeMarket === 'monopolistic_competition' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
            {/* Control Panel (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-medium text-amber-700">
                  {currentLang === 'en' ? 'Your Business Role' : 'Peran Bisnis Anda'}
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  {currentLang === 'en' ? 'Aroma Haven Boutique Cafe' : 'Kedai Kopi Artisan "Aroma Haven"'}
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {currentLang === 'en'
                    ? 'You compete with 10 other cafes in the district. Can you use brand marketing and recipe differentiation to charge higher prices?'
                    : 'Anda bersaing dengan 10 kedai kopi lain di kawasan kuliner. Bisakah strategi kemasan estetik dan racikan menu khas membuat Anda leluasa memasang harga?'}
                </p>
              </div>

              {/* Price Slider */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-semibold text-slate-700">
                    {currentLang === 'en' ? 'Cup Price ($)' : 'Harga per Cangkir Kopi ($)'}
                  </label>
                  <span className="text-base font-bold font-mono text-slate-900 tabular-nums">
                    ${mcPrice.toFixed(2)}
                  </span>
                </div>
                <input
                  type="range"
                  min="3.0"
                  max="8.0"
                  step="0.5"
                  value={mcPrice}
                  onChange={(e) => setMcPrice(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              {/* Branding / Advertising Slider */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-semibold text-slate-700">
                    {currentLang === 'en' ? 'Store Ambiance & Instagram Ads' : 'Branding & Suasana Estetik'}
                  </label>
                  <span className="text-xs font-bold font-mono text-slate-900 tabular-nums">
                    {mcBrandingLevel}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="10"
                  value={mcBrandingLevel}
                  onChange={(e) => setMcBrandingLevel(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              {/* Recipe Differentiation Slider */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-semibold text-slate-700">
                    {currentLang === 'en' ? 'Signature Recipe & Single-Origin Beans' : 'Kualitas Rasa & Biji Kopi Spesial'}
                  </label>
                  <span className="text-xs font-bold font-mono text-slate-900 tabular-nums">
                    {mcRecipeQuality}%
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  step="10"
                  value={mcRecipeQuality}
                  onChange={(e) => setMcRecipeQuality(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>
            </div>

            {/* Results (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500 font-medium">
                    {currentLang === 'en' ? 'Daily Customers' : 'Pelanggan Harian'}
                  </div>
                  <div className="text-2xl font-black font-mono text-slate-900 tabular-nums mt-1">
                    {mcDailyCustomers}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {currentLang === 'en' ? 'cups brewed' : 'cangkir terjual'}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500 font-medium">
                    {currentLang === 'en' ? 'Daily Revenue' : 'Omzet Harian'}
                  </div>
                  <div className="text-2xl font-black font-mono text-slate-900 tabular-nums mt-1">
                    ${Math.round(mcDailyRevenue)}
                  </div>
                </div>

                <div
                  className={`p-4 rounded-xl border ${
                    mcDailyProfit > 0
                      ? 'bg-emerald-50 border-emerald-200'
                      : 'bg-rose-50 border-rose-200'
                  }`}
                >
                  <div className="text-xs text-slate-600 font-medium">
                    {currentLang === 'en' ? 'Daily Net Profit' : 'Laba Harian'}
                  </div>
                  <div
                    className={`text-2xl font-black font-mono tabular-nums mt-1 ${
                      mcDailyProfit > 0 ? 'text-emerald-700' : 'text-rose-700'
                    }`}
                  >
                    ${mcDailyProfit}
                  </div>
                </div>
              </div>

              {/* Economic Insight on Product Differentiation */}
              <div className="p-5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-2">
                <h4 className="font-bold text-amber-900 uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>
                    {currentLang === 'en'
                      ? 'The Magic of Product Differentiation'
                      : 'Rahasia Kekuatan Diferensiasi Produk'}
                  </span>
                </h4>
                <p className="leading-relaxed">
                  {currentLang === 'en'
                    ? `Notice how investing in branding (${mcBrandingLevel}%) and signature taste (${mcRecipeQuality}%) shifted your demand curve to the right! Even at $${mcPrice.toFixed(2)}, loyal customers keep ordering because of your unique coffee identity.`
                    : `Perhatikan bagaimana investasi pada branding (${mcBrandingLevel}%) dan cita rasa (${mcRecipeQuality}%) menggeser kurva permintaan ke kanan! Meskipun Anda memasang harga $${mcPrice.toFixed(2)}, pelanggan setia tetap berdatangan karena keunikan rasa dan kenyamanan tempat!`}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
