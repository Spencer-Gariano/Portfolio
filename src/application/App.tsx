import { router } from '@/application/routes/Router';
import { RouterProvider } from '@tanstack/react-router';
import { ThemeProvider } from './providers/theme/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
