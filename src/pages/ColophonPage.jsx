import { useContact } from '../utils/ContactContext';
import './ColophonPage.css';

// The site documented the way a system should be: what it's made of, the
// decisions behind it, and receipts. Everything here is verifiable in the source.

const ColophonPage = () => {
  const { openContact } = useContact();

  return (
    <article className="colophon-page">
      <div className="container">
        <header className="colophon-header">
          <div className="label page-path">/colophon · how this site works</div>
          <h1>Colophon</h1>
          <p className="colophon-intro">
            I treat this site as a product, built with the same approach I bring to
            systems work: one source of truth per artefact, restraint over decoration,
            and the delivery layer owned end to end. Everything below can be checked
            against the{' '}
            <a href="https://github.com/tylerhagan/portfolio" target="_blank" rel="noopener noreferrer">
              source↗
            </a>.
          </p>
        </header>

        <section className="colophon-section">
          <h2>Stack</h2>
          <p>
            React 18 on Vite, deployed to GitHub Pages behind tylerhagan.co.uk. No UI
            framework and no CSS library: the styling is hand-rolled on CSS custom
            properties, which act as the site's token layer and drive both light and
            dark themes from one set of semantic values. Type is set in Inter for prose
            and JetBrains Mono for the spec-sheet chrome.
          </p>
        </section>

        <section className="colophon-section">
          <h2>The CV pipeline</h2>
          <p>
            The CV is a single data module compiled to three outputs: the{' '}
            <a href="/?page=cv">web version</a>, an ATS-safe two-page PDF, and
            schema.org JSON-LD for the parsers recruiters actually run CVs through.
            The PDF is generated headlessly from the web page's print stylesheet, so
            the two can never drift. My email address never ships in the JavaScript
            bundle; it is injected only at PDF build time. This is the same
            one-source philosophy I use for design tokens, applied to a CV.
          </p>
        </section>

        <section className="colophon-section">
          <h2>Locked case studies</h2>
          <p>
            Current employer work needs detail to be worth reading and discretion to be
            fair, so locked case studies are encrypted client-side: AES-256-GCM via the
            Web Crypto API, with the key derived from a password through PBKDF2
            (200,000 iterations, SHA-256). The repo is public, but only ciphertext is
            committed; the plaintext never leaves my machine. Even the screenshots ship
            inside the encrypted payload as data URIs rather than as public images.
            The password is shared on request.
          </p>
        </section>

        <section className="colophon-section">
          <h2>Details</h2>
          <ul className="colophon-list">
            <li>
              The status bar is live: now playing via the Last.fm API, Berlin
              coordinates, and a CET clock.
            </li>
            <li>
              Motion respects prefers-reduced-motion throughout; interactive states use
              focus-visible.
            </li>
            <li>
              Machine-readable by intent: JSON-LD on the CV, an llms.txt for AI
              crawlers, and a note in the console for anyone who inspects.
            </li>
          </ul>
        </section>

        <section className="colophon-section">
          <h2>Receipts</h2>
          <ul className="colophon-list">
            <li>Two runtime dependencies: react and react-dom. Everything else is mine.</li>
            <li>About 70 KB of gzipped JavaScript and 7 KB of CSS for the whole site.</li>
            <li>No analytics, no cookies, no tracking. The only third-party request is the Last.fm status bar.</li>
          </ul>
        </section>

        <section className="colophon-section colophon-signoff">
          <p>
            If you are the kind of person who reads colophons, we should probably{' '}
            <a href="#contact" onClick={(e) => { e.preventDefault(); openContact(); }}>talk</a>.
          </p>
        </section>
      </div>
    </article>
  );
};

export default ColophonPage;
