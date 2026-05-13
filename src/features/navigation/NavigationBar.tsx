import { NavigationMenu, NavigationMenuList } from '@/components/ui/NavigationMenu';
import { NavigationItemLink } from './NavigationItemLink';
import { MobileNavigation } from './MobileNavigation';
import { navigationArray } from './Navigation';

const NavigationBar = () => {
  return (
    <div>
      <NavigationMenu className='hidden md:flex'>
        <NavigationMenuList>
          {navigationArray.map((navItem) => (
            <NavigationItemLink key={navItem.to} name={navItem.label} link={navItem.to!} />
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <MobileNavigation />
    </div>
  );
};

export { NavigationBar };
