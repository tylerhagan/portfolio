import { useEffect, useState } from 'react';
import { cvData, cvJsonLd } from '../utils/cvData';
import { useContact } from '../utils/ContactContext';
import './CVPage.css';

// The CV is deliberately machine-readable: semantic HTML with conventional
// section names, standard date formats, and schema.org JSON-LD, so ATS and
// AI screening tools parse it as cleanly as a human reads it. DOM order stays
// strictly linear; the print label column is CSS only.

const city = cvData.location.split(',')[0];

// No-break space before the dot keeps it on the line it follows, never leading a line
const LIST_SEP = ' · ';

// Real spaces between inline parts so extracted text never runs words together
const Sep = () => (
  <>
    {' '}
    <span className="cv-meta-sep" aria-hidden="true">·</span>{' '}
  </>
);

const CVPage = () => {
  const { openContact } = useContact();

  // Injected by scripts/generate-cv-pdf.mjs so the address never ships in the bundle
  const [email, setEmail] = useState(null);
  useEffect(() => {
    setEmail(new URLSearchParams(window.location.search).get('email'));
  }, []);

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
          <div className="cv-id">
            <h1>{cvData.name}</h1>{' '}
            <p className="cv-title">
              {cvData.title}, {city}
            </p>
          </div>
          <p className="cv-meta">
            <a href={cvData.website}>tylerhagan.co.uk</a>
            <Sep />
            <a href={cvData.linkedin}>linkedin.com/in/tylerhagan</a>
            {email && (
              <>
                <Sep />
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

        <section className="cv-section cv-section-experience" aria-label="Experience">
          <h2>Experience</h2>
          {cvData.experience.map((job, i) => (
            <div key={i} className="cv-job">
              <div className="cv-job-head">
                <h3>
                  <span className="cv-job-company">{job.company}</span>{' '}
                  <span className="cv-job-role">{job.role}</span>
                </h3>{' '}
                <p className="cv-job-meta">
                  {job.start} – {job.end}
                  <span className="cv-job-location">, {job.location}</span>
                </p>
              </div>
              <ul className="cv-bullets">
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
                <strong>{e.qualification}</strong>, {e.institution}, {e.period}
              </li>
            ))}
          </ul>
        </section>

        <section className="cv-section" aria-label="Certifications">
          <h2>Certifications</h2>
          <ul className="cv-plain-list">
            {cvData.certifications.map((c, i) => (
              <li key={i}>
                <strong>{c.name}</strong>, {c.issuer}, {c.year}
              </li>
            ))}
          </ul>
        </section>

        <section className="cv-section" aria-label="Skills">
          <h2>Skills</h2>
          <p className="cv-inline-list">{cvData.skills.join(LIST_SEP)}</p>
        </section>

        <section className="cv-section" aria-label="Tools">
          <h2>Tools</h2>
          <p className="cv-inline-list">{cvData.tools.join(LIST_SEP)}</p>
        </section>

        <section className="cv-section" aria-label="Languages">
          <h2>Languages</h2>
          <p className="cv-inline-list">
            {cvData.languages.map((l) => `${l.language} (${l.level})`).join(LIST_SEP)}
          </p>
        </section>

        <section className="cv-section cv-praise" aria-label="Reference">
          <h2>Reference</h2>
          <blockquote>
            <p>“{cvData.praise.quote}”</p>
            <div className="cv-praise-attr">{cvData.praise.attribution}</div>
          </blockquote>
        </section>
      </div>
    </article>
  );
};

export default CVPage;
