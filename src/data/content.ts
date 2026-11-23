export type Language = 'en' | 'ta';

export type ClassLevel = '8' | '9' | '10' | '11' | '12';

export interface BilingualText {
  en: string;
  ta: string;
}

export interface CourseItem {
  id: string;
  subject: BilingualText;
  band: 'foundation' | 'senior' | 'both';
  classesLabel: BilingualText;
  boards: BilingualText;
  description: BilingualText;
  highlights: {
    en: string[];
    ta: string[];
  };
  weeklyHours: BilingualText;
}

export interface BatchTimingRow {
  id: string;
  classLevel: ClassLevel;
  classLabel: BilingualText;
  batchName: BilingualText;
  days: BilingualText;
  timeSlot: string;
  subjects: BilingualText;
  seats: BilingualText;
  seatsAvailable: boolean;
}

export interface TeacherProfile {
  id: string;
  name: BilingualText;
  role: BilingualText;
  qualification: string;
  experience: BilingualText;
  classes: BilingualText;
  bio: BilingualText;
  image: string;
  initials: string;
}

export interface TopperResult {
  id: string;
  studentName: BilingualText;
  classBoard: BilingualText;
  score: string;
  outOf: string;
  centumNote: BilingualText;
  year: string;
}

export interface TestimonialItem {
  id: string;
  quote: BilingualText;
  author: BilingualText;
  context: BilingualText;
}

export interface FeeRow {
  classLevel: ClassLevel;
  className: BilingualText;
  boardCoverage: BilingualText;
  singleSubjectMonthly: number;
  comboMonthly: number;
  singleSubjectTerm: number;
  comboTerm: number;
  subjectsIncluded: BilingualText;
}

