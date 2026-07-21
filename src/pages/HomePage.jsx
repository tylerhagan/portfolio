import { useState, useEffect } from 'react';
import Lightbox from '../components/Lightbox';
import './HomePage.css';

// Typewriter: types a word, holds, deletes, moves to the next
const useTypewriter = (words, { typeMs = 70, deleteMs = 40, holdMs = 2600 } = {}) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    let timeout;

    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), holdMs);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIndex((wordIndex + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }, deleting ? deleteMs : typeMs);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typeMs, deleteMs, holdMs]);

  return text;
};

const SectionHeader = ({ path, count, subtitle }) => (
  <div className="section-header">
    <div className="section-meta">
      <h2 className="section-path">{path}</h2>
      <span className="section-count">{count}</span>
    </div>
    <p className="section-subtitle">{subtitle}</p>
  </div>
);

const PRINCIPLES = [
  {
    title: 'AI-native',
    body: "Design and code in one motion. I build with Claude, Figma, and Framer, shipping in hours what used to take weeks. The gap between imagining and building collapsed, and I'm here for it.",
  },
  {
    title: 'Conversion-led',
    body: 'CRO-trained, so decisions are grounded in research and data, not instinct alone. I measure design by outcomes, what converts and earns trust, not just how it looks.',
  },
  {
    title: 'Embedded',
    body: 'I ship with engineers, not to them. I build reusable components, design tokens, and themes on the frameworks they already use (shadcn/ui, Ant Design), so what we design is what they build, and whole teams move faster.',
  },
];

const WORDS = ['products', 'systems', 'software'];
// Widest word reserves the line width so swaps never reflow the block
const LONGEST_WORD = WORDS.reduce((a, b) => (b.length > a.length ? b : a), '');

