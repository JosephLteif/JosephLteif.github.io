export const THEME_STORAGE_KEY = 'portfolio-theme';

export function getStoredTheme(storage) {
  const theme = storage?.getItem(THEME_STORAGE_KEY);
  return theme === 'light' || theme === 'dark' ? theme : null;
}

export function getInitialTheme({ storage, prefersDark }) {
  return getStoredTheme(storage) ?? (prefersDark ? 'dark' : 'light');
}
