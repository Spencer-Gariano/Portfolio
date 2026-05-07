import { Link } from '@tanstack/react-router';
import type { ComponentProps } from 'react';

export type NavigationLinkProps = ComponentProps<typeof Link>;

const NavigationLink = (props: NavigationLinkProps) => {
  const linkBase = 'text-muted-foreground px-3 py-2 transition';
  const desktopLinkActive =
    'data-[status=active]:md:text-foreground data-[status=active]:md:font-medium text-sm hover:text-foreground';
  const mobileLinkActive =
    'data-[status=active]:max-md:bg-accent data-[status=active]:max-md:text-accent-foreground text-base';

  return <Link {...props} className={`${linkBase} ${desktopLinkActive} ${mobileLinkActive}`} />;
};
export { NavigationLink };
