import React, { useState } from 'react';
import { Language } from '../types/market';
import { X, Printer, Eye, EyeOff, FileText, CheckCircle2 } from 'lucide-react';

interface TeacherWorksheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const TeacherWorksheetModal: React.FC<TeacherWorksheetModalProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  const [showAnswerKey, setShowAnswerKey] = useState<boolean>(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col">
        {/* Modal Controls Bar (Hidden during print) */}
        <div className="no-print p-4 sm:px-6 border-b border-slate-200 bg-slate-50 flex items-center justify-between gap-4 sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-600" />
            <span className="font-bold text-sm text-slate-900">
              {currentLang === 'en' ? 'Classroom Student Worksheet' : 'Lembar Kerja Siswa (LKS)'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowAnswerKey(!showAnswerKey)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-200/80 hover:bg-slate-300 text-slate-800 transition-colors cursor-pointer"
            >
              {showAnswerKey ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span>
                {showAnswerKey
                  ? currentLang === 'en'
                    ? 'Hide Answer Key'
                    : 'Sembunyikan Kunci Jawaban'
                  : currentLang === 'en'
                  ? 'Show Teacher Answer Key'
                  : 'Lihat Kunci Jawaban Guru'}
              </span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 hover:bg-slate-800 text-white transition-colors cursor-pointer shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{currentLang === 'en' ? 'Print Worksheet' : 'Cetak Dokumen'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Worksheet Content */}
        <div className="p-6 sm:p-10 text-slate-900 space-y-6 bg-white">
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-4">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
                  {currentLang === 'en'
                    ? 'Economics & Social Studies Worksheet: Market Structures'
                    : 'Lembar Kerja Siswa (LKS): Struktur Pasar & Bentuk Pasar'}
                </h1>
                <p className="text-xs text-slate-600 mt-1">
                  {currentLang === 'en'
                    ? 'Subject: Social Studies / Economics · Topic: Perfect Competition, Monopoly, Oligopoly & Monopolistic Competition'
                    : 'Mata Pelajaran: IPS / Ekonomi · Topik: Pasar Persaingan Sempurna, Monopoli, Oligopoli & Monopolistis'}
                </p>
              </div>
              {showAnswerKey && (
                <div className="text-xs font-black px-2.5 py-1 bg-amber-100 border border-amber-300 text-amber-900 rounded">
                  TEACHER ANSWER KEY
                </div>
              )}
            </div>

            {/* Student Info Fields */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 text-xs font-mono">
              <div className="border-b border-slate-400 pb-1">
                <span className="text-slate-500">{currentLang === 'en' ? 'Name' : 'Nama'}:</span>{' '}
                ____________________
              </div>
              <div className="border-b border-slate-400 pb-1">
                <span className="text-slate-500">{currentLang === 'en' ? 'Class' : 'Kelas'}:</span>{' '}
                ____________________
              </div>
              <div className="border-b border-slate-400 pb-1">
                <span className="text-slate-500">{currentLang === 'en' ? 'Date' : 'Tanggal'}:</span>{' '}
                ____________________
              </div>
              <div className="border-b border-slate-400 pb-1">
                <span className="text-slate-500">{currentLang === 'en' ? 'Score' : 'Nilai'}:</span>{' '}
                _____ / 100
              </div>
            </div>
          </div>

          {/* Part 1: Comparison Table */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              {currentLang === 'en'
                ? 'Part 1: Market Structure Matrix (Complete the blanks)'
                : 'Bagian 1: Lengkapi Matriks Karakteristik Pasar'}
            </h2>
            <table className="w-full text-left border border-slate-400 text-xs">
              <thead className="bg-slate-100 font-bold border-b border-slate-400">
                <tr>
                  <th className="p-2 border-r border-slate-300">{currentLang === 'en' ? 'Market Structure' : 'Struktur Pasar'}</th>
                  <th className="p-2 border-r border-slate-300">{currentLang === 'en' ? 'Number of Sellers' : 'Jumlah Penjual'}</th>
                  <th className="p-2 border-r border-slate-300">{currentLang === 'en' ? 'Product Type' : 'Jenis Produk'}</th>
                  <th className="p-2 border-r border-slate-300">{currentLang === 'en' ? 'Entry Barriers' : 'Hambatan Masuk'}</th>
                  <th className="p-2">{currentLang === 'en' ? 'Pricing Control' : 'Kuasa Harga'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-300">
                <tr>
                  <td className="p-2 font-bold border-r border-slate-300">Perfect Competition</td>
                  <td className="p-2 border-r border-slate-300">
                    {showAnswerKey ? (
                      <span className="text-emerald-700 font-bold">Infinite / Very Many</span>
                    ) : (
                      '.......................................'
                    )}
                  </td>
                  <td className="p-2 border-r border-slate-300">
                    {showAnswerKey ? (
                      <span className="text-emerald-700 font-bold">Homogeneous (Identical)</span>
                    ) : (
                      '.......................................'
                    )}
                  </td>
                  <td className="p-2 border-r border-slate-300">
                    {showAnswerKey ? (
                      <span className="text-emerald-700 font-bold">None (Free Entry/Exit)</span>
                    ) : (
                      '.......................................'
                    )}
                  </td>
                  <td className="p-2">
                    {showAnswerKey ? (
                      <span className="text-emerald-700 font-bold">None (Price Taker)</span>
                    ) : (
                      '.......................................'
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="p-2 font-bold border-r border-slate-300">Monopoly</td>
                  <td className="p-2 border-r border-slate-300">
                    {showAnswerKey ? (
                      <span className="text-emerald-700 font-bold">One Single Firm</span>
                    ) : (
                      '.......................................'
                    )}
                  </td>
                  <td className="p-2 border-r border-slate-300">
                    {showAnswerKey ? (
                      <span className="text-emerald-700 font-bold">Unique (No close substitute)</span>
                    ) : (
                      '.......................................'
                    )}
                  </td>
                  <td className="p-2 border-r border-slate-300">
                    {showAnswerKey ? (
                      <span className="text-emerald-700 font-bold">Extremely High</span>
                    ) : (
                      '.......................................'
                    )}
                  </td>
                  <td className="p-2">
                    {showAnswerKey ? (
                      <span className="text-emerald-700 font-bold">High (Price Maker)</span>
                    ) : (
                      '.......................................'
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="p-2 font-bold border-r border-slate-300">Oligopoly</td>
                  <td className="p-2 border-r border-slate-300">
                    {showAnswerKey ? (
                      <span className="text-emerald-700 font-bold">Few Dominant Giants</span>
                    ) : (
                      '.......................................'
                    )}
                  </td>
                  <td className="p-2 border-r border-slate-300">
                    {showAnswerKey ? (
                      <span className="text-emerald-700 font-bold">Standard or Differentiated</span>
                    ) : (
                      '.......................................'
                    )}
                  </td>
                  <td className="p-2 border-r border-slate-300">
                    {showAnswerKey ? (
                      <span className="text-emerald-700 font-bold">High (Capital & Scale)</span>
                    ) : (
                      '.......................................'
                    )}
                  </td>
                  <td className="p-2">
                    {showAnswerKey ? (
                      <span className="text-emerald-700 font-bold">Interdependent (Kinked)</span>
                    ) : (
                      '.......................................'
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="p-2 font-bold border-r border-slate-300">Monopolistic Competition</td>
                  <td className="p-2 border-r border-slate-300">
                    {showAnswerKey ? (
                      <span className="text-emerald-700 font-bold">Many Firms</span>
                    ) : (
                      '.......................................'
                    )}
                  </td>
                  <td className="p-2 border-r border-slate-300">
                    {showAnswerKey ? (
                      <span className="text-emerald-700 font-bold">Differentiated (Branded)</span>
                    ) : (
                      '.......................................'
                    )}
                  </td>
                  <td className="p-2 border-r border-slate-300">
                    {showAnswerKey ? (
                      <span className="text-emerald-700 font-bold">Low (Easy Entry)</span>
                    ) : (
                      '.......................................'
                    )}
                  </td>
                  <td className="p-2">
                    {showAnswerKey ? (
                      <span className="text-emerald-700 font-bold">Slight / Moderate</span>
                    ) : (
                      '.......................................'
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Part 2: Case Detective Scenarios */}
          <div className="space-y-4 pt-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              {currentLang === 'en'
                ? 'Part 2: Real-World Case Analysis'
                : 'Bagian 2: Analisis Kasus Nyata'}
            </h2>

            <div className="p-3 bg-slate-50 border border-slate-300 rounded-lg text-xs space-y-1">
              <p className="font-bold">
                1. Case Study: The Municipal Water Pipeline
              </p>
              <p className="text-slate-600">
                A city has a single underground piped water network operated by one state utility.
                Why doesn't the government invite 5 competing companies to lay their own separate
                water pipes under every neighborhood street?
              </p>
              {showAnswerKey ? (
                <p className="text-emerald-700 font-medium pt-1">
                  Answer Key: This is a Natural Monopoly. High fixed infrastructure costs make it economically inefficient and physically destructive to install duplicate pipeline networks. A single firm achieves maximum economies of scale.
                </p>
              ) : (
                <div className="h-12 border-b border-dashed border-slate-400 mt-2"></div>
              )}
            </div>

            <div className="p-3 bg-slate-50 border border-slate-300 rounded-lg text-xs space-y-1">
              <p className="font-bold">
                2. Case Study: The Coffee Shop Battle
              </p>
              <p className="text-slate-600">
                A new cafe opens on a street with 8 other cafes. How can the owner successfully
                charge $5 per cup instead of matching the $2 price of basic black coffee?
              </p>
              {showAnswerKey ? (
                <p className="text-emerald-700 font-medium pt-1">
                  Answer Key: Through Product Differentiation (Monopolistic Competition). By investing in unique artisanal recipes, aesthetic store atmosphere, branding, and customer experience, they build brand loyalty and gain pricing power.
                </p>
              ) : (
                <div className="h-12 border-b border-dashed border-slate-400 mt-2"></div>
              )}
            </div>
          </div>

          {/* Footer Note */}
          <div className="pt-4 border-t border-slate-300 flex justify-between items-center text-[10px] text-slate-500 font-mono">
            <span>MarketVerse Educational Platform</span>
            <span>Grade: Social Studies / Economics</span>
            <span>Teacher Approved Material</span>
          </div>
        </div>
      </div>
    </div>
  );
};
