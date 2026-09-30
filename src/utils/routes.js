// Single source of truth for URLs and per-route metadata.
// Used by the app (navigation, document titles) and by scripts/prerender-routes.mjs
// (static HTML per route, sitemap), so plain ESM with explicit extensions only.
import { projectsData } from './projectsData.js';

export const SITE_URL = 'https://tylerhagan.co.uk';

const DEFAULT_DESCRIPTION =
  'Tyler Hagan, CRO-trained product designer and front-end engineer based in Berlin. Open to senior and staff product design roles.';

const STATIC_PAGES = {
  home: {
    path: '/',
    title: 'Tyler Hagan · Product Designer',
    description: DEFAULT_DESCRIPTION,
  },
  about: {
    path: '/about',
    title: 'About · Tyler Hagan',
    description:
      'Background, approach and career timeline of Tyler Hagan: 15+ years across product design and front-end engineering, the last eight in residential solar and energy.',
  },
  cv: {
    path: '/cv',
    title: 'CV · Tyler Hagan',
    description:
      'CV of Tyler Hagan, product designer and design engineer in Berlin. Also available as a two-page ATS-safe PDF.',
  },
  colophon: {
    path: '/colophon',
    title: 'Colophon · Tyler Hagan',
    description:
      'How tylerhagan.co.uk is designed and built: the spec-sheet design system, one-source CV pipeline and client-side encrypted case studies.',
  },
};

export const pathFor = (page, id = null) =>
  page === 'project' && id ? `/work/${id}` : STATIC_PAGES[page]?.path ?? '/';

// Resolve a location to { page, id }. Unknown paths resolve to 'notfound'.
// Legacy query links (?page=about, /project?id=x) still resolve; `legacy` flags
// them so the app can swap the URL for the canonical one.
export const parseLocation = ({ pathname, search }) => {
  const params = new URLSearchParams(search);
  const legacyPage = params.get('page');
  const legacyId = params.get('id');

  if (legacyPage === 'project' || (pathname === '/project' && legacyId)) {
    return { page: projectsData[legacyId] ? 'project' : 'notfound', id: legacyId, legacy: true };
  }
  if (legacyPage && STATIC_PAGES[legacyPage]) {
    return { page: legacyPage, id: null, legacy: true };
  }

  const path = pathname.replace(/\/+$/, '') || '/';
  const work = path.match(/^\/work\/([^/]+)$/);
  if (work) {
    const id = decodeURIComponent(work[1]);
    // Leftover ?id= / ?page= from a legacy redirect: flag it so the URL gets cleaned
    const legacy = params.has('id') || params.has('page');
    return { page: projectsData[id] ? 'project' : 'notfound', id, legacy };
  }
  const page = Object.keys(STATIC_PAGES).find((key) => STATIC_PAGES[key].path === path);
  return { page: page ?? 'notfound', id: null };
};

export const metaFor = (page, id = null) => {
  if (page === 'project' && projectsData[id]) {
    const project = projectsData[id];
    return {
      path: pathFor('project', id),
      title: `${project.title} · Tyler Hagan`,
      description: project.summary ?? project.subtitle,
    };
  }
  if (page === 'notfound') {
    return { path: null, title: 'Not found · Tyler Hagan', description: DEFAULT_DESCRIPTION };
  }
  return STATIC_PAGES[page] ?? STATIC_PAGES.home;
};

// Every indexable route, for prerendering and the sitemap
export const allRoutes = () => [
  ...Object.keys(STATIC_PAGES).map((page) => ({ page, id: null })),
  ...Object.keys(projectsData).map((id) => ({ page: 'project', id })),
];

// Identifies which route a prerendered page holds, so the browser only hydrates matching markup
export const routeKey = ({ page, id }) => (page === 'project' ? `project:${id}` : page);

// Plain left-clicks become client-side navigation; modified clicks
// (new tab, new window, download) fall through to the browser.
export const isPlainClick = (e) =>
  e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;
