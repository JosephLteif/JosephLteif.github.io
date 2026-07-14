import { useMemo, useState } from 'react';
import { ArrowUpRight, ChevronDown, ExternalLink } from 'lucide-react';
import { filterProjects, PROJECT_FILTERS, projectCatalog } from '../portfolioData';
import './Projects.css';

function ProjectVisual({ project }) {
  return (
    <div className="project-visual-art project-logo-visual">
      <img className="project-logo" src={project.media.src} alt={project.media.alt} />
    </div>
  );
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const visibleProjects = useMemo(
    () => filterProjects(projectCatalog, activeFilter),
    [activeFilter],
  );

  return (
    <section id="projects" className="projects section-shell">
      <div className="projects-container">
        <div className="section-heading projects-heading">
          <div>
            <p className="section-kicker">Selected work</p>
            <h2 className="section-title">Products with a point of view.</h2>
          </div>
          <p className="section-intro">A few projects where engineering, product thinking, and visual clarity meet.</p>
        </div>

        <div className="project-filters" role="group" aria-label="Filter projects by category">
          {PROJECT_FILTERS.map((filter) => (
            <button
              type="button"
              key={filter}
              className={activeFilter === filter ? 'filter-button active' : 'filter-button'}
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visibleProjects.map((project) => (
            <article key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
              <div className={`project-visual ${project.visual}-visual-wrap`}>
                <ProjectVisual project={project} />
              </div>
              <div className="project-card-content">
                <div className="project-card-topline">
                  <p className="project-eyebrow">{project.eyebrow}</p>
                  {project.featured && <span className="featured-label">Featured</span>}
                </div>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-impact"><strong>Why it matters:</strong> {project.impact}</p>
                <div className="project-tags" aria-label={`${project.title} technologies`}>
                  {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                </div>
                <details className="project-details">
                  <summary>See what I built <ChevronDown size={16} aria-hidden="true" /></summary>
                  <ul>
                    {project.features.map((feature) => <li key={feature}>{feature}</li>)}
                  </ul>
                </details>
                <a href={project.href} target="_blank" rel="noopener noreferrer" className="project-link">
                  {project.cta} <ExternalLink size={16} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <a href="#contact" className="projects-next-link">Have a project in mind? Let’s talk <ArrowUpRight size={17} aria-hidden="true" /></a>
      </div>
    </section>
  );
}

export default Projects;
