import React from 'react';
import '../styles/Skills.css';

function Skills() {
  const skills = {
    languages: [
      "Python",
      "C++",
      "Java",
      "Julia",
      "TypeScript",
      "JavaScript"
    ],
    backend: [
      "Node.js",
      "Express",
      "REST APIs",
    ],

    frontend: [
      "HTML5",
      "CSS3/SASS",
      "JavaScript",
      "React",
      "Next.js",
      "Vite"
    ],

    cloudTools: [
      "AWS Lambda",
      "S3",
      "API Gateway",
      "Git/GitHub",
      "VS Code",
      "Linux/Ubuntu"
    ],

    design: [
      "Figma",
      "Adobe XD",
      "Canva"
    ],

    other: [
      "PyTorch",
      "Microsoft Copilot",
      "Microsoft Excel",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "OpenAI API",
      "Jupyter Notebook",
    ],
    spokenLanguages: [
      "Cantonese (Proficient)", 
      "English (Proficient)", 
      "Mandarin (Proficient)"
    ],
    interests: [
      "Photography", "Debate", "Museum hopping", 
      "Volleyball", "Piano (Chopin)", "Hiking", 
      "Golden State Warriors", "49ers"
    ]
  };

  return (
    <section id="skills" className="skills-section fade-in">
      <div className="container">
        <h2 className="section-title">Skills & Interests</h2>
        
        <div className="skills-container">
          <div className="skill-category">
            <h3>Languages</h3>
            <div className="skill-tags">
              {skills.languages.map((language, index) => (
                <span key={index} className="skill-tag">{language}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3>Backend</h3>
            <div className="skill-tags">
              {skills.backend.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          

          <div className="skill-category">
            <h3>Frontend</h3>
            <div className="skill-tags">
              {skills.frontend.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3>Cloud & Tools</h3>
            <div className="skill-tags">
              {skills.cloudTools.map((tool, index) => (
                <span key={index} className="skill-tag">{tool}</span>
              ))}
            </div>
          </div>
          
          <div className="skill-category">
            <h3>Design</h3>
            <div className="skill-tags">
              {skills.design.map((tool, index) => (
                <span key={index} className="skill-tag">{tool}</span>
              ))}
            </div>
          </div>
          
          <div className="skill-category">
            <h3>Languages</h3>
            <div className="skill-tags">
              {skills.other.map((item, index) => (
                <span key={index} className="skill-tag">{item}</span>
              ))}
            </div>
          </div>
          
          <div className="skill-category">
            <h3>Spoken Languages</h3>
            <div className="skill-tags">
              {skills.spokenLanguages.map((language, index) => (
                <span key={index} className="skill-tag">{language}</span>
              ))}
            </div>
          </div>
          
          <div className="skill-category">
            <h3>Interests</h3>
            <div className="skill-tags">
              {skills.interests.map((interest, index) => (
                <span key={index} className="skill-tag">{interest}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
