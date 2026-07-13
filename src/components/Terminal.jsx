import { useEffect, useRef, useState } from 'react';
import { resolveTerminalCommand } from '../portfolioData';
import './Terminal.css';

const quickCommands = ['help', 'projects', 'contact'];

function Terminal() {
  const [history, setHistory] = useState([
    { type: 'output', text: ['Welcome to the developer corner.', "Type 'help' to see what I can show you."] },
  ]);
  const [input, setInput] = useState('');
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [history]);

  const runCommand = (value) => {
    const trimmedValue = value.trim().toLowerCase();
    const result = resolveTerminalCommand(trimmedValue);
    if (!trimmedValue) {
      setHistory((currentHistory) => [...currentHistory, { type: 'input', text: [''] }]);
      return;
    }

    if (result.type === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    setHistory((currentHistory) => [
      ...currentHistory,
      { type: 'input', text: [value] },
      { type: result.type, text: result.text },
    ]);
    setInput('');

    if (result.target) {
      window.setTimeout(() => document.getElementById(result.target)?.scrollIntoView({ behavior: 'smooth' }), 0);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') runCommand(input);
  };

  return (
    <section id="terminal" className="terminal-section section-shell">
      <div className="terminal-content">
        <div className="terminal-heading">
          <div>
            <p className="section-kicker">Optional side quest</p>
            <h2 className="section-title">Developer corner.</h2>
          </div>
          <p className="terminal-subtitle">A small interactive way to explore the portfolio.</p>
        </div>

        <div className="terminal-container">
          <div className="terminal-header">
            <div className="terminal-button red"></div><div className="terminal-button yellow"></div><div className="terminal-button green"></div>
            <span className="terminal-title">joseph@portfolio:~</span>
          </div>
          <div className="terminal-body" ref={bodyRef} onClick={() => inputRef.current?.focus()}>
            {history.map((line, index) => (
              <div key={`${line.type}-${index}`} className={`terminal-line ${line.type}`}>
                {line.type === 'input' && <span className="prompt">joseph@portfolio:~$ </span>}
                {line.text.map((text) => <div key={`${index}-${text}`}>{text}</div>)}
              </div>
            ))}
            <div className="input-line">
              <span className="prompt">joseph@portfolio:~$ </span>
              <input ref={inputRef} id="terminal-input" type="text" value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={handleKeyDown} autoComplete="off" spellCheck="false" aria-label="Terminal command" />
            </div>
          </div>
        </div>
        <div className="terminal-quick-actions" aria-label="Terminal shortcuts">
          {quickCommands.map((command) => <button type="button" key={command} onClick={() => runCommand(command)}>{command}</button>)}
        </div>
      </div>
    </section>
  );
}

export default Terminal;
