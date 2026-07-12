import { useState, useEffect } from 'react';
import { useTheme } from '../utils/ThemeContext';
import { useContact } from '../utils/ContactContext';
import './Navigation.css';

const ThemeIcon = ({ theme }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
    {theme === 'light' ? (
      <path d="M7 1 A6 6 0 0 1 7 13 Z" fill="currentColor" />
    ) : (
      <path d="M7 1 A6 6 0 0 0 7 13 Z" fill="currentColor" />
    )}
  </svg>
);

const Navigation = ({ currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { openContact } = useContact();

  const logoSrc = theme === 'dark'
    ? '/img/th-logomark-light.svg'
    : '/img/th-logomark-dark.svg';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile menu on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [menuOpen]);

  // Navigate and close the menu in one step
  const go = (page) => {
    setMenuOpen(false);
    onNavigate(page);
  };

  return (
    <>
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav-content">
        <div className="logo-container" onClick={() => go('home')}>
          <img src={logoSrc} alt="" className="logo-image" aria-hidden="true" />
          <span className="logo-text">tyler<span className="logo-dot">.</span>hagan</span>
        </div>
        <div className="nav-right">
          <ul id="nav-menu" className={`nav-links${menuOpen ? ' open' : ''}`}>
            <li>
              <a
                href="#"
                className={currentPage === 'home' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); go('home'); }}
              >
                /work
              </a>
            </li>
            <li>
              <a
                href="#"
                className={currentPage === 'about' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); go('about'); }}
              >
                /about
              </a>
            </li>
            <li>
              <a
                href="#"
                className={currentPage === 'cv' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); go('cv'); }}
              >
                /cv
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/tylerhagan/" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
                /linkedin<span className="link-ext">↗</span>
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => { e.preventDefault(); setMenuOpen(false); openContact(); }}>/contact</a>
            </li>
          </ul>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            <ThemeIcon theme={theme} />
          </button>
          <button
            className={`nav-toggle${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="nav-menu"
          >
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
          </button>
        </div>
      </div>
    </nav>
    {menuOpen && <div className="nav-scrim" onClick={() => setMenuOpen(false)} aria-hidden="true" />}
    </>
  );
};

export default Navigation;
