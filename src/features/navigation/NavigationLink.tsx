import { Link } from '@tanstack/react-router';
import clsx from 'clsx';
import type { ComponentProps } from 'react';

export type NavigationLinkProps = ComponentProps<typeof Link>;

/**
 * Internal link used in the navigation components to navigate the different routes/pages.
 * Handles active styling for desktop and mobile breakpoints.
 *
 * @param props - Props for NavigationLink
 */
const NavigationLink = (props: NavigationLinkProps) => {
  const linkBase = 'text-muted-foreground px-3 py-2 transition';
  const desktopLinkActive =
    'data-[status=active]:md:text-foreground data-[status=active]:md:font-medium text-sm hover:text-foreground';
  const mobileLinkActive =
    'data-[status=active]:max-md:bg-accent data-[status=active]:max-md:text-accent-foreground text-base';

  return (
    <Link
      {...props}
      className={clsx(props.className, linkBase, desktopLinkActive, mobileLinkActive)}
    />
  );
};
export { NavigationLink };
