import { createRoute } from '@tanstack/react-router';
import { UsersPage } from '@/pages/UsersPage';
import { playgroundRoute } from './Playground';
import { routeIds } from '../RouteIds';

export const usersRoute = createRoute({
  getParentRoute: () => playgroundRoute,
  path: routeIds.users,
  component: UsersPage,
});
