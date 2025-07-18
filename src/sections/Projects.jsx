import React from 'react';
import Card from '../components/Card.jsx';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Portfolio Strategy Tracker',
      description: 'A tool for tracking portfolio performance and backtesting investment strategies. Features include live portfolio tracking with real-time market data, strategy backtesting with performance metrics, momentum strategy implementation, and an interactive web interface using Streamlit.',
      imageUrl: '/assets/images/project1.jpg',
      link: 'https://github.com/cching3/portfolio-strategy-tracker',
      technologies: ['Python', 'Streamlit', 'Financial APIs', 'Data Visualization']
    },
    {
      id: 2,
      title: 'LLMenu',
      description: 'A full-stack website powered by AI that generates meal suggestions based on available ingredients. The platform is designed to minimize food waste, reduce costs, and promote sustainable cooking practices.',
      imageUrl: '/assets/images/llmenu.jpg',
      link: 'https://github.com/cching3/llmenu',
      technologies: ['React', 'TypeScript', 'Convex', 'AI Integration']
    },
    {
      id: 3,
      title: 'N-Dimensional Minesweeper',
      description: 'An implementation of Minesweeper in an N-dimensional space. This version supports an arbitrary number of dimensions with recursive digging to reveal neighboring safe squares. Features include interactive gameplay through a command-line interface, victory and defeat conditions, and improved UI with ASCII art.',
      imageUrl: '/assets/images/minesweeper.jpg',
      link: 'https://github.com/cching3/ndmines',
      technologies: ['Python', 'Algorithm Design', 'N-Dimensional Arrays', 'Command-line Interface']
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <Card
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              link={project.link}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;