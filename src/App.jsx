import { useState, useEffect } from 'react';
import { ThemeProvider } from './utils/ThemeContext';
import { ContactProvider } from './utils/ContactContext';
import ContactModal from './components/ContactModal';
import { parseLocation, pathFor, metaFor, SITE_URL } from './utils/routes';
import Navigation from './components/Navigation';
import StatusBar from './components/StatusBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CVPage from './pages/CVPage';
import ColophonPage from './pages/ColophonPage';
import ProjectPage from './pages/ProjectPage';
import NotFoundPage from './pages/NotFoundPage';
import './styles/fonts.css';
import './styles/globals.css';

// Resolve the current URL, swapping legacy ?page= links for their clean path
const readLocation = () => {
  const route = parseLocation(window.location);
  if (route.legacy && route.page !== 'notfound') {
    const params = new URLSearchParams(window.location.search);
    params.delete('page');
    params.delete('id');
    const rest = params.toString();
    window.history.replaceState(null, '', pathFor(route.page, route.id) + (rest ? `?${rest}` : '') + window.location.hash);
  }
  return route;
};

const setMeta = (selector, attr, value) => {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
};

function App() {
  const [route, setRoute] = useState(readLocation);
  const { page: currentPage, id: projectId } = route;

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => setRoute(readLocation());
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Keep title and share metadata in sync with the current page
  // (the prerendered HTML already carries these for first load)
  useEffect(() => {
    const meta = metaFor(currentPage, projectId);
    document.title = meta.title;
    setMeta('meta[name="description"]', 'content', meta.description);
    if (meta.path) {
      setMeta('link[rel="canonical"]', 'href', SITE_URL + meta.path);
    }
  }, [currentPage, projectId]);

  const handleNavigate = (page, id = null) => {
    setRoute({ page, id });
    window.history.pushState(null, '', pathFor(page, id));

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <ThemeProvider>
      <ContactProvider>
        <div className="app">
          <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
          {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
          {currentPage === 'about' && <AboutPage />}
          {currentPage === 'cv' && <CVPage />}
          {currentPage === 'colophon' && <ColophonPage />}
          {currentPage === 'project' && <ProjectPage projectId={projectId} onNavigate={handleNavigate} />}
          {currentPage === 'notfound' && <NotFoundPage onNavigate={handleNavigate} />}
          <Footer onNavigate={handleNavigate} />
          <StatusBar />
          <ContactModal />
        </div>
      </ContactProvider>
    </ThemeProvider>
  );
}

export default App;
