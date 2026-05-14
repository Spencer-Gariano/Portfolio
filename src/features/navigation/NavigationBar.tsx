import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/NavigationMenu';
import { NavigationItemLink } from './NavigationItemLink';
import { MobileNavigation } from './mobile/MobileNavigation';
import { navigationArray } from './Navigation';
import { DropdownNavigationMenu } from './dropdown/DropdownNavigationMenu';

const NavigationBar = () => {
  return (
    <div>
      <NavigationMenu className='hidden md:flex'>
        <NavigationMenuList>
          {navigationArray.map((navItem) => {
            return navItem.children?.length ? (
              <DropdownNavigationMenu key={navItem.to} navigationItem={navItem} />
            ) : (
              <NavigationMenuItem key={navItem.to}>
                <NavigationItemLink name={navItem.label} link={navItem.to!} />
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
      <MobileNavigation />
    </div>
  );
};

export { NavigationBar };
