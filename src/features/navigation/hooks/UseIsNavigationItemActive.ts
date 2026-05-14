import { useLocation } from '@tanstack/react-router';
import { useMemo } from 'react';
import type { INavigationItem } from '../types';

/**
 * Hook to determine when a Navigation route is active or not
 *
 * @param navItem - INavigationItem object to be used in to detect if the nav item or its children is active or not
 */
export function useIsNavigationItemActive(navItem: INavigationItem) {
  const location = useLocation({
    select: (loc) => loc.pathname,
  });

  return useMemo(() => {
    const pathname = location;
    // 1. Direct match
    if (navItem.to && pathname === navItem.to) {
      return true;
    }

    // 2. Child match (section active)
    return (
      navItem.children?.some(
        (child) => child.to && (pathname === child.to || pathname.startsWith(child.to + '/')),
      ) ?? false
    );
  }, [location, navItem]);
}
