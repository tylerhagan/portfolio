# Portfolio

A modern, React-based portfolio website with dark mode, Last.fm integration, and comprehensive project case studies.

## Features

- **Dark/Light Mode** - Seamless theme switching with localStorage persistence
- **Last.fm Integration** - Real-time "Now Playing" widget showing current or last played track
- **Responsive Design** - Fully responsive across all devices
- **Fast & Modern** - Built with React and Vite for optimal performance
- **Clean Design** - Inspired by AuthKit with subtle animations and gradients
- **Project Case Studies** - Detailed pages for Offer Tool, Field Service, Solar Designer, and Energy Monitoring projects

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS Variables** - For theme management
- **Last.fm API** - Music integration

## Project Structure

```
tyler-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── public/
└── src/
    ├── main.jsx              # Entry point
    ├── App.jsx               # Main app component
    ├── components/
    │   ├── Navigation.jsx     # Nav with theme toggle
    │   ├── Navigation.css
    │   ├── NowPlaying.jsx     # Last.fm widget
    │   ├── NowPlaying.css
    │   ├── Footer.jsx
    │   └── Footer.css
    ├── img/
        └── # img assets
    ├── pages/
    │   ├── HomePage.jsx       # Main landing page
    │   ├── HomePage.css
    │   ├── AboutPage.jsx      # About page
    │   ├── AboutPage.css
    │   ├── ProjectPage.jsx    # Project detail pages
    │   └── ProjectPage.css
    ├── styles/
    │   └── globals.css        # Global styles & theme
    └── utils/
        ├── ThemeContext.jsx   # Theme management
        ├── lastfm.js          # Last.fm API calls
        └── projectsData.js    # Project content data
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd tyler-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimised build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Features in Detail

### Dark Mode

- Toggle button in navigation
- Persists preference to localStorage
- Smooth transitions between themes
- Subtle glows and gradients in dark mode

### Last.fm Widget

- Shows currently playing track or last played
- Collapses when scrolled to bottom of page
- Closeable by user
- Updates every 30 seconds
- Links to Last.fm track page

### Navigation

- Fixed header with blur backdrop
- Active page indicators
- Smooth scroll to top on page change
- Responsive mobile menu

### Projects

Four detailed case studies:
- **Offer Tool** - Enterprise sales software with AI integration
- **Field Service** - Mobile app for technicians
- **Solar Designer** - Premium design tool with Salesforce integration
- **Energy Monitoring** - Customer-facing solar monitoring app

## Customisation

### Colours

Edit colour variables in `src/styles/globals.css`:

```css
:root {
    --blue: #0066ff;  /* Primary colour */
    /* ... other colours */
}
```

### Last.fm

Edit `src/utils/lastfm.js`:

```javascript
const LASTFM_API_KEY = 'your-api-key';
const LASTFM_USER = 'your-username';
```

### Project Content

Edit project data in `src/utils/projectsData.js` to add or modify projects.

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Deploy automatically

### Other Hosts

Build the project and upload the `dist` folder contents.

## Performance

- Lighthouse score: 95+
- First Contentful Paint: <1s
- Time to Interactive: <2s

## Credits

- Design: Tyler Hagan
- Development: Built with React + Vite
- Music data: Last.fm API
- Fonts: Inter, JetBrains Mono (Google Fonts)

## License

© 2026 Tyler Hagan. All rights reserved.
