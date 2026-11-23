import { Language, SITE_COPY } from '../data/content';

interface FooterProps {
  lang: Language;
  onToggleLang: (lang: Language) => void;
}

export function Footer({ lang, onToggleLang }: FooterProps) {
  return (
    <footer className="bg-white border-t border-slate-200 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <a
            href="#top"
            className="font-display text-lg font-bold text-blue-950 tracking-tight"
          >
            {SITE_COPY.brandName[lang]}
          </a>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-500">
            {SITE_COPY.footer.copyright[lang]}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-5 text-xs sm:text-sm text-slate-600">
            <a href="#courses" className="hover:text-blue-700 transition-colors whitespace-nowrap">
              {SITE_COPY.nav.courses[lang]}
            </a>
            <a href="#timings" className="hover:text-blue-700 transition-colors whitespace-nowrap">
              {SITE_COPY.nav.timings[lang]}
            </a>
            <a href="#faculty" className="hover:text-blue-700 transition-colors whitespace-nowrap">
              {SITE_COPY.nav.faculty[lang]}
            </a>
            <a href="#fees" className="hover:text-blue-700 transition-colors whitespace-nowrap">
              {SITE_COPY.nav.fees[lang]}
            </a>
          </nav>

          <button
            type="button"
            onClick={() => onToggleLang(lang === 'en' ? 'ta' : 'en')}
            className="min-h-[36px] px-3 py-1.5 text-xs font-semibold text-blue-800 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors whitespace-nowrap shrink-0"
          >
            {lang === 'en' ? 'தமிழில் பார்க்க' : 'View in English'}
          </button>
        </div>
      </div>
    </footer>
  );
}