export const SITE_COPY = {
  brandName: {
    en: 'Vetri Academy',
    ta: 'வெற்றி அகாடமி',
  },
  nav: {
    courses: { en: 'Courses', ta: 'பாடங்கள்' },
    timings: { en: 'Timings', ta: 'நேரம்' },
    faculty: { en: 'Faculty', ta: 'ஆசிரியர்கள்' },
    results: { en: 'Results', ta: 'தேர்ச்சி' },
    fees: { en: 'Fees', ta: 'கட்டணம்' },
    enquireCta: { en: 'Enquire Now', ta: 'விசாரிக்கவும்' },
    openMenu: { en: 'Open navigation menu', ta: 'வழிசெலுத்தல் பட்டியைத் திற' },
    closeMenu: { en: 'Close navigation menu', ta: 'வழிசெலுத்தல் பட்டியை மூடு' },
  },
  hero: {
    locationTrust: {
      en: 'Anna Nagar West, Chennai · CBSE & Tamil Nadu State Board',
      ta: 'அண்ணா நகர் மேற்கு, சென்னை · CBSE மற்றும் மாநிலப் பாடத்திட்டம்',
    },
    headline: {
      en: 'Focused Coaching for Classes 8 to 12 in Chennai',
      ta: 'சென்னையில் 8 முதல் 12-ஆம் வகுப்புகளுக்கான சிறப்புப் பயிற்சி மையம்',
    },
    subheadline: {
      en: 'Small batches of 18 students in Mathematics, Science, and English. Structured concept clarity, weekly chapter tests, and individual feedback for board exam confidence.',
      ta: 'கணிதம், அறிவியல் மற்றும் ஆங்கிலத்தில் ஒரு வகுப்பிற்கு அதிகபட்சம் 18 மாணவர்கள் மட்டுமே. தெளிவான பாடப் புரிதல், வாராந்திரத் தேர்வுகள் மற்றும் தனிப்பட்ட கவனம் மூலம் பொதுத்தேர்வில் சிறந்த மதிப்பெண்கள்.',
    },
    primaryCta: {
      en: 'Book Free Demo Class',
      ta: 'இலவச அறிமுக வகுப்பிற்குப் பதிவு செய்க',
    },
    secondaryCta: {
      en: 'View Batch Timings',
      ta: 'வகுப்பு நேரத்தைக் காண்க',
    },
    imageAlt: {
      en: 'Senior mathematics teacher explaining trigonometry diagrams on a whiteboard to students at Vetri Academy in Chennai',
      ta: 'சென்னை வெற்றி அகாடமியில் மாணவர்களுக்குக் கணிதப் பாடம் நடத்தும் அனுபவமிக்க ஆசிரியர்',
    },
    metrics: [
      {
        value: '100%',
        label: { en: 'Board Exam Pass Rate (2022–2026)', ta: 'பொதுத்தேர்வு தேர்ச்சி விகிதம் (2022–2026)' },
      },
      {
        value: '48',
        label: { en: 'Subject Centums in Maths & Science', ta: 'கணிதம் & அறிவியலில் 100/100 மதிப்பெண்கள்' },
      },
      {
        value: '18',
        label: { en: 'Maximum Students Per Batch', ta: 'ஒரு வகுப்பிற்கு அதிகபட்ச மாணவர் எண்ணிக்கை' },
      },
      {
        value: '14 yrs',
        label: { en: 'Academic Mentoring in Chennai', ta: 'சென்னையில் 14 ஆண்டுகால கல்விச் சேவை' },
      },
    ],
  },
  courses: {
    sectionTitle: {
      en: '01. Core Academic Programmes',
      ta: '01. பாடத்திட்டப் பிரிவுகள்',
    },
    sectionSubtitle: {
      en: 'Concept-first classroom instruction aligned with NCERT (CBSE) and Tamil Nadu Samacheer Kalvi syllabi, backed by graded practice sheets.',
      ta: 'CBSE (NCERT) மற்றும் தமிழ்நாடு சமச்சீர் கல்விப் பாடத்திட்டங்களுக்கு ஏற்ப, அடிப்படைக் கருத்துகளைத் தெளிவுபடுத்தும் வகுப்புகள் மற்றும் பயிற்சித் தாள்கள்.',
    },
    filters: {
      all: { en: 'All Classes (8–12)', ta: 'அனைத்து வகுப்புகள் (8–12)' },
      foundation: { en: 'Classes 8–10 Foundation', ta: 'வகுப்பு 8–10 அடிப்படை' },
      senior: { en: 'Classes 11–12 Board Track', ta: 'வகுப்பு 11–12 பொதுத்தேர்வு' },
    },
  },
  timings: {
    sectionTitle: {
      en: '02. Batch Timings & Weekly Schedule',
      ta: '02. வகுப்பு நேர அட்டவணை',
    },
    sectionSubtitle: {
      en: 'Morning, after-school, and weekend slots designed around Chennai school schedules so students never feel rushed.',
      ta: 'பள்ளி நேரத்திற்குப் பாதிப்பில்லாமல் காலை, மாலை மற்றும் வார இறுதி வகுப்புகள் திட்டமிடப்பட்டுள்ளன.',
    },
    allFilter: { en: 'All Classes', ta: 'அனைத்தும்' },
    classPrefix: { en: 'Class', ta: 'வகுப்பு' },
    columns: {
      classLevel: { en: 'Class', ta: 'வகுப்பு' },
      batch: { en: 'Batch Slot', ta: 'வகுப்பு நேரம்' },
      days: { en: 'Days', ta: 'நாட்கள்' },
      time: { en: 'Timing', ta: 'நேரம்' },
      subjects: { en: 'Subjects Covered', ta: 'பாடங்கள்' },
      seats: { en: 'Availability', ta: 'இடங்கள்' },
    },
  },
  faculty: {
    sectionTitle: {
      en: '03. Experienced Subject Faculty',
      ta: '03. அனுபவமிக்க ஆசிரியர் குழு',
    },
    sectionSubtitle: {
      en: 'Every batch is taught directly by senior full-time educators with over a decade of Chennai board exam mentoring.',
      ta: '10 ஆண்டுகளுக்கு மேல் பொதுத்தேர்வுப் பயிற்சி அனுபவம் கொண்ட நிரந்தர ஆசிரியர்களே அனைத்து வகுப்புகளையும் நடத்துகிறார்கள்.',
    },
  },
  results: {
    sectionTitle: {
      en: '04. Board Exam Results & Parent Voices',
      ta: '04. மாணவர் தேர்வு சாதனைகள் & பெற்றோர் கருத்துகள்',
    },
    sectionSubtitle: {
      en: 'Consistent scores across Class 10 and Class 12 board examinations in both State Board and CBSE streams.',
      ta: 'மாநிலப் பாடத்திட்டம் மற்றும் CBSE ஆகிய இரு பிரிவுகளிலும் 10 மற்றும் 12-ஆம் வகுப்புகளில் தொடர்ச்சியான சாதனைகள்.',
    },
    tableHeaders: {
      student: { en: 'Student Name', ta: 'மாணவர் பெயர்' },
      stream: { en: 'Class & Board', ta: 'வகுப்பு & பிரிவு' },
      total: { en: 'Board Score', ta: 'மொத்த மதிப்பெண்' },
      highlight: { en: 'Subject Distinction', ta: 'சிறப்புத் தகுதி' },
    },
  },
  fees: {
    sectionTitle: {
      en: '05. Transparent Fee Details',
      ta: '05. வெளிப்படையான கட்டண விவரம்',
    },
    sectionSubtitle: {
      en: 'No admission or registration charges. Fees cover printed chapter notes, weekly test series, and doubt-clearing sessions.',
      ta: 'சேர்க்கைக் கட்டணம் இல்லை. கட்டணத்தில் பாடக் குறிப்புகள், வாராந்திரத் தேர்வுகள் மற்றும் சந்தேக நிவர்த்தி வகுப்புகள் அனைத்தும் அடங்கும்.',
    },
    billingToggle: {
      monthly: { en: 'Monthly Fee', ta: 'மாதாந்திரக் கட்டணம்' },
      term: { en: 'Per Term (4 Months · Save 10%)', ta: 'பருவக் கட்டணம் (4 மாதம் · 10% சேமிப்பு)' },
    },
    headers: {
      classCol: { en: 'Class & Board', ta: 'வகுப்பு & பிரிவு' },
      subjectsCol: { en: 'Subjects Available', ta: 'பாடங்கள்' },
      singleCol: { en: 'Single Subject', ta: 'ஒரு பாடம்' },
      comboCol: { en: 'All 3 Subjects Combo', ta: '3 பாடங்கள் தொகுப்பு' },
      actionCol: { en: 'Enquiry', ta: 'விசாரணை' },
    },
    selectBtn: { en: 'Enquire', ta: 'விசாரிக்க' },
    footnotes: {
      en: [
        '10% sibling concession available when two or more children from the same family enrol.',
        '2 free trial classes offered before confirming term or monthly enrolment.',
      ],
      ta: [
        'ஒரே குடும்பத்தைச் சேர்ந்த இரண்டு மாணவர்கள் சேர்ந்தால் 10% கட்டணச் சலுகை உண்டு.',
        'வகுப்பில் சேருவதற்கு முன்பு 2 இலவச அறிமுக வகுப்புகளில் பங்கேற்கலாம்.',
      ],
    },
  },
  enquiry: {
    sectionTitle: {
      en: '06. Admission & Demo Class Enquiry',
      ta: '06. சேர்க்கை மற்றும் இலவச வகுப்பு விசாரணை',
    },
    sectionSubtitle: {
      en: 'Fill in the student details below to open a pre-filled WhatsApp message directly with our academic coordinator.',
      ta: 'கீழே உள்ள விவரங்களைப் பூர்த்தி செய்து சமர்ப்பித்தால், எங்கள் ஒருங்கிணைப்பாளருக்கு நேரடியாக வாட்ஸ்அப் செய்தி அனுப்பப்படும்.',
    },
    centerTitle: {
      en: 'Vetri Academy — Anna Nagar Centre',
      ta: 'வெற்றி அகாடமி — அண்ணா நகர் மையம்',
    },
    address: {
      en: 'No. 42, 2nd Avenue, Anna Nagar West, Chennai – 600040 (200m from Thirumangalam Metro)',
      ta: 'எண். 42, 2-வது அவென்யூ, அண்ணா நகர் மேற்கு, சென்னை – 600040 (திருமங்கலம் மெட்ரோ அருகில்)',
    },
    hoursLabel: { en: 'Centre Office Hours', ta: 'அலுவலக நேரம்' },
    hoursValue: {
      en: 'Mon – Sat: 6:30 AM – 8:30 PM · Sun: 8:30 AM – 1:00 PM',
      ta: 'திங்கள் – சனி: காலை 6:30 – இரவு 8:30 · ஞாயிறு: காலை 8:30 – மதியம் 1:00',
    },
    phoneLabel: { en: 'Direct Phone & WhatsApp', ta: 'தொலைபேசி & வாட்ஸ்அப்' },
    form: {
      nameLabel: { en: 'Student or Parent Name', ta: 'மாணவர் அல்லது பெற்றோர் பெயர்' },
      namePlaceholder: { en: 'e.g., Karthik Subramanian / Ramesh K.', ta: 'எ.கா., கார்த்திக் சுப்பிரமணியன்' },
      phoneLabel: { en: 'Mobile Number (10 digits)', ta: 'அலைபேசி எண் (10 இலக்கங்கள்)' },
      phonePlaceholder: { en: 'e.g., 98401 23456', ta: 'எ.கா., 98401 23456' },
      classLabel: { en: 'Class Studying', ta: 'படிக்கும் வகுப்பு' },
      boardLabel: { en: 'School Board', ta: 'பாடத்திட்டம்' },
      subjectLabel: { en: 'Subjects Interested In', ta: 'தேவையான பாடங்கள்' },
      submitBtn: { en: 'Send Enquiry via WhatsApp', ta: 'வாட்ஸ்அப் மூலம் விசாரிக்கவும்' },
      errors: {
        nameRequired: {
          en: 'Please enter the student or parent name (at least 2 characters).',
          ta: 'தயவுசெய்து மாணவர் அல்லது பெற்றோரின் பெயரை உள்ளிடவும்.',
        },
        phoneInvalid: {
          en: 'Please enter a valid 10-digit Indian mobile number.',
          ta: 'தயவுசெய்து சரியான 10 இலக்க அலைபேசி எண்ணை உள்ளிடவும்.',
        },
      },
      confirmationTitle: {
        en: 'Enquiry Ready on WhatsApp',
        ta: 'வாட்ஸ்அப் செய்தி தயாராக உள்ளது',
      },
      confirmationDesc: {
        en: 'If WhatsApp did not open automatically in a new tab, tap the button below to send your enquiry to +91 88383 40480.',
        ta: 'புதிய சாளரத்தில் வாட்ஸ்அப் தானாகத் திறக்கவில்லை எனில், கீழே உள்ள பொத்தானை அழுத்தி +91 88383 40480 என்ற எண்ணிற்கு அனுப்பவும்.',
      },
      openWhatsappBtn: {
        en: 'Open WhatsApp Chat Now',
        ta: 'இப்போதே வாட்ஸ்அப்பில் திறக்கவும்',
      },
    },
  },
  footer: {
    copyright: {
      en: '© 2026 Vetri Academy, Anna Nagar West, Chennai. All rights reserved.',
      ta: '© 2026 வெற்றி அகாடமி, அண்ணா நகர் மேற்கு, சென்னை. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
    },
  },
};

