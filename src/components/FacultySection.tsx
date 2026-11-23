import { useState } from 'react';
import { Language, SITE_COPY, TEACHERS_DATA, TeacherProfile } from '../data/content';

interface FacultySectionProps {
  lang: Language;
}

function TeacherCard({ teacher, lang }: { teacher: TeacherProfile; lang: Language }) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="rounded-xl border border-slate-200 bg-white overflow-hidden flex flex-col">
      <div className="aspect-square w-full bg-blue-50 border-b border-slate-200 overflow-hidden">
        {!imgError ? (
          <img
            src={teacher.image}
            alt={`${teacher.name[lang]} — ${teacher.role[lang]}`}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-slate-100">
            <span className="font-display text-3xl font-bold text-blue-900">
              {teacher.initials}
            </span>
          </div>
        )}
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <div className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-blue-800">
          <span>{teacher.qualification}</span>
          <span aria-hidden="true" className="text-slate-400">·</span>
          <span className="tabular-nums">{teacher.experience[lang]}</span>
        </div>

        <h3 className="mt-1.5 font-display text-lg font-bold text-slate-900">
          {teacher.name[lang]}
        </h3>

        <p className="text-sm font-medium text-slate-700 mt-0.5">
          {teacher.role[lang]}
        </p>

        <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">
          {teacher.bio[lang]}
        </p>

        <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-medium text-slate-500">
          {teacher.classes[lang]}
        </div>
      </div>
    </article>
  );
}

export function FacultySection({ lang }: FacultySectionProps) {
  return (
    <section id="faculty" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            {SITE_COPY.faculty.sectionTitle[lang]}
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            {SITE_COPY.faculty.sectionSubtitle[lang]}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEACHERS_DATA.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}
