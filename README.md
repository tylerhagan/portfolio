# tylerhagan.co.uk

Source for the portfolio of Tyler Hagan, product designer and design engineer in Berlin.

**[tylerhagan.co.uk](https://tylerhagan.co.uk)** · [colophon](https://tylerhagan.co.uk/colophon) · [cv](https://tylerhagan.co.uk/cv)

The site is treated as a product rather than a template: designed and built by hand, two runtime
dependencies (`react`, `react-dom`), about 70 KB of gzipped JavaScript, and no analytics, cookies or
tracking. The [colophon](https://tylerhagan.co.uk/colophon) tells the story; this file covers how
it fits together.

## What's interesting in here

**One-source CV.** [`src/utils/cvData.js`](src/utils/cvData.js) compiles to three outputs: the
`/cv` page, an ATS-safe two-page PDF generated headlessly from that page's print stylesheet, and
schema.org JSON-LD. The web page and the PDF can't drift, and the email address never ships in the
bundle; it's injected only when the PDF is built.

**Encrypted case studies.** Current-employer work is encrypted client-side with AES-256-GCM
(Web Crypto, PBKDF2 key derivation). The repo is public, but only ciphertext is committed:
plaintext lives in the gitignored `content/` folder, and screenshots are inlined into the
encrypted payload as data URIs rather than published as images. The password is shared on request.

**Prerendered route heads.** It's a single-page React app, but every route
(`/about`, `/work/<id>`, …) gets its own HTML file at build time with the right title, description,
canonical URL and share tags. Shared links preview the right page, and every URL is a real,
crawlable address. Routes and their metadata live in one module,
[`src/utils/routes.js`](src/utils/routes.js), used by both the app and the build script.

**Spec-sheet design system.** Monospace-led type (JetBrains Mono with Inter for prose), hairline
rules, indexed sections, one motion curve, and light and dark themes driven by CSS custom
properties acting as the token layer. No UI or CSS library. A live status bar shows the Berlin
clock and Last.fm now-playing.

**Machine-readable by intent.** JSON-LD on the CV, an [`llms.txt`](public/llms.txt) for AI
crawlers, a sitemap, and a note in the console for anyone who inspects.

## Stack

| | |
|---|---|
| App | React 18, Vite 7, client-side routing with real `<a href>` links |
| Styling | Hand-written CSS on custom properties, no preprocessor |
| Contact | Modal form posting to Formspree ([`contactConfig.js`](src/utils/contactConfig.js)) |
| Now playing | Last.fm API |
| Tooling | Playwright (dev only) for the CV PDF and share-card scripts |
| Hosting | Vercel, deployed from `main`; [`vercel.json`](vercel.json) sets clean URLs, legacy redirects and asset caching |

## Structure

```
src/
├── App.jsx                  page switching, history, per-page meta
├── components/              Navigation, StatusBar, Footer, ContactModal, Lightbox,
│                            LockedCaseStudy (decrypt + render), RouteLink
├── pages/                   Home, About, CV, Colophon, Project, NotFound
├── styles/globals.css       design tokens and themes
└── utils/
    ├── routes.js            URLs and per-route metadata (shared with the prerender script)
    ├── projectsData.js      case study content
    ├── cvData.js            CV content and JSON-LD
    └── lastfm.js, ThemeContext.jsx, ContactContext.jsx, contactConfig.js

scripts/
├── prerender-routes.mjs     post-build: per-route HTML, 404.html, sitemap.xml
├── generate-cv-pdf.mjs      /cv page → public/tyler-hagan-cv.pdf
├── generate-og-card.mjs     1200×630 share card → public/img/og-card.png
└── encrypt-case-study.mjs   content/*.json → public/data/*.enc.json

public/                      images, CV PDF, encrypted case data, llms.txt, robots.txt
content/                     gitignored: plaintext case studies, CV drafts, screenshots
```

## Running it

Requires Node 20.19 or newer.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # vite build, then prerender routes, 404.html and sitemap.xml into dist/
npm run preview    # serve the production build
```

Pushing to `main` deploys to production on Vercel; other branches get a preview deployment.

### Common changes

- **Add or edit a case study:** add an entry to [`projectsData.js`](src/utils/projectsData.js)
  (its `summary` is used for both the home card and the page's meta description), then add it
  to the `projects` list in [`HomePage.jsx`](src/pages/HomePage.jsx). The route, prerendered HTML
  and sitemap entry come automatically.
- **Update the CV:** edit [`cvData.js`](src/utils/cvData.js), then regenerate the PDF against a
  running dev server:
  `node scripts/generate-cv-pdf.mjs http://localhost:5173 <email>`
- **Re-encrypt a locked case study:**
  `node scripts/encrypt-case-study.mjs content/<name>.content.json public/data/<name>.enc.json <password>`
- **Regenerate the share card:** `node scripts/generate-og-card.mjs`

The Playwright scripts need a browser once: `npx playwright install chromium`.

## Licence

© 2026 Tyler Hagan. The code is here to be read. Design, writing and imagery are not licensed
for reuse.
