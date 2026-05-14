import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './Root';
import { IndexPage } from '@/pages/IndexPage';

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: IndexPage,
});
