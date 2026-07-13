import test from 'node:test';
import assert from 'node:assert/strict';
import { filterProjects, resolveTerminalCommand } from '../src/portfolioData.js';
import { getInitialTheme, getStoredTheme } from '../src/theme.js';

test('filterProjects returns only projects matching the selected category', () => {
  const projects = [
    { id: 'nightfall', categories: ['Web', 'Games'] },
    { id: 'simcraft', categories: ['Desktop', 'Tools'] },
  ];

  assert.deepEqual(filterProjects(projects, 'Desktop').map(({ id }) => id), ['simcraft']);
  assert.deepEqual(filterProjects(projects, 'All').map(({ id }) => id), ['nightfall', 'simcraft']);
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
