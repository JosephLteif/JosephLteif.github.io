import './Experience.css';

const experiences = [
  {
    id: 'murex', company: 'Murex', role: 'Software Engineer', location: 'Lebanon', type: 'Full time · Hybrid', date: 'Jul 2023 – Present',
    summary: 'Optimizing data-heavy engineering systems while strengthening security and internal tooling.',
    description: [
      'Optimized a high-bandwidth coverage system handling TBs of raw data using Spring Batch, reducing processing time by 50%.',
      'Eliminated 100% of critical and major security risks and reduced minor issues by 80% through automated vulnerability scanning in CI/CD.',
      'Built internal engineering tools, modernized interfaces, and migrated legacy systems to improve maintainability and performance.',
      'Collaborated with cross-functional teams to ship features and resolve system bottlenecks.',
    ],
    technologies: ['Java', 'Spring Boot', 'Spring Batch', 'Groovy', 'Angular', 'Postgres', 'MongoDB', 'Splunk', 'Git'],
  },
  {
    id: 'rock-solid', company: 'Rock Solid Group', role: 'Software Engineer', location: 'KSA', type: 'Part time · Remote', date: 'Aug 2022 – Jul 2023',
    summary: 'Built client-facing content and AI tools around media workflows and cloud storage.',
    description: [
      'Engineered a custom CMS using DevExpress and ASP.NET Core so clients could independently manage digital assets.',
      'Developed interfaces for consuming and updating video and image assets through Amazon S3 integration.',
      'Built a web interface for interacting with large language models and client-specific workflows.',
    ],
    technologies: ['.NET Core', 'DevExpress', 'Amazon S3', 'ASP.NET Core', 'LLM API'],
  },
  {
    id: 'codepickles', company: 'Codepickles, SARL', role: 'Software Engineer', location: 'France', type: 'Part time · Remote', date: 'Jun 2021 – Jul 2023',
    summary: 'Delivered cross-platform products and real-time IoT services from mobile UI to backend orchestration.',
    description: [
      'Architected a cross-platform e-commerce and services application with Flutter and .NET Core APIs.',
      'Implemented MQTT communication, device dashboards, remote commands, and Firebase notifications.',
      'Integrated Keycloak authentication and created an orchestrator service for organizing separate services.',
    ],
    technologies: ['Flutter', '.NET Core', 'MQTT', 'Firebase', 'Keycloak', 'Microcontrollers'],
  },
  {
    id: 'tekwin', company: 'Tekwin Digital', role: 'Full Stack Engineer', location: 'Lebanon', type: 'Full time · Office', date: 'Jun 2021 – Sep 2021',
    summary: 'Built cross-platform mobile products, APIs, and animated responsive interfaces.',
    description: [
      'Developed a Flutter application for managing buildings and neighborhoods.',
      'Designed and deployed APIs with STRAPI as a proof of concept.',
      'Created responsive web designs and animated UI components with Bootstrap while maintaining performance.',
    ],
    technologies: ['Flutter', 'STRAPI', 'Bootstrap', 'Web Design', 'Google Maps API'],
  },
];

function Experience() {
  return (
    <section id="experience" className="experience section-shell">
      <div className="experience-content">
        <div className="section-heading">
          <div>
            <p className="section-kicker">How I work</p>
            <h2 className="section-title">Experience that compounds.</h2>
          </div>
          <p className="section-intro">A progression from product delivery to systems thinking, security, and reliable execution.</p>
        </div>
        <div className="timeline-container">
          {experiences.map((experience, index) => (
            <details key={experience.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} open={index === 0}>
              <summary className="timeline-summary">
                <span className="timeline-marker" aria-hidden="true"></span>
                <span className="experience-header">
                  <span className="experience-main-info">
                    <span className="experience-date">{experience.date}</span>
                    <span className="experience-company">{experience.company}</span>
                    <span className="experience-role">{experience.role}</span>
                  </span>
                  <span className="experience-meta">{experience.location} · {experience.type}</span>
                </span>
                <span className="experience-summary">{experience.summary}</span>
                <span className="expand-label"><span className="expand-open">Expand</span><span className="expand-close">Collapse</span></span>
              </summary>
              <div className="timeline-content">
                <ul className="experience-description-list">
                  {experience.description.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <div className="experience-tech" aria-label={`${experience.company} technologies`}>
                  {experience.technologies.map((technology) => <span key={technology} className="tech-pill">{technology}</span>)}
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
