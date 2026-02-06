export const projectsData = {
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
      content: `Our research process began on the ground with the local teams in Berlin and Hamburg, followed by a trip to Sweden—the pilot launch market.`,
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
            '/img/ot-customerlist.png',
            '/img/ot-customer-add.png'
          ]
        },
        {
          title: 'Pitch Section',
          description: 'Sales reps are supported with structured, persuasive content—tailored by market. Utilising 3D assets, and slick animations. I worked closely with the marketing team to ensure messaging aligned with brand standards and customer expectations.',
          images: [
            '/img/ot-breakdown.png',
            '/img/heartbeat-breakdown-pitch.png'
          ]
        },
        {
          title: 'System Builder',
          description: 'A visual, interactive module resembling a web store. Agents select from pre-configured templates (customised per country) to speed up offer creation. Live values (e.g. production, consumption, ROI) are dynamically calculated based on customer data.',
          images: [
            '/img/ot-concept.png',
            '/img/ot-multi-site-offer.png',
            '/img/ot-configuration.jpg'
          ]
        },
        {
          title: 'Cockpit and Automations',
          description: 'Make everything available from the system builder allowed us to keep the user in the flow, reducing interruptions to sales. A robust configurable rules system; alerting and warning or preventing sales users from creating packages or systems that do not work or are not possible.',
          images: ['/img/sidebars.png']
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
    definitionImage: '/img/journey-map.png',
    solution: {
      objectives: [
        'Operational Efficiency: The primary focus was on streamlining internal processes related to installation tracking, performance monitoring, and customer management to improve overall operational efficiency.',
        'Cost Reduction: By automating manual tasks and optimising workflows, the application aimed to reduce operational costs associated with inefficiencies and errors.',
        'Data Accuracy Improvement: Accurate data entry and management were crucial for ensuring the reliability of system performance metrics and customer information. The new application incorporated validation checks and guided flows to minimise errors and discrepancies.'
      ],
      images: [
        { src: '/img/preview-one.png', caption: 'Navigation and Dashboard' },
        { src: '/img/preview-two.png', caption: 'Installation Checks and Photo Upload' },
        { src: '/img/preview-three.png', caption: 'Preparation Checklist and Reports' }
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
      wireframeImage: '/img/top-level-wireframes-snippet-preview.png',
      flowImage: '/img/user-flow.png'
    },
    design: {
      approach: 'Adhering to foundational principles in mobile design, I implemented thumb-sized, rounded, and responsive elements for all interactions within the app. By leveraging native iOS and Android interface elements and behaviours, such as swiping and drawers, instead of reinventing established patterns, we ensured an intuitive user experience.',
      feedback: 'Feedback from our early testers underscored the success of these design choices. They particularly appreciated the ability to quickly gauge their system\'s performance with a glance, emphasising the importance of easily accessible data for optimising their appliance usage.',
      energyFlow: 'We employed variable speeds of animation within the energy flow diagram to represent the intensity of energy flows. This dynamic feature, coupled with straightforward breakdowns of production versus consumption, ensured that users could quickly grasp complex energy dynamics with just a glance.',
      energyFlowImage: '/img/energy-flow2x.jpg',
      prototypeImages: [
        { src: '/img/early-prototype-dark-thumbnail.png', caption: 'Dashboard prototype (alpha test)' },
        { src: '/img/early-prototype-light-thumbnail.png', caption: 'Daily graph prototype (beta test)' }
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
      challenge: 'Sales teams needed a sophisticated design tool that felt approachable. The tool needed to generate professional presentations whilst integrating with existing CRM workflows.',
      solution: 'Designed a full-screen immersive interface with guided workflows. Leveraged AI tools to generate multiple design variations quickly. Built extensive prototype in Figma to validate interaction patterns.'
    },
    impact: 'Design proposals increased from 5 to 15 per week per sales rep. Customer presentation quality improved significantly, leading to higher close rates.'
  }
};
