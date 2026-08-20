import { useState } from 'react';
import { ArrowDown, ArrowUpRight, Download, Mail } from 'lucide-react';
import { builderModes } from '../portfolioData';
import './Hero.css';

function Hero() {
  const [activeModeId, setActiveModeId] = useState('products');
  const activeMode = builderModes.find((mode) => mode.id === activeModeId) ?? builderModes[0];

  const handlePortraitMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 18;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 18;
    event.currentTarget.style.setProperty('--orbit-x', `${x.toFixed(1)}px`);
    event.currentTarget.style.setProperty('--orbit-y', `${y.toFixed(1)}px`);
  };

  const resetPortrait = (event) => {
    event.currentTarget.style.setProperty('--orbit-x', '0px');
    event.currentTarget.style.setProperty('--orbit-y', '0px');
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content reveal-on-load">
        <div className="hero-copy">
          <p className="eyebrow">Full-stack software engineer · Lebanon</p>
          <h1 className="hero-title">I build useful products with thoughtful engineering.</h1>
          <p className="hero-summary" aria-live="polite">{activeMode.copy}</p>
          <div className="builder-mode" aria-labelledby="builder-mode-title">
            <div className="builder-mode-heading">
              <span id="builder-mode-title">Pick a building mode</span>
              <span className="builder-mode-kicker">{activeMode.kicker}</span>
            </div>
            <div className="builder-mode-options" role="group" aria-label="Choose a building mode">
              {builderModes.map((mode) => (
                <button
                  type="button"
                  key={mode.id}
                  aria-pressed={activeModeId === mode.id}
                  className={activeModeId === mode.id ? 'builder-mode-option active' : 'builder-mode-option'}
                  onClick={() => setActiveModeId(mode.id)}
                >
                  {mode.label}
                </button>
              ))}
            </div>
            <a className="builder-mode-link" href={`#project-${activeMode.projectId}`}>
              See the matching project <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
          <div className="hero-actions">
            <a href="#projects" className="button primary">
              Explore selected work <ArrowDown size={17} aria-hidden="true" />
            </a>
            <a href="mailto:josephlteif@outlook.com" className="button secondary">
              Contact me <Mail size={17} aria-hidden="true" />
            </a>
            <a href="/Joseph_Lteif_Resume_V26.pdf" target="_blank" rel="noopener noreferrer" className="text-link">
              <Download size={16} aria-hidden="true" /> Download CV
            </a>
          </div>
          <div className="hero-proof" aria-label="Highlights">
            <span><strong>4+</strong> years building software</span>
          </div>
        </div>
        <div className="hero-portrait-wrap" onPointerMove={handlePortraitMove} onPointerLeave={resetPortrait}>
          <div className="hero-orbit orbit-one" aria-hidden="true"></div>
          <div className="hero-orbit orbit-two" aria-hidden="true"></div>
          <img
            src="/profile.jpg"
            alt="Joseph Lteif"
            className="profile-pic"
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.src = '/logo.png';
            }}
          />
          <div className="hero-card hero-card-top" aria-hidden="true">
            <span className="status-dot"></span> Building with intent
          </div>
          <div className="hero-card hero-card-bottom" aria-hidden="true">
            Java · Rust · Angular
          </div>
        </div>
      </div>
      <a href="#projects" className="scroll-cue" aria-label="Scroll to selected projects">
        <span>Scroll to explore</span>
        <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </section>
  );
}

export default Hero;
