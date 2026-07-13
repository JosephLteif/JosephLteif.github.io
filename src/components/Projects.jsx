import { useMemo, useState } from 'react';
import { ArrowUpRight, ChevronDown, ExternalLink } from 'lucide-react';
import { filterProjects, PROJECT_FILTERS, projectCatalog } from '../portfolioData';
import './Projects.css';

function ProjectVisual({ visual }) {
  if (visual === 'moon') {
    return (
      <div className="project-visual-art moon-visual" aria-hidden="true">
        <div className="moon"></div>
        <div className="wolf-silhouette"></div>
        <span className="visual-label">PLAY / CONNECT / DEDUCE</span>
      </div>
    );
  }

  if (visual === 'simc') {
    return (
      <div className="project-visual-art simc-visual" aria-hidden="true">
        <div className="simc-window">
          <div className="simc-titlebar"><span></span><span></span><span></span><small>simulation.run</small></div>
          <div className="simc-chart">
            <span className="simc-bar bar-one"></span><span className="simc-bar bar-two"></span>
            <span className="simc-bar bar-three"></span><span className="simc-bar bar-four"></span>
          </div>
          <div className="simc-lines"><span></span><span></span><span></span></div>
        </div>
      </div>
    );
  }

  if (visual === 'invoice') {
    return (
      <div className="project-visual-art invoice-visual" aria-hidden="true">
        <div className="invoice-paper">
          <div className="invoice-header"></div>
          <div className="invoice-lines"></div>
          <div className="invoice-stamp">PDF</div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual-art fitness-visual" aria-hidden="true">
      <div className="skill-tree-node root-node">+</div>
      <div className="skill-connector left"></div><div className="skill-connector right"></div>
      <div className="skill-tree-node child-left">+</div><div className="skill-tree-node child-right">+</div>
      <span className="fitness-label">LEVEL UP</span>
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
                <ProjectVisual visual={project.visual} />
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
