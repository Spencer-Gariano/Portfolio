import { NavigationMenu, NavigationMenuList } from '@/components/ui/NavigationMenu';
import { NavigationItemLink } from './NavigationItemLink';

const NavigationBar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationItemLink name={'Home'} link={'/'} />
        <NavigationItemLink name={'About'} link={'/about'} />
        <NavigationItemLink name={'Projects'} link={'/projects'} />
        <NavigationItemLink name={'Playground'} link={'/playground'} />
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export { NavigationBar };
