import React, { useEffect } from 'react';
import Hero from '../sections/Hero.jsx';
import { ProjectSection } from '../sections/Projects.jsx';
import Contact from '../sections/Contact.jsx';
import Skills from '../sections/Skills.jsx';
import ExperienceBlurbs from '../sections/ExperienceBlurbs.jsx';
import '../styles/AboutPreview.css';

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
                 Hi! I'm a rising junior studying computer science and engineering at the Massachusetts Institute of Technology (MIT). 
                 I'm passionate about developing innovative solutions through technology. 
                 Through my internships at Amazon and research in computational biology, 
                 I've gained valuable experience applying technical skills to solve real-world problems.

              </p>
              <p>
                Apart from my academic interests, I enjoy hiking, photography, and watching all sports.
              </p>
              
              <h3>EDUCATION</h3>
              <p>
                <strong>Massachusetts Institute of Technology – Cambridge, MA</strong> <span className="education-date">Expected May 2027</span><br />
                Bachelor of Science, Computer Science & Engineering
              </p>
              <p>
                <strong>Relevant courses:</strong> Software Construction, Fundamentals of Programming, Intro to Machine Learning, 
                Intro to Algorithms, Linear Algebra, Math for Computer Science, Differential Equations, 
                Intro to Computer Science Programming in Python
              </p>
              <p>
                <strong>Honors/Awards:</strong> Amazon Future Engineer Scholar, Lockheed Martin Scholar, 
                Deloitte Foundation SWE Scholar, California Institute for Regenerative Medicine Scholar, 
                National Merit Scholar
              </p>
              <a href="/#/about" className="btn btn-primary">Learn More About Me</a>
            </div>
          </div>
        </div>
      </section>
      <ExperienceBlurbs />
      <ProjectSection />
      <Skills />
      <Contact />
    </>
  );
}

export default Home;