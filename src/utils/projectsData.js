export const projectsData = {
  // ——— Current work @ Enpal (comingSoon: rendered as "case study in progress") ———
  'design-family': {
    comingSoon: true,
    locked: true,
    encPath: '/data/design-family.enc.json',
    title: 'Enpal Design Family',
    subtitle: 'One foundation, four systems: Enpal DS, NEMO, VERSO & FOLIO',
    year: '2026',
    status: 'In active development',
    role: 'Designer · Design Engineer',
    timeline: '2026 – present',
    tools: ['Figma', 'Design Tokens', 'React', 'shadcn', 'Ant Design'],
    // Live docs site exists (folio-ee.vercel.app) — deliberately not linked publicly yet.
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
    title: 'Portal, Web & Back Office',
    subtitle: "Three Enpal Energy surfaces, one design foundation",
    year: '2026',
    status: 'In active development',
    role: 'Product Designer · Design Engineer',
    timeline: '2026 – present',
    tools: ['Figma', 'FOLIO DS', 'VERSO DS', 'React', 'TypeScript', 'shadcn/ui'],
    brief: `Alongside building the Enpal design family, I designed and prototyped across three of Enpal Energy's product surfaces — the customer portal, the consumer marketing web, and Hyperion, the internal back office. Each is built on the family's systems, so the work was less about starting from scratch and more about composing a shared foundation into three very different contexts.`,
    sections: [
      {
        title: 'One foundation, three contexts',
        paragraphs: [
          `The three surfaces sit at very different points on the same spectrum: a first-visit consumer deciding whether to switch, a returning customer managing their energy, and an operations team working through hundreds of accounts. Designing them independently invites drift; designing them on one system keeps them coherent and fast to build.`,
          `The foundation is the Enpal design family — a shared parent layer (Enpal DS) with purpose-built sub-systems on top: VERSO for consumer web, FOLIO for dense product and internal UI. Colour, type, spacing and motion come from one source, and each sub-system decides what those primitives mean in its context. A handful of rules hold it together — chief among them, brand yellow is reserved for conversion, ink leads in work contexts, and paper carries most of every screen.`,
          `Because the system ships as design tokens, a React/shadcn registry, an Ant Design theme and Figma variables generated from a single source, each surface below pulls the system in rather than re-implementing it. The full system deep-dive is a separate case.`
        ],
        images: [
          { src: '/img/design-family/ds-docs-hero-light.webp', caption: 'The shared foundation — Enpal.design docs (light)' },
          { src: '/img/design-family/ds-docs-hero-dark.webp', caption: 'The same system, dark mode' }
        ]
      },
      {
        title: 'Consumer web — the marketing site (VERSO)',
        paragraphs: [
          `The brief was brand and tone: set a confident north-star for Enpal Energy's consumer web, not to win a conversion test. I designed a landing page in the VERSO language — expressive display type, a real-photo hero, pill buttons and borderless cards on a deep-ink surface warmed by the family's aurora wash.`,
          `The tariff calculator is the single conversion moment on the page, so it earns the reserved brand yellow; everything else stays quiet around it. Trust signals — independent reviews, households served, certification — sit directly beneath the headline.`,
          `It matters to the system because it proved the shared primitives could stretch from a calm product dashboard to an expressive consumer page without either feeling like a different brand. The move from landing page into the portal is a deliberate VERSO-to-FOLIO handoff.`
        ],
        images: [
          { src: '/img/enpal-product-work/marketing-landing-hero.webp', caption: 'Consumer landing (VERSO) — real-photo hero, with the tariff calculator as the single conversion moment' }
        ]
      },
      {
        title: 'The customer portal (FOLIO)',
        paragraphs: [
          `The portal is where a customer manages their energy: consumption, meter readings (Zählerstand), tariff and billing. It's a returning-user surface, so it follows FOLIO's calm, dense conventions — ink primaries, status pills, one restrained upsell — in German, with full light and dark support.`,
          `The overview brings together the next payment, the last meter reading, a live tariff timeline showing cheaper and standard windows, and a savings breakdown against the local basic supplier. Contextual nudges — a cheaper window tonight, a cold weekend ahead — surface only when they're useful.`,
          `I took it from a high-fidelity interactive prototype to a production-ready TypeScript scaffold: React, Vite and React Router, consuming FOLIO as a shadcn registry with no vendored CSS, plus a typed API contract with mock fixtures — so backend and frontend could build the first version without re-litigating routes, contracts or design-system bindings.`
        ],
        images: [
          { src: '/img/enpal-product-work/portal-proto-light.webp', caption: 'Customer portal overview (FOLIO) — light' },
          { src: '/img/enpal-product-work/portal-proto-dark.webp', caption: 'The same overview, dark mode' },
          { src: '/img/enpal-product-work/portal-mvp-light.webp', caption: 'Sign-in from the production TypeScript build' }
        ]
      },
      {
        title: 'The back office — Hyperion',
        paragraphs: [
          `Hyperion is the operational counterpart to the portal — a focused customer-360 tool for the teams who run the energy business. It shares the exact same FOLIO tokens and components as the portal, with a thin back-office layer on top, which is the clearest proof that the foundation carries from a customer-facing product to dense internal software.`,
          `The customer view uses a products-as-context pattern: pick a product or contract on the left and the Registration, Contract, Payment and Communications tabs update on the right, down to the regulated market identifiers (MaLo, MELO, DSO, TSO). Status pills are the universal language across customers, contracts and products; a two-tier navigation keeps top-level taxonomy and per-section context separate; and a ⌘K command palette is the global launcher. Everything shown here runs on fictional fixture data.`
        ],
        images: [
          { src: '/img/enpal-product-work/hyperion-detail-light.webp', caption: 'Hyperion — customer-360 detail (light)' },
          { src: '/img/enpal-product-work/hyperion-detail-dark.webp', caption: 'Customer-360 detail, dark mode' },
          { src: '/img/enpal-product-work/hyperion-dashboard-light.webp', caption: 'Operations dashboard — active customers and onboarding funnel' },
          { src: '/img/enpal-product-work/hyperion-cmdk-light.webp', caption: 'The ⌘K command palette — search, jump, and run actions' }
        ]
      },
      {
        title: 'Design-engineering craft',
        paragraphs: [
          `A few decisions that don't show up in a screenshot but made the pace possible:`
        ],
        bullets: [
          `Tokens are the single source of truth — the CSS, the shadcn registry, the Ant theme and the Figma variables are all generated from one token file, so a change propagates instead of forking.`,
          `Products consume the system, they don't copy it — a shadcn registry or a single stylesheet link, nothing vendored.`,
          `Theming without a flash — a shared storage key and a pre-paint script set the theme before CSS parses, and the View Transitions API drives the cross-fade; light and dark are equal citizens.`,
          `Prototype to typed scaffold as a deliberate handoff — a single-file interactive demo to agree on feel, then a strict-TypeScript scaffold that freezes routes, contracts and design-system bindings.`,
          `Governance as design — adoption is informed or requested, never forced, with a written propagation order from system to portal to web.`
        ]
      },
      {
        title: 'Where it stands',
        paragraphs: [
          `One foundation now carries three surfaces: a consumer landing page, a customer portal (a prototype plus a production-ready TypeScript scaffold), and an internal customer-360 tool — all speaking the same visual language, in light and dark.`,
          `This is current, in-progress product work rather than a finished, measured launch, so the story here is the design and the system leverage rather than headline metrics. The system deep-dive lives in the Enpal Design Family case.`
        ]
      }
    ]
  },

  'offer-tool': {
    title: 'Offer Tool',
    subtitle: 'Sales enablement software for multi-national teams',
    year: '2025',
    status: 'Private Active Use',
    role: 'Product Designer',
    timeline: 'May 2024 - Jan 2025',
    tools: ['Figma', 'Storybook', 'React', 'Lokalise'],
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
    title: 'Field Service App',
    subtitle: 'Mobile application for internal company use',
    year: '2023',
    status: 'Private Active Use',
    role: 'Product Designer',
    timeline: 'March - October 2023',
    tools: ['Figma', 'Token Studio', 'Storybook', 'React Native'],
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
    subtitle: 'Mobile app for long-term customer relationships',
    year: '2022',
    status: 'Released Q1 2024',
    role: 'Product Designer',
    timeline: 'March - October 2022',
    tools: ['Figma', 'Analytics / Research / Clarity', 'React Native'],
    overview: {
      problem: 'After installation EIGENSONNE would usually say goodbye to the customer. How can they better establish an ongoing relationship with them? How can they offer more value to the customer.',
      outcome: 'I designed an intuitive & enjoyable proprietary app. Providing energy monitoring, unique data breakdowns, weather and support. Building a component based modular design system, and providing additional feature designs for later feature releases.'
    },
    research: {
      understanding: 'In our pursuit of creating a user-centric app, we conducted comprehensive competitor analysis and gathered insights through colleague interviews. These efforts were instrumental in identifying key factors crucial for enhancing user experience and maximising app utility.',
      differentiation: 'Early in the development process, we delineated our differentiation strategy from competitors, specifically targeting a user base distinct from those catered to by existing advanced-level apps. Our approach centred on presenting essential data points in a user-friendly format, prioritising simplicity and accessibility.',
      trust: 'Recognising the technical nature of our product, we placed a strong emphasis on fostering trust and confidence amongst users. To achieve this, we implemented robust systems health indicators, comprehensive FAQ sections, and intuitive energy flow interfaces.',
      wireframeImage: '/img/eigen-app/top-level-wireframes-snippet-preview.png',
      flowImage: '/img/eigen-app/user-flow.webp'
    },
    design: {
      approach: 'Adhering to foundational principles in mobile design, I implemented thumb-sized, rounded, and responsive elements for all interactions within the app. By leveraging native iOS and Android interface elements and behaviours, such as swiping and drawers, instead of reinventing established patterns, we ensured an intuitive user experience.',
      feedback: 'Feedback from our early testers underscored the success of these design choices. They particularly appreciated the ability to quickly gauge their system\'s performance with a glance, emphasising the importance of easily accessible data for optimising their appliance usage.',
      energyFlow: 'We employed variable speeds of animation within the energy flow diagram to represent the intensity of energy flows. This dynamic feature, coupled with straightforward breakdowns of production versus consumption, ensured that users could quickly grasp complex energy dynamics with just a glance.',
      energyFlowImage: '/img/eigen-app/energy-flow2x.webp',
      prototypeImages: [
        { src: '/img/eigen-app/early-prototype-dark-thumbnail.webp', srcFull: '/img/eigen-app/early-prototype.webp', caption: 'Dashboard prototype (alpha test)' },
        { src: '/img/eigen-app/early-prototype-light-thumbnail.webp', srcFull: '/img/eigen-app/early-prototype-light.webp', caption: 'Daily graph prototype (beta test)' }
      ],
      colours: 'Our colour palette was meticulously chosen to optimise user experience. Following extensive research into colour psychology, we settled on a teal base due to its associations with calmness, serenity, and balance.'
    },
    results: 'Feedback from testers was overwhelmingly positive. Their enthusiasm and confidence in the app surpassed that of competitors\' offerings and even the hardware manufacturer\'s own app. This project underscores the importance of early and frequent user engagement.'
  },
  
  'solar-designer': {
    title: 'Solar Design Studio',
    subtitle: 'Premium solar design tool',
    year: '2023',
    status: 'Active Use',
    role: 'Product Designer',
    timeline: '2023',
    tools: ['React', 'Figma', 'Salesforce', 'Prototyping', 'Usage Analysis', 'Storybook'],
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
