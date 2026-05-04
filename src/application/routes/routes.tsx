import { createRouter } from '@tanstack/react-router';
import { rootRoute } from './Root';
import { indexRoute } from './Index';

const routeTree = rootRoute.addChildren([indexRoute]);

export const router = createRouter({
  routeTree,
});
