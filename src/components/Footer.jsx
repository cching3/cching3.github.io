import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-social">
            <a href="https://github.com/cching3" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/charisching/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Charis Ching. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;