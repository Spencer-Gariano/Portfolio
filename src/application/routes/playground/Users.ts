import { createRoute } from '@tanstack/react-router';
import { UsersPage } from '@/pages/UsersPage';
import { playgroundRoute } from './Playground';

export const usersRoute = createRoute({
  getParentRoute: () => playgroundRoute,
  path: '/users',
  component: UsersPage,
});
