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

const WORDS = ['products', 'systems', 'software'];

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
      id: 'offer-tool',
      title: 'Offer Tool',
      year: '2025',
      type: 'Enterprise Software',
      description: 'Multi-national B2B/B2C offer tool for solar energy company. Drove design and research with integrated AI assistance for real-time recommendations.',
      tags: ['React', 'AI Integration', 'Figma', 'Lokalize', 'User Research'],
      image: '/img/ot-preview.png'
    },
    {
      id: 'field-service',
      title: 'Field Service App',
      year: '2023',
      type: 'Mobile App',
      description: 'Complete reimagination of field service application with custom design system. Led cross-discipline initiative from research to deployment.',
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
      description: 'User-centric solar monitoring app for long-term customer retention. Designed with focus on analytics and engagement.',
      tags: ['React Native', 'Figma', 'Analytics', 'Token Studio'],
      image: '/img/m-preview.png'
    }
  ];

  const concepts = [
    {
      image: 'https://tylerhagan.github.io/2024-25-Portfolio/assets/img/concepts/nuvio-05.png',
      title: 'CRM App — System & Branding'
    },
    {
      image: 'https://tylerhagan.github.io/2024-25-Portfolio/assets/img/concepts/crypto-05.png',
      title: 'Crypto App'
    },
    {
      image: 'https://tylerhagan.github.io/2024-25-Portfolio/assets/img/concepts/football-stats-preview.png',
      title: 'Football Stats Modules'
    },
    {
      image: 'https://tylerhagan.github.io/2024-25-Portfolio/assets/img/concepts/bank-app.png',
      title: 'Banking App'
    },
    {
      image: 'https://tylerhagan.github.io/2024-25-Portfolio/assets/img/concepts/smart-home-mockup.png',
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
              <span className="label hero-file">TH — PORTFOLIO / REV.2026</span>
              <span className="label hero-status">
                <span className="status-dot"></span>
                currently: designer @ enpal energy
              </span>
            </div>
            <h1>
              Product designer<br />
              crafting <span className="typed-word">{typed}<span className="caret" aria-hidden="true">▮</span></span><br />
              from Berlin.
            </h1>
            <p>
              CRO-trained designer and front-end engineer. I combine user research, design systems, and AI-augmented workflows to ship work that converts, not just looks good.
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
            <span className="datum-value">10+ yrs</span>
          </div>
          <div className="datum">
            <span className="label">Projects shipped</span>
            <span className="datum-value">50+</span>
          </div>
          <div className="datum">
            <span className="label">Avg. conversion lift</span>
            <span className="datum-value">+42% <span className="datum-arrow">↗</span></span>
          </div>
        </div>

        <section id="work" className="section">
          <SectionHeader
            path="/work"
            count={`${String(projects.length).padStart(3, '0')} entries`}
            subtitle="Selected projects spanning enterprise software, mobile applications, and design systems. Deeply integrated with development teams for efficient delivery."
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
                    {project.year} · {project.type}
                  </div>
                  <h3 className="work-title">
                    {project.title}
                    <span className="work-arrow" aria-hidden="true">↗</span>
                  </h3>
                  <p className="work-desc">{project.description}</p>
                  <div className="work-tags">{project.tags.join(', ').toLowerCase()}</div>
                </div>
                <div className="work-thumb">
                  <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
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
