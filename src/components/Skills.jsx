import { Code2, Layers3, ShieldCheck, Wrench } from 'lucide-react';
import './Skills.css';

const capabilities = [
  {
    title: 'Product interfaces',
    icon: <Code2 size={21} aria-hidden="true" />,
    description: 'Clear, responsive experiences that make complex workflows feel approachable.',
    skills: ['React', 'Angular', 'Flutter', 'TypeScript', 'HTML/CSS'],
    link: 'projects',
  },
  {
    title: 'Backend systems',
    icon: <Layers3 size={21} aria-hidden="true" />,
    description: 'Reliable APIs, data workflows, and integrations built for real operational constraints.',
    skills: ['Java', 'Spring Boot', '.NET Core', 'SQL', 'MQTT'],
    link: 'experience',
  },
  {
    title: 'Security & delivery',
    icon: <ShieldCheck size={21} aria-hidden="true" />,
    description: 'Engineering practices that improve confidence from local development to deployment.',
    skills: ['Docker', 'Jenkins', 'Git', 'Keycloak', 'Splunk'],
    link: 'experience',
  },
  {
    title: 'Tools & data',
    icon: <Wrench size={21} aria-hidden="true" />,
    description: 'The practical toolkit behind storage, observability, automation, and iteration.',
    skills: ['Postgres', 'MongoDB', 'Firebase', 'Amazon S3', 'Sybase'],
    link: 'projects',
  },
];

function Skills() {
  return (
    <section id="skills" className="skills section-shell">
      <div className="skills-content">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Capabilities</p>
            <h2 className="section-title">The toolkit behind the work.</h2>
          </div>
          <p className="section-intro">I care less about collecting technologies and more about using the right ones to make a product dependable and useful.</p>
        </div>
        <div className="skills-grid">
          {capabilities.map(({ title, icon, description, skills, link }) => (
            <article key={title} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{icon}</span>
                <h3>{title}</h3>
              </div>
              <p className="skill-description">{description}</p>
              <div className="skills-list" aria-label={`${title} technologies`}>
                {skills.map((skill) => <span key={skill} className="skill-chip">{skill}</span>)}
              </div>
              <a href={`#${link}`} className="skill-link">See it in context <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
