import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Language, SITE_COPY } from '../data/content';

interface NavbarProps {
  lang: Language;
  onToggleLang: (lang: Language) => void;
}

export function Navbar({ lang, onToggleLang }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '#courses', label: SITE_COPY.nav.courses[lang] },
    { href: '#timings', label: SITE_COPY.nav.timings[lang] },
    { href: '#faculty', label: SITE_COPY.nav.faculty[lang] },
    { href: '#results', label: SITE_COPY.nav.results[lang] },
    { href: '#fees', label: SITE_COPY.nav.fees[lang] },
  ];

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Single-line Brand Title */}
        <a
          href="#top"
          className="font-display text-lg sm:text-xl font-bold tracking-tight text-blue-950 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 rounded-md"
        >
          {SITE_COPY.brandName[lang]}
        </a>

        {/* Zone 2: Concise single-line nav links (Desktop) */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 py-1 hover:text-blue-700 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary CTA (Desktop) + Mobile menu button */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#enquiry"
            className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-700"
          >
            {SITE_COPY.nav.enquireCta[lang]}
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? SITE_COPY.nav.closeMenu[lang] : SITE_COPY.nav.openMenu[lang]}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 space-y-4">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="min-h-[44px] flex items-center px-3 rounded-lg text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-3">
            <div
              role="group"
              aria-label="Language switch"
              className="inline-flex items-center p-1 bg-slate-100 rounded-lg"
            >
              <button
                type="button"
                onClick={() => {
                  onToggleLang('en');
                  setMobileOpen(false);
                }}
                className={`min-h-[38px] px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  lang === 'en'
                    ? 'bg-white text-blue-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => {
                  onToggleLang('ta');
                  setMobileOpen(false);
                }}
                className={`min-h-[38px] px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  lang === 'ta'
                    ? 'bg-white text-blue-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                தமிழ்
              </button>
            </div>

            <a
              href="#enquiry"
              onClick={handleNavClick}
              className="min-h-[44px] inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors whitespace-nowrap shrink-0"
            >
              {SITE_COPY.nav.enquireCta[lang]}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
