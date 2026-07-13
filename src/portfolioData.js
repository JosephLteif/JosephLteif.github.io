export const PROJECT_FILTERS = ['All', 'Web', 'Desktop', 'Mobile', 'Tools'];

export const projectCatalog = [
  {
    id: 'nightfall',
    title: 'Nightfall',
    eyebrow: 'Multiplayer web game',
    categories: ['Web', 'Games'],
    description: 'A modern online Werewolf experience built around suspense, social deduction, and fast real-time interaction.',
    impact: 'Turns a classic party game into a polished browser experience for friends and public lobbies.',
    technologies: ['React', 'Firebase', 'Real-time UX'],
    features: [
      'Instant voting, chat, and night actions powered by Firebase Realtime Database.',
      'Role interactions for the Seer, Doctor, Werewolf, and other village roles.',
      'Private rooms and public lobbies with responsive desktop and mobile layouts.',
    ],
    href: 'https://nightfall-game-prod.web.app/',
    cta: 'Play Nightfall',
    visual: 'moon',
    featured: true,
  },
  {
    id: 'simcraft',
    title: 'WoW Simulation Tool',
    eyebrow: 'Local desktop application',
    categories: ['Desktop', 'Tools'],
    description: 'A local World of Warcraft simulation workflow for testing builds, comparing gear, and understanding performance outcomes.',
    impact: 'Makes complex combat analysis easier to iterate on, compare, and act on locally.',
    technologies: ['Rust', 'Tauri', 'React'],
    features: [
      'Local simulation runs for quick feedback without relying on a live game client.',
      'Build, gear, and stat comparisons presented in readable reports.',
      'A desktop workflow designed for fast iteration and practical tuning.',
    ],
    href: 'https://github.com/JosephLteif/simcraft',
    cta: 'View on GitHub',
    visual: 'simc',
    featured: true,
  },
  {
    id: 'invoice',
    title: 'Invoice Generator',
    eyebrow: 'Privacy-first business tool',
    categories: ['Web', 'Tools'],
    description: 'A self-hosted invoice workflow for export services, with local data ownership and automated PDF generation.',
    impact: 'Keeps sensitive client and financial data under the operator’s control while simplifying compliant invoicing.',
    technologies: ['Python', 'Flask', 'SQLite'],
    features: [
      'Pixel-perfect PDF generation with ReportLab.',
      'Local storage for sensitive client and financial data.',
      'VAT and export-mode configuration with legal notices.',
    ],
    href: 'https://github.com/JosephLteif/Invoice-generator',
    cta: 'View on GitHub',
    visual: 'invoice',
  },
  {
    id: 'fitness',
    title: 'Fitness Progress Tracker',
    eyebrow: 'Gamified mobile-first PWA',
    categories: ['Web', 'Mobile'],
    description: 'A workout companion that turns consistency into visible progression through skill trees, heatmaps, and guided routines.',
    impact: 'Uses game mechanics to make personal progress easier to understand and more rewarding to maintain.',
    technologies: ['Angular', 'PWA', 'Firebase'],
    features: [
      'Skill-tree progression for exercises and training levels.',
      'Muscle heatmap visualization based on workout history.',
      'Interactive workout runner with timers, logging, and persistence.',
    ],
    href: 'https://fitness-progress-app-v1.web.app/',
    cta: 'View Demo',
    visual: 'fitness',
  },
];

export function filterProjects(projects, filter) {
  if (filter === 'All') return projects;
  return projects.filter((project) => project.categories.includes(filter));
}

const terminalCommands = {
  help: {
    type: 'output',
    text: [
      'Available commands:',
      '  help        - Show this help message',
      '  about       - Learn a bit about me',
      '  skills      - List my technical skills',
      '  experience  - View my professional journey',
      '  projects    - Open my selected work',
      '  contact     - Get my contact info',
      '  clear       - Clear the terminal screen',
    ],
  },
  about: {
    type: 'output',
    text: [
      "Hi! I'm Joseph Lteif.",
      'I build scalable, user-focused products across web, desktop, and mobile platforms.',
      'I enjoy solving complex engineering problems and turning them into clear experiences.',
    ],
  },
  skills: {
    type: 'output',
    text: [
      '--- CORE SKILLS ---',
      'Languages: Java, JavaScript, C++, C#, Dart, Python, SQL',
      'Frontend:  React, Angular, Flutter, Bootstrap, CSS3, HTML5',
      'Backend:   Spring Boot, .NET Core, Node.js',
      'Tools:     Git, Docker, Jenkins, Splunk, Postman',
      'Databases: Sybase, PostgreSQL, MongoDB',
    ],
  },
  experience: {
    type: 'output',
    text: ['Opening the experience section...'],
    target: 'experience',
  },
  projects: {
    type: 'output',
    text: ['Opening the projects section...'],
    target: 'projects',
  },
  contact: {
    type: 'output',
    text: ['Opening the contact section...'],
    target: 'contact',
  },
};

export function resolveTerminalCommand(value) {
  const command = value.trim().toLowerCase();
  if (command === 'clear') return { type: 'clear' };
  if (terminalCommands[command]) return terminalCommands[command];
  return {
    type: 'error',
    text: [`Command not found: ${command}`, "Type 'help' for available commands."],
  };
}