export const COURSES_DATA: CourseItem[] = [
  {
    id: 'maths',
    subject: { en: 'Mathematics', ta: 'கணிதம்' },
    band: 'both',
    classesLabel: { en: 'Classes 8, 9, 10, 11 & 12', ta: 'வகுப்புகள் 8, 9, 10, 11 & 12' },
    boards: { en: 'CBSE & TN State Board', ta: 'CBSE & மாநிலப் பாடத்திட்டம்' },
    description: {
      en: 'Step-by-step problem solving from Algebra and Geometry in middle school to Calculus, Vectors, and Probability in Class 12.',
      ta: 'அடிப்படை இயற்கணிதம், வடிவியல் முதல் 12-ஆம் வகுப்பு நுண்கணிதம் மற்றும் நிகழ்தகவு வரை படிப்படியான கணக்குப் பயிற்சி.',
    },
    highlights: {
      en: [
        'Daily 20-minute guided problem drills in class',
        'Formula sheets & 10-year board question bank',
        'Separate doubt clinics every Saturday morning',
      ],
      ta: [
        'தினசரி வகுப்பில் 20 நிமிட நேரடிக் கணக்குப் பயிற்சி',
        'சூத்திரக் கையேடுகள் மற்றும் 10 ஆண்டு பொதுத்தேர்வு வினாத்தாள்கள்',
        'ஒவ்வொரு சனிக்கிழமையும் தனிப்பட்ட சந்தேக நிவர்த்தி வகுப்பு',
      ],
    },
    weeklyHours: { en: '4.5 hrs / week', ta: 'வாரம் 4.5 மணி நேரம்' },
  },
  {
    id: 'science-foundation',
    subject: { en: 'Integrated Science', ta: 'அறிவியல் (இயற்பியல், வேதியியல், உயிரியல்)' },
    band: 'foundation',
    classesLabel: { en: 'Classes 8, 9 & 10', ta: 'வகுப்புகள் 8, 9 & 10' },
    boards: { en: 'NCERT & Samacheer Kalvi', ta: 'NCERT & சமச்சீர் கல்வி' },
    description: {
      en: 'Strong grounding in Physics numericals, Chemistry equations, and Biology diagrams so students transition smoothly to Class 11.',
      ta: 'இயற்பியல் கணக்குகள், வேதியியல் சமன்பாடுகள் மற்றும் உயிரியல் வரைபடங்களில் வலுவான அடித்தளம் அமைக்கும் பயிற்சி.',
    },
    highlights: {
      en: [
        'Diagram accuracy & structured board answer framing',
        'Numerical problem sets for Electricity, Light & Motion',
        'Bi-weekly full-chapter objective & descriptive tests',
      ],
      ta: [
        'பொதுத்தேர்வு விடைத்தாள் எழுதும் முறை மற்றும் வரைபடப் பயிற்சி',
        'ஒளியியல், மின்னியல் மற்றும் இயக்கவியல் கணக்குகளுக்குத் தனிப் பயிற்சி',
        'இரு வாரத்திற்கு ஒருமுறை முழுப் பாடத் தேர்வு',
      ],
    },
    weeklyHours: { en: '4 hrs / week', ta: 'வாரம் 4 மணி நேரம்' },
  },
  {
    id: 'science-senior',
    subject: { en: 'Physics & Chemistry', ta: 'இயற்பியல் & வேதியியல்' },
    band: 'senior',
    classesLabel: { en: 'Classes 11 & 12', ta: 'வகுப்புகள் 11 & 12' },
    boards: { en: 'Board + Numerical Rigour', ta: 'பொதுத்தேர்வு + கணக்கீட்டுப் பயிற்சி' },
    description: {
      en: 'In-depth derivations, organic reaction mechanisms, and board numerical mastery taught by Ph.D. and senior faculty.',
      ta: 'இயற்பியல் விதிகள், கரிம வேதியியல் வினைகள் மற்றும் கணக்கீடுகளை அனுபவமிக்க பேராசிரியர்கள் மூலம் எளிமையாகக் கற்பித்தல்.',
    },
    highlights: {
      en: [
        'Line-by-line NCERT & State textbook coverage',
        'Derivation booklets and organic conversion charts',
        'Full 3-hour pre-board mock exams from December',
      ],
      ta: [
        'பாடப்புத்தகத்தின் ஒவ்வொரு பகுதியையும் ஆழமாக விளக்குதல்',
        'வேதியியல் மாற்றங்கள் மற்றும் சமன்பாட்டுக் குறிப்பேடுகள்',
        'டிசம்பர் முதல் 3 மணி நேர முழு மாதிரித் தேர்வுகள்',
      ],
    },
    weeklyHours: { en: '6 hrs / week', ta: 'வாரம் 6 மணி நேரம்' },
  },
  {
    id: 'english',
    subject: { en: 'English Language & Literature', ta: 'ஆங்கில இலக்கணம் & இலக்கியம்' },
    band: 'both',
    classesLabel: { en: 'Classes 8, 9, 10, 11 & 12', ta: 'வகுப்புகள் 8, 9, 10, 11 & 12' },
    boards: { en: 'Grammar, Writing & Literature', ta: 'இலக்கணம், கட்டுரை & பாடப்பகுதி' },
    description: {
      en: 'Precision in grammar, unseen comprehension, formal writing formats, and high-scoring literature answers.',
      ta: 'பிழையற்ற ஆங்கில இலக்கணம், பத்திப் புரிதல், கடிதம்-கட்டுரை வடிவமைப்பு மற்றும் இலக்கிய வினாக்களுக்கான முழுப் பயிற்சி.',
    },
    highlights: {
      en: [
        'Line-reviewed essays, letters, and summary writing',
        'Chapter-wise prose & poetry quotation banks',
        'Eliminates common grammar and tense errors early',
      ],
      ta: [
        'கட்டுரை மற்றும் கடிதங்களை ஆசிரியர் நேரடியாகத் திருத்தித் தருதல்',
        'செய்யுள் மற்றும் உரைநடைக்கான முக்கிய மேற்கோள் குறிப்புகள்',
        'இலக்கணப் பிழைகளைத் தவிர்க்கும் எளிய பயிற்சி முறைகள்',
      ],
    },
    weeklyHours: { en: '3 hrs / week', ta: 'வாரம் 3 மணி நேரம்' },
  },
];

