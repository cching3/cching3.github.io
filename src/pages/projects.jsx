import React, { useEffect } from 'react';
import ProjectList from '../components/ProjectList.jsx';
import '../styles/Projects.css';

function ProjectsPage() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = 'Projects | Charis Ching';
  }, []);

  return (
    <div className="projects-page">
      <div className="page-header">
        <div className="container">
          <h1>My Projects</h1>
          <p>Explore my portfolio of work across web development, finance, and more.</p>
        </div>
      </div>
      <div className="container projects-container">
        <ProjectList />
      </div>
    </div>
  );
}

export default ProjectsPage;