import { createRouter } from '@tanstack/react-router';
import { indexRoute } from './Index';
import { rootRoute } from './Root';

const routeTree = rootRoute.addChildren([indexRoute]);

export const router = createRouter({
  routeTree,
});
