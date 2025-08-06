import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section className="about-page">
      <div className="container">
        <h1 className="page-title">About Me</h1>
        
        <div className="about-content">
          <div className="about-image">
            <img src="assets/images/profile2.jpg" alt="Profile" />
          </div>
          
          <div className="about-text">
            <h2>Who I Am</h2>
            <p>
              Hi! I'm a student studying computer science and engineering at the Massachusetts Institute of Technology. 
              I'm passionate about developing innovative solutions through technology. 
              Through my internships at Amazon and research in computational biology, 
              I've gained valuable experience applying technical skills to solve real-world problems.
            </p>
            
            <p>
              I'm comfortable with full-stack development, having worked on projects that involve both frontend and backend technologies.
              I've also developed several LLM-based applications, exploring the potential of AI to create intelligent and responsive systems.
            </p>
            
            <p>
              Apart from my academic interests, I enjoy hiking, photography, and watching all sports.
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
              <h3>Massachusetts Institute of Technology – Cambridge, MA</h3>
              <p>Bachelor of Science, Computer Science & Engineering</p>
              <p>Expected May 2027</p>
              <p><strong>Relevant courses:</strong> Software Construction, Fundamentals of Programming, Intro to Machine Learning, 
                Intro to Algorithms, Linear Algebra, Math for Computer Science, Differential Equations, 
                Intro to Computer Science Programming in Python</p>
              <p><strong>Honors/Awards:</strong> Amazon Future Engineer Scholar, Lockheed Martin Scholar, 
                Deloitte Foundation SWE Scholar, California Institute for Regenerative Medicine Scholar, 
                National Merit Scholar</p>
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