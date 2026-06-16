import { createRoute, lazyRouteComponent } from '@tanstack/react-router';
import { playgroundRoute } from './Playground';

export const usersRoute = createRoute({
  getParentRoute: () => playgroundRoute,
  path: '/users',
  component: lazyRouteComponent(() => import('@/pages/UsersPage'), 'UsersPage'),
});
