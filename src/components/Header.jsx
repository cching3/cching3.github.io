import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <a href="#/">
            Charis Ching's Portfolio
          </a>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            {/* <li className="nav-item"><a href="#/" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="/about.html" className="nav-link">About</a></li>
            <li className="nav-item"><a href="#/experience" className="nav-link">Experience</a></li>
            <li className="nav-item"><a href="#/projects" className="nav-link">Projects</a></li>
            <li className="nav-item"><a href="#/contact" className="nav-link">Contact</a></li> */}
            <li className="nav-item"><a href="#/" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="/#about" className="nav-link">About</a></li>
            <li className="nav-item"><a href="/#experience" className="nav-link">Experience</a></li>
            <li className="nav-item"><a href="/#projects" className="nav-link">Projects</a></li>
            <li className="nav-item"><a href="/#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;