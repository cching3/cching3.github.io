import React from 'react';
import '../styles/Card.css';

function Card({ title, description, imageUrl, link, technologies }) {
  return (
    <div className="card">
      {imageUrl && (
        <div className="card-image">
          <img src={imageUrl} alt={title} />
        </div>
      )}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        
        {technologies && technologies.length > 0 && (
          <div className="card-technologies">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        )}
        
        {link && (
          <a href={link} className="card-link" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        )}
      </div>
    </div>
  );
}

export default Card;