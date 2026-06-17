import { createRoute } from '@tanstack/react-router';
import { rootRoute } from '../Root';
import { PlaygroundLayout } from '@/application/layouts/PlaygroundLayout';
import { withTitle } from '@/lib/Title';

export const playgroundRoute = createRoute({
  ...withTitle('Users'),
  getParentRoute: () => rootRoute,
  path: '/playground',
  component: PlaygroundLayout,
});
