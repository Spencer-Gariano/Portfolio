import { createRoute, lazyRouteComponent } from '@tanstack/react-router';
import { playgroundRoute } from './Playground';
import { withTitle } from '@/lib/Title';

export const usersRoute = createRoute({
  ...withTitle('Users'),
  getParentRoute: () => playgroundRoute,
  path: '/users',
  component: lazyRouteComponent(() => import('@/pages/UsersPage'), 'UsersPage'),
});
