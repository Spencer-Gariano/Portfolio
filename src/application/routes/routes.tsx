import { createRouter } from '@tanstack/react-router';
import { rootRoute } from './root';
import { indexRoute } from './index';

const routeTree = rootRoute.addChildren([indexRoute]);

export const router = createRouter({
  routeTree,
});
