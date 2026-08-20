import test from 'node:test';
import assert from 'node:assert/strict';
import { builderModes, filterProjects, projectCatalog, resolveTerminalCommand, terminalCommandNames } from '../src/portfolioData.js';
import { getInitialTheme, getStoredTheme } from '../src/theme.js';

test('filterProjects returns only projects matching the selected category', () => {
  const projects = [
    { id: 'nightfall', categories: ['Web', 'Games'] },
    { id: 'simcraft', categories: ['Desktop', 'Tools'] },
  ];

  assert.deepEqual(filterProjects(projects, 'Desktop').map(({ id }) => id), ['simcraft']);
  assert.deepEqual(filterProjects(projects, 'All').map(({ id }) => id), ['nightfall', 'simcraft']);
  assert.deepEqual(filterProjects(projects, 'Games').map(({ id }) => id), ['nightfall']);
});

test('builder modes point to real projects and project case studies have all views', () => {
  const projectIds = new Set(projectCatalog.map(({ id }) => id));

  assert.ok(builderModes.every(({ projectId }) => projectIds.has(projectId)));
  assert.ok(projectCatalog.every(({ story }) => story.challenge && story.build && story.outcome));
});

test('project cards use the real product media assets', () => {
  assert.deepEqual(
    projectCatalog.map(({ id, media }) => [id, media?.src, media?.alt]),
    [
      ['nightfall', '/project-logos/nightfall.png', 'Nightfall wolf and moon logo'],
      ['simcraft', '/project-logos/why-low-dps.png', 'WhyLowDPS app logo'],
      ['invoice', '/project-logos/invoice.svg', 'Invoice Generator logo'],
      ['fitness', '/project-logos/fitness.svg', 'Fitness Progress app icon'],
    ],
  );
});

test('resolveTerminalCommand describes navigation commands', () => {
  assert.deepEqual(resolveTerminalCommand('projects'), {
    type: 'output',
    text: ['Opening the projects section...'],
    target: 'projects',
  });
});

test('resolveTerminalCommand reports unknown commands without a target', () => {
  assert.deepEqual(resolveTerminalCommand('deploy'), {
    type: 'error',
    text: ["Command not found: deploy", "Type 'help' for available commands."],
  });
});

test('terminal exposes the personality commands used by the interactive shortcuts', () => {
  assert.ok(terminalCommandNames.includes('whoami'));
  assert.deepEqual(resolveTerminalCommand('surprise').text, [
    'You found the side quest.',
    'Try the theme toggle, then visit Nightfall when you want a little suspense.',
  ]);
});

test('getStoredTheme only accepts saved light or dark preferences', () => {
  const storage = { getItem: () => 'dark' };
  assert.equal(getStoredTheme(storage), 'dark');
  assert.equal(getStoredTheme({ getItem: () => 'system' }), null);
});

test('getInitialTheme prefers a saved theme and falls back to system preference', () => {
  assert.equal(getInitialTheme({ storage: { getItem: () => 'light' }, prefersDark: true }), 'light');
  assert.equal(getInitialTheme({ storage: { getItem: () => null }, prefersDark: true }), 'dark');
  assert.equal(getInitialTheme({ storage: { getItem: () => null }, prefersDark: false }), 'light');
});
