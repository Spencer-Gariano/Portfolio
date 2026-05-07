import { NavigationMenu, NavigationMenuList } from '@/components/ui/NavigationMenu';
import { NavigationItemLink } from './NavigationItemLink';
import { routes } from '@/application/routes/Routes';
import { MobileNavigation } from './MobileNavigation';
import { useMemo } from 'react';

const NavigationBar = () => {
  const routesArray = useMemo(() => Object.values(routes), [routes]);

  return (
    <div>
      <NavigationMenu className='hidden md:flex'>
        <NavigationMenuList>
          {routesArray.map((route) => (
            <NavigationItemLink key={route.path} name={route.title} link={route.path} />
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <MobileNavigation />
    </div>
  );
};

export { NavigationBar };
