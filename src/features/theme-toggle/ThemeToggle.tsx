import { useTheme } from '@/application/providers/theme/ThemeProvider';
import { Button } from '@/components/ui/Button';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      size='icon-sm'
      aria-label='Toggle Theme'
      variant='outline'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <Sun /> : <Moon />}
    </Button>
  );
};
export { ThemeToggle };
