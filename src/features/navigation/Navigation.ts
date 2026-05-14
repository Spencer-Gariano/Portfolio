import { routeIds } from '@/application/routes/RouteIds';
import type { INavigationItem } from './types';

export const navigationArray: INavigationItem[] = [
  {
    label: 'Home',
    to: routeIds.index,
  },
  {
    label: 'About',
    to: routeIds.about,
  },
  {
    label: 'Projects',
    to: routeIds.projects,
  },
  {
    label: 'Playground',
    to: routeIds.playground,
    children: [
      {
        label: 'Users',
        to: routeIds.playgroundUsers,
      },
    ],
  },
] as const;
