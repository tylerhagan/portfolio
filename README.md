# tylerhagan.co.uk

Personal portfolio of Tyler Hagan — product designer and front-end engineer, Berlin.

Designed and built from scratch. No frameworks beyond React, no UI libraries, no templates.

## Design

A "spec sheet" direction: monospace-led type system (JetBrains Mono + Inter), hairline rules,
indexed sections (`/work`, `/concepts`, `/toolkit`), and a persistent status bar with live
Berlin time and Last.fm now-playing. Light and dark themes via CSS variables.

## Stack

- **React 18 + Vite** — SPA with query-param routing and history handling
- **CSS variables** — theming, no preprocessor
- **Last.fm API** — status bar now-playing widget
- Deployed on **GitHub Pages** with a custom domain

## Structure

```
src/
├── App.jsx                # Routing, history, document titles
├── components/            # Navigation, StatusBar, Footer, Lightbox
├── pages/                 # HomePage, AboutPage, ProjectPage
├── styles/globals.css     # Design tokens & theme
└── utils/
    ├── projectsData.js    # Case study content
    ├── lastfm.js          # Last.fm API client
    └── ThemeContext.jsx   # Theme management
```

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/ (also emits 404.html for GH Pages)
```

© 2026 Tyler Hagan. Design and content are not licensed for reuse.
