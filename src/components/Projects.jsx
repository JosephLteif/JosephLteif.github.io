import { useMemo, useState } from 'react';
import { ArrowUpRight, ChevronDown, ExternalLink } from 'lucide-react';
import { filterProjects, personalityMoments, PROJECT_FILTERS, projectCatalog } from '../portfolioData';
import './Projects.css';

function ProjectVisual({ project }) {
  const [activeVisual, setActiveVisual] = useState('visual');
  const [activeFrame, setActiveFrame] = useState(0);
  const frames = project.media.gallery?.length ? project.media.gallery : [project.media];

  return (
    <div className="project-visual-art">
      {activeVisual === 'notes' ? (
        <div className="project-visual-notes">
          <span className="visual-notes-label">BUILD SNAPSHOT</span>
          <strong>{project.story.build}</strong>
          <div className="visual-notes-line"><span></span><span></span><span></span></div>
          <small>{project.technologies.join(' · ')}</small>
        </div>
      ) : (
        <div className="project-visual-frame">
          <img className="project-logo" src={frames[activeFrame].src} alt={frames[activeFrame].alt} loading="lazy" />
          <span>{frames[activeFrame].label ?? 'Project visual'}</span>
        </div>
      )}
      <div className="project-visual-controls" role="group" aria-label={`${project.title} visual options`}>
        {frames.map((frame, index) => (
          <button
            type="button"
            key={`${frame.src}-${index}`}
            aria-pressed={activeVisual === 'visual' && activeFrame === index}
            className={activeVisual === 'visual' && activeFrame === index ? 'visual-control active' : 'visual-control'}
            onClick={() => { setActiveFrame(index); setActiveVisual('visual'); }}
          >
            {frame.label ?? (frames.length > 1 ? `View ${index + 1}` : 'Visual')}
          </button>
        ))}
        <button
          type="button"
          aria-pressed={activeVisual === 'notes'}
          className={activeVisual === 'notes' ? 'visual-control active' : 'visual-control'}
          onClick={() => setActiveVisual('notes')}
        >
          Build notes
        </button>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  const [activeStory, setActiveStory] = useState('overview');
  const storyModes = [
    { id: 'overview', label: 'Overview', text: project.description },
    { id: 'challenge', label: 'Challenge', text: project.story.challenge },
    { id: 'build', label: 'Build', text: project.story.build },
    { id: 'outcome', label: 'Outcome', text: project.story.outcome },
  ];
  const activeStoryText = storyModes.find(({ id }) => id === activeStory)?.text ?? project.description;

  return (
    <article id={`project-${project.id}`} className={`project-card ${project.featured ? 'featured' : ''}`}>
      <div className={`project-visual ${project.visual}-visual-wrap`}>
        <ProjectVisual project={project} />
      </div>
      <div className="project-card-content">
        <div className="project-card-topline">
          <p className="project-eyebrow">{project.eyebrow}</p>
          {project.featured && <span className="featured-label">Featured</span>}
        </div>
        <h3>{project.title}</h3>
        <div className="project-story-switcher" role="group" aria-label={`${project.title} case study views`}>
          {storyModes.map(({ id, label }) => (
            <button
              type="button"
              key={id}
              aria-pressed={activeStory === id}
              className={activeStory === id ? 'story-tab active' : 'story-tab'}
              onClick={() => setActiveStory(id)}
            >
              {label}
            </button>
          ))}
        </div>
        <p className="project-description project-story-text" aria-live="polite">{activeStoryText}</p>
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
          {visibleProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>

        <div className="personality-strip">
          <div className="personality-heading">
            <p className="section-kicker">A little more Joseph</p>
            <h3>Useful first. Delightful when possible.</h3>
          </div>
          <div className="personality-grid">
            {personalityMoments.map((moment) => (
              <article key={moment.label} className="personality-card">
                <span>{moment.label}</span>
                <h4>{moment.title}</h4>
                <p>{moment.text}</p>
              </article>
            ))}
          </div>
        </div>

        <a href="#contact" className="projects-next-link">Have a project in mind? Let’s talk <ArrowUpRight size={17} aria-hidden="true" /></a>
      </div>
    </section>
  );
}

export default Projects;
