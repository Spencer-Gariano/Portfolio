import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './Root';
import { IndexPage } from '@/pages/IndexPage';

//The index route to be used in Routes.tsx
export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: IndexPage,
});
