export const PROJECT_FILTERS = ['All', 'Web', 'Desktop', 'Mobile', 'Tools', 'Games'];

export const builderModes = [
  {
    id: 'systems',
    label: 'Untangle systems',
    kicker: 'Systems mode',
    copy: 'I make data-heavy workflows faster, safer, and easier to reason about.',
    projectId: 'simcraft',
  },
  {
    id: 'products',
    label: 'Craft useful products',
    kicker: 'Product mode',
    copy: 'I turn complicated requirements into calm, responsive experiences people can actually use.',
    projectId: 'invoice',
  },
  {
    id: 'play',
    label: 'Build playful things',
    kicker: 'Play mode',
    copy: 'I leave room for delight too—from real-time games to progress systems that make consistency rewarding.',
    projectId: 'nightfall',
  },
];

export const personalityMoments = [
  {
    label: 'Side quest',
    title: 'Make complex things feel clear',
    text: 'That thread runs through my work, whether I am shaping a product interface or tuning a data workflow.',
  },
  {
    label: 'Play mode',
    title: 'Nightfall is where I let software play',
    text: 'A full real-time Werewolf experience built around suspense, social deduction, and fast interaction.',
  },
  {
    label: 'Grounded by',
    title: 'Years with the Lebanese Red Cross',
    text: 'Service and calm execution under pressure continue to shape how I collaborate and lead.',
  },
  {
    label: 'Working rule',
    title: 'Useful first, delightful when possible',
    text: 'I care about the small details, but only after the underlying experience earns its place.',
  },
];

export const projectCatalog = [
  {
    id: 'nightfall',
    title: 'Nightfall',
    eyebrow: 'Multiplayer web game',
    categories: ['Web', 'Games'],
    description: 'A modern online Werewolf experience built around suspense, social deduction, and fast real-time interaction.',
    impact: 'Turns a classic party game into a polished browser experience for friends and public lobbies.',
    technologies: ['React', 'Firebase', 'Real-time UX'],
    story: {
      challenge: 'Make a social deduction game feel immediate and tense in a browser, across public and private rooms.',
      build: 'Realtime voting, chat, role actions, and responsive lobby flows backed by Firebase.',
      outcome: 'A playable multiplayer experience that turns a familiar party game into a polished online product.',
    },
    features: [
      'Instant voting, chat, and night actions powered by Firebase Realtime Database.',
      'Role interactions for the Seer, Doctor, Werewolf, and other village roles.',
      'Private rooms and public lobbies with responsive desktop and mobile layouts.',
    ],
    href: 'https://nightfall-game-prod.web.app/',
    cta: 'Play Nightfall',
    visual: 'moon',
    media: { src: '/project-logos/nightfall.png', alt: 'Nightfall wolf and moon logo' },
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
    story: {
      challenge: 'Make complex combat analysis easier to iterate on without forcing every decision through a live game client.',
      build: 'A local desktop workflow for simulation runs, build comparisons, gear analysis, and readable reports.',
      outcome: 'A practical feedback loop for understanding performance and making better tuning decisions.',
    },
    features: [
      'Local simulation runs for quick feedback without relying on a live game client.',
      'Build, gear, and stat comparisons presented in readable reports.',
      'A desktop workflow designed for fast iteration and practical tuning.',
    ],
    href: 'https://github.com/JosephLteif/simcraft',
    cta: 'View on GitHub',
    visual: 'simc',
    media: { src: '/project-logos/why-low-dps.png', alt: 'WhyLowDPS app logo' },
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
    story: {
      challenge: 'Simplify invoicing while keeping sensitive client and financial data under the operator’s control.',
      build: 'A self-hosted workflow with local persistence, configurable VAT/export modes, and ReportLab PDF output.',
      outcome: 'A focused business tool that reduces manual work without outsourcing private data to another platform.',
    },
    features: [
      'Pixel-perfect PDF generation with ReportLab.',
      'Local storage for sensitive client and financial data.',
      'VAT and export-mode configuration with legal notices.',
    ],
    href: 'https://github.com/JosephLteif/Invoice-generator',
    cta: 'View on GitHub',
    visual: 'invoice',
    media: { src: '/project-logos/invoice.svg', alt: 'Invoice Generator logo' },
  },
  {
    id: 'fitness',
    title: 'Fitness Progress Tracker',
    eyebrow: 'Gamified mobile-first PWA',
    categories: ['Web', 'Mobile'],
    description: 'A workout companion that turns consistency into visible progression through skill trees, heatmaps, and guided routines.',
    impact: 'Uses game mechanics to make personal progress easier to understand and more rewarding to maintain.',
    technologies: ['Angular', 'PWA', 'Firebase'],
    story: {
      challenge: 'Turn workout consistency into something visible, understandable, and rewarding enough to return to.',
      build: 'Skill trees, muscle heatmaps, guided routines, timers, and persistent workout logging in a mobile-first PWA.',
      outcome: 'A progress companion that makes the next useful action feel obvious.',
    },
    features: [
      'Skill-tree progression for exercises and training levels.',
      'Muscle heatmap visualization based on workout history.',
      'Interactive workout runner with timers, logging, and persistence.',
    ],
    href: 'https://fitness-progress-app-v1.web.app/',
    cta: 'View Demo',
    visual: 'fitness',
    media: { src: '/project-logos/fitness.svg', alt: 'Fitness Progress app icon' },
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
      '  whoami      - Get the short version',
      '  currently   - See what is on my mind',
      '  principles  - Read my working rules',
      '  surprise    - Find a small side quest',
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
  whoami: {
    type: 'output',
    text: [
      'Joseph Lteif — full-stack software engineer from Lebanon.',
      'Builder of useful products, dependable systems, and the occasional side quest.',
    ],
  },
  currently: {
    type: 'output',
    text: [
      'Currently exploring:',
      '  • Better tools for understanding complex systems',
      '  • Product details that make serious workflows feel calmer',
      '  • Small ways to make software more fun to use',
    ],
  },
  principles: {
    type: 'output',
    text: [
      'Working rules:',
      '  1. Make the hard part understandable.',
      '  2. Keep the feedback loop short.',
      '  3. Useful first, delightful when possible.',
    ],
  },
  surprise: {
    type: 'output',
    text: [
      'You found the side quest.',
      'Try the theme toggle, then visit Nightfall when you want a little suspense.',
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

export const terminalCommandNames = Object.keys(terminalCommands);

export function resolveTerminalCommand(value) {
  const command = value.trim().toLowerCase();
  if (command === 'clear') return { type: 'clear' };
  if (terminalCommands[command]) return terminalCommands[command];
  return {
    type: 'error',
    text: [`Command not found: ${command}`, "Type 'help' for available commands."],
  };
}
