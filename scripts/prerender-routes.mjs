// Post-build: write one HTML file per route with its own title, description,
// canonical and share tags, so crawlers and link previews (LinkedIn, Slack, iMessage)
// see the right page without running JS. The React app mounts on top as usual.
//
//   dist/index.html            /
//   dist/about.html            /about        (served clean via cleanUrls in vercel.json)
//   dist/work/<id>.html        /work/<id>
//   dist/404.html              anything else (noindex)
//   dist/sitemap.xml
//
// Run after `vite build` (wired into `npm run build`).
import fs from 'fs';
import path from 'path';
import { allRoutes, metaFor, SITE_URL } from '../src/utils/routes.js';

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

const render = ({ title, description, url, noindex = false }) => {
  let html = template.replace(/<title>[^<]*<\/title>/, `<title>${escape(title)}</title>`);
  html = setAttr(html, 'meta name="description"', 'content', description);
  html = setAttr(html, 'meta property="og:title"', 'content', title);
  html = setAttr(html, 'meta property="og:description"', 'content', description);
  html = setAttr(html, 'meta name="twitter:title"', 'content', title);
  html = setAttr(html, 'meta name="twitter:description"', 'content', description);
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

const urls = [];
for (const { page, id } of allRoutes()) {
  const meta = metaFor(page, id);
  const url = SITE_URL + meta.path;
  // Keep the home share title as authored in index.html; other pages use their page title
  const html = page === 'home'
    ? setAttr(setAttr(template, 'meta property="og:url"', 'content', url), 'link rel="canonical"', 'href', url)
    : render({ title: meta.title, description: meta.description, url });
  write(meta.path === '/' ? 'index.html' : `${meta.path.slice(1)}.html`, html);
  urls.push(url);
}

const notFound = metaFor('notfound');
write('404.html', render({ title: notFound.title, description: notFound.description, noindex: true }));

write(
  'sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((url) => `  <url><loc>${url}</loc></url>`)
    .join('\n')}\n</urlset>\n`
);

console.log(`prerendered ${urls.length} routes + 404.html + sitemap.xml`);
