import { FormEvent, useEffect, useState } from 'react';
import { CheckCircle2, Clock, MapPin, MessageCircle, Phone } from 'lucide-react';
import { ClassLevel, Language, SITE_COPY } from '../data/content';

interface EnquirySectionProps {
  lang: Language;
  preselectedClass: ClassLevel;
}

const WHATSAPP_NUMBER = '918838340480';

export function EnquirySection({ lang, preselectedClass }: EnquirySectionProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [studentClass, setStudentClass] = useState<ClassLevel>(preselectedClass);
  const [board, setBoard] = useState<'CBSE' | 'State Board'>('CBSE');
  const [subjectIndex, setSubjectIndex] = useState<number>(0);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);
  const [submittedSummary, setSubmittedSummary] = useState<string | null>(null);

  const subjectOptions =
    lang === 'en'
      ? [
          'All Subjects (Maths, Science, English)',
          'Mathematics Only',
          'Science (Physics / Chemistry)',
          'English Only',
          'Maths + Science',
        ]
      : [
          'அனைத்து பாடங்களும் (கணிதம், அறிவியல், ஆங்கிலம்)',
          'கணிதம் மட்டும்',
          'அறிவியல் (இயற்பியல் / வேதியியல்)',
          'ஆங்கிலம் மட்டும்',
          'கணிதம் + அறிவியல்',
        ];

  useEffect(() => {
    setStudentClass(preselectedClass);
  }, [preselectedClass]);

  const cleanPhoneDigits = (value: string) => {
    const digits = value.replace(/\D/g, '');
    if (digits.length === 12 && digits.startsWith('91')) {
      return digits.slice(2);
    }
    if (digits.length === 11 && digits.startsWith('0')) {
      return digits.slice(1);
    }
    return digits;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg(null);

    const trimmedName = name.trim();
    if (trimmedName.length < 2) {
      setErrorMsg(SITE_COPY.enquiry.form.errors.nameRequired[lang]);
      return;
    }

    const digits = cleanPhoneDigits(phone);
    if (digits.length !== 10) {
      setErrorMsg(SITE_COPY.enquiry.form.errors.phoneInvalid[lang]);
      return;
    }

    const chosenSubject = subjectOptions[subjectIndex] ?? subjectOptions[0];

    const messageLines =
      lang === 'ta'
        ? [
            'வணக்கம் வெற்றி அகாடமி, சேர்க்கை குறித்து விசாரிக்கிறேன்.',
            `பெயர்: ${trimmedName}`,
            `தொலைபேசி: +91 ${digits}`,
            `வகுப்பு: Class ${studentClass} (${board})`,
            `பாடங்கள்: ${chosenSubject}`,
          ]
        : [
            'Hello Vetri Academy, I would like to enquire about admission / demo class.',
            `Name: ${trimmedName}`,
            `Phone: +91 ${digits}`,
            `Class: Class ${studentClass} (${board})`,
            `Subjects: ${chosenSubject}`,
          ];

    const fullMessage = messageLines.join('\n');
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fullMessage)}`;

    setSubmittedUrl(whatsappUrl);
    setSubmittedSummary(fullMessage);

    // Open via synthetic anchor element to avoid window.open popup blocks inside iframes
    const link = document.createElement('a');
    link.href = whatsappUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="enquiry" className="py-14 sm:py-20 bg-slate-50/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            {SITE_COPY.enquiry.sectionTitle[lang]}
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            {SITE_COPY.enquiry.sectionSubtitle[lang]}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Centre Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-xl border border-slate-200 bg-white space-y-5">
              <h3 className="font-display text-lg font-bold text-slate-900">
                {SITE_COPY.enquiry.centerTitle[lang]}
              </h3>

              <div className="flex items-start gap-3 text-sm text-slate-600">
                <MapPin className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" aria-hidden="true" />
                <p className="leading-relaxed">{SITE_COPY.enquiry.address[lang]}</p>
              </div>

              <div className="flex items-start gap-3 text-sm text-slate-600">
                <Clock className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="font-medium text-slate-900">
                    {SITE_COPY.enquiry.hoursLabel[lang]}
                  </div>
                  <div className="mt-0.5 tabular-nums">
                    {SITE_COPY.enquiry.hoursValue[lang]}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-start gap-3 text-sm">
                <Phone className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="font-medium text-slate-900">
                    {SITE_COPY.enquiry.phoneLabel[lang]}
                  </div>
                  <a
                    href="tel:+918838340480"
                    className="mt-1 inline-block font-mono font-semibold text-blue-700 hover:text-blue-900 tabular-nums"
                  >
                    +91 88383 40480
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry Form Column */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl border border-slate-200 bg-white">
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label
                    htmlFor="enquiry-name"
                    className="block text-sm font-semibold text-slate-800 mb-1.5"
                  >
                    {SITE_COPY.enquiry.form.nameLabel[lang]}
                  </label>
                  <input
                    id="enquiry-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={SITE_COPY.enquiry.form.namePlaceholder[lang]}
                    className="w-full min-h-[46px] px-4 py-2.5 text-base text-slate-900 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="enquiry-phone"
                      className="block text-sm font-semibold text-slate-800 mb-1.5"
                    >
                      {SITE_COPY.enquiry.form.phoneLabel[lang]}
                    </label>
                    <input
                      id="enquiry-phone"
                      type="tel"
                      inputMode="numeric"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={SITE_COPY.enquiry.form.phonePlaceholder[lang]}
                      className="w-full min-h-[46px] px-4 py-2.5 text-base font-mono text-slate-900 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20 tabular-nums"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-class"
                      className="block text-sm font-semibold text-slate-800 mb-1.5"
                    >
                      {SITE_COPY.enquiry.form.classLabel[lang]}
                    </label>
                    <select
                      id="enquiry-class"
                      value={studentClass}
                      onChange={(e) => setStudentClass(e.target.value as ClassLevel)}
                      className="w-full min-h-[46px] px-4 py-2.5 text-base text-slate-900 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20"
                    >
                      {(['8', '9', '10', '11', '12'] as ClassLevel[]).map((cls) => (
                        <option key={cls} value={cls}>
                          {lang === 'en' ? `Class ${cls}` : `வகுப்பு ${cls}`}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="enquiry-board"
                      className="block text-sm font-semibold text-slate-800 mb-1.5"
                    >
                      {SITE_COPY.enquiry.form.boardLabel[lang]}
                    </label>
                    <select
                      id="enquiry-board"
                      value={board}
                      onChange={(e) => setBoard(e.target.value as 'CBSE' | 'State Board')}
                      className="w-full min-h-[46px] px-4 py-2.5 text-base text-slate-900 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20"
                    >
                      <option value="CBSE">CBSE (NCERT)</option>
                      <option value="State Board">
                        {lang === 'en'
                          ? 'TN State Board (Samacheer)'
                          : 'தமிழ்நாடு மாநிலப் பாடத்திட்டம்'}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-subjects"
                      className="block text-sm font-semibold text-slate-800 mb-1.5"
                    >
                      {SITE_COPY.enquiry.form.subjectLabel[lang]}
                    </label>
                    <select
                      id="enquiry-subjects"
                      value={subjectIndex}
                      onChange={(e) => setSubjectIndex(Number(e.target.value))}
                      className="w-full min-h-[46px] px-4 py-2.5 text-base text-slate-900 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20"
                    >
                      {subjectOptions.map((opt, idx) => (
                        <option key={idx} value={idx}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {errorMsg && (
                  <div
                    role="alert"
                    className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-sm font-medium text-red-800"
                  >
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 py-3 text-base font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-700"
                >
                  <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span>{SITE_COPY.enquiry.form.submitBtn[lang]}</span>
                </button>
              </form>

              {/* Inline WhatsApp Fallback & Confirmation Card */}
              {submittedUrl && (
                <div className="mt-6 p-5 rounded-xl bg-blue-50 border border-blue-200 space-y-3">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <h4 className="font-display font-bold text-sm sm:text-base text-blue-950">
                        {SITE_COPY.enquiry.form.confirmationTitle[lang]}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 mt-1">
                        {SITE_COPY.enquiry.form.confirmationDesc[lang]}
                      </p>
                    </div>
                  </div>

                  {submittedSummary && (
                    <pre className="p-3 rounded-lg bg-white border border-blue-100 text-xs font-mono text-slate-700 whitespace-pre-wrap break-words">
                      {submittedSummary}
                    </pre>
                  )}

                  <a
                    href={submittedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>{SITE_COPY.enquiry.form.openWhatsappBtn[lang]}</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
