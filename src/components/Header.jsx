import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Moon, Sun } from 'lucide-react';
import { getInitialTheme, THEME_STORAGE_KEY } from '../theme';
import './Header.css';

const navItems = [
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'volunteering', label: 'Volunteering' },
  { id: 'contact', label: 'Contact' },
  { id: 'terminal', label: 'Dev Corner' },
];

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';

    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
    try {
      return getInitialTheme({ storage: window.localStorage, prefersDark });
    } catch {
      return prefersDark ? 'dark' : 'light';
    }
  });
  const menuButtonRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const wasNavOpenRef = useRef(false);

  useEffect(() => {
    const sections = ['hero', ...navItems.map(({ id }) => id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0.1, 0.35, 0.7] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isNavOpen) {
      document.body.style.overflow = '';
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    mobileMenuRef.current?.querySelector('a')?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsNavOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isNavOpen]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    if (wasNavOpenRef.current && !isNavOpen) menuButtonRef.current?.focus();
    wasNavOpenRef.current = isNavOpen;
  }, [isNavOpen]);

  const closeNav = () => setIsNavOpen(false);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      try {
        window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
      } catch {
        // Theme still applies for the current session when storage is unavailable.
      }
      return nextTheme;
    });
  };

  return (
    <header className="header">
      <nav className="navbar" aria-label="Primary navigation">
        <a href="#hero" className="site-title">Joseph Lteif</a>

        <button
          ref={menuButtonRef}
          type="button"
          className="mobile-nav-toggle"
          aria-controls="primary-navigation"
          aria-expanded={isNavOpen}
          aria-label={isNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsNavOpen((isOpen) => !isOpen)}
        >
          <div className={`hamburger ${isNavOpen ? 'open' : ''}`} aria-hidden="true"></div>
        </button>

        {isNavOpen && createPortal(
          <>
            <div className="mobile-nav-backdrop open" onClick={closeNav} aria-hidden="true"></div>
            <ul id="primary-navigation" ref={mobileMenuRef} className="nav-links mobile-nav expanded">
              <li className="mobile-nav-close">
                <button type="button" onClick={closeNav} aria-label="Close menu">
                  <span aria-hidden="true">&larr;</span> Back
                </button>
              </li>
              {navItems.map(({ id, label }) => (
                <li key={id}>
                  <a href={`#${id}`} className={activeSection === id ? 'active' : ''} onClick={closeNav}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </>,
          document.body,
        )}

        <ul className="nav-links desktop-only">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} className={activeSection === id ? 'active' : ''}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
        </button>

      </nav>
    </header>
  );
}

export default Header;
