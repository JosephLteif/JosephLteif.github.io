import { ArrowUpRight } from 'lucide-react';
import { projectCatalog } from '../portfolioData';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects section-shell">
      <div className="projects-container">
        <div className="section-heading projects-heading">
          <div>
            <p className="section-kicker">A few things I’ve made</p>
            <h2 className="section-title">Selected work</h2>
          </div>
          <p className="section-intro">Useful tools, playful projects, and the engineering that connects them.</p>
        </div>

        <div className="project-list">
          {projectCatalog.map((project) => (
            <article id={`project-${project.id}`} key={project.id} className="project-row">
              <img className="project-logo" src={project.media.src} alt="" loading="lazy" />
              <div className="project-copy">
                <p className="project-eyebrow">{project.eyebrow}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-technology">{project.technologies.join(' · ')}</p>
              </div>
              <a href={project.href} target="_blank" rel="noopener noreferrer" className="project-link">
                {project.cta} <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
