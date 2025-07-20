import React from 'react';
import ProjectList from '../components/ProjectList.jsx';
import '../styles/Projects.css';

export function Projects() {
  return <ProjectList />;
}

export function ProjectSection() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <ProjectList />
        <div className="view-more-container">
          <a href="#/projects" className="btn btn-secondary">View All Projects</a>
        </div>
      </div>
    </section>
  );
}