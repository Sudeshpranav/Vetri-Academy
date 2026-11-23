import { useState } from 'react';
import { ArrowRight, BookOpen, Globe } from 'lucide-react';
import { Language, SITE_COPY } from '../data/content';

interface HeroProps {
  lang: Language;
  onToggleLang: (lang: Language) => void;
}

export function Hero({ lang, onToggleLang }: HeroProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="top" className="bg-gradient-to-b from-blue-50/60 via-white to-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-10 sm:pb-16">
        {/* Top Utility Row: Regional Trust Marker + Bilingual Language Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 sm:pb-8 border-b border-slate-200/80">
          <p className="text-xs sm:text-sm font-medium text-slate-600">
            {SITE_COPY.hero.locationTrust[lang]}
          </p>

          <div className="flex items-center gap-2 shrink-0">
            <Globe className="w-4 h-4 text-blue-700 shrink-0" aria-hidden="true" />
            <div
              role="group"
              aria-label="Language toggle"
              className="inline-flex items-center p-1 bg-slate-100 border border-slate-200 rounded-lg"
            >
              <button
                type="button"
                onClick={() => onToggleLang('en')}
                aria-pressed={lang === 'en'}
                className={`min-h-[36px] px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 ${
                  lang === 'en'
                    ? 'bg-blue-700 text-white shadow-xs'
                    : 'text-slate-700 hover:text-blue-900'
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => onToggleLang('ta')}
                aria-pressed={lang === 'ta'}
                className={`min-h-[36px] px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 ${
                  lang === 'ta'
                    ? 'bg-blue-700 text-white shadow-xs'
                    : 'text-slate-700 hover:text-blue-900'
                }`}
              >
                தமிழ்
              </button>
            </div>
          </div>
        </div>

        {/* 2-Column Hero Split */}
        <div className="pt-8 sm:pt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.12] font-bold tracking-tight text-slate-900 text-balance max-w-2xl">
              {SITE_COPY.hero.headline[lang]}
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600 max-w-xl">
              {SITE_COPY.hero.subheadline[lang]}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#enquiry"
                className="min-h-[46px] inline-flex items-center justify-center gap-2 px-6 py-3 text-sm sm:text-base font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-700"
              >
                <span>{SITE_COPY.hero.primaryCta[lang]}</span>
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>

              <a
                href="#timings"
                className="min-h-[46px] inline-flex items-center justify-center px-5 py-3 text-sm sm:text-base font-semibold text-blue-800 bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
              >
                {SITE_COPY.hero.secondaryCta[lang]}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="h-full min-h-[260px] sm:min-h-[320px] rounded-xl overflow-hidden border border-slate-200 bg-blue-50">
              {!imgError ? (
                <img
                  src="/src/assets/images/hero_chennai_classroom_v2_1795457415727.jpg"
                  alt={SITE_COPY.hero.imageAlt[lang]}
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-full lg:h-full object-cover"
                />
              ) : (
                <div className="w-full h-full min-h-[280px] flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-blue-50 to-slate-100">
                  <BookOpen className="w-10 h-10 text-blue-700 mb-3" />
                  <p className="font-display font-semibold text-slate-900">
                    {SITE_COPY.brandName[lang]}
                  </p>
                  <p className="text-sm text-slate-600 mt-1">
                    {SITE_COPY.hero.locationTrust[lang]}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Proof Strip */}
        <div className="mt-10 sm:mt-14 pt-8 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SITE_COPY.hero.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="flex flex-col"
            >
              <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-blue-800 tabular-nums">
                {metric.value}
              </span>
              <span className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-snug">
                {metric.label[lang]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
