import { useState } from 'react';
import { createPortal } from 'react-dom';
import './Header.css';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <a href="#hero" className="site-title">Joseph Lteif</a>
        <button
          className="mobile-nav-toggle"
          aria-controls="primary-navigation"
          aria-expanded={isNavOpen}
          onClick={toggleNav}
        >
          <span className="sr-only">Menu</span>
          <div className={`hamburger ${isNavOpen ? 'open' : ''}`}></div>
        </button>

        {isNavOpen && createPortal(
          <>
            <div
              className={`mobile-nav-backdrop open`}
              onClick={() => setIsNavOpen(false)}
            ></div>

            <ul id="primary-navigation" className={`nav-links expanded`}>
              <li className="mobile-nav-close">
                <button onClick={() => setIsNavOpen(false)} aria-label="Close menu">
                  &larr; Back
                </button>
              </li>
              <li onClick={() => setIsNavOpen(false)}><a href="#skills">Skills</a></li>
              <li onClick={() => setIsNavOpen(false)}><a href="#experience">Experience</a></li>
              <li onClick={() => setIsNavOpen(false)}><a href="#projects">Projects</a></li>
              <li onClick={() => setIsNavOpen(false)}><a href="#volunteering">Volunteering</a></li>
              <li onClick={() => setIsNavOpen(false)}><a href="#terminal">Terminal</a></li>
            </ul>
          </>,
          document.body
        )}

        {/* Desktop Nav (keep in DOM for desktop, hide on mobile via CSS) */}
        <ul className="nav-links desktop-only">
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#volunteering">Volunteering</a></li>
          <li><a href="#terminal">Terminal</a></li>
        </ul>

      </nav>
    </header>
  );
}

export default Header;