// Generates a smaller WebP copy (<name>.sm.webp, max 800px wide) of every raster image
// in public/img, plus src/utils/imageManifest.json recording both widths. Pages use the
// manifest to build srcset, so the browser picks the small copy for thumbnails and the
// original where it is displayed large or opened in the lightbox. Originals are untouched.
//
// Usage: node scripts/optimise-images.mjs           generate missing copies (run after adding images)
//        node scripts/optimise-images.mjs --check   fail if any image lacks an entry (runs in `npm run build`)
import fs from 'fs';
import path from 'path';

const IMG_DIR = 'public/img';
const MANIFEST = 'src/utils/imageManifest.json';
const SMALL_WIDTH = 800;
const SKIP = new Set(['/img/og-card.png']); // share card: never displayed on the site

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]
  );

const sources = walk(IMG_DIR)
  .map((f) => '/' + path.relative('public', f).split(path.sep).join('/'))
  .filter((src) => /\.(png|jpe?g|webp)$/i.test(src) && !src.endsWith('.sm.webp') && !SKIP.has(src))
  .sort();

const smallPath = (src) => src.replace(/\.[^.]+$/, '.sm.webp');
const manifest = fs.existsSync(MANIFEST) ? JSON.parse(fs.readFileSync(MANIFEST, 'utf8')) : {};

if (process.argv.includes('--check')) {
  const missing = sources.filter(
    (src) => !manifest[src] || (manifest[src].sm && !fs.existsSync(path.join('public', smallPath(src))))
  );
  if (missing.length) {
    console.error(`optimise-images: no small copy for:\n  ${missing.join('\n  ')}\nRun: node scripts/optimise-images.mjs`);
    process.exit(1);
  }
  console.log(`optimise-images: ${sources.length} images checked`);
  process.exit(0);
}

const { default: sharp } = await import('sharp');
let made = 0;
let saved = 0;
for (const src of sources) {
  const file = path.join('public', src);
  const out = path.join('public', smallPath(src));
  const { width } = await sharp(file).metadata();
  if (manifest[src]?.w === width && (!manifest[src].sm || fs.existsSync(out))) continue;

  const buf = await sharp(file).resize({ width: Math.min(width, SMALL_WIDTH), withoutEnlargement: true }).webp({ quality: 80 }).toBuffer();
  const original = fs.statSync(file).size;
  // Only keep a copy that is meaningfully smaller than the original
  if (buf.length < original * 0.85) {
    fs.writeFileSync(out, buf);
    const { width: sm } = await sharp(buf).metadata();
    manifest[src] = { w: width, sm };
    made++;
    saved += original - buf.length;
  } else {
    if (fs.existsSync(out)) fs.unlinkSync(out);
    manifest[src] = { w: width };
  }
}

// Drop entries for images that no longer exist
for (const src of Object.keys(manifest)) if (!sources.includes(src)) delete manifest[src];

fs.writeFileSync(MANIFEST, JSON.stringify(Object.fromEntries(Object.entries(manifest).sort()), null, 2) + '\n');
console.log(`optimise-images: ${made} small copies written, ${Math.round(saved / 1024)} KB lighter at thumbnail size`);
