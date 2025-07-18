import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section className="about-page">
      <div className="container">
        <h1 className="page-title">About Me</h1>
        
        <div className="about-content">
          <div className="about-image">
            <img src="assets/images/profile.jpg" alt="Profile" />
          </div>
          
          <div className="about-text">
            <h2>Who I Am</h2>
            <p>
              Hello! I'm a passionate web developer with a focus on creating beautiful, 
              functional, and user-friendly websites. With a background in design and 
              programming, I bring a unique perspective to every project I work on.
            </p>
            
            <p>
              I specialize in frontend development using modern technologies like React, 
              but I'm also comfortable working with backend technologies to create 
              full-stack applications.
            </p>
            
            <h2>My Journey</h2>
            <p>
              My journey in web development began during my college years when I first 
              discovered the power of HTML and CSS. Since then, I've continuously expanded 
              my skills and knowledge, staying up-to-date with the latest trends and 
              technologies in the industry.
            </p>
            
            <h2>Education</h2>
            <div className="education-item">
              <h3>Bachelor of Science in Computer Science</h3>
              <p>University Name, 2018-2022</p>
            </div>
            
            <h2>Skills</h2>
            <div className="skills-container">
              <div className="skill-category">
                <h3>Languages</h3>
                <ul className="skills-list">
                  <li>Python</li>
                  <li>JavaScript/TypeScript</li>
                  <li>HTML/CSS</li>
                  <li>SQL</li>
                  <li>C++</li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h3>Frameworks & Libraries</h3>
                <ul className="skills-list">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Convex</li>
                  <li>Streamlit</li>
                  <li>TailwindCSS</li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h3>Tools & Technologies</h3>
                <ul className="skills-list">
                  <li>Git/GitHub</li>
                  <li>AWS</li>
                  <li>Docker</li>
                  <li>AI/ML Integration</li>
                  <li>Financial APIs</li>
                </ul>
              </div>
            </div>
            
            <h2>Interests</h2>
            <p>
              When I'm not coding, you can find me hiking in nature, reading books on 
              technology and design, or experimenting with photography. I believe that 
              diverse interests help fuel creativity in my professional work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;