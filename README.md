# tylerhagan.co.uk

Personal portfolio of Tyler Hagan — product designer and front-end engineer, Berlin.

Designed and built from scratch. No frameworks beyond React, no UI libraries, no templates.

## Design

A "spec sheet" direction: monospace-led type system (JetBrains Mono + Inter), hairline rules,
indexed sections (`/work`, `/concepts`, `/toolkit`), and a persistent status bar with live
Berlin time and Last.fm now-playing. Light and dark themes via CSS variables.

## Stack

- **React 18 + Vite** — SPA with clean-path routing (`/about`, `/work/<id>`) and history handling
- **CSS variables** — theming, no preprocessor
- **Last.fm API** — status bar now-playing widget
- **Prerendered heads** — `scripts/prerender-routes.mjs` writes one HTML file per route
  (title, description, canonical, share tags) plus `sitemap.xml` after each build
- Deployed on **Vercel** (`vercel.json`: clean URLs, legacy `?page=` redirects)

## Structure

```
src/
├── App.jsx                # Page switching, history, per-page meta
├── components/            # Navigation, StatusBar, Footer, Lightbox
├── pages/                 # HomePage, AboutPage, ProjectPage
├── styles/globals.css     # Design tokens & theme
└── utils/
    ├── routes.js          # URLs + per-route meta (shared with the prerender script)
    ├── projectsData.js    # Case study content
    ├── lastfm.js          # Last.fm API client
    └── ThemeContext.jsx   # Theme management
```

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/, then prerenders routes, 404.html, sitemap.xml
```

© 2026 Tyler Hagan. Design and content are not licensed for reuse.
