import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-colophon">
            <span>© 2026 Tyler Hagan</span>
            <span className="footer-sep">·</span>
            <span>built with react + vite, set in jetbrains mono & inter</span>
          </div>
          <a href="#top" className="footer-top">back to top ↑</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
