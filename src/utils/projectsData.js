export const projectsData = {
  // ——— Enpal work, Mar–Sep 2026 (locked: full case study is encrypted) ———
  'design-family': {
    // Headline figure for the share card (scripts/generate-og-card.mjs); only facts stated in the case
    headline: '170+ tokens · 25+ components · 4 systems',
    locked: true,
    encPath: '/data/design-family.enc.json',
    title: 'Enpal Design Family',
    subtitle: 'One foundation, four systems: Enpal DS, NEMO, VERSO & FOLIO',
    // Card copy on the home index, and the meta description for /work/<id>
    summary: 'One shared foundation across four systems: Enpal DS, NEMO, VERSO, and FOLIO. 170+ tokens and 25+ components serving mobile, web, portal, and internal software.',
    year: '2026',
    status: 'Shipped · in use at Enpal',
    role: 'Senior Product Designer / Engineer',
    timeline: 'Mar – Sep 2026',
    tools: ['Figma', 'Design Tokens', 'React', 'shadcn', 'Ant Design'],
    company: 'Enpal',
    platform: 'Web, mobile & internal tools',
    scope: 'System design, token pipeline, documentation',
    heroImage: { src: '/img/design-family/ds-docs-hero-light.webp', alt: 'Enpal design family documentation site' },
    // Live docs site exists (folio-ee.vercel.app), deliberately not linked publicly yet.
    // Full case study lives in content/design-family.content.json (gitignored), encrypted
    // into public/data/design-family.enc.json via scripts/encrypt-case-study.mjs.
    brief: `Enpal's surfaces run from consumer marketing to dense internal software: one brand, very different contexts. New products needed a system from day one, and design decisions needed to land in code without loss. The design family answers both: Enpal DS as the shared parent layer (colour ramps, typography, spacing, radii), with NEMO (mobile), VERSO (consumer marketing web) and FOLIO (dense, task-focused software UI) built on top. I initiated it, designed it, and built the delivery end to end.`,
    highlights: [
      '170+ design tokens across primitive and semantic layers, generated as CSS, JSON and Figma Variables from one source',
      '25+ documented components and 11 product patterns, light and dark throughout',
      'A React/shadcn registry and an Ant Design theme generated from the same tokens',
      'AI-first documentation: each system ships a markdown brief that drops straight into AI coding workflows',
      'Versioned releases with a changelog, plus documentation paths for designers, developers and product teams'
    ]
  },
  'enpal-product-work': {
    headline: '3 product surfaces · 1 design foundation',
    title: 'Portal, Web & Back Office',
    subtitle: "Three Enpal Energy surfaces, one design foundation",
    summary: 'Three Enpal Energy surfaces on one design foundation (customer portal, consumer marketing web, and the Hyperion back office), from high-fidelity prototypes through to a production-ready TypeScript scaffold.',
    year: '2026',
    status: 'Shipped · in use at Enpal',
    role: 'Senior Product Designer / Engineer',
    timeline: 'Mar – Sep 2026',
    tools: ['Figma', 'FOLIO DS', 'VERSO DS', 'React', 'TypeScript', 'shadcn/ui'],
    company: 'Enpal',
    platform: 'Web',
    scope: 'UX/UI, prototyping, TypeScript scaffold',
    heroImage: { src: '/img/enpal-product-work/portal-proto-light.webp', alt: 'Customer portal overview built on FOLIO' },
    brief: `Alongside building the Enpal design family, I designed and prototyped across three of Enpal Energy's product surfaces: the customer portal, the consumer marketing web, and Hyperion, the internal back office. All three sit on the family's systems, so most of the work wasn't starting from scratch. It was composing one shared foundation into three fairly different contexts.`,
    sections: [
      {
        title: 'One foundation, three contexts',
        paragraphs: [
          `The three surfaces sit at very different points on the same spectrum: a first-time visitor deciding whether to switch, a returning customer managing their energy, and an operations team working through hundreds of accounts. Build them separately and they drift apart. Build them on one system and they stay coherent, and they come together a lot faster.`,
          `The foundation is the Enpal design family: a shared parent layer (Enpal DS) with purpose-built sub-systems on top. VERSO handles consumer web, FOLIO handles dense product and internal UI. Colour, type, spacing and motion all come from one source, and each sub-system decides what those primitives mean in its own context. A handful of rules keep it honest. The big ones: brand yellow is reserved for conversion, ink leads in work contexts, and paper carries most of every screen.`,
          `Because the system ships as design tokens, a React/shadcn registry, an Ant Design theme and Figma variables, all generated from a single source, each surface below just pulls it in rather than rebuilding it. The full deep-dive on the system is a separate case.`
        ],
        images: [
          { src: '/img/design-family/ds-docs-hero-light.webp', caption: 'The shared foundation: Enpal.design docs (light)' },
          { src: '/img/design-family/ds-docs-hero-dark.webp', caption: 'The same system, dark mode' }
        ]
      },
      {
        title: 'Consumer web: the marketing site (VERSO)',
        paragraphs: [
          `The brief here was brand and tone: set a confident north star for Enpal Energy's consumer web, not win a conversion test. So I designed a landing page in the VERSO language, all expressive display type, a real-photo hero, pill buttons and borderless cards on a deep ink surface warmed by the family's aurora wash.`,
          `The tariff calculator is the one conversion moment on the page, so it's the thing that earns the reserved brand yellow, and everything else stays quiet around it. The trust signals (independent reviews, households served, certification) sit right under the headline.`,
          `It matters to the system because it proved the shared primitives could stretch from a calm product dashboard all the way to an expressive consumer page, without either one feeling like a different brand. The jump from landing page into the portal is a deliberate VERSO-to-FOLIO handoff.`
        ],
        images: [
          { src: '/img/enpal-product-work/marketing-landing-hero.webp', caption: 'Consumer landing (VERSO): real-photo hero, with the tariff calculator as the one conversion moment' }
        ]
      },
      {
        title: 'The customer portal (FOLIO)',
        paragraphs: [
          `The portal is where a customer manages their energy: consumption, meter readings (Zählerstand), tariff and billing. It's a returning-user surface, so it follows FOLIO's calm, dense conventions (ink primaries, status pills, one restrained upsell), in German, with full light and dark support.`,
          `The overview pulls together the next payment, the last meter reading, a live tariff timeline showing the cheaper and standard windows, and a savings breakdown against the local basic supplier. Contextual nudges, like a cheaper window tonight or a cold weekend ahead, only show up when they're actually useful.`,
          `I took it from a high-fidelity interactive prototype through to a production-ready TypeScript scaffold: React, Vite and React Router, consuming FOLIO as a shadcn registry with no vendored CSS, plus a typed API contract with mock fixtures. The idea was that backend and frontend could build the first version without having to re-argue routes, contracts or design-system bindings.`
        ],
        images: [
          { src: '/img/enpal-product-work/portal-proto-light.webp', caption: 'Customer portal overview (FOLIO), light' },
          { src: '/img/enpal-product-work/portal-proto-dark.webp', caption: 'The same overview, dark mode' },
          { src: '/img/enpal-product-work/portal-mvp-light.webp', caption: 'Sign-in from the production TypeScript build' }
        ]
      },
      {
        title: 'The back office: Hyperion',
        paragraphs: [
          `Hyperion is the operational counterpart to the portal, a focused customer-360 tool for the teams who actually run the energy business. It uses the exact same FOLIO tokens and components as the portal, with a thin back-office layer on top, which is probably the clearest proof that the foundation carries all the way from a customer-facing product to dense internal software.`,
          `The customer view uses a products-as-context pattern: pick a product or contract on the left and the Registration, Contract, Payment and Communications tabs update on the right, right down to the regulated market identifiers (MaLo, MELO, DSO, TSO). Status pills are the shared language across customers, contracts and products, a two-tier navigation keeps top-level taxonomy and per-section context apart, and a ⌘K command palette is the global launcher. Everything shown here runs on fictional fixture data.`
        ],
        images: [
          { src: '/img/enpal-product-work/hyperion-detail-light.webp', caption: 'Hyperion: customer-360 detail (light)' },
          { src: '/img/enpal-product-work/hyperion-detail-dark.webp', caption: 'Customer-360 detail, dark mode' },
          { src: '/img/enpal-product-work/hyperion-dashboard-light.webp', caption: 'Operations dashboard: active customers and onboarding funnel' },
          { src: '/img/enpal-product-work/hyperion-cmdk-light.webp', caption: 'The ⌘K command palette: search, jump and run actions' }
        ]
      },
      {
        title: 'Design-engineering craft',
        paragraphs: [
          `A few decisions that don't really show up in a screenshot but made the pace possible:`
        ],
        bullets: [
          `Tokens are the single source of truth. The CSS, the shadcn registry, the Ant theme and the Figma variables are all generated from one token file, so a change propagates everywhere instead of forking.`,
          `Products consume the system, they don't copy it: a shadcn registry or a single stylesheet link, nothing vendored.`,
          `Theming with no flash. A shared storage key and a pre-paint script set the theme before the CSS parses, and the View Transitions API handles the cross-fade. Light and dark are equal citizens.`,
          `Prototype to typed scaffold as a deliberate handoff: a single-file interactive demo to agree on the feel, then a strict-TypeScript scaffold that locks down routes, contracts and design-system bindings.`,
          `Governance as design: adoption is informed or requested, never forced, with a written propagation order from system to portal to web.`
        ]
      },
      {
        title: 'Where it stands',
        paragraphs: [
          `One foundation now carries three surfaces: a consumer landing page, a customer portal (a prototype plus a production-ready TypeScript scaffold), and an internal customer-360 tool, all speaking the same visual language, in light and dark.`,
          `All three are now in use at Enpal. The story here is the design and the leverage the system gives rather than headline metrics. The full system deep-dive lives in the Enpal Design Family case.`
        ]
      }
    ]
  },

  'offer-tool': {
    headline: '−72% offer creation time · +42% conversion',
    title: 'Offer Tool',
    subtitle: 'Sales enablement software for multi-national teams',
    summary: 'Multi-national B2B/B2C sales tool taken from on-the-ground field research to shipped MVP. Cut offer creation time by 72% and lifted sales conversion 42%.',
    year: '2025',
    status: 'Private Active Use',
    role: 'Senior Product Designer',
    timeline: 'May 2024 - Jan 2025',
    tools: ['Figma', 'Storybook', 'React', 'Lokalise'],
    company: '1KOMMA5°',
    platform: 'Web · tablet & screen-share',
    scope: 'Field research, UX/UI, design system, build support',
    outcomeTitle: 'Cutting offer creation time by 72% for a multi-market solar sales team',
    heroImage: { src: '/img/offer-tool/ot-concept.webp', alt: 'System Builder: choosing a pre-configured energy concept' },
    brief: `Our objective was to design a fit-for-purpose sales tool to enable 1KOMMA5°'s international teams to sell their solar and energy solutions more efficiently, reliably, and intuitively. Utilising a consistent design language, implementing a design system.`,
    keyGoals: [
      'Reducing cognitive load and manual input errors',
      'Leveraging the newly integrated ZohoCRM back-office system',
      'Streamlining the end-to-end customer engagement and offer creation process'
    ],
    discovery: {
      title: 'Discovery & Definition',
      content: `Our research process began on the ground with the local teams in Berlin and Hamburg, followed by a trip to Sweden, the pilot launch market.`,
      research: [
        '1-on-1 shadowing during both remote and on-site sales calls',
        'Workshops, surveys, and feedback sessions with sales agents and leadership',
        'In-depth mapping of existing workflows using disparate Google Sheets, Excel, and presentation decks'
      ],
      insights: [
        'Difficulty building trust for such a high-value investment',
        'Lack of brand consistency and trust-building materials',
        'Frustration with disjointed tools and complexity when configuring custom energy systems'
      ]
    },
    solution: {
      title: 'Solution',
      intro: 'We designed a sales tool optimised for use in video calls (screen sharing) and on tablets by field and showroom agents.',
      features: [
        {
          title: 'Customer Portal',
          description: 'Enables quick creation and management of customer profiles, integrated directly with ZohoCRM.',
          images: [
            '/img/offer-tool/ot-customerlist.png',
            '/img/offer-tool/ot-customer-add.png'
          ]
        },
        {
          title: 'Pitch Section',
          description: 'Sales reps are supported with structured, persuasive content, tailored by market. Utilising 3D assets, and slick animations. I worked closely with the marketing team to ensure messaging aligned with brand standards and customer expectations. Utilising fundamental principles like progressive disclosure to take the user on a journey with a convincing story line. Click the images below to see the expanded full views.',
          images: [
            '/img/offer-tool/ot-pitch.webp',
            '/img/offer-tool/heartbeat-breakdown-pitch.webp',
            '/img/offer-tool/ot-breakdown.png'
          ]
        },
        {
          title: 'System Builder',
          description: 'A visual, interactive module resembling a web store. Agents select from pre-configured templates (customised per country) to speed up offer creation. Live values (e.g. production, consumption, ROI) are dynamically calculated based on customer data.',
          images: [
            '/img/offer-tool/ot-concept.webp',
            '/img/offer-tool/ot-multi-site-offer.png',
            '/img/offer-tool/ot-configuration.webp',
            '/img/offer-tool/ot-summary.png'
          ]
        },
        {
          title: 'Cockpit and Automations',
          description: 'Make everything available from the system builder allowed us to keep the user in the flow, reducing interruptions to sales. A robust configurable rules system; alerting and warning or preventing sales users from creating packages or systems that do not work or are not possible.',
          images: ['/img/offer-tool/sidebars.webp']
        }
      ]
    },
    // Each decision is traced to a research insight or goal stated elsewhere in this case
    decisions: [
      {
        title: 'Built for screen-share and tablet, not the desk',
        why: 'Agents sell on video calls and face to face in showrooms and in the field, so every screen had to read well when shared and work by touch.'
      },
      {
        title: 'Country templates instead of a blank configurator',
        why: 'Configuring custom energy systems was one of the biggest frustrations in research. Pre-configured packages per market let agents start from a sensible offer and adjust from there.'
      },
      {
        title: 'Stop impossible systems at configuration time',
        why: 'Reducing manual input errors was a core goal, so a configurable rules system warns agents, or stops them, before they build a package that cannot work.'
      },
      {
        title: 'A story-led pitch, built with marketing',
        why: 'Agents struggled to build trust for a high-value purchase and lacked consistent materials. The pitch uses progressive disclosure and on-brand 3D assets, tailored by market.'
      },
      {
        title: 'Localisation in the pipeline from day one',
        why: 'Sweden was the pilot market, so multi-language content was needed from the start. Lokalise let non-technical teams update strings without engineering.'
      }
    ],
    development: `Once the prototype was validated, I worked closely with our engineering team to plan and develop an MVP. We maintained daily stand-ups and incremental usability tests. Lokalise was integrated early on to handle multi-language content, allowing non-technical team members to update strings without engineering overhead. Feedback from the Swedish team helped us refine the tool in real time, ensuring local needs were met ahead of rollout.`,
    results: {
      kpis: [
        { label: 'Offer Creation Time', value: '72%', suffix: 'reduction' },
        { label: 'Sales Conversion Rate', value: '42%', suffix: 'increase' },
        { label: 'Customer Decision Time', value: '33%', suffix: 'faster' },
        { label: 'Data Input Error Rate', value: '98%', suffix: 'reduction' }
      ],
      additionalWins: [
        'Reduced training time for new agents',
        'Increased sales team satisfaction',
        'Improved consistency and standardisation of offers across markets',
        'Marked improvements in NPS, CES, and churn rate'
      ]
    },
    aiUsage: [
      'Consolidation and summarisation of Survey data',
      'Automated language string replacements for ease of multi-language design'
    ]
  },
  
  'field-service': {
    headline: 'Critical data entry: 38% → 97%',
    title: 'Field Service App',
    subtitle: 'Mobile application for internal company use',
    summary: 'Complete reimagination of a field service app with custom design system, from research to deployment. Raised critical data entry from 38% to 97%.',
    year: '2023',
    status: 'Private Active Use',
    role: 'Senior Product Designer',
    timeline: 'March - October 2023',
    tools: ['Figma', 'Token Studio', 'Storybook', 'React Native'],
    company: 'EIGENSONNE',
    platform: 'iOS & Android',
    scope: 'Research, UX/UI, prototyping, design system',
    outcomeTitle: 'Raising critical field data entry from 38% to 97%',
    kpis: [{ label: 'Critical data entry', value: '97%', suffix: 'up from 38%' }],
    heroImage: { src: '/img/field-service/preview-one.webp', alt: 'Field service app: navigation and installation dashboard' },
    overview: {
      problem: 'After utilising an off-the-shelf product for a number of years, many UX roadblocks were being hit, with required input being missed and communication requiring extra tooling.',
      outcome: 'I designed and prototyped a new application to better serve the business needs. Increasing efficiency, reducing costs and improving necessary data entry from 38% to 97%. With improved onboarding, utilised gamification techniques and ease of use. I also supported the development with storybook components and design tokens.'
    },
    process: [
      { step: '01', title: 'Project Start', description: 'Initial brief and project start based on prioritised needs (OKR)' },
      { step: '02', title: 'Requirements', description: 'Business Needs & Goals. Who is it for? What personas? User flow? Project Scope? Reasonable existing comparisons?' },
      { step: '03', title: 'Research', description: 'Discovery phase through research and review. Internal existing product research. Stakeholder Interviews. User Interviews.' },
      { step: '04', title: 'User Flows', description: 'Initial draft flows. Whiteboard session with key stakeholders. Emphasise and prioritise primary flows. Testing and Presentation.' },
      { step: '05', title: 'Early Ideation', description: 'Information Architecture. Wireframes. Structure focus. Wireframe Reviews.' },
      { step: '06', title: 'Prototype & Design Share', description: 'Prototype created to illustrate full flows and make dev handoff easier. Key animations and interactions created. Stakeholder & Engineer Design Share and Reviews. Iteration if required.' },
      { step: '07', title: 'Usability Testing', description: 'User Tests & Feedback. Results Share. Iteration.' },
      { step: '08', title: 'Final Reviews & Iterations', description: 'Stakeholder & Engineering Sign off. Business Presentation (where required). Iteration.' },
      { step: '09', title: 'Deliverable Handoff', description: 'Implementation (Prototype commenting for questions). Consistent UX/PD & PM Communication. Post UX Review. Metrics established.' },
      { step: '10', title: 'Post Project', description: 'Beta build testing, reviews. Limited potential iteration. Future goals established.' }
    ],
    definition: 'With a heuristic review, a definition map on the project was critical to start the design process with all key issues and pain points in one place. This allows the team and I a holistic view from which to build the best approach.',
    definitionImage: '/img/field-service/journey-map.png',
    solution: {
      objectives: [
        'Operational Efficiency: The primary focus was on streamlining internal processes related to installation tracking, performance monitoring, and customer management to improve overall operational efficiency.',
        'Cost Reduction: By automating manual tasks and optimising workflows, the application aimed to reduce operational costs associated with inefficiencies and errors.',
        'Data Accuracy Improvement: Accurate data entry and management were crucial for ensuring the reliability of system performance metrics and customer information. The new application incorporated validation checks and guided flows to minimise errors and discrepancies.'
      ],
      images: [
        { src: '/img/field-service/preview-one.webp', caption: 'Navigation and Dashboard' },
        { src: '/img/field-service/preview-two.webp', caption: 'Installation Checks and Photo Upload' },
        { src: '/img/field-service/preview-three.webp', caption: 'Preparation Checklist and Reports' }
      ]
    },
    results: 'The design and prototyping of the application exemplify the transformative impact of strategic design interventions in addressing complex operational challenges. By focusing on efficiency, cost reduction, data accuracy, and gamification, we delivered a solution that not only met but exceeded expectations.'
  },
  
  'monitoring-app': {
    title: 'Monitoring & Customer App',
    subtitle: 'concept and live prototype',
    summary: 'EIGENAPP v2 answers first and shows data second: a live house that follows the real sun, a plan until tomorrow morning, and clear guidance on dynamic prices. A full design system and a working prototype on a simulated home.',
    year: '2026',
    status: 'v1 released Q1 2024 · v2 unreleased, live prototype',
    role: 'Senior Product Designer',
    timeline: 'v1 2022 · v2 started at EIGENSONNE',
    tools: ['Figma', 'Design Tokens', 'React Native', 'Web prototype'],
    company: 'EIGENSONNE',
    platform: 'iOS & Android (prototype on the web)',
    scope: 'Concept, UX, UI, design system, illustration, prototype',
    outcomeTitle: 'EIGENSONNE from data sheet to answer',
    demo: { url: 'https://eigenapp.tylerhagan.co.uk', label: 'live prototype' },
    heroImage: { src: '/img/eigen-app-v2/01-hero-home-day-night.webp', alt: 'EIGENAPP v2 Home at midday and in the evening' },
    brief: `EIGENAPP v1 showed homeowners plenty of data about their solar system but left them to work out what it meant. It answered "what are the numbers?" when people were asking "is everything fine, and do I need to do anything?" v2 answers first and shows data second: a live house that changes from day to night with the real sun, a plan for the hours until tomorrow morning, and clear guidance on dynamic electricity prices. It is delivered as a full design system and a working prototype driven by a simulated home energy system.`,
    sections: [
      {
        title: 'Context',
        paragraphs: [
          `I designed EIGENAPP v1 at EIGENSONNE in 2022. It was the company's first ongoing touchpoint after installation, and testers told us they could check their system at a glance and trusted it more than the hardware manufacturer's own app. It shipped in 2024.`,
          `It was also one of my first full mobile products, and it shows. Work on a v2 started at EIGENSONNE alongside the feature designs for later releases, but it never got to ship. In 2026 I picked it back up, finished the concept with everything I have learned since, and built a working prototype. The prototype runs on simulated data.`
        ]
      },
      {
        title: 'What v1 got right, and where it fell short',
        paragraphs: [
          `v1 had the right instincts: a calm teal brand, an animated energy flow where speed showed intensity, and visible system health to build trust. Looking at it again:`
        ],
        bullets: [
          `Everything had the same weight. The date, sunrise times and a large "System verbunden" tile took the best space. Connection status matters only when it breaks.`,
          `The flow diagram showed values but not direction. You could see 1,4 kW on a line, but not whether it was going into the battery or out of it.`,
          `The day chart plotted a percentage with a two-item legend for one line. It looked like analytics and explained very little.`,
          `Nothing looked ahead. Solar owners plan around the sun, the battery and, increasingly, hourly electricity prices. v1 only showed the present and the past.`
        ],
        images: [
          { src: '/img/eigen-app-v2/02-v1-before.webp', caption: 'v1 screens with three annotations' }
        ]
      },
      {
        title: 'Principles for v2',
        bullets: [
          `Answer first, data second. Every Home state opens with a plain sentence: what is happening, then what it means.`,
          `One colour, one meaning. Sun is yellow, battery green, house petrol, grid blue. The same everywhere, in light and dark. Price uses a single orange scale where lighter means cheaper.`,
          `Calm until it matters. Status is a small pill until something is wrong. Then it takes over, explains what happened in human terms and says what to do.`,
          `The app follows the sun. Light while the panels produce, dark after sunset at the customer's location.`
        ]
      },
      {
        title: 'Exploring the Home screen',
        paragraphs: [
          `I kept the structure and the content decisions fixed and explored the identity in three directions, each in a midday and an evening state:`
        ],
        bullets: [
          `A, calm: v1's structure, trimmed and refined. Clear and safe, but forgettable.`,
          `B, your roof: an illustrated version of the customer's own house. The most memorable, but expensive to make real for every roof, and weak at showing what comes next.`,
          `C, the sun's arc: the day as an arc with the night as a bar below the horizon. The best at showing the plan, but abstract on a grey winter day.`,
          `D combines them: A's structure, B's sense of a real home as a generic isometric house that's believable to build, and C's plan as a strip from now until tomorrow morning. The energy hub from v1, with the house at the centre and every connection able to flow either way, became the hero, drawn with depth instead of flat lines.`
        ],
        images: [
          { src: '/img/eigen-app-v2/03-exploration-a-to-d.webp', caption: 'Home explored in four directions, midday and evening' }
        ]
      },
      {
        title: 'Home: now and next',
        paragraphs: [
          `A headline, the isometric house, and "Bis morgen früh": a strip showing which source will power the home until sunrise, with expensive hours marked above it. Two next items underneath, and that's it. History moved to Verlauf, so Home fits on one screen.`
        ],
        images: [
          { src: '/img/eigen-app-v2/04-home-states.webp', caption: 'Home in four states: midday, evening, January and night' }
        ]
      },
      {
        title: 'A headline system, not a headline',
        paragraphs: [
          `The sentence at the top is generated from the system state by rules in priority order, from "no data" to "the sun covers everything". The design has six core states. Building the prototype showed two more were needed: the battery charging from cheap grid power at night, and importing at a middling price with the battery resting. Without them, parts of a winter day had no sentence at all. At most one number per sentence, no exclamation marks, never blaming the user, and in the product it holds for five minutes so it never flickers.`
        ],
        images: [
          { src: '/img/eigen-app-v2/05-headline-system.webp', caption: 'Headline system' }
        ]
      },
      {
        title: 'Live: the same house across the day',
        paragraphs: [
          `The Live screen fills the width with the scene. Morning, now and an evening forecast show the house changing: the sun moves, the panels dim, the windows light up and the battery switches from charging to powering the home. Line width shows power and moving dots show direction, which fixes the ambiguity of v1's diagram.`
        ],
        images: [
          { src: '/img/eigen-app-v2/06-live-across-the-day.webp', caption: 'Live screen at 8:00, now and 21:40' }
        ]
      },
      {
        title: 'Dynamic electricity prices',
        paragraphs: [
          `Hourly tariffs are becoming normal in Germany, and they are hard to read. The price screen shows today's hours on one scale, but leads with the plan: when the battery fills for free, which expensive hours it will cover, and when the cheapest grid hours are. A "good moment" card turns this into one action: run the washing machine now.`
        ],
        images: [
          { src: '/img/eigen-app-v2/07-price-history-savings.webp', caption: 'Dynamic price, day history and savings' }
        ]
      },
      {
        title: 'Calm when something breaks',
        paragraphs: [
          `When the data stops, v2 says so plainly, reassures first ("Du verlierst dadurch kein Geld"), then gives three concrete steps and a promise: if it lasts more than a day, we contact you and your installer.`
        ],
        images: [
          { src: '/img/eigen-app-v2/08-anlage-and-outage.webp', caption: 'System screen when all is well and when the connection drops' }
        ]
      },
      {
        title: 'Onboarding that already knows you',
        paragraphs: [
          `EIGENSONNE already had each customer's address, system size and battery from the sales process. Onboarding starts there: "Wir kennen dein Dach schon." The customer confirms instead of typing, connects the data logger, picks a tariff, and lands on a live reveal of their system working for the first time.`
        ],
        images: [
          { src: '/img/eigen-app-v2/09-onboarding.webp', caption: 'Onboarding in four steps' }
        ]
      },
      {
        title: 'Dein Sonnenjahr',
        paragraphs: [
          `A yearly recap designed to be shared: the year's production as a sunburst, and the number of evenings the battery covered completely. For an installer, a happy customer sharing their numbers is the best kind of referral.`
        ],
        images: [
          { src: '/img/eigen-app-v2/10-sonnenjahr.webp', caption: 'Dein Sonnenjahr story cards' }
        ]
      },
      {
        title: 'Widgets',
        paragraphs: [
          `The same language at a glance: the house with live flows, the battery's runtime until morning, a lock-screen strip and two notifications, one for expensive hours and one weekly recap. In the prototype they sit in a gallery driven by the same snapshot as the app, so they change as you scrub through the day.`
        ],
        images: [
          { src: '/img/eigen-app-v2/11-widgets.webp', caption: 'Widgets' }
        ]
      },
      {
        title: 'The system behind it',
        bullets: [
          `Foundations: tokens for both themes, a type scale with tabular figures, a 24 px icon set, and rules for the isometric illustration and motion, so the scene can be redrawn without breaking the product.`,
          `Accessibility: real controls throughout, 44 px touch targets, a reduced-motion mode where flows show direction with arrows instead of moving dots, and text contrast checked in both themes by automated tests. The main screens score 100 in a Lighthouse accessibility audit.`,
          `A working prototype: one simulated energy model drives every screen. Scrub through a day and the headline, theme, flows and plan all update together.`,
          `Two scenarios and a few switches: a sunny May day and a cloudy January day, a dynamic tariff on or off, and an outage toggle that changes Home, the status pill and the system screen until "Verbindung prüfen" clears it. The demo runs in German and English and on phones.`,
          `Built to be trusted: the energy model is plain TypeScript with unit tests for the energy balance, the battery limits and the headline rules, because those are the parts most likely to break quietly. It is a static site with self-hosted fonts, no backend, no accounts and no tracking, and all data is simulated.`
        ],
        images: [
          { src: '/img/eigen-app-v2/12-foundations.webp', caption: 'Foundations' }
        ]
      },
      {
        title: 'How I would measure it',
        paragraphs: [
          `As an unreleased v2 there are no results to report, so these are the measures I would set for a release:`
        ],
        bullets: [
          `Fewer support contacts asking whether the system is working.`,
          `How often people open the app during expensive price hours, and whether grid use in those hours drops.`,
          `Onboarding completion and time to first live data.`,
          `Sonnenjahr shares and the referrals that follow them.`
        ]
      },
      {
        title: 'Reflection',
        paragraphs: [
          `v1 taught me that monitoring is a trust product. v2 is what I would do with that lesson now: decide what the user needs to know before deciding what to show, make the system explain itself in plain language, and design the hard cases (a grey January day, an empty battery at 3 am, a lost connection) as carefully as the sunny screenshot.`
        ]
      }
    ]
  },

  'solar-designer': {
    title: 'Solar Design Studio',
    subtitle: 'Premium solar design tool',
    summary: 'Premium solar design tool with Salesforce integration. Collaborated with engineering and sales to create intuitive design experience.',
    year: '2023',
    status: 'Active Use',
    role: 'Senior Product Designer',
    timeline: '2023',
    tools: ['React', 'Figma', 'Salesforce', 'Prototyping', 'Usage Analysis', 'Storybook'],
    company: 'EIGENSONNE',
    platform: 'Web (Salesforce)',
    scope: 'UX/UI, prototyping, usage analysis',
    heroImage: { src: '/img/solar-designer/main-layout.webp', alt: 'Solar Design Studio main planning layout' },
    overview: {
      description: 'Collaborated closely with engineering, planning, and sales teams to develop a premium solar design tool with tight Salesforce integration.',
      challenge: 'Sales teams needed a sophisticated design tool that felt approachable. The tool needed to be usable by power user planners, and by sales users in video and in-person sales calls.',
      challengeImages: [
        { src: '/img/solar-designer/loading.png', caption: 'Designer Loading from Customer Data' },
        { src: '/img/solar-designer/select-planning.webp', caption: 'Existing Offer or New Offer with Photo' },
        { src: '/img/solar-designer/quote-component.png', caption: 'Example quote item component' }
      ],
      solution: 'Designed a full-screen immersive interface with guided workflows. Leveraged AI tools to generate multiple design variations quickly. Built extensive prototype in Figma to validate interaction patterns.',
      solutionImage: '/img/solar-designer/main-layout.webp'
    },
    impact: 'Significantly reduced error rates, increased sales call final conversion rates, reduced time to sale and improved NPS scores dramatically.'
  }
};
