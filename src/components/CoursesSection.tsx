import { useState } from 'react';
import { COURSES_DATA, Language, SITE_COPY } from '../data/content';

interface CoursesSectionProps {
  lang: Language;
}

type CourseFilter = 'all' | 'foundation' | 'senior';

export function CoursesSection({ lang }: CoursesSectionProps) {
  const [filter, setFilter] = useState<CourseFilter>('all');

  const filteredCourses = COURSES_DATA.filter((course) => {
    if (filter === 'all') return true;
    return course.band === 'both' || course.band === filter;
  });

  const filterButtons: { id: CourseFilter; label: string }[] = [
    { id: 'all', label: SITE_COPY.courses.filters.all[lang] },
    { id: 'foundation', label: SITE_COPY.courses.filters.foundation[lang] },
    { id: 'senior', label: SITE_COPY.courses.filters.senior[lang] },
  ];

  return (
    <section id="courses" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              {SITE_COPY.courses.sectionTitle[lang]}
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              {SITE_COPY.courses.sectionSubtitle[lang]}
            </p>
          </div>

          <div
            role="group"
            aria-label="Filter courses by class band"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-slate-100 border border-slate-200 rounded-lg self-start"
          >
            {filterButtons.map((btn) => (
              <button
                key={btn.id}
                type="button"
                onClick={() => setFilter(btn.id)}
                className={`min-h-[38px] px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 ${
                  filter === btn.id
                    ? 'bg-white text-blue-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric / Structured Course Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCourses.map((course) => (
            <article
              key={course.id}
              className="p-6 sm:p-8 rounded-xl border border-slate-200 bg-slate-50/40 flex flex-col justify-between transition-colors duration-150 hover:border-blue-300"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-blue-800">
                  <span>{course.classesLabel[lang]}</span>
                  <span aria-hidden="true" className="text-slate-400">·</span>
                  <span className="text-slate-600">{course.boards[lang]}</span>
                </div>

                <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold text-slate-900">
                  {course.subject[lang]}
                </h3>

                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {course.description[lang]}
                </p>

                <ul className="mt-5 pt-5 border-t border-slate-200 space-y-2.5">
                  {course.highlights[lang].map((item, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-slate-700 flex items-start gap-2.5 leading-snug"
                    >
                      <span className="text-blue-700 font-semibold shrink-0" aria-hidden="true">
                        —
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs sm:text-sm">
                <span className="font-mono font-medium text-slate-700 tabular-nums">
                  {course.weeklyHours[lang]}
                </span>
                <a
                  href="#timings"
                  className="font-semibold text-blue-700 hover:text-blue-900 transition-colors whitespace-nowrap shrink-0"
                >
                  {lang === 'en' ? 'Check schedule' : 'நேரம் காண்க'}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
