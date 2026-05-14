import type { routeIds } from '@/application/routes/RouteIds';

export type RouteId = (typeof routeIds)[keyof typeof routeIds];

export interface INavigationItem {
  label: string;
  to?: RouteId;
  children?: INavigationItem[];
}
