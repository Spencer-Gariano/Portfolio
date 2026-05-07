import { ProjectsPage } from '@/pages/ProjectsPage';
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './Root';
import { routes } from './Routes';

export const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: routes.projects.path,
  component: ProjectsPage,
});
