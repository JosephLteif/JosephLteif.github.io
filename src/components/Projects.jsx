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

              <a href="https://nightfall-game-prod.web.app/" target="_blank" rel="noopener noreferrer" className="project-button">
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

        {/* WoW Simulation Tool Project */}
        <div className="project-card reverse-layout">
          <div className="project-content">
            <div className="project-visual">
              <div className="simc-visual" aria-hidden="true">
                <div className="simc-window">
                  <div className="simc-titlebar">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="simc-chart">
                    <span className="simc-bar bar-one"></span>
                    <span className="simc-bar bar-two"></span>
                    <span className="simc-bar bar-three"></span>
                    <span className="simc-bar bar-four"></span>
                  </div>
                  <div className="simc-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-text">
              <h3>WoW Simulation Tool</h3>
              <p className="project-description">
                A local World of Warcraft simulation tool built to test builds, compare gear, and explore performance outcomes
                without depending on a live game client. This project focuses on fast iteration, clear combat analysis, and
                a practical workflow for tuning characters locally.
              </p>

              <div className="project-features">
                <h4>Key Features</h4>
                <ul>
                  <li><strong>Local Sim Runs:</strong> Run combat scenarios on your machine for quick feedback.</li>
                  <li><strong>Build Comparison:</strong> Compare gear, talents, and stat choices across different setups.</li>
                  <li><strong>Readable Output:</strong> Focused reporting that makes performance differences easy to scan.</li>
                  <li><strong>Project Source:</strong> Explore the full codebase and project history on GitHub.</li>
                </ul>
              </div>

              <a
                href="https://github.com/JosephLteif/simcraft"
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Invoice Generator Project */}
        <div className="project-card reverse-layout">
          <div className="project-content">
            <div className="project-visual">
              <div className="invoice-visual">
                <div className="invoice-paper">
                  <div className="invoice-header"></div>
                  <div className="invoice-lines"></div>
                  <div className="invoice-stamp">PDF</div>
                </div>
              </div>
            </div>
            <div className="project-text">
              <h3>Invoice Generator</h3>
              <p className="project-description">
                A secure, self-hosted web application designed for specialized export services.
                Built with <strong>Python</strong> and <strong>Flask</strong>, it prioritizes data privacy by keeping all client and financial data stored in a local <strong>SQLite</strong> database, ensuring complete control and security without relying on third-party cloud services.
              </p>

              <div className="project-features">
                <h4>Key Features</h4>
                <ul>
                  <li><strong>PDF Generation:</strong> Automated, pixel-perfect PDF creation using ReportLab.</li>
                  <li><strong>Secure Data Storage:</strong> All sensitive data is encrypted and stored locally, guaranteeing zero external access or data leaks.</li>
                  <li><strong>VAT Handling:</strong> Dynamic global config for VAT rates and special "0% Export" modes.</li>
                  <li><strong>Legal Compliance:</strong> Automatically includes necessary legal notices for export services.</li>
                </ul>
              </div>

              {/* No live link for desktop app, maybe a github link or disabled button if private */}
              <a href="https://github.com/JosephLteif/Invoice-generator" target="_blank" rel="noopener noreferrer" className="project-button">
                View on GitHub
              </a>
              <span className="project-tag" style={{ marginLeft: '15px' }}>Self-Hosted Web App</span>
            </div>
          </div>
        </div>

        {/* Fitness Progress Project */}
        <div className="project-card">
          <div className="project-content">
            <div className="project-text">
              <h3>Fitness Progress Tracker</h3>
              <p className="project-description">
                A gamified approach to physical improvement. This <strong>Angular</strong> Progressive Web App (PWA) visualizes workout progress as a skill tree,
                making consistency addictive and rewarding.
              </p>

              <div className="project-features">
                <h4>Key Features</h4>
                <ul>
                  <li><strong>Skill Tree Progression:</strong> Unlock new exercises and levels visually, just like an RPG.</li>
                  <li><strong>Muscle Heatmap:</strong> Logic-driven visualization of target muscle groups based on workout history.</li>
                  <li><strong>Interactive Workout Runner:</strong> Real-time guidance through routines with timers and logging.</li>
                  <li><strong>Data Persistence:</strong> Unified state management with Firebase Realtime Database and Authentication.</li>
                </ul>
              </div>

              <a href="https://fitness-progress-app-v1.web.app/" target="_blank" rel="noopener noreferrer" className="project-button">
                View Demo
              </a>
            </div>
            <div className="project-visual">
              <div className="fitness-visual">
                <div className="skill-tree-node root-node"></div>
                <div className="skill-connector left"></div>
                <div className="skill-connector right"></div>
                <div className="skill-tree-node child-left"></div>
                <div className="skill-tree-node child-right"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
