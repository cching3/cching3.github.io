import React from 'react';
import '../styles/Experience.css';

function Experience() {
  const experience = [
    {
      id: 1,
      company: "Amazon",
      location: "Seattle, WA",
      position: "Software Development Intern",
      period: "Jun 2025 – Present",
      achievements: [
        "Created a component-based template management service for Amazon emails/SMS, enabling direct editing, saving, versioning, and deployment; reduced engineering dependency and cut ~25 support tickets per day",
        "Developed a front-end interface using React and TypeScript, integrated with a serverless backend using AWS Lambda, API Gateway, DynamoDB, and S3 to manage and store communication templates",
        "Streamlined end-to-end template operations, significantly reducing turnaround time for communications updates and boosting efficiency for both customers and developers"
      ]
    },
    {
      id: 2,
      company: "Learning Seeds, Inc.",
      location: "Boston, MA",
      position: "Software Development Intern",
      period: "Jan 2025",
      achievements: [
        "Built an interactive AI-powered coaching tool using LLMs and NLP, enabling educators address real classroom challenges with personalized, actionable feedback on social, emotional, and academic strategies for children with learning disabilities",
        "Transformed teacher transcripts into structured insights aligned with the learning framework, improving clarity & recommendations",
        "Automated analysis of 1,000+ hours of classroom recordings, cutting manual review time to 2–3 minutes per session"
      ]
    },
    {
      id: 3,
      company: "Kellis Lab, Massachusetts Institute of Technology",
      location: "Cambridge, MA",
      position: "Research Assistant",
      period: "Sep 2024 – Dec 2024",
      achievements: [
        "Devised machine learning models for joint latent embeddings of cellular states and biological descriptions using dimensionality reduction method, and graph neural networks (GNNs)",
        "Built an interactive CPP data visualization tool to streamline analysis and improve accessibility for computational biologists"
      ]
    },
    {
      id: 4,
      company: "Amazon",
      location: "Seattle, WA",
      position: "Software Development Intern",
      period: "Jun 2024 – Aug 2024",
      achievements: [
        "Developed a company-wide office hour scheduler for 150,000+ employees, increasing schedule efficiency by 10% reducing support tickets and saving users 60+ minutes monthly",
        "Analyzed customer reviews and negative feedback of existing scheduler, collaborating with UX Designers and Product Managers to ideate and implement a new design that resolved these issues",
        "Developed front end using React and back end using AWS-native services, ensuring seamless integration with internal infrastructures"
      ]
    },
    {
      id: 5,
      company: "Martin Lab, Massachusetts Institute of Technology",
      location: "Cambridge, MA",
      position: "Research Assistant",
      period: "Sep 2023 – May 2024",
      achievements: [
        "Conducted computational analysis of tissue folding in mouse development; results presented at the 2024 NESDB conference",
        "Utilized Python to automate data analysis processes, increasing efficiency by 30% and effectively handling large datasets"
      ]
    },
    {
      id: 6,
      company: "Weissman Lab, Stanford University School of Medicine",
      location: "Stanford, CA",
      position: "Research Assistant",
      period: "May 2023 – Aug 2023",
      achievements: [
        "Engineered data workflows for analyzing stem cell markers in placental development, aiding research on hematopoietic lineages",
        "Presented scientific findings at California Institute of Regenerative Medicine (CIRM) conference and multiple symposiums"
      ]
    },
    {
      id: 7,
      company: "Galloway Lab, Massachusetts Institute of Technology",
      location: "Cambridge, MA",
      position: "Research Intern",
      period: "Jun 2022 – Jun 2023",
      achievements: [
        "Developed a mechanistic model for an autonomous auxin-based sensing system using Julia, creating efficient algorithms and simulations for gene expression patterns",
        "Presented findings at weekly lab meetings and a regional symposium to engage with other synthetic biologists"
      ]
    }
  ];

  return (
    <section id="experience" className="experience fade-in">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experience.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-content">
                <div className="experience-header">
                  <h3>{exp.position}</h3>
                  <div className="company-info">
                    <span className="company-name">{exp.company}</span>
                    <span className="location">{exp.location}</span>
                  </div>
                  <span className="period">{exp.period}</span>
                </div>
                <ul className="achievements">
                  {exp.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;