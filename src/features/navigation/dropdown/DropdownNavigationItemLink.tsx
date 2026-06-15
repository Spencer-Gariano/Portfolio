import { NavigationMenuLink } from '@/components/ui/NavigationMenu';
import { NavigationLink } from '../NavigationLink';

export interface IDropdownNavigationItemLinkProps {
  name: string;
  link: string;
}

const DropdownNavigationItemLink = (props: IDropdownNavigationItemLinkProps) => {
  return (
    <NavigationMenuLink asChild>
      <NavigationLink
        className='hover:bg-muted block w-full rounded px-2 py-1 text-sm'
        to={props.link}
      >
        {props.name}
      </NavigationLink>
    </NavigationMenuLink>
  );
};

export { DropdownNavigationItemLink };
