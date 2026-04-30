import { createRootRoute, Outlet } from '@tanstack/react-router';

export const rootRoute = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div>
      <header>My App</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
