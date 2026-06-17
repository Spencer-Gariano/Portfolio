import { ProjectsPage } from '@/pages/ProjectsPage';
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './Root';
import { withTitle } from '@/lib/Title';

export const projectsRoute = createRoute({
  ...withTitle('Projects'),
  getParentRoute: () => rootRoute,
  path: '/projects',
  component: ProjectsPage,
});
