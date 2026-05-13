import { createRoute } from '@tanstack/react-router';
import { rootRoute } from '../Root';
import { PlaygroundLayout } from '@/application/layouts/PlaygroundLayout';
import { routeIds } from '../RouteIds';

export const playgroundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: routeIds.playground,
  component: PlaygroundLayout,
});
