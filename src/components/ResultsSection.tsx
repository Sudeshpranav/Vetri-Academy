import { Language, SITE_COPY, TESTIMONIALS_DATA, TOPPERS_DATA } from '../data/content';

interface ResultsSectionProps {
  lang: Language;
}

export function ResultsSection({ lang }: ResultsSectionProps) {
  return (
    <section id="results" className="py-14 sm:py-20 bg-blue-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
            {SITE_COPY.results.sectionTitle[lang]}
          </h2>
          <p className="mt-3 text-base text-blue-100/90 leading-relaxed">
            {SITE_COPY.results.sectionSubtitle[lang]}
          </p>
        </div>

        {/* Top Achievers Roster */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TOPPERS_DATA.map((item) => (
            <article
              key={item.id}
              className="p-6 rounded-xl bg-blue-900/55 border border-blue-800/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs text-blue-200">
                  <span>{item.classBoard[lang]}</span>
                  <span className="font-mono tabular-nums">{item.year}</span>
                </div>

                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="font-display text-3xl sm:text-4xl font-bold text-white tabular-nums">
                    {item.score}
                  </span>
                  <span className="text-sm font-mono text-blue-200 tabular-nums">
                    / {item.outOf}
                  </span>
                </div>

                <h3 className="mt-3 font-display text-lg font-semibold text-white">
                  {item.studentName[lang]}
                </h3>
              </div>

              <p className="mt-3 pt-3 border-t border-blue-800/80 text-xs sm:text-sm text-blue-100">
                {item.centumNote[lang]}
              </p>
            </article>
          ))}
        </div>

        {/* Attributable Parent Voices (Claim-to-Proof Adjacency) */}
        <div className="mt-10 pt-10 border-t border-blue-900 grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <blockquote
              key={testimonial.id}
              className="p-6 sm:p-8 rounded-xl bg-blue-900/35 border border-blue-800/70 flex flex-col justify-between"
            >
              <p className="text-sm sm:text-base text-blue-50 leading-relaxed">
                “{testimonial.quote[lang]}”
              </p>
              <footer className="mt-5 pt-4 border-t border-blue-800/60">
                <div className="font-display text-sm font-semibold text-white">
                  {testimonial.author[lang]}
                </div>
                <div className="text-xs text-blue-200 mt-0.5">
                  {testimonial.context[lang]}
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
