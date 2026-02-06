import { useState, useEffect } from 'react';
import { ThemeProvider } from './utils/ThemeContext';
import Navigation from './components/Navigation';
import NowPlaying from './components/NowPlaying';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import './styles/globals.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [projectId, setProjectId] = useState(null);

  // Initialize from URL on mount
  useEffect(() => {
    const path = window.location.pathname;
    const params = new URLSearchParams(window.location.search);
    
    if (path === '/about' || params.get('page') === 'about') {
      setCurrentPage('about');
    } else if (path === '/project' || params.get('page') === 'project') {
      const id = params.get('id');
      if (id) {
        setCurrentPage('project');
        setProjectId(id);
      }
    } else {
      setCurrentPage('home');
    }
  }, []);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const page = params.get('page') || 'home';
      const id = params.get('id');
      
      setCurrentPage(page);
      if (id) {
        setProjectId(id);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page, id = null) => {
    setCurrentPage(page);
    setProjectId(id);
    
    // Update URL and browser history
    let url = '?page=' + page;
    if (id) {
      url += '&id=' + id;
    }
    window.history.pushState({ page, id }, '', url);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider>
      <div className="app">
        <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'project' && <ProjectPage projectId={projectId} onNavigate={handleNavigate} />}
        <Footer />
        <NowPlaying />
      </div>
    </ThemeProvider>
  );
}

export default App;
