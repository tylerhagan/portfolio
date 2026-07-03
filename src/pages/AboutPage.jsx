import { useContact } from '../utils/ContactContext';
import './AboutPage.css';

const AboutPage = () => {
  const { openContact } = useContact();
  return (
    <>
      <section className="about-hero">
        <div className="container">
          <div className="about-layout">
            <div className="about-content">
              <div className="label page-path">/about — th.2026</div>
              <h1>About Me</h1>
              <p className="about-intro">UK-born, Berlin-based product designer with a background in CRO, graphic design, and front-end engineering. I work best embedded with teams, somewhere between the Figma file and the pull request, shipping products that move metrics, not just look good.</p>
              <div className="current-chapter">
                <div className="chapter-label">Current Chapter</div>
                <div className="chapter-card">
                  <div className="chapter-left">
                    <div className="chapter-dot"></div>
                    <div className="chapter-connector"></div>
                  </div>
                  <div className="chapter-body">
                    <span className="chapter-period">mar 2026 → present</span>
                    <div className="chapter-title-row">
                      <h3 className="chapter-role">Designer</h3>
                      <span className="chapter-company">@ Enpal Energy</span>
                    </div>
                    <p className="chapter-desc">
                      Working at the intersection of design and engineering for Europe's leading
                      residential solar company — taking ideas from concept to working product
                      without the usual hand-off loss. Building the Enpal design family and
                      designing across the customer portal, marketing web, and back office.
                    </p>
                  </div>
                </div>
              </div>

              <div className="timeline">
                {[
                  {
                    period: 'may 2024 — jan 2025',
                    role: 'Senior Product Designer',
                    company: '1KOMMA5°',
                    desc: 'Led design for B2B and B2C products — including a multi-national sales tool taken from field research in Germany and Sweden to shipped MVP. Enhanced the design system and internationalisation workflow across design and engineering teams.'
                  },
                  {
                    period: 'jan 2020 — jan 2024',
                    role: 'Senior Product Designer',
                    company: 'EIGENSONNE',
                    desc: 'Solo product designer through rapid scale-up. Designed the customer monitoring app, field service app, and solar design tooling; built modular design systems with tokens and Storybook support for engineering.'
                  },
                  {
                    period: 'dec 2017 — jan 2020',
                    role: 'Senior UX/UI Engineer',
                    company: 'EIGENSONNE',
                    desc: 'Creative lead, designer, front-end developer, and website owner while growing the company and brand — a start-up minded, all-hands-on-deck role. Drove CRO for high-cost lead generation.'
                  },
                  {
                    period: 'may 2017 — nov 2017',
                    role: 'Creative Lead / Senior Web Developer',
                    company: 'Sygns',
                    desc: 'Led the redesign of the multi-language company website and the neon sign configurator.'
                  },
                  {
                    period: 'feb 2015 — nov 2016',
                    role: 'Lead Developer',
                    company: 'House of Kaizen',
                    desc: 'Led development at this multi-discipline digital agency and CRO consultancy in London, managing three developers. Helped win the Intel Security contract — building and running the European McAfee online store with continuous lean-UX optimisation.'
                  }
                ].map((entry, i) => (
                  <div key={i} className="timeline-entry">
                    <div className="timeline-left">
                      <div className="timeline-dot"></div>
                      <div className="timeline-connector"></div>
                    </div>
                    <div className="timeline-body">
                      <span className="timeline-period">{entry.period}</span>
                      <div className="timeline-title-row">
                        <h3 className="timeline-role">{entry.role}</h3>
                        <span className="timeline-company">@ {entry.company}</span>
                      </div>
                      <p className="timeline-desc">{entry.desc}</p>
                    </div>
                  </div>
                ))}
                <div className="timeline-education label">
                  BSc Web Development — University of Greenwich · BND Graphic Design — Amersham College · Optimizely Developer & Platform Certified
                </div>
              </div>

              <h2>Background</h2>
              <p>I've spent the last several years in the energy space, designing every stage of the residential solar journey — selling, installing, monitoring, and long-term ownership.</p>
              <p>I work well separate or deeply integrated with development teams, allowing me to ship products efficiently and effectively. My approach combines traditional design thinking with modern AI-assisted workflows, enabling rapid prototyping and iteration.</p>
              <p>Outside of work I have been a professional esports competitor and lifelong artist, enjoying all types of creative outlets, especially music and painting. I love to learn new skills and explore new topics.</p>

              <h2>Approach</h2>
              <p>My background in conversion rate optimisation (CRO) means design decisions are grounded in data, not instinct alone. I combine user research, A/B testing, and funnel analysis to understand why users do what they do, then design with that evidence at the centre.</p>
              <p>My process leverages AI tools like Claude and Midjourney alongside traditional design tools like Figma to accelerate ideation, prototyping, and documentation. This hybrid approach allows me to explore more possibilities in less time whilst maintaining high design quality.</p>
              <p>Design systems are at the core of my work; I'm passionate about creating scalable, maintainable component libraries that empower teams to build consistently across products.</p>

              <h2>Philosophy</h2>
              <p>I believe the best design happens when you're deeply embedded with the team building it. That's why I don't just hand off designs. I work alongside engineers, using tools like Storybook and design tokens to ensure what we build matches what we designed.</p>
              <p>AI isn't replacing designers; it's amplifying what we can do. I use it to handle the tedious bits; generating content variations, documenting systems, analysing research; so I can focus on the creative problem-solving that actually matters.</p>

              <blockquote className="testimonial">
                <p className="testimonial-quote">
                  "Tyler is one of those rare unicorns bridging Software Engineering skills and
                  UX/UI skills. Tyler has a diverse skillset, and has been the solo UX person in a
                  fast-growing startup — an incredibly challenging position to hold that shows
                  resilience and adaptability."
                </p>
                <footer className="testimonial-attr label">
                  — petra kühnle · senior product designer, worked together at eigensonne
                </footer>
              </blockquote>

            </div>
            
            <div className="about-portrait">
              <div className="portrait-wrapper">
                <img 
                  src="/img/enpal-headshot.png"
                  alt="Tyler Hagan" 
                  className="portrait-image"
                />
              </div>
            </div>
          </div>

          <div className="about-content-full">
            <div className="brands-section">
              <h2>Brands I've Worked With</h2>
              <p className="brands-context">Via agency work at House of Kaizen, London.</p>
              <div className="brands-grid">
                <div className="brand-item">Nike</div>
                <div className="brand-item">Coca-Cola</div>
                <div className="brand-item">Intel Security</div>
                <div className="brand-item">News UK</div>
                <div className="brand-item">News Corp Australia</div>
                <div className="brand-item">The Wall Street Journal</div>
              </div>
            </div>

            <h2>Skills & Tools</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Design</h3>
                <ul className="skill-list">
                  <li>Product Design</li>
                  <li>Design Systems</li>
                  <li>User Research</li>
                  <li>Prototyping</li>
                  <li>Illustration</li>
                  <li>UI/UX Design</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Tools</h3>
                <ul className="skill-list">
                  <li>Figma</li>
                  <li>Claude & ChatGPT</li>
                  <li>Midjourney & DALL-E</li>
                  <li>Storybook</li>
                  <li>Token Studio</li>
                  <li>Adobe Creative Suite</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Development</h3>
                <ul className="skill-list">
                  <li>React</li>
                  <li>React Native</li>
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                  <li>Design Tokens</li>
                  <li>Git & GitHub</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Process</h3>
                <ul className="skill-list">
                  <li>User Testing</li>
                  <li>A/B Testing</li>
                  <li>Analytics</li>
                  <li>Agile/Lean</li>
                  <li>Workshop Facilitation</li>
                  <li>Stakeholder Management</li>
                </ul>
              </div>
            </div>

            <div className="cta-section">
              <h2>Let's Work Together</h2>
              <p>
                Always happy to connect, collaborate, or talk about design: CRO strategy, design systems, AI workflows, or just the craft. Feel free to reach out.
              </p>
              <div className="cta-buttons">
                <button className="btn btn-primary" onClick={openContact}>Get in Touch</button>
                <a href="https://www.linkedin.com/in/tylerhagan/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
