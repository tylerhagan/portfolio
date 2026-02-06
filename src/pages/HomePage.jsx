import { useState, useEffect } from 'react';
import Lightbox from '../components/Lightbox';
import './HomePage.css';

const HomePage = ({ onNavigate }) => {
  const [rotatingWord, setRotatingWord] = useState('software');
  const [lightboxImage, setLightboxImage] = useState(null);
  const words = ['software', 'systems', 'websites', 'applications'];
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % words.length;
      setRotatingWord(words[currentIndex]);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const openLightbox = (imageSrc, imageAlt) => {
    setLightboxImage({ src: imageSrc, alt: imageAlt });
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const projects = [
    {
      id: 'offer-tool',
      title: 'AI-Powered Offer Tool',
      year: '2025',
      type: 'Enterprise Software',
      description: 'Multi-national B2B/B2C offer tool for solar energy company. Drove design and research with integrated AI assistance for real-time recommendations.',
      tags: ['React', 'AI Integration', 'Figma', 'Lokalize', 'User Research'],
      icon: '🔐'
    },
    {
      id: 'field-service',
      title: 'Field Service App',
      year: '2023',
      type: 'Mobile App',
      description: 'Complete reimagination of field service application with custom design system. Led cross-discipline initiative from research to deployment.',
      tags: ['iOS', 'Android', 'Figma', 'Design System', 'User Testing'],
      icon: '📱'
    },
    {
      id: 'solar-designer',
      title: 'Solar Design Studio',
      year: '2023',
      type: 'SaaS Platform',
      description: 'Premium solar design tool with Salesforce integration. Collaborated with engineering and sales to create intuitive design experience.',
      tags: ['React', 'Figma', 'Salesforce', 'Storybook'],
      icon: '☀️'
    },
    {
      id: 'monitoring-app',
      title: 'Energy Monitoring',
      year: '2022',
      type: 'Mobile App',
      description: 'User-centric solar monitoring app for long-term customer retention. Designed with focus on analytics and engagement.',
      tags: ['React Native', 'Figma', 'Analytics', 'Token Studio'],
      icon: '⚡'
    }
  ];

  const concepts = [
    {
      image: 'https://tylerhagan.github.io/2024-25-Portfolio/assets/img/concepts/nuvio-05.png',
      title: 'CRM App - System & Branding'
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
    },
    {
      image: 'https://tylerhagan.github.io/2024-25-Portfolio/assets/img/concepts/placeholder.png',
      title: 'Coming Soon'
    }
  ];

  const toolkit = [
    {
      icon: '🎨',
      title: 'Figma & Design Systems',
      description: 'Building scalable, token-based design systems with comprehensive component libraries. Leveraging Auto Layout, variants, and plugins for maximum efficiency.',
      tags: ['Design Systems', 'Components', 'Prototyping']
    },
    {
      icon: '🤖',
      title: 'AI-Assisted Workflows',
      description: 'Integrating Claude and ChatGPT for rapid ideation, content generation, and design documentation. Using AI as a collaborative partner throughout the design process.',
      tags: ['Ideation', 'Documentation', 'Content']
    },
    {
      icon: '✨',
      title: 'Generative AI Tools',
      description: 'Creating concept art and visual explorations with Midjourney and DALL-E. Generating dozens of variations to explore design directions quickly.',
      tags: ['Concept Art', 'Visuals', 'Exploration']
    },
    {
      icon: '⚡',
      title: 'Rapid Prototyping',
      description: 'Combining interactive prototypes with quick iteration cycles. Building functional demos in hours to validate concepts with stakeholders and users.',
      tags: ['Prototypes', 'Testing', 'Validation']
    },
    {
      icon: '📊',
      title: 'Data-Driven Design',
      description: 'Leveraging analytics, user testing, and research to inform design decisions. Using tools like Clarity, Hotjar, and custom analytics.',
      tags: ['Analytics', 'Research', 'Insights']
    },
    {
      icon: '💻',
      title: 'Front-End Development',
      description: 'Building with React, React Native, and modern web technologies. Collaborating closely with engineering teams for pixel-perfect implementation.',
      tags: ['React', 'CSS', 'Storybook']
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Research',
      description: 'Understanding user needs through research, interviews, and competitive analysis. Using AI tools to rapidly synthesise insights and generate initial concepts.'
    },
    {
      number: '02',
      title: 'Ideation & Prototyping',
      description: 'Building interactive prototypes in Figma with AI-generated content. Creating multiple variations quickly to explore different approaches and gather feedback.'
    },
    {
      number: '03',
      title: 'Testing & Iteration',
      description: 'Validating designs through user testing and analytics. Iterating based on data and feedback to optimise the experience before development.'
    },
    {
      number: '04',
      title: 'Development & Launch',
      description: 'Working closely with engineering teams throughout development. Using design tokens and Storybook for seamless handoff and consistent implementation.'
    }
  ];

  return (
    <>
      <section className="hero gradient-overlay">
        <div className="container">
          <div className="hero-content">
            <div className="hero-label">
              <span className="status-dot"></span>
              Available for projects
            </div>
            <h1>
              Product designer crafting experiences and{' '}
              <span className="rotating-word" key={rotatingWord}>
                {rotatingWord}
              </span>{' '}
              from Berlin
            </h1>
            <p>
              I am your jack-of-all-trades: product designer, front-end engineer, illustrator and design systems fanatic. I like building cool things and solving hard problems.
            </p>
            <div className="hero-cta">
              <a href="#work" className="btn btn-primary">View Work</a>
              <button className="btn btn-secondary" onClick={() => onNavigate('about')}>About Me</button>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="stats">
          <div className="stat-card">
            <div className="stat-number">10+</div>
            <div className="stat-label">Years of experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">50+</div>
            <div className="stat-label">Projects delivered</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">Committed to excellence</div>
          </div>
        </div>

        <section id="work" className="section">
          <div className="section-header">
            <h2 className="section-title">Selected Work</h2>
            <p className="section-subtitle">
              Recent projects spanning enterprise software, mobile applications, and design systems. Deeply integrated with development teams for efficient delivery.
            </p>
          </div>
          <div className="work-grid">
            {projects.map(project => (
              <div 
                key={project.id} 
                className="work-card" 
                onClick={() => onNavigate('project', project.id)}
              >
                <div className="work-image">{project.icon}</div>
                <div className="work-content">
                  <div className="work-meta">
                    <span className="work-year">{project.year}</span>
                    <span className="work-type">{project.type}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="work-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="concepts" className="section">
          <div className="section-header">
            <h2 className="section-title">Concepts & Unused Designs</h2>
            <p className="section-subtitle">
              Explorations, experiments, and concepts that showcase design thinking and creative direction.
            </p>
          </div>
          <div className="concepts-grid">
            {concepts.map((concept, index) => (
              <div 
                key={index} 
                className="concept-card"
                onClick={() => openLightbox(concept.image, concept.title)}
              >
                <div className="concept-image-wrapper">
                  <img src={concept.image} alt={concept.title} className="concept-image" />
                </div>
                <p className="concept-title">{concept.title}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="toolkit" className="section">
          <div className="section-header">
            <h2 className="section-title">Toolkit & Approach</h2>
            <p className="section-subtitle">
              I leverage modern tools and AI-assisted workflows to design and ship products faster without compromising quality. Here's how I work.
            </p>
          </div>
          <div className="toolkit-grid">
            {toolkit.map((tool, index) => (
              <div key={index} className="tool-card">
                <div className="tool-icon">{tool.icon}</div>
                <h3>{tool.title}</h3>
                <p>{tool.description}</p>
                <div className="tool-tags">
                  {tool.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="process" className="section">
          <div className="section-header">
            <h2 className="section-title">Design Process</h2>
            <p className="section-subtitle">
              My process integrates AI tools at every stage—from discovery to delivery—enabling rapid iteration and data-driven decision making.
            </p>
          </div>
          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-number">{step.number}</div>
                <div className="timeline-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
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
