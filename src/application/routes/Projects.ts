import { ProjectsPage } from '@/pages/ProjectsPage';
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './Root';

export const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/projects',
  component: ProjectsPage,
});
