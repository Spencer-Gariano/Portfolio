import { AboutPage } from '@/pages/AboutPage';
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './Root';
import { routes } from './Routes';

export const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: routes.about.path,
  component: AboutPage,
});
