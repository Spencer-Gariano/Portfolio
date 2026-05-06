import { router } from '@/application/routes/Routes';
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
