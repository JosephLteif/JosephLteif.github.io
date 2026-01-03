import React from 'react';
import { Code, Layers, Wrench, User } from 'lucide-react';
import './Skills.css'; // Will create this file next

const technicalSkills = [
  {
    category: "Languages",
    icon: <Code size={24} />,
    skills: ["Java", "C++", "C#", "Dart", "SQL", "HTML/CSS", "Ant", "Groovy", "Typescript", "Javascript", ".NET Core"]
  },
  {
    category: "Frameworks",
    icon: <Layers size={24} />,
    skills: ["ASP.NET", "Flutter", "Bootstrap", "STRAPI", "AXON Framework", "Angular", "Spring Boot"]
  },
  {
    category: "DevOps & Tools",
    icon: <Wrench size={24} />,
    skills: ["Docker", "Amazon S3", "MQTT", "Firebase", "Keycloak", "Jenkins", "Splunk", "Sybase", "MongoDB", "Postgres", "Perforce", "SVN", "Git"]
  }
];

const softSkills = [
  "Problem Solving",
  "Security First",
  "Adaptability",
  "Collaboration",
  "Time Management",
  "Autonomy",
  "Communication"
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <h2 className="section-title">My Toolkit & Superpowers</h2>
        <p className="skills-intro">Here's a glimpse into the technologies I wield and the qualities that help me bring projects to life:</p>

        <div className="skills-grid">
          {technicalSkills.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.category}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-chip">{skill}</span>
                ))}
              </div>
            </div>
          ))}

          <div className="skill-category soft-skills">
            <div className="category-header">
              <span className="category-icon"><User size={24} /></span>
              <h3>Soft Skills</h3>
            </div>
            <div className="skills-list">
              {softSkills.map((skill, idx) => (
                <span key={idx} className="skill-chip soft-skill-chip">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;