const HomePage = ({ onNavigate }) => {
  const typed = useTypewriter(WORDS);
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (imageSrc, imageAlt) => {
    setLightboxImage({ src: imageSrc, alt: imageAlt });
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const projects = [
    {
      id: 'design-family',
      title: 'Enpal Design Family',
      year: '2026',
      type: 'Design Systems',
      comingSoon: true,
      description: 'One shared foundation across four systems: Enpal DS, NEMO, VERSO, and FOLIO. 170+ tokens and 25+ components serving mobile, web, portal, and internal software.',
      tags: ['Design Tokens', 'Figma', 'React', 'Documentation']
    },
    {
      id: 'enpal-product-work',
      title: 'Portal, Web & Back Office',
      year: '2026',
      type: 'Product Surfaces',
      description: 'Three Enpal Energy surfaces (customer portal, consumer marketing web, and the Hyperion back office), each built on the design family. From high-fidelity prototypes to a production-ready TypeScript scaffold.',
      tags: ['FOLIO', 'VERSO', 'React', 'TypeScript', 'shadcn/ui'],
      image: '/img/enpal-product-work/portal-proto-light.webp'
    },
    {
      id: 'offer-tool',
      title: 'Offer Tool',
      year: '2025',
      type: 'Enterprise Software',
      description: 'Multi-national B2B/B2C sales tool taken from on-the-ground field research to shipped MVP. Cut offer creation time by 72% and lifted sales conversion 42%.',
      tags: ['React', 'AI Integration', 'Figma', 'Lokalise', 'User Research'],
      image: '/img/ot-preview.png'
    },
    {
      id: 'field-service',
      title: 'Field Service App',
      year: '2023',
      type: 'Mobile App',
      description: 'Complete reimagination of a field service app with custom design system, from research to deployment. Raised critical data entry from 38% to 97%.',
      tags: ['iOS', 'Android', 'Figma', 'Design System', 'User Testing'],
      image: '/img/fs-preview.png'
    },
    {
      id: 'solar-designer',
      title: 'Solar Design Studio',
      year: '2023',
      type: 'SaaS Platform',
      description: 'Premium solar design tool with Salesforce integration. Collaborated with engineering and sales to create intuitive design experience.',
      tags: ['React', 'Figma', 'Salesforce', 'Storybook'],
      image: '/img/sd-preview.png'
    },
    {
      id: 'monitoring-app',
      title: 'Energy Monitoring',
      year: '2022',
      type: 'Mobile App',
      description: 'Proprietary customer app designed from zero (energy monitoring, data breakdowns, and support), with a modular design system built for future releases.',
      tags: ['React Native', 'Figma', 'Analytics', 'Token Studio'],
      image: '/img/m-preview.png'
    }
  ];

  const concepts = [
    {
      image: '/img/concepts/nuvio-05.webp',
      title: 'CRM App · System & Branding'
    },
    {
      image: '/img/concepts/crypto-05.webp',
      title: 'Crypto App'
    },
    {
      image: '/img/concepts/football-stats-preview.webp',
      title: 'Football Stats Modules'
    },
    {
      image: '/img/concepts/bank-app.webp',
      title: 'Banking App'
    },
    {
      image: '/img/concepts/smart-home-mockup.webp',
      title: 'Smart Home App'
    }
  ];

  const toolkit = [
    {
      title: 'Figma & Design Systems',
      description: 'Building scalable, token-based design systems with comprehensive component libraries. Leveraging Auto Layout, variants, and plugins for maximum efficiency.',
      tags: ['Design Systems', 'Components', 'Prototyping']
    },
    {
      title: 'AI-Assisted Workflows',
      description: 'Integrating Claude and ChatGPT for rapid ideation, content generation, and design documentation. Using AI as a collaborative partner throughout the design process.',
      tags: ['Ideation', 'Documentation', 'Content']
    },
    {
      title: 'Generative AI Tools',
      description: 'Creating concept art and visual explorations with Midjourney and DALL-E. Generating dozens of variations to explore design directions quickly.',
      tags: ['Concept Art', 'Visuals', 'Exploration']
    },
    {
      title: 'Rapid Prototyping',
      description: 'Combining interactive prototypes with quick iteration cycles. Building functional demos in hours to validate concepts with stakeholders and users.',
      tags: ['Prototypes', 'Testing', 'Validation']
    },
    {
      title: 'Data-Driven Design',
      description: 'Leveraging analytics, user testing, and research to inform design decisions. Using tools like Clarity, Hotjar, and custom analytics.',
      tags: ['Analytics', 'Research', 'Insights']
    },
    {
      title: 'Front-End Development',
      description: 'Building with React, React Native, and modern web technologies. Collaborating closely with engineering teams for pixel-perfect implementation.',
      tags: ['React', 'CSS', 'Storybook']
    }
  ];

  const handleRowKeyDown = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onNavigate('project', id);
    }
  };

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-meta">
              <span className="label hero-file">TH · PORTFOLIO / REV.2026</span>
              <span className="label hero-status">
                <span className="status-dot"></span>
                currently: designer @ enpal
              </span>
            </div>
            <h1>
              Product designer<br />
              crafting <span className="typed-word">
                <span className="typed-word-sizer" aria-hidden="true">{LONGEST_WORD}<span className="caret">▮</span></span>
                <span className="typed-word-value">{typed}<span className="caret" aria-hidden="true">▮</span></span>
              </span><br />
              from Berlin.
            </h1>
            <p>
              CRO-trained designer and front-end engineer, thrilled by what building has become. AI collapsed the gap between design and code, so I work the whole stack: research, design systems, and product that converts.
            </p>
            <div className="hero-cta">
              <a href="#work" className="btn btn-primary">view work ↓</a>
              <button className="btn btn-secondary" onClick={() => onNavigate('about')}>about me</button>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="data-strip">
          <div className="datum">
            <span className="label">Experience</span>
            <span className="datum-value">15+ yrs</span>
          </div>
          <div className="datum">
            <span className="label">Projects shipped</span>
            <span className="datum-value">50+</span>
          </div>
          <div className="datum">
            <span className="label">Discipline</span>
            <span className="datum-value">Design × Code</span>
          </div>
        </div>

        <section id="principles" className="section">
          <SectionHeader
            path="/principles"
            count={`${String(PRINCIPLES.length).padStart(3, '0')} entries`}
            subtitle="The throughline across everything below: how design, engineering, and conversion thinking come together in the work."
          />
          <div className="principles-list">
            {PRINCIPLES.map((principle, i) => (
              <div key={principle.title} className="principle-row">
                <span className="principle-num label">{String(i + 1).padStart(2, '0')}</span>
                <div className="principle-body">
                  <h3 className="principle-title">{principle.title}</h3>
                  <p className="principle-desc">{principle.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="section">
          <SectionHeader
            path="/work"
            count={`${String(projects.length).padStart(3, '0')} entries`}
            subtitle="Selected projects covering the full residential solar lifecycle (selling, installing, and monitoring), spanning enterprise software, mobile applications, and design systems, shipped hand-in-hand with engineering teams."
          />
          <div className="work-index">
            {projects.map((project, i) => (
              <article
                key={project.id}
                className="work-row"
                role="link"
                tabIndex={0}
                onClick={() => onNavigate('project', project.id)}
                onKeyDown={(e) => handleRowKeyDown(e, project.id)}
              >
                <div className="work-num label">{String(i + 1).padStart(3, '0')}</div>
                <div className="work-body">
                  <div className="work-meta-line label">
                    {project.year} · {project.type}{project.comingSoon && ' · in progress'}
                  </div>
                  <h3 className="work-title">
                    {project.title}
                    <span className="work-arrow" aria-hidden="true">↗</span>
                  </h3>
                  <p className="work-desc">{project.description}</p>
                  <div className="work-tags">{project.tags.join(', ').toLowerCase()}</div>
                </div>
                <div className="work-thumb">
                  {project.image ? (
                    <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
                  ) : (
                    <div className="work-thumb-soon label">case study soon</div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="concepts" className="section">
          <SectionHeader
            path="/concepts"
            count={`${String(concepts.length).padStart(3, '0')} entries`}
            subtitle="Side projects, experiments, and concepts that showcase design thinking and creative direction outside of client work."
          />
          <div className="concepts-grid">
            {concepts.map((concept, index) => (
              <figure
                key={index}
                className="concept-card"
                onClick={() => openLightbox(concept.image, concept.title)}
              >
                <div className="concept-image-wrapper">
                  <img src={concept.image} alt={concept.title} className="concept-image" loading="lazy" />
                  <span className="concept-zoom" aria-hidden="true">+</span>
                </div>
                <figcaption className="concept-title">
                  <span className="concept-num">C-{String(index + 1).padStart(2, '0')}</span>
                  {concept.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="toolkit" className="section">
          <SectionHeader
            path="/toolkit"
            count="approach"
            subtitle="I leverage modern tools and AI-assisted workflows to design and ship products faster without compromising quality. Here's how I work."
          />
          <div className="toolkit-list">
            {toolkit.map((tool, index) => (
              <div key={index} className="tool-item">
                <div className="tool-num label">{String(index + 1).padStart(2, '0')}</div>
                <div className="tool-body">
                  <h3>{tool.title}</h3>
                  <p>{tool.description}</p>
                  <div className="tool-tags">{tool.tags.join(' · ').toLowerCase()}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {lightboxImage && (
        <Lightbox
          imageSrc={lightboxImage.src}
          imageAlt={lightboxImage.alt}
          onClose={closeLightbox}
        />
      )}
    </>
  );
};

export default HomePage;
