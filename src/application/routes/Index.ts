import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './Root';
import { IndexPage } from '@/pages/IndexPage';
import { routeIds } from './RouteIds';

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: routeIds.index,
  component: IndexPage,
});
