import React from 'react';
import './Footer.css'; // Will create this file next

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Joseph Lteif. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/joseph-lteif/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/JosephLteif" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:josephlteif@outlook.com">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;