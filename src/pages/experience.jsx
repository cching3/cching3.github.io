import React, { useEffect } from 'react';
import Experiences from '../sections/Experience.jsx';
import '../styles/Experience.css';

function ExperiencePage() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = 'Experiences | Charis Ching';
  }, []);

  return (
    <section className="page-container">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">My Experiences</h1>
          <p className="page-subtitle">
            A timeline of my professional journey and accomplishments
          </p>
        </div>
      </div>
      <Experiences />
    </section>
  );
}

export default ExperiencePage;