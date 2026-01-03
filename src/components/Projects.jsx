import React from 'react';
import './Projects.css'; // Will create this file next

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Bringing Werewolf to Life: An Online Multiplayer Game (In Development)",
      description: "My passion project! I'm deep in the trenches building a full-stack online multiplayer game based on the thrilling social deduction game Werewolf. This involves crafting a snappy React frontend, a robust Node.js/Express backend, and integrating WebSockets for real-time, seamless gameplay. It's a journey of learning and bringing a favorite game to a new platform!",
      technologies: ["React", "Node.js", "Express.js", "WebSockets", "MongoDB"],
      link: "#", // Placeholder, as it's in development
      github: "#" // Placeholder
    },
    {
      id: 2,
      title: "Murex: Supercharging Data Processing & Security",
      description: "At Murex, I had the opportunity to significantly optimize a high-bandwidth coverage system. By leveraging Spring Batch, I slashed processing time by 50%, enabling real-time visualization of millions of lines of Java/C++ code. I also played a key role in eliminating critical security risks, making our internal tools more robust and reliable.",
      technologies: ["Java", "Spring Batch", "C++", "Sybase", "Postgres"],
      link: "#", // Internal project, no external link
    },
    {
      id: 3,
      title: "Rock Solid Group: Empowering Clients with Custom CMS",
      description: "For Rock Solid Group, I engineered a bespoke Content Management System using DevExpress (.NET Core). This wasn't just about building a tool; it was about empowering clients to independently manage their digital assets, including seamless integration with Amazon S3 for video and image updates. A true testament to tailoring technology to specific business needs!",
      technologies: [".NET Core", "DevExpress", "Amazon S3", "ASP.NET"],
      link: "#", // Internal project, no external link
    },
    {
      id: 4,
      title: "Codepickles: Crafting Engaging Mobile & Backend Experiences",
      description: "At Codepickles, I architected and developed a dynamic cross-platform e-commerce mobile application using Flutter. This included building robust backend web APIs with .NET Core and integrating real-time features like MQTT brokers and Firebase push notifications. It was all about creating smooth, interactive experiences for users!",
      technologies: ["Flutter", ".NET Core", "MQTT", "Firebase", "Keycloak"],
      link: "#", // Internal project, no external link
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <h2 className="section-title">My Creations & Contributions</h2>
        <p className="projects-intro">Here's a selection of projects where I've poured my passion into code, from my personal ventures to impactful professional contributions:</p>
        <div className="project-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-pill">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.link && project.link !== "#" && <a href={project.link} target="_blank" rel="noopener noreferrer" className="button small primary">View Project</a>}
                {project.github && project.github !== "#" && <a href={project.github} target="_blank" rel="noopener noreferrer" className="button small secondary">GitHub</a>}
                {(project.link === "#" || project.github === "#") && <span className="coming-soon">Stay tuned for updates!</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;