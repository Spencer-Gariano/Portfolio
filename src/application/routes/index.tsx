import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './root';

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: IndexComponent,
});

function IndexComponent() {
  return <div>Hello World</div>;
}
