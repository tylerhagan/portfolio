// Generates the downloadable CV PDF from the live /cv page, so the web version
// and the PDF can never drift — one content source (src/utils/cvData.js), two outputs.
//
// The email address is injected here via query param rather than living in the
// bundle; pass it as the second argument. Requires a running dev/preview server
// and Playwright (devDependency; browsers via `npx playwright install chromium`).
//
// Usage: node scripts/generate-cv-pdf.mjs <server-url> <email> [output.pdf]
// e.g.:  node scripts/generate-cv-pdf.mjs http://localhost:5173 tylerhagan@gmail.com

import { chromium } from 'playwright';

const [server, email, output = 'public/tyler-hagan-cv.pdf'] = process.argv.slice(2);
if (!server || !email) {
  console.error('Usage: node scripts/generate-cv-pdf.mjs <server-url> <email> [output.pdf]');
  process.exit(1);
}

const browser = await chromium.launch();
const page = await browser.newPage();
await page.emulateMedia({ media: 'print', colorScheme: 'light' });
// The site defaults to dark theme; print must derive from light-mode variables
await page.addInitScript(() => localStorage.setItem('theme', 'light'));
await page.goto(`${server}/?page=cv&email=${encodeURIComponent(email)}`, {
  waitUntil: 'networkidle'
});
await page.waitForSelector('.cv-page h1');
await page.pdf({
  path: output,
  format: 'A4',
  margin: { top: '18mm', bottom: '18mm', left: '16mm', right: '16mm' },
  printBackground: false
});
await browser.close();
console.log(`CV PDF written to ${output}`);
