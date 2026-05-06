import { Footer } from '@/features/footer/Footer';
import { NavigationBar } from '@/features/navigation/NavigationBar';
import { ThemeToggle } from '@/features/theme-toggle/ThemeToggle';
import { createRootRoute, Outlet } from '@tanstack/react-router';

const RootComponent = () => {
  return (
    <div className='bg-background text-foreground flex min-h-screen flex-col'>
      <header className='border-border bg-background/80 sticky top-0 z-50 border-b backdrop-blur'>
        <div className='mx-auto flex h-16 max-w-6xl items-center justify-between px-4'>
          <NavigationBar />
          <ThemeToggle />
        </div>
      </header>

      <main className='flex-1'>
        <div className='mx-auto max-w-6xl px-4 py-6'>
          <Outlet />
        </div>
      </main>
      <footer className='border-border border-t'>
        <Footer />
      </footer>
    </div>
  );
};

export const rootRoute = createRootRoute({
  component: RootComponent,
});