export const BATCH_TIMINGS: BatchTimingRow[] = [
  {
    id: 'b8-eve',
    classLevel: '8',
    classLabel: { en: 'Class 8', ta: 'வகுப்பு 8' },
    batchName: { en: 'Evening Batch', ta: 'மாலை வகுப்பு' },
    days: { en: 'Mon, Wed, Fri', ta: 'திங்கள், புதன், வெள்ளி' },
    timeSlot: '04:30 PM – 06:00 PM',
    subjects: { en: 'Maths, Science, English', ta: 'கணிதம், அறிவியல், ஆங்கிலம்' },
    seats: { en: '6 seats open', ta: '6 இடங்கள் உள்ளன' },
    seatsAvailable: true,
  },
  {
    id: 'b8-wknd',
    classLevel: '8',
    classLabel: { en: 'Class 8', ta: 'வகுப்பு 8' },
    batchName: { en: 'Weekend Batch', ta: 'வார இறுதி வகுப்பு' },
    days: { en: 'Sat & Sun', ta: 'சனி & ஞாயிறு' },
    timeSlot: '09:00 AM – 11:30 AM',
    subjects: { en: 'Maths & Science', ta: 'கணிதம் & அறிவியல்' },
    seats: { en: '5 seats open', ta: '5 இடங்கள் உள்ளன' },
    seatsAvailable: true,
  },
  {
    id: 'b9-eve',
    classLevel: '9',
    classLabel: { en: 'Class 9', ta: 'வகுப்பு 9' },
    batchName: { en: 'Evening Batch', ta: 'மாலை வகுப்பு' },
    days: { en: 'Tue, Thu, Sat', ta: 'செவ்வாய், வியாழன், சனி' },
    timeSlot: '05:00 PM – 06:45 PM',
    subjects: { en: 'Maths, Science, English', ta: 'கணிதம், அறிவியல், ஆங்கிலம்' },
    seats: { en: '4 seats open', ta: '4 இடங்கள் உள்ளன' },
    seatsAvailable: true,
  },
  {
    id: 'b10-morn',
    classLevel: '10',
    classLabel: { en: 'Class 10', ta: 'வகுப்பு 10' },
    batchName: { en: 'Morning Batch A', ta: 'காலை வகுப்பு A' },
    days: { en: 'Mon to Fri', ta: 'திங்கள் முதல் வெள்ளி' },
    timeSlot: '06:30 AM – 07:45 AM',
    subjects: { en: 'Maths & Science (Board)', ta: 'கணிதம் & அறிவியல் (பொதுத்தேர்வு)' },
    seats: { en: '3 seats open', ta: '3 இடங்கள் உள்ளன' },
    seatsAvailable: true,
  },
  {
    id: 'b10-eve',
    classLevel: '10',
    classLabel: { en: 'Class 10', ta: 'வகுப்பு 10' },
    batchName: { en: 'Evening Batch B', ta: 'மாலை வகுப்பு B' },
    days: { en: 'Mon to Sat', ta: 'திங்கள் முதல் சனி' },
    timeSlot: '05:30 PM – 07:15 PM',
    subjects: { en: 'Maths, Science, English', ta: 'கணிதம், அறிவியல், ஆங்கிலம்' },
    seats: { en: '4 seats open', ta: '4 இடங்கள் உள்ளன' },
    seatsAvailable: true,
  },
  {
    id: 'b11-eve',
    classLevel: '11',
    classLabel: { en: 'Class 11', ta: 'வகுப்பு 11' },
    batchName: { en: 'Evening Batch', ta: 'மாலை வகுப்பு' },
    days: { en: 'Mon, Wed, Fri, Sat', ta: 'திங்கள், புதன், வெள்ளி, சனி' },
    timeSlot: '06:00 PM – 08:00 PM',
    subjects: { en: 'Maths, Physics, Chemistry, English', ta: 'கணிதம், இயற்பியல், வேதியியல், ஆங்கிலம்' },
    seats: { en: '5 seats open', ta: '5 இடங்கள் உள்ளன' },
    seatsAvailable: true,
  },
  {
    id: 'b12-morn',
    classLevel: '12',
    classLabel: { en: 'Class 12', ta: 'வகுப்பு 12' },
    batchName: { en: 'Morning Board Batch', ta: 'காலை பொதுத்தேர்வு வகுப்பு' },
    days: { en: 'Mon to Sat', ta: 'திங்கள் முதல் சனி' },
    timeSlot: '06:15 AM – 07:45 AM',
    subjects: { en: 'Maths, Physics, Chemistry', ta: 'கணிதம், இயற்பியல், வேதியியல்' },
    seats: { en: '2 seats open', ta: '2 இடங்கள் உள்ளன' },
    seatsAvailable: true,
  },
  {
    id: 'b12-eve',
    classLevel: '12',
    classLabel: { en: 'Class 12', ta: 'வகுப்பு 12' },
    batchName: { en: 'Evening Board Batch', ta: 'மாலை பொதுத்தேர்வு வகுப்பு' },
    days: { en: 'Mon to Sat', ta: 'திங்கள் முதல் சனி' },
    timeSlot: '06:30 PM – 08:30 PM',
    subjects: { en: 'Maths, Physics, Chemistry, English', ta: 'கணிதம், இயற்பியல், வேதியியல், ஆங்கிலம்' },
    seats: { en: '4 seats open', ta: '4 இடங்கள் உள்ளன' },
    seatsAvailable: true,
  },
];

