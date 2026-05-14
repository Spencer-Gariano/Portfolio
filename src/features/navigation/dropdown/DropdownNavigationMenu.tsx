import type { INavigationItem } from '../types_tmp.ts';
import { NavigationMenuContent, NavigationMenuItem } from '@/components/ui/NavigationMenu';
import { DropdownNavigationItemLink } from './DropdownNavigationItemLink.tsx';
import { NavigationDropdownComboLink } from './NavigationDropdownComboLink.tsx';

export interface IDropdownNavigationMenuProps {
  navigationItem: INavigationItem;
}

const DropdownNavigationMenu = (props: IDropdownNavigationMenuProps) => {
  return (
    <NavigationMenuItem>
      <NavigationDropdownComboLink navigationItem={props.navigationItem} />
      <NavigationMenuContent>
        <div className='min-w-55 space-y-1 p-2'>
          <nav className='space-y-1 p-1'>
            {props.navigationItem.children?.map(
              (item) =>
                item.to && (
                  <DropdownNavigationItemLink key={item.to} name={item.label} link={item.to} />
                ),
            )}
          </nav>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export { DropdownNavigationMenu };
