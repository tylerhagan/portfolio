# Quick Setup Guide

## Installation & Running

```bash
# Navigate to project
cd tyler-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

## What's Included

✅ Complete React application with Vite
✅ Dark/Light mode with theme toggle
✅ Last.fm "Now Playing" widget (with your API key: 619883f4a635293ac404e6c382ebe80e)
✅ Three main pages: Home, About, Project Details
✅ Four complete project case studies with original content
✅ Responsive design
✅ All original images referenced from tylerhagan.co.uk

## Features

### Dark Mode
- Click the sun/moon icon in navigation
- Preference saved to localStorage
- Subtle glows and gradients in dark mode

### Last.fm Widget
- Bottom right corner
- Shows current or last played track
- Collapses when scrolled to bottom
- Can be closed with X button
- Auto-refreshes every 30 seconds

### Navigation
- Home - Main portfolio page with work grid
- About - Background, skills, brands worked with
- Project pages - Detailed case studies for:
  - Offer Tool (with AI usage highlights)
  - Field Service App  
  - Energy Monitoring App
  - Solar Designer

### Content Sections
- Hero with status indicator
- Stats cards
- Work grid with hover effects
- Toolkit & Approach section
- Design Process timeline

## File Structure

```
src/
├── components/         # Reusable components (Nav, Footer, NowPlaying)
├── pages/             # Page components (Home, About, Project)
├── styles/            # Global CSS with theme variables
└── utils/             # Theme context, Last.fm API, project data
```

## Customisation

### Change Colours
Edit `src/styles/globals.css` - look for CSS variables under `:root`

### Add Projects
Edit `src/utils/projectsData.js` - add new project objects

### Modify Content
- Home page: `src/pages/HomePage.jsx`
- About page: `src/pages/AboutPage.jsx`
- Project template: `src/pages/ProjectPage.jsx`

## Building for Production

```bash
npm run build
```

Output will be in `dist/` folder - upload this to your host.

## Deployment Options

**Vercel** (Easiest):
1. Push to GitHub
2. Connect to Vercel
3. Auto-deploys on push

**Traditional Host**:
1. Run `npm run build`
2. Upload contents of `dist` to server

## Need Help?

Check `README.md` for full documentation.
