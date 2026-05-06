import { createRootRoute } from '@tanstack/react-router';
import { RootLayout } from '@/application/layouts/RootLayout';

export const rootRoute = createRootRoute({
  component: RootLayout,
});
