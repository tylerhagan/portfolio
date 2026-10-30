// Single content source for the CV. Rendered by CVPage (web), printed to PDF by
// scripts/generate-cv-pdf.mjs, and emitted as schema.org JSON-LD for machine readers.
// Deliberately contains no email address: the web version routes contact through
// the contact modal; the PDF generator injects an email at generation time.

export const cvData = {
  name: 'Tyler Hagan',
  title: 'Senior Product Designer',
  location: 'Berlin, Germany',
  website: 'https://tylerhagan.co.uk',
  linkedin: 'https://www.linkedin.com/in/tylerhagan/',

  profile:
    'Senior product designer who builds what he designs. I take high-trust, high-ticket consumer and sales products from research to shipped product, with the engineering depth to prototype and build them myself. My work has lifted sales conversion by 42%, cut team ship times by 20% and raised critical field data entry from 38% to 97%. I’m most effective in small, fast-moving teams, owning product, brand and design systems end to end.',

  experience: [
    {
      company: 'Enpal Energy',
      role: 'Founding Designer / Design Engineer',
      start: 'Mar 2026',
      end: 'Sep 2026',
      location: 'Berlin',
      summary:
        'Founding designer of Enpal Energy, a new venture within the Enpal group. The venture was merged back into the parent company after its ways of working were adopted group-wide.',
      bullets: [
        'Created the Enpal design family from scratch: a shared core system with three products built on it for consumer mobile, marketing web and dense software UI, all in light and dark modes and released in versions.',
        'Let multiple product teams ship on brand from day one, which sped up delivery and removed the need for custom UI on each project.',
        'Built the delivery tooling myself, so that one source generates code and Figma assets for every team, including established teams on other stacks, with no retooling.',
        'Designed the customer portal, the marketing website and a back-office tool for virtual power plants (VPPs) in parallel, all on the new systems.'
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
    { qualification: 'BSc Web Development', institution: 'University of Greenwich' },
    { qualification: 'BND Graphic Design', institution: 'Amersham & Wycombe College' }
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
    'Human-Centred AI Interfaces',
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
    'AI-assisted design and coding workflows',
    'Clarity, Hotjar, FullStory',
    'Optimizely, VWO',
    'Git / GitHub'
  ],

  languages: [
    { language: 'English', level: 'Native' },
    { language: 'German', level: 'B2' }
  ],

  praise: {
    quote:
      'Tyler is one of those rare unicorns bridging Software Engineering skills and UX/UI skills. Tyler has a diverse skillset, and has been the solo UX person in a fast-growing startup, an incredibly challenging position to hold that shows resilience and adaptability.',
    attribution: 'Petra Kühnle, Senior Product Designer (worked together at EIGENSONNE)'
  }
};

// schema.org JSON-LD for AI/ATS readers, assembled from the same data.
export const cvJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: cvData.name,
  jobTitle: cvData.title,
  address: { '@type': 'PostalAddress', addressLocality: 'Berlin', addressCountry: 'DE' },
  url: cvData.website,
  sameAs: [cvData.linkedin],
  description: cvData.profile,
  // Only claim a current employer while the latest role is ongoing
  ...(cvData.experience[0].end === 'Present' && {
    worksFor: { '@type': 'Organization', name: cvData.experience[0].company }
  }),
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
