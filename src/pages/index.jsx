import React, { useEffect } from 'react';
import Hero from '../sections/Hero.jsx';
import Projects from '../sections/Projects.jsx';
import Contact from '../sections/Contact.jsx';
import Skills from '../sections/Skills.jsx';
import ExperienceBlurbs from '../sections/ExperienceBlurbs.jsx';

function Home() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = 'Charis Ching | Portfolio';
  }, []);
  return (
    <>
      <Hero />
      <section id="about-preview" className="about-preview">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-preview-content">
            <div className="about-preview-text">
              <p>
                I'm a passionate web developer focused on creating beautiful, 
                functional, and user-friendly websites and applications.
              </p>
              <p>
                With expertise in modern frontend technologies like React and 
                a strong foundation in design principles, I build digital experiences 
                that users love.
              </p>
              <a href="/about" className="btn btn-primary">Learn More About Me</a>
            </div>
          </div>
        </div>
      </section>
      <ExperienceBlurbs />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default Home;