import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vercel Web Analytics, production builds only (the script is served by Vercel, not the dev
// server). Auto-tracking is off: App.jsx reports each page view with its route, so client-side
// navigation is counted and case studies group under /work/[id].
//
// Opt-out for Tyler's own devices: visit any page with ?notrack once and that browser's views are
// dropped from then on (localStorage flag, no cookie); ?track turns counting back on.
const VA_SNIPPET = `
window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
try {
  var q = new URLSearchParams(location.search);
  if (q.has('notrack')) { localStorage.setItem('va-disable', '1'); console.info('[analytics] this browser is excluded'); }
  if (q.has('track')) { localStorage.removeItem('va-disable'); console.info('[analytics] this browser is counted again'); }
} catch (e) {}
window.va('beforeSend', function (event) {
  try { return localStorage.getItem('va-disable') ? null : event; } catch (e) { return event; }
});`

const vercelAnalytics = () => ({
  name: 'vercel-analytics',
  apply: 'build',
  transformIndexHtml: () => [
    {
      tag: 'script',
      children: VA_SNIPPET,
      injectTo: 'head',
    },
    {
      tag: 'script',
      attrs: { defer: true, src: '/_vercel/insights/script.js', 'data-disable-auto-track': '1' },
      injectTo: 'head',
    },
  ],
})

export default defineConfig({
  plugins: [react(), vercelAnalytics()],
})
