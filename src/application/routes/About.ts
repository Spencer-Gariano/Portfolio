import { AboutPage } from '@/pages/AboutPage';
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './Root';

export const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});
