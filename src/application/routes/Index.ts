import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './Root';
import { IndexPage } from '@/pages/IndexPage';
import { withTitle } from '@/lib/Title';

export const indexRoute = createRoute({
  ...withTitle('Home'),
  getParentRoute: () => rootRoute,
  path: '/',
  component: IndexPage,
});
