import React from 'react';
import './Experience.css';

function Experience() {
  const experiences = [
    {
      id: 1,
      company: "Murex",
      role: "Software Engineer",
      location: "Lebanon",
      type: "Full time - Hybrid",
      date: "Jul 2023 - Present",
      description: [
        "Optimized a high-bandwidth coverage system handling TBs of raw data using Spring Batch. Reduced processing time by 50%, enabling real-time visualization of millions of lines of Java/C++ code.",
        "Eliminated 100% of critical/major security risks and reduced minor issues by 80% by integrating automated vulnerability scanning into the CI/CD pipeline.",
        "Built and enhanced internal engineering tools to streamline product life cycle management.",
        "Redesigned and modernized system interfaces, ensuring adherence to the latest design principles and best practices.",
        "Migrated legacy systems to modern architectures, improving maintainability and performance.",
        "Collaborated with cross-functional teams to ensure seamless feature deployment and address system bottlenecks."
      ],
      technologies: ["Java", "Spring Boot", "Spring Batch", "Groovy", "Angular", "Sybase", "Postgres", "MongoDB", "Splunk", "Git", "Axon Framework"],
    },
    {
      id: 2,
      company: "Rock Solid Group",
      role: "Software Engineer",
      location: "KSA",
      type: "Part time - Remotely",
      date: "Aug 2022 - Jul 2023",
      description: [
        "Engineered a custom CMS using DevExpress (ASP.NET Core), enabling clients to independently manage digital assets.",
        "Developed web interfaces for seamless consumption and updating of video/image assets via Amazon S3 integration for construction site monitoring.",
        "Developed a web interface to interact with Large Language Models with custom functionalities tailored to client needs."
      ],
      technologies: [".NET Core", "DevExpress", "Amazon S3", "ASP.NET Core", "LLM API"],
    },
    {
      id: 3,
      company: "Codepickles, SARL",
      role: "Software Engineer",
      location: "France",
      type: "Part time - Remotely",
      date: "Jun 2021 - Jul 2023",
      description: [
        "Architected cross-platform e-commerce and services providing mobile application using Flutter. Built backend web APIs with .NET Core.",
        "Implemented MQTT brokers for real-time app communication with IOT devices.",
        "Built Dashboards to monitor devices performance and dispatch commands remotely.",
        "Integrated Firebase push notifications for real-time updates and Keycloak authentication for secure app functionality.",
        "Created an Orchestrator service to allow organizing and orchestrating separate services."
      ],
      technologies: ["Flutter", ".NET Core", "MQTT", "Firebase", "Keycloak", "ASP.NET Core", "Microcontrollers"],
    },
    {
      id: 4,
      company: "Tekwin Digital",
      role: "Full Stack Engineer",
      location: "Lebanon",
      type: "Full time - Office",
      date: "Jun 2021 - Sep 2021",
      description: [
        "Developed a cross-platform mobile application using Flutter designed at managing buildings and neighborhoods.",
        "Designed and deployed APIs using STRAPI tool as proof of concept of the validity of the tool.",
        "Created educational responsive web designs and UI components using Bootstrap.",
        "Animated a big amount of UI elements to enhance user experience while maintaining performance."
      ],
      technologies: ["Flutter", "STRAPI", "Bootstrap", "Web Design", "Google Maps API"],
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-content">
        <h2 className="section-title">Professional Experience</h2>
        <p className="experience-intro">A timeline of my professional journey covering 2.5+ years of post-graduate experience:</p>
        <div className="experience-grid">
          {experiences.map(exp => (
            <div key={exp.id} className="experience-card">
              <div className="experience-header">
                <div className="experience-main-info">
                  <h3>{exp.company}</h3>
                  <h4 className="experience-role">{exp.role}</h4>
                </div>
                <div className="experience-meta">
                  <span className="experience-date">{exp.date}</span>
                  <span className="experience-location">{exp.location} ({exp.type})</span>
                </div>
              </div>

              <ul className="experience-description-list">
                {exp.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <div className="experience-tech">
                {exp.technologies.map(tech => (
                  <span key={tech} className="tech-pill">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;