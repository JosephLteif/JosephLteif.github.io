import { ArrowDown, ArrowUpRight, Download, Mail } from 'lucide-react';
import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content reveal-on-load">
        <div className="hero-copy">
          <p className="eyebrow">Full-stack software engineer · Lebanon</p>
          <h1 className="hero-title">I build useful products with thoughtful engineering.</h1>
          <p className="hero-summary">
            I work across web, desktop, and mobile applications—from high-bandwidth systems and security tooling to playful products like Nightfall.
          </p>
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
        <div className="hero-portrait-wrap">
          <div className="hero-orbit orbit-one" aria-hidden="true"></div>
          <div className="hero-orbit orbit-two" aria-hidden="true"></div>
          <img
            src="https://lh3.googleusercontent.com/a/ACg8ocKk6PYy_I4GK2BeVe0t72pVwpga1w_eZ_gx_vboNRB1ZI4usI3R=s288-c-no"
            alt="Joseph Lteif"
            className="profile-pic"
            onError={(event) => { event.currentTarget.src = '/logo.png'; }}
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
