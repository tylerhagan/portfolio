import manifest from './imageManifest.json';

// Responsive <img> props for an image under /img: offers the small WebP copy and the
// original via srcset (see scripts/optimise-images.mjs), so the browser downloads the
// smallest file that is sharp at the displayed size. `sizes` describes that display width.
// Anything without a small copy (data URIs, SVGs, small images) passes through unchanged.
export const responsive = (src, sizes) => {
  const entry = manifest[src];
  if (!entry?.sm) return { src };
  const small = src.replace(/\.[^.]+$/, '.sm.webp');
  return { src: small, srcSet: `${small} ${entry.sm}w, ${src} ${entry.w}w`, sizes };
};

// Display widths, matching the layouts in the page CSS
export const SIZES = {
  workThumb: '(max-width: 768px) 100vw, 300px',
  concept: '(max-width: 768px) 100vw, 400px',
  portrait: '400px',
  projectGrid: '(max-width: 768px) 100vw, 450px',
  projectFull: '(max-width: 960px) 100vw, 900px',
};
