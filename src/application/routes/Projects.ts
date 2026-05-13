import { ProjectsPage } from '@/pages/ProjectsPage';
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './Root';
import { routeIds } from './RouteIds';

export const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: routeIds.projects,
  component: ProjectsPage,
});
