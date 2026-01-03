import React from 'react';
import './Header.css'; // Will create this file next

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="#hero" className="site-title">Joseph Lteif</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;