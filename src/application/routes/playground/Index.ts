import { createRoute, redirect } from '@tanstack/react-router';
import { routeIds } from '../RouteIds';
import { playgroundRoute } from './Playground';
import { usersRoute } from './Users';

export const playgroundIndexRoute = createRoute({
  getParentRoute: () => playgroundRoute,
  path: routeIds.index,
  component: () => null,
  beforeLoad: () => {
    throw redirect({
      to: usersRoute.to,
    });
  },
});
