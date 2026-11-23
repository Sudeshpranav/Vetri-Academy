import { useState } from 'react';
import { BATCH_TIMINGS, ClassLevel, Language, SITE_COPY } from '../data/content';

interface TimingsSectionProps {
  lang: Language;
}

type ClassFilter = 'all' | ClassLevel;

export function TimingsSection({ lang }: TimingsSectionProps) {
  const [selectedClass, setSelectedClass] = useState<ClassFilter>('all');

  const classFilters: ClassFilter[] = ['all', '8', '9', '10', '11', '12'];

  const visibleBatches =
    selectedClass === 'all'
      ? BATCH_TIMINGS
      : BATCH_TIMINGS.filter((row) => row.classLevel === selectedClass);

  return (
    <section id="timings" className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              {SITE_COPY.timings.sectionTitle[lang]}
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              {SITE_COPY.timings.sectionSubtitle[lang]}
            </p>
          </div>

          <div
            role="group"
            aria-label="Filter batch timings by class"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-white border border-slate-200 rounded-lg self-start"
          >
            {classFilters.map((cls) => (
              <button
                key={cls}
                type="button"
                onClick={() => setSelectedClass(cls)}
                className={`min-h-[38px] px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 ${
                  selectedClass === cls
                    ? 'bg-blue-700 text-white'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {cls === 'all'
                  ? SITE_COPY.timings.allFilter[lang]
                  : `${SITE_COPY.timings.classPrefix[lang]} ${cls}`}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop & Tablet Table */}
        <div className="mt-8 hidden md:block rounded-xl border border-slate-200 bg-white overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-blue-950 text-white text-xs font-semibold tracking-wide">
                <th className="py-3.5 px-5">{SITE_COPY.timings.columns.classLevel[lang]}</th>
                <th className="py-3.5 px-5">{SITE_COPY.timings.columns.batch[lang]}</th>
                <th className="py-3.5 px-5">{SITE_COPY.timings.columns.days[lang]}</th>
                <th className="py-3.5 px-5">{SITE_COPY.timings.columns.time[lang]}</th>
                <th className="py-3.5 px-5">{SITE_COPY.timings.columns.subjects[lang]}</th>
                <th className="py-3.5 px-5 text-right">{SITE_COPY.timings.columns.seats[lang]}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm">
              {visibleBatches.map((row) => (
                <tr key={row.id} className="hover:bg-blue-50/40 transition-colors">
                  <td className="py-4 px-5 font-semibold text-slate-900 whitespace-nowrap tabular-nums">
                    {row.classLabel[lang]}
                  </td>
                  <td className="py-4 px-5 text-slate-700 whitespace-nowrap">
                    {row.batchName[lang]}
                  </td>
                  <td className="py-4 px-5 text-slate-600 whitespace-nowrap">
                    {row.days[lang]}
                  </td>
                  <td className="py-4 px-5 font-mono text-xs sm:text-sm font-medium text-blue-900 whitespace-nowrap tabular-nums">
                    {row.timeSlot}
                  </td>
                  <td className="py-4 px-5 text-slate-700">
                    {row.subjects[lang]}
                  </td>
                  <td className="py-4 px-5 text-right font-medium text-blue-700 whitespace-nowrap tabular-nums">
                    {row.seats[lang]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile-First Stacked Schedule Cards */}
        <div className="mt-8 md:hidden space-y-3">
          {visibleBatches.map((row) => (
            <div
              key={row.id}
              className="p-4 rounded-xl border border-slate-200 bg-white space-y-2.5"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-display font-bold text-base text-slate-900 tabular-nums">
                  {row.classLabel[lang]} · {row.batchName[lang]}
                </span>
                <span className="text-xs font-semibold text-blue-700 whitespace-nowrap tabular-nums">
                  {row.seats[lang]}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600">
                <span>{row.days[lang]}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono font-medium text-blue-900 tabular-nums">
                  {row.timeSlot}
                </span>
              </div>

              <p className="text-sm text-slate-700 pt-2 border-t border-slate-100">
                {row.subjects[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
