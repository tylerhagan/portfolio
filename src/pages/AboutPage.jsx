import './AboutPage.css';

const AboutPage = () => {
  return (
    <>
      <section className="about-hero">
        <div className="container">
          <div className="about-content">
            <h1>About Me</h1>
            <p className="about-intro">UK-born product designer based in Berlin, Germany. I'm a jack-of-all-trades: product designer, front-end engineer, illustrator, and design systems fanatic.</p>

            <h2>Background</h2>
            <p>I work well separate or deeply integrated with development teams, allowing me to ship products efficiently and effectively. My approach combines traditional design thinking with modern AI-assisted workflows, enabling rapid prototyping and iteration.</p>
            <p>Over the years, I've had the privilege of optimising interfaces and creating experiences for notable brands including Nike, Coca-Cola, Intel Security, News UK, News Corp Australia, and The Wall Street Journal.</p>

            <h2>Approach</h2>
            <p>My process leverages AI tools like Claude and Midjourney alongside traditional design tools like Figma to accelerate ideation, prototyping, and documentation. This hybrid approach allows me to explore more possibilities in less time whilst maintaining high design quality.</p>
            <p>Design systems are at the core of my work; I'm passionate about creating scalable, maintainable component libraries that empower teams to build consistently across products.</p>

            <h2>Philosophy</h2>
            <p>I believe the best design happens when you're deeply embedded with the team building it. That's why I don't just hand off designs—I work alongside engineers, using tools like Storybook and design tokens to ensure what we build matches what we designed.</p>
            <p>AI isn't replacing designers; it's amplifying what we can do. I use it to handle the tedious bits; generating content variations, documenting systems, analysing research; so I can focus on the creative problem-solving that actually matters.</p>

            <div className="brands-section">
              <h2>Brands I've Worked With</h2>
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
                  <li>Typescript</li>
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
                  <li>Conversion Optimisation</li>
                  <li>Workshop Facilitation</li>
                  <li>Stakeholder Management</li>
                </ul>
              </div>
            </div>

            <div className="cta-section">
              <h2>Let's Work Together</h2>
              <p>
                I'm always interested in hearing about new projects and opportunities. Whether you need help with a design system, want to explore AI-assisted workflows, or just want to chat about product design, feel free to reach out.
              </p>
              <div className="cta-buttons">
                <a href="mailto:hello@tylerhagan.co.uk" className="btn btn-primary">Get in Touch</a>
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