export const TEACHERS_DATA: TeacherProfile[] = [
  {
    id: 'sundararajan',
    name: { en: 'Prof. K. Sundararajan', ta: 'பேரா. க. சுந்தரராஜன்' },
    role: { en: 'Senior Mathematics Mentor', ta: 'மூத்த கணிதப் பேராசிரியர்' },
    qualification: 'M.Sc., B.Ed.',
    experience: { en: '18 yrs experience', ta: '18 ஆண்டு அனுபவம்' },
    classes: { en: 'Classes 9–12', ta: 'வகுப்பு 9–12' },
    bio: {
      en: 'Guided 31 centum scorers in Class 10 & 12 board Mathematics through visual proof methods and daily practice sheets.',
      ta: '10 மற்றும் 12-ஆம் வகுப்பு பொதுத்தேர்வுக் கணிதத்தில் 31 மாணவர்கள் 100/100 மதிப்பெண் பெற வழிகாட்டியவர்.',
    },
    image: '/src/assets/images/teacher_sundararajan_1795457400339.jpg',
    initials: 'KS',
  },
  {
    id: 'kavitha',
    name: { en: 'Dr. Kavitha Balaji', ta: 'முனைவர் கவிதா பாலாஜி' },
    role: { en: 'Science & Chemistry Head', ta: 'அறிவியல் & வேதியியல் துறைத் தலைவர்' },
    qualification: 'Ph.D., M.Sc.',
    experience: { en: '14 yrs experience', ta: '14 ஆண்டு அனுபவம்' },
    classes: { en: 'Classes 8–12', ta: 'வகுப்பு 8–12' },
    bio: {
      en: 'Specialises in organic reaction logic and structured NCERT/Samacheer answer keys that eliminate memory overload.',
      ta: 'கரிம வேதியியல் வினைகளையும் அறிவியல் கருத்துகளையும் மனப்பாடம் இன்றிப் புரிந்துகொள்ளும் வகையில் கற்பிப்பவர்.',
    },
    image: '/src/assets/images/teacher_kavitha_1795457400457.jpg',
    initials: 'KB',
  },
  {
    id: 'meenakshi',
    name: { en: 'Mrs. Meenakshi Ramesh', ta: 'திருமதி மீனாட்சி ரமேஷ்' },
    role: { en: 'English & Writing Faculty', ta: 'ஆங்கிலப் பாட ஆசிரியர்' },
    qualification: 'M.A., M.Phil.',
    experience: { en: '15 yrs experience', ta: '15 ஆண்டு அனுபவம்' },
    classes: { en: 'Classes 8–12', ta: 'வகுப்பு 8–12' },
    bio: {
      en: 'Trains students to write clear, error-free prose, comprehension, and formal letters with individual script correction.',
      ta: 'மாணவர்களின் கட்டுரை, கடிதம் மற்றும் இலக்கணத் தாள்களைத் தனிப்பட்ட முறையில் திருத்தி ஆங்கிலத் திறனை வளர்ப்பவர்.',
    },
    image: '/src/assets/images/teacher_meenakshi_1795457401970.jpg',
    initials: 'MR',
  },
  {
    id: 'aravindhan',
    name: { en: 'Mr. S. Aravindhan', ta: 'திரு ச. அரவிந்தன்' },
    role: { en: 'Physics & Applied Science', ta: 'இயற்பியல் ஆசிரியர்' },
    qualification: 'M.Sc., B.Ed.',
    experience: { en: '11 yrs experience', ta: '11 ஆண்டு அனுபவம்' },
    classes: { en: 'Classes 10–12', ta: 'வகுப்பு 10–12' },
    bio: {
      en: 'Breaks down mechanics, electrostatics, and optics numericals using real-life classroom demonstrations.',
      ta: 'இயற்பியல் கணக்குகளையும் விதிகளையும் அன்றாட வாழ்க்கை உதாரணங்களுடன் எளிமையாக விளக்குபவர்.',
    },
    image: '/src/assets/images/teacher_aravindhan_1795457401299.jpg',
    initials: 'SA',
  },
];

