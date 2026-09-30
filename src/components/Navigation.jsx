import { useState, useEffect } from 'react';
import { useTheme } from '../utils/ThemeContext';
import { useContact } from '../utils/ContactContext';
import RouteLink from './RouteLink';
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

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav-content">
        <RouteLink page="home" onNavigate={onNavigate} onClick={closeMenu} className="logo-container">
          <img src={logoSrc} alt="" className="logo-image" aria-hidden="true" />
          <span className="logo-text">tyler<span className="logo-dot">.</span>hagan</span>
        </RouteLink>
        <div className="nav-right">
          <ul id="nav-menu" className={`nav-links${menuOpen ? ' open' : ''}`}>
            <li>
              <RouteLink
                page="home"
                onNavigate={onNavigate}
                onClick={closeMenu}
                className={currentPage === 'home' ? 'active' : ''}
                aria-current={currentPage === 'home' ? 'page' : undefined}
              >
                /work
              </RouteLink>
            </li>
            <li>
              <RouteLink
                page="about"
                onNavigate={onNavigate}
                onClick={closeMenu}
                className={currentPage === 'about' ? 'active' : ''}
                aria-current={currentPage === 'about' ? 'page' : undefined}
              >
                /about
              </RouteLink>
            </li>
            <li>
              <RouteLink
                page="cv"
                onNavigate={onNavigate}
                onClick={closeMenu}
                className={currentPage === 'cv' ? 'active' : ''}
                aria-current={currentPage === 'cv' ? 'page' : undefined}
              >
                /cv
              </RouteLink>
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
