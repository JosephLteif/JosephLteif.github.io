import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>

        {/* Nightfall Project */}
        <div className="project-card">
          <div className="project-content">
            <div className="project-text">
              <h3>Nightfall: A Modern Werewolf Experience</h3>
              <p className="project-description">
                Step into the shadows with <strong>Nightfall</strong>, a reimagined online multiplayer adaptation of the classic social deduction game, Werewolf.
                Built from the ground up to deliver suspense, strategy, and seamless interaction, Nightfall brings the village council to your browser.
              </p>

              <div className="project-features">
                <h4>Key Features</h4>
                <ul>
                  <li><strong>Real-Time Gameplay:</strong> Powered by firebase realtime database for instant voting, chat, and night actions.</li>
                  <li><strong>Dynamic Roles:</strong> Complex role interactions including the Seer, Doctor, and the classic Werewolf.</li>
                  <li><strong>Responsive Design:</strong> Play on desktop or mobile with a UI that adapts to your device.</li>
                  <li><strong>Lobby System:</strong> Create private rooms for friends or join public lobbies to meet new players.</li>
                </ul>
              </div>

              <a href="https://nightfall-game.web.app/" target="_blank" rel="noopener noreferrer" className="project-button">
                Play Nightfall Now
              </a>
            </div>
            <div className="project-visual">
              {/* Artistic CSS-only Visual - Stylized for the theme */}
              <div className="moon-visual">
                <div className="moon"></div>
                <div className="wolf-silhouette"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
