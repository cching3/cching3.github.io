import React, { useState } from 'react';
import Card from './Card.jsx';
import '../styles/Projects.css';

function ProjectList() {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Portfolio Strategy Tracker',
      description: 'A tool for tracking portfolio performance and backtesting investment strategies. Features include live portfolio tracking with real-time market data, strategy backtesting with performance metrics, momentum strategy implementation, and an interactive web interface using Streamlit.',
      imageUrl: './assets/images/tracking-portfolio.jpg',
      link: 'https://github.com/cching3/portfolio-strategy-tracker',
      technologies: ['Python', 'Streamlit', 'Financial APIs', 'Data Visualization'],
      category: 'finance'
    },
    {
      id: 2,
      title: 'LLMenu',
      description: 'A full-stack website powered by AI that generates meal suggestions based on available ingredients. The platform is designed to minimize food waste, reduce costs, and promote sustainable cooking practices.',
      imageUrl: '/assets/images/llmenu.png',
      link: 'https://github.com/cching3/llmenu',
      technologies: ['React', 'TypeScript', 'Convex', 'AI Integration'],
      category: 'web'
    },
    {
      id: 3,
      title: 'N-Dimensional Minesweeper',
      description: 'An implementation of Minesweeper in an N-dimensional space. This version supports an arbitrary number of dimensions with recursive digging to reveal neighboring safe squares. Features include interactive gameplay through a command-line interface, victory and defeat conditions, and improved UI with ASCII art.',
      imageUrl: '/assets/images/minesweeper.png',
      link: 'https://github.com/cching3/ndmines',
      technologies: ['Python', 'Algorithm Design', 'N-Dimensional Arrays', 'Command-line Interface'],
      category: 'game'
    },
    {
      id: 6,
      title: 'This Portfolio Website',
      description: 'The website you are currently viewing. Built with React and modern JavaScript to create an interactive and responsive user experience that showcases my skills and projects.',
      imageUrl: '/assets/images/profile2.jpg',
      link: 'https://github.com/cching3/cching3.github.io',
      technologies: ['React', 'JavaScript', 'CSS'],
      category: 'web'
    },
    {
      id: 5,
      title: 'Machine Learning Stock Predictor',
      description: 'A machine learning model that predicts stock price movements using historical data and sentiment analysis from financial news. Implements various ML algorithms to compare prediction accuracy.',
      imageUrl: '/assets/images/tracking-portfolio.jpg',
      link: 'https://github.com/cching3/ml-stock-predictor',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'Natural Language Processing'],
      category: 'finance'
    }
  ];
  
  const categories = ['all', 'web', 'finance', 'game'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <>
      <div className="project-filters">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${filter === category ? 'active' : ''}`}
            onClick={() => setFilter(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
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

      <div className="view-more-container">
        <a href="https://github.com/cching3" className="btn" target="_blank" rel="noopener noreferrer">
          View More on GitHub
        </a>
      </div>
    </>
  );
}

export default ProjectList;