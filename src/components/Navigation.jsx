import { useState, useEffect } from 'react';
import { useTheme } from '../utils/ThemeContext';
import './Navigation.css';

const Navigation = ({ currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoSrc = theme === 'dark' 
    ? '/img/th-logomark-light.svg'
    : '/img/th-logomark-dark.svg';

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav-content">
        <div className="logo-container" onClick={() => onNavigate('home')}>
          <img src={logoSrc} alt="Tyler Hagan" className="logo-image" />
          <span className="logo-text">Tyler Hagan</span>
        </div>
        <div className="nav-right">
          <ul className="nav-links">
            <li>
              <a 
                href="#" 
                className={currentPage === 'home' ? 'active' : ''} 
                onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
              >
                Work
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className={currentPage === 'about' ? 'active' : ''} 
                onClick={(e) => { e.preventDefault(); onNavigate('about'); }}
              >
                About
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/tylerhagan/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="tylerhagan@gmail.com">Contact</a>
            </li>
          </ul>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
