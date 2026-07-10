import './Footer.css';

const Footer = ({ onNavigate }) => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-colophon">
            <span>© 2026 Tyler Hagan</span>
            <span className="footer-sep">·</span>
            <span>designed & built by me</span>
            <span className="footer-sep">·</span>
            <a
              href="/colophon"
              className="footer-source"
              onClick={(e) => { e.preventDefault(); onNavigate('colophon'); }}
            >
              colophon
            </a>
            <span className="footer-sep">·</span>
            <a href="https://github.com/tylerhagan/portfolio" target="_blank" rel="noopener noreferrer" className="footer-source">source↗</a>
          </div>
          <a href="#top" className="footer-top">back to top ↑</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
