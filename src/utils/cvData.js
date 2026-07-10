// Single content source for the CV. Rendered by CVPage (web), printed to PDF by
// scripts/generate-cv-pdf.mjs, and emitted as schema.org JSON-LD for machine readers.
// Deliberately contains no email address — the web version routes contact through
// the contact modal; the PDF generator injects an email at generation time.

export const cvData = {
  name: 'Tyler Hagan',
  title: 'Product Designer & Design Engineer',
  location: 'Berlin, Germany',
  website: 'https://tylerhagan.co.uk',
  linkedin: 'https://www.linkedin.com/in/tylerhagan/',

  profile:
    'Senior end-to-end product designer working at the intersection of design and engineering, taking ideas from concept to working product without the usual hand-off loss. 15+ years across design and front-end development, the last eight in the energy space designing every stage of the residential solar journey: selling, installing, monitoring, and long-term ownership. I operate independently across product, brand, digital and print, with the technical depth to prototype and build, not just specify.',

  experience: [
    {
      company: 'Enpal Energy',
      role: 'Designer (in practice, Senior Product Design Engineer)',
      start: 'Mar 2026',
      end: 'Present',
      location: 'Berlin',
      bullets: [
        'Initiated, designed and built the Enpal design family end to end: Enpal DS as the shared parent layer with NEMO (consumer mobile), VERSO (marketing web) and FOLIO (dense software UI). 170+ tokens and 25+ components, light and dark throughout, versioned releases with a changelog.',
        'Built the delivery layer myself: a token pipeline generating CSS, JSON and Figma Variables from one source, a React/shadcn registry for the product surfaces, and an Ant Design theme so established teams across the wider org adopt the family without retooling. Versioned npm package distribution now in progress.',
        'Wrote the documentation AI-first: every system ships a markdown brief that drops straight into AI coding tools, so an assistant builds to the system’s rules without constant prompting.',
        'Designing across three product surfaces in parallel on those systems: the customer portal, the consumer marketing website, and the Hyperion back office for the VPP energy space.'
      ]
    },
    {
      company: '1KOMMA5°',
      role: 'Senior Product Designer',
      start: 'May 2024',
      end: 'Jan 2025',
      location: 'Berlin',
      bullets: [
        'Led design of a multi-national B2B/B2C sales tool from on-the-ground field research (Germany, Sweden) to shipped MVP: 72% faster offer creation, 42% higher sales conversion, 98% fewer data-input errors.',
        'Enhanced the design system and internationalisation workflow (Lokalise) across design and engineering teams, enabling non-technical multi-language content updates.',
        'Conducted 1-on-1 sales-call shadowing, workshops, and surveys with agents and leadership to ground decisions in evidence.'
      ]
    },
    {
      company: 'EIGENSONNE',
      role: 'Senior Product Designer',
      start: 'Jan 2020',
      end: 'Jan 2024',
      location: 'Berlin',
      bullets: [
        'Solo product designer through rapid scale-up, with an end-to-end remit across research, design, and front-end.',
        'Designed and prototyped a replacement field service app, raising critical data entry from 38% to 97%; supported development directly with Storybook components and design tokens.',
        'Designed the proprietary customer monitoring app and its modular design system, released to strong tester preference over competitor and manufacturer apps.'
      ]
    },
    {
      company: 'EIGENSONNE',
      role: 'Senior UX/UI Engineer',
      start: 'Dec 2017',
      end: 'Jan 2020',
      location: 'Berlin',
      bullets: [
        'Creative lead, designer, front-end developer, and website owner while growing the company and brand: a start-up minded, all-hands-on-deck role.',
        'Drove conversion rate optimisation for high-cost lead generation; built the design system and brand guidelines.'
      ]
    },
    {
      company: 'Sygns',
      role: 'Creative Lead / Senior Web Developer',
      start: 'May 2017',
      end: 'Nov 2017',
      location: 'Berlin',
      bullets: [
        'Led and drove the update of the multi-language company website and neon sign configurator.'
      ]
    },
    {
      company: 'House of Kaizen',
      role: 'Lead Developer',
      start: 'Feb 2015',
      end: 'Nov 2016',
      location: 'London',
      bullets: [
        'Led development at a multi-discipline digital agency and CRO consultancy, managing three developers, for brands including Nike, Coca-Cola, News UK, News Corp Australia, and The Wall Street Journal.',
        'Helped win the Intel Security contract: built and ran the European McAfee online store in-house, continuously optimised with lean UX methods.'
      ]
    }
  ],

  education: [
    { qualification: 'BSc Web Development', institution: 'University of Greenwich', period: '2007–2010' },
    { qualification: 'BND Graphic Design', institution: 'Amersham & Wycombe College', period: '2005–2007' }
  ],

  certifications: [
    { name: 'Product Designer, Professional Certification', issuer: 'Uxcel', year: '2024' },
    {
      name: 'Continued learning across 28 course certificates, incl. UX Design Leadership, Design Mentorship (ADPList), Workshop Facilitation, Design Accessibility & AI in UX/UI Design',
      issuer: 'Uxcel',
      year: '2024'
    },
    { name: 'Developer & Platform Certification', issuer: 'Optimizely', year: '2016' }
  ],

  skills: [
    'Design Systems',
    'Product Thinking',
    'User Research',
    'Design Engineering',
    'Prototyping',
    'Conversion Rate Optimisation',
    'Human-Centered AI Interfaces',
    'Information Architecture',
    'A/B Testing',
    'Quantitative Analysis',
    'Front-End Development',
    'Design Strategy'
  ],

  tools: [
    'Figma (systems, variables, libraries)',
    'Design tokens (CSS/JSON pipelines)',
    'Storybook',
    'Token Studio',
    'React / React Native',
    'shadcn',
    'Ant Design',
    'HTML/CSS',
    'JavaScript / TypeScript',
    'Claude, Cursor, Codex, ChatGPT, Midjourney',
    'Clarity, Hotjar, FullStory',
    'Optimizely, VWO',
    'Git / GitHub'
  ],

  languages: [
    { language: 'English', level: 'Native' },
    { language: 'German', level: 'Limited working proficiency' }
  ],

  praise: {
    quote:
      'Tyler is one of those rare unicorns bridging Software Engineering skills and UX/UI skills. Tyler has a diverse skillset, and has been the solo UX person in a fast-growing startup, an incredibly challenging position to hold that shows resilience and adaptability.',
    attribution: 'Petra Kühnle, Senior Product Designer (worked together at EIGENSONNE)'
  }
};

// schema.org JSON-LD for AI/ATS readers — assembled from the same data.
export const cvJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: cvData.name,
  jobTitle: cvData.title,
  address: { '@type': 'PostalAddress', addressLocality: 'Berlin', addressCountry: 'DE' },
  url: cvData.website,
  sameAs: [cvData.linkedin],
  description: cvData.profile,
  worksFor: { '@type': 'Organization', name: cvData.experience[0].company },
  alumniOf: cvData.education.map((e) => ({ '@type': 'EducationalOrganization', name: e.institution })),
  knowsAbout: cvData.skills,
  knowsLanguage: cvData.languages.map((l) => l.language),
  hasOccupation: cvData.experience.map((job) => ({
    '@type': 'OrganizationRole',
    roleName: job.role,
    startDate: job.start,
    endDate: job.end === 'Present' ? undefined : job.end,
    worksFor: { '@type': 'Organization', name: job.company }
  }))
});