export const TOPPERS_DATA: TopperResult[] = [
  {
    id: 'r1',
    studentName: { en: 'Ananya Krishnan', ta: 'அனன்யா கிருஷ்ணன்' },
    classBoard: { en: 'Class 10 · TN State Board', ta: 'வகுப்பு 10 · மாநிலப் பாடத்திட்டம்' },
    score: '494',
    outOf: '500',
    centumNote: { en: '100/100 in Maths & Science', ta: 'கணிதம் & அறிவியலில் 100/100' },
    year: '2026',
  },
  {
    id: 'r2',
    studentName: { en: 'Karthik Subramanian', ta: 'கார்த்திக் சுப்பிரமணியன்' },
    classBoard: { en: 'Class 12 · CBSE', ta: 'வகுப்பு 12 · CBSE' },
    score: '491',
    outOf: '500',
    centumNote: { en: '100/100 in Maths · 99 in Physics', ta: 'கணிதத்தில் 100/100 · இயற்பியல் 99' },
    year: '2026',
  },
  {
    id: 'r3',
    studentName: { en: 'Divya Bharathi R.', ta: 'திவ்ய பாரதி இரா.' },
    classBoard: { en: 'Class 10 · CBSE', ta: 'வகுப்பு 10 · CBSE' },
    score: '488',
    outOf: '500',
    centumNote: { en: '99 in English · 98 in Maths', ta: 'ஆங்கிலத்தில் 99 · கணிதத்தில் 98' },
    year: '2025',
  },
  {
    id: 'r4',
    studentName: { en: 'Harishankar V.', ta: 'ஹரிசங்கர் வெ.' },
    classBoard: { en: 'Class 12 · TN State Board', ta: 'வகுப்பு 12 · மாநிலப் பாடத்திட்டம்' },
    score: '586',
    outOf: '600',
    centumNote: { en: '100/100 in Chemistry · 99 in Maths', ta: 'வேதியியலில் 100/100 · கணிதம் 99' },
    year: '2025',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't1',
    quote: {
      en: 'My daughter struggled with Class 9 Geometry and scored 68% in Term 1. After joining Prof. Sundararajan’s small batch, her weekly test habit lifted her Class 10 board Maths score to 100/100.',
      ta: '9-ஆம் வகுப்பு வடிவியலில் என் மகள் 68% மட்டுமே எடுத்திருந்தாள். பேரா. சுந்தரராஜன் வகுப்பில் சேர்ந்த பிறகு, வாராந்திரத் தேர்வுப் பயிற்சியால் 10-ஆம் வகுப்புப் பொதுத்தேர்வுக் கணிதத்தில் 100/100 மதிப்பெண் பெற்றாள்.',
    },
    author: { en: 'Lakshmi Narayanan', ta: 'லட்சுமி நாராயணன்' },
    context: {
      en: 'Parent of Ananya K. · Anna Nagar, Chennai',
      ta: 'அனன்யாவின் பெற்றோர் · அண்ணா நகர், சென்னை',
    },
  },
  {
    id: 't2',
    quote: {
      en: 'Unlike crowded coaching halls, Vetri Academy checks every student’s notebook after class. My son gained confidence in Class 12 Physics numericals and improved from 72 to 97 in board exams.',
      ta: 'நெரிசலான பயிற்சி மையங்களைப் போலல்லாமல், இங்கு ஒவ்வொரு மாணவரின் நோட்டுப் புத்தகமும் தினமும் சரிபார்க்கப்படுகிறது. என் மகன் 12-ஆம் வகுப்பு இயற்பியலில் 72-இலிருந்து 97 மதிப்பெண்களாக உயர்ந்தான்.',
    },
    author: { en: 'Senthil Kumar M.', ta: 'செந்தில் குமார் மு.' },
    context: {
      en: 'Parent of Naveen S. · Mogappair, Chennai',
      ta: 'நவீனின் பெற்றோர் · முகப்பேர், சென்னை',
    },
  },
];

