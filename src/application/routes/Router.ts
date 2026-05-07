import { createRouter } from '@tanstack/react-router';
import { indexRoute } from './Index';
import { rootRoute } from './Root';
import { aboutRoute } from './About';
import { playgroundRoute } from './Playground';
import { projectsRoute } from './Projects';

const routeTree = rootRoute.addChildren([aboutRoute, indexRoute, playgroundRoute, projectsRoute]);

export const router = createRouter({
  routeTree,
});
