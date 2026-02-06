import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="copyright">© 2026 Tyler Hagan. All rights reserved.</div>
          <ul className="footer-links">
            <li><a href="https://github.com/tylerhagan" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/tylerhagan/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="mailto:tylerhagan@gmail.com">Email</a></li>
            <li><a href="#top">Back to Top</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
