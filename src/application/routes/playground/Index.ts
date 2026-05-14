import { createRoute, redirect } from '@tanstack/react-router';
import { playgroundRoute } from './Playground';
import { usersRoute } from './Users';

export const playgroundIndexRoute = createRoute({
  getParentRoute: () => playgroundRoute,
  path: '/',
  component: () => null,
  beforeLoad: () => {
    throw redirect({
      to: usersRoute.to,
    });
  },
});
