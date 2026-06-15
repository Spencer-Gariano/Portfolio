import { createRoute } from '@tanstack/react-router';
import { rootRoute } from '../Root';
import { PlaygroundLayout } from '@/application/layouts/PlaygroundLayout';

export const playgroundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/playground',
  component: PlaygroundLayout,
});
