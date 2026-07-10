// Generates the 1200x630 Open Graph share card in the site's spec-sheet
// language. Rendered with the same fonts and tokens as the site itself.
//
// Usage: node scripts/generate-og-card.mjs [output.png]

import { chromium } from 'playwright';
import { resolve } from 'path';

const output = resolve(process.argv[2] || 'public/img/og-card.png');

const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
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
  .mono { font-family: 'JetBrains Mono', monospace; }
  .top {
    position: absolute; top: 64px; left: 72px; right: 72px;
    display: flex; justify-content: space-between; align-items: baseline;
    font-family: 'JetBrains Mono', monospace; font-size: 20px;
  }
  .logo { color: #f2f2f2; font-weight: 500; }
  .logo .dot { color: #0066ff; }
  .ref { color: #5c5c5c; }
  .mid { position: absolute; left: 72px; top: 218px; }
  .name { font-size: 96px; font-weight: 600; letter-spacing: -0.03em; line-height: 1.05; }
  .role {
    font-family: 'JetBrains Mono', monospace; font-size: 26px;
    color: #969696; margin-top: 28px;
  }
  .role .amp { color: #0066ff; }
  .bottom {
    position: absolute; bottom: 64px; left: 72px; right: 72px;
    display: flex; justify-content: space-between; align-items: baseline;
    font-family: 'JetBrains Mono', monospace; font-size: 19px; color: #5c5c5c;
  }
  .rule {
    position: absolute; left: 72px; right: 72px; top: 176px;
    height: 1px; background: rgba(255, 255, 255, 0.14);
  }
</style>
</head>
<body>
  <div class="frame"></div>
  <div class="tick tl"></div><div class="tick tr"></div>
  <div class="tick bl"></div><div class="tick br"></div>
  <div class="top">
    <span class="logo">tyler<span class="dot">.</span>hagan</span>
    <span class="ref">[ th.2026 ]</span>
  </div>
  <div class="rule"></div>
  <div class="mid">
    <div class="name">Tyler Hagan</div>
    <div class="role">product designer <span class="amp">&amp;</span> design engineer</div>
  </div>
  <div class="bottom">
    <span>tylerhagan.co.uk</span>
    <span>berlin, germany</span>
  </div>
</body>
</html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(300);
await page.screenshot({ path: output, type: 'png' });
await browser.close();
console.log(`OG card written to ${output}`);
