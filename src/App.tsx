import { useEffect, useState } from 'react';
import { ClassLevel, Language } from './data/content';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CoursesSection } from './components/CoursesSection';
import { TimingsSection } from './components/TimingsSection';
import { FacultySection } from './components/FacultySection';
import { ResultsSection } from './components/ResultsSection';
import { FeesSection } from './components/FeesSection';
import { EnquirySection } from './components/EnquirySection';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [selectedEnquiryClass, setSelectedEnquiryClass] = useState<ClassLevel>('10');

  useEffect(() => {
    document.documentElement.lang = lang === 'ta' ? 'ta' : 'en';
  }, [lang]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar lang={lang} onToggleLang={setLang} />
      <main className="flex-1">
        <Hero lang={lang} onToggleLang={setLang} />
        <CoursesSection lang={lang} />
        <TimingsSection lang={lang} />
        <FacultySection lang={lang} />
        <ResultsSection lang={lang} />
        <FeesSection lang={lang} onSelectClassForEnquiry={setSelectedEnquiryClass} />
        <EnquirySection lang={lang} preselectedClass={selectedEnquiryClass} />
      </main>
      <Footer lang={lang} onToggleLang={setLang} />
    </div>
  );
}
