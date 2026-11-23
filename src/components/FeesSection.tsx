import { useState } from 'react';
import { ClassLevel, FEES_DATA, Language, SITE_COPY } from '../data/content';

interface FeesSectionProps {
  lang: Language;
  onSelectClassForEnquiry: (cls: ClassLevel) => void;
}

type BillingCycle = 'monthly' | 'term';

export function FeesSection({ lang, onSelectClassForEnquiry }: FeesSectionProps) {
  const [billing, setBilling] = useState<BillingCycle>('monthly');

  const formatINR = (amount: number) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);

  return (
    <section id="fees" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              {SITE_COPY.fees.sectionTitle[lang]}
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              {SITE_COPY.fees.sectionSubtitle[lang]}
            </p>
          </div>

          <div
            role="group"
            aria-label="Fee billing schedule"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-slate-100 border border-slate-200 rounded-lg self-start"
          >
            <button
              type="button"
              onClick={() => setBilling('monthly')}
              className={`min-h-[38px] px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 ${
                billing === 'monthly'
                  ? 'bg-white text-blue-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {SITE_COPY.fees.billingToggle.monthly[lang]}
            </button>
            <button
              type="button"
              onClick={() => setBilling('term')}
              className={`min-h-[38px] px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 ${
                billing === 'term'
                  ? 'bg-white text-blue-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {SITE_COPY.fees.billingToggle.term[lang]}
            </button>
          </div>
        </div>

        {/* Desktop & Tablet Fee Table */}
        <div className="mt-8 hidden md:block rounded-xl border border-slate-200 bg-white overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-700">
                <th className="py-4 px-5">{SITE_COPY.fees.headers.classCol[lang]}</th>
                <th className="py-4 px-5">{SITE_COPY.fees.headers.subjectsCol[lang]}</th>
                <th className="py-4 px-5">{SITE_COPY.fees.headers.singleCol[lang]}</th>
                <th className="py-4 px-5">{SITE_COPY.fees.headers.comboCol[lang]}</th>
                <th className="py-4 px-5 text-right">{SITE_COPY.fees.headers.actionCol[lang]}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm">
              {FEES_DATA.map((row) => {
                const singleAmt =
                  billing === 'monthly' ? row.singleSubjectMonthly : row.singleSubjectTerm;
                const comboAmt = billing === 'monthly' ? row.comboMonthly : row.comboTerm;

                return (
                  <tr key={row.classLevel} className="hover:bg-blue-50/35 transition-colors">
                    <td className="py-4 px-5">
                      <div className="font-display font-bold text-slate-900">
                        {row.className[lang]}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {row.boardCoverage[lang]}
                      </div>
                    </td>
                    <td className="py-4 px-5 text-slate-700">{row.subjectsIncluded[lang]}</td>
                    <td className="py-4 px-5 font-mono font-semibold text-slate-900 tabular-nums whitespace-nowrap">
                      {formatINR(singleAmt)}
                    </td>
                    <td className="py-4 px-5 font-mono font-bold text-blue-800 tabular-nums whitespace-nowrap">
                      {formatINR(comboAmt)}
                    </td>
                    <td className="py-4 px-5 text-right">
                      <a
                        href="#enquiry"
                        onClick={() => onSelectClassForEnquiry(row.classLevel)}
                        className="inline-flex items-center justify-center px-3.5 py-2 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-700 hover:text-white transition-colors whitespace-nowrap shrink-0"
                      >
                        {SITE_COPY.fees.selectBtn[lang]}
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile Fee Cards */}
        <div className="mt-8 md:hidden space-y-3">
          {FEES_DATA.map((row) => {
            const singleAmt =
              billing === 'monthly' ? row.singleSubjectMonthly : row.singleSubjectTerm;
            const comboAmt = billing === 'monthly' ? row.comboMonthly : row.comboTerm;

            return (
              <div
                key={row.classLevel}
                className="p-5 rounded-xl border border-slate-200 bg-white space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display font-bold text-base text-slate-900">
                      {row.className[lang]}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">{row.boardCoverage[lang]}</p>
                  </div>
                  <a
                    href="#enquiry"
                    onClick={() => onSelectClassForEnquiry(row.classLevel)}
                    className="min-h-[38px] inline-flex items-center justify-center px-3.5 py-1.5 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-700 hover:text-white transition-colors whitespace-nowrap shrink-0"
                  >
                    {SITE_COPY.fees.selectBtn[lang]}
                  </a>
                </div>

                <p className="text-xs text-slate-600">{row.subjectsIncluded[lang]}</p>

                <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-slate-500">
                      {SITE_COPY.fees.headers.singleCol[lang]}
                    </div>
                    <div className="font-mono font-semibold text-base text-slate-900 tabular-nums mt-0.5">
                      {formatINR(singleAmt)}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">
                      {SITE_COPY.fees.headers.comboCol[lang]}
                    </div>
                    <div className="font-mono font-bold text-base text-blue-800 tabular-nums mt-0.5">
                      {formatINR(comboAmt)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fee Notes */}
        <ul className="mt-6 space-y-1.5 text-xs sm:text-sm text-slate-600">
          {SITE_COPY.fees.footnotes[lang].map((note, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-blue-700 font-semibold" aria-hidden="true">·</span>
              <span>{note}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
