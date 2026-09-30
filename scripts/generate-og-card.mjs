// Generates the 1200x630 Open Graph share cards in the site's spec-sheet language,
// rendered with the site's own self-hosted fonts and dark-theme tokens:
//
//   public/img/og-card.png          site-wide card (home, about, cv, colophon)
//   public/img/og/<project-id>.png  one per case study: title, subtitle, headline figure
//
// prerender-routes.mjs points each route's og:image at its card. Re-run after adding a
// case study or changing a title, subtitle or headline in projectsData.js.
//
// Usage: node scripts/generate-og-card.mjs

import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { projectsData } from '../src/utils/projectsData.js';

const fontFace = (family, file) => {
  const data = fs.readFileSync(path.join('public/fonts', file)).toString('base64');
  return `@font-face { font-family: '${family}'; font-weight: 100 900; src: url(data:font/woff2;base64,${data}) format('woff2'); }`;
};
const fontDir = fs.readdirSync('public/fonts');
const FONTS = [
  fontFace('Inter', fontDir.find((f) => /^inter-latin-(?!ext-)/.test(f))),
  fontFace('JetBrains Mono', fontDir.find((f) => /^jetbrains-mono-latin-(?!ext-)/.test(f))),
].join('\n');

const escape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const page = ({ ref, body, footRight = 'berlin, germany', footLeft = 'tylerhagan.co.uk' }) => `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  ${FONTS}
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px;
    background: #0a0a0a; color: #f2f2f2;
    font-family: 'Inter', sans-serif;
    position: relative; overflow: hidden;
  }
  .frame {
    position: absolute; inset: 32px;
    border: 1px solid rgba(255, 255, 255, 0.14);
  }
  .tick { position: absolute; width: 17px; height: 17px; }
  .tick::before, .tick::after { content: ''; position: absolute; background: #6b6b6b; }
  .tick::before { width: 17px; height: 1px; top: 8px; }
  .tick::after { width: 1px; height: 17px; left: 8px; }
  .tick.tl { top: 24px; left: 24px; }
  .tick.tr { top: 24px; right: 24px; }
  .tick.bl { bottom: 24px; left: 24px; }
  .tick.br { bottom: 24px; right: 24px; }
  .top {
    position: absolute; top: 64px; left: 72px; right: 72px;
    display: flex; justify-content: space-between; align-items: baseline;
    font-family: 'JetBrains Mono', monospace; font-size: 20px;
  }
  .logo { color: #f2f2f2; font-weight: 500; }
  .logo .dot { color: #0066ff; }
  .ref { color: #5c5c5c; }
  .rule {
    position: absolute; left: 72px; right: 72px; top: 176px;
    height: 1px; background: rgba(255, 255, 255, 0.14);
  }
  .mid { position: absolute; left: 72px; right: 72px; top: 218px; }
  .name { font-size: 96px; font-weight: 600; letter-spacing: -0.03em; line-height: 1.05; }
  .role {
    font-family: 'JetBrains Mono', monospace; font-size: 26px;
    color: #969696; margin-top: 28px;
  }
  .role .amp { color: #0066ff; }
  .title { font-size: 84px; font-weight: 600; letter-spacing: -0.03em; line-height: 1.05; white-space: nowrap; }
  .sub { font-size: 30px; color: #969696; margin-top: 22px; line-height: 1.3; }
  .headline {
    font-family: 'JetBrains Mono', monospace; font-size: 30px; font-weight: 500;
    color: #3f8cff; margin-top: 30px; white-space: nowrap;
  }
  .bottom {
    position: absolute; bottom: 64px; left: 72px; right: 72px;
    display: flex; justify-content: space-between; align-items: baseline;
    font-family: 'JetBrains Mono', monospace; font-size: 19px; color: #5c5c5c;
  }
</style>
</head>
<body>
  <div class="frame"></div>
  <div class="tick tl"></div><div class="tick tr"></div>
  <div class="tick bl"></div><div class="tick br"></div>
  <div class="top">
    <span class="logo">tyler<span class="dot">.</span>hagan</span>
    <span class="ref">${escape(ref)}</span>
  </div>
  <div class="rule"></div>
  <div class="mid">${body}</div>
  <div class="bottom">
    <span>${escape(footLeft)}</span>
    <span>${escape(footRight)}</span>
  </div>
</body>
</html>`;

const cards = [
  {
    out: 'public/img/og-card.png',
    html: page({
      ref: '[ th.2026 ]',
      body: `<div class="name">Tyler Hagan</div>
    <div class="role">product designer <span class="amp">&amp;</span> design engineer</div>`,
    }),
  },
  ...Object.entries(projectsData).map(([id, p]) => ({
    out: `public/img/og/${id}.png`,
    html: page({
      ref: `/work/${id}`,
      footLeft: `tylerhagan.co.uk/work/${id}`,
      footRight: 'tyler hagan · case study',
      body: `<div class="title">${escape(p.title)}</div>
    <div class="sub">${escape(p.subtitle)}</div>
    ${p.headline ? `<div class="headline">${escape(p.headline)}</div>` : ''}`,
    }),
  })),
];

fs.mkdirSync('public/img/og', { recursive: true });
const browser = await chromium.launch();
const tab = await browser.newPage({ viewport: { width: 1200, height: 630 } });
for (const { out, html } of cards) {
  await tab.setContent(html, { waitUntil: 'load' });
  await tab.evaluate(() => document.fonts.ready);
  // Fail rather than silently render in a fallback font
  const loaded = await tab.evaluate(() => ['600 84px Inter', '500 30px "JetBrains Mono"'].every((f) => document.fonts.check(f, 'Ag')));
  if (!loaded) throw new Error(`fonts did not load for ${out}`);
  // Shrink single-line text that would overflow the frame
  await tab.evaluate(() => {
    for (const el of document.querySelectorAll('.title, .headline')) {
      let size = parseFloat(getComputedStyle(el).fontSize);
      while (el.scrollWidth > el.parentElement.clientWidth && size > 24) el.style.fontSize = `${--size}px`;
    }
  });
  await tab.screenshot({ path: out, type: 'png' });
  console.log(`OG card written to ${out}`);
}
await browser.close();
