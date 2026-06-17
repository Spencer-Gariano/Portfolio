import { AboutPage } from '@/pages/AboutPage';
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './Root';
import { withTitle } from '@/lib/Title';

export const aboutRoute = createRoute({
  ...withTitle('About'),
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});
