import React from 'react';
import './WerewolfGame.css';

function WerewolfGame() {
    return (
        <section id="werewolf-game" className="werewolf-game">
            <div className="werewolf-content">
                <div className="werewolf-text">
                    <h2 className="section-title">Nightfall: A Modern Werewolf Experience</h2>
                    <p className="werewolf-description">
                        Step into the shadows with <strong>Nightfall</strong>, a reimagined online multiplayer adaptation of the classic social deduction game, Werewolf.
                        Built from the ground up to deliver suspense, strategy, and seamless interaction, Nightfall brings the village council to your browser.
                    </p>

                    <div className="werewolf-features">
                        <h3>Key Features</h3>
                        <ul>
                            <li><strong>Real-Time Gameplay:</strong> Powered by firebase realtime database for instant voting, chat, and night actions.</li>
                            <li><strong>Dynamic Roles:</strong> Complex role interactions including the Seer, Doctor, and the classic Werewolf.</li>
                            <li><strong>Responsive Design:</strong> Play on desktop or mobile with a UI that adapts to your device.</li>
                            <li><strong>Lobby System:</strong> Create private rooms for friends or join public lobbies to meet new players.</li>
                        </ul>
                    </div>

                    <a href="https://nightfall-game.web.app/" target="_blank" rel="noopener noreferrer" className="play-button">
                        Play Nightfall Now
                    </a>
                </div>
                <div className="werewolf-visual">
                    {/* Placeholder for game visual - CSS generated graphic or image */}
                    <div className="moon-visual">
                        <div className="moon"></div>
                        <div className="wolf-silhouette"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WerewolfGame;
