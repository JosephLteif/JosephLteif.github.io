import { ArrowDown, ArrowUpRight } from 'lucide-react';
import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero section-shell">
      <div className="hero-content">
        <div className="hero-copy">
          <p className="eyebrow">Software engineer · Lebanon</p>
          <h1 className="hero-title">Hi, I’m Joseph.</h1>
          <p className="hero-summary">I build practical products and playful experiences across web, desktop, and mobile.</p>
          <p className="hero-detail">From local tools to multiplayer games, I like making complicated things easier to use.</p>
          <div className="hero-actions">
            <a href="#projects" className="text-link">Explore my work <ArrowDown size={16} aria-hidden="true" /></a>
            <a href="#contact" className="text-link">Get in touch <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="hero-portrait-wrap">
          <img src="/profile.jpg" alt="Joseph Lteif outdoors" className="profile-pic" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
