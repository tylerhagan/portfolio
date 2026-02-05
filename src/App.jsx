import { useState } from 'react';
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

  const handleNavigate = (page, id = null) => {
    setCurrentPage(page);
    setProjectId(id);
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
