import { PlaygroundPage } from '@/pages/PlaygroundPage';
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './Root';
import { routes } from './Routes';

export const playgroundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: routes.playground.path,
  component: PlaygroundPage,
});
