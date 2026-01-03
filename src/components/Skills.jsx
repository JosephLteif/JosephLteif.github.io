import React from 'react';
import './Skills.css'; // Will create this file next

function Skills() {
  const technicalSkills = {
    languages: "Java, C++, C#, Dart, SQL, HTML/CSS, Ant, Groovy, Typescript, Javascript, .NET Core",
    frameworks: "ASP.NET, Flutter, Bootstrap, STRAPI, AXON Framework, Angular, Spring Boot",
    devopsTools: "Docker, Amazon S3, MQTT, Firebase, Keycloak, Jenkins, Splunk, Sybase, MongoDB, Postgres, Perforce, SVN, Git"
  };

  const softSkills = "Beyond just coding, I bring a thoughtful approach to every project: adept at problem-solving, always prioritizing security, adaptable to new challenges, a strong collaborator in cross-functional teams, and highly effective with time management and autonomy.";

  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <h2 className="section-title">My Toolkit & Superpowers</h2>
        <p className="skills-intro">Here's a glimpse into the technologies I wield and the qualities that help me bring projects to life:</p>

        <div className="skill-category">
          <h3>Languages I Speak (Code, that is!)</h3>
          <p>{technicalSkills.languages}</p>
        </div>

        <div className="skill-category">
          <h3>Frameworks & Libraries (My Construction Crew)</h3>
          <p>{technicalSkills.frameworks}</p>
        </div>

        <div className="skill-category">
          <h3>DevOps & Tools (My Workshop Essentials)</h3>
          <p>{technicalSkills.devopsTools}</p>
        </div>

        <div className="skill-category">
          <h3>Soft Skills (The Human Element)</h3>
          <p>{softSkills}</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;