import { createRouter } from '@tanstack/react-router';
import { indexRoute } from './Index';
import { rootRoute } from './Root';
import { aboutRoute } from './About';
import { playgroundRoute } from './playground/Playground';
import { projectsRoute } from './Projects';
import { usersRoute } from './playground/Users';
import { playgroundIndexRoute } from './playground/Index';

const routeTree = rootRoute.addChildren([
  aboutRoute,
  indexRoute,
  playgroundRoute.addChildren([playgroundIndexRoute, usersRoute]),
  projectsRoute,
]);

export const router = createRouter({
  routeTree,
});
