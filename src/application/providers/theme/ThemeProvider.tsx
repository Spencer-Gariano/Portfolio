import { useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContext';

type Theme = 'light' | 'dark';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const getInitialTheme = (): Theme => {
    const saved = localStorage.getItem('theme') as Theme | null;
    if (saved) return saved;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    return prefersDark ? 'dark' : 'light';
  };
  const [themeState, setThemeState] = useState<Theme>(() => getInitialTheme());

  const applyTheme = (theme: Theme) => {
    const root = document.documentElement;

    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  };

  const setTheme = (theme: Theme) => {
    applyTheme(theme);
    setThemeState(theme);
  };

  useEffect(() => {
    applyTheme(themeState);

    localStorage.setItem('theme', themeState);
  }, [themeState]);

  return (
    <ThemeContext.Provider value={{ theme: themeState, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
