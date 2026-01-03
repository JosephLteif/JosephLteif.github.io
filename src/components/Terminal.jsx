import React, { useState, useEffect, useRef } from 'react';
import './Terminal.css';

const COMMANDS = {
    help: [
        "Available commands:",
        "  help        - Show this help message",
        "  about       - Learn a bit about me",
        "  skills      - List my technical skills",
        "  experience  - View my professional journey",
        "  projects    - See what I've built",
        "  contact     - Get my contact info",
        "  clear       - Clear the terminal screen"
    ],
    about: [
        "Hi! I'm Joseph Lteif.",
        "I am a passionate Software Engineer focused on building scalable, user-centric applications.",
        "I love solving complex problems, whether it's optimizing high-bandwidth systems or crafting pixel-perfect UIs."
    ],
    skills: [
        "--- CORE SKILLS ---",
        "Languages: Java, JavaScript, C++, C#, Dart, Python, SQL",
        "Frontend:  React, Angular, Flutter, Bootstrap, CSS3, HTML5",
        "Backend:   Spring Boot, .NET Core, Node.js",
        "Tools:     Git, Docker, Jenkins, Splunk, Postman",
        "Databases: Sybase, PostgreSQL, MongoDB"
    ],
    experience: [
        "--- PROFESSIONAL TIMELINE ---",
        "2023 - Pres. | Murex (Software Engineer) - Optimizing high-bandwidth systems.",
        "2022 - 2023  | Rock Solid Group (Software Engineer) - Built custom CMS & Web Interfaces.",
        "2021 - 2023  | Codepickles (Software Engineer) - Flutter Apps & IoT Integration.",
        "2021 - 2021  | Tekwin Digital (Full Stack Engineer) - Mobile & Web Development."
    ],
    projects: [
        "To view my projects, please scroll up to the 'Projects' section!",
        "Tip: You can visually explore them there."
    ],
    contact: [
        "--- GET IN TOUCH ---",
        "Email:    josephlteif@outlook.com",
        "LinkedIn: linkedin.com/in/joseph-lteif",
        "GitHub:   github.com/JosephLteif",
        "Feel free to reach out for collaborations or just to say hi!"
    ],
    clear: "CLEAR_ACTION",
};

function Terminal() {
    const [history, setHistory] = useState([
        { type: 'output', text: ["Welcome to the interactive portfolio terminal.", "Type 'help' to get started."] }
    ]);
    const [input, setInput] = useState('');
    const bodyRef = useRef(null);

    useEffect(() => {
        if (bodyRef.current) {
            bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
        }
    }, [history]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            const trimmedInput = input.trim().toLowerCase();

            const newHistory = [...history, { type: 'input', text: [input] }];

            if (trimmedInput === 'clear') {
                setHistory([]);
            } else if (COMMANDS[trimmedInput]) {
                newHistory.push({ type: 'output', text: COMMANDS[trimmedInput] });
                setHistory(newHistory);
            } else if (trimmedInput !== '') {
                newHistory.push({ type: 'error', text: [`Command not found: ${trimmedInput}`, "Type 'help' for available commands."] });
                setHistory(newHistory);
            } else {
                setHistory(newHistory);
            }

            setInput('');
        }
    };

    return (
        <section id="terminal" className="terminal-section">
            <div className="terminal-content">
                <h2 className="section-title">Terminal Access</h2>
                <p className="terminal-subtitle">For the developers and CLI enthusiasts 🤓</p>

                <div className="terminal-container">
                    <div className="terminal-header">
                        <div className="terminal-button red"></div>
                        <div className="terminal-button yellow"></div>
                        <div className="terminal-button green"></div>
                        <span className="terminal-title">user@portfolio:~</span>
                    </div>
                    <div
                        className="terminal-body"
                        ref={bodyRef}
                        onClick={() => document.getElementById('terminal-input').focus()}
                    >
                        {history.map((line, index) => (
                            <div key={index} className={`terminal-line ${line.type}`}>
                                {line.type === 'input' && <span className="prompt">user@portfolio:~$ </span>}
                                {Array.isArray(line.text) ? (
                                    line.text.map((t, i) => <div key={i}>{t}</div>)
                                ) : (
                                    <span>{line.text}</span>
                                )}
                            </div>
                        ))}
                        <div className="input-line">
                            <span className="prompt">user@portfolio:~$ </span>
                            <input
                                id="terminal-input"
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                autoComplete="off"
                                spellCheck="false"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Terminal;
