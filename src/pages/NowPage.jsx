import './NowPage.css';

const NowPage = () => {
  return (
    <section className="now-page">
      <div className="container">
        <div className="now-layout">
          <div className="now-header">
            <span className="now-eyebrow">Updated June 2026</span>
            <h1>Now</h1>
            <p className="now-intro">
              A snapshot of what I'm focused on, thinking about, and building right now.
              Inspired by <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer">/now</a>.
            </p>
          </div>

          <div className="now-grid">
            <div className="now-card now-card-featured">
              <div className="now-card-label">Where I Am</div>
              <div className="now-location">
                <span className="location-city">Berlin, Germany</span>
                <span className="location-detail">+ regular trips to Hamburg, Stockholm & other Enpal markets</span>
              </div>
            </div>

            <div className="now-card">
              <div className="now-card-label">Currently Building</div>
              <p>
                Designing product experiences at <strong>Enpal</strong>: tools that help solar installation
                teams, sales agents, and homeowners interact with complex energy systems in ways that feel simple and human.
              </p>
              <p>
                Most of my focus is on internal tooling: reducing friction in high-stakes workflows where data accuracy
                and speed directly affect conversion and customer trust.
              </p>
            </div>

            <div className="now-card">
              <div className="now-card-label">Thinking About</div>
              <ul className="now-list">
                <li>
                  <span className="now-list-marker">→</span>
                  The individual contributor model in design. As AI collapses the gap between design and code,
                  the most valuable contributors will work across the entire product stack.
                </li>
                <li>
                  <span className="now-list-marker">→</span>
                  CRO as a design discipline. Most conversion work is done by marketers, but designers have
                  the biggest lever on outcomes.
                </li>
                <li>
                  <span className="now-list-marker">→</span>
                  What "taste" means in an AI-assisted workflow. AI can generate; it can't curate.
                </li>
              </ul>
            </div>

            <div className="now-card">
              <div className="now-card-label">Currently Learning</div>
              <div className="now-learning-grid">
                <div className="learning-item">
                  <span className="learning-name">Framer</span>
                  <span className="learning-context">motion design & production-ready components</span>
                </div>
                <div className="learning-item">
                  <span className="learning-name">Prompt Engineering</span>
                  <span className="learning-context">advanced patterns for design workflows</span>
                </div>
                <div className="learning-item">
                  <span className="learning-name">TypeScript</span>
                  <span className="learning-context">getting more rigorous on the code side</span>
                </div>
              </div>
            </div>

            <div className="now-card">
              <div className="now-card-label">Outside of Work</div>
              <p>
                Painting, music, and the occasional foray back into competitive gaming.
                Based in Berlin, so there's always something to be curious about.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NowPage;
