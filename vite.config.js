import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vercel Web Analytics, production builds only (the script is served by Vercel, not the dev
// server). Auto-tracking is off: App.jsx reports each page view with its route, so client-side
// navigation is counted and case studies group under /work/[id].
const vercelAnalytics = () => ({
  name: 'vercel-analytics',
  apply: 'build',
  transformIndexHtml: () => [
    {
      tag: 'script',
      children: 'window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };',
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
