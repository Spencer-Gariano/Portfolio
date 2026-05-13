import { AboutPage } from '@/pages/AboutPage';
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './Root';
import { routeIds } from './RouteIds';

export const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: routeIds.about,
  component: AboutPage,
});
