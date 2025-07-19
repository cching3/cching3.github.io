import React from 'react';
import '../styles/ExperienceBlurbs.css';

function ExperienceBlurbs() {
  const experience = [
    {
      id: 1,
      company: "Amazon",
      position: "Software Development Intern",
      period: "Jun 2025 – Present",
      description: "Created a component-based template management service for Amazon emails/SMS, enabling direct editing, saving, versioning, and deployment."
    },
    {
      id: 2,
      company: "Learning Seeds, Inc.",
      position: "Software Development Intern",
      period: "Jan 2025",
      description: "Built an interactive AI-powered coaching tool using LLMs and NLP for educators to address classroom challenges with personalized feedback."
    },
    {
      id: 3,
      company: "Kellis Lab, MIT",
      position: "Research Assistant",
      period: "Sep 2024 – Dec 2024",
      description: "Devised machine learning models for joint latent embeddings of cellular states and biological descriptions."
    },
    {
      id: 4,
      company: "Amazon",
      position: "Software Development Intern",
      period: "Jun 2024 – Aug 2024",
      description: "Developed a company-wide office hour scheduler for 150,000+ employees, increasing schedule efficiency by 10%."
    },
    {
      id: 5,
      company: "Martin Lab, MIT",
      position: "Research Assistant",
      period: "Sep 2023 – May 2024",
      description: "Conducted computational analysis of tissue folding in mouse development; results presented at the 2024 NESDB conference."
    }
  ];

  return (
    <section id="experience" className="experience-blurbs fade-in">
      <div className="container">
        <h2 className="section-title">Experience Highlights</h2>
        <div className="blurbs-container">
          {experience.map(exp => (
            <div key={exp.id} className="experience-blurb">
              <div className="blurb-header">
                <h3>{exp.position}</h3>
                <div className="blurb-subheader">
                  <span className="company">{exp.company}</span>
                  <span className="period">{exp.period}</span>
                </div>
              </div>
              <p className="blurb-description">{exp.description}</p>
            </div>
          ))}
        </div>
        {/* <div className="experience-cta">
          <a href="/experience" className="btn btn-secondary">View Full Experience</a>
        </div> */}
      </div>
    </section>
  );
}

export default ExperienceBlurbs;