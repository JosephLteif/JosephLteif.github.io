import React, { useState } from 'react';
import './Header.css'; // Will create this file next

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
        <ul id="primary-navigation" className={`nav-links ${isNavOpen ? 'expanded' : ''}`}>
          <li onClick={() => setIsNavOpen(false)}><a href="#about">About</a></li>
          <li onClick={() => setIsNavOpen(false)}><a href="#skills">Skills</a></li>
          <li onClick={() => setIsNavOpen(false)}><a href="#experience">Experience</a></li>
          <li onClick={() => setIsNavOpen(false)}><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;