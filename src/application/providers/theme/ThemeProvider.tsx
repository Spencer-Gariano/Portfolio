import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>('light');

  const applyTheme = (theme: Theme) => {
    const root = document.documentElement;

    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  };

  const setTheme = (theme: Theme) => {
    applyTheme(theme);
    setThemeState(theme);
  };

  // Initialize theme
  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null;

    if (saved) {
      applyTheme(saved);
      setThemeState(saved);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initial = prefersDark ? 'dark' : 'light';
      applyTheme(initial);
      setThemeState(initial);
    }
  }, []);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within the context of ThemeProvider');
  return ctx;
};

export { ThemeProvider, useTheme };
