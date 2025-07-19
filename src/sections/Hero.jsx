import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-shape shape-1"></div>
        <div className="hero-shape shape-2"></div>
        <div className="hero-shape shape-3"></div>
      </div>
      
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content fade-in">
            <h1 className="hero-title">
              <span className="gradient-text">Welcome!</span>
            </h1>
            <p className="hero-description">
              My name is Charis (pronounced like 'charismatic' without the matic)
            </p>
            <div className="hero-buttons">
              <a href="#experience" className="btn btn-primary">
                <span>My experience</span>
              </a>
              <a href="#projects" className="btn btn-primary">
                <span>View My Projects</span>
                {/* <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
                  {/* <path d="M4.16669 10H15.8334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> */}
                  {/* <path d="M10 4.16669L15.8333 10L10 15.8334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> */}
                {/* </svg> */}
              </a>

              <a href="#contact" className="btn btn-secondary">Contact Me</a>
            </div>
            
            <div className="hero-stats">
              <div className="stat-item">
                {/* <span className="stat-number">5+</span> */}
                {/* <span className="stat-label">Years Experience</span> */}
              </div>
            </div>
          </div>
          
          <div className="hero-image-container fade-in">
            <div className="hero-image">
              
              <div className="placeholder-image">
                <img src="./assets/images/profile.jpg" alt="profile" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;