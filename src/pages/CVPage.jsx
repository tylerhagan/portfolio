import { useEffect, useMemo } from 'react';
import { cvData, cvJsonLd } from '../utils/cvData';
import { useContact } from '../utils/ContactContext';
import './CVPage.css';

// The CV is deliberately machine-readable: semantic HTML with conventional
// section names, standard date formats, and schema.org JSON-LD — so ATS and
// AI screening tools parse it as cleanly as a human reads it.

const CVPage = () => {
  const { openContact } = useContact();

  // Injected by scripts/generate-cv-pdf.mjs so the address never ships in the bundle
  const email = useMemo(
    () => new URLSearchParams(window.location.search).get('email'),
    []
  );

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(cvJsonLd());
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);

  return (
    <article className="cv-page">
      <div className="container">
        <header className="cv-header">
          <div className="label page-path">/cv · th.2026</div>
          <h1>{cvData.name}</h1>
          <p className="cv-title">{cvData.title}</p>
          <p className="cv-meta">
            <span>{cvData.location}</span>
            <span className="cv-meta-sep">·</span>
            <a href={cvData.website}>tylerhagan.co.uk</a>
            <span className="cv-meta-sep">·</span>
            <a href={cvData.linkedin}>linkedin.com/in/tylerhagan</a>
            {email && (
              <>
                <span className="cv-meta-sep">·</span>
                <a href={`mailto:${email}`}>{email}</a>
              </>
            )}
          </p>
          <div className="cv-actions">
            <a className="btn btn-primary" href="/tyler-hagan-cv.pdf" download>
              download pdf
            </a>
            <button className="btn btn-secondary" onClick={openContact}>
              get in touch
            </button>
          </div>
        </header>

        <section className="cv-section" aria-label="Profile">
          <h2>Profile</h2>
          <p className="cv-profile">{cvData.profile}</p>
        </section>

        <section className="cv-section" aria-label="Experience">
          <h2>Experience</h2>
          {cvData.experience.map((job, i) => (
            <div key={i} className="cv-job">
              <div className="cv-job-head">
                <h3>
                  {job.role} <span className="cv-job-company">· {job.company}</span>
                </h3>
                <div className="cv-job-meta label">
                  {job.start} – {job.end} · {job.location}
                </div>
              </div>
              <ul>
                {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          ))}
        </section>

        <section className="cv-section" aria-label="Education">
          <h2>Education</h2>
          <ul className="cv-plain-list">
            {cvData.education.map((e, i) => (
              <li key={i}>
                <strong>{e.qualification}</strong> — {e.institution}, {e.period}
              </li>
            ))}
          </ul>
        </section>

        <section className="cv-section" aria-label="Certifications">
          <h2>Certifications</h2>
          <ul className="cv-plain-list">
            {cvData.certifications.map((c, i) => (
              <li key={i}>
                <strong>{c.name}</strong> — {c.issuer}, {c.year}
              </li>
            ))}
          </ul>
        </section>

        <section className="cv-section" aria-label="Skills">
          <h2>Skills</h2>
          <p className="cv-inline-list">{cvData.skills.join(' · ')}</p>
        </section>

        <section className="cv-section" aria-label="Tools">
          <h2>Tools</h2>
          <p className="cv-inline-list">{cvData.tools.join(' · ')}</p>
        </section>

        <section className="cv-section" aria-label="Languages">
          <h2>Languages</h2>
          <p className="cv-inline-list">
            {cvData.languages.map((l) => `${l.language} (${l.level})`).join(' · ')}
          </p>
        </section>

        <section className="cv-section cv-praise" aria-label="Reference">
          <h2>Reference</h2>
          <blockquote>
            <p>"{cvData.praise.quote}"</p>
            <div className="cv-praise-attr label">{cvData.praise.attribution}</div>
          </blockquote>
        </section>
      </div>
    </article>
  );
};

export default CVPage;