export const FEES_DATA: FeeRow[] = [
  {
    classLevel: '8',
    className: { en: 'Class 8', ta: 'வகுப்பு 8' },
    boardCoverage: { en: 'CBSE / State Board', ta: 'CBSE / மாநிலப் பாடத்திட்டம்' },
    subjectsIncluded: { en: 'Maths, Science, English', ta: 'கணிதம், அறிவியல், ஆங்கிலம்' },
    singleSubjectMonthly: 1500,
    comboMonthly: 3800,
    singleSubjectTerm: 5400,
    comboTerm: 13680,
  },
  {
    classLevel: '9',
    className: { en: 'Class 9', ta: 'வகுப்பு 9' },
    boardCoverage: { en: 'CBSE / State Board', ta: 'CBSE / மாநிலப் பாடத்திட்டம்' },
    subjectsIncluded: { en: 'Maths, Science, English', ta: 'கணிதம், அறிவியல், ஆங்கிலம்' },
    singleSubjectMonthly: 1800,
    comboMonthly: 4500,
    singleSubjectTerm: 6480,
    comboTerm: 16200,
  },
  {
    classLevel: '10',
    className: { en: 'Class 10 (Board)', ta: 'வகுப்பு 10 (பொதுத்தேர்வு)' },
    boardCoverage: { en: 'CBSE / State Board', ta: 'CBSE / மாநிலப் பாடத்திட்டம்' },
    subjectsIncluded: { en: 'Maths, Science, English', ta: 'கணிதம், அறிவியல், ஆங்கிலம்' },
    singleSubjectMonthly: 2200,
    comboMonthly: 5500,
    singleSubjectTerm: 7920,
    comboTerm: 19800,
  },
  {
    classLevel: '11',
    className: { en: 'Class 11', ta: 'வகுப்பு 11' },
    boardCoverage: { en: 'CBSE / State Board', ta: 'CBSE / மாநிலப் பாடத்திட்டம்' },
    subjectsIncluded: { en: 'Maths, Physics, Chemistry, English', ta: 'கணிதம், இயற்பியல், வேதியியல், ஆங்கிலம்' },
    singleSubjectMonthly: 2500,
    comboMonthly: 6400,
    singleSubjectTerm: 9000,
    comboTerm: 23040,
  },
  {
    classLevel: '12',
    className: { en: 'Class 12 (Board)', ta: 'வகுப்பு 12 (பொதுத்தேர்வு)' },
    boardCoverage: { en: 'CBSE / State Board', ta: 'CBSE / மாநிலப் பாடத்திட்டம்' },
    subjectsIncluded: { en: 'Maths, Physics, Chemistry, English', ta: 'கணிதம், இயற்பியல், வேதியியல், ஆங்கிலம்' },
    singleSubjectMonthly: 2800,
    comboMonthly: 7200,
    singleSubjectTerm: 10080,
    comboTerm: 25920,
  },
];
