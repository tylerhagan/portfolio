// Post-build: write one HTML file per route with the page's full markup (rendered by React
// via the SSR bundle) and its own title, description, canonical and share tags. Content is
// visible before any JS runs, crawlers and link previews see the right page, and the app
// hydrates the existing markup in the browser (src/main.jsx).
//
//   dist/index.html            /
//   dist/about.html            /about        (served clean via cleanUrls in vercel.json)
//   dist/work/<id>.html        /work/<id>
//   dist/404.html              anything else (noindex)
//   dist/sitemap.xml
//
// Run after `vite build` and `vite build --ssr` (wired into `npm run build`).
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';
import { allRoutes, metaFor, routeKey, SITE_URL } from '../src/utils/routes.js';

const { render: renderApp } = await import(pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href);

const DIST = 'dist';
const template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');

const escape = (value) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Replace a tag's attribute value; fail loudly if the template drifts
const setAttr = (html, tagPattern, attr, value) => {
  const re = new RegExp(`(<${tagPattern}[^>]*?\\s${attr}=")[^"]*(")`);
  if (!re.test(html)) throw new Error(`prerender: no match for <${tagPattern}> in dist/index.html`);
  return html.replace(re, `$1${escape(value)}$2`);
};

const render = ({ title, description, url, image, noindex = false }) => {
  let html = template.replace(/<title>[^<]*<\/title>/, `<title>${escape(title)}</title>`);
  html = setAttr(html, 'meta name="description"', 'content', description);
  html = setAttr(html, 'meta property="og:title"', 'content', title);
  html = setAttr(html, 'meta property="og:description"', 'content', description);
  html = setAttr(html, 'meta name="twitter:title"', 'content', title);
  html = setAttr(html, 'meta name="twitter:description"', 'content', description);
  if (image) {
    html = setAttr(html, 'meta property="og:image"', 'content', image.url);
    html = setAttr(html, 'meta name="twitter:image"', 'content', image.url);
    html = setAttr(html, 'meta property="og:image:alt"', 'content', image.alt);
  }
  if (url) {
    html = setAttr(html, 'meta property="og:url"', 'content', url);
    html = setAttr(html, 'link rel="canonical"', 'href', url);
  }
  if (noindex) {
    html = html
      .replace(/\s*<link rel="canonical"[^>]*>/, '')
      .replace('</title>', '</title>\n    <meta name="robots" content="noindex">');
  }
  return html;
};

const write = (file, html) => {
  const out = path.join(DIST, file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
};

// Case studies share their own card from scripts/generate-og-card.mjs; other pages keep the site card
const cardFor = (page, id, meta) => {
  if (page !== 'project') return null;
  const file = `/img/og/${id}.png`;
  if (!fs.existsSync(path.join(DIST, file))) {
    console.warn(`prerender: no share card for ${id}; run node scripts/generate-og-card.mjs`);
    return null;
  }
  return { url: SITE_URL + file, alt: `${meta.title.replace(' · Tyler Hagan', '')} · case study by Tyler Hagan` };
};

const ROOT = '<div id="root"></div>';
if (!template.includes(ROOT)) throw new Error('prerender: empty #root not found in dist/index.html');
const withBody = (html, page, id = null) =>
  html.replace(ROOT, `<div id="root" data-route="${routeKey({ page, id })}">${renderApp(page, id)}</div>`);

const urls = [];
for (const { page, id } of allRoutes()) {
  const meta = metaFor(page, id);
  const url = SITE_URL + meta.path;
  // Keep the home share title as authored in index.html; other pages use their page title
  const html = page === 'home'
    ? setAttr(setAttr(template, 'meta property="og:url"', 'content', url), 'link rel="canonical"', 'href', url)
    : render({ title: meta.title, description: meta.description, url, image: cardFor(page, id, meta) });
  write(meta.path === '/' ? 'index.html' : `${meta.path.slice(1)}.html`, withBody(html, page, id));
  urls.push(url);
}

const notFound = metaFor('notfound');
write('404.html', withBody(render({ title: notFound.title, description: notFound.description, noindex: true }), 'notfound'));

write(
  'sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((url) => `  <url><loc>${url}</loc></url>`)
    .join('\n')}\n</urlset>\n`
);

console.log(`prerendered ${urls.length} routes + 404.html + sitemap.xml`);
