import { router } from '@/application/routes/Router';
import { RouterProvider } from '@tanstack/react-router';
import { ThemeProvider } from './providers/theme/ThemeProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